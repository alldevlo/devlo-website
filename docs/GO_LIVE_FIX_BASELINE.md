# GO LIVE Fix Baseline

Date: 2026-02-27

## 1) Router Type
- **App Router** (`src/app/*`).
- Shared shell/layout: `src/app/layout.tsx`.

## 2) Sitemap Implementation
- Build-time script: `scripts/fetch-lovalingo-sitemap.mjs`.
- Output file served at runtime: `public/sitemap.xml`.
- Current behavior: downloads Lovalingo CDN sitemap and writes it as-is.

### Current issues detected
- `public/sitemap.xml` contains many URLs on `https://devlo-agency.ch/...`.
- Sitemap includes locale variants and legacy case-study slugs that can redirect.
- Sitemap currently does not enforce canonical-only final URLs policy.

## 3) Robots Implementation
- Implemented via metadata route: `src/app/robots.ts`.
- Uses `siteConfig.url` from `src/lib/site.ts`.

### Current status
- Rules currently allow crawl (`Allow: /`, no `Disallow: /`).
- Sitemap line is generated from `siteConfig.url` and points to `/sitemap.xml`.

## 4) Metadata / Canonical / OG / Twitter / Schema
- Global metadata: `src/app/layout.tsx`.
- Shared page metadata builder: `src/lib/seo/metadata.ts`.
- Domain strategy: `src/lib/site.ts` (`VERCEL_ENV=production -> https://devlo.ch`, otherwise `NEXT_PUBLIC_SITE_URL` if set).
- JSON-LD global schema in layout: Organization + LocalBusiness (CH+US) + Service.
- Page-level FAQ JSON-LD on pages with FAQ (e.g. home, academy).

### Current status
- Canonical/OG/Twitter/hreflang are generated from shared metadata builder.
- Case-study pages canonicalize legacy slugs via `resolveCaseStudyCanonicalSlug`.
- Production canonical base already configured for `https://devlo.ch` in `src/lib/site.ts`.

## 5) Lovalingo Integration
- Provider wrapper: `src/components/providers/lovalingo-next-provider.tsx`.
- Mounted globally in `src/app/layout.tsx`.
- Public manifest route: `src/app/.well-known/lovalingo.json/route.ts`.
- Middleware locale rewrite: `src/middleware.ts` (`/en|/de|/nl/*` rewritten to shared routes).

### Current issues detected
- Lovalingo manifest `pages` list is built from `caseStudiesCards` slugs (includes legacy slugs), not canonicalized.

## 6) Analytics Implementation
- GA4 `gtag.js` loaded in `src/app/layout.tsx` via `next/script`.
- Current strategy in codebase: `lazyOnload`.
- No GTM duplicate detected in repo.

## 7) HubSpot Form Integration
- Shared component: `src/components/ui/hubspot-form.tsx`.
- Used only on:
  - `src/components/pages/consultation-master-page.tsx`
  - `src/components/pages/case-study-master-page.tsx`

### Current status
- Already scoped to consultation + case-study templates (not homepage).
- Script loading is singleton + viewport-gated (IntersectionObserver).

## 8) Redirect Config and Chain Risks
- Redirect table in `next.config.mjs`.

### Current issues detected
- Chain risk examples still present in config:
  - `/en/contact` -> `/consultation` (now direct in code)
  - `/de/ausbildung-prospektion-b2b` -> `/academy` (now direct in code)
  - `/resultats/:slug*` wildcard can still chain without explicit legacy-to-canonical entries.

## 9) Content Quality (titles/descriptions)
- SEO strings sourced in `src/content/masterfile.fr.ts` and dynamic case-study metadata in `src/app/etudes-de-cas/[slug]/page.tsx`.

### Current issues detected
- Several case-study metadata titles are long (>70 chars).
- Some descriptions are over 160 chars or too short depending on page/case-study fallback.
