# devlo.ch SEO + GEO Forensic Diagnostic

Audit date: 2026-05-11
Scope: devlo.ch only, read-only investigation plus this written report.
Primary data window: 2024-11-08 to 2026-05-10 for GSC/GA4; 2025-05-11 to 2026-05-10 for 12-month page/query tables.

## Tool Inventory

| Tool / data source | Credential found | Last verified | Gap |
|---|---:|---|---|
| Google Search Console | Yes: service account `devlo-gsc-reader@general-489515.iam.gserviceaccount.com`, property `https://devlo.ch/` | 2026-05-11 API pull succeeded | Search Console Links report is not exposed through the Search Analytics pull used here. |
| GA4 | Yes: property `344907864`, measurement ID `G-9CKZL9V2VN` | 2026-05-11 API pull succeeded | GA4 organic key events returned `0`; organic conversion measurement is not usable. |
| Google anomaly notes | Public official source | 2026-05-11 | Used for interpreting impressions/CTR/position only: https://support.google.com/webmasters/answer/6211453 |
| Bitwarden | Yes, unlocked through local session | 2026-05-11 | Inventory only; no secrets copied into this report. |
| DataForSEO | Yes, Bitwarden/env credentials found | Bitwarden revision 2026-05-03 | Not called: paid/metered provider blocked by CFO cost gate without a per-run cap and provider quota verification. |
| Serper | Yes, multiple Bitwarden/env credentials found | Bitwarden revisions 2026-04-16 to 2026-05-04 | Not called: paid/metered provider blocked by CFO cost gate. |
| Brave Search API | Yes, Bitwarden/env credentials found | Bitwarden revisions 2025-11-20 and 2026-04-17 | Not called: paid/metered provider blocked by CFO cost gate. |
| Cloudflare | Yes, Bitwarden/env credentials found | Bitwarden revision 2026-04-18 | Not used; audit did not require CDN mutation or inspection. |
| Vercel / hosting | Env credentials found | 2026-05-11 inventory | Not used; no deployment or property mutation. |
| Codebase / CMS source | Yes: `devlo-website` repo | 2026-05-11 | Used for existing SEO checks and public site crawl. |
| Technical crawler | Local public crawl of sitemap URLs | 2026-05-11 | No Screaming Frog/Sitebulb credential found. JS crawl was not run as a browser-rendered crawl. |
| Screaming Frog / Sitebulb | No credential found in Bitwarden search | 2026-05-11 | Missing commercial technical crawler access. |
| Ahrefs / Semrush / Sistrix / SE Ranking | No credential found in Bitwarden search | 2026-05-11 | Missing rank/backlink tracker access; authority evolution cannot be quantified from these tools. |
| Bing Webmaster Tools | No credential found in Bitwarden search | 2026-05-11 | Missing Bing organic visibility data. |
| GEO trackers: Profound, Otterly, Peec, Goodie | No credential found in Bitwarden search | 2026-05-11 | Missing LLM citation tracker. |
| ChatGPT / Gemini UI | Credentials found for ChatGPT paid and Gemini UI | Bitwarden revisions 2026-02-19 and 2026-02-05 | Not used for automated testing; UI credentials do not provide a safe, repeatable citation export in this environment. |
| Claude / Copilot UI | No dedicated SEO/GEO credential found | 2026-05-11 | Manual platform citation audit not completed. |
| Google PageSpeed Insights | Public API attempted | 2026-05-11 | Both mobile and desktop requests returned HTTP 429, so live CWV/Lighthouse numbers are unavailable in this run. |

## Executive Summary

- The "no meaningful organic growth in 12 months" perception is mostly real when judged by clicks, because clicks were not affected by the documented Search Console anomaly. My quantified split is **85% real stagnation / 15% reporting artifact** for the overall SEO narrative. For click growth alone, the artifact share is effectively **0%**.
- GSC clicks are flat to slightly up: **Jan-Apr 2026 = 471 clicks vs Jan-Apr 2025 = 461 clicks**, a **+2.2%** YoY increase. GA4 organic sessions are more positive but still modest: **643 vs 551**, **+16.7%** YoY. Neither supports a strong-growth story.
- The anomaly does affect impressions, CTR, and average position. Around the fix boundary, **Apr 28-May 10 impressions/day were +25.2%** vs Apr 15-27, while clicks/day were only **+8.3%**. That implies an observable reporting distortion of roughly **+15.5% on impressions-per-click** in that small boundary sample.
- The main real bottleneck is non-brand demand capture: observed non-brand query clicks were **7 in Jan-Apr 2025 and 7 in Jan-Apr 2026**, while the 12-month observed "commercial agency/outbound" cluster had **49,652 impressions and only 21 clicks**.
- Technical hygiene is stronger than the traffic outcome suggests, but there are material defects: **7 of the top 50 GSC pages now return 404**, **44 pages have invalid JSON-LD**, and **286 sitemap URLs were not reachable from the homepage crawl graph**.

## Anomaly Impact Assessment

