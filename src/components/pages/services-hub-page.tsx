import Link from "next/link";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { WaveDivider } from "@/components/ui/wave-divider";
import { InfiniteLogoRail } from "@/components/shared/logo-rail";
import { ServicesSectionHeader, ServicesSurfaceCard } from "@/components/services/services-ui";
import { CaseStudyGrid } from "@/components/shared/case-study-grid";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PROGRAMMATIC_SEO_PILOT_PAGES } from "@/content/programmatic-seo-pilot";
import { TRUSTED_LOGOS_STRIP } from "@/content/service-brand-assets";
import type { CaseStudyCard, ServiceHubCard } from "@/content/services";
import { resolvePathForLocale, type SupportedLocale } from "@/lib/i18n/slug-map";
import { buildBreadcrumbSchema } from "@/lib/seo/schema-builders";
import { toAbsoluteUrl } from "@/lib/seo/metadata";

type ServicesHubCopy = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  ctaDiscover: string;
  ctaConsultation: string;
  ctaResults: string;
  trustedTitle: string;
  trustedDescription: string;
};

type ServicesHubPageProps = {
  cards: ServiceHubCard[];
  copy: ServicesHubCopy;
  caseStudies: CaseStudyCard[];
  locale?: SupportedLocale;
};

const breadcrumbLabelsByLocale: Record<SupportedLocale, { home: string; services: string }> = {
  fr: { home: "Accueil", services: "Services" },
  en: { home: "Home", services: "Services" },
  de: { home: "Startseite", services: "Leistungen" },
  nl: { home: "Home", services: "Diensten" },
};

const serviceSelectionTables: Record<
  SupportedLocale,
  {
    caption: string;
    headers: [string, string, string];
    rows: [string, string, string][];
  }
> = {
  fr: {
    caption: "Choisir le bon service de prospection B2B devlo",
    headers: ["Objectif", "Service prioritaire", "Quand l'utiliser"],
    rows: [
      ["Construire un système GTM", "GTM engineering", "Quand il faut relier ICP, signaux, données, séquences, CRM et reporting."],
      ["Créer une liste ICP", "Génération de leads", "Quand le TAM existe mais que les comptes ne sont pas qualifiés."],
      ["Obtenir des rendez-vous", "Prise de rendez-vous", "Quand l'équipe commerciale doit parler à plus de décideurs."],
      ["Fiabiliser les données", "Enrichissement Clay", "Quand les emails, rôles ou domaines sont incomplets."],
      ["Prioriser les comptes", "Intent data", "Quand il faut contacter les entreprises au bon moment."],
    ],
  },
  en: {
    caption: "Choose the right devlo B2B prospecting service",
    headers: ["Goal", "Priority service", "When to use it"],
    rows: [
      ["Build a GTM system", "GTM engineering", "When ICP, signals, data, sequences, CRM and reporting need to work together."],
      ["Build an ICP list", "Lead generation", "When the TAM exists but accounts are not qualified."],
      ["Book meetings", "Appointment setting", "When sales needs to speak with more decision makers."],
      ["Improve data quality", "Clay enrichment", "When emails, roles, or domains are incomplete."],
      ["Prioritize accounts", "Intent data", "When companies must be contacted at the right time."],
    ],
  },
  de: {
    caption: "Den passenden devlo B2B-Prospecting-Service wählen",
    headers: ["Ziel", "Prioritärer Service", "Wann nutzen"],
    rows: [
      ["GTM-System aufbauen", "GTM Engineering", "Wenn ICP, Signale, Daten, Sequenzen, CRM und Reporting verbunden werden müssen."],
      ["ICP-Liste erstellen", "Leadgenerierung", "Wenn der TAM existiert, aber Accounts nicht qualifiziert sind."],
      ["Termine buchen", "Terminvereinbarung", "Wenn Sales mit mehr Entscheidern sprechen muss."],
      ["Datenqualität verbessern", "Clay-Enrichment", "Wenn E-Mails, Rollen oder Domains fehlen."],
      ["Accounts priorisieren", "Intent Data", "Wenn Unternehmen zum richtigen Zeitpunkt kontaktiert werden sollen."],
    ],
  },
  nl: {
    caption: "Kies de juiste devlo B2B-prospectiedienst",
    headers: ["Doel", "Prioritaire dienst", "Wanneer gebruiken"],
    rows: [
      ["GTM-systeem bouwen", "GTM engineering", "Wanneer ICP, signalen, data, sequences, CRM en reporting moeten samenwerken."],
      ["ICP-lijst bouwen", "Leadgeneratie", "Wanneer de TAM bestaat maar accounts niet gekwalificeerd zijn."],
      ["Afspraken boeken", "Afspraakplanning", "Wanneer sales met meer beslissers moet praten."],
      ["Datakwaliteit verbeteren", "Clay-verrijking", "Wanneer e-mails, rollen of domeinen ontbreken."],
      ["Accounts prioriteren", "Intent data", "Wanneer bedrijven op het juiste moment benaderd moeten worden."],
    ],
  },
};

