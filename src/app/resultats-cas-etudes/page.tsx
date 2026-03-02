import { headers } from "next/headers";
import { permanentRedirect } from "next/navigation";

import { CaseStudiesMasterPage } from "@/components/pages/case-studies-master-page";

type ResultatsListingAliasPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: ResultatsListingAliasPageProps) {
  const isRscRequest =
    (searchParams && Object.prototype.hasOwnProperty.call(searchParams, "_rsc")) ||
    headers().get("rsc") === "1";

  if (isRscRequest) {
    return <CaseStudiesMasterPage />;
  }

  permanentRedirect("/etudes-de-cas");
}
