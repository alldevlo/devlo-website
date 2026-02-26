import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { AcademyMasterPage } from "@/components/pages/academy-master-page";
import { academyContent, academySeo } from "@/content/masterfile.fr";
import { buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seo/schema-builders";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: academySeo.title,
  description: academySeo.description,
  alternates: {
    canonical: "/academy",
  },
  openGraph: {
    title: academySeo.title,
    description: academySeo.description,
    type: "website",
    locale: "fr_CH",
    url: `${siteConfig.url}/academy`,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Outbound Academy", path: "/academy" },
          ]),
          buildFaqPageSchema(academyContent.faqs),
        ]}
      />
      <AcademyMasterPage />
    </>
  );
}
