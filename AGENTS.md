# devlo.ch — Codex Startup Guide

This repo owns the public devlo.ch marketing website.

Before changing pages, SEO/GEO content, routes, navigation, or deployment
behavior, read:

- `CLAUDE.md`
- `docs/seo-geo-guide.md`
- `~/alldevlo/devlo-aios/constitution/repo-registry.md`
- `~/alldevlo/devlo-aios/context/how-we-git.md`
- `~/alldevlo/devlo-aios/constitution/operational-rules.md`

For public website work, Codex must apply the human-first website gate in
`docs/seo-geo-guide.md`: visible pages are written for B2B buyers first,
localized public copy must be native-quality in every shipped language, page
placement must match the user journey, and LLM/GEO mechanics belong in
metadata, schema, `llms.txt`, or internal docs, not in buyer-facing copy.

For multilingual edits, apply a comment raised in one locale to every locale
that shares the same page or component. French must keep accents, German must
use proper umlauts/orthography in visible copy, and Dutch must not expose rough
English placeholders where a natural Dutch phrase exists. Run
`npm run check:public-copy-quality` before build/deploy.

Use a branch and PR. Do not push directly to `main`.
