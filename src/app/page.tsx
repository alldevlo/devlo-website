import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { HomePage } from "@/components/pages/home-page";
import { homeContent, homeSeo } from "@/content/masterfile.fr";
import { buildFaqPageSchema } from "@/lib/seo/schema-builders";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeSeo.ogTitle,
    description: homeSeo.ogDescription,
    type: "website",
    locale: "fr_CH",
    url: `${siteConfig.url}/`,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd schema={buildFaqPageSchema(homeContent.faqs)} />
      <HomePage />
    </>
  );
}
