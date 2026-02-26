# REPO_BASELINE (Phase 0)

Generated: 2026-02-25
Repo: /Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next

## 1) Router type
- Router in use: **Next.js App Router**
- Evidence:
  - `src/app/layout.tsx`
  - `src/app/page.tsx`
  - `src/app/etudes-de-cas/[slug]/page.tsx`
- `src/pages/` is not used as the active router entrypoint in this repo baseline.

## 2) Key implementation file paths (current repo state)

### Header / Navigation
- `src/components/layout/site-header.tsx` (main fixed header + mobile menu + mobile sticky CTA)
- Primary nav content source used by header:
  - `src/content/masterfile.fr.ts` (`mainNav`)

### Homepage component(s)
- App route entry: `src/app/page.tsx`
- Main homepage renderer: `src/components/pages/home-page.tsx`
- Homepage content source (active): `src/content/masterfile.fr.ts`
- Additional/legacy content source still present in repo (not current `/` entry): `src/content/home.fr.ts`
- Legacy/alternate assets registry also present: `src/lib/brand-assets.ts`

### Footer
- `src/components/layout/site-footer.tsx`
- Footer content source (active): `src/content/masterfile.fr.ts` (`footerContent`)

### Content sources (case studies / home / navigation)
- `src/content/masterfile.fr.ts` (home content, nav, footer, listings, SEO copy)
- `src/content/home.fr.ts` (legacy/alternate FR content dataset still referenced by some older pages/components)
- `src/lib/case-studies.data.json` (detailed case study content)
- `src/lib/case-studies.ts` (case study card/index model)

### Redirects config
- Next.js redirects: `next.config.mjs` (`redirects()`)
- Case-study redirect mapping (TS wrapper): `src/lib/case-study-slug-redirects.ts`
- Case-study redirect mapping source (shared module imported by Next config): `src/lib/case-study-slug-redirects.shared.mjs`

### SEO metadata / schema
- Global metadata + organization JSON-LD injection:
  - `src/app/layout.tsx`
- Reusable JSON-LD component:
  - `src/components/seo/json-ld.tsx`
- Homepage metadata:
  - `src/app/page.tsx`
- Case-study page metadata:
  - `src/app/etudes-de-cas/[slug]/page.tsx`
- Robots:
  - `src/app/robots.ts`
- Sitemap:
  - `src/app/sitemap.ts`
- Site config used by metadata/robots/sitemap:
  - `src/lib/site.ts`

## 3) Where image paths are defined (current repo state)

### Active homepage/shared UI image paths (primary source of truth)
- `src/content/masterfile.fr.ts`
  - nav logo (`mainNav.logo`)
  - home hero poster, logo rails, testimonial photos, case-study cards banners/logos
  - footer logos/badges

### Direct image usage in active shared/home components
- `src/components/layout/site-header.tsx` (uses `mainNav.logo` and one in-menu logo image)
- `src/components/layout/site-footer.tsx` (devlo logo + footer badges from `footerContent`)
- `src/components/pages/home-page.tsx` (dynamic `/images/${name}` for client rail + component-level image rendering)

### Additional image path sources still present in repo (not necessarily active `/` path)
- `src/content/home.fr.ts`
- `src/lib/brand-assets.ts`

## 4) Where redirects are defined
- Canonical redirect logic lives in `next.config.mjs` (`redirects()`)
- Case study legacy -> canonical slug mapping is centralized in:
  - `src/lib/case-study-slug-redirects.shared.mjs`
- TS helper wrapper for app/runtime use:
  - `src/lib/case-study-slug-redirects.ts`

## 5) Observed baseline image-path risk areas (from non-mutating scan)
- Many homepage/shared image refs are valid `/images/...` flat paths.
- Some active homepage/shared refs in `src/content/masterfile.fr.ts` still point to paths outside the flat rule (e.g. `/images/case-studies/...`, `/images/home/...`) or filenames not found at `public/images/<file>`.
- This is the target of Phase 1 (minimal fixes only, homepage + shared components).

## 6) Phase 1 planned touch set (exact files)
Planned Phase 1 edits (minimal scope):
1. `src/content/masterfile.fr.ts` — fix broken homepage/shared image references to valid flat `/images/...` paths only
2. `docs/ASSET_FIX_REPORT.md` — record old path -> new path mappings + unresolved TODOs

No other files are planned for Phase 1 unless a repo-based validation proves a component-level fallback is required.
