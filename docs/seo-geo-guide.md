# SEO & GEO Guide -- devlo.ch (Next.js 16 App Router)

**Last updated:** 2026-05-06
**Stack:** Next.js 16.2.4 / App Router / Vercel / TypeScript
**Domain:** https://devlo.ch
**Languages:** fr (default, no prefix), en, de, nl

> This is the internal reference document for every page created on devlo.ch.
> It covers traditional SEO, Generative Engine Optimization (GEO), and
> Next.js-specific implementation details. Treat it as a living document.

---

## Changelog

| Date | Change |
|------|--------|
| 2026-05-06 | Updated current stack from Next.js 14.2.35 to Next.js 16.2.4 after the SEO/GEO P1 refresh. Added `npm run check:seo-quality` as the local/live quality audit command for metadata, H1, canonical, hreflang, schema, CTA, freshness and extractability checks. |
| 2026-03-20 | Major enrichment: added URL/routing rules, title tag formulas, meta description CTR data, canonical URL rules, sitemap best practices, AI platform citation patterns (Google AI Overviews, ChatGPT, Perplexity), tiered AI crawler management, entity/knowledge graph optimization, CWV optimization strategies per metric, internal linking cluster sizing, image srcset/AVIF guidance, structured data entity graph patterns. Restructured TOC to 11 sections. |
| 2026-03-20 | Initial guide created. Covers SEO fundamentals + GEO (Generative Engine Optimization). |

---

## Table of contents

