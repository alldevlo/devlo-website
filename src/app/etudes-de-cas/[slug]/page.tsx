import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { CaseStudyMasterPage } from "@/components/pages/case-study-master-page";
import { caseStudiesCards, caseStudiesSeo } from "@/content/masterfile.fr";
import { resolveCaseStudyCanonicalSlug } from "@/lib/case-study-slug-redirects";
import { caseStudies } from "@/lib/case-studies";
import { buildPageMetadata, resolveOgImagePath } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema-builders";

type Params = {
  params: { slug: string };
};

function normalizeDescription(description: string, fallback: string): string {
  const normalized = description.replace(/\s+/g, " ").trim();
  if (normalized.length >= 120 && normalized.length <= 160) return normalized;
  if (normalized.length > 160) return `${normalized.slice(0, 157).trimEnd()}...`;

  const combined = `${normalized} ${fallback}`.replace(/\s+/g, " ").trim();
  if (combined.length <= 160) return combined;
  return `${combined.slice(0, 157).trimEnd()}...`;
}

function buildCaseStudySeoTitle(client: string): string {
  const base = `Étude de cas ${client}: résultats prospection B2B`;
  if (base.length <= 65) return base;
  return `Étude de cas ${client}: résultats B2B`;
}

export function generateStaticParams() {
  const slugs = new Set<string>();
  for (const study of caseStudiesCards) slugs.add(study.slug);
  for (const study of caseStudies) slugs.add(study.slug);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const canonicalSlug = resolveCaseStudyCanonicalSlug(params.slug);
  const cardStudy = caseStudiesCards.find((item) => item.slug === params.slug) ?? caseStudiesCards.find((item) => item.slug === canonicalSlug);
  const detailedStudy = caseStudies.find((item) => item.slug === params.slug) ?? caseStudies.find((item) => item.slug === canonicalSlug);

  const title =
    buildCaseStudySeoTitle(
      cardStudy?.client ?? detailedStudy?.client ?? "devlo",
    );
  const descriptionSource =
    detailedStudy?.summary ??
    (cardStudy
      ? `${cardStudy.client} — ${cardStudy.sector}. ${cardStudy.metrics.slice(0, 3).join(" · ")}.`
      : caseStudiesSeo.description);
  const descriptionFallback = cardStudy
    ? `Découvrez comment devlo a généré des rendez-vous qualifiés pour ${cardStudy.client}.`
    : "Découvrez comment devlo génère des rendez-vous qualifiés en prospection B2B.";
  const description = normalizeDescription(descriptionSource, descriptionFallback);
  const imagePath = resolveOgImagePath(cardStudy?.banner ?? detailedStudy?.heroImageUrl);

  return buildPageMetadata({
    title,
    description,
    path: `/etudes-de-cas/${canonicalSlug}`,
    type: "article",
    imagePath,
  });
}

export default function Page({ params }: Params) {
  const canonicalSlug = resolveCaseStudyCanonicalSlug(params.slug);
  const cardStudy = caseStudiesCards.find((item) => item.slug === params.slug) ?? caseStudiesCards.find((item) => item.slug === canonicalSlug);
  const detailedStudy = caseStudies.find((item) => item.slug === params.slug) ?? caseStudies.find((item) => item.slug === canonicalSlug);
  const breadcrumbLabel = cardStudy?.title ?? detailedStudy?.title ?? "Étude de cas";

  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Études de cas", path: "/etudes-de-cas" },
          { name: breadcrumbLabel, path: `/etudes-de-cas/${canonicalSlug}` },
        ])}
      />
      <CaseStudyMasterPage slug={params.slug} />
    </>
  );
}
