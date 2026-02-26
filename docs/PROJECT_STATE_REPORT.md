# PROJECT_STATE_REPORT

## Scope and method
- Phase 0 baseline (read-only) completed from the current repository state on disk in `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next`.
- No application code was modified in this phase.
- Only documentation artifacts are written in `docs/`.

## What I found (repo + tooling snapshot)
- Repository path: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next`
- Router type: **Next.js App Router** (`src/app/` exists and is active)
- Package manager: **npm** (`package-lock.json` present; scripts use `npm run ...`)
- Node version (current machine): `v25.2.1`
- npm version (current machine): `11.6.2`
- Next.js version (from `package.json`): `14.2.35`
- Current branch: `main`
- Git remote: `origin` (GitHub HTTPS)
- Vercel project link: `.vercel/` exists and project is linked locally

## Current repo truth (key implementation paths)
### Layout / shell
- Root layout: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/layout.tsx`
- Header/nav component: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/components/layout/site-header.tsx`
- Footer component: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/components/layout/site-footer.tsx`

### Homepage
- Homepage route: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/page.tsx`
- Homepage renderer: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/components/pages/home-page.tsx`

### Content/data sources
- Primary FR content source (homepage + case-study cards SEO content): `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/content/masterfile.fr.ts`
- Legacy/alternate home content source still present: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/content/home.fr.ts`
- Case study detailed data: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/case-studies.data.json`
- Case study typed model: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/case-studies.ts`
- Brand assets helper (contains legacy image paths): `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/brand-assets.ts`

### Redirects and migration mapping
- Redirect definitions: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/next.config.mjs`
- Case-study slug redirect mapping (runtime/shared): `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/case-study-slug-redirects.shared.mjs`
- Case-study slug redirect helper (TS): `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/case-study-slug-redirects.ts`

### SEO metadata / sitemap / robots / schema
- Global metadata + root JSON-LD injection: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/layout.tsx`
- Homepage metadata: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/page.tsx`
- Case study metadata (`generateMetadata`): `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/etudes-de-cas/[slug]/page.tsx`
- robots metadata route: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/robots.ts`
- sitemap metadata route: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/sitemap.ts`
- JSON-LD component: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/components/seo/json-ld.tsx`
- Site-level SEO constants: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/seo/site-config.ts`
- Site config (url/nav/footer values): `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/site.ts`

### Images (asset path definitions)
- Asset root (current repo state): `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/public/images/`
- Image references are currently defined across:
  - `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/content/masterfile.fr.ts`
  - `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/content/home.fr.ts`
  - `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/brand-assets.ts`
  - `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/case-studies.data.json`
  - some direct component refs in `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/components/*`

## Current baseline status (repo-tested)
- `npm run build`: **PASS** on current repo state
- Vercel local link state: `.vercel/` present and linked to `charles-8969s-projects/devlo-next`
- `vercel env ls`: no environment variables configured for this project (as reported by CLI)

## Likely broken / risky (repo-proven)
- Mixed image path conventions are still present (flat `/images/FILENAME` + nested `/images/home/...` and `/images/case-studies/...`).
- The permanent flat asset rule is **not yet enforced** by current repo state.
- Active homepage/shared content (`masterfile.fr.ts`) includes non-flat image refs and some flat refs likely missing from `public/images/` root.
- Redirects are extensive and grouped; any change here should be test-proven (risk of collisions/chains).
- `NEXT_PUBLIC_SITE_URL` is not used anywhere; canonical behavior relies on `siteConfig.url` and metadata route files.

## What to do next (Phase 1 proposal only; not executed here)
1. Inventory `public/images/` against all image refs (start with homepage + shared components).
2. Fix only homepage/shared broken refs with minimal path substitutions to valid `/images/FILENAME.ext` values.
3. Create `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/docs/ASSET_FIX_REPORT.md` (old -> new mapping + TODOs).
4. Run `npm run build`.
5. Deploy a Vercel Preview and request visual validation before any UI/SEO phase.
