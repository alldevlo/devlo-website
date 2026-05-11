#!/usr/bin/env node

import { readFileSync } from "node:fs";

const headerPath = "src/components/layout/site-header.tsx";
const slugMapPath = "src/lib/i18n/slug-map.json";

const locales = ["fr", "en", "de", "nl"];
const headerSource = readFileSync(headerPath, "utf8");
const slugMap = JSON.parse(readFileSync(slugMapPath, "utf8"));

const navItemsMatch = headerSource.match(/const navItems = \[([\s\S]*?)\] as const;/);
if (!navItemsMatch) {
  console.error(`Could not find navItems in ${headerPath}`);
  process.exit(1);
}

const navItemsBlock = navItemsMatch[1];
const hardcodedInternalHrefs = [...navItemsBlock.matchAll(/key:\s*"([^"]+)"[\s\S]*?href:\s*["'](\/[^"']*)["']/g)];

if (hardcodedInternalHrefs.length > 0) {
  for (const match of hardcodedInternalHrefs) {
    console.error(`Header nav item "${match[1]}" uses hardcoded internal href "${match[2]}". Use toCurrentLocalePath(...) instead.`);
  }
  process.exit(1);
}

const expectedHeaderFrPaths = {
  agency: "/agence",
  caseStudies: "/etudes-de-cas",
  aiSalesOps: "/ai-sales-ops",
  services: "/services",
  insights: "/insights",
};

const exactPathAssertions = {
  insights: {
    fr: "/insights",
    en: "/en/insights",
    de: "/de/insights",
    nl: "/nl/insights",
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  const withSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withSlash.replace(/\/+$/, "");
}

function findEntryByFrPath(frPath) {
  const normalizedFrPath = normalizePath(frPath);
  for (const [pageId, entry] of Object.entries(slugMap)) {
    if (entry.fr && normalizePath(entry.fr) === normalizedFrPath) {
      return { pageId, entry };
    }
  }
  return null;
}

let failureCount = 0;

for (const [navKey, frPath] of Object.entries(expectedHeaderFrPaths)) {
  const entryMatch = findEntryByFrPath(frPath);
  if (!entryMatch) {
    failureCount += 1;
    console.error(`Missing slug-map entry for header nav item "${navKey}" (${frPath})`);
    continue;
  }

  for (const locale of locales) {
    const rawValue = entryMatch.entry[locale];
    if (!rawValue) {
      failureCount += 1;
      console.error(`Missing ${locale} href for "${navKey}" (${entryMatch.pageId})`);
      continue;
    }

    const actual = normalizePath(rawValue);
    const shouldHaveLocalePrefix = locale !== "fr";
    const hasExpectedLocalePrefix = shouldHaveLocalePrefix ? actual === `/${locale}` || actual.startsWith(`/${locale}/`) : true;
    const hasWrongLocalePrefix = locale === "fr" ? /^\/(en|de|nl)(\/|$)/.test(actual) : false;

    if (!hasExpectedLocalePrefix || hasWrongLocalePrefix) {
      failureCount += 1;
      console.error(`Wrong locale prefix for "${navKey}" ${locale} href (${entryMatch.pageId}): got ${actual}`);
    }

    const exactExpected = exactPathAssertions[navKey]?.[locale];
    if (exactExpected && actual !== exactExpected) {
      failureCount += 1;
      console.error(`Wrong exact ${locale} href for "${navKey}" (${entryMatch.pageId}): expected ${exactExpected}, got ${actual}`);
    }
  }
}

if (failureCount > 0) {
  console.error(`Header locale link check failed (${failureCount} issue${failureCount === 1 ? "" : "s"})`);
  process.exit(1);
}

console.log(`Header locale link check passed (${Object.keys(expectedHeaderFrPaths).length} nav items, ${locales.length} locales)`);
