import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { ConsultationMasterPage } from "@/components/pages/consultation-master-page";
import { consultationSeo } from "@/content/masterfile.fr";
import { buildBreadcrumbSchema } from "@/lib/seo/schema-builders";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: consultationSeo.title,
  description: consultationSeo.description,
  alternates: {
    canonical: "/consultation",
  },
  openGraph: {
    title: consultationSeo.title,
    description: consultationSeo.description,
    type: "website",
    locale: "fr_CH",
    url: `${siteConfig.url}/consultation`,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Consultation gratuite", path: "/consultation" },
        ])}
      />
      <ConsultationMasterPage />
    </>
  );
}
