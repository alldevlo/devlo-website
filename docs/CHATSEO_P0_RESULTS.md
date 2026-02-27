# CHATSEO P0 Results — devlo.ch

Date: 2026-02-27  
Target checked: `https://devlo.ch`

## 1) Summary verdict
**NO-GO (for clean P0 validation before translation rollout).**

Why:
- `devlo.ch` responds with **307 to `www.devlo.ch`** on key endpoints, so direct checks on `devlo.ch` fail strict “200/no redirect” expectations.
- Canonical tags point to `https://devlo.ch/...`, but those canonical URLs currently redirect to `https://www.devlo.ch/...` (redirected canonicals).
- Legacy `/resultats/*` paths still create multi-hop chains (more than 1 hop).

## 2) Phase 0 — Repo truth (canonical FR routes)
Source: `docs/p0_live_checks_2026-02-27/phase0_repo_routes.txt`

- Consultation route in repo: **`/consultation`** (not `/consultation-gratuite`)
- Academy route in repo: **`/academy`**
- Case studies listing route: **`/etudes-de-cas`**
- Canonical case-study slugs available: 13
- 2 tested case studies:
  - `/etudes-de-cas/biocarburants-52-rendez-vous`
  - `/etudes-de-cas/monizze-120-rendez-vous`

## 3) Evidence table (copy/paste friendly)

| Check | Result | Proof (snippet) |
|---|---|---|
| Sitemap URL reachable at `devlo.ch` | ⚠️ Redirect first | `HTTP/2 307` + `location: https://www.devlo.ch/sitemap.xml` (`a_sitemap_headers.txt`) |
| Sitemap final status (follow redirects) | ✅ 200 | `HTTP/2 200` (`a_sitemap_headers_follow.txt`) |
| Sitemap `<loc>` count (direct) | ❌ 0 | `0` (`a_sitemap_loc_count.txt`) |
| Sitemap `<loc>` count (follow) | ✅ 22 | `22` (`a_sitemap_loc_count_follow.txt`) |
| Key pages in sitemap | ✅ Present | `<loc>https://devlo.ch/academy</loc>`, `<loc>https://devlo.ch/consultation</loc>`, `<loc>https://devlo.ch/etudes-de-cas</loc>` (`a_sitemap_key_pages_follow.txt`) |
| Robots URL at `devlo.ch` | ⚠️ Redirect first | body `Redirecting...` (`b_robots.txt`) |
| Robots final content (follow) | ✅ Correct | `User-Agent: *`, `Allow: /`, `Sitemap: https://devlo.ch/sitemap.xml` (`b_robots_follow.txt`) |
| Homepage canonical/og:url (follow) | ✅ Self-referential format | `<link rel="canonical" href="https://devlo.ch"` and `<meta property="og:url" content="https://devlo.ch"` (`c_canonical_og_follow_clean.txt`) |
| Consultation canonical/og:url (follow) | ✅ Self-referential format | `https://devlo.ch/consultation` (`c_canonical_og_follow_clean.txt`) |
| Études de cas canonical/og:url (follow) | ✅ Self-referential format | `https://devlo.ch/etudes-de-cas` (`c_canonical_og_follow_clean.txt`) |
| Academy canonical/og:url (follow) | ✅ Self-referential format | `https://devlo.ch/academy` (`c_canonical_og_follow_clean.txt`) |
| Case study #1 canonical/og:url (follow) | ✅ Self-referential format | `https://devlo.ch/etudes-de-cas/biocarburants-52-rendez-vous` (`c_canonical_og_follow_clean.txt`) |
| Case study #2 canonical/og:url (follow) | ✅ Self-referential format | `https://devlo.ch/etudes-de-cas/monizze-120-rendez-vous` (`c_canonical_og_follow_clean.txt`) |
| Key pages return 200 without redirect on `devlo.ch` | ❌ No (307 first) | `curl -I` on all tested pages returns `HTTP/2 307` to `www` (`c_status_headers.txt`) |
| Legacy `/resultats/` redirect chain | ❌ Multi-hop | `307 -> 308 -> 308 -> 308 -> 200` (`d_redirect_hops_summary.txt`) |
| Legacy `/resultats/biocarburants-52-rendez-vous/` chain | ⚠️ Multi-hop | `307 -> 308 -> 308 -> 200` (`d_redirect_hops_summary.txt`) |
| `www` root sanity | ✅ 200 | `HTTP/2 200` on `https://www.devlo.ch/` (`e_www_headers.txt`) |

## 4) Per-page status snapshot (requested pages)

| Page | `curl -I https://devlo.ch/PATH` | Canonical (follow) | og:url (follow) |
|---|---|---|---|
| `/` | 307 -> `https://www.devlo.ch/` | `https://devlo.ch` | `https://devlo.ch` |
| `/consultation` | 307 -> `https://www.devlo.ch/consultation` | `https://devlo.ch/consultation` | `https://devlo.ch/consultation` |
| `/etudes-de-cas` | 307 -> `https://www.devlo.ch/etudes-de-cas` | `https://devlo.ch/etudes-de-cas` | `https://devlo.ch/etudes-de-cas` |
| `/academy` | 307 -> `https://www.devlo.ch/academy` | `https://devlo.ch/academy` | `https://devlo.ch/academy` |
| `/etudes-de-cas/biocarburants-52-rendez-vous` | 307 -> `https://www.devlo.ch/etudes-de-cas/biocarburants-52-rendez-vous` | same | same |
| `/etudes-de-cas/monizze-120-rendez-vous` | 307 -> `https://www.devlo.ch/etudes-de-cas/monizze-120-rendez-vous` | same | same |

## 5) If NO-GO: concrete fixes to apply (no code change done in this run)

1. **Unify canonical host with serving host to remove redirected canonicals**
- Option A (infra/domain): make `https://devlo.ch` serve as primary host without redirect to `www`.
- Option B (repo-level): switch production canonical base to `https://www.devlo.ch`.
- Files to adjust for Option B:
  - `src/lib/site.ts` (production base URL)
  - `scripts/fetch-lovalingo-sitemap.mjs` (`PRODUCTION_SITE_URL`)
  - (robots/sitemap/metadata then follow automatically via shared config)

2. **Reduce legacy redirect chains to max 1 hop after host normalization**
- File: `next.config.mjs`
- Add direct rules so `/resultats/` and `/resultats/<slug>/` go straight to final no-trailing canonical URLs (avoid extra slash-normalization hops).

3. **Re-run the same curl bundle on final chosen host**
- Expectation for GO: direct `200` on sitemap/robots/pages and no redirected canonical URLs.

## Raw outputs saved under
- `docs/p0_live_checks_2026-02-27/`