const gtmBridgeByLocale: Record<SupportedLocale, { title: string; body: string; cta: string }> = {
  fr: {
    title: "Besoin d'un système complet plutôt qu'un service isolé ?",
    body:
      "Le GTM engineering relie ciblage ICP, signaux d'achat, enrichissement Clay, séquences multicanales, CRM et reporting pour produire un actif go-to-market réutilisable.",
    cta: "Voir l'approche GTM engineering",
  },
  en: {
    title: "Need a complete system instead of one isolated service?",
    body:
      "GTM engineering connects ICP targeting, buying signals, Clay enrichment, multichannel sequences, CRM and reporting into a reusable go-to-market asset.",
    cta: "View the GTM engineering approach",
  },
  de: {
    title: "Brauchen Sie ein vollstaendiges System statt eines einzelnen Services?",
    body:
      "GTM Engineering verbindet ICP-Targeting, Kaufsignale, Clay Enrichment, Multichannel-Sequenzen, CRM und Reporting zu einem wiederverwendbaren Go-to-Market-Asset.",
    cta: "GTM Engineering ansehen",
  },
  nl: {
    title: "Een volledig systeem nodig in plaats van een losse dienst?",
    body:
      "GTM engineering verbindt ICP-targeting, koopsignalen, Clay enrichment, multichannel sequences, CRM en reporting tot een herbruikbaar go-to-market asset.",
    cta: "Bekijk de GTM engineering aanpak",
  },
};

const coverageCopyByLocale: Record<
  SupportedLocale,
  { eyebrow: string; title: string; description: string }
> = {
  fr: {
    eyebrow: "Maillage local",
    title: "Pages de prospection B2B par marché",
    description:
      "Accès direct aux guides locaux pour renforcer la découverte, le maillage interne et la compréhension des zones couvertes.",
  },
  en: {
    eyebrow: "Local coverage",
    title: "B2B prospecting pages by market",
    description:
      "Direct access to local guides so crawlers and buyers can understand which markets devlo covers.",
  },
  de: {
    eyebrow: "Lokale Abdeckung",
    title: "B2B-Prospecting-Seiten nach Markt",
    description:
      "Direkter Zugriff auf lokale Guides, damit Crawler und Käufer die abgedeckten Märkte besser verstehen.",
  },
  nl: {
    eyebrow: "Lokale dekking",
    title: "B2B-prospectiepagina's per markt",
    description:
      "Directe toegang tot lokale gidsen zodat crawlers en kopers begrijpen welke markten devlo bedient.",
  },
};

