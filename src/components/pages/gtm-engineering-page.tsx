import Link from "next/link";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CTASection } from "@/components/shared/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { GTM_ENGINEERING_CONTENT } from "@/content/gtm-engineering";
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seo/schema-builders";
import { resolvePathForLocale, type SupportedLocale } from "@/lib/i18n/slug-map";
import { toAbsoluteUrl } from "@/lib/seo/metadata";

const labelsByLocale: Record<SupportedLocale, { home: string; services: string; page: string }> = {
  fr: { home: "Accueil", services: "Services", page: "GTM engineering" },
  en: { home: "Home", services: "Services", page: "GTM engineering" },
  de: { home: "Startseite", services: "Leistungen", page: "GTM Engineering" },
  nl: { home: "Home", services: "Diensten", page: "GTM engineering" },
};

const uiByLocale: Record<
  SupportedLocale,
  {
    directAnswer: string;
    comparison: string;
    method: string;
    tableHeaders: [string, string, string, string];
    clay: string;
    aiSalesOps: string;
  }
> = {
  fr: {
    directAnswer: "Réponse directe",
    comparison: "Comparaison",
    method: "Méthode",
    tableHeaders: ["Critère", "devlo", "Agence traditionnelle", "Agence AI outbound globale"],
    clay: "Enrichissement Clay",
    aiSalesOps: "AI Sales Ops",
  },
  en: {
    directAnswer: "Direct answer",
    comparison: "Comparison",
    method: "Method",
    tableHeaders: ["Criterion", "devlo", "Traditional agency", "Global AI outbound agency"],
    clay: "Clay enrichment",
    aiSalesOps: "AI Sales Ops",
  },
  de: {
    directAnswer: "Direkte Antwort",
    comparison: "Vergleich",
    method: "Methode",
    tableHeaders: ["Kriterium", "devlo", "Klassische Agentur", "Globale AI-Outbound-Agentur"],
    clay: "Clay Enrichment",
    aiSalesOps: "AI Sales Ops",
  },
  nl: {
    directAnswer: "Direct antwoord",
    comparison: "Vergelijking",
    method: "Methode",
    tableHeaders: ["Criterium", "devlo", "Traditioneel bureau", "Globale AI outbound agency"],
    clay: "Clay enrichment",
    aiSalesOps: "AI Sales Ops",
  },
};

