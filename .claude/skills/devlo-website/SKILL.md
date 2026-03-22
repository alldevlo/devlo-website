---
name: devlo-website-conventions
description: Development conventions and patterns for devlo-website. TypeScript Next.js project with mixed commits.
---

# Devlo Website Conventions

> Generated from [alldevlo/devlo-website](https://github.com/alldevlo/devlo-website) on 2026-03-22

## Overview

This skill teaches Claude the development patterns and conventions used in devlo-website.

## Tech Stack

- **Primary Language**: TypeScript
- **Framework**: Next.js
- **Architecture**: type-based module organization
- **Test Location**: separate

## When to Use This Skill

Activate this skill when:
- Making changes to this repository
- Adding new features following established patterns
- Writing tests that match project conventions
- Creating commits with proper message format

## Commit Conventions

Follow these commit message conventions based on 163 analyzed commits.

### Commit Style: Mixed Style

### Prefixes Used

- `feat`
- `fix`
- `chore`

### Message Guidelines

- Average message length: ~54 characters
- Keep first line concise and descriptive
- Use imperative mood ("Add feature" not "Added feature")


*Commit message example*

```text
feat: interactive buying-signals page with Lovable UI/UX spec
```

*Commit message example*

```text
docs: enrich SEO/GEO guide to 1275 lines + fix Vercel domain aliasing
```

*Commit message example*

```text
fix: use Vercel API to find latest deployment instead of parsing CLI output
```

*Commit message example*

```text
perf: replace force-dynamic with ISR on catch-all locale route
```

*Commit message example*

```text
chore: add AIOS sync trigger on content changes
```

*Commit message example*

```text
feat: add 94 B2B buying signals insight page (#11)
```

*Commit message example*

```text
fix: explicitly alias devlo.ch after each Vercel deployment
```

*Commit message example*

```text
fix: enhanced domain diagnostic workflow
```

## Architecture

### Project Structure: Single Package

This project uses **type-based** module organization.

### Source Layout

```
src/
├── app/
├── components/
├── content/
├── data/
├── lib/
├── types/
```

### Configuration Files

- `.eslintrc.json`
- `.github/workflows/deploy.yml`
- `.github/workflows/fix-domain.yml`
- `.github/workflows/notify-aios.yml`
- `next.config.mjs`
- `package.json`
- `tailwind.config.ts`
- `tsconfig.json`
- `vercel.json`

### Guidelines

- Group code by type (components, services, utils)
- Keep related functionality in the same type folder
- Avoid circular dependencies between type folders

## Code Style

### Language: TypeScript

### Naming Conventions

| Element | Convention |
|---------|------------|
| Files | snake_case |
| Functions | camelCase |
| Classes | PascalCase |
| Constants | SCREAMING_SNAKE_CASE |

### Import Style: Path Aliases (@/, ~/)

### Export Style: Default Exports


*Preferred import style*

```typescript
// Use path aliases for imports
import { Button } from '@/components/Button'
import { useAuth } from '@/hooks/useAuth'
import { api } from '@/lib/api'
```

*Preferred export style*

```typescript
// Use default exports for main component/function
export default function UserProfile() { ... }
```

## Error Handling

### Error Handling Style: Try-Catch Blocks


*Standard error handling pattern*

```typescript
try {
  const result = await riskyOperation()
  return result
} catch (error) {
  console.error('Operation failed:', error)
  throw new Error('User-friendly message')
}
```

## Common Workflows

These workflows were detected from analyzing commit patterns.

### Feature Development

Standard feature implementation workflow

**Frequency**: ~18 times per month

**Steps**:
1. Add feature implementation
2. Add tests for feature
3. Update documentation

**Files typically involved**:
- `src/components/layout/*`
- `src/components/pages/*`
- `src/components/shared/*`
- `**/*.test.*`
- `**/api/**`

**Example commit sequence**:
```
fix(i18n): translate hardcoded French strings in CaseStudySwitcher + SiteHeader
Merge pull request #10 from alldevlo/fix/i18n-hardcoded-strings
feat(ui): homepage services carousel, agence overhaul, breadcrumb upgrade + nav fix
```

### Add Or Enrich Localized Page Content

Adds a new page or enriches an existing page with localized (EN/DE/NL/FR) content, often using DeepL translations, and updates all locale JSON bundles and slug maps for routing.

**Frequency**: ~4 times per month

**Steps**:
1. Create or update the page component (e.g., page.tsx) in the appropriate route directory.
2. Add or update localized content in JSON files (e.g., masterfile-content.json, agency-content.json, alternatives-content.json, blog-content.json, geo-content.json, services-content.json, ai-sales-ops-content.json, case-studies-content.json).
3. If needed, update or generate TypeScript content files (e.g., masterfile.fr.ts, ai-sales-ops-content.ts, agency-content.ts, etc.).
4. Update slug-map.json to add or correct localized slugs for the new/changed page.
5. If necessary, update or create translation scripts (e.g., translate_fr_only_pages_deepl.mjs, geo-translate-json.mjs).
6. Update sitemap.ts to ensure the new/updated routes are discoverable.
7. Optionally, update navigation components or index files to surface the new page.

**Files typically involved**:
- `src/app/[locale]/[[...slug]]/page.tsx`
- `src/app/insights/*/page.tsx`
- `src/app/ai-sales-ops/page.tsx`
- `src/app/agence/page.tsx`
- `src/components/pages/*`
- `src/lib/i18n/*-content.json`
- `src/lib/i18n/slug-map.json`
- `src/content/*.ts`
- `scripts/translate_*.mjs`
- `src/app/sitemap.ts`

**Example commit sequence**:
```
Create or update the page component (e.g., page.tsx) in the appropriate route directory.
Add or update localized content in JSON files (e.g., masterfile-content.json, agency-content.json, alternatives-content.json, blog-content.json, geo-content.json, services-content.json, ai-sales-ops-content.json, case-studies-content.json).
If needed, update or generate TypeScript content files (e.g., masterfile.fr.ts, ai-sales-ops-content.ts, agency-content.ts, etc.).
Update slug-map.json to add or correct localized slugs for the new/changed page.
If necessary, update or create translation scripts (e.g., translate_fr_only_pages_deepl.mjs, geo-translate-json.mjs).
Update sitemap.ts to ensure the new/updated routes are discoverable.
Optionally, update navigation components or index files to surface the new page.
```

### Seo Geo Ai Enrichment

Enriches pages and content with AI SEO, GEO, and structured data signals (e.g., summary sections, author bylines, JSON-LD, answer capsules, citations, transitions, etc.) to improve search and AI crawler visibility.

**Frequency**: ~3 times per month

**Steps**:
1. Add or update SummarySection, AuthorByline, ComparisonTable, FAQSection, or similar components in relevant page files.
2. Add or update structured data (JSON-LD Article schema, microdata, meta tags) in page components.
3. Enrich content JSON/TS files with new fields: summaryPoints, editorialTitle, editorialParagraphs, datePublished, dateModified, external citations, etc.
4. Update or sync localized content files to propagate new enrichment fields.
5. Update or create utility functions for rich-text rendering, metadata, or AI/SEO helpers.
6. Optionally, update documentation or asset references.

**Files typically involved**:
- `src/components/pages/*`
- `src/components/shared/summary-section.tsx`
- `src/components/shared/author-byline.tsx`
- `src/components/shared/comparison-table.tsx`
- `src/components/shared/faq-section.tsx`
- `src/lib/i18n/*-content.json`
- `src/content/*.ts`
- `src/lib/seo/metadata.ts`
- `src/lib/utils/rich-text.tsx`

**Example commit sequence**:
```
Add or update SummarySection, AuthorByline, ComparisonTable, FAQSection, or similar components in relevant page files.
Add or update structured data (JSON-LD Article schema, microdata, meta tags) in page components.
Enrich content JSON/TS files with new fields: summaryPoints, editorialTitle, editorialParagraphs, datePublished, dateModified, external citations, etc.
Update or sync localized content files to propagate new enrichment fields.
Update or create utility functions for rich-text rendering, metadata, or AI/SEO helpers.
Optionally, update documentation or asset references.
```

### Fix Or Update Deployment Domain Workflow

Fixes or hardens Vercel deployment workflows, especially around domain assignment, aliasing, and diagnostics to ensure the production domain points to the latest deployment.

**Frequency**: ~2 times per month

**Steps**:
1. Update .github/workflows/deploy.yml to add/fix alias assignment steps after deployment.
2. Add or update .github/workflows/fix-domain.yml for diagnostic or one-time domain fixes.
3. Use Vercel API (not CLI output) to reliably resolve deployment IDs and assign domains.
4. Pin or update Vercel CLI versions to avoid breaking changes.
5. Optionally, add diagnostics or explicit domain verification steps.

**Files typically involved**:
- `.github/workflows/deploy.yml`
- `.github/workflows/fix-domain.yml`

**Example commit sequence**:
```
Update .github/workflows/deploy.yml to add/fix alias assignment steps after deployment.
Add or update .github/workflows/fix-domain.yml for diagnostic or one-time domain fixes.
Use Vercel API (not CLI output) to reliably resolve deployment IDs and assign domains.
Pin or update Vercel CLI versions to avoid breaking changes.
Optionally, add diagnostics or explicit domain verification steps.
```

### Fix Or Translate I18n Slugs And Redirects

Corrects, translates, or adds localized slugs and 301 redirects for EN/DE/NL/FR routes, especially for case studies, services, legal pages, and navigation.

**Frequency**: ~2 times per month

**Steps**:
1. Update slug-map.json with correct localized slugs for all affected pages.
2. Update next.config.mjs to add or fix 301 redirects for old or incorrect paths.
3. Optionally, update sitemap.ts to ensure new slugs are indexed.
4. Optionally, update navigation or header components for correct links.

**Files typically involved**:
- `src/lib/i18n/slug-map.json`
- `next.config.mjs`
- `src/app/sitemap.ts`

**Example commit sequence**:
```
Update slug-map.json with correct localized slugs for all affected pages.
Update next.config.mjs to add or fix 301 redirects for old or incorrect paths.
Optionally, update sitemap.ts to ensure new slugs are indexed.
Optionally, update navigation or header components for correct links.
```

### Feature Development With Component And Content Sync

Implements a new feature or page (e.g., interactive experience, API integration, newsletter signup), updating both implementation files and associated content/config files.

**Frequency**: ~2 times per month

**Steps**:
1. Create new React components or page files for the feature.
2. Update or create supporting files (e.g., API route, integration config, content JSON/TS).
3. Update or add entries in slug-map.json or i18n bundles if the feature is route-based.
4. Optionally, update documentation or download assets.

**Files typically involved**:
- `src/app/*/page.tsx`
- `src/app/api/*/route.ts`
- `src/components/*`
- `src/lib/i18n/*-content.json`
- `src/lib/i18n/slug-map.json`
- `public/downloads/*`
- `docs/*`

**Example commit sequence**:
```
Create new React components or page files for the feature.
Update or create supporting files (e.g., API route, integration config, content JSON/TS).
Update or add entries in slug-map.json or i18n bundles if the feature is route-based.
Optionally, update documentation or download assets.
```


## Best Practices

Based on analysis of the codebase, follow these practices:

### Do

- Use snake_case for file names
- Prefer default exports

### Don't

- Don't use long relative imports (use aliases)
- Don't deviate from established patterns without discussion

---

*This skill was auto-generated by [ECC Tools](https://ecc.tools). Review and customize as needed for your team.*