export function ServicesHubPage({ cards, copy, caseStudies, locale = "fr" }: ServicesHubPageProps) {
  const labels = breadcrumbLabelsByLocale[locale];
  const serviceSelectionTable = serviceSelectionTables[locale];
  const gtmBridge = gtmBridgeByLocale[locale];
  const coverageCopy = coverageCopyByLocale[locale];
  const toLocalePath = (frPath: string) => resolvePathForLocale(frPath, locale).path;
  const servicesHubPath = toLocalePath("/services");
  const coverageLinks = PROGRAMMATIC_SEO_PILOT_PAGES
    .filter((page) => page.locale === locale)
    .sort((a, b) => a.market.localeCompare(b.market, locale))
    .map((page) => ({ label: page.market, href: page.path }));
  const breadcrumbItems = [
    { name: labels.home, path: toLocalePath("/") },
    { name: labels.services, path: servicesHubPath },
  ];
  const serviceHubSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: copy.title,
    description: copy.description,
    provider: {
      "@type": "Organization",
      name: "devlo",
      url: "https://devlo.ch",
    },
    areaServed: ["CH", "BE", "FR", "DE", "AT", "NL"],
    url: toAbsoluteUrl(servicesHubPath),
  };

  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          serviceHubSchema,
        ]}
      />

      <main>
        <section className="bg-gradient-to-b from-[#074f74] to-[#0a3a54] pt-2 pb-16 text-white md:pb-20">
          <Breadcrumb items={breadcrumbItems} variant="dark" />
          <div className="mx-auto w-full max-w-screen-xl px-6 pt-8 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/60">
              {copy.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 md:text-lg">
              {copy.description}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">{copy.intro}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#nos-services"
                className="inline-flex h-12 items-center rounded-lg bg-white px-6 text-sm font-semibold uppercase tracking-[0.1em] text-[#074f74] transition hover:bg-white/90"
              >
                {copy.ctaDiscover}
              </a>
              <Link
                href={toLocalePath("/consultation")}
                className="inline-flex h-12 items-center rounded-lg border border-white/30 px-6 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:border-white/60"
              >
                {copy.ctaConsultation}
              </Link>
              <Link
                href={toLocalePath("/etudes-de-cas")}
                className="inline-flex h-12 items-center rounded-lg border border-white/30 px-6 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:border-white/60"
              >
                {copy.ctaResults}
              </Link>
            </div>
          </div>
        </section>

        <WaveDivider variant="layered-bottom" fromBg="#0a3a54" toBg="#FFFFFF" />

        <section className="bg-white py-10">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-10">
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[8vw] bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[8vw] bg-gradient-to-l from-white to-transparent" />
              <InfiniteLogoRail logos={TRUSTED_LOGOS_STRIP} duration="slow" pauseOnHover />
            </div>
          </div>
        </section>

        <SectionWrapper id="nos-services" background="white" className="!pt-0">
          <div className="mb-8 overflow-x-auto rounded-xl border border-neutral-200 bg-white">
            <table className="min-w-[720px] w-full border-collapse text-left text-sm">
              <caption className="sr-only">{serviceSelectionTable.caption}</caption>
              <thead className="bg-neutral-50 text-xs font-semibold uppercase tracking-[0.08em] text-devlo-700">
                <tr>
                  {serviceSelectionTable.headers.map((header) => (
                    <th key={header} scope="col" className="px-5 py-3">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-700">
                {serviceSelectionTable.rows.map(([goal, service, timing]) => (
                  <tr key={goal}>
                    <td className="px-5 py-4 font-semibold text-devlo-900">{goal}</td>
                    <td className="px-5 py-4">{service}</td>
                    <td className="px-5 py-4">{timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-8 rounded-lg border border-devlo-700/20 bg-[#F7F8FC] p-6 md:flex md:items-center md:justify-between md:gap-8">
            <div className="max-w-3xl">
              <h2 className="text-xl font-bold leading-tight text-devlo-900">{gtmBridge.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{gtmBridge.body}</p>
            </div>
            <Link
              href={toLocalePath("/gtm-engineering-agency")}
              className="mt-5 inline-flex h-11 shrink-0 items-center rounded-lg bg-devlo-800 px-5 text-sm font-semibold text-white transition hover:bg-devlo-900 md:mt-0"
            >
              {gtmBridge.cta}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((service) => (
              <Link key={service.href} href={toLocalePath(service.href)} className="group">
                <ServicesSurfaceCard className="h-full p-6 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-devlo-600/35 group-hover:shadow-panel">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl" aria-hidden>
                      {service.icon}
                    </span>
                    <span className="text-sm font-semibold text-devlo-700 transition group-hover:translate-x-0.5">→</span>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold leading-tight text-devlo-900">{service.title}</h2>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-devlo-700">{service.subtitle}</p>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{service.description}</p>

                  <div className="mt-5 border-t border-neutral-100 pt-4">
                    <p className="text-xs font-semibold text-devlo-700">✓ {service.kpi}</p>
                  </div>
                </ServicesSurfaceCard>
              </Link>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper background="white" className="border-t border-neutral-200">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-devlo-700">
                {coverageCopy.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-devlo-900 md:text-3xl">
                {coverageCopy.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{coverageCopy.description}</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {coverageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md border border-neutral-200 px-3 py-2 text-sm font-semibold text-devlo-800 transition hover:border-devlo-700 hover:bg-devlo-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper background="white" className="border-t border-neutral-200">
          <div className="space-y-8">
            <ServicesSectionHeader title={copy.trustedTitle} description={copy.trustedDescription} />

            <CaseStudyGrid caseStudies={caseStudies} locale={locale} />
          </div>
        </SectionWrapper>
      </main>
    </>
  );
}
