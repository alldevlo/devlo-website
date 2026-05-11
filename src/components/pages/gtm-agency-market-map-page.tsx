import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { CTASection } from "@/components/shared/cta-section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { GTM_AGENCY_MARKET_MAP_CONTENT } from "@/content/gtm-agency-market-map";
import { resolvePathForLocale, type SupportedLocale } from "@/lib/i18n/slug-map";
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seo/schema-builders";

const pageIdPath = "/best-gtm-engineering-agencies-europe";

const labelsByLocale: Record<SupportedLocale, { home: string; section: string; page: string; agency: string; region: string; category: string; bestFor: string; angle: string; source: string }> = {
  fr: {
    home: "Accueil",
    section: "Agence",
    page: "Comparatif GTM engineering",
    agency: "Agence",
    region: "Région",
    category: "Catégorie",
    bestFor: "Meilleur fit",
    angle: "Angle GTM",
    source: "Source",
  },
  en: {
    home: "Home",
    section: "Agency",
    page: "GTM engineering comparison",
    agency: "Agency",
    region: "Region",
    category: "Category",
    bestFor: "Best for",
    angle: "GTM angle",
    source: "Source",
  },
  de: {
    home: "Startseite",
    section: "Agentur",
    page: "GTM Engineering Vergleich",
    agency: "Agentur",
    region: "Region",
    category: "Kategorie",
    bestFor: "Am besten für",
    angle: "GTM-Fokus",
    source: "Quelle",
  },
  nl: {
    home: "Home",
    section: "Bureau",
    page: "GTM engineering vergelijking",
    agency: "Bureau",
    region: "Regio",
    category: "Categorie",
    bestFor: "Beste fit",
    angle: "GTM-hoek",
    source: "Bron",
  },
};