Google's official Search Console data anomalies page says the April 3, 2026 issue prevented accurate impression reporting for **May 13, 2025 to April 27, 2026**, and that CTR and average position were also affected. It also says clicks were not affected. The same page notes that **Job listing** and **Job details** search appearances were not reported from **April 16 to April 27, 2026**. Source: https://support.google.com/webmasters/answer/6211453

For devlo.ch, the job appearance issue does not appear material: the GSC `searchAppearance` pull for Apr 16-27 returned no Job Listing or Job Details rows.

| Period | Days | Clicks/day | Impressions/day | Impressions/click | CTR |
|---|---:|---:|---:|---:|---:|
| Nov 8 2024-May 12 2025, pre-anomaly reference | 186 | 2.68 | 491.21 | 183.46 | 0.545% |
| May 13 2025-Apr 27 2026, affected window | 350 | 3.18 | 657.27 | 206.69 | 0.484% |
| Apr 15-Apr 27 2026, immediate pre-fix | 13 | 3.69 | 461.23 | 124.92 | 0.800% |
| Apr 28-May 10 2026, immediate post-fix | 13 | 4.00 | 577.23 | 144.31 | 0.693% |
| Apr 21-Apr 27 2026, 7-day pre-fix | 7 | 3.43 | 457.43 | 133.42 | 0.750% |
| Apr 28-May 4 2026, 7-day post-fix | 7 | 4.14 | 735.57 | 177.55 | 0.563% |

Interpretation:

- The post-fix boundary shows a real step in impressions that is larger than the step in clicks. The 13-day comparison gives **+25.2% impressions/day** and **+8.3% clicks/day**, so the best observable artifact estimate is **about 15.5%** on impressions-per-click. The 7-day sample is noisier and shows **about 33.1%**.
- This does **not** rescue the growth story, because the load-bearing metric is clicks. Jan-Apr clicks moved from **461 to 471**, only **+10 clicks** YoY.
- Report-wide split: **85% real stagnation / 15% GSC reporting artifact**. Confidence is medium for the click conclusion and low-to-medium for the artifact size because the clean post-fix window available today is only 13 days.

## Real Growth Picture

Clicks-based conclusion: **real stagnation with a March-April 2026 bump, not sustained meaningful growth yet**.

| Period | GSC clicks | GSC impressions | Clicks/day | CTR |
|---|---:|---:|---:|---:|
| Last 28 days, Apr 13-May 10 2026 | 110 | 15,015 | 3.93 | 0.733% |
| Prior 28 days, Mar 16-Apr 12 2026 | 147 | 24,079 | 5.25 | 0.610% |
| First 28 days of 12-month window, May 11-Jun 7 2025 | 93 | 22,266 | 3.32 | 0.418% |
| Jan-Apr 2025 | 461 | 79,329 | 3.84 | 0.581% |
| Jan-Apr 2026 | 471 | 79,552 | 3.93 | 0.592% |
| Feb-Apr 2025 | 329 | 60,073 | 3.66 | 0.548% |
| Feb-Apr 2026 | 381 | 57,507 | 4.23 | 0.663% |

Month-level GSC pattern:

| Month | Clicks | Impressions | MoM clicks | YoY clicks |
|---|---:|---:|---:|---:|
| 2025-10 | 97 | 12,321 | +14.1% | n/a |
| 2025-11 | 94 | 13,722 | -3.1% | n/a |
| 2025-12 | 76 | 14,773 | -19.1% | +590.9% vs partial Dec 2024 |
| 2026-01 | 90 | 22,045 | +18.4% | -31.8% |
| 2026-02 | 85 | 17,134 | -5.6% | -38.8% |
| 2026-03 | 148 | 20,705 | +74.1% | +24.4% |
| 2026-04 | 148 | 19,668 | 0.0% | +108.5% |
| 2026-05 partial | 31 | 5,322 | partial | partial |

GA4 cross-check:

| Period | Organic sessions | Active users | Key events |
|---|---:|---:|---:|
| Jan-Apr 2025 | 551 | 433 | 0 |
| Jan-Apr 2026 | 643 | 491 | 0 |
| Last 28 days | 170 | 132 | 0 |
| Prior 28 days | 215 | 164 | 0 |

GA4 supports a modest traffic improvement, not a strong one. The bigger issue is measurement: **GA4 reported zero organic key events**, so the current setup cannot answer whether organic traffic generated qualified demand.

Brand vs non-brand from observed GSC queries:

| Segment | Jan-Apr 2025 clicks | Jan-Apr 2026 clicks | 12-month clicks | 12-month impressions | 12-month CTR |
|---|---:|---:|---:|---:|---:|
| Brand | 179 | 111 | 359 | 8,577 | 4.19% |
| Commercial agency / outbound | 7 | 7 | 21 | 49,652 | 0.04% |
| Competitor / market | 20 | 10 | 31 | 54,968 | 0.06% |
| Training / academy | 2 | 0 | 0 | 8,869 | 0.00% |
| GTM / AI outbound | 0 | 1 | 1 | 217 | 0.46% |

