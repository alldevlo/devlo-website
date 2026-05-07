import type { Metadata } from "next";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { LegalPage } from "@/components/pages/legal-page";
import { getLegalPageContent } from "@/content/legal";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema-builders";

const content = getLegalPageContent("fr", "privacy");

export const metadata: Metadata = buildPageMetadata({
  title: content.seo.title,
  description: content.seo.description,
  path: "/politique-confidentialite",
});

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Politique de confidentialité", path: "/politique-confidentialite" },
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
