# SEO_MIGRATION_STATE

## Scope
Read-only Phase 0 baseline of SEO + migration mechanisms in the current repo state.

## What I found (file locations)
### Redirects
- Main redirect config: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/next.config.mjs`
- Case-study slug redirect mapping: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/case-study-slug-redirects.shared.mjs`
- Case-study slug canonicalization helper: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/case-study-slug-redirects.ts`

### Metadata (Next Metadata API)
- Global metadata base and defaults: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/layout.tsx`
- Homepage metadata: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/page.tsx`
- Case-study dynamic metadata: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/etudes-de-cas/[slug]/page.tsx`
- Additional page metadata examples:
  - `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/academy/page.tsx`
  - `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/consultation/page.tsx`
  - `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/etudes-de-cas/page.tsx`

### robots / sitemap
- `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/robots.ts`
- `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/sitemap.ts`

### JSON-LD / schema
- `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/components/seo/json-ld.tsx`
- Root layout injects Organization JSON-LD globally in `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/app/layout.tsx`
- Site-level SEO constants and organization fields: `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/src/lib/seo/site-config.ts`

### Migration mapping docs (already present in repo)
- `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/docs/URL_MAPPING_DEVLO_MIGRATION.csv`
- `/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next/docs/case-study-migration/` (prompt/runbook/spec docs)

## Current SEO / migration truth (repo-proven)
- Canonical domain is hardcoded via site config values (`https://devlo.ch`) rather than `NEXT_PUBLIC_SITE_URL`.
- `metadataBase` is set in root layout using `siteConfig.url`.
- Case study metadata canonical URL is computed from `resolveCaseStudyCanonicalSlug(...)` in `/etudes-de-cas/[slug]/page.tsx`.
- `robots.ts` disallows thank-you pages, booking/internal template pages, and legacy duplicate listing pages.
- `sitemap.ts` includes static routes plus case study routes from `caseStudiesCards` in `masterfile.fr.ts`.
- `NEXT_PUBLIC_SITE_URL` is **not used anywhere in `src/` or `next.config.mjs`** (search returned no matches).

## Redirect strategy summary (current `next.config.mjs`)
Redirects are grouped and returned in a deliberate order. Current top-level groups (in return order):
1. `caseStudyRedirects` (legacy case-study slugs -> canonical slugs via shared mapping)
2. `wpResultatRedirects` (specific long WordPress `/resultats/...` URLs -> canonical case studies)
3. `resultatRedirects` (legacy `/resultats/*` and listing aliases -> `/etudes-de-cas/*`)
4. `enRedirects` (FR-only site, EN URLs -> FR equivalents)
5. `deRedirects` (DE URLs -> FR equivalents)
6. `frBlogRedirects` (legacy FR blog patterns)
7. `wordpressRedirects` (generic WordPress system/taxonomy/feed paths)
8. `oldPageRedirects` (miscellaneous historical pages)

This ordering is important because specific long-slug overrides must come before wildcard `/resultats/:slug*` redirects.

## Likely broken / risky
- Redirect config is large and hand-maintained; collision/chain risk exists if order is changed casually.
- Sitemap builds case-study entries from `caseStudiesCards` only; if detailed case studies diverge from cards, sitemap coverage/canonical alignment can drift.
- `seo/site-config.ts` still contains TODOs (legal name, founding year confirmation, default OG image path `/images/og-devlo.jpg` may not exist in flat inventory).
- Canonical behavior is config-driven and hardcoded; lack of env-based URL switching is fine for prod but risky for staging audits if misunderstood.

## What to do next (Phase 3 proposal only; not executed here)
1. Run redirect sanity checks (order, collisions, no chains) against current `next.config.mjs` without rewriting blindly.
2. Validate canonical tags on key routes (home, case-study list, sample case studies).
3. Verify `robots.txt` and `sitemap.xml` outputs locally on build/start.
4. Validate JSON-LD payloads (Organization now; add/verify page-specific schemas only if repo already supports them cleanly).
5. Confirm OG asset existence (e.g., `/images/og-devlo.jpg`) before any SEO rollout claims.

## Supporting search evidence (paths only)
```text
next.config.mjs:52:  async redirects() {
src/components/seo/json-ld.tsx:21:      type="application/ld+json"
src/app/sitemap.ts:20:export default function sitemap(): MetadataRoute.Sitemap {
src/app/page.tsx:6:export const metadata: Metadata = {
src/app/consultation/page.tsx:6:export const metadata: Metadata = {
src/app/robots.ts:5:export default function robots(): MetadataRoute.Robots {
src/app/academy/page.tsx:6:export const metadata: Metadata = {
src/app/layout.tsx:18:export const metadata: Metadata = {
src/app/etudes-de-cas/page.tsx:6:export const metadata: Metadata = {
src/app/etudes-de-cas/[slug]/page.tsx:19:export function generateMetadata({ params }: Params): Metadata {
src/app/conditions/page.tsx:6:export const metadata: Metadata = {
```
