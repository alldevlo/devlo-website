import type { Metadata } from "next";

import { GtmEngineeringPage } from "@/components/pages/gtm-engineering-page";
import { GTM_ENGINEERING_CONTENT } from "@/content/gtm-engineering";
import { buildPageMetadata } from "@/lib/seo/metadata";

const content = GTM_ENGINEERING_CONTENT.fr;

export const metadata: Metadata = buildPageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: "/gtm-engineering-agency",
  type: "article",
  datePublished: "2026-05-11",
  dateModified: "2026-05-11",
  author: "Charles Perret",
});

export default function Page() {
  return <GtmEngineeringPage locale="fr" />;
}
