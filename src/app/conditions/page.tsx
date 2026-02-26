import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { ConditionsMasterPage } from "@/components/pages/conditions-master-page";
import { conditionsSeo } from "@/content/masterfile.fr";
import { buildBreadcrumbSchema } from "@/lib/seo/schema-builders";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: conditionsSeo.title,
  description: conditionsSeo.description,
  alternates: {
    canonical: "/conditions",
  },
  openGraph: {
    title: conditionsSeo.title,
    description: conditionsSeo.description,
    type: "website",
    locale: "fr_CH",
    url: `${siteConfig.url}/conditions`,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Conditions générales", path: "/conditions" },
        ])}
      />
      <ConditionsMasterPage />
    </>
  );
}
