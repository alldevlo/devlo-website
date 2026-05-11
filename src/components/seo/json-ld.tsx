/**
 * JsonLd — renders a JSON-LD <script> block for Schema.org structured data.
 *
 * Use in Server Components (layout.tsx, page.tsx) — NOT in Client Components.
 *
 * Usage:
 *   import { JsonLd } from "@/components/seo/json-ld";
 *   <JsonLd schema={{ "@context": "https://schema.org", "@type": "Organization", ... }} />
 *
 * Multiple schemas on one page:
 *   <JsonLd schema={[schema1, schema2]} />
 */

type JsonLdProps = {
  schema: Record<string, unknown> | Record<string, unknown>[];
};

function serializeJsonLd(schema: JsonLdProps["schema"]) {
  return JSON.stringify(schema)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
    />
  );
}
