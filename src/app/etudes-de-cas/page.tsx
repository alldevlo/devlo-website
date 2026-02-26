import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { CaseStudiesMasterPage } from "@/components/pages/case-studies-master-page";
import { caseStudiesSeo } from "@/content/masterfile.fr";
import { buildBreadcrumbSchema } from "@/lib/seo/schema-builders";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: caseStudiesSeo.title,
  description: caseStudiesSeo.description,
  alternates: {
    canonical: "/etudes-de-cas",
  },
  openGraph: {
    title: caseStudiesSeo.title,
    description: caseStudiesSeo.description,
    type: "website",
    locale: "fr_CH",
    url: `${siteConfig.url}/etudes-de-cas`,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Études de cas", path: "/etudes-de-cas" },
        ])}
      />
      <CaseStudiesMasterPage />
    </>
  );
}
