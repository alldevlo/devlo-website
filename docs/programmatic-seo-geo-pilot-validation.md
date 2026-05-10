# Programmatic SEO and GEO Pilot Validation

Date: 2026-05-10
Branch: `feat/programmatic-seo-geo-pilot`
Production deploy: not performed
Sitemap publication: not performed

## Pilot URLs

Five pilot cells were generated in four locales each:

- `/agence-prospection-b2b-geneve`
- `/en/b2b-prospecting-agency-geneva`
- `/de/b2b-prospecting-agentur-genf`
- `/nl/b2b-prospectie-bureau-geneve`
- `/agence-prospection-b2b-lausanne`
- `/en/b2b-prospecting-agency-lausanne`
- `/de/b2b-prospecting-agentur-lausanne`
- `/nl/b2b-prospectie-bureau-lausanne`
- `/agence-prospection-b2b-zurich`
- `/en/b2b-outbound-agency-zurich`
- `/de/b2b-outbound-agentur-zuerich`
- `/nl/b2b-outbound-bureau-zurich`
- `/agence-outbound-b2b-suisse`
- `/en/b2b-outbound-agency-switzerland`
- `/de/b2b-outbound-agentur-schweiz`
- `/nl/b2b-outbound-bureau-zwitserland`
- `/agence-prospection-b2b-paris`
- `/en/b2b-outbound-agency-paris`
- `/de/b2b-outbound-agentur-paris`
- `/nl/b2b-outbound-bureau-parijs`

## Safety Controls

- All pilot pages return `robots: noindex, follow`.
- Pilot page IDs are prefixed with `page:` in `slug-map.json`, so `src/app/sitemap.ts` skips them.
- Local sitemap validation found zero pilot URL leaks.
- No favicon, icon or apple-icon asset was modified.
- No `robots.ts`, `sitemap.ts`, `public/llms.txt`, deploy config or analytics code was modified.

## Automated Validation

Commands run:

```bash
npm run lint
npm run build
npm run check:slug-map-navigation
npm run check:hadoseo-metadata
npm run check:seo-quality -- http://localhost:3000 --limit=40 --json
```

Results:

- `npm run lint`: passed with 13 existing warnings, 0 errors.
- `npm run build`: passed.
- `check:slug-map-navigation`: passed, 100 entries.
- `check:hadoseo-metadata`: passed, 34 routes.
- `check:seo-quality`: passed on first 40 sitemap URLs, 0 errors, 0 warnings.

Custom pilot checks:

- 20 pilot URLs checked.
- 20 returned HTTP 200.
- 20 had `noindex, follow`.
- 20 had exactly one H1.
- 20 had 5 hreflang alternates.
- 20 had parseable JSON-LD.
- 0 pilot URLs appeared in local sitemap.
- 188 internal hrefs discovered from pilot pages.
- 0 internal hrefs returned 4xx or 5xx.

## Manual Review Notes

The pilot deliberately avoids "best agencies" rankings and competitor listicles. It uses a first-party service-location guide frame with:

- direct answer block;
- proof points;
- local signals;
- criteria table;
- market notes;
- related internal links;
- FAQ;
- `Article`, `FAQPage`, `BreadcrumbList` and `Service` JSON-LD.

## Remaining Gates Before Public Indexation

- Decide whether these pages should remain first-party guides or become legally reviewed market comparison pages.
- Run capped DataForSEO keyword validation if approved by the CFO gate.
- Review copy quality in each locale with a human or locale-specific reviewer.
- Decide whether to add pages to sitemap and remove `noindex`.
- Production deploy only after final approval.