Caveat: GSC query data is incomplete because many queries are anonymized. The daily query rows explain only part of total clicks; the direction is still clear enough: non-brand known clicks are very small.

Country and device:

| Segment | Jan-Apr 2025 clicks | Jan-Apr 2026 clicks | Read |
|---|---:|---:|---|
| Switzerland | 118 | 207 | Real improvement in the core market, but CTR fell from 5.39% to 1.35% because impressions expanded. |
| France | 113 | 93 | Slight decline in clicks despite far more impressions. |
| Germany | 19 | 21 | Flat from a low base. |
| Desktop | 335 | 354 | Slight improvement. |
| Mobile | 126 | 115 | Slight decline. |

## Technical Findings

Public crawl and repo checks:

| Check | Result |
|---|---:|
| Sitemap URLs fetched | 476 |
| Live status in sitemap crawl | 476 x HTTP 200 |
| `npm run check:seo-quality` | 476 checked, 0 errors, 0 warnings |
| Missing titles / descriptions | 0 / 0 |
| Canonical missing / non-self in sitemap crawl | 0 / 0 |
| H1 missing / multiple H1 | 0 / 0 |
| Hreflang count | 5 on all 476 sitemap URLs |
| Robots policy | Allows normal crawlers plus GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot/User, ClaudeBot/Search/User, anthropic-ai, Google-Extended |
| `llms.txt` | Present and content-rich |
| `llms-full.txt` | Present, 217 lines |

Material technical issues:

1. **Legacy 404s still receive search exposure.** Among the top 50 GSC pages by clicks, **7 URLs now return 404**, carrying **29 clicks and 17,626 impressions** over the last 12 months. Examples include:
   - `/en/casestudy/cybersecurity-lead-generation-and-cold-calling-180-qualified-prospects-for-this-client-using-outbound/`: 7 clicks, 9,378 impressions, now 404.
   - `/en/casestudy/telemarketing-b2b-in-real-estate-switzerland-30-interested-prospects-for-meeting/`: 3 clicks, 2,710 impressions, now 404.
   - `/resultats/telemarketing-b2b-dans-limmobilier-suisse30-prospects-interesses-pour-un-rendez-vous/`: 3 clicks, 2,949 impressions, now 404.

2. **Top GSC URLs include redirect baggage.** In the top 50, **12 URLs redirect once**, carrying **76 clicks and 26,802 impressions**. One-hop redirects are acceptable technically, but these should be cleaned in internal links and migration maps because they are still visible in performance data.

3. **Structured data is invalid on 44 pages.** The invalid pages are concentrated on cold-email-template pages. One inspected example, `/insights/cold-email-templates/apiary-services`, fails JSON parsing because answer text contains unescaped nested quotes inside JSON-LD. This can suppress rich-result eligibility and weakens machine-readable GEO extraction.

4. **Internal linking does not match the programmatic footprint.** The sitemap has 476 URLs, but the homepage crawl graph left **286 URLs unreachable** and found **102 pages with only one incoming internal link** in the derived graph. Many are city/region programmatic pages such as `/agence-prospection-b2b-amsterdam`, `/agence-prospection-b2b-bale`, and `/agence-prospection-b2b-zurich`.

5. **Duplicate title found on GTM engineering pages.** `/en/gtm-engineering-agency` and `/gtm-engineering-agency` both use `GTM engineering agency Europe | AI outbound & Clay | devlo`. This is minor but confusing because one is English and one is default-locale.

6. **Core Web Vitals could not be measured live in this run.** Google PageSpeed Insights returned HTTP 429 for both mobile and desktop requests. Existing historical Lighthouse files exist in the repo, but I did not use them as current CWV evidence.

JS rendering health: the live pages returned prerendered Next.js HTML with title, meta, H1, canonical, hreflang, and JSON-LD present in fetched HTML. I did not find evidence of SEO-critical content depending only on client-side rendering in the sampled crawl.

## Content Findings

The current traffic mix is homepage-heavy and brand-heavy:

| Page cluster | Evidence | Diagnosis |
|---|---|---|
| Home and locale homepages | `/`, `/en/`, `/de/`, `/en`, `/de` generated **880 clicks** in the 12-month page table. | Organic demand is still mostly finding the brand/homepage layer, not a broad commercial page portfolio. |
| Training / academy | `/en/b2b-sales-training-academy/`, `/formation-prospection-b2b/`, `/de/ausbildung-prospection-b2b/` have high impressions and very low CTR. | Ranking footprint exists, but snippets/intent alignment do not convert impressions to clicks. |
| Case studies | Many old case-study slugs still appear in GSC; several now 404. | Migration cleanup is incomplete and dilutes historical performance. |
| Service pages | Some service pages have strong average positions but small volume, e.g. `/services/qualification-leads` position 6.9 with 571 impressions and 3 clicks. | Service pages need stronger internal links and snippet differentiation to scale beyond long-tail exposure. |
| Programmatic geo pages | 193 sitemap URLs had no exact/rstrip match in the 12-month GSC page table; many were recently lastmod 2026-03-01 or 2026-05-11. | The footprint is large but either too new, too weakly linked, or not yet demanded/discovered enough to produce measurable impressions. |

