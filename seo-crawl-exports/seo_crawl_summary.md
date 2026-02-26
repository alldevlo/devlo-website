# SEO Crawl Summary — devlo.ch

**Crawled:** 2026-02-26 15:58:21 UTC
**Crawler:** Devlo-Migration-Audit
**Base:** https://devlo.ch

---

## Stats

| Metric | Count |
|---|---|
| Total URLs crawled | 119 |
| HTML pages | 119 |
| 200 OK | 112 |
| 3xx Redirects | 7 |
| 4xx Errors | 0 |
| 5xx Errors | 0 |
| Network errors | 0 |

---

## SEO Issues

| Issue | Count | Action |
|---|---|---|
| Pages without `<title>` | 7 | Add title metadata |
| Pages without `<h1>` | 22 | Add H1 to page |
| Pages without canonical | 22 | Add `alternates.canonical` |
| Cross-page canonicals | 3 | Review consolidation |
| Pages with noindex | 15 | Expected if internal pages |

---

## Migration Highlights

| Language | HTML pages | Action |
|---|---|---|
| FR (root) | 41 | Preserve / map |
| EN (/en/) | 39 | Redirect to FR equivalents |
| DE (/de/) | 39 | Redirect to FR equivalents |
| FR case study (/resultats/*) | 12 | Map to /etudes-de-cas/[slug] |

---

## Key Recommendations

1. **EN/DE traffic** — 78 pages need 301 redirects to FR equivalents in `next.config.mjs`
2. **/resultats/* case studies** — 12 pages use long WP slugs; add specific 301s (wildcard alone creates 404s)
3. **Missing canonicals** — 22 pages without canonical tag; check the new Next.js site coverage
4. **4xx errors** — 0 URLs return errors; verify these are not indexed on devlo.ch

---

## Output Files

| File | Description |
|---|---|
| `sf-internal-html.csv` | 119 HTML pages |
| `sf-3xx.csv` | 7 redirects |
| `sf-4xx.csv` | 0 errors |
| `sf-canonicals.csv` | 119 canonical entries |
| `URL_MAPPING_DEVLO_MIGRATION_from_crawl.csv` | Migration mapping (fill in `new_url` column) |
