import Link from "next/link";

import { GeoConsultationLink } from "@/components/shared/geo-consultation-link";
import { AuthorByline } from "@/components/shared/author-byline";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import type { ProgrammaticSeoPage } from "@/content/programmatic-seo-pilot";
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seo/schema-builders";
import { siteConfig } from "@/lib/site";

const uiCopy = {
  fr: {
    home: "Accueil",
    guide: "Guide local",
    answer: "Réponse directe",
    proof: "Preuves et signaux",
    criteria: "Critères de sélection",
    market: "Contexte local",
    links: "Pages utiles",
    faq: "Questions fréquentes",
    cta: "Planifier une consultation",
    answerHeading: (service: string, market: string) => `${service} à ${market}`,
  },
  en: {
    home: "Home",
    guide: "Local guide",
    answer: "Direct answer",
    proof: "Proof and signals",
    criteria: "Selection criteria",
    market: "Local context",
    links: "Useful pages",
    faq: "Frequently asked questions",
    cta: "Book a consultation",
    answerHeading: (service: string, market: string) => `${service} in ${market}`,
  },
  de: {
    home: "Startseite",
    guide: "Lokaler Guide",
    answer: "Direkte Antwort",
    proof: "Nachweise und Signale",
    criteria: "Auswahlkriterien",
    market: "Lokaler Kontext",
    links: "Nützliche Seiten",
    faq: "Häufige Fragen",
    cta: "Beratung planen",
    answerHeading: (service: string, market: string) => `${service} in ${market}`,
  },
  nl: {
    home: "Home",
    guide: "Lokale gids",
    answer: "Direct antwoord",
    proof: "Bewijs en signalen",
    criteria: "Selectiecriteria",
    market: "Lokale context",
    links: "Nuttige pagina's",
    faq: "Veelgestelde vragen",
    cta: "Plan een consultatie",
    answerHeading: (service: string, market: string) => `${service} in ${market}`,
  },
} as const;

export function ProgrammaticSeoPilotPage({ page }: { page: ProgrammaticSeoPage }) {
  const copy = uiCopy[page.locale];
  const breadcrumbItems = [
    { name: copy.home, path: page.locale === "fr" ? "/" : `/${page.locale}` },
    { name: copy.guide, path: page.path },
  ];
  const consultationHref =
    page.relatedLinks.find((link) => /consultation|beratung|adviesgesprek/.test(link.href))?.href ?? "/consultation";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}${page.path}#service`,
    name: page.serviceCategory,
    serviceType: page.service,
    areaServed: page.market,
    audience: {
      "@type": "Audience",
      audienceType: page.audience,
    },
    provider: {
      "@type": "Organization",
      name: "devlo",
      url: siteConfig.url,
    },
  };

  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqPageSchema(page.faqs),
          buildArticleSchema({
            headline: page.h1,
            description: page.metaDescription,
            path: page.path,
            datePublished: page.datePublished,
            dateModified: page.dateModified,
            author: "Charles Perret",
            authorUrl: "https://www.linkedin.com/in/charlesperret/",
          }),
          serviceSchema,
        ]}
      />
      <section className="bg-[#073B4C] pb-16 pt-2 text-white md:pb-20">
        <Breadcrumb items={breadcrumbItems} variant="dark" />
        <div className="mx-auto w-full max-w-screen-xl px-6 pt-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
            {copy.guide}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
            {page.h1}
          </h1>
          <div className="mt-5">
            <AuthorByline datePublished={page.datePublished} dateModified={page.dateModified} locale={page.locale} />
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            {page.answer}
          </p>
          <GeoConsultationLink
            href={consultationHref}
            locale={page.locale}
            market={page.frPath.replace(/^\//, "")}
            className="mt-8 inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-semibold text-[#073B4C] transition hover:bg-white/90"
          >
            {copy.cta}
          </GeoConsultationLink>
        </div>
      </section>

      <main className="bg-white">
        <section className="py-12">
          <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
            <div className="rounded-lg border border-neutral-200 bg-[#F7F8FC] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#074f74]">{copy.answer}</p>
              <h2 className="mt-2 text-2xl font-extrabold text-[#153a54]">
                {copy.answerHeading(page.service, page.market)}
              </h2>
              <p className="mt-4 text-base leading-7 text-neutral-700">{page.answer}</p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#074f74]">{copy.proof}</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-700">
                {page.proofPoints.map((point) => (
                  <li key={point} className="border-b border-neutral-100 pb-3 last:border-0 last:pb-0">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 py-12">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-extrabold text-[#153a54]">{copy.criteria}</h2>
                <div className="mt-5 overflow-hidden rounded-lg border border-neutral-200 bg-white">
                  <table className="w-full border-collapse text-left text-sm">
                    <tbody>
                      {page.criteria.map((criterion) => (
                        <tr key={criterion.label} className="border-b border-neutral-200 last:border-0">
                          <th className="w-1/3 bg-neutral-50 px-4 py-4 font-semibold text-[#074f74]">
                            {criterion.label}
                          </th>
                          <td className="px-4 py-4 leading-6 text-neutral-700">{criterion.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#153a54]">{copy.market}</h2>
                <div className="mt-5 space-y-4 text-base leading-7 text-neutral-700">
                  {page.marketNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-neutral-700">
                  {page.localSignals.map((signal) => (
                    <li key={signal} className="rounded-md border border-neutral-200 bg-white px-4 py-3">
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <div>
              <h2 className="text-2xl font-extrabold text-[#153a54]">{copy.links}</h2>
              <div className="mt-5 grid gap-3">
                {page.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md border border-neutral-200 px-4 py-3 text-sm font-semibold text-[#074f74] transition hover:border-[#074f74]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#153a54]">{copy.faq}</h2>
              <div className="mt-5 divide-y divide-neutral-200 rounded-lg border border-neutral-200">
                {page.faqs.map((faq) => (
                  <div key={faq.question} className="p-5">
                    <h3 className="text-base font-bold text-[#153a54]">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
