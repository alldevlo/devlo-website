# Programmatic SEO and GEO System - devlo.ch

Date: 2026-05-10
Status: approved for production publication by Charles on 2026-05-10.

## Discovery Evidence

- Stack: Next.js 16.2.4, App Router, TypeScript, Tailwind CSS, Vercel.
- Source of truth: repo content and route data in `src/content`, `src/lib/i18n`, `src/app`, plus generated metadata helpers.
- Current sitemap before this work: 360 live URLs from `https://devlo.ch/sitemap.xml`.
- Current GEO policy: `robots.txt` allows GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot, Claude-User, anthropic-ai and Google-Extended.
- `llms.txt`: live at `https://devlo.ch/llms.txt`, updated 2026-05-06.
- Existing geo pages before this work: 15 page IDs across FR, EN, DE and NL.
- GSC read-only access works through `devlo-gsc-reader@general-489515.iam.gserviceaccount.com`.
- GA4 read-only access works for property `344907864`.
- DataForSEO credentials exist but were not called because it is a variable-cost provider and needs an explicit CFO cap before live keyword pulls.
- Ahrefs, Semrush and Bing Webmaster API keys were not present locally.

## Competitor Teardown Summary

Reference competitor: SalesCaptain.

Observed live sitemap size: about 605 URLs.

Reusable IA patterns:

- Service hub pages such as `/cold-outreach-agencies`, `/best-gtm-agencies`, `/outbound-marketing-agencies`, `/demand-generation-agencies`, `/b2b-appointment-setting-agencies`, `/b2b-lead-generation-agencies`.
- Location matrices under patterns such as `/cold-outreach-agencies/best-cold-outreach-agencies-in-switzerland`, `/best-gtm-agencies/switzerland`, `/outbound-agencies/best-outbound-marketing-agencies-in-zurich`.
- Content pattern: title, category intro, ranked provider cards, SalesCaptain self-placement, FAQs, footer/internal links.

Rejected pattern for devlo:

- Do not copy the "best agencies" ranking frame as the primary format. devlo is an operating agency, not a neutral directory. Ranking competitors introduces editorial, legal and commercial risk.

Adopted pattern:

- First-party service-location pages: `[service] in [location]`.
- Category guide framing with selection criteria, local market notes, proof points and FAQs.
- No copied text and no unaudited competitor ranking.

## Matrix V1

Published cells:

- Switzerland: Geneva, Lausanne, Zurich, Basel, Bern, Zug, Winterthur, Lugano, St. Gallen, Switzerland.
- France: Paris, Lyon, Marseille.
- DACH: Munich, Berlin, Hamburg, Frankfurt, Vienna.
- Europe: Amsterdam, London, Brussels, Milan, Madrid, Barcelona, Dublin, Stockholm, Copenhagen.

Localized URL patterns:

- French: `/agence-prospection-b2b-{city}`
- English: `/en/b2b-prospecting-agency-{city}`
- German: `/de/b2b-prospecting-agentur-{city}`
- Dutch: `/nl/b2b-prospectie-bureau-{city}`

Deferred:

- US, APAC, Middle East, Australia/Oceania and India remain research-only until service-deliverability and sales handoff are confirmed.
- Competitor-list pages remain blocked until legal and editorial review.

## Template Contract

Each page includes:

- One H1 with service and location.
- Direct answer block.
- Author byline and freshness date.
- Proof points tied to devlo capability.
- Local signals.
- Selection criteria table.
- Local market notes.
- Internal links to service, market and consultation pages.
- FAQ block.
- JSON-LD: `Article`, `FAQPage`, `BreadcrumbList`, `Service`.
- Indexable metadata after Charles approved publication.

Uniqueness vectors per cell:

- Local market context.
- Sector-specific signals.
- Service-specific criteria.
- Local FAQ.
- Internal-link pattern matched to the market.

## Measurement Plan

After indexation:

- GSC impressions, CTR and average position by page.
- GA4 sessions and conversion-path engagement by page.
- Form starts and booked consultations where tracking is available.
- Manual AI citation spot checks across ChatGPT, Claude, Perplexity, Gemini and Google AI Mode.
- 30-day rewrite or removal decision for weak cells.
