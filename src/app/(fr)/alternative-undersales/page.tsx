import type { Metadata } from "next";

import { AlternativePage } from "@/components/pages/alternative-page";
import { ALTERNATIVE_PAGES } from "@/content/alternatives";
import { buildPageMetadata } from "@/lib/seo/metadata";

const data = ALTERNATIVE_PAGES["alternative-undersales"];

export const metadata: Metadata = buildPageMetadata({
  title: data.metaTitle.replace(/\s*\|\s*devlo$/, ""),
  description: data.metaDescription,
  path: `/${data.slug}`,
});

export default function Page() {
  return <AlternativePage data={data} />;
}
