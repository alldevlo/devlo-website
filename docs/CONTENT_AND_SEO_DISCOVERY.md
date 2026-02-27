# Content and SEO Discovery

## Router type
- **App Router** (Next.js `src/app/` structure).

## Key files (source of truth)
- Case study route:
  - `src/app/etudes-de-cas/[slug]/page.tsx`
- Shared case study template used by `/etudes-de-cas/[slug]`:
  - `src/components/pages/case-study-master-page.tsx`
- Case study detailed data source:
  - `src/lib/case-studies.data.json` (loaded by `src/lib/case-studies.ts`)
- Case study cards/listing source:
  - `src/content/masterfile.fr.ts` (`caseStudiesCards`)
- Slug canonicalization / legacy mapping:
  - `src/lib/case-study-slug-redirects.shared.mjs`
- Metadata helper:
  - `src/lib/seo/metadata.ts`
- Global metadata base + icons + OG/Twitter defaults:
  - `src/app/layout.tsx`

## Monizze and IDDI slug verification
- Monizze canonical slug currently used by detailed data:
  - `/etudes-de-cas/monizze-120-rendez-vous`
- Monizze legacy slug mapped to canonical:
  - `monizze-120-rendez-vous-qualifies-belgique -> monizze-120-rendez-vous`
- IDDI expected slug (card + route):
  - `/etudes-de-cas/iddi-generation-leads-biotech-pharma`
- Current issue found:
  - `iddi-generation-leads-biotech-pharma` is present in cards (`masterfile.fr.ts`) but missing in detailed dataset (`case-studies.data.json`), causing the page to render fallback/minimal content.

## SEO metadata generation flow
- Route-level metadata exists for core FR pages (`/`, `/consultation`, `/academy`, `/conditions`, `/etudes-de-cas`) via `buildPageMetadata`.
- Case-study metadata is generated in `src/app/etudes-de-cas/[slug]/page.tsx` using canonicalized slug + `buildPageMetadata`.

## Lovalingo integration (rendering hook)
- Lovalingo is injected globally from `src/app/layout.tsx` through:
  - `src/components/providers/lovalingo-next-provider.tsx` (`LovalingoProvider`)
- Header language switching uses Lovalingo runtime state:
  - `src/components/layout/header-lang-switcher.tsx` (`useLovalingo`)
- Locale path handling is done in middleware:
  - `src/middleware.ts` rewrites `/en|de|nl/...` to shared FR route rendering.
- Project manifest endpoint:
  - `src/app/.well-known/lovalingo.json/route.ts`