High-impression, low-CTR pages:

| Page | Clicks | Impressions | CTR | Avg position |
|---|---:|---:|---:|---:|
| `/en/b2b-sales-training-academy/` | 11 | 9,383 | 0.12% | 42.9 |
| `/en/casestudy/cybersecurity-lead-generation-and-cold-calling-180-qualified-prospects-for-this-client-using-outbound/` | 7 | 9,378 | 0.07% | 54.2 |
| `/en/ultimate-sales-training-course/` | 9 | 9,008 | 0.10% | 25.5 |
| `/formation-prospection-b2b/` | 7 | 6,282 | 0.11% | 15.6 |
| `/blog/cold-email-b2b-guide-complet` | 3 | 2,403 | 0.12% | 7.7 |
| `/en/services/enrichissement-clay` | 0 | 1,321 | 0.00% | 6.3 |

High-position, zero/near-zero click queries:

| Query | Clicks | Impressions | Avg position |
|---|---:|---:|---:|
| `formation prospection b2b salesmind method prix` | 0 | 4,209 | 7.2 |
| `phrase d'ouverture personnalisée cold email b2b français uxia` | 0 | 1,217 | 9.8 |
| `b2b telemarketing schweiz` | 0 | 341 | 9.0 |
| `lead generation agency switzerland` | 0 | 129 | 5.1 |
| `consultant en prospection b2b` | 0 | 209 | 2.8 |
| `agence développement commerciale` | 0 | 128 | 2.2 |

Top-page appendix tables are included at the end of this report.

## GEO / LLM Visibility Findings

What was measured:

- `robots.txt` explicitly allows major AI crawlers and user agents.
- `llms.txt` and `llms-full.txt` are live and contain structured positioning, services, case studies, comparison pages, and market entities.
- Public search snapshots show devlo has pages targeting GTM engineering, B2B prospecting alternatives, LalaLeads alternatives, Undersales alternatives, and Swiss prospecting.

What was **not** measured:

- I did not produce a real citation rate for ChatGPT, Claude, Gemini, Perplexity, or Copilot because no GEO tracker credential was found and UI credentials do not provide a safe repeatable export. API calls to OpenAI/Anthropic/Gemini/Serper/Brave/DataForSEO are paid or metered and were blocked under the CFO cost gate without caps and quota verification.

Therefore the LLM citation metrics are:

| Platform | Citation rate | Position in answer | Competitor share of voice |
|---|---:|---:|---:|
| ChatGPT | Not available | Not available | Not available |
| Claude | Not available | Not available | Not available |
| Gemini | Not available | Not available | Not available |
| Perplexity | Not available | Not available | Not available |
| Copilot | Not available | Not available | Not available |

GEO readiness is better than GEO measurement. The site has AI crawler access and LLM-oriented files, but the actual answer-engine visibility is still unverified. This is a measurement gap, not proof of zero visibility.

## Authority / Off-Page Findings

Authority could not be quantified properly in this run.

Evidence and gaps:

- No Ahrefs, Semrush, Sistrix, SE Ranking, Screaming Frog Cloud, or similar rank/backlink tracker credential was found in Bitwarden.
- DataForSEO credentials exist, but backlink/rank API usage is paid/metered and was not called because the CFO cost gate requires a hard cap, provider quota verification, and explicit run budget before paid execution.
- Search Console API data used here does not expose the Links report needed for backlink evolution.

What can be inferred from GSC only:

- Query exposure exists in commercial and competitor/market clusters, but authority or perceived relevance is not strong enough to convert it: the observed "commercial agency/outbound" query cluster had **49,652 impressions and 21 clicks** over 12 months.
- Broad competitor/market queries generated **54,968 impressions and 31 clicks**, which suggests devlo is often visible but not preferred or not high enough to win clicks.

Competitors/entities appearing in devlo's own GEO content and public search context include Undersales, LalaLeads, Prospecti, SeedD, Level UP, Digitalmint, ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, The GTM Engineering Company, The Kiln, SalesCaptain, and related AI outbound agencies. A backlink and mention-share baseline should be created before any authority recommendation is treated as quantified.

## Demand and Competitive Context

Observed GSC demand exists, but click capture is weak:

| Query cluster | 12-month observed impressions | 12-month clicks | CTR | Avg position |
|---|---:|---:|---:|---:|
| Competitor / market | 54,968 | 31 | 0.06% | 26.9 |
| Commercial agency / outbound | 49,652 | 21 | 0.04% | 38.6 |
| Other observed queries | 38,667 | 20 | 0.05% | 47.2 |
| Training / academy | 8,869 | 0 | 0.00% | 51.0 |
| Brand | 8,577 | 359 | 4.19% | 5.2 |
| GTM / AI outbound | 217 | 1 | 0.46% | 10.4 |

