import type { Metadata } from "next";

import { GtmAgencyMarketMapPage } from "@/components/pages/gtm-agency-market-map-page";
import { GTM_AGENCY_MARKET_MAP_CONTENT } from "@/content/gtm-agency-market-map";
import { buildPageMetadata } from "@/lib/seo/metadata";

const content = GTM_AGENCY_MARKET_MAP_CONTENT.fr;

export const metadata: Metadata = buildPageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: "/best-gtm-engineering-agencies-europe",
  type: "article",
  datePublished: "2026-05-11",
  dateModified: "2026-05-11",
  author: "Charles Perret",
});

export default function Page() {
  return <GtmAgencyMarketMapPage locale="fr" />;
}
