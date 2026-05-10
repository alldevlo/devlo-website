# Programmatic SEO and GEO Pilot - devlo.ch

Date: 2026-05-10
Status: pilot implemented as `noindex`, not published in sitemap, not deployed to production.

## Discovery Evidence

- Stack: Next.js 16.2.4, App Router, TypeScript, Tailwind CSS, Vercel.
- Source of truth: repo content and route data in `src/content`, `src/lib/i18n`, `src/app`, plus generated metadata helpers.
- Current sitemap: 360 live URLs from `https://devlo.ch/sitemap.xml`.
- Current GEO policy: `robots.txt` allows GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot, Claude-User, anthropic-ai and Google-Extended.
- `llms.txt`: live at `https://devlo.ch/llms.txt`, updated 2026-05-06.
- Existing geo pages: 15 page IDs across FR, EN, DE and NL. Markets include Switzerland, French-speaking Switzerland, German-speaking Switzerland, Geneva, Lausanne, Fribourg, Neuchatel, Valais, Zurich, Basel, Bern, St. Gallen, DACH, Belgium and France.
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

Adopted pattern for pilot:

- First-party service-location pages: `[service] in [location]`.
- Category guide framing with selection criteria, local market notes, proof points and FAQs.
- No competitor ranking in pilot pages.

## Expert Synthesis

Accepted:

- Stack discovery before content generation.
- Pilot before scale.
- Tiered matrix: pipeline pages for ICP-core markets, brand-authority pages for broader markets.
- SEO uniqueness plus GEO citation-readiness.
- Preview/noindex before public indexation.

Rejected:

- Full matrix generation in one batch.
- Pure templated city swaps.
- SalesCaptain-style competitor listicles without legal and editorial review.
- Tier C and Tier D pipeline pages before service-deliverability is proven.

Open:

- Whether a later competitor-list format can be published as a market guide after legal review.
- Budget and cap for DataForSEO keyword validation.
- Size of the brand-authority tier after the first 30-day measurement window.

## Matrix V1

Pilot cells:

1. Prospection B2B in Geneva.
2. Prospection B2B in Lausanne.
3. B2B outbound in Zurich.
4. B2B outbound in Switzerland.
5. Prospection B2B in Paris.

Wave 1 candidates after pilot:

- Basel, Bern, St. Gallen, Zug, Winterthur, Lugano.
- Munich, Berlin, Frankfurt, Vienna.
- Lyon, Brussels, Amsterdam only if language and sales handoff are clear.

Deferred:

- US, APAC, Middle East, Australia/Oceania and India default to brand-authority research only until service-deliverability and sales handoff are confirmed.

## Template Contract

Each pilot page must include:

- One H1 with service and location.
- Visible noindex pilot marker.
- Direct answer block.
- Author byline and freshness date.
- Proof points tied to devlo capability.
- Local signals.
- Selection criteria table.
- Local market notes.
- Internal links to existing service, market and consultation pages.
- FAQ block.
- JSON-LD: `Article`, `FAQPage`, `BreadcrumbList`, `Service`.
- Metadata with `robots.index = false` until production approval.

Uniqueness vectors required per cell:

- Local market context.
- Service-specific criteria.
- Proof points or capability evidence.
- Local FAQ.
- Internal-link pattern matched to the market.

## Publication Gate

These pages are intentionally not in `sitemap.ts` because their slug-map IDs start with `page:`.

Do not change any of the following until final approval:

- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- hreflang policy
- canonical strategy
- production deployment
- favicon, icon or apple-icon assets

## Measurement Plan

Before indexation:

- Local build passes.
- SEO quality checks pass on local server.
- Rendered pages show noindex metadata.
- JSON-LD is valid JSON.
- Internal links resolve or are intentionally deferred.

After approved indexation:

- GSC impressions, CTR and average position by page.
- GA4 sessions and conversion-path engagement by page.
- Form starts and booked consultations where tracking is available.
- Manual AI citation spot checks across ChatGPT, Claude, Perplexity, Gemini and Google AI Mode.
- 30-day rewrite or noindex kill decision for weak cells.