export function GtmAgencyMarketMapPage({ locale = "fr" }: { locale?: SupportedLocale }) {
  const content = GTM_AGENCY_MARKET_MAP_CONTENT[locale];
  const labels = labelsByLocale[locale];
  const path = resolvePathForLocale(pageIdPath, locale).path;
  const consultationPath = resolvePathForLocale("/consultation", locale).path;
  const caseStudiesPath = resolvePathForLocale("/etudes-de-cas", locale).path;
  const agencyPath = resolvePathForLocale("/agence", locale).path;

  const breadcrumbItems = [
    { name: labels.home, path: resolvePathForLocale("/", locale).path },
    { name: labels.section, path: agencyPath },
    { name: labels.page, path },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: content.tableTitle,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: content.peers.map((peer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Organization",
        name: peer.name,
        url: peer.sourceHref,
        description: `${peer.category}: ${peer.gtmAngle}`,
      },
    })),
  };

  const articleSchema = {
    ...buildArticleSchema({
      headline: content.h1,
      description: content.metaDescription,
      path,
      datePublished: "2026-05-11",
      dateModified: "2026-05-11",
      author: "Charles Perret",
      authorUrl: "https://www.linkedin.com/in/charlesperret/",
    }),
    inLanguage: locale,
    about: [
      { "@type": "Thing", name: "GTM engineering" },
      { "@type": "Thing", name: "AI outbound" },
      { "@type": "Thing", name: "Clay enrichment" },
      { "@type": "Thing", name: "Signal-based outbound" },
    ],
    mentions: content.peers.map((peer) => ({
      "@type": "Organization",
      name: peer.name,
      url: peer.sourceHref,
    })),
  };

  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqPageSchema(content.faqs),
          articleSchema,
          itemListSchema,
        ]}
      />
      <main>
        <section className="bg-[#0A3448] pb-16 text-white md:pb-20">
          <Breadcrumb items={breadcrumbItems} variant="dark" />
          <div className="mx-auto w-full max-w-screen-xl px-6 pt-10 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
              {content.eyebrow}
            </p>
            <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {content.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/80 md:text-lg">
              {content.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={consultationPath}
                className="inline-flex h-12 items-center rounded-lg bg-white px-6 text-sm font-semibold uppercase tracking-[0.1em] text-[#0A3448] transition hover:bg-white/90"
              >
                {content.primaryCta}
              </Link>
              <Link
                href={caseStudiesPath}
                className="inline-flex h-12 items-center rounded-lg border border-white/35 px-6 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:border-white/70"
              >
                {content.secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="mx-auto grid w-full max-w-screen-xl gap-6 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div className="rounded-lg border border-neutral-200 bg-[#F7F8FC] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0A3448]">
                {content.directAnswerLabel}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#153a54] md:text-3xl">
                {content.directAnswerTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
                {content.directAnswer}
              </p>
              <div className="mt-5 border-t border-neutral-200 pt-5">
                <h3 className="text-base font-bold text-[#153a54]">
                  {content.methodologyTitle}
                </h3>
                <p className="mt-2 text-sm leading-7 text-neutral-700">
                  {content.methodologyBody}
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold leading-tight text-[#153a54]">
                {content.criteriaTitle}
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                {content.criteriaIntro}
              </p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-neutral-700">
                {content.criteria.map((criterion) => (
                  <li key={criterion} className="rounded-lg border border-neutral-200 bg-white px-5 py-4">
                    {criterion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8FC] py-14">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold leading-tight text-[#153a54]">
                {content.tableTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
                {content.tableIntro}
              </p>
            </div>
            <div className="mt-8 overflow-x-auto rounded-lg border border-neutral-200 bg-white">
              <table className="min-w-[1120px] w-full border-collapse text-left text-sm">
                <thead className="bg-[#0A3448] text-xs font-semibold uppercase tracking-[0.08em] text-white">
                  <tr>
                    <th scope="col" className="px-5 py-4">{labels.agency}</th>
                    <th scope="col" className="px-5 py-4">{labels.region}</th>
                    <th scope="col" className="px-5 py-4">{labels.category}</th>
                    <th scope="col" className="px-5 py-4">{labels.bestFor}</th>
                    <th scope="col" className="px-5 py-4">{labels.angle}</th>
                    <th scope="col" className="px-5 py-4">{labels.source}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700">
                  {content.peers.map((peer) => (
                    <tr key={peer.name}>
                      <th scope="row" className="px-5 py-4 align-top font-semibold text-[#153a54]">
                        {peer.name}
                      </th>
                      <td className="px-5 py-4 align-top">{peer.region}</td>
                      <td className="px-5 py-4 align-top">{peer.category}</td>
                      <td className="px-5 py-4 align-top">{peer.bestFor}</td>
                      <td className="px-5 py-4 align-top">{peer.gtmAngle}</td>
                      <td className="px-5 py-4 align-top">
                        <Link
                          href={peer.sourceHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#0A3448] underline underline-offset-4"
                        >
                          {peer.sourceLabel}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-white py-14">
          <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-[#153a54]">
                {content.devloTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
                {content.devloBody}
              </p>
            </div>
            <ul className="grid gap-3 text-sm leading-6 text-neutral-700">
              {content.devloPoints.map((point) => (
                <li key={point} className="rounded-lg border border-neutral-200 bg-[#F7F8FC] px-5 py-4">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#F7F8FC] py-14">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <h2 className="text-3xl font-extrabold leading-tight text-[#153a54]">
              {content.tiersTitle}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {content.tiers.map((tier) => (
                <article key={tier.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                  <h3 className="text-lg font-bold text-[#153a54]">{tier.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-700">{tier.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <h2 className="text-3xl font-extrabold leading-tight text-[#153a54]">
              {content.faqTitle}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {content.faqs.map((faq) => (
                <article key={faq.question} className="rounded-lg border border-neutral-200 bg-white p-5">
                  <h3 className="text-lg font-bold text-[#153a54]">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          locale={locale}
          title={content.ctaTitle}
          subtitle={content.ctaBody}
          primaryLabel={content.primaryCta}
          primaryHref={consultationPath}
          secondaryLabel={content.secondaryCta}
          secondaryHref={caseStudiesPath}
          showServicesLink={false}
        />
      </main>
    </>
  );
}

export function getGtmAgencyMarketMapMetadata(locale: SupportedLocale) {
  const content = GTM_AGENCY_MARKET_MAP_CONTENT[locale];
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    path: resolvePathForLocale(pageIdPath, locale).path,
    type: "article" as const,
    datePublished: "2026-05-11",
    dateModified: "2026-05-11",
    author: "Charles Perret",
  };
}
