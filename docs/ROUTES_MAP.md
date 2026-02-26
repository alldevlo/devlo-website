# ROUTES_MAP

## Scope
Phase 0 routing map generated from current App Router files in `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app`.

## What I found
- Router type: **App Router** (no active `pages/` router usage detected for primary site pages)
- Dynamic case study routes exist for both canonical and legacy patterns:
  - `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/etudes-de-cas/[slug]/page.tsx`
  - `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/resultats/[slug]/page.tsx`

## Current route files (`src/app/**/page.tsx`)
- `src/app/academy-notre-appel/page.tsx`
- `src/app/academy/page.tsx`
- `src/app/blog-list/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/conditions-utilisation-academie/page.tsx`
- `src/app/conditions/page.tsx`
- `src/app/consultation/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/etudes-de-cas/[slug]/page.tsx`
- `src/app/etudes-de-cas/page.tsx`
- `src/app/formation-prospection-b2b/page.tsx`
- `src/app/merci-prise-de-contact/page.tsx`
- `src/app/merci/page.tsx`
- `src/app/modele/page.tsx`
- `src/app/notrerendez-vous/page.tsx`
- `src/app/page.tsx`
- `src/app/politique-confidentialite/page.tsx`
- `src/app/resultats-cas-etudes/page.tsx`
- `src/app/resultats/[slug]/page.tsx`
- `src/app/resultats/page.tsx`
- `src/app/telephone/page.tsx`
- `src/app/terms/page.tsx`

## Key route groups (current repo truth)
### Homepage / primary entry
- `/` → `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/page.tsx`

### Case studies
- `/etudes-de-cas` → list page
- `/etudes-de-cas/[slug]` → canonical case study pages
- `/resultats` and `/resultats/[slug]` → legacy routes (redirect / compatibility layer)
- `/resultats-cas-etudes` → legacy listing route (redirect target strategy in `next.config.mjs`)

### Academy / blog / content pages
- `/academy`
- `/academy-notre-appel`
- `/formation-prospection-b2b`
- `/blog`
- `/blog-list`
- `/modele`
- `/terms`
- `/conditions`
- `/conditions-utilisation-academie`
- `/politique-confidentialite`

### Contact / conversion pages
- `/consultation`
- `/contact`
- `/merci`
- `/merci-prise-de-contact`
- `/notrerendez-vous`
- `/telephone`

## Where route content comes from (data/content map)
- Home + case-study listing card content: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/content/masterfile.fr.ts`
- Detailed case study content: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/case-studies.data.json`
- Case study typed helpers / normalization: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/case-studies.ts`

## Likely broken / risky
- Duplicate legacy/canonical route surfaces increase risk of hidden regressions if content mapping diverges.
- Dynamic metadata in `/etudes-de-cas/[slug]` depends on both `caseStudiesCards` and detailed data fallback; changes to either can affect SEO output.
- Legacy `/resultats/*` route behavior relies on redirect ordering in `next.config.mjs` and should not be changed without tests.

## What to do next (Phase 1/2/3 guidance)
- Phase 1: asset path fixes should prioritize homepage and shared components only (no route refactor).
- Phase 2: UI polish should leave route/slugs untouched.
- Phase 3: verify redirect behavior and canonical metadata with route-based checks (no blind rewrite).
