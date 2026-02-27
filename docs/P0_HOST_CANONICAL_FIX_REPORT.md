# P0 Host + Canonical Fix Report

Date: 2026-02-27

## Scope
Implemented the P0 host/canonical/redirect plan with minimal config/middleware changes, captured baseline and after evidence, built successfully, and deployed a Vercel Preview.

## Files Changed
- `src/middleware.ts`
  - Added explicit `www.devlo.ch -> devlo.ch` permanent redirect safety net.
  - Added `/resultats` and `/resultats/:slug` permanent redirects to canonical `/etudes-de-cas...` paths.
  - Preserves query string through `request.nextUrl.clone()`.
  - Uses shared slug resolver `resolveCaseStudyCanonicalSlug()`.
- `next.config.mjs`
  - Set `skipTrailingSlashRedirect: true`.
  - Removed broad `/resultats` redirect rules from Next config to avoid competing redirect layers with middleware.
  - Kept legacy fallback redirects (`wpResultatRedirects`, `resultats-cas-etudes`, etc.).

## Build + Deploy
- Build: `npm run build` -> PASS
- Preview deployment: `https://devlo-next-oefrmss4i-charles-8969s-projects.vercel.app`

## Evidence Artifacts
- Baseline raw outputs: `docs/p0_fix_baseline/*`
- After raw outputs: `docs/p0_fix_after/*`

## Vercel Domain-Level Blocker
Attempted but blocked by access permissions:
- `vercel domains inspect devlo.ch` -> no access
- `vercel domains inspect www.devlo.ch` -> no access
- `vercel alias set <deployment> devlo.ch` -> no access
- `vercel alias set <deployment> www.devlo.ch` -> no access

Proof files:
- `docs/p0_fix_baseline/10_vercel_domain_inspect_devlo_ch.txt`
- `docs/p0_fix_baseline/11_vercel_domain_inspect_www_devlo_ch.txt`
- `docs/p0_fix_baseline/13_vercel_alias_set_devlo_ch.txt`
- `docs/p0_fix_baseline/14_vercel_alias_set_www_devlo_ch.txt`

## Before vs After (Live `https://devlo.ch`)
No live behavior change yet because the domain-level primary host setting is still `www` and cannot be changed from current CLI/account access.

### Snippets
- Apex root (baseline): `HTTP/2 307` -> `location: https://www.devlo.ch/`
  - `docs/p0_fix_baseline/01_devlo_root_headers.txt`
- Apex root (after): `HTTP/2 307` -> `location: https://www.devlo.ch/`
  - `docs/p0_fix_after/01_devlo_root_headers.txt`
- WWW root (baseline): `HTTP/2 200`
  - `docs/p0_fix_baseline/02_www_root_headers.txt`
- WWW root (after): `HTTP/2 200`
  - `docs/p0_fix_after/02_www_root_headers.txt`
- `/resultats/` chain still multi-hop on live (`307 -> 308 -> 308 -> 308 -> 200`)
  - `docs/p0_fix_baseline/08_resultats_chain.txt`
  - `docs/p0_fix_after/08_resultats_chain.txt`
- Canonical tags are apex-valued (example `/consultation`):
  - `<link rel="canonical" href="https://devlo.ch/consultation"`
  - `docs/p0_fix_after/10_consultation_canonical.txt`

## Acceptance Criteria Status
1. `https://devlo.ch/*` no host redirect (apex final)  
   - Status: FAIL (still 307 to `www` on live)
2. `https://www.devlo.ch/*` permanent redirect to apex  
   - Status: FAIL (currently `200` on live)
3. Canonicals use apex and are non-redirecting  
   - Status: PARTIAL (canonical values are apex, but apex currently redirects to `www`)
4. `/resultats/*` max one redirect hop before final `200`  
   - Status: FAIL on live (multi-hop persists while live primary host is `www` and old redirect chain remains active in production)
5. Repo-level safety net implemented  
   - Status: PASS (`src/middleware.ts`)

## Residual Risk
If these middleware changes are deployed to production before Vercel domain primary is switched to apex, there is high risk of host ping-pong (`devlo -> www` at platform level versus `www -> devlo` in middleware).

## Required Final Action (outside current access)
In Vercel project domain settings for production:
1. Set primary domain to `devlo.ch`.
2. Configure `www.devlo.ch` as redirect domain -> `https://devlo.ch` (permanent).
3. Re-run the 9 curl checks and canonical checks from this report.

Once step 1-2 are applied, the repository safety net should enforce stable non-www canonical host behavior.
