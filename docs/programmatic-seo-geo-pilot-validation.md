# Programmatic SEO and GEO Publication Validation

Date: 2026-05-10
Branch: `feat/programmatic-seo-geo-pilot`
Production deploy: approved by Charles on 2026-05-10
Sitemap publication: approved by Charles on 2026-05-10

## Published URL Set

The pilot was expanded into 27 service-location cells across 4 locales, for 108 localized URLs.

Markets:

- Switzerland: Geneva, Lausanne, Zurich, Basel, Bern, Zug, Winterthur, Lugano, St. Gallen, Switzerland.
- France: Paris, Lyon, Marseille.
- DACH and Europe: Munich, Berlin, Hamburg, Frankfurt, Vienna, Amsterdam, London, Brussels, Milan, Madrid, Barcelona, Dublin, Stockholm, Copenhagen.

URL patterns:

- French: `/agence-prospection-b2b-{city}`
- English: `/en/b2b-prospecting-agency-{city}`
- German: `/de/b2b-prospecting-agentur-{city}`
- Dutch: `/nl/b2b-prospectie-bureau-{city}`

## Publication Controls

- Pages are indexable and included in the generated sitemap.
- The pages use a category-guide frame, not copied competitor-list content.
- No favicon, icon or apple-icon asset was modified.
- `robots.txt`, `llms.txt`, deploy config and analytics code were not modified.
- `sitemap.ts` was updated only to include the approved programmatic SEO routes.

## Automated Validation

Commands run:

```bash
npm run lint
npm run build
npm run check:slug-map-navigation
npm run check:hadoseo-metadata
npm run check:seo-quality -- http://localhost:3001 --limit=80 --json
```

Results:

- `npm run lint`: passed with 13 existing warnings, 0 errors.
- `npm run build`: passed.
- `check:slug-map-navigation`: passed, 100 entries.
- `check:hadoseo-metadata`: passed, 34 routes.
- `check:seo-quality`: passed on first 80 sitemap URLs, 0 errors, 0 warnings.

Custom rendered-page checks:

- 108 programmatic URLs discovered in local sitemap.
- 108 returned HTTP 200.
- 108 had no `noindex`.
- 108 had exactly one H1.
- 108 had hreflang alternates.
- 108 had JSON-LD.
- French rendered text passed the targeted accent regression check for prior problem terms such as `Genève`, `qualifiés`, `décideurs`, `vérifier`, `références`, `générique`, `données` and `français`.

## SalesCaptain Pattern Backtest

Adopted:

- Service-location URL matrix.
- Intent-led titles and H1s.
- Local proof and market-context sections.
- Selection criteria table.
- FAQ blocks.
- Internal links to service, location and consultation pages.
- Sitemap inclusion for indexable pages.

Rejected:

- Copying SalesCaptain text.
- Ranking competitors as "best agencies" without legal and editorial review.
- Thin city swaps without local sector signals.

## Remaining Measurement Work

- Track GSC impressions, CTR and average position by URL.
- Track GA4 sessions and consultation conversions by URL.
- Sample AI answer citations for target queries after pages are crawled.
- Rewrite or remove weak cells after a 30-day measurement window.