YoY comparison for observed query clusters, Jan-Apr:

| Cluster | Jan-Apr 2025 impressions | Jan-Apr 2026 impressions | Jan-Apr 2025 clicks | Jan-Apr 2026 clicks |
|---|---:|---:|---:|---:|
| Brand | 4,645 | 2,359 | 179 | 111 |
| Commercial agency / outbound | 20,798 | 10,854 | 7 | 7 |
| Competitor / market | 23,826 | 16,250 | 20 | 10 |
| Training / academy | 6,233 | 1,294 | 2 | 0 |
| GTM / AI outbound | 0 | 211 | 0 | 1 |

Caveat: query-level impressions are affected by both GSC anonymization and the documented impression anomaly. The click conclusion is more reliable than the impression trend.

Demand diagnosis:

- **Swiss demand improved in clicks**: Switzerland moved from **118 to 207 clicks** Jan-Apr YoY.
- **France underperformed**: France moved from **113 to 93 clicks**, despite more impressions.
- **German/DACH remains low-volume**: Germany moved from **19 to 21 clicks**.
- **GTM engineering is underdeveloped in GSC**: the GTM/AI outbound cluster produced only **217 observed impressions and 1 click** over 12 months, despite the site now positioning around GTM engineering and Clay/AI outbound.

Competitive delta could not be quantified for visibility, backlink velocity, content velocity, or CWV because rank tracker, backlink tool, and live PageSpeed data were unavailable.

## Root Causes

1. **Non-brand commercial capture is the primary real-growth problem.** Evidence: observed commercial agency/outbound queries produced **49,652 impressions and 21 clicks** over 12 months; Jan-Apr known non-brand clicks stayed **7 to 7** YoY.

2. **The GSC anomaly distorted visibility metrics but did not create the click stagnation.** Evidence: clicks were officially unaffected; devlo Jan-Apr clicks moved **461 to 471** YoY. Boundary data shows about **15.5%** observable impression-per-click distortion, not a traffic-growth illusion large enough to explain stagnant clicks.

3. **Legacy URL cleanup is incomplete.** Evidence: **7 of top 50 GSC pages now 404**, with **17,626 impressions** attached over 12 months.

4. **Programmatic SEO footprint is not sufficiently integrated into internal linking.** Evidence: **286 sitemap URLs** were not reachable from the homepage crawl graph, and **102 pages** had only one incoming link in the derived graph.

5. **Machine-readable extraction has avoidable defects.** Evidence: **44 invalid JSON-LD pages**, concentrated in cold-email-template pages.

6. **Measurement is incomplete.** Evidence: GA4 organic key events returned **0**; backlink/rank/GEO tools are missing or blocked by CFO gate; live PSI returned **429**.

7. **The GTM engineering/GEO repositioning is present in content assets but not yet visible in GSC demand capture.** Evidence: `llms.txt` strongly describes GTM engineering and AI outbound, but the observed GTM/AI outbound query cluster produced only **217 impressions and 1 click** over 12 months.

## Prioritized Remediation Plan

| # | Action | Evidence | Effort | Impact | Owner |
|---:|---|---|---|---|---|
| 1 | Add 301 redirects for the 7 top-50 GSC URLs that now 404. | 17,626 impressions and 29 clicks attached to current 404s. | S | High | Engineering + SEO |
| 2 | Fix JSON-LD escaping on cold-email-template pages and validate all 44 invalid pages. | 44 invalid JSON-LD pages; sampled FAQ answer breaks JSON parsing. | S | Medium | Engineering |
| 3 | Build a visible internal linking hub for geo/programmatic pages by country, language, and city. | 286 sitemap URLs unreachable from homepage crawl graph; 102 low-inlink pages. | M | High | SEO + Content + Engineering |
| 4 | Rewrite titles/meta/H1s for high-impression, low-CTR pages and queries. | `/formation-prospection-b2b/`, `/en/services/enrichissement-clay`, `/blog/cold-email-b2b-guide-complet` rank but win few clicks. | M | High | SEO + Content |
| 5 | Consolidate legacy slash/no-slash and old training/case-study URLs in internal links and sitemap references. | 12 top-50 GSC pages still redirect once; legacy URLs remain visible in GSC. | S | Medium | Engineering |
| 6 | Create or strengthen non-brand commercial landing pages around the actual query clusters. | Commercial agency/outbound: 49,652 impressions, 21 clicks; competitor/market: 54,968 impressions, 31 clicks. | M | High | SEO + Content |
| 7 | Configure GA4 key events for consultation form submits, calendar starts/completions, phone/email CTA clicks, and qualified lead events. | GA4 organic key events = 0. | S | High | Analytics |
| 8 | Establish a CFO-approved backlink/rank baseline using Ahrefs/Semrush or capped DataForSEO. | No authority evolution available; DataForSEO found but blocked by cost gate. | S | Medium | Growth + CFO |
| 9 | Establish a repeatable GEO measurement workflow. | GEO crawler readiness exists, but ChatGPT/Claude/Gemini/Perplexity/Copilot citation rate is unavailable. | M | Medium | Growth |
| 10 | Re-run PageSpeed/CrUX with a non-rate-limited method and fix any field/lab regressions found. | PSI returned HTTP 429; current CWV unavailable. | S-M | Medium | Engineering |