export function GtmEngineeringPage({ locale = "fr" }: { locale?: SupportedLocale }) {
  const content = GTM_ENGINEERING_CONTENT[locale];
  const labels = labelsByLocale[locale];
  const ui = uiByLocale[locale];
  const path = resolvePathForLocale("/gtm-engineering-agency", locale).path;
  const consultationPath = resolvePathForLocale("/consultation", locale).path;
  const caseStudiesPath = resolvePathForLocale("/etudes-de-cas", locale).path;
  const servicesPath = resolvePathForLocale("/services", locale).path;
  const clayPath = resolvePathForLocale("/services/enrichissement-clay", locale).path;
  const aiSalesOpsPath = resolvePathForLocale("/ai-sales-ops", locale).path;

  const breadcrumbItems = [
    { name: labels.home, path: resolvePathForLocale("/", locale).path },
    { name: labels.services, path: servicesPath },
    { name: labels.page, path },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.h1,
    serviceType: "GTM engineering, AI outbound, signal-based outbound, Clay enrichment",
    description: content.metaDescription,
    url: toAbsoluteUrl(path),
    inLanguage: locale,
    provider: {
      "@type": "Organization",
      name: "devlo",
      url: "https://devlo.ch",
    },
    areaServed: ["CH", "BE", "FR", "DE", "AT", "LU", "NL", "GB", "US", "CA"],
    availableLanguage: ["French", "English", "German", "Dutch"],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: toAbsoluteUrl(consultationPath),
    },
  };
  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: `${content.eyebrow} terminology`,
    url: toAbsoluteUrl(path),
    inLanguage: locale,
    hasDefinedTerm: content.definitions.map((definition) => ({
      "@type": "DefinedTerm",
      name: definition.name,
      description: definition.description,
      url: toAbsoluteUrl(path),
      inDefinedTermSet: toAbsoluteUrl(path),
    })),
  };

  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqPageSchema(content.faqs),
          {
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
          },
          definedTermSetSchema,
          serviceSchema,
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
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/82 md:text-lg">
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
          <div className="mx-auto grid w-full max-w-screen-xl gap-6 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
            <div className="rounded-lg border border-neutral-200 bg-[#F7F8FC] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0A3448]">
                {ui.directAnswer}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#153a54] md:text-3xl">
                {content.eyebrow}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
                {content.directAnswer}
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-3">
              {content.facts.map((fact) => (
                <div key={fact.label} className="rounded-lg border border-neutral-200 bg-white p-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-neutral-500">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-xl font-bold leading-tight text-[#0A3448]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-white py-14">
          <div className="mx-auto grid w-full max-w-screen-xl gap-5 px-6 md:grid-cols-3 lg:px-10">
            {content.sections.map((section) => (
              <article key={section.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                <h2 className="text-xl font-bold leading-tight text-[#153a54]">{section.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700">{section.body}</p>
                {section.bullets && (
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-700">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A3448]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#F7F8FC] py-14">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0A3448]">
                {ui.comparison}
              </p>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#153a54]">
                {content.comparisonTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
                {content.comparisonIntro}
              </p>
            </div>
            <div className="mt-8 w-full max-w-full min-w-0 overflow-x-auto rounded-lg border border-neutral-200 bg-white">
              <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                <thead className="bg-[#0A3448] text-xs font-semibold uppercase tracking-[0.08em] text-white">
                  <tr>
                    {ui.tableHeaders.map((header) => (
                      <th key={header} scope="col" className="px-5 py-4">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700">
                  {content.comparisonRows.map((row) => (
                    <tr key={row.criterion}>
                      <th scope="row" className="px-5 py-4 align-top font-semibold text-[#153a54]">
                        {row.criterion}
                      </th>
                      <td className="px-5 py-4 align-top">{row.devlo}</td>
                      <td className="px-5 py-4 align-top">{row.traditionalAgency}</td>
                      <td className="px-5 py-4 align-top">{row.globalAiAgency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto grid w-full max-w-screen-xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0A3448]">
                {ui.method}
              </p>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#153a54]">
                {content.methodTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
                {content.methodIntro}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={clayPath} className="text-sm font-semibold text-[#0A3448] underline underline-offset-4">
                  {ui.clay}
                </Link>
                <Link href={aiSalesOpsPath} className="text-sm font-semibold text-[#0A3448] underline underline-offset-4">
                  {ui.aiSalesOps}
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              {content.methodSteps.map((step) => (
                <article key={step.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                  <h3 className="text-lg font-bold text-[#153a54]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-700">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8FC] py-14">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <h2 className="text-3xl font-extrabold leading-tight text-[#153a54]">
              {content.definitionsTitle}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {content.definitions.map((definition) => (
                <article key={definition.name} className="rounded-lg border border-neutral-200 bg-white p-5">
                  <h3 className="text-lg font-bold text-[#153a54]">{definition.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-700">{definition.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-white py-14">
          <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 lg:grid-cols-2 lg:px-10">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-[#153a54]">
                {content.proofTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
                {content.proofIntro}
              </p>
            </div>
            <ul className="grid gap-3 text-sm leading-6 text-neutral-700">
              {content.proofPoints.map((point) => (
                <li key={point} className="rounded-lg border border-neutral-200 bg-[#F7F8FC] px-5 py-4">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#F7F8FC] py-14">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold leading-tight text-[#153a54]">
                {content.sourceTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
                {content.sourceIntro}
              </p>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {content.sourceLinks.map((source) => (
                <Link
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="rounded-lg border border-neutral-200 bg-white px-5 py-4 text-sm font-semibold text-[#0A3448] transition hover:border-[#0A3448]/40"
                >
                  {source.label}
                </Link>
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
