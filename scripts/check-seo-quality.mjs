#!/usr/bin/env node

import * as cheerio from "cheerio";

const DEFAULT_BASE_URL = "https://devlo.ch";
const SITEMAP_PATH = "/sitemap.xml";
const TIMEOUT_MS = 15000;
const USER_AGENT = "Devlo-SEO-Quality-Check/1.0 (+https://devlo.ch)";

const args = process.argv.slice(2);
const baseUrl = normalizeBase(
  process.env.SEO_QUALITY_BASE_URL ??
    args.find((arg) => !arg.startsWith("--")) ??
    DEFAULT_BASE_URL,
);
const failOnWarnings = args.includes("--fail-on-warnings");
const jsonOutput = args.includes("--json");
const limitArg = args.find((arg) => arg.startsWith("--limit="));
const limit = limitArg ? Number.parseInt(limitArg.split("=")[1] ?? "", 10) : 0;

const priorityPaths = new Set([
  "/",
  "/en",
  "/de",
  "/nl",
  "/consultation",
  "/en/consultation",
  "/de/beratung",
  "/nl/adviesgesprek",
  "/services",
  "/gtm-engineering-agency",
  "/en/gtm-engineering-agency",
  "/de/gtm-engineering-agentur",
  "/nl/gtm-engineering-bureau",
  "/ai-sales-ops",
  "/prospection-commerciale-suisse",
  "/insights/buying-signals",
  "/blog/cold-email-b2b-guide-complet",
]);

function normalizeBase(value) {
  return String(value).replace(/\/+$/, "");
}

function withBase(url) {
  const source = new URL(url);
  const target = new URL(baseUrl);
  target.pathname = source.pathname;
  target.search = source.search;
  target.hash = "";
  return target.href;
}

async function fetchText(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });
    const body = await response.text();
    return { ok: response.ok, status: response.status, body };
  } finally {
    clearTimeout(timeout);
  }
}

function extractSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)]
    .map((match) => match[1].trim())
    .filter((url) => url.startsWith("https://devlo.ch"));
}

function parseSchemaTypes($) {
  const types = [];
  $('script[type="application/ld+json"]').each((_, element) => {
    const raw = $(element).text().trim();
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw);
      const nodes = Array.isArray(parsed)
        ? parsed
        : Array.isArray(parsed?.["@graph"])
          ? parsed["@graph"]
          : [parsed];

      for (const node of nodes) {
        const type = node?.["@type"];
        if (Array.isArray(type)) types.push(...type);
        else if (type) types.push(type);
      }
    } catch {
      types.push("INVALID_JSON_LD");
    }
  });
  return types;
}

function hasLocalizedDemoLink($) {
  return $("a[href]")
    .toArray()
    .some((element) => {
      const href = $(element).attr("href") ?? "";
      return /(^|\/)(consultation|beratung|adviesgesprek)(\/|$|\?)/.test(href);
    });
}

function hasFreshnessSignal($, schemaTypes) {
  const text = $("body").text().replace(/\s+/g, " ");
  if (/mis a jour|mis à jour|last updated|updated on|zuletzt aktualisiert|bijgewerkt/i.test(text)) {
    return true;
  }

  let hasDateModified = false;
  $('script[type="application/ld+json"]').each((_, element) => {
    try {
      const raw = $(element).text().trim();
      const parsed = JSON.parse(raw);
      hasDateModified = JSON.stringify(parsed).includes("dateModified") || hasDateModified;
    } catch {}
  });

  return hasDateModified && schemaTypes.some((type) => /Article|BlogPosting/i.test(type));
}

