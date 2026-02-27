import { NextResponse } from "next/server";

import { caseStudiesCards } from "@/content/masterfile.fr";
import { resolveCaseStudyCanonicalSlug } from "@/lib/case-study-slug-redirects";

const LOVALINGO_PUBLIC_ANON_KEY = "aix_qhj0o99zw8icbj8mg4e7x04rtp1wehsw";

// Keep this list updated when adding/removing canonical static pages.
const staticRoutes = [
  "/",
  "/academy",
  "/consultation",
  "/conditions",
  "/etudes-de-cas",
] as const;

export function GET() {
  const pages = Array.from(
    new Set(caseStudiesCards.map((study) => `/etudes-de-cas/${resolveCaseStudyCanonicalSlug(study.slug)}`)),
  );

  return NextResponse.json(
    {
      publicAnonKey: LOVALINGO_PUBLIC_ANON_KEY,
      version: 1,
      generatedAt: new Date().toISOString(),
      framework: "next",
      defaultLocale: "fr",
      locales: ["fr", "en", "de", "nl"],
      routing: "path",
      pathNormalizationRules: [
        {
          pattern: "[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}",
          replacement: ":id",
        },
      ],
      routes: [
        ...staticRoutes.map((path) => ({ path, kind: "static" as const })),
        { path: "/etudes-de-cas/[slug]", kind: "dynamic" as const, params: ["slug"] },
      ],
      pages,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=300",
      },
    },
  );
}
