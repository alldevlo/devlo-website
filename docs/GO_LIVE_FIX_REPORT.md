# GO LIVE Fix Report

Date: 2026-02-27

## Scope
This report maps the implemented fixes to the requested go-live SEO/performance priorities (P0/P1/P2) based on the current repository state.

## P0 — Critical SEO and crawlability fixes

### 1) Sitemap fixed (canonical-only, no legacy redirecting URLs)
- File: `scripts/fetch-lovalingo-sitemap.mjs`
- File generated: `public/sitemap.xml`
- Changes:
  - Replaced remote passthrough sitemap behavior with canonical sitemap generation from repository content.
  - Includes required key URLs: `/`, `/academy`, `/consultation`, `/conditions`, `/etudes-de-cas`.
  - Includes only canonical case-study slugs (legacy slugs are canonicalized via `resolveCaseStudyCanonicalSlug`).
  - Excludes legacy `/resultats/*` URLs from sitemap.
  - Uses env-based origin resolution with production hard target: `https://devlo.ch`.

### 2) Robots fixed (allow crawl + canonical sitemap)
- File: `src/app/robots.ts`
- Behavior:
  - `Allow: /`
  - no global disallow rule
  - sitemap points to `${siteConfig.url}/sitemap.xml`
  - production `siteConfig.url` resolves to `https://devlo.ch`

### 3) Canonical domain strategy enforced (production = devlo.ch)
- File: `src/lib/site.ts`
- Changes:
  - Production (`VERCEL_ENV=production`) always resolves to `https://devlo.ch`.
  - Preview/dev can resolve from `NEXT_PUBLIC_SITE_URL` or `VERCEL_URL`.
- Impact:
  - Canonical, `og:url`, hreflang alternates, and schema URLs consistently derive from a single base.

### 4) Canonicalized Lovalingo manifest pages
- File: `src/app/.well-known/lovalingo.json/route.ts`
- Changes:
  - `pages` now dedupe and canonicalize case-study slugs.
  - Prevents legacy case-study paths from being exported for localization coverage.

### 5) OG/Twitter/schema URL consistency
- Files:
  - `src/lib/seo/metadata.ts`
  - `src/app/layout.tsx`
- Status:
  - `buildPageMetadata` sets canonical + OG + Twitter on indexable pages.
  - Homepage OG image remains `/images/devlo_OG_Banner.webp`.
  - Case-study pages keep case-specific OG images when available, with fallback to the default brand OG.
  - Global JSON-LD in layout provides Organization + LocalBusiness + Service.
  - FAQPage JSON-LD exists where FAQ content is present (home and academy).

### 6) Favicon/manifest wiring
- File: `src/app/layout.tsx`
- Status:
  - Icon links are configured and served from existing assets.
  - Web manifest linked via `/site.webmanifest`.

## P1 — Metadata quality normalization

### 1) Titles normalized to short, keyword-focused format
- Files:
  - `src/content/masterfile.fr.ts`
  - `src/app/etudes-de-cas/[slug]/page.tsx`
- Changes:
  - Home, academy, consultation titles shortened while preserving intent.
  - Case-study metadata title now generated from client name with controlled length.
  - Global title template remains `"%s | devlo"` in layout metadata.

### 2) Meta descriptions normalized to 120–160 chars
- Files:
  - `src/content/masterfile.fr.ts`
  - `src/app/etudes-de-cas/[slug]/page.tsx`
- Changes:
  - Long descriptions trimmed on key pages.
  - Too-short case-study descriptions expanded with a fallback sentence.
  - Dynamic description normalizer ensures usable SERP snippets.

## P2 — Technical checks and safe speed wins

### 1) Internal links on locale paths (/en, /de, /nl)
- Validation result:
  - Server-rendered HTML includes anchor links on `/en`, `/de`, `/nl` (38 anchors each in current build).
- Conclusion:
  - "0 internal links" from external crawlers is likely JS/rendering interpretation mismatch rather than missing anchors in source HTML.

### 2) HubSpot loading scope and behavior
- File: `src/components/ui/hubspot-form.tsx`
- Status:
  - HubSpot script is singleton and lazily loaded near viewport via IntersectionObserver.
  - HubSpot remains scoped to consultation + case-study templates, not homepage.

### 3) Analytics loading strategy
- File: `src/app/layout.tsx`
- Status:
  - GA4 script and init are non-blocking (`lazyOnload`) and loaded once globally.

### 4) Case-study LCP-safe improvements
- Files:
  - `src/components/pages/case-study-master-page.tsx`
  - `src/components/ui/fade-in-on-scroll.tsx`
- Changes:
  - Hero image `sizes` and quality tuned for mobile-first delivery.
  - Above-the-fold animation wrappers can render eagerly where needed to avoid delayed content paint.

## Redirect chain mitigation
- File: `next.config.mjs`
- Changes:
  - Added direct `/resultats/{legacy-slug}` -> `/etudes-de-cas/{canonical-slug}` redirects from shared slug map.
  - Updated specific EN/DE redirect destinations to final canonical endpoints to reduce chain risk.

## Validation evidence (local)

### Build
- Command: `npm run build`
- Result: PASS (Next.js production build completed)

### Sitemap
- Command: `curl -I http://localhost:4021/sitemap.xml`
- Result: `HTTP/1.1 200 OK`
- Command: count `<loc>` entries and required URL presence
- Result: `locCount = 22`, includes `/academy`, `/consultation`, and canonical case-study slugs.

### Robots
- Command: `curl http://localhost:4021/robots.txt`
- Result:
  - `User-Agent: *`
  - `Allow: /`
  - `Sitemap: https://devlo.ch/sitemap.xml`

### Canonical + OG checks (10 URLs)
- Result summary:
  - Canonical extracted as `https://devlo.ch/...` on all sampled pages.
  - `og:url` extracted as `https://devlo.ch/...` on all sampled pages.
  - `og:image` absolute URLs resolve on `https://devlo.ch/images/...`.
  - Canonical paths return `200` without redirect in local app checks.

### Hreflang sample checks
- Sampled: `/academy`, `/en/academy`, `/de/academy`
- Result: alternates present for `fr`, `en`, `de`, `nl` with `https://devlo.ch` base.

## Notes
- Build output still lists generated static paths for legacy aliases (`/resultats/*`, legacy case-study aliases). These remain as redirect compatibility pages and are intentionally excluded from sitemap.
- Historical docs/reports in `docs/` and `reports/` may still mention `devlo-agency.ch` as archived audit data; runtime SEO outputs are now aligned to `devlo.ch`.