function analyzePage(url, status, html) {
  const $ = cheerio.load(html);
  const title = $("title").first().text().trim();
  const description = $('meta[name="description"]').attr("content")?.trim() ?? "";
  const h1Count = $("h1").length;
  const canonical = $('link[rel="canonical"]').attr("href")?.trim() ?? "";
  const hreflangCount = $('link[rel="alternate"][hreflang]').length;
  const schemaTypes = parseSchemaTypes($);
  const path = new URL(url).pathname.replace(/\/+$/, "") || "/";
  const isPriority = priorityPaths.has(path);
  const hasTable = $("table").length > 0;
  const hasDemoLink = hasLocalizedDemoLink($);
  const hasFreshness = hasFreshnessSignal($, schemaTypes);

  const errors = [];
  const warnings = [];

  if (status !== 200) errors.push(`status ${status}`);
  if (!title) errors.push("missing title");
  if (!description) errors.push("missing description");
  if (h1Count !== 1) errors.push(`expected 1 h1, found ${h1Count}`);
  if (!canonical) errors.push("missing canonical");
  if (hreflangCount === 0) errors.push("missing hreflang");
  if (schemaTypes.length === 0) errors.push("missing JSON-LD");
  if (schemaTypes.includes("INVALID_JSON_LD")) errors.push("invalid JSON-LD");

  if (title && (title.length < 35 || title.length > 65)) {
    warnings.push(`title length ${title.length}`);
  }
  if (description && (description.length < 120 || description.length > 160)) {
    warnings.push(`description length ${description.length}`);
  }
  if (isPriority && !hasTable) warnings.push("priority page has no table");
  if (isPriority && !hasDemoLink) warnings.push("priority page has no demo CTA link");
  if ((path.includes("/blog/") || path.includes("/insights/")) && !hasFreshness) {
    warnings.push("article/insight has no freshness signal");
  }

  return {
    url,
    path,
    status,
    titleLength: title.length,
    descriptionLength: description.length,
    h1Count,
    hreflangCount,
    schemaTypes,
    hasTable,
    hasDemoLink,
    hasFreshness,
    errors,
    warnings,
  };
}

async function main() {
  const sitemapUrl = `${baseUrl}${SITEMAP_PATH}`;
  const sitemap = await fetchText(sitemapUrl);
  if (!sitemap.ok) {
    throw new Error(`Could not fetch sitemap ${sitemapUrl}: ${sitemap.status}`);
  }

  const sitemapUrls = extractSitemapUrls(sitemap.body).map(withBase);
  const urls = limit > 0 ? sitemapUrls.slice(0, limit) : sitemapUrls;
  const results = [];

  for (const [index, url] of urls.entries()) {
    if (!jsonOutput) {
      process.stdout.write(`Checking ${index + 1}/${urls.length}: ${new URL(url).pathname.padEnd(70).slice(0, 70)}\r`);
    }

    try {
      const page = await fetchText(url);
      results.push(analyzePage(url, page.status, page.body));
    } catch (error) {
      results.push({
        url,
        path: new URL(url).pathname,
        status: 0,
        errors: [error instanceof Error ? error.message : "fetch failed"],
        warnings: [],
      });
    }
  }

  const pagesWithErrors = results.filter((result) => result.errors.length > 0);
  const pagesWithWarnings = results.filter((result) => result.warnings.length > 0);
  const warningCount = results.reduce((count, result) => count + result.warnings.length, 0);
  const errorCount = results.reduce((count, result) => count + result.errors.length, 0);

  const summary = {
    baseUrl,
    checked: results.length,
    pagesWithErrors: pagesWithErrors.length,
    pagesWithWarnings: pagesWithWarnings.length,
    errorCount,
    warningCount,
  };

  if (jsonOutput) {
    console.log(JSON.stringify({ summary, results }, null, 2));
  } else {
    console.log("\nSEO quality check summary");
    console.table(summary);

    if (pagesWithErrors.length > 0) {
      console.log("\nErrors");
      for (const result of pagesWithErrors.slice(0, 50)) {
        console.log(`- ${result.path}: ${result.errors.join("; ")}`);
      }
    }

    if (pagesWithWarnings.length > 0) {
      console.log("\nWarnings");
      for (const result of pagesWithWarnings.slice(0, 50)) {
        console.log(`- ${result.path}: ${result.warnings.join("; ")}`);
      }
    }
  }

  if (errorCount > 0 || (failOnWarnings && warningCount > 0)) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
