import type { Metadata } from "next";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { LegalPage } from "@/components/pages/legal-page";
import { getLegalPageContent } from "@/content/legal";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema-builders";

const content = getLegalPageContent("fr", "terms");

export const metadata: Metadata = buildPageMetadata({
  title: content.seo.title,
  description: content.seo.description,
  path: "/conditions",
});

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Conditions générales", path: "/conditions" },
];

export default function Page() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />
      <Breadcrumb items={breadcrumbItems} />
      <LegalPage content={content} />
    </>
  );
}
