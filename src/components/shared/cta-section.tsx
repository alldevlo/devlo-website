import Link from "next/link";
import { resolvePathForLocale, type SupportedLocale } from "@/lib/i18n/slug-map";

type CTASectionProps = {
  locale?: SupportedLocale;
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showServicesLink?: boolean;
};

const copyByLocale: Record<SupportedLocale, { ctaConsultation: string; ctaCaseStudies: string; ctaServices: string }> = {
  fr: {
    ctaConsultation: "Réserver une consultation gratuite",
    ctaCaseStudies: "Voir les études de cas",
    ctaServices: "Voir les services",
  },
  en: {
    ctaConsultation: "Book a free consultation",
    ctaCaseStudies: "View case studies",
    ctaServices: "View services",
  },
  de: {
    ctaConsultation: "Kostenlose Beratung buchen",
    ctaCaseStudies: "Fallstudien ansehen",
    ctaServices: "Leistungen ansehen",
  },
  nl: {
    ctaConsultation: "Gratis consultatie boeken",
    ctaCaseStudies: "Praktijkvoorbeelden bekijken",
    ctaServices: "Diensten bekijken",
  },
};

export function CTASection({
  locale = "fr",
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  showServicesLink = true,
}: CTASectionProps) {
  const copy = copyByLocale[locale];
  const resolvedPrimaryHref = primaryHref ?? resolvePathForLocale("/consultation", locale).path;
  const resolvedSecondaryHref = secondaryHref ?? resolvePathForLocale("/etudes-de-cas", locale).path;
  return (
    <section className="border-t border-neutral-200 bg-white py-16 md:py-18">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold leading-tight text-devlo-900 md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-neutral-600 md:text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={resolvedPrimaryHref}
            className="rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
          >
            {primaryLabel ?? copy.ctaConsultation}
          </Link>
          <Link
            href={resolvedSecondaryHref}
            className="rounded-lg border border-neutral-300 px-6 py-3 text-sm font-semibold text-devlo-900 transition hover:border-devlo-700/40 hover:text-devlo-700"
          >
            {secondaryLabel ?? copy.ctaCaseStudies}
          </Link>
          {showServicesLink && (
            <Link
              href={resolvePathForLocale("/services", locale).path}
              className="rounded-lg border border-neutral-300 px-6 py-3 text-sm font-semibold text-devlo-900 transition hover:border-devlo-700/40 hover:text-devlo-700"
            >
              {copy.ctaServices}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
