const PRODUCTION_SITE_URL = "https://devlo.ch";

function resolveSiteUrl(): string {
  return PRODUCTION_SITE_URL;
}

export const siteConfig = {
  name: "devlo",
  description:
    "GTM engineering agency européenne pour AI outbound, prospection B2B multicanale, signaux d'achat, enrichissement Clay et rendez-vous qualifiés.",
  url: resolveSiteUrl(),
  locale: "fr-CH",
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Agence", href: "/" },
    { label: "Études de cas", href: "/etudes-de-cas" },
    { label: "Outbound Academy", href: "/academy" },
    { label: "Consultation gratuite", href: "/consultation" },
  ],
  footer: {
    legal: [
      { label: "Conditions générales", href: "/conditions" },
    ],
    contact: [
      { label: "+41 79 758 64 03", href: "tel:+41797586403" },
      { label: "emea@devlo.ch", href: "mailto:emea@devlo.ch" },
    ],
  },
} as const;
