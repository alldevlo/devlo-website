import type { GeoPageData } from "@/content/geo-pages";

const swissLocalBusiness: GeoPageData["localBusiness"] = {
  name: "devlo",
  telephone: "+41-79-758-64-03",
  email: "emea@devlo.ch",
  address: {
    streetAddress: "Ruelle des Dolles 1",
    addressLocality: "Rivaz",
    postalCode: "1071",
    addressRegion: "Vaud",
    addressCountry: "CH",
  },
};

export const SWISS_REGIONAL_GEO_PAGES: Record<string, GeoPageData> = {
  "prospection-commerciale-suisse-romande": {
    country: "ch",
    slug: "prospection-commerciale-suisse-romande",
    metaTitle: "Prospection B2B Suisse romande | RDV qualifiés | devlo",
    metaDescription:
      "Agence de prospection B2B en Suisse romande pour cibler Genève, Lausanne, Vaud, Valais, Fribourg et Neuchâtel avec des campagnes FR.",
    h1: "Prospection B2B en Suisse romande pour générer des rendez-vous qualifiés",
    intro: [
      "La Suisse romande concentre des marchés B2B très différents : organisations internationales à Genève, PME industrielles de l'arc lémanique, prestataires vaudois, finance, immobilier, formation, santé et acteurs publics ou parapublics.",
      "devlo construit des campagnes francophones sobres, localisées par canton et cadrées sur des comptes ICP vérifiés. L'objectif n'est pas de promettre un volume artificiel, mais d'obtenir des conversations commerciales qualifiées avec les bons interlocuteurs.",
      "Nous utilisons les codes romands : approche factuelle, références suisses, respect du contexte LPD et relances multicanales adaptées au niveau de maturité commerciale de chaque segment.",
    ],
    caseStudySlugs: [
      "biodiversite-70-rendez-vous",
      "immobilier-30-prospects",
      "immobilier-11-prospects",
      "audiovisuel-16-rendez-vous",
    ],
    faqs: [
      {
        question: "Quels cantons couvrez-vous en Suisse romande ?",
        answer:
          "Nous couvrons Genève, Vaud, Valais, Fribourg, Neuchâtel et Jura. Les campagnes sont segmentées par canton lorsque le marché, la langue ou la densité ICP le justifie.",
      },
      {
        question: "La prospection en Suisse romande ressemble-t-elle a la France ?",
        answer:
          "Non. Les messages doivent être plus sobres, plus factuels et plus locaux qu'en France. Les références suisses, la précision du ciblage et la qualité du premier contact comptent davantage que le volume.",
      },
      {
        question: "Quels cas clients prouvent votre experience romande ?",
        answer:
          "Nous avons notamment généré 70 rendez-vous qualifiés pour APIDAE sur une cible biodiversité et plus de 30 prospects intéressés pour Abacus dans l'immobilier romand.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-suisse-alemanique": {
    country: "ch",
    slug: "prospection-commerciale-suisse-alemanique",
    metaTitle: "Prospection B2B Suisse alémanique | Deutschschweiz",
    metaDescription:
      "Campagnes de prospection B2B en Suisse alémanique : messages DE, ciblage Zurich, Bâle, Berne, St-Gall et approche DACH mesurée.",
    h1: "Prospection B2B en Suisse alémanique avec messages allemands natifs",
    intro: [
      "La Suisse alémanique demande une approche plus directe, plus factuelle et plus précise que la Romandie. Un message traduit depuis le français ne suffit pas : les dirigeants attendent une proposition claire, contextualisée et crédible.",
      "devlo sépare les campagnes Deutschschweiz des campagnes romandes : ciblage, copie allemande, preuves, objections et cadence sont adaptés avant l'envoi.",
      "Cette page s'adresse aux équipes qui veulent ouvrir Zurich, Bâle, Berne, Lucerne, St-Gall ou Winterthour sans confondre le marché suisse allemand avec l'Allemagne.",
    ],
    caseStudySlugs: [
      "hr-54-rendez-vous-dach",
      "formation-14-rendez-vous",
      "cybersecurite-4500-entreprises",
      "biocarburants-52-rendez-vous",
    ],
    faqs: [
      {
        question: "Prospectez-vous en allemand natif ?",
        answer:
          "Oui. Les campagnes pour la Suisse alémanique sont rédigées et adaptées en allemand, avec une logique DACH mais des preuves et formulations propres au marché suisse.",
      },
      {
        question: "Quelle différence entre Suisse alémanique et Allemagne ?",
        answer:
          "La Suisse alémanique est plus concentrée, plus relationnelle et plus sensible à la précision. Les séquences doivent éviter le ton trop agressif souvent toléré sur de plus grands marchés.",
      },
      {
        question: "Quels canaux fonctionnent en Suisse alémanique ?",
        answer:
          "Le cold email, LinkedIn et le calling fonctionnent si le ciblage est propre. Le téléphone reste pertinent pour qualifier rapidement les bons interlocuteurs.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-geneve": {
    country: "ch",
    slug: "prospection-commerciale-geneve",
    metaTitle: "Prospection B2B Genève | RDV qualifiés | devlo",
    metaDescription:
      "Agence de prospection B2B à Genève pour cibler finance, services, ONG, immobilier, cybersécurité et grands comptes avec campagnes FR/EN.",
    h1: "Prospection B2B à Genève pour cibler les bons décideurs",
    intro: [
      "Genève combine finance, négoce, organisations internationales, ONG, cabinets de conseil, immobilier, cybersécurité et grands comptes. La prospection y fonctionne quand le message est crédible et le ciblage irréprochable.",
      "devlo construit des campagnes Genève en français et en anglais, avec segmentation par secteur, taille d'entreprise, rôle décisionnaire et signal d'achat.",
      "Le but n'est pas d'envoyer une campagne genevoise générique, mais de distinguer les comptes locaux, les sièges internationaux et les filiales qui ont un vrai potentiel commercial.",
    ],
    caseStudySlugs: [
      "biodiversite-70-rendez-vous",
      "cybersecurite-4500-entreprises",
      "immobilier-30-prospects",
    ],
    faqs: [
      {
        question: "Quels secteurs ciblez-vous à Genève ?",
        answer:
          "Finance, immobilier, ONG, services professionnels, IT, cybersécurité, formation, santé et organisations internationales lorsque le cadre B2B est pertinent.",
      },
      {
        question: "Faut-il prospecter en français ou en anglais à Genève ?",
        answer:
          "Les deux peuvent être nécessaires. Nous segmentons par rôle, entreprise et contexte : dirigeants locaux en français, sièges internationaux ou fonctions régionales souvent en anglais.",
      },
      {
        question: "Genève est-elle adaptée à l'ABM ?",
        answer:
          "Oui. Pour les comptes à forte valeur, nous recommandons une approche ABM avec recherche compte, plusieurs décideurs, signaux d'achat et séquence multicanale.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-lausanne": {
    country: "ch",
    slug: "prospection-commerciale-lausanne",
    metaTitle: "Prospection B2B Lausanne | Agence outbound | devlo",
    metaDescription:
      "Prospection B2B à Lausanne et dans le canton de Vaud : génération de leads, cold email, LinkedIn, calling et rendez-vous qualifiés.",
    h1: "Prospection B2B à Lausanne et dans le canton de Vaud",
    intro: [
      "Lausanne et le canton de Vaud combinent PME, scale-ups, EPFL, medtech, éducation, prestations B2B, industrie et acteurs publics ou parapublics. La densité est forte, mais le marché reste relationnel.",
      "Depuis notre base vaudoise, devlo aide les entreprises B2B à transformer ce marché local en segments ICP, listes qualifiées et séquences de rendez-vous.",
      "La proximité locale permet d'utiliser des références plus crédibles, mais elle impose aussi plus de précision : un mauvais ciblage se remarque vite.",
    ],
    caseStudySlugs: [
      "audiovisuel-16-rendez-vous",
      "formation-14-rendez-vous",
      "immobilier-11-prospects",
      "biocarburants-52-rendez-vous",
    ],
    faqs: [
      {
        question: "devlo est-elle basée près de Lausanne ?",
        answer:
          "Oui. devlo est basée dans le canton de Vaud, ce qui facilite la compréhension du tissu économique lausannois et romand.",
      },
      {
        question: "Quels secteurs fonctionnent à Lausanne ?",
        answer:
          "Prestations B2B, tech, medtech, éducation, industrie, immobilier, formation et fournisseurs qui ciblent PME ou grandes organisations vaudoises.",
      },
      {
        question: "Pouvez-vous cibler Vaud au lieu de toute la Suisse ?",
        answer:
          "Oui. Nous pouvons construire un TAM limité au canton de Vaud ou l'intégrer comme premier batch avant une extension Romandie/Suisse.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-zurich": {
    country: "ch",
    slug: "prospection-commerciale-zurich",
    metaTitle: "B2B-Akquise Zurich | Leads & Termine | devlo",
    metaDescription:
      "Prospection B2B à Zurich pour cibler finance, tech, SaaS, industrie et grands comptes avec séquences allemandes et multicanales.",
    h1: "Prospection B2B à Zurich pour ouvrir le marché suisse alémanique",
    intro: [
      "Zurich est le marché B2B le plus dense de Suisse : finance, assurances, tech, SaaS, industrie, conseil et sièges régionaux. Il offre un fort potentiel, mais les décideurs y sont très sollicités.",
      "devlo prépare les campagnes Zurich avec messages allemands, preuves de marché, signaux d'achat et approche multicanale adaptée au niveau de maturité du compte.",
      "La page Zurich sert de point d'entrée pour les entreprises qui veulent commencer en Suisse alémanique par le bassin économique le plus actif.",
    ],
    caseStudySlugs: [
      "hr-54-rendez-vous-dach",
      "cybersecurite-4500-entreprises",
      "formation-14-rendez-vous",
    ],
    faqs: [
      {
        question: "Pourquoi commencer la Suisse alémanique par Zurich ?",
        answer:
          "Zurich concentre un grand nombre de sièges, décideurs financiers, tech et services. C'est souvent le meilleur premier batch lorsque l'ICP est suffisamment qualifié.",
      },
      {
        question: "Les messages Zurich doivent-ils être en allemand ?",
        answer:
          "Dans la plupart des cas, oui. L'anglais peut fonctionner pour les fonctions internationales, mais l'allemand reste plus crédible pour beaucoup de décideurs locaux.",
      },
      {
        question: "Pouvez-vous prospecter Zurich depuis une base romande ?",
        answer:
          "Oui, à condition de séparer la stratégie. Les campagnes Zurich sont traitées comme un marché distinct, avec copy DE, références adaptées et ciblage local.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-dach": {
    country: "ch",
    slug: "prospection-commerciale-dach",
    metaTitle: "Prospection B2B DACH | Allemagne Autriche Suisse | devlo",
    metaDescription:
      "Prospection B2B DACH pour cibler Allemagne, Autriche et Suisse alémanique avec messages allemands, signaux d'achat et RDV qualifiés.",
    h1: "Prospection B2B DACH pour développer Allemagne, Autriche et Suisse alémanique",
    intro: [
      "Le DACH n'est pas un seul marché uniforme. Allemagne, Autriche et Suisse alémanique partagent la langue allemande, mais pas les mêmes codes, cycles de décision ni niveaux de concurrence.",
      "devlo construit des campagnes DACH en distinguant les pays, les régions, les canaux, les preuves et les objections commerciales avant d'envoyer les séquences.",
      "Cette approche convient aux entreprises qui veulent passer d'un marché francophone à une exécution germanophone sans perdre en précision commerciale.",
    ],
    caseStudySlugs: [
      "hr-54-rendez-vous-dach",
      "formation-14-rendez-vous",
      "cybersecurite-4500-entreprises",
      "biocarburants-52-rendez-vous",
    ],
    faqs: [
      {
        question: "Quelle différence entre DACH et Suisse alémanique ?",
        answer:
          "La Suisse alémanique est une partie du DACH, mais elle doit rester séparée dans le ciblage et le messaging. Les références suisses ne remplacent pas les preuves allemandes ou autrichiennes.",
      },
      {
        question: "Avez-vous déjà obtenu des résultats en DACH ?",
        answer:
          "Oui. CareerLunch a généré 54 rendez-vous qualifiés sur le marché DACH avec une approche germanophone structurée.",
      },
      {
        question: "Faut-il lancer Allemagne, Autriche et Suisse ensemble ?",
        answer:
          "Pas toujours. Nous recommandons souvent un premier batch par pays ou sous-région pour isoler les signaux, les objections et les taux de réponse.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
};
