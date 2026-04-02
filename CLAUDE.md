# devlo.ch -- Next.js Website

**Stack:** Next.js 14 (App Router) / TypeScript / Tailwind CSS / Framer Motion / Vercel
**Domain:** https://devlo.ch
**Languages:** fr (default), en, de, nl

## This repo does NOT own
| If you need... | Go to |
|----------------|-------|
| Client ICP, voice, strategy | devlo-aios → `devlo/clients/{slug}/context/` |
| SOPs, playbooks, guidelines | devlo-aios → `devlo/self/sources/` |
| Email/LinkedIn automation | devlo-inbox |
| Prospection, Clay signals | devlo-outbound → `clay-signals/` |
| Client portals | devlo-clients |
| Content creation (LinkedIn, YouTube) | devlo-internal → `content-creation/` |
| Expert brains | expert-brains |
| Architecture decisions, conventions | devlo-aios → `constitution/` |
| Credentials | devlo-aios → `devlo/self/context/access.md` |

**If not in this table:** `grep -r "keyword" ~/alldevlo/*/CLAUDE.md`

---

## Mandatory pre-deploy validation

Before deploying any new page or significant content change to production, follow the checklist in:

**[docs/seo-geo-guide.md](docs/seo-geo-guide.md)** -- SEO & GEO Guide

This guide covers:
- Page creation checklist (metadata, structured data, content structure, performance, GEO)
- Metadata requirements and the `buildPageMetadata()` API
- GEO (Generative Engine Optimization) requirements for AI search citation
- Core Web Vitals targets and known issues
- Multilingual / hreflang rules
- Internal linking rules
- Image requirements
- Structured data templates (JSON-LD)
- llms.txt maintenance
- Validation tools and commands

**Every new page must pass the full checklist before merge.**

---

## Key directories

| Path | Purpose |
|------|---------|
| `src/app/` | App Router pages and layouts |
| `src/components/seo/` | JSON-LD component |
| `src/lib/seo/` | Metadata builder, schema builders, site config |
| `src/lib/i18n/` | Slug map, localized SEO, geo content |
| `src/content/` | HadoSEO metadata overrides, geo pages data |
| `public/llms.txt` | LLM-optimized site map (update when adding pages) |
| `scripts/` | SEO crawler, metadata verification |
| `docs/` | Audits, migration checklists, guides |

---

## SEO infrastructure

| Component | File |
|-----------|------|
| Metadata builder | `src/lib/seo/metadata.ts` |
| Schema builders | `src/lib/seo/schema-builders.ts` |
| Site constants | `src/lib/seo/site-config.ts` |
| robots.txt | `src/app/robots.ts` |
| sitemap.xml | `src/app/sitemap.ts` |
| JSON-LD renderer | `src/components/seo/json-ld.tsx` |
| Metadata overrides | `src/content/hadoseo-metadata.ts` |

---

## MCP servers (project-level)

| Server | Purpose |
|--------|---------|
| `chatseo` | AI SEO scoring (GEO readiness audit) |
| `gsc-server` | Google Search Console data |

---

## Rules

- NEVER remove or modify `favicon.ico`, `icon.png`, or `apple-icon.png`
- NEVER hardcode API keys or secrets
- NEVER deploy without checking the SEO/GEO guide checklist
- NEVER add hreflang tags for locales where the page does not exist
- NEVER set more than 2 images per page as `priority`
- Always use `buildPageMetadata()` for page metadata (do not manually construct Metadata objects)
- Always add new pages to `sitemap.ts` and `llms.txt`
- Always include JSON-LD structured data appropriate to the page type

## Autonomy-First Operating Mode

> Added 2026-04-02. These principles govern all technical work in this repo.

1. **Full autonomy by default.** When given an objective, execute it end-to-end without stopping to ask what to do next. If the next step is logically obvious from the objective, do it. Never ask "Want me to do X?" when X is clearly required to achieve the stated goal.

2. **Expert panel decision-making.** Before making any non-trivial architectural or strategic decision, simulate a brief debate between 2-3 domain experts relevant to the problem. Write out their positions, identify the consensus or strongest argument, then act on it. This replaces asking the user for direction.

3. **Sanity testing is mandatory, permission is not.** Every significant action must be validated (query the result, verify the output, run a test). But validation is not the same as asking permission. Validate silently, report results, continue.

4. **Only stop for true blockers.** A blocker is: missing credentials, ambiguous objective with multiple incompatible interpretations, or a destructive action that cannot be undone (production database drop, force push to main, sending client communications). Everything else — execute.

5. **Error recovery over error reporting.** When something fails, diagnose and fix it before reporting. Only escalate if the fix requires human access or decision. "It failed" is not a status update — "It failed, I diagnosed X, fixed Y, and it now works" is.
