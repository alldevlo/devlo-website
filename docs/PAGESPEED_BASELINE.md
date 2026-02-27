# PageSpeed Baseline (Pre-change)

Date: 2026-02-27

## 1) Router type

- Router: **Next.js App Router** (`src/app/*`)
- Shared shell: `src/app/layout.tsx`

## 2) Third-party script injection points

### Google Analytics / gtag

- Injected globally in `src/app/layout.tsx` using `next/script`:
  - `https://www.googletagmanager.com/gtag/js?id=...`
  - inline `gtag('config', ...)`
- Current strategy: `afterInteractive`
- Scope: **all pages**

### HubSpot forms

- Loader implemented in `src/components/ui/hubspot-form.tsx`
  - injects `//js-na2.hsforms.net/forms/embed/v2.js` via `document.createElement('script')`
- Form component is mounted in:
  - `src/components/pages/consultation-master-page.tsx`
  - `src/components/pages/case-study-master-page.tsx`
- Current behavior:
  - script loading starts **as soon as component mounts** (not viewport-gated)
  - possible duplicated load attempts when multiple form instances mount before `window.hbspt` is ready

### Lovalingo

- Injected globally through provider in layout:
  - `src/app/layout.tsx` -> `LovalingoNextProvider`
  - `src/components/providers/lovalingo-next-provider.tsx`
- Scope: **all pages**
- No explicit custom script strategy from app code; handled by package internals.

## 3) Potential duplicate / heavy JS findings

- HubSpot loader is component-local and not singleton-managed.
- gtag appears configured once in root layout (no duplicate GTM/gtag found in repo).
- `framer-motion` is used in shared header (`src/components/layout/site-header.tsx`) and fade wrapper (`src/components/ui/fade-in-on-scroll.tsx`), increasing shared JS cost.

## 4) Large-image / LCP-sensitive templates

### Case study template

- File: `src/components/pages/case-study-master-page.tsx`
- Above-the-fold hero image:
  - `<Image fill priority ... quality={82} sizes="(min-width: 1280px) 520px, (min-width: 1024px) 42vw, 100vw" />`
- Header logo (`src/components/layout/site-header.tsx`) is also `priority`, creating another high-priority image preload on all pages.

## 5) Redirect-chain risks (next.config)

From `next.config.mjs`:

- `"/en/contact" -> "/contact" -> "/consultation"` (chain)
- `"/de/ausbildung-prospektion-b2b" -> "/formation-prospection-b2b" -> "/academy"` (chain)
- Generic `"/resultats/:slug*" -> "/etudes-de-cas/:slug*"` can chain when target slug is legacy and then hits case-study canonical redirect.

## 6) CSS notes

- Global CSS is in `src/app/globals.css`.
- HubSpot styles are loaded via third-party script runtime (`hsappstatic`) only when script executes; currently tied to immediate form mount on relevant pages.
