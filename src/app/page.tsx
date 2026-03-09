import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { HomePage } from "@/components/pages/home-page";
import { homeContent, homeSeo } from "@/content/masterfile.fr";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildFaqPageSchema, buildVideoObjectSchema } from "@/lib/seo/schema-builders";

const homeTitle = homeSeo.title;

export const metadata: Metadata = buildPageMetadata({
  title: homeTitle,
  description: homeSeo.description,
  path: "/",
  imagePath: "/images/devlo_OG_Banner.webp",
});

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          buildFaqPageSchema(homeContent.faqs),
          buildVideoObjectSchema({
            name: "Témoignage client devlo — Stephan Nuzzolo, Abacus",
            description:
              "Découvrez comment devlo a généré 30 prospects qualifiés pour Abacus grâce à une campagne outbound multicanale en Suisse.",
            thumbnailUrl: "/images/video-thumb-abacus.webp",
            uploadDate: "2024-01-01",
            embedUrl: "https://fast.wistia.net/embed/iframe/cr7dgltkvu",
            duration: "PT2M",
          }),
        ]}
      />
      <HomePage />
    </>
  );
}