## Appendix A: Top 50 Pages by GSC Clicks, Last 12 Months

| # | Page | Clicks | Impr. | CTR | Pos. |
|---:|---|---:|---:|---:|---:|
| 1 | `/` | 482 | 58493 | 0.82% | 25.3 |
| 2 | `/en/` | 219 | 35495 | 0.62% | 22.9 |
| 3 | `/de/` | 103 | 29251 | 0.35% | 31.1 |
| 4 | `/en` | 55 | 11498 | 0.48% | 7.4 |
| 5 | `/de` | 21 | 3112 | 0.67% | 19.4 |
| 6 | `/en/academy-our-call/` | 18 | 1252 | 1.44% | 11.9 |
| 7 | `/resultats/solution-de-cybersecurite-180-prospects-interesses-generation-de-prospects-b2b-et-prospection-a-froid/` | 13 | 1076 | 1.21% | 22.2 |
| 8 | `/en/b2b-sales-training-academy/` | 11 | 9383 | 0.12% | 42.9 |
| 9 | `/en/ultimate-sales-training-course/` | 9 | 9008 | 0.10% | 25.5 |
| 10 | `/de/ausbildung-prospektion-b2b/` | 8 | 4256 | 0.19% | 42.1 |
| 11 | `/services/cold-calling` | 8 | 209 | 3.83% | 7.6 |
| 12 | `/en/casestudy/cybersecurity-lead-generation-and-cold-calling-180-qualified-prospects-for-this-client-using-outbound/` | 7 | 9378 | 0.07% | 54.2 |
| 13 | `/formation-prospection-b2b/` | 7 | 6282 | 0.11% | 15.6 |
| 14 | `/alternative-undersales` | 6 | 39 | 15.38% | 6.4 |
| 15 | `/de/fallstudien/einzigartige-strategie-zur-lead-generierung-wie-careerlunch-54-meetings-in-dach-bekam-wahrend-die-meisten-organisationen-in-dieser-region-bereits-kontaktiert-wurden/` | 6 | 1257 | 0.48% | 47.0 |
| 16 | `/en/casestudy/cybersecurity-4500-companies/` | 6 | 1265 | 0.47% | 15.8 |
| 17 | `/academy` | 5 | 493 | 1.01% | 12.7 |
| 18 | `/resultats/limmobilier-et-la-prospection-commerciale-b2b-comment-cibler-et-demarcher-des-prospects-pour-la-location-de-surfaces-commerciales/` | 5 | 608 | 0.82% | 42.0 |
| 19 | `/ai-sales-ops` | 4 | 234 | 1.71% | 5.9 |
| 20 | `/de/services/cold-email` | 4 | 40 | 10.00% | 7.0 |
| 21 | `/de/ultimativer-verkaufstrainingskurs/` | 4 | 2646 | 0.15% | 48.9 |
| 22 | `/en/call/` | 4 | 654 | 0.61% | 7.9 |
| 23 | `/en/casestudy/how-we-helped-an-accounting-software-firm-close-200k-in-belgium-using-multichannel-outbound/` | 4 | 1973 | 0.20% | 20.2 |
| 24 | `/en/casestudy/real-estate-30-prospects/` | 4 | 1202 | 0.33% | 10.8 |
| 25 | `/en/casestudy/setting-appointments-with-decision-makers-in-learning-and-development-of-swiss-enterprises-half-the-leads-responded-to-our-prospecting-sequence/` | 4 | 257 | 1.56% | 14.4 |
| 26 | `/en/casestudy/urban-cleanliness-71-meetings/` | 4 | 403 | 0.99% | 11.5 |
| 27 | `/resultats/biodiversite-70-rendez-vous/` | 4 | 30 | 13.33% | 16.3 |
| 28 | `/resultats/comment-cette-societe-de-merchandising-a-obtenu-70-de-reponses-et-8-de-meetings-avec-leurs-prospects-grace-a-cette-sequence-de-prospection-commerciale-b2b/` | 4 | 116 | 3.45% | 19.0 |
| 29 | `/academy-notre-appel/` | 3 | 483 | 0.62% | 30.5 |
| 30 | `/blog/cold-email-b2b-guide-complet` | 3 | 2403 | 0.12% | 7.7 |
| 31 | `/de/?post_type=post` | 3 | 597 | 0.50% | 52.3 |
| 32 | `/de/fallstudien/generierung-von-cybersicherheits-leads-und-kaltakquise-180-qualifizierte-interessenten-fur-diesen-kunden-mithilfe-von-outbound/` | 3 | 765 | 0.39% | 53.6 |
| 33 | `/de/fallstudien/immobilien-30-interessenten/` | 3 | 1210 | 0.25% | 36.4 |
| 34 | `/de/fallstudien/wie-dieser-audiovisuelle-integrator-durch-b2b-verkaufsakquise-16-qualifizierte-termine-erhielt/` | 3 | 390 | 0.77% | 62.1 |
| 35 | `/de/fallstudien/wie-dieses-gewerbebauprojekt-im-fahrwerk-winterthur-mieterinnen-und-mieter-findet/` | 3 | 310 | 0.97% | 30.7 |
| 36 | `/de/services/datenanreicherung-clay` | 3 | 132 | 2.27% | 7.1 |
| 37 | `/de/telefonanruf/` | 3 | 1280 | 0.23% | 47.9 |
| 38 | `/en/academy-terms-conditions/` | 3 | 719 | 0.42% | 7.9 |
| 39 | `/en/b2b-sales-training-academy` | 3 | 1135 | 0.26% | 9.2 |
| 40 | `/en/blog/b2b-prospecting-switzerland-2026` | 3 | 275 | 1.09% | 5.3 |
| 41 | `/en/casestudy/learning-development-14-meetings/` | 3 | 204 | 1.47% | 7.8 |
| 42 | `/en/casestudy/telemarketing-b2b-in-real-estate-switzerland-30-interested-prospects-for-meeting/` | 3 | 2710 | 0.11% | 34.8 |
| 43 | `/en/results_cas_studies/` | 3 | 1629 | 0.18% | 23.4 |
| 44 | `/prospection-commerciale-b2b/` | 3 | 1339 | 0.22% | 34.8 |
| 45 | `/prospection-commerciale-belgique` | 3 | 91 | 3.30% | 7.3 |
| 46 | `/resultats/immobilier-30-prospects/` | 3 | 510 | 0.59% | 20.3 |
| 47 | `/resultats/telemarketing-b2b-dans-limmobilier-suisse30-prospects-interesses-pour-un-rendez-vous/` | 3 | 2949 | 0.10% | 56.8 |
| 48 | `/services/cold-email` | 3 | 314 | 0.96% | 13.7 |
| 49 | `/services/enrichissement-clay` | 3 | 43 | 6.98% | 7.1 |
| 50 | `/services/qualification-leads` | 3 | 571 | 0.53% | 6.9 |

