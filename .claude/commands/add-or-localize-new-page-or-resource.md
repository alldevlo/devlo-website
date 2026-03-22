---
name: add-or-localize-new-page-or-resource
description: Workflow command scaffold for add-or-localize-new-page-or-resource in devlo-website.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-or-localize-new-page-or-resource

Use this workflow when working on **add-or-localize-new-page-or-resource** in `devlo-website`.

## Goal

Adds a new page or resource (often with lead capture or SEO focus), or localizes an existing page to new locales. Typically involves creating a new page file, updating i18n slug maps, and sometimes adding supporting assets or API routes.

## Common Files

- `src/app/insights/*/page.tsx`
- `src/lib/i18n/slug-map.json`
- `public/llms.txt`
- `src/app/api/*/route.ts`
- `public/downloads/*.skill`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or rename page file in src/app/insights/ or similar directory
- Update src/lib/i18n/slug-map.json with new or localized route
- Add supporting files (e.g., public/llms.txt for SEO, API route, or downloads)
- Update or add documentation if needed

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.