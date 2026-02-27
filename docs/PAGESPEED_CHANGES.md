# PageSpeed Changes

Date: 2026-02-27

## Summary

Targeted optimizations were applied at shared/template level (no page-by-page manual edits) to reduce mobile LCP pressure, unused JS/CSS from third parties, and redirect chains.

## File-by-file changes

### `src/components/ui/hubspot-form.tsx`

- Replaced direct per-mount script injection with a **singleton loader** (`loadHubspotScript`) to avoid duplicate load attempts.
- Switched script URL to explicit HTTPS (`https://js-na2.hsforms.net/forms/embed/v2.js`).
- Added **IntersectionObserver** gating (`rootMargin: 500px`) so HubSpot only loads when form container is near viewport.
- Preserved existing form creation behavior (`window.hbspt.forms.create`) and loading placeholder.
- Added basic error fallback text for failed script load.

Impact:
- Consultation + case study pages no longer pay HubSpot JS/CSS cost immediately at first paint.
- Reduced unused JS/CSS and main-thread pressure before user reaches form sections.

### `src/app/layout.tsx`

- Changed GA/gtag `<Script>` strategy from `afterInteractive` to `lazyOnload`.
- Kept single global setup (no duplicate GTM/gtag additions).

Impact:
- Defers analytics script execution until after initial load, reducing contention with render-critical work.

### `src/components/ui/fade-in-on-scroll.tsx`

- Added `eager` prop to bypass motion wrapper for above-the-fold content where needed.

Impact:
- Allows selective removal of animation-driven first-render delay on LCP-critical blocks.

### `src/components/pages/case-study-master-page.tsx`

- Marked above-the-fold `FadeInOnScroll` blocks as `eager` (breadcrumb, H1, intro, CTA, metric chips, hero card wrapper).
- Reduced case-study hero image transfer pressure:
  - `quality` lowered from `82` to `74`.
  - refined `sizes` for mobile/tablet (`92vw/88vw` before desktop breakpoints).
- Updated fallback hero image (no-detailed-study branch) with explicit `sizes` + `quality={74}`.

Impact:
- Faster first meaningful paint on case-study pages and lower LCP render-delay risk from hidden-on-hydration animation.
- Smaller hero image payload on mobile.

### `src/components/layout/site-header.tsx`

- Removed `priority` from header logo image.

Impact:
- Prevents non-LCP logo preload from competing with case-study hero image on initial navigation.

### `next.config.mjs`

- Added direct redirects for legacy result slugs:
  - `/resultats/<legacy-slug>` -> `/etudes-de-cas/<canonical-slug>` (plus trailing-slash variant).
- Removed chain:
  - `/en/contact` now redirects directly to `/consultation`.
- Removed chain:
  - `/de/ausbildung-prospektion-b2b` now redirects directly to `/academy`.

Impact:
- Fewer multi-hop redirects for crawlers/users, improving crawl efficiency and user-perceived speed.

## Third-party scripts status

- HubSpot: now delayed and singleton-loaded near viewport.
- Google Analytics (gtag): still enabled globally, now lazy loaded.
- Lovalingo: kept global for translation integrity; remains client-side provider in shared layout.

## Templates/pages that benefit

- All case study pages (`/etudes-de-cas/[slug]`) including localized path variants sharing same template/JS.
- Consultation page (`/consultation`) for delayed HubSpot load.
- Any route using legacy `/resultats/*`, `/en/contact*`, `/de/ausbildung-prospektion-b2b*` redirects.

## Known tradeoffs

- HubSpot forms now initialize when near viewport; this slightly delays form readiness if user jumps immediately to form anchor from top.
- Analytics events may start slightly later in page lifecycle due `lazyOnload`.

## Validation notes

- Build: `npm run build` passes.
- Vercel Preview deployment created.
- Preview is protected by Vercel authentication in this project, so direct unauthenticated HTTP checks return `401 Authentication Required`.
- Shared-level behavior was still validated on local production server (`next start`) across:
  - FR: `/etudes-de-cas/monizze-120-rendez-vous`
  - EN: `/en/etudes-de-cas/monizze-120-rendez-vous`
  - DE: `/de/etudes-de-cas/monizze-120-rendez-vous`
- The same template output is used for FR/EN/DE sample case-study URLs, and the optimized hero image quality (`q=74`) is present on all three.
