# SEO Authority + GEO Measurement Runbook

Date: 2026-05-11

Purpose: close the two major blind spots from the devlo.ch forensic diagnostic without creating uncontrolled spend.

## Decision Gate

Do not call DataForSEO, Serper, Brave Search, OpenAI, Anthropic, Gemini, Perplexity, or any paid GEO/backlink provider until the run has:

- a hard per-run cap,
- provider-side quota or account cap evidence,
- a recorded human approval for the exact run,
- a saved output path,
- a clear stop condition.

Current decision: **blocked pending human approval**.

## Authority Baseline

Goal: quantify whether devlo.ch has enough off-site authority to rank for commercial non-brand queries.

Required comparison set:

- `devlo.ch`
- `undersales.com`
- `lalaleads.io`
- `proactiveb2b.fr`
- `salescaptain.eu`
- one Swiss or DACH competitor discovered from the current SERP for `agence prospection b2b suisse`

Metrics to pull:

- referring domains total,
- referring domains gained/lost over the last 18 months,
- dofollow referring domains,
- homepage vs deep-page link distribution,
- top linked pages,
- anchor text distribution,
- brand mentions without links if provider supports it,
- domain-level authority score from the same provider for all compared domains.

Required output:

`reports/authority/devlo-authority-baseline-YYYY-MM-DD.md`

Decision rule:

- If devlo has materially fewer quality referring domains than the SERP leaders, prioritize digital PR and linkable assets before creating more programmatic pages.
- If authority is comparable, prioritize page intent, internal links, and CTR/snippet experiments.

## GEO / LLM Visibility Baseline

Goal: measure whether devlo is cited, named, or linked in AI answers for target commercial queries.

Platforms:

- ChatGPT web search
- Claude search
- Gemini
- Perplexity
- Copilot

Minimum query set:

1. best B2B prospecting agency Switzerland
2. agence prospection B2B Suisse
3. agence de prospection commerciale Suisse
4. B2B lead generation agency Switzerland
5. sales prospecting agency Switzerland
6. GTM engineering agency Europe
7. AI outbound agency Europe
8. Clay enrichment agency Europe
9. alternatives to LalaLeads
10. alternatives to Undersales
11. best B2B prospecting agencies Europe
12. outsourced sales development Switzerland
13. appointment setting agency Switzerland
14. cold email agency Switzerland
15. LinkedIn outreach agency Switzerland
16. lead qualification agency Switzerland
17. B2B telemarketing Switzerland
18. signal based outbound agency
19. outbound agency for DACH
20. multilingual outbound agency Europe

For each platform/query, record:

- devlo cited: yes/no,
- devlo linked: yes/no,
- devlo named without link: yes/no,
- cited page URL,
- answer position if visible,
- competitors cited,
- notes on why competitors were cited.

Required output:

`reports/geo/devlo-llm-visibility-baseline-YYYY-MM-DD.md`

Decision rule:

- If devlo is absent but competitors are cited, build citation-worthy third-party signals and entity mentions before more `llms.txt` edits.
- If devlo is named but not linked, improve page extractability, source passages, and entity consistency.
- If devlo is cited only for branded queries, prioritize category/entity authority assets.

## CFO Cost Profile For A Paid Data Run

| Field | Required answer |
|---|---|
| Client/project | devlo.ch internal SEO |
| Provider/service | DataForSEO backlinks/rank APIs or approved alternative |
| Metered operations | Domain backlink metrics, referring domains, SERP snapshots |
| Unit economics | Must be checked in provider dashboard before the run |
| Expected usage | One baseline pull for 6 domains and 20 queries |
| Worst-case usage | Must be capped before the run starts |
| Runtime guard | Script or manual run must stop after the approved domain/query list |
| Hard cap | Default proposed cap: USD 25 equivalent, pending approval |
| Provider quota | Must be verified in account before first request |
| Notifications | Report completion in PR/final summary; no Slack needed unless blocked |
| Override | Charles approval in the same workflow, with exact cap and provider |