1. [Pre-deploy checklist (quick reference)](#1-pre-deploy-checklist)
2. [Meta tags (title, description, OG, Twitter)](#2-meta-tags)
3. [Content structure (headings, paragraphs, internal links)](#3-content-structure)
4. [URL and routing rules](#4-url-and-routing-rules)
5. [Image optimization](#5-image-optimization)
6. [Structured data (JSON-LD)](#6-structured-data)
7. [Multilingual (hreflang, slug-map, locale handling)](#7-multilingual)
8. [Core Web Vitals](#8-core-web-vitals)
9. [GEO-specific rules (AI citability, llms.txt, answer capsules)](#9-geo-specific-rules)
10. [Validation tools and commands](#10-validation-tools-and-commands)
11. [Appendix: key files in the codebase](#11-appendix-key-files)

---

## 1. Pre-deploy checklist

Run through every item before deploying a new page to production. This is the quick-reference version -- each rule is explained in depth in later sections.

### Metadata & indexing

- [ ] Unique `<title>` (50-60 chars before `| devlo`). Primary keyword front-loaded in first 350px
- [ ] Unique `description` meta tag (120-155 chars). Contains keyword + value proposition + CTA verb
- [ ] `robots: { index: true, follow: true }` is set (default via `buildPageMetadata`)
- [ ] `alternates.canonical` points to the correct canonical URL (absolute, no trailing slash, no query params)
- [ ] `alternates.languages` includes all published locale variants via `buildLanguageAlternates()`
- [ ] Open Graph tags: `og:title`, `og:description`, `og:image` (1200x630), `og:url`, `og:type`
- [ ] Twitter card: `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:images`
- [ ] Self-referencing canonical tag present (even on pages without duplicates)

### Structured data

- [ ] Page inherits Organization + LocalBusiness + Service schemas from root layout
- [ ] Page-specific JSON-LD added via `<JsonLd schema={...} />`
- [ ] Schema type matches content (see decision matrix in section 6)
- [ ] All schema entities use stable `@id` values and cross-reference via `@id` (not duplicated inline)
- [ ] For GEO-critical pages: triple-stack Article + FAQPage + BreadcrumbList minimum

### Content structure (SEO + GEO)

- [ ] Exactly one `<h1>` containing the primary keyword
- [ ] Heading hierarchy is sequential: h1 > h2 > h3 (no skipped levels)
- [ ] At least one question-framed H2 (e.g., "Comment devlo genere des leads B2B ?")
- [ ] Each H2 section starts with a direct answer capsule (under 200 chars, first sentence)
- [ ] Body text includes the target keyword in the first 100 words
- [ ] At least 3 internal links to other pages on devlo.ch (keyword-rich anchor text)
- [ ] At least 1 external link to an authoritative source
- [ ] All images have descriptive `alt` text (max 125 chars, locale-matched)
- [ ] Page is added to `src/app/sitemap.ts` with accurate `lastModified` timestamp

### URL & routing

- [ ] URL slug is 3-5 words, lowercase, hyphen-separated, keyword-present
- [ ] No dates, no uppercase, no underscores, no trailing slash in slug
- [ ] URL matches locale hierarchy: `/[locale]/[category]/[slug]`

### Performance

- [ ] Hero/above-the-fold image uses `priority={true}` with `fetchPriority="high"` and explicit `width`/`height` or `fill` with `sizes`
- [ ] Below-the-fold images use default lazy loading (no `priority`)
- [ ] No layout shift from dynamic content (reserve height for embeds, forms, images)
- [ ] No blocking third-party scripts above the fold
- [ ] Max 2 `priority` images per page

### GEO readiness

- [ ] Visible author attribution (byline: "Par Charles Perret")
- [ ] Publication date and last-modified date visible and in schema
- [ ] Key claims use attribution phrases ("selon", "d'apres", "based on")
- [ ] Statistics have source annotations
- [ ] Content passes the "standalone passage" test: each section is self-contained and quotable
- [ ] At least one HTML table per long-form page (AI engines parse tables with high accuracy)
- [ ] Key entities (devlo, Charles Perret) appear in title, schema, and body

### Final validation

- [ ] Run `node scripts/crawl-seo.mjs` or spot-check with commands in section 10
- [ ] Test with Google Rich Results Test (https://search.google.com/test/rich-results)
- [ ] Verify structured data with Schema Markup Validator (https://validator.schema.org/)
- [ ] Check PageSpeed Insights score >= 90 mobile
- [ ] Verify OG tags render correctly via https://www.opengraph.xyz/

---

## 2. Meta tags

### How metadata works in this codebase

The primary metadata builder is `src/lib/seo/metadata.ts`:

```typescript
import { buildPageMetadata } from "@/lib/seo/metadata";

// In any page.tsx:
export const metadata = buildPageMetadata({
  title: "Prospection commerciale B2B en Suisse",
  description: "devlo aide les entreprises suisses a generer des leads qualifies...",
  path: "/prospection-commerciale-suisse",
  type: "website", // or "article" for blog posts
  imagePath: "/images/og-geo-suisse.webp", // optional custom OG image
  datePublished: "2026-01-15", // for articles
  dateModified: "2026-03-20", // for articles
  author: "Charles Perret", // for articles
});
```

For dynamic routes, use `generateMetadata`:

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await fetchData(params.slug);
  return buildPageMetadata({
    title: data.title,
    description: data.description,
    path: `/etudes-de-cas/${params.slug}`,
    type: "article",
  });
}
```

### 2.1 Title tag rules

#### Format

| Context | Format | Example |
|---------|--------|---------|
| Homepage | Raw title (no suffix) | "Agence de prospection commerciale B2B en Suisse" |
| Other pages | `%s \| devlo` (via template in layout) | "Cold Email B2B : Guide Complet \| devlo" |

#### Length and pixel-width

| Rule | Value |
|------|-------|
| Character length | 50-60 characters (before `\| devlo` suffix) |
| Pixel width (desktop) | Keep under 600px total (including suffix) |
| Pixel width (mobile) | Keep under 430px total |
| Validation | Use SERPSim or Mangools SERP Simulator to preview rendering |

Google uses pixel-width rendering, not character count. Wide letters (W, M) consume more space than narrow ones (i, l). The 50-60 char guideline is a proxy -- always verify visually.

#### Title tag formulas (B2B)

| Formula | Example |
|---------|---------|
| `[Primary Keyword] : [Benefit/Outcome]` | "Cold Email B2B : Generez 50+ Rendez-vous Qualifies" |
| `[Primary Keyword] en [Geo] \| [Brand]` | "Prospection Commerciale en Suisse \| devlo" |
| `[How-to/Guide] : [Primary Keyword] ([Year])` | "Guide Complet : Prospection B2B Externalisee (2026)" |
| `[Number] [Keyword] pour [Audience]` | "7 Strategies de Cold Email pour CEO Suisses" |

#### Title tag optimization rules

1. **Front-load the primary keyword.** Place it within the first 3-4 words. Front-load critical keywords within the first 350 pixels
2. **Include a power word** when natural: "guide", "complet", "methode", "resultats", "gratuit"
3. **Year tag** for time-sensitive content: "(2026)" at the end increases freshness signals
4. **Unique per page.** Never duplicate titles. Each page competes for a different keyword
5. **Brand in suffix only.** The `| devlo` template suffix handles branding. Do not repeat "devlo" in the title body unless it is the homepage
6. **Avoid keyword stuffing.** Google rewrites ~61% of title tags that are too long, vague, or keyword-stuffed. Write for humans first
7. **Match search intent.** Informational queries need "guide/comment/pourquoi". Transactional queries need "tarifs/devis/consultation"

### 2.2 Meta description rules

| Rule | Value |
|------|-------|
| Length | 120-155 characters (aim for 150 to use full space) |
| Pixel width | ~880-920 pixels max |
| Must contain | Primary keyword + value proposition + CTA verb |
| Must not contain | Duplicated text from another page |
| Language | Match the page locale |
| Mobile note | Mobile displays fewer chars -- front-load the value proposition |

#### Description formula

```
[What the page covers] + [unique value/proof point] + [CTA verb].
```

Example: "devlo deploie des campagnes cold email B2B en Suisse. 1000+ campagnes, 15-80 RDV par projet. Demandez votre consultation gratuite."

#### CTR impact data

- Pages with optimized meta descriptions see 20-30% higher CTR vs. generic/missing descriptions
- Including a CTA verb ("decouvrez", "demandez", "comparez") increases click intent
- Google does NOT use meta descriptions as a ranking factor, but higher CTR from better descriptions indirectly improves rankings
- If Google rewrites your description, it means the original was not relevant enough to the query. Fix the content alignment

### 2.3 Open Graph and Twitter cards

#### Open Graph image

| Property | Value |
|----------|-------|
| Dimensions | 1200 x 630 px |
| Format | WebP preferred, JPG fallback |
| Default | `/images/devlo_OG_Banner.webp` (set in `src/lib/seo/metadata.ts`) |
| Custom per-page | Pass `imagePath` to `buildPageMetadata()` or set via HadoSEO override |
| Alt text | Always set -- describes the image content |
| File size | Under 300KB for fast social card rendering |

#### Required OG tags per page

```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://devlo.ch/images/..." />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="..." />
<meta property="og:url" content="https://devlo.ch/..." />
<meta property="og:type" content="website" /> <!-- or "article" -->
<meta property="og:site_name" content="devlo" />
<meta property="og:locale" content="fr_CH" />
```

For articles, also include:
```html
<meta property="article:published_time" content="2026-01-15T00:00:00Z" />
<meta property="article:modified_time" content="2026-03-20T00:00:00Z" />
<meta property="article:author" content="Charles Perret" />
```

#### Twitter card tags

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:images" content="https://devlo.ch/images/..." />
```

All OG and Twitter tags are generated automatically by `buildPageMetadata()`. Verify rendering at https://www.opengraph.xyz/ after deploy.

### 2.4 HadoSEO override system

Page-level metadata can be overridden without code changes via `src/content/hadoseo-metadata.ts`. This file maps routes to custom titles, descriptions, and OG images. The `buildPageMetadata` function checks this automatically.

### 2.5 Canonical URL rules

Every page must have a canonical tag. This consolidates link equity and prevents duplicate content issues.

#### Rules

1. **Always use absolute URLs** in canonical tags: `https://devlo.ch/services/cold-email` (never relative paths)
2. **Self-referencing canonicals on every page.** Even if no duplicates exist today, this prevents future issues. Treat it like writing a meta description -- standard practice
3. **No trailing slash.** Canonical URL must match the exact URL format the site serves (devlo.ch uses no trailing slashes)
4. **No query parameters.** Strip `?utm_source=...` and similar tracking params from canonical URLs
5. **Consistency across signals.** The canonical URL must match across: the `<link rel="canonical">` tag, the sitemap URL, the hreflang self-reference, and any internal links pointing to the page
6. **Multilingual canonicals.** Each locale variant is its own canonical. `/services/cold-email` (fr) and `/en/services/cold-email` (en) each self-reference. They do NOT cross-canonical to each other
7. **JavaScript rendering.** Since Next.js renders metadata server-side, canonical tags are in the initial HTML response. No JS-rendering timing issues apply to this codebase

#### Implementation

Canonical URLs are set automatically by `buildPageMetadata()` via the `path` parameter:

```typescript
export const metadata = buildPageMetadata({
  path: "/services/cold-email", // becomes https://devlo.ch/services/cold-email
  // ...
});
```

---

## 3. Content structure

### 3.1 Heading hierarchy

| Rule | Detail |
|------|--------|
| Single H1 per page | Contains the primary keyword. Appears first in the content flow |
| Sequential nesting | h1 > h2 > h3 > h4. Never skip a level (no h1 > h3) |
| H2 count | 3-8 H2s per long-form page. Each represents a major subtopic |
| Question-framed H2s | At least 1 per page (ideally 2-3). Matches "People Also Ask" queries |
| H3 for sub-sections | Use under H2s for detailed breakdowns. 2-4 H3s per H2 maximum |
| No styling-only headings | Never use H2/H3 for visual sizing. Use CSS classes instead |
| Keyword in H2s | Include secondary/related keywords naturally in H2 text |

#### Heading template for a service page

```
h1: [Service Name] -- [Primary Keyword + Location]
  h2: Qu'est-ce que [service] ? (definition + answer capsule)
  h2: Comment fonctionne [service] ? (process explanation)
    h3: Etape 1 -- [substep]
    h3: Etape 2 -- [substep]
  h2: Quels resultats attendre de [service] ? (proof/data)
  h2: Combien coute [service] ? (pricing)
  h2: Pourquoi choisir devlo pour [service] ? (differentiation)
  h2: Questions frequentes (FAQ -- backed by FAQPage schema)
    h3: [Question 1]
    h3: [Question 2]
```

### 3.2 Paragraph and section rules

| Rule | Value |
|------|-------|
| Paragraph length | 2-4 sentences. Max 80 words per paragraph |
| Section length (H2) | 120-180 words (the AI citation sweet spot) |
| Keyword in first 100 words | Primary keyword must appear in the opening paragraph |
| Keyword density | 1-2% of body text. Natural usage, never forced |
| Transition words | Use "cependant", "par consequent", "de plus", "en revanche" between paragraphs |
| Readability target | Flesch Reading Ease: 50-60 (moderate difficulty for B2B executives) |
| Lists and bullets | Use for 3+ items. Ordered lists for steps, unordered for features |
| Bold for emphasis | Bold key phrases (not full sentences). Helps scanning and AI extraction |

### 3.3 Content architecture: answer-first pattern

Every section should follow the inverted pyramid:

1. **Answer/conclusion** (first sentence -- the answer capsule)
2. **Evidence/data** (supporting facts, statistics, examples)
3. **Context/nuance** (caveats, alternatives, deeper explanation)

This structure maximizes both:
- **SEO**: Google's featured snippets pull from the first 1-2 sentences
- **GEO**: AI engines extract the opening passage as a citation candidate

### 3.4 Internal linking within content

| Rule | Minimum | Notes |
|------|---------|-------|
| Internal links per page | 3 minimum, 5-8 ideal | Link to related services, case studies, blog posts |
| Contextual anchor text | Required | Keyword-rich, not "cliquez ici" or "en savoir plus" |
| Case study cross-links | 2 per case study | Link to related case studies by industry or metric |
| CTA link | 1 per page | Link to `/consultation` from every content page |
| Link to parent hub | 1 per cluster page | Every spoke page links to its pillar/hub page |
| Orphan pages | Zero tolerance | Every page must be reachable within 3 clicks from homepage |

#### Hub-and-spoke model

Service pages are hubs. Case studies, blog posts, and geo pages are spokes that link back to their parent service hub.

| Cluster | Hub page | Spoke pages |
|---------|----------|-------------|
| Cold email | `/services/cold-email` | Case studies using cold email, blog guides, geo landing pages |
| LinkedIn | `/services/linkedin-outreach` | Case studies using LinkedIn, blog guides |
| Multicanal | `/services/prospection-multicanale` | Combined campaign case studies |

**Cluster sizing:** Aim for 8-15 spoke pages per hub. Minimum 5 to establish topical authority. Maximum 20-25 before splitting into sub-clusters.

**AI authority impact:** Content organized in well-linked clusters increases AI citation rates from ~12% to ~41% (industry benchmark). This is because AI engines evaluate topical breadth and depth as a trust signal.

#### Anchor text guidelines

| Pattern | Example |
|---------|---------|
| Keyword-rich | "notre service de [cold email B2B](/services/cold-email)" |
| Natural context | "comme le montre [cette etude de cas](/etudes-de-cas/hr-54-rendez-vous-dach)" |
| Avoid | "cliquez ici", "en savoir plus", bare URLs |
| Avoid over-optimization | Do not use the exact same anchor text for the same target across many pages |
| Vary anchor text | Use 3-4 variations of anchor text for the same target URL across the site |

#### Breadcrumb navigation

Use `buildBreadcrumbSchema()` from `src/lib/seo/schema-builders.ts` on all non-homepage pages. Breadcrumbs provide both a UI navigation aid and structured data that search engines use to understand site hierarchy.

---

## 4. URL and routing rules

### 4.1 URL structure

```
https://devlo.ch/                           -> French homepage (default, no prefix)
https://devlo.ch/en/                        -> English homepage
https://devlo.ch/de/                        -> German homepage
https://devlo.ch/nl/                        -> Dutch homepage
https://devlo.ch/services/cold-email        -> French service page
https://devlo.ch/en/services/cold-email     -> English service page
https://devlo.ch/etudes-de-cas/[slug]       -> French case study
https://devlo.ch/en/case-studies/[slug]     -> English case study
```

Decision: Subfolders for locales, not subdomains. Domain authority is shared across all locale variants. See `docs/I18N_SEO_PLAN.md`.

### 4.2 Slug rules

| Rule | Detail |
|------|--------|
| Length | 3-5 meaningful words (25-30 characters ideal) |
| Separator | Hyphens only (`-`). Never underscores (`_`) |
| Case | Lowercase only. Mixed case causes duplicate content issues |
| Keywords | Include primary keyword in slug. Remove stop words ("le", "la", "de", "et") |
| No dates | Never include year/month in URL. Dates make content appear stale and prevent URL reuse |
| No file extensions | No `.html`, `.php`. Clean URLs only |
| No trailing slash | devlo.ch serves URLs without trailing slash. Enforce via middleware |
| No query parameters for content | Content pages use path segments, not `?page=cold-email` |
| No special characters | ASCII only. No accents in slugs. Use `prospection-b2b` not `prospection-b2b-suisse-romande` |
| Max depth | 3 levels maximum: `/[locale]/[category]/[slug]` |

#### Slug examples

| Good | Bad | Why |
|------|-----|-----|
| `/services/cold-email` | `/services/cold_email` | Hyphens, not underscores |
| `/etudes-de-cas/logiciel-comptable-200k-ca` | `/etudes-de-cas/2026/01/logiciel-comptable-200k-ca` | No dates in URL |
| `/en/services/cold-email` | `/EN/Services/Cold-Email` | Lowercase only |
| `/blog/guide-prospection-b2b` | `/blog/le-guide-complet-de-la-prospection-b2b-en-suisse-romande` | Too long -- max 5 words |

### 4.3 Redirect rules

| Scenario | Action |
|----------|--------|
| Page renamed/moved | 301 redirect from old URL to new URL. Permanent. Preserve link equity |
| Page deleted | 301 to the closest relevant page (parent hub or homepage). Never 404 a page that had external links |
| Trailing slash | 301 from `/path/` to `/path` (handled by Next.js middleware) |
| HTTP to HTTPS | 301 redirect (handled by Vercel) |
| www to non-www | 301 redirect (handled by Vercel) |
| Query param variants | Canonical tag on the clean URL. Do not create separate pages for query variants |

### 4.4 Dynamic parameters

Static URLs are always preferred for SEO. When dynamic parameters are unavoidable:

- Limit to 2 key-value pairs maximum
- Use `generateStaticParams()` in Next.js to pre-render known paths at build time
- Set canonical to the clean URL (without parameters)

### 4.5 Sitemap configuration

Sitemap is generated by `src/app/sitemap.ts` which iterates all locale variants automatically.

#### Sitemap rules

| Rule | Detail |
|------|--------|
| `lastmod` (lastModified) | **The only tag Google actually uses.** Must reflect real content change date. Use full ISO 8601 timestamp (`2026-03-20T10:30:00+01:00`) for highest precision |
| `priority` | **Google ignores this.** Bing may still use it. Set but do not rely on it |
| `changefreq` (changeFrequency) | **Google ignores this.** Set but do not rely on it |
| Max URLs per sitemap | 50,000 URLs or 50MB uncompressed. Not a concern for devlo.ch currently |
| Every sitemap URL must | Return 200, be the canonical version, have no `noindex` directive |
| Sitemap in robots.txt | Reference sitemap URL in `robots.ts` (already configured) |

**Do not game `lastmod` dates.** Setting `lastmod` to today's date when nothing changed erodes Google's trust in the sitemap signal. Only update `lastmod` when content actually changes.

---

## 5. Image optimization

### 5.1 Format and compression

| Requirement | Value |
|-------------|-------|
| Primary format | WebP for broad compatibility |
| Progressive enhancement | AVIF via Next.js automatic format negotiation |
| Next.js config | `formats: ["image/avif", "image/webp"]` in `next.config.mjs` |
| Quality setting | 80-85 for photos (devlo uses `quality={82}` for hero images). 90+ for text-heavy graphics |
| Lossy compression target | 80% quality reduces file sizes by 70-80% with no visible quality loss |
| Max file size (source) | 200KB for photos, 50KB for icons/illustrations, 300KB for OG images |

#### Format selection guide

| Use case | Format | Why |
|----------|--------|-----|
| Photographs, hero images | WebP (with AVIF fallback) | Best balance of quality and compatibility |
| Icons, logos, simple graphics | SVG | Resolution-independent, tiny file size |
| Screenshots with text | PNG -> WebP | Lossless text rendering |
| OG images | WebP preferred, JPG fallback | Social platforms have varying WebP support |
| Animated content | WebP animated or CSS animation | Avoid GIF (huge file sizes) |

### 5.2 Responsive images and srcset

Next.js `<Image>` handles `srcset` automatically, but you must provide the right props:

```typescript
// Hero image (above the fold)
<Image
  src="/images/hero-prospection.webp"
  alt="Campagne de prospection B2B devlo en Suisse"
  width={1200}
  height={630}
  priority={true}
  sizes="100vw"
  quality={82}
/>

// Content image (responsive, below fold)
<Image
  src="/images/case-study-results.webp"
  alt="Resultats campagne cold email: 54 rendez-vous en 3 mois"
  width={800}
  height={450}
  sizes="(min-width: 1024px) 50vw, 100vw"
/>

// Thumbnail (fixed size)
<Image
  src="/images/team-charles.webp"
  alt="Charles Perret, fondateur de devlo"
  width={400}
  height={400}
/>
```

#### Sizing rules

| Context | `sizes` prop | `priority` | Dimensions |
|---------|-------------|------------|------------|
| Hero / above the fold | `"100vw"` | `true` | `fill` or explicit `width`/`height` |
| Content image (half width) | `"(min-width: 1024px) 50vw, 100vw"` | `false` | Explicit `width`/`height` |
| Content image (full width) | `"100vw"` | `false` | Explicit `width`/`height` |
| Thumbnail / avatar | Not needed | `false` | Fixed `width`/`height` |
| OG image | N/A (not rendered on page) | N/A | 1200 x 630 px |

### 5.3 Alt text

| Rule | Detail |
|------|--------|
| Every image must have alt text | Describe the content, not the file name |
| Decorative images | Use `alt=""` (empty string, not missing) |
| Include keyword naturally | "Resultats de la campagne cold email B2B pour Horus Software" |
| Max length | 125 characters (screen readers truncate after this) |
| Language | Match the page locale (French alt text on French pages) |
| Front-load the keyword | Place the most important descriptor first |
| No "image of" or "photo of" | Screen readers already announce it as an image |

### 5.4 Current gap (from ChatSEO audit)

Homepage: 149 of 211 images have alt text (71%). Academy: 8 of 52 images have alt text (15%). **Priority: fix Academy page image alt texts.**

### 5.5 Lazy loading and priority

- `next/image` lazy-loads by default. Do NOT add `loading="lazy"` manually
- Use `priority={true}` for the single largest above-the-fold image per page
- Use `fetchPriority="high"` alongside `priority` for the hero LCP image
- Maximum 2 `priority` images per page -- more defeats the purpose
- For critical LCP images, also add a `<link rel="preload">` in the `<head>` if the image is not immediately discoverable in the HTML

### 5.6 Image SEO impact

Images typically account for 50-75% of total page weight. Unoptimized images destroy LCP scores, which is a direct Google ranking factor. Every image optimization directly impacts Core Web Vitals.

---

## 6. Structured data

All schema builders are in `src/lib/seo/schema-builders.ts`. Render via `<JsonLd schema={...} />` from `src/components/seo/json-ld.tsx`.

### 6.1 General principles

| Principle | Detail |
|-----------|--------|
| Format | JSON-LD (Google's recommended format). Injected in `<head>` via Server Components |
| Accuracy | Schema data must match visible page content exactly. Do not add schema for content that is not on the page |
| Entity graph | Define each entity (Organization, Person, LocalBusiness) once with a stable `@id`. Reference by `@id` elsewhere |
| GEO impact | Well-implemented JSON-LD increases AI citation probability by 30-40% (industry research) |
| Validation | Always test with Google Rich Results Test + Schema Markup Validator after deploy |
| AI visibility shift | In 2026, the primary value of JSON-LD is no longer just rich snippets -- it is AI visibility. AI systems rely on structured data to understand, summarize, and cite content |

### 6.2 Entity graph pattern (`@id` references)

Instead of duplicating entity data in every schema block, define entities once and reference them:

```typescript
// Organization defined once (in layout.tsx)
{
  "@type": "Organization",
  "@id": "https://devlo.ch/#organization",
  "name": "devlo",
  "url": "https://devlo.ch",
  // ... full org data
}

// Article references the organization by @id
{
  "@type": "Article",
  "publisher": { "@id": "https://devlo.ch/#organization" },
  "author": { "@id": "https://devlo.ch/#charles-perret" },
  // ... article data
}

// Person defined once
{
  "@type": "Person",
  "@id": "https://devlo.ch/#charles-perret",
  "name": "Charles Perret",
  "url": "https://www.linkedin.com/in/charlesperret/",
  "sameAs": [
    "https://www.linkedin.com/in/charlesperret/",
    "https://twitter.com/charlesperret"
  ]
}
```

The `sameAs` property links to external profiles, reinforcing entity identity across the knowledge graph.

### 6.3 Triple-stacking for GEO pages

For pages that need maximum AI citation visibility, stack multiple schema types. Research shows that 74.2% of AI citations come from pages with structured "Top N" or listicle-format content backed by schema.

Recommended stack for GEO-critical pages:

| Schema | Purpose |
|--------|---------|
| Article | Establishes authorship, dates, and content type |
| FAQPage | Makes Q&A pairs directly extractable by AI |
| BreadcrumbList | Provides site hierarchy context |
| ItemList (optional) | For ranked/listicle content |
| HowTo (optional) | For step-by-step guides |

### 6.4 Organization (global -- already in layout.tsx)

Already implemented. Includes Organization + LocalBusiness (CH + US) + Service with AggregateRating. Localized per `htmlLang`. No action needed.

### 6.5 BreadcrumbList

Use on all non-homepage pages.

```typescript
import { buildBreadcrumbSchema } from "@/lib/seo/schema-builders";
import { JsonLd } from "@/components/seo/json-ld";

<JsonLd schema={buildBreadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Etudes de cas", path: "/etudes-de-cas" },
  { name: "Horus Software", path: "/etudes-de-cas/logiciel-comptable-200k-ca" },
])} />
```

### 6.6 FAQPage

Use on any page with Q&A content (homepage FAQ section, service pages).

```typescript
import { buildFaqPageSchema } from "@/lib/seo/schema-builders";

<JsonLd schema={buildFaqPageSchema([
  {
    question: "Combien coute une campagne de prospection B2B ?",
    answer: "Une campagne coute entre 2000 et 8000 CHF/mois selon le volume et les canaux.",
  },
  {
    question: "Quels resultats attendre d'une campagne cold email ?",
    answer: "En moyenne, nos clients obtiennent 15 a 80 rendez-vous qualifies par campagne.",
  },
])} />
```

### 6.7 Article (blog posts and case studies)

```typescript
import { buildArticleSchema } from "@/lib/seo/schema-builders";

<JsonLd schema={buildArticleSchema({
  headline: "Cold Email B2B : Guide Complet",
  description: "Comment structurer et deployer des campagnes cold email performantes.",
  path: "/blog/cold-email-b2b-guide-complet",
  imagePath: "/images/blog/cold-email-guide-og.webp",
  datePublished: "2026-01-15",
  dateModified: "2026-03-20",
  author: "Charles Perret",
  authorUrl: "https://www.linkedin.com/in/charlesperret/",
})} />
```

### 6.8 HowTo (step-by-step guides)

```typescript
import { buildHowToSchema } from "@/lib/seo/schema-builders";

<JsonLd schema={buildHowToSchema(
  "Comment lancer une campagne de prospection B2B",
  [
    { title: "Definir votre ICP", description: "Identifiez les entreprises cibles par taille, secteur et localisation." },
    { title: "Construire la liste", description: "Utilisez LinkedIn Sales Navigator et Clay pour enrichir les contacts." },
    { title: "Rediger les sequences", description: "Creez 3 a 5 emails personnalises avec un CTA clair." },
    { title: "Lancer et iterer", description: "Envoyez, mesurez les taux de reponse, et optimisez." },
  ]
)} />
```

### 6.9 VideoObject (YouTube embeds)

```typescript
import { buildVideoObjectSchema } from "@/lib/seo/schema-builders";

<JsonLd schema={buildVideoObjectSchema({
  name: "Comment devlo genere 80 rendez-vous B2B",
  description: "Charles Perret explique la methode de prospection multicanale de devlo.",
  thumbnailUrl: "/images/video-thumbnail.webp",
  uploadDate: "2026-03-15",
  embedUrl: "https://www.youtube.com/embed/VIDEO_ID",
  duration: "PT12M30S", // ISO 8601 duration
})} />
```

### 6.10 Course (Academy page -- already implemented)

Already implemented via `buildCourseSchema()` in `schema-builders.ts`. No action needed.

### 6.11 Review / AggregateRating (already in layout Service schema)

Already implemented in the layout-level Service schema. For additional review schemas on specific pages, use `buildReviewSchema()`.

### 6.12 Schema type decision matrix

| Page type | Required schemas | GEO-enhanced stack |
|-----------|-----------------|-------------------|
| Homepage | Organization, LocalBusiness, Service, FAQPage | + ItemList for service listing |
| Service page | BreadcrumbList, Service or FAQPage | + Article if blog-length content |
| Case study | BreadcrumbList, Article | + FAQPage if Q&A section |
| Blog post | BreadcrumbList, Article | + FAQPage + HowTo if applicable |
| Geo landing page | BreadcrumbList, LocalBusiness, Service | + FAQPage for local questions |
| Academy | BreadcrumbList, Course | -- |
| Alternative page | BreadcrumbList, FAQPage (if comparison) | + ItemList for feature comparison |
| Consultation | BreadcrumbList | -- |

---

## 7. Multilingual

### 7.1 URL structure

```
https://devlo.ch/              -> French (default, no prefix)
https://devlo.ch/en/           -> English
https://devlo.ch/de/           -> German
https://devlo.ch/nl/           -> Dutch
```

Decision: Subfolders, not subdomains. Domain authority is shared. See `docs/I18N_SEO_PLAN.md`.

### 7.2 hreflang implementation

hreflang tags are generated automatically by `buildLanguageAlternates()` in `src/lib/seo/metadata.ts`, which reads from the slug map (`src/lib/i18n/slug-map.ts`).

**Rules:**

1. **Only declare hreflang for pages that actually exist in that locale.** Never point hreflang to a 404 or redirect
2. **Every page must reference itself** in the hreflang set (self-referential tag)
3. **Include `x-default`** pointing to the French (default) version
4. **Use correct locale codes:** `fr`, `en`, `de`, `nl` (language only, not `fr-CH` unless regional targeting is needed)
5. **Reciprocal linking is mandatory.** If page A (fr) links to page B (en) with hreflang, page B must also link back to page A. Missing return tags invalidate the entire setup
6. **Translated slugs are supported** but not mandatory. The slug map handles mappings like:
   - `/consultation` (fr) -> `/en/consultation` (en) -> `/de/kostenlose-beratung` (de) -> `/nl/gratis-consultatie` (nl)

### 7.3 Adding a new locale variant

1. Create the translated page content (use professional translation, not automated)
2. Add the route mapping in `src/lib/i18n/slug-map.ts`
3. The `buildLanguageAlternates()` function will automatically generate hreflang tags
4. Verify the sitemap includes the new URL (`src/app/sitemap.ts` iterates all locale variants)
5. Verify `<html lang="xx">` is set correctly via the `x-devlo-locale` header in layout.tsx
6. Test: confirm the hreflang tag appears in the HTML source of both the new page and its existing locale counterparts

### 7.4 Multilingual SEO rules

| Rule | Detail |
|------|--------|
| Unique metadata per locale | Title, description, and OG tags must be translated -- not just the body content |
| Alt text per locale | Image alt text must be in the page's language |
| Canonical per locale | Each locale variant is its own canonical. Do NOT cross-canonical between locales |
| Sitemap per locale | All locale URLs appear in the same sitemap (already handled by `sitemap.ts`) |
| Content quality | Use professional translation. Automated translation produces thin content that hurts rankings |
| `<html lang="xx">` | Must match the page content language. Set via middleware/layout |

### 7.5 Common mistakes to avoid

- Do NOT add hreflang for a locale if the page does not exist yet (returns 404)
- Do NOT use `fr-CH` in hreflang unless you also have a `fr-FR` or `fr-BE` variant
- Do NOT forget to update the sitemap when adding new locale pages
- Do NOT mix ISO codes: it is `de`, not `ge`; it is `nl`, not `du`
- Do NOT cross-canonical between locales (each locale self-canonicalizes)
- Do NOT forget reciprocal hreflang links (31% of international sites get this wrong)
- Do NOT serve different languages on the same URL based on IP/cookies (Google cannot index this)

---

## 8. Core Web Vitals

### 8.1 Target thresholds

#### Google "Good" rating

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | < 2.5s | 2.5s - 4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | < 200ms | 200ms - 500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 0.1 - 0.25 | > 0.25 |

**Passing criteria:** At least 75% of page visits must meet "Good" for all three metrics.

#### devlo.ch internal targets

| Metric | Target | Rationale |
|--------|--------|-----------|
| LCP | < 2.0s | Below Google threshold with margin |
| INP | < 150ms | Below Google threshold with margin |
| CLS | < 0.05 | Half the Google threshold -- zero-shift goal |
| Lighthouse Performance (mobile) | >= 90 | Competitive floor for B2B sites |
| Lighthouse Performance (desktop) | >= 95 | Near-perfect expected for static content |

#### Current baseline (2026-03-06)

| Page | Mobile | Desktop | Notes |
|------|--------|---------|-------|
| Homepage | 88 | 100 | -- |
| Services | 93 | 100 | -- |
| Consultation | 92 | 93 | CLS fixed (was 0.158 desktop) |
| Case study (Horus) | 93 | 100 | -- |

### 8.2 LCP optimization strategies

LCP measures when the main content becomes visible. Only 62% of mobile pages achieve good LCP, making it the hardest CWV to pass (2025 Web Almanac).

| Strategy | Implementation | Impact |
|----------|---------------|--------|
| Preload LCP image | `priority={true}` + `fetchPriority="high"` on hero image | High |
| Optimize image format | WebP/AVIF via Next.js `formats` config | High |
| Critical CSS inlining | Next.js App Router handles this automatically for Server Components | Medium |
| Font preloading | `next/font/local` with `display: swap` (already configured) | Medium |
| Server-side rendering | All pages are SSR/SSG by default in App Router | High |
| Minimize server response time | Vercel edge CDN handles this. Target TTFB < 200ms | High |
| Avoid render-blocking scripts | GA4/HubSpot use `strategy="lazyOnload"` | Medium |
| Reduce image file size | Target < 200KB for hero images after compression | Medium |

**Priority fix for devlo.ch:** Homepage mobile score is 88. Investigate LCP element on mobile -- likely the hero image. Consider preloading with `<link rel="preload">`.

### 8.3 INP optimization strategies

INP measures responsiveness to user interactions. 43% of sites fail the 200ms threshold, making INP the most commonly failed CWV in 2026.

| Strategy | Implementation | Impact |
|----------|---------------|--------|
| Break long tasks | Split JavaScript tasks > 50ms into smaller chunks using `requestIdleCallback` or `scheduler.yield()` | High |
| Reduce DOM complexity | Keep DOM nodes under 1,500. Avoid deeply nested component trees | Medium |
| Defer non-critical JS | Use `React.lazy()` and `Suspense` for below-fold interactive components | High |
| Server Components | Use RSC for non-interactive content (reduces client JS bundle) | High |
| Minimize event handlers | Debounce scroll/resize handlers. Use `passive: true` for touch events | Medium |
| Avoid layout thrashing | Batch DOM reads and writes. Do not interleave `getBoundingClientRect()` with style changes | Medium |

**devlo.ch advantage:** App Router's Server Components already reduce client-side JavaScript significantly. Most pages are primarily static content with minimal interactivity.

### 8.4 CLS optimization strategies

CLS measures unexpected layout shifts. The most common cause is images, fonts, and dynamically injected content.

| Strategy | Implementation | Impact |
|----------|---------------|--------|
| Image dimensions | Always set explicit `width`/`height` or use `fill` with `sizes` on `next/image` | Critical |
| Font display | `display: swap` with `next/font/local` (already configured) | High |
| Reserve space for embeds | `min-h-[560px] md:min-h-[640px]` on HubSpot form containers | High |
| Reserve space for ads/banners | Fixed height containers with CSS `aspect-ratio` | Medium |
| Avoid injected content above fold | Never insert banners, bars, or dynamic content above existing content after load | Critical |
| CSS `contain` property | Use `contain: layout` on components that should not affect siblings | Low |

### 8.5 Common CWV issues in this codebase

| Issue | Fix |
|-------|-----|
| CLS from HubSpot form load | Reserve height: `min-h-[560px] md:min-h-[640px]` on form container |
| CLS from image loading | Always set explicit `width`/`height` or use `fill` with `sizes` on `next/image` |
| LCP delay from third-party scripts | GA4 and HubSpot use `strategy="lazyOnload"` -- do not change to `beforeInteractive` |
| Large JS bundle from framer-motion | Use CSS animations where possible (already done for `fade-in-on-scroll`) |
| Font flash (FOIT/FOUT) | Using `display: swap` with `next/font/local` -- already configured |
| INP from heavy scroll handlers | Debounce and use `passive: true` on all scroll/touch event listeners |

### 8.6 Business impact

Sites passing all three CWV thresholds see:
- 24% lower bounce rates
- Measurably better organic rankings
- Higher user engagement metrics
- Pages cited in AI Overviews earn 35% more organic clicks

Only 47% of sites meet all three thresholds -- passing CWV is a competitive advantage.

---

## 9. GEO-specific rules

GEO (Generative Engine Optimization) optimizes content for citation by AI systems: Google AI Overviews, ChatGPT web search, Perplexity, Claude search. In 2026, this is as important as traditional SEO.

### Current devlo.ch AI SEO score: 57/100 (from ChatSEO audit 2026-03-15)

Key weaknesses to fix:
- Answerability: 26% (need answer capsules after question-framed H2s)
- Grounding Signals: 35% (need attribution, citations, dates)
- Readability for Compression: 38% (simplify language, add transitions)

### 9.1 How each AI platform selects sources

Understanding how each platform picks content to cite is critical for optimization.

#### Google AI Overviews

| Factor | Detail |
|--------|--------|
| Source ranking | In early 2026, only ~38% of cited pages come from top-10 organic results (down from 76%). Traditional ranking matters less |
| Semantic completeness | Content scoring 8.5/10+ on semantic completeness is 4.2x more likely to appear |
| Multi-modal content | Pages with text + images + video + structured data show 156% higher selection rates |
| E-E-A-T | 96% of AI Overview content comes from sources with verified E-E-A-T signals |
| Factual verification | Content with verifiable, cross-referenced facts is prioritized |
| Content freshness | Older articles lose citation priority without freshness updates |

#### ChatGPT web search

| Factor | Detail |
|--------|--------|
| Page speed | Pages with FCP < 0.4s average 6.7 citations. Slow pages (>1.13s FCP) drop to 2.1 citations |
| Domain authority | Sites with 32K+ referring domains are 3.5x more likely to be cited |
| Content position | 44.2% of citations come from the first 30% of text (the intro). Front-load key information |
| Top sources | Wikipedia (43%), Reddit (12%), YouTube (5%), LinkedIn (11% across all AI platforms) |
| RAG process | ChatGPT queries a search index, retrieves candidate documents, synthesizes an answer, and cites contributors |

#### Perplexity

| Factor | Detail |
|--------|--------|
| Google correlation | Perplexity cites top-10 Google results 91% of the time (highest correlation of any AI platform) |
| Content preferences | Favors: comprehensive guides, original research, recent updates, comparisons, expert opinions with credentials |
| Content dislikes | Avoids: thin content, promotional material, outdated information |
| Credibility + recency | Evaluates sources on credibility, recency, relevance, and citability |

#### Key insight for devlo.ch

Traditional SEO still matters for Perplexity (91% Google overlap). For ChatGPT, page speed and domain authority dominate. For Google AI Overviews, semantic completeness and E-E-A-T are the differentiators. Optimize for all three by combining strong traditional SEO with GEO-specific content patterns.

### 9.2 Answer capsule pattern

Every question-framed heading must be followed immediately by a direct answer in under 200 characters. This is the single highest-impact GEO pattern.

```
WRONG:
## Comment fonctionne la prospection B2B ?
La prospection B2B est un sujet complexe qui implique de nombreux facteurs...

RIGHT:
## Comment fonctionne la prospection B2B ?
La prospection B2B consiste a identifier et contacter des decideurs d'entreprises
cibles via email, LinkedIn et telephone pour generer des rendez-vous qualifies.

En pratique, cela implique trois etapes : le ciblage, la sequence multicanale,
et la qualification des reponses...
```

### 9.3 Passage-level citability

AI engines extract individual passages, not full pages. Each section must pass this test: "If this paragraph were shown alone, would it be a complete, useful answer?"

Rules:
- Each H2 section should be 120-180 words (the citation sweet spot)
- Start with the conclusion/answer, then expand with context
- Include at least one specific data point per section
- Use transition words (cependant, par consequent, de plus) to improve logical flow
- 44.2% of AI citations come from the first 30% of content -- invest heavily in the introduction

### 9.4 Attribution and authority signals

AI engines weight content higher when claims are attributed. Princeton research shows that citing sources, adding statistics, and including quotations can improve AI visibility by 30-40%.

| Pattern | Example |
|---------|---------|
| Expert attribution | "Selon Charles Perret, expert en prospection B2B avec plus de 1000 campagnes deployees..." |
| Data attribution | "D'apres une etude interne portant sur 14 campagnes B2B en Suisse..." |
| Source linking | "Comme le recommande HubSpot dans son guide de cold emailing [lien]..." |
| Quoted attribution | "Les taux de reponse en cold email B2B se situent entre 1% et 5%" -- SalesLoft, 2025 |
| Credential signaling | Author byline with title, years of experience, number of campaigns. Visible on page + in schema |

### 9.5 Content freshness signals

AI engines strongly prefer content less than 12 months old.

- [ ] Every page must have a visible "Derniere mise a jour : [date]" or "Last updated: [date]"
- [ ] Use `dateModified` in Article schema (full ISO 8601 timestamp)
- [ ] Use `article:modified_time` meta tag (set via `buildPageMetadata` `dateModified` param)
- [ ] Update `lastModified` in sitemap.ts when content changes (real dates only)
- [ ] Quarterly content freshness audit: review all pages, update data points and dates
- [ ] Content decay warning: pages not updated in 6+ months should be flagged for review

### 9.6 Entity clarity and knowledge graph

AI engines need to clearly identify what entity (brand, person, concept) the page is about.

#### Entity optimization rules

- [ ] "devlo" must appear in: page title, OG title, schema, and footer
- [ ] "Charles Perret" must appear on content pages with author byline
- [ ] Define key terms explicitly on first use: "La prospection B2B (business-to-business) designe..."
- [ ] Maintain 2-8 named entities per 100 words
- [ ] Use `sameAs` in schema to link to external profiles (LinkedIn, Twitter, Crunchbase)
- [ ] Use consistent entity naming across all pages (always "devlo", never "Devlo" or "DEVLO" in body text)

#### Brand mention strategy for AI visibility

| Action | Why |
|--------|-----|
| Maintain active LinkedIn presence | LinkedIn is the #2 most cited domain across ChatGPT, Google AI Mode, and Perplexity (11% of AI responses reference LinkedIn) |
| YouTube mentions | YouTube branded mentions are a top factor correlating with AI brand visibility |
| Consistent NAP | Name, Address, Phone consistent across all listings (Google Business, schema, directory sites) |
| External mentions | Seek guest posts, interviews, podcast mentions. AI engines weight earned media (third-party mentions) heavily over self-published content |
| Wikipedia presence | Wikipedia accounts for 43% of ChatGPT citations. A Wikipedia mention (even indirect) dramatically increases citation probability |

### 9.7 Structured Q&A format

For pages with FAQ content, structure as explicit Q&A pairs. AI engines extract these directly.

```html
<h2>Questions frequentes</h2>
<h3>Combien coute une campagne de prospection B2B ?</h3>
<p>Une campagne de prospection B2B externalisee coute entre 2000 et 8000 CHF par mois,
selon le volume de prospects cibles et le nombre de canaux utilises.</p>
```

Back this with FAQPage JSON-LD (see section 6).

### 9.8 Tables and comparative data

AI engines parse HTML tables with high accuracy. Use tables for:
- Pricing comparisons
- Feature comparisons (vs competitors)
- Campaign results summaries (before/after metrics)
- Process step breakdowns
- Data-driven comparisons of any kind

Tables are particularly effective for Google AI Overviews, which frequently extract and display tabular data directly.

### 9.9 Multi-modal content

Pages combining text + images + video + structured data show 156% higher AI Overview selection rates (2025 research). For devlo.ch:

| Content type | Implementation |
|-------------|----------------|
| Text | Well-structured prose with answer capsules (sections 9.2-9.3) |
| Images | Relevant images with descriptive alt text (section 5) |
| Video | YouTube embeds with VideoObject schema (section 6.9) |
| Structured data | JSON-LD triple-stacking (section 6.3) |
| Tables | HTML tables for data and comparisons (section 9.8) |

Aim to include at least 3 of these 5 content types on every GEO-critical page.

### 9.10 AI crawler access and management

#### Current configuration

devlo.ch allows all major AI crawlers in `src/app/robots.ts`:

| Bot | Owner | Type | Status |
|-----|-------|------|--------|
| GPTBot | OpenAI | Training | Allowed |
| OAI-SearchBot | OpenAI | Real-time search retrieval | Allowed |
| ChatGPT-User | OpenAI | Live user browsing | Allowed |
| ClaudeBot | Anthropic | Training | Allowed |
| Claude-SearchBot | Anthropic | Search retrieval | Allowed |
| Claude-User | Anthropic | Live user browsing | Allowed |
| PerplexityBot | Perplexity | Indexing | Allowed |
| Perplexity-User | Perplexity | Live user retrieval | Allowed |
| Google-Extended | Google | Gemini/AI features training | Allowed |
| anthropic-ai | Anthropic | General | Allowed |

#### Tiered access strategy (current recommendation: allow all)

AI companies now operate multi-tier bot systems:

| Tier | Purpose | Examples | Recommendation for devlo.ch |
|------|---------|---------|----------------------------|
| Training bots | Content enters model training datasets | GPTBot, Google-Extended, ClaudeBot, CCBot | Allow (maximizes long-term AI awareness of devlo) |
| Search/retrieval bots | Content cited in real-time AI answers | OAI-SearchBot, Claude-SearchBot, PerplexityBot | Allow (directly drives GEO citations) |
| User browsing bots | AI acts on behalf of a user | ChatGPT-User, Claude-User, Perplexity-User | Allow (highest-value traffic for citation) |

**Current decision: Allow all tiers.** For a site that wants to be cited, blocking training bots reduces citation probability by ~73% (2026 study). Revisit if AI companies introduce compensation mechanisms for training data.

**Future consideration:** If privacy or competitive concerns arise, the minimum viable configuration is: block training bots (GPTBot, Google-Extended, ClaudeBot) while allowing retrieval and user bots. This preserves citation potential while limiting training data contribution.

### 9.11 llms.txt implementation

#### Current state

devlo.ch has an `llms.txt` file at `/public/llms.txt` (served at `https://devlo.ch/llms.txt`). It follows the specification from https://llmstxt.org/.

#### Format specification

```markdown
# Site Name

> One-sentence description of the site.

## Section Heading
- [Page Title](URL): Brief description
- [Page Title](URL): Brief description
```

#### Maintenance rules

1. **Update llms.txt whenever a new page is published.** Add the page under the appropriate section heading
2. **Keep it curated.** Maximum 50-60 links. Only substantive content pages. No thank-you pages, legal pages, or redirects
3. **Match the sitemap.** Every URL in llms.txt should also be in the sitemap (but sitemap will contain more)
4. **Use plain ASCII.** Avoid accented characters. LLMs handle ASCII more reliably
5. **Update descriptions when content changes.** Keep one-line descriptions accurate
6. **Quarterly review.** Check that all links are live (200 status) and descriptions are current

#### Optional: llms-full.txt

Consider creating `/public/llms-full.txt` with full text content of key pages in a single file. Priority: low (implement only if AI citation tracking shows demand).

#### Industry context (2026)

- Over 844,000 websites have implemented llms.txt (as of October 2025)
- Major adopters: Anthropic, Cloudflare, Stripe
- No major AI platform has officially confirmed reading these files
- Google has stated they do not support llms.txt
- 8 out of 9 sites in one study saw no measurable traffic change after implementation
- **devlo.ch stance:** Keep it maintained. Low cost, possible future benefit as the standard matures

### 9.12 GEO content writing checklist (quick reference)

For content writers and Claude agents creating new pages:

- [ ] First sentence after each H2 is a direct answer (under 200 chars)
- [ ] Each section is 120-180 words
- [ ] Include a statistic or data point every 150-200 words
- [ ] Attribute all claims: "selon [source]", "d'apres [etude]"
- [ ] Define technical terms on first use
- [ ] Use transition words between paragraphs
- [ ] Include at least one comparison table per long-form page
- [ ] Add a summary/conclusion section at the end
- [ ] Visible author byline and date
- [ ] Flesch Reading Ease target: 50-60 (moderate difficulty -- appropriate for B2B executives)
- [ ] Front-load key information in the first 30% of content (where 44% of AI citations originate)
- [ ] Include multi-modal content (text + image + table minimum)
- [ ] Back key sections with structured data (FAQPage, HowTo, Article)
- [ ] Ensure page loads fast (FCP < 0.4s maximizes ChatGPT citation probability)

### 9.13 GEO measurement and monitoring

#### Tools for tracking AI visibility

| Tool | What it measures | URL |
|------|-----------------|-----|
| ChatSEO | AI SEO score (answerability, grounding, readability) | https://chatseo.app |
| HubSpot AEO Grader | Answer Engine Optimization readiness | https://www.hubspot.com/aeo-grader |
| Google Search Console | AI Overview appearances (Performance > Search Appearance filter) | https://search.google.com/search-console |
| Profound | AI platform citation tracking across ChatGPT, Perplexity, AI Overviews | https://www.tryprofound.com |

#### Metrics to track

| Metric | Target | Frequency |
|--------|--------|-----------|
| ChatSEO AI SEO score | > 70/100 (current: 57) | Monthly |
| AI Overview appearances | Track count in GSC | Weekly |
| Brand mentions in AI answers | Monitor via Profound or manual testing | Monthly |
| Content freshness | No page > 6 months without update | Quarterly audit |

---

## 10. Validation tools and commands

### 10.1 Local validation

```bash
# Build the site and check for errors
npm run build

# Run the SEO crawler against production
node scripts/crawl-seo.mjs

# Run the quality gate against the live sitemap.
# Warnings are reported but do not fail unless --fail-on-warnings is passed.
npm run check:seo-quality

# Verify HadoSEO metadata parity (titles/descriptions match expectations)
npm run check:hadoseo-metadata

# Build the slug map from the live sitemap
npm run slugmap:build

# Run Lighthouse locally (requires serve or next start)
npm run build && npx next start -p 4020
# Then in another terminal:
npx lighthouse http://localhost:4020 --output=json --output-path=./lighthouse-report.json
npx lighthouse http://localhost:4020/consultation --output=json --output-path=./lighthouse-consultation.json

# Check for broken internal links (requires site to be running)
npx broken-link-checker http://localhost:4020 --recursive --ordered

# Validate structured data from CLI
curl -s https://devlo.ch/[path] | npx structured-data-testing-tool --preloaded
```

### 10.2 Online validation tools

| Tool | URL | What it checks |
|------|-----|----------------|
| Google Rich Results Test | https://search.google.com/test/rich-results | JSON-LD structured data validity + eligibility |
| Schema Markup Validator | https://validator.schema.org/ | Full schema.org validation |
| PageSpeed Insights | https://pagespeed.web.dev/ | Core Web Vitals + Lighthouse score |
| Google Search Console | https://search.google.com/search-console | Index coverage, CWV field data, errors, AI Overview appearances |
| ChatSEO | https://chatseo.app | AI SEO score (GEO readiness) |
| HubSpot AEO Grader | https://www.hubspot.com/aeo-grader | Answer Engine Optimization readiness |
| Ahrefs Site Audit | https://ahrefs.com/site-audit | Technical SEO issues at scale |
| OpenGraph Debugger | https://www.opengraph.xyz/ | OG tag preview across platforms |
| Twitter Card Validator | https://cards-dev.twitter.com/validator | Twitter card preview |
| SERPSim | https://serpsim.com/ | Title tag pixel-width preview |
| Hreflang Tag Checker | https://technicalseo.com/tools/hreflang/ | Validates hreflang implementation across locales |

### 10.3 MCP servers available for SEO

These MCP servers are configured for the devlo-website project workspace:

| Server | Purpose | Notes |
|--------|---------|-------|
| `chatseo` | AI SEO scoring and recommendations | Available via `npx mcp-remote https://api.chatseo.app/mcp`. API access expires end of March 2026 |
| `gsc-server` | Google Search Console data | Credentials at `~/.config/gsc-mcp/devlo-gsc-credentials.json` |

### 10.4 Post-deploy verification sequence

After deploying a new page or major content update:

1. Check the page loads: `curl -I https://devlo.ch/[path]` -- expect `200 OK`
2. Check robots.txt: `curl https://devlo.ch/robots.txt` -- verify the page is not disallowed
3. Check sitemap: `curl https://devlo.ch/sitemap.xml` -- verify the new URL is listed with accurate `lastmod`
4. Check structured data: Paste the URL in Google Rich Results Test
5. Check OG tags: Paste the URL in https://www.opengraph.xyz/
6. Check PageSpeed: Run the URL through https://pagespeed.web.dev/ -- target >= 90 mobile
7. Check hreflang: If multilingual, verify hreflang tags in page source and use the hreflang checker tool
8. Check canonical: Verify self-referencing canonical in page source
9. Request indexing in Google Search Console (URL Inspection tool)
10. If GEO-critical content: Run ChatSEO audit on the URL

### 10.5 Quarterly SEO audit checklist

Run this audit every quarter to catch drift and maintain quality:

- [ ] All pages return 200 status (no new 404s or redirect chains)
- [ ] No orphan pages (every page reachable within 3 clicks from homepage)
- [ ] Alt text coverage > 95% (check with crawl-seo.mjs)
- [ ] No duplicate titles or descriptions across pages
- [ ] Structured data validates on all page types
- [ ] Core Web Vitals passing on all critical pages (PageSpeed Insights)
- [ ] hreflang reciprocal tags validated (no broken pairs)
- [ ] sitemap.xml lastmod dates are accurate (not stale)
- [ ] llms.txt is up to date with current pages
- [ ] Content freshness: no page > 6 months without update
- [ ] ChatSEO AI SEO score re-evaluated
- [ ] GSC error count = 0 (index coverage report)

---

## 11. Appendix: key files

| File | Purpose |
|------|---------|
| `src/lib/seo/metadata.ts` | `buildPageMetadata()` -- generates Metadata objects |
| `src/lib/seo/schema-builders.ts` | JSON-LD schema builder functions |
| `src/lib/seo/site-config.ts` | Central SEO constants (org name, addresses, social) |
| `src/components/seo/json-ld.tsx` | `<JsonLd />` component for rendering schema |
| `src/app/robots.ts` | robots.txt generation (includes AI crawler rules) |
| `src/app/sitemap.ts` | sitemap.xml generation (all locales) |
| `src/app/layout.tsx` | Root layout with global schemas and metadata |
| `src/content/hadoseo-metadata.ts` | Per-route metadata overrides |
| `src/lib/i18n/localized-seo.ts` | Sanity-backed localized SEO data |
| `src/lib/i18n/slug-map.ts` | Locale-aware URL mappings for hreflang |
| `public/llms.txt` | LLM-optimized site map |
| `scripts/crawl-seo.mjs` | SEO crawler for migration/audit |
| `scripts/check-seo-quality.mjs` | Live sitemap quality gate for metadata, H1, canonical, hreflang, JSON-LD, CTA, freshness and GEO extractability warnings |
| `scripts/verify-hadoseo-metadata.mjs` | HadoSEO parity checker |
| `docs/I18N_SEO_PLAN.md` | Multilingual SEO architecture decisions |
