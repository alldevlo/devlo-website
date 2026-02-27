# ChatSEO Final Report — P0 Go-Live Validation

Date (UTC): 2026-02-27T10:59:52Z  
Target domain: `https://devlo.ch`  
Deployment pushed to production: `https://devlo-next-nyzevvr7s-charles-8969s-projects.vercel.app` (aliased to `devlo.ch`)

## Verdict
**GO** for P0 technical SEO validation.

All critical P0 checks are passing on live:
- canonical host unified to apex (`devlo.ch`)
- `www` permanently redirects to apex
- sitemap/robots accessible and correct
- canonical + `og:url` are self-referential on apex
- legacy `/resultats/*` redirects are compressed to one hop on apex before final `200`

## Evidence Bundle
Raw evidence captured in:
- `docs/chatseo_live_20260227T105854Z/01_headers_core.txt`
- `docs/chatseo_live_20260227T105854Z/02_robots_sitemap_body.txt`
- `docs/chatseo_live_20260227T105854Z/03_page_home.txt`
- `docs/chatseo_live_20260227T105854Z/03_page_consultation.txt`
- `docs/chatseo_live_20260227T105854Z/03_page_academy.txt`
- `docs/chatseo_live_20260227T105854Z/03_page_etudes-de-cas.txt`
- `docs/chatseo_live_20260227T105854Z/03_page_etudes-de-cas_biocarburants-52-rendez-vous.txt`
- `docs/chatseo_live_20260227T105854Z/03_page_etudes-de-cas_proprete-urbaine-71-rendez-vous.txt`
- `docs/chatseo_live_20260227T105854Z/04_legacy_redirects.txt`

## P0 Check Matrix
| Check | Result | Proof |
|---|---|---|
| `https://devlo.ch/` status | PASS (`200`) | `01_headers_core.txt` |
| `https://www.devlo.ch/` behavior | PASS (`308` -> `https://devlo.ch/`) | `01_headers_core.txt` |
| `https://devlo.ch/sitemap.xml` | PASS (`200`, XML) | `01_headers_core.txt`, `02_robots_sitemap_body.txt` |
| Sitemap URL count | PASS (`22 <loc>`) | `02_robots_sitemap_body.txt` |
| Sitemap contains key pages | PASS (`/academy`, `/consultation`, `/etudes-de-cas`) | `02_robots_sitemap_body.txt` |
| Sitemap contains non-canonical hosts | PASS (none for `www.devlo.ch` / `devlo-agency.ch`) | `02_robots_sitemap_body.txt` |
| `https://devlo.ch/robots.txt` | PASS (`200`) | `01_headers_core.txt` |
| Robots sitemap line | PASS (`Sitemap: https://devlo.ch/sitemap.xml`) | `02_robots_sitemap_body.txt` |
| Canonical on home | PASS (`https://devlo.ch`) | `03_page_home.txt` |
| Canonical on consultation | PASS (`https://devlo.ch/consultation`) | `03_page_consultation.txt` |
| Canonical on academy | PASS (`https://devlo.ch/academy`) | `03_page_academy.txt` |
| Canonical on case studies listing | PASS (`https://devlo.ch/etudes-de-cas`) | `03_page_etudes-de-cas.txt` |
| Canonical on case study 1 | PASS (`/etudes-de-cas/biocarburants-52-rendez-vous`) | `03_page_etudes-de-cas_biocarburants-52-rendez-vous.txt` |
| Canonical on case study 2 | PASS (`/etudes-de-cas/proprete-urbaine-71-rendez-vous`) | `03_page_etudes-de-cas_proprete-urbaine-71-rendez-vous.txt` |
| `og:url` on key pages | PASS (all apex/self) | `03_page_*.txt` |
| Legacy `/resultats/` from apex | PASS (`301` -> `/etudes-de-cas/` -> `200`) | `04_legacy_redirects.txt` |
| Legacy `/resultats/:slug` from apex | PASS (`301` -> `/etudes-de-cas/:slug/` -> `200`) | `04_legacy_redirects.txt` |
| Legacy from `www` | PASS (`308` `www->apex`, then `301` legacy -> `200`) | `04_legacy_redirects.txt` |

## Notes for ChatSEO
- Redirect depth is now optimal on canonical host (apex): **one legacy hop max**.
- Requests beginning on `www` naturally add one host-normalization hop first (`www -> apex`).
- Canonical tags are now aligned with non-redirecting apex URLs.

## Conclusion
P0 migration blockers are resolved on live for host/canonical/sitemap/robots/legacy-redirect behavior.

Recommended next step: proceed with translation/indexation workflow monitoring in GSC and run 2-week post-change checks (coverage + rankings).
