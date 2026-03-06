import type { MetadataRoute } from "next";

import { entriesByPageId, normalizePath } from "@/lib/i18n/slug-map";
import { siteConfig } from "@/lib/site";

function normalizeSitemapPath(path: string): string | null {
  const normalized = normalizePath(path);
  if (normalized.includes("/page/")) return null;

  if (normalized === "/resultats-cas-etudes") return "/etudes-de-cas";
  if (normalized === "/en/results_cas_studies") return "/en/etudes-de-cas";
  if (normalized === "/de/ergebnisse_fall_studien") return "/de/etudes-de-cas";
  if (normalized === "/nl/results_cas_studies") return "/nl/etudes-de-cas";

  const frCaseStudyLegacy = normalized.match(/^\/resultats\/([^/]+)$/);
  if (frCaseStudyLegacy) {
    return `/etudes-de-cas/${frCaseStudyLegacy[1]}`;
  }

  return normalized;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = new Set<string>();

  for (const [, entry] of entriesByPageId()) {
    for (const path of [entry.fr, entry.en, entry.de, entry.nl]) {
      if (!path) continue;
      const normalized = normalizeSitemapPath(path);
      if (!normalized) continue;
      urls.add(`${siteConfig.url}${normalized}`);
    }
  }

  return Array.from(urls)
    .sort((a, b) => a.localeCompare(b))
    .map((url) => ({
      url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: url === siteConfig.url ? 1 : 0.8,
    }));
}