## Appendix B: Top 50 Pages by GSC Impressions, Last 12 Months

| # | Page | Clicks | Impr. | CTR | Pos. |
|---:|---|---:|---:|---:|---:|
| 1 | `/` | 482 | 58493 | 0.82% | 25.3 |
| 2 | `/en/` | 219 | 35495 | 0.62% | 22.9 |
| 3 | `/de/` | 103 | 29251 | 0.35% | 31.1 |
| 4 | `/en` | 55 | 11498 | 0.48% | 7.4 |
| 5 | `/en/b2b-sales-training-academy/` | 11 | 9383 | 0.12% | 42.9 |
| 6 | `/en/casestudy/cybersecurity-lead-generation-and-cold-calling-180-qualified-prospects-for-this-client-using-outbound/` | 7 | 9378 | 0.07% | 54.2 |
| 7 | `/en/ultimate-sales-training-course/` | 9 | 9008 | 0.10% | 25.5 |
| 8 | `/formation-prospection-b2b/` | 7 | 6282 | 0.11% | 15.6 |
| 9 | `/de/fallstudien/telemarketing-b2b-in-immobilien-schweiz30-interessenten-fur-einen-termin/` | 1 | 4738 | 0.02% | 40.9 |
| 10 | `/de/ausbildung-prospektion-b2b/` | 8 | 4256 | 0.19% | 42.1 |
| 11 | `/de/externaliser-le-developpement-des-ventes-b2b-comment-eviter-les-depenses-excessives/` | 2 | 4207 | 0.05% | 61.3 |
| 12 | `/de` | 21 | 3112 | 0.67% | 19.4 |
| 13 | `/resultats/telemarketing-b2b-dans-limmobilier-suisse30-prospects-interesses-pour-un-rendez-vous/` | 3 | 2949 | 0.10% | 56.8 |
| 14 | `/en/casestudy/telemarketing-b2b-in-real-estate-switzerland-30-interested-prospects-for-meeting/` | 3 | 2710 | 0.11% | 34.8 |
| 15 | `/de/ultimativer-verkaufstrainingskurs/` | 4 | 2646 | 0.15% | 48.9 |
| 16 | `/blog/cold-email-b2b-guide-complet` | 3 | 2403 | 0.12% | 7.7 |
| 17 | `/en/casestudy/how-we-helped-an-accounting-software-firm-close-200k-in-belgium-using-multichannel-outbound/` | 4 | 1973 | 0.20% | 20.2 |
| 18 | `/en/casestudy/how-to-identify-the-most-valuable-ideal-customer-profiles-among-several-buyer-personas-using-cold-outreach-2/` | 1 | 1636 | 0.06% | 9.5 |
| 19 | `/en/results_cas_studies/` | 3 | 1629 | 0.18% | 23.4 |
| 20 | `/prospection-commerciale-b2b/` | 3 | 1339 | 0.22% | 34.8 |
| 21 | `/en/services/enrichissement-clay` | 0 | 1321 | 0.00% | 6.3 |
| 22 | `/de/telefonanruf/` | 3 | 1280 | 0.23% | 47.9 |
| 23 | `/en/casestudy/cybersecurity-4500-companies/` | 6 | 1265 | 0.47% | 15.8 |
| 24 | `/de/fallstudien/einzigartige-strategie-zur-lead-generierung-wie-careerlunch-54-meetings-in-dach-bekam-wahrend-die-meisten-organisationen-in-dieser-region-bereits-kontaktiert-wurden/` | 6 | 1257 | 0.48% | 47.0 |
| 25 | `/en/academy-our-call/` | 18 | 1252 | 1.44% | 11.9 |
| 26 | `/de/fallstudien/immobilien-30-interessenten/` | 3 | 1210 | 0.25% | 36.4 |
| 27 | `/en/casestudy/real-estate-30-prospects/` | 4 | 1202 | 0.33% | 10.8 |
| 28 | `/en/b2b-sales-training-academy` | 3 | 1135 | 0.26% | 9.2 |
| 29 | `/en/our-call/` | 1 | 1124 | 0.09% | 13.8 |
| 30 | `/blog-list/` | 1 | 1121 | 0.09% | 27.8 |
| 31 | `/en/casestudy/accounting-200k-revenue/` | 1 | 1089 | 0.09% | 25.9 |
| 32 | `/resultats/solution-de-cybersecurite-180-prospects-interesses-generation-de-prospects-b2b-et-prospection-a-froid/` | 13 | 1076 | 1.21% | 22.2 |
| 33 | `/en/outsourcing-b2b-sales-development-avoid-overspending/` | 0 | 975 | 0.00% | 61.0 |
| 34 | `/en/blog/` | 0 | 966 | 0.00% | 27.3 |
| 35 | `/en/casestudy/how-this-commercial-building-project-gets-tenants-to-rent-the-space-in-fahrwerk-winterthur/` | 0 | 952 | 0.00% | 52.4 |
| 36 | `/en/casestudy/biofuels-52-sales-meetings/` | 1 | 903 | 0.11% | 9.5 |
| 37 | `/de/fallstudien/generierung-von-cybersicherheits-leads-und-kaltakquise-180-qualifizierte-interessenten-fur-diesen-kunden-mithilfe-von-outbound/` | 3 | 765 | 0.39% | 53.6 |
| 38 | `/de/fallstudien/wie-wir-einem-buchhaltungssoftware-anbieter-halfen-200k-in-belgien-mit-multikanal-outbound-zu-gewinnen/` | 0 | 748 | 0.00% | 69.3 |
| 39 | `/en/casestudy/how-can-you-identify-the-best-prospects-among-several-ideal-customer-profiles-icp-using-sales-prospecting-campaigns/` | 0 | 739 | 0.00% | 12.8 |
| 40 | `/en/academy-terms-conditions/` | 3 | 719 | 0.42% | 7.9 |
| 41 | `/en/call/` | 4 | 654 | 0.61% | 7.9 |
| 42 | `/resultats/limmobilier-et-la-prospection-commerciale-b2b-comment-cibler-et-demarcher-des-prospects-pour-la-location-de-surfaces-commerciales/` | 5 | 608 | 0.82% | 42.0 |
| 43 | `/resultats/comment-nous-avons-aide-un-editeur-de-logiciel-comptable-a-conclure-200-000-e-de-contrats-en-belgique-grace-a-une-strategie-outbound-multicanale-ciblee/` | 0 | 607 | 0.00% | 52.7 |
| 44 | `/de/?post_type=post` | 3 | 597 | 0.50% | 52.3 |
| 45 | `/services/qualification-leads` | 3 | 571 | 0.53% | 6.9 |
| 46 | `/resultats/strategie-unique-de-generation-de-prospects-b2b-comment-careerlunch-a-obtenu-54-rendez-vous-dans-la-region-dach-alors-que-la-plupart-des-entreprises-avaient-deja-ete-contactees/` | 1 | 560 | 0.18% | 42.9 |
| 47 | `/terms/` | 0 | 557 | 0.00% | 12.1 |
| 48 | `/conditions-utilisation-academie/` | 0 | 554 | 0.00% | 3.0 |
| 49 | `/en/casestudy/how-this-merchandising-company-obtained-70-responses-and-8-meetings-with-their-prospects-thanks-to-this-b2b-sales-prospecting-sequence/` | 1 | 543 | 0.18% | 42.3 |
| 50 | `/telephone/` | 1 | 525 | 0.19% | 3.5 |
