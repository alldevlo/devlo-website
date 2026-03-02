import { headers } from "next/headers";
import { notFound, permanentRedirect } from "next/navigation";

import { CaseStudyMasterPage } from "@/components/pages/case-study-master-page";
import { caseStudiesCards } from "@/content/masterfile.fr";
import { caseStudies } from "@/lib/case-studies";
import { caseStudySlugRedirects, resolveCaseStudyCanonicalSlug } from "@/lib/case-study-slug-redirects";

type Params = {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
};

export function generateStaticParams() {
  const slugs = new Set<string>();
  for (const slug of Object.keys(caseStudySlugRedirects)) slugs.add(slug);
  for (const study of caseStudiesCards) slugs.add(study.slug);
  for (const study of caseStudies) slugs.add(study.slug);
  return Array.from(slugs).map((slug) => ({ slug }));
}

function isRscRequest(searchParams: Params["searchParams"]) {
  if (searchParams && Object.prototype.hasOwnProperty.call(searchParams, "_rsc")) {
    return true;
  }

  const requestHeaders = headers();
  return requestHeaders.get("rsc") === "1";
}

export default function Page({ params, searchParams }: Params) {
  const canonicalSlug = resolveCaseStudyCanonicalSlug(params.slug);
  const exists = caseStudiesCards.some((study) => study.slug === canonicalSlug) || caseStudies.some((study) => study.slug === canonicalSlug);
  const rscRequest = isRscRequest(searchParams);

  if (!exists) {
    if (rscRequest) notFound();
    permanentRedirect("/etudes-de-cas");
  }

  if (rscRequest) {
    return <CaseStudyMasterPage slug={canonicalSlug} />;
  }

  permanentRedirect(`/etudes-de-cas/${canonicalSlug}`);
}
