import type { SupportedLocale } from "@/lib/i18n/slug-map";
import altsContentJson from "@/lib/i18n/alternatives-content.json";

type AltsTranslatableContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  evaluationDisclosure?: string;
  directAnswer?: {
    label: string;
    title: string;
    body: string;
    proofPoints?: string[];
  };
  comparisonTitle?: string;
  marketAlternatives?: {
    title: string;
    intro?: string;
    options: { name: string; bestFor: string; note: string; href?: string }[];
  };
  comparisonTable: { feature: string; devlo: string; competitor: string }[];
  sourceNote?: string;
  sourceLinks?: { label: string; href: string }[];
  decisionGuide?: {
    title: string;
    bestFitTitle: string;
    bestFit: string[];
    notBestFitTitle: string;
    notBestFit: string[];
  };
  buyerChecklist?: {
    title: string;
    items: { question: string; why: string }[];
  };
  implementationPlan?: {
    title: string;
    steps: { period: string; action: string; outcome: string }[];
  };
  whyDevlo: string[];
  faqs: { question: string; answer: string }[];
  // GEO fields (optional, progressive enhancement)
  editorialTitle?: string;
  editorialParagraphs?: string[];
  summaryTitle?: string;
  summaryPoints?: string[];
  datePublished?: string;
  dateModified?: string;
};

export function getLocalizedAlternativeContent(slug: string, locale: SupportedLocale): AltsTranslatableContent | null {
  const key = locale === "en" || locale === "de" || locale === "nl" ? locale : "fr";
  const entry = (altsContentJson as Record<string, Record<string, AltsTranslatableContent>>)[slug];
  if (!entry) return null;
  return entry[key] ?? entry.fr;
}
