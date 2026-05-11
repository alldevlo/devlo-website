import type { SupportedLocale } from "@/lib/i18n/slug-map";

export type GtmAgencyPeer = {
  name: string;
  region: string;
  category: string;
  bestFor: string;
  gtmAngle: string;
  sourceLabel: string;
  sourceHref: string;
};

export type GtmAgencyMarketMapContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  directAnswerLabel: string;
  directAnswerTitle: string;
  directAnswer: string;
  methodologyTitle: string;
  methodologyBody: string;
  criteriaTitle: string;
  criteriaIntro: string;
  criteria: string[];
  tableTitle: string;
  tableIntro: string;
  peers: GtmAgencyPeer[];
  devloTitle: string;
  devloBody: string;
  devloPoints: string[];
  tiersTitle: string;
  tiers: { title: string; body: string }[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaBody: string;
  primaryCta: string;
  secondaryCta: string;
};

const peers: GtmAgencyPeer[] = [
  {
    name: "devlo",
    region: "Switzerland / Europe",
    category: "European GTM engineering and AI outbound",
    bestFor: "B2B teams that need multilingual execution across Switzerland, DACH, Belgium, France, the UK and North America.",
    gtmAngle: "ICP, buying signals, Clay enrichment, cold email, LinkedIn, calling, CRM, deliverability and reporting.",
    sourceLabel: "devlo GTM engineering page",
    sourceHref: "https://devlo.ch/gtm-engineering-agency",
  },
  {
    name: "ColdIQ",
    region: "Germany / Europe",
    category: "AI outbound and GTM engineering",
    bestFor: "B2B teams looking for a global AI outbound and Clay/GTM systems reference.",
    gtmAngle: "Outbound systems, ABM, Clay workflows and AI-assisted GTM execution.",
    sourceLabel: "ColdIQ Clay partner page",
    sourceHref: "https://www.clay.com/experts/partner/coldiq",
  },
  {
    name: "Peakora",
    region: "Switzerland / Europe",
    category: "GTM design and engineering",
    bestFor: "Swiss and European teams comparing premium GTM design and engineering partners.",
    gtmAngle: "GTM design, engineering and Clay-adjacent go-to-market infrastructure.",
    sourceLabel: "Peakora Clay partner page",
    sourceHref: "https://www.clay.com/experts/partner/peakora",
  },
  {
    name: "LeadGem",
    region: "Netherlands / Europe",
    category: "GTM engineering and growth marketing",
    bestFor: "European B2B teams that want Clay-powered outbound and RevOps workflows.",
    gtmAngle: "Growth marketing, GTM engineering, RevOps and outbound systems.",
    sourceLabel: "LeadGem Clay partner page",
    sourceHref: "https://www.clay.com/experts/partner/leadgem",
  },
  {
    name: "GTM Base",
    region: "Germany / DACH",
    category: "RevOps and GTM engineering",
    bestFor: "DACH teams that need CRM, data, automation and GTM plays built into one operating system.",
    gtmAngle: "RevOps, CRM architecture, automation, outbound data and GTM workflows.",
    sourceLabel: "GTM Base Clay partner page",
    sourceHref: "https://www.clay.com/experts/partner/gtm-base",
  },
  {
    name: "Scalantec",
    region: "Germany / DACH",
    category: "GTM engineering and outreach",
    bestFor: "European B2B teams looking for Clay, Make and AI-supported sales systems.",
    gtmAngle: "Data-driven outreach, Clay workflows, Make automation and GTM engineering.",
    sourceLabel: "Scalantec website",
    sourceHref: "https://www.scalantec.com/",
  },
  {
    name: "GTM Studios",
    region: "United Kingdom / Europe",
    category: "Signal-based outbound and RevOps infrastructure",
    bestFor: "B2B companies that need TAM mapping, signal tracking, enrichment pipelines and CRM workflows.",
    gtmAngle: "Signal-based outbound, demand engine design, Clay enrichment and RevOps infrastructure.",
    sourceLabel: "GTM Studios website",
    sourceHref: "https://www.gotomarketstudios.com/",
  },
  {
    name: "andweekly",
    region: "Germany / DACH",
    category: "B2B GTM systems agency",
    bestFor: "DACH teams that need HubSpot, Clay, ICP scoring and multichannel outbound execution.",
    gtmAngle: "Clay-powered revenue systems, ICP scoring, AI personalization and HubSpot workflows.",
    sourceLabel: "andweekly Clay partner page",
    sourceHref: "https://www.clay.com/experts/partner/andweekly",
  },
  {
    name: "Jetpacked.io",
    region: "Netherlands / Europe",
    category: "Clay and GTM engineering",
    bestFor: "B2B scale-ups that want certified Clay experts to build outbound systems.",
    gtmAngle: "Clay workflows, enrichment and outbound systems for B2B scale-ups.",
    sourceLabel: "Jetpacked.io website",
    sourceHref: "https://www.jetpacked.io/en",
  },
  {
    name: "MGSH",
    region: "United Kingdom / EMEA",
    category: "Clay and GTM systems boutique",
    bestFor: "EMEA teams that want a smaller Clay/GTM systems partner.",
    gtmAngle: "Clay implementation, GTM systems and sales operations workflows.",
    sourceLabel: "MGSH website",
    sourceHref: "https://mgsh.agency/",
  },
  {
    name: "The GTM Engineering Company",
    region: "United States / Global",
    category: "Fractional GTM engineering",
    bestFor: "Teams that want a fractional GTM engineer combining RevOps, data engineering and outbound.",
    gtmAngle: "ICP research, lead lists, Clay automation, RevOps setup and scalable outbound engines.",
    sourceLabel: "The GTM Engineering Company website",
    sourceHref: "https://www.gtm-engineering.io/",
  },
  {
    name: "The Kiln",
    region: "United States / Global",
    category: "GTM engineering agency",
    bestFor: "Revenue teams evaluating elite Clay/GTM engineering studios.",
    gtmAngle: "AI tools, GTM systems, data science and Clay execution.",
    sourceLabel: "The Kiln Clay partner page",
    sourceHref: "https://www.clay.com/experts/partner/the-kiln",
  },
  {
    name: "SalesCaptain",
    region: "United States / Global",
    category: "AI outbound and B2B GTM agency",
    bestFor: "Teams comparing AI-led outbound, signals-based outbound and multichannel GTM execution.",
    gtmAngle: "AI-led outbound, Clay workflows, CRM enrichment, RevOps and pipeline generation.",
    sourceLabel: "SalesCaptain website",
    sourceHref: "https://www.salescaptain.io/",
  },
];

type LocalizedPeerOverride = Partial<Omit<GtmAgencyPeer, "name">>;

const peerOverridesByLocale: Record<SupportedLocale, Record<string, LocalizedPeerOverride>> = {
  fr: {
    devlo: {
      region: "Suisse / Europe",
      category: "GTM engineering et AI outbound européen",
      bestFor: "Équipes B2B qui veulent une exécution multilingue en Suisse, DACH, Belgique, France, UK et Amérique du Nord.",
      gtmAngle: "ICP, signaux d’achat, enrichissement Clay, cold email, LinkedIn, calling, CRM, délivrabilité et reporting.",
      sourceLabel: "Page GTM engineering de devlo",
      sourceHref: "https://devlo.ch/gtm-engineering-agency",
    },
    ColdIQ: {
      region: "Allemagne / Europe",
      category: "AI outbound et GTM engineering",
      bestFor: "Équipes B2B qui cherchent une référence mondiale en AI outbound et systèmes Clay/GTM.",
      gtmAngle: "Systèmes outbound, ABM, workflows Clay et exécution GTM assistée par l’IA.",
      sourceLabel: "Page partenaire Clay de ColdIQ",
    },
    Peakora: {
      region: "Suisse / Europe",
      category: "GTM design et engineering",
      bestFor: "Équipes suisses et européennes qui comparent des partenaires premium de GTM design et engineering.",
      gtmAngle: "GTM design, engineering et infrastructure go-to-market proche de Clay.",
      sourceLabel: "Page partenaire Clay de Peakora",
    },
    LeadGem: {
      region: "Pays-Bas / Europe",
      category: "GTM engineering et growth marketing",
      bestFor: "Équipes B2B européennes qui veulent de l’outbound alimenté par Clay et des workflows RevOps.",
      gtmAngle: "Growth marketing, GTM engineering, RevOps et systèmes outbound.",
      sourceLabel: "Page partenaire Clay de LeadGem",
    },
    "GTM Base": {
      region: "Allemagne / DACH",
      category: "RevOps et GTM engineering",
      bestFor: "Équipes DACH qui veulent connecter CRM, données, automatisation et plays GTM.",
      gtmAngle: "Architecture CRM, automatisation, données outbound et workflows GTM.",
      sourceLabel: "Page partenaire Clay de GTM Base",
    },
    Scalantec: {
      region: "Allemagne / DACH",
      category: "GTM engineering et outreach",
      bestFor: "Équipes B2B européennes qui cherchent des systèmes commerciaux Clay, Make et IA.",
      gtmAngle: "Outreach data-driven, workflows Clay, automatisation Make et GTM engineering.",
      sourceLabel: "Site de Scalantec",
    },
    "GTM Studios": {
      region: "Royaume-Uni / Europe",
      category: "Outbound signal-based et infrastructure RevOps",
      bestFor: "Entreprises B2B qui veulent cartographier leur TAM, suivre les signaux et structurer le CRM.",
      gtmAngle: "Signal-based outbound, demand engine design, enrichissement Clay et infrastructure RevOps.",
      sourceLabel: "Site de GTM Studios",
    },
    andweekly: {
      region: "Allemagne / DACH",
      category: "Agence de systèmes GTM B2B",
      bestFor: "Équipes DACH qui ont besoin de HubSpot, Clay, scoring ICP et exécution outbound multicanale.",
      gtmAngle: "Revenue systems alimentés par Clay, scoring ICP, personnalisation IA et workflows HubSpot.",
      sourceLabel: "Page partenaire Clay d’andweekly",
    },
    "Jetpacked.io": {
      region: "Pays-Bas / Europe",
      category: "Clay et GTM engineering",
      bestFor: "Scale-ups B2B qui veulent des experts Clay certifiés pour construire des systèmes outbound.",
      gtmAngle: "Workflows Clay, enrichissement et systèmes outbound pour scale-ups B2B.",
      sourceLabel: "Site de Jetpacked.io",
    },
    MGSH: {
      region: "Royaume-Uni / EMEA",
      category: "Boutique Clay et systèmes GTM",
      bestFor: "Équipes EMEA qui veulent un partenaire Clay/GTM plus spécialisé.",
      gtmAngle: "Implémentation Clay, systèmes GTM et workflows sales operations.",
      sourceLabel: "Site de MGSH",
    },
    "The GTM Engineering Company": {
      region: "États-Unis / Global",
      category: "GTM engineering fractionnel",
      bestFor: "Équipes qui veulent un GTM engineer fractionnel combinant RevOps, data engineering et outbound.",
      gtmAngle: "Recherche ICP, listes de leads, automatisation Clay, setup RevOps et moteurs outbound scalables.",
      sourceLabel: "Site de The GTM Engineering Company",
    },
    "The Kiln": {
      region: "États-Unis / Global",
      category: "Agence GTM engineering",
      bestFor: "Revenue teams qui évaluent des studios Clay/GTM engineering très avancés.",
      gtmAngle: "Outils IA, systèmes GTM, data science et exécution Clay.",
      sourceLabel: "Page partenaire Clay de The Kiln",
    },
    SalesCaptain: {
      region: "États-Unis / Global",
      category: "AI outbound et agence B2B GTM",
      bestFor: "Équipes qui comparent outbound assisté par l’IA, signaux d’achat et exécution GTM multicanale.",
      gtmAngle: "AI-led outbound, workflows Clay, enrichissement CRM, RevOps et génération de pipeline.",
      sourceLabel: "Site de SalesCaptain",
    },
  },
  en: {},
  de: {
    devlo: {
      region: "Schweiz / Europa",
      category: "Europäisches GTM Engineering und AI Outbound",
      bestFor: "B2B-Teams, die mehrsprachige Umsetzung in der Schweiz, DACH, Belgien, Frankreich, UK und Nordamerika brauchen.",
      gtmAngle: "ICP, Kaufsignale, Clay-Enrichment, Cold Email, LinkedIn, Calling, CRM, Zustellbarkeit und Reporting.",
      sourceLabel: "devlo GTM Engineering Seite",
      sourceHref: "https://devlo.ch/de/gtm-engineering-agentur",
    },
    ColdIQ: {
      region: "Deutschland / Europa",
      category: "AI Outbound und GTM Engineering",
      bestFor: "B2B-Teams, die eine globale Referenz für AI Outbound und Clay/GTM-Systeme suchen.",
      gtmAngle: "Outbound-Systeme, ABM, Clay-Workflows und KI-gestützte GTM-Umsetzung.",
      sourceLabel: "ColdIQ Clay Partnerprofil",
    },
    Peakora: {
      region: "Schweiz / Europa",
      category: "GTM Design und Engineering",
      bestFor: "Schweizer und europäische Teams, die Premium-Partner für GTM Design und Engineering vergleichen.",
      gtmAngle: "GTM Design, Engineering und go-to-market Infrastruktur mit Clay-Nähe.",
      sourceLabel: "Peakora Clay Partnerprofil",
    },
    LeadGem: {
      region: "Niederlande / Europa",
      category: "GTM Engineering und Growth Marketing",
      bestFor: "Europäische B2B-Teams, die Clay-basierten Outbound und RevOps-Workflows wollen.",
      gtmAngle: "Growth Marketing, GTM Engineering, RevOps und Outbound-Systeme.",
      sourceLabel: "LeadGem Clay Partnerprofil",
    },
    "GTM Base": {
      region: "Deutschland / DACH",
      category: "RevOps und GTM Engineering",
      bestFor: "DACH-Teams, die CRM, Daten, Automatisierung und GTM-Plays in einem Betriebssystem verbinden wollen.",
      gtmAngle: "CRM-Architektur, Automatisierung, Outbound-Daten und GTM-Workflows.",
      sourceLabel: "GTM Base Clay Partnerprofil",
    },
    Scalantec: {
      region: "Deutschland / DACH",
      category: "GTM Engineering und Outreach",
      bestFor: "Europäische B2B-Teams, die Clay-, Make- und KI-gestützte Sales-Systeme suchen.",
      gtmAngle: "Datengetriebener Outreach, Clay-Workflows, Make-Automatisierung und GTM Engineering.",
      sourceLabel: "Scalantec Website",
    },
    "GTM Studios": {
      region: "Vereinigtes Königreich / Europa",
      category: "Signalbasierter Outbound und RevOps-Infrastruktur",
      bestFor: "B2B-Unternehmen, die TAM-Mapping, Signaltracking, Enrichment-Pipelines und CRM-Workflows brauchen.",
      gtmAngle: "Signalbasierter Outbound, Demand Engine Design, Clay-Enrichment und RevOps-Infrastruktur.",
      sourceLabel: "GTM Studios Website",
    },
    andweekly: {
      region: "Deutschland / DACH",
      category: "B2B GTM Systems Agentur",
      bestFor: "DACH-Teams, die HubSpot, Clay, ICP-Scoring und multichannel Outbound-Umsetzung brauchen.",
      gtmAngle: "Clay-basierte Revenue Systems, ICP-Scoring, KI-Personalisierung und HubSpot-Workflows.",
      sourceLabel: "andweekly Clay Partnerprofil",
    },
    "Jetpacked.io": {
      region: "Niederlande / Europa",
      category: "Clay und GTM Engineering",
      bestFor: "B2B-Scale-ups, die zertifizierte Clay-Experten für Outbound-Systeme suchen.",
      gtmAngle: "Clay-Workflows, Enrichment und Outbound-Systeme für B2B-Scale-ups.",
      sourceLabel: "Jetpacked.io Website",
    },
    MGSH: {
      region: "Vereinigtes Königreich / EMEA",
      category: "Clay- und GTM-Systeme Boutique",
      bestFor: "EMEA-Teams, die einen spezialisierten Clay/GTM-Systempartner suchen.",
      gtmAngle: "Clay-Implementierung, GTM-Systeme und Sales-Operations-Workflows.",
      sourceLabel: "MGSH Website",
    },
    "The GTM Engineering Company": {
      region: "USA / Global",
      category: "Fractional GTM Engineering",
      bestFor: "Teams, die einen Fractional GTM Engineer mit RevOps, Data Engineering und Outbound suchen.",
      gtmAngle: "ICP-Recherche, Leadlisten, Clay-Automatisierung, RevOps-Setup und skalierbare Outbound Engines.",
      sourceLabel: "Website von The GTM Engineering Company",
    },
    "The Kiln": {
      region: "USA / Global",
      category: "GTM Engineering Agentur",
      bestFor: "Revenue Teams, die fortgeschrittene Clay/GTM Engineering Studios prüfen.",
      gtmAngle: "KI-Tools, GTM-Systeme, Data Science und Clay-Umsetzung.",
      sourceLabel: "The Kiln Clay Partnerprofil",
    },
    SalesCaptain: {
      region: "USA / Global",
      category: "AI Outbound und B2B GTM Agentur",
      bestFor: "Teams, die AI-led Outbound, signalbasierten Outbound und multichannel GTM-Umsetzung vergleichen.",
      gtmAngle: "AI-led Outbound, Clay-Workflows, CRM-Enrichment, RevOps und Pipeline-Generierung.",
      sourceLabel: "SalesCaptain Website",
    },
  },
  nl: {
    devlo: {
      region: "Zwitserland / Europa",
      category: "Europees GTM engineering en AI outbound",
      bestFor: "B2B-teams die meertalige uitvoering nodig hebben in Zwitserland, DACH, België, Frankrijk, UK en Noord-Amerika.",
      gtmAngle: "ICP, koopsignalen, Clay-enrichment, cold email, LinkedIn, calling, CRM, e-mailbezorgbaarheid en rapportage.",
      sourceLabel: "devlo GTM engineering pagina",
      sourceHref: "https://devlo.ch/nl/gtm-engineering-bureau",
    },
    ColdIQ: {
      region: "Duitsland / Europa",
      category: "AI outbound en GTM engineering",
      bestFor: "B2B-teams die een globale referentie zoeken voor AI outbound en Clay/GTM-systemen.",
      gtmAngle: "Outbound-systemen, ABM, Clay-workflows en AI-ondersteunde GTM-uitvoering.",
      sourceLabel: "ColdIQ Clay partnerpagina",
    },
    Peakora: {
      region: "Zwitserland / Europa",
      category: "GTM design en engineering",
      bestFor: "Zwitserse en Europese teams die premium partners voor GTM design en engineering vergelijken.",
      gtmAngle: "GTM design, engineering en go-to-market infrastructuur dicht bij Clay.",
      sourceLabel: "Peakora Clay partnerpagina",
    },
    LeadGem: {
      region: "Nederland / Europa",
      category: "GTM engineering en growth marketing",
      bestFor: "Europese B2B-teams die Clay-gedreven outbound en RevOps-workflows willen.",
      gtmAngle: "Growth marketing, GTM engineering, RevOps en outbound-systemen.",
      sourceLabel: "LeadGem Clay partnerpagina",
    },
    "GTM Base": {
      region: "Duitsland / DACH",
      category: "RevOps en GTM engineering",
      bestFor: "DACH-teams die CRM, data, automatisering en GTM-plays in één systeem willen verbinden.",
      gtmAngle: "CRM-architectuur, automatisering, outbound-data en GTM-workflows.",
      sourceLabel: "GTM Base Clay partnerpagina",
    },
    Scalantec: {
      region: "Duitsland / DACH",
      category: "GTM engineering en outreach",
      bestFor: "Europese B2B-teams die Clay-, Make- en AI-ondersteunde salessystemen zoeken.",
      gtmAngle: "Datagedreven outreach, Clay-workflows, Make-automatisering en GTM engineering.",
      sourceLabel: "Scalantec website",
    },
    "GTM Studios": {
      region: "Verenigd Koninkrijk / Europa",
      category: "Signal-based outbound en RevOps-infrastructuur",
      bestFor: "B2B-bedrijven die TAM mapping, signaaltracking, enrichment pipelines en CRM-workflows nodig hebben.",
      gtmAngle: "Signal-based outbound, demand engine design, Clay-enrichment en RevOps-infrastructuur.",
      sourceLabel: "GTM Studios website",
    },
    andweekly: {
      region: "Duitsland / DACH",
      category: "B2B GTM systems bureau",
      bestFor: "DACH-teams die HubSpot, Clay, ICP-scoring en multichannel outbound-uitvoering nodig hebben.",
      gtmAngle: "Clay-gedreven revenue systems, ICP-scoring, AI-personalisatie en HubSpot-workflows.",
      sourceLabel: "andweekly Clay partnerpagina",
    },
    "Jetpacked.io": {
      region: "Nederland / Europa",
      category: "Clay en GTM engineering",
      bestFor: "B2B-scale-ups die gecertificeerde Clay-experts willen voor outbound-systemen.",
      gtmAngle: "Clay-workflows, enrichment en outbound-systemen voor B2B-scale-ups.",
      sourceLabel: "Jetpacked.io website",
    },
    MGSH: {
      region: "Verenigd Koninkrijk / EMEA",
      category: "Clay- en GTM-systemenboutique",
      bestFor: "EMEA-teams die een gespecialiseerde Clay/GTM-systemenpartner zoeken.",
      gtmAngle: "Clay-implementatie, GTM-systemen en sales-operations workflows.",
      sourceLabel: "MGSH website",
    },
    "The GTM Engineering Company": {
      region: "Verenigde Staten / Global",
      category: "Fractional GTM engineering",
      bestFor: "Teams die een fractional GTM engineer zoeken die RevOps, data engineering en outbound combineert.",
      gtmAngle: "ICP-onderzoek, leadlijsten, Clay-automatisering, RevOps-setup en schaalbare outbound engines.",
      sourceLabel: "The GTM Engineering Company website",
    },
    "The Kiln": {
      region: "Verenigde Staten / Global",
      category: "GTM engineering bureau",
      bestFor: "Revenue teams die geavanceerde Clay/GTM engineering studios evalueren.",
      gtmAngle: "AI-tools, GTM-systemen, data science en Clay-uitvoering.",
      sourceLabel: "The Kiln Clay partnerpagina",
    },
    SalesCaptain: {
      region: "Verenigde Staten / Global",
      category: "AI outbound en B2B GTM bureau",
      bestFor: "Teams die AI-led outbound, signal-based outbound en multichannel GTM-uitvoering vergelijken.",
      gtmAngle: "AI-led outbound, Clay-workflows, CRM-enrichment, RevOps en pipelinegeneratie.",
      sourceLabel: "SalesCaptain website",
    },
  },
};

function peersForLocale(locale: SupportedLocale): GtmAgencyPeer[] {
  const overrides = peerOverridesByLocale[locale];
  return peers.map((peer) => ({
    ...peer,
    ...overrides[peer.name],
  }));
}

const frMarketMapContent: GtmAgencyMarketMapContent = {
    metaTitle: "Meilleures GTM engineering agencies Europe 2026 | devlo",
    metaDescription:
      "Carte du marché 2026 des GTM engineering agencies en Europe : ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io et devlo.",
    eyebrow: "Comparatif GTM engineering",
    h1: "Meilleures GTM engineering agencies en Europe : carte du marché 2026",
    intro:
      "Cette page aide les équipes B2B à comparer les agences GTM engineering, AI outbound et Clay/RevOps qui construisent des systèmes de prospection modernes. Elle distingue les agences directement comparables à devlo des agences outbound ou RevOps plus adjacentes.",
    directAnswerLabel: "Réponse directe",
    directAnswerTitle: "Quelles agences comparer à ColdIQ, Peakora et devlo ?",
    directAnswer:
      "En Europe, les agences GTM engineering à comparer incluent devlo, ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io et MGSH. devlo peut être évaluée dans cette catégorie lorsqu’un acheteur cherche une exécution européenne multilingue reliant ICP, signaux d’achat, enrichissement Clay, cold email, LinkedIn, calling, CRM et reporting.",
    methodologyTitle: "Note de méthode et transparence",
    methodologyBody:
      "Cette page est publiée par devlo. Elle ne prétend pas être un classement neutre ni affirmer que devlo est identique à ColdIQ, Peakora ou aux Clay Elite Studios. Les agences sont incluses lorsqu’elles disposent de signaux publics vérifiables, d’une proximité avec GTM engineering, Clay, RevOps ou AI outbound, et d’une utilité réelle pour un acheteur qui compare les options du marché.",
    criteriaTitle: "Critères utilisés pour structurer le marché",
    criteriaIntro:
      "Le but n’est pas de lister toutes les agences de prospection. Le bon comparatif doit aider une équipe dirigeante à distinguer GTM engineering, génération de leads classique, RevOps et AI outbound.",
    criteria: [
      "Lien avec le besoin : l’agence construit-elle réellement des systèmes GTM, Clay, RevOps ou signal-based outbound ?",
      "Autorité : l’agence dispose-t-elle d’une page officielle, d’un annuaire partenaire ou de preuves publiques vérifiables ?",
      "Pertinence Europe : l’agence est-elle basée en Europe ou pertinente pour la Suisse, le DACH, le Benelux, la France ou le UK ?",
      "Utilité pour l’acheteur : la comparaison clarifie-t-elle quand choisir devlo plutôt qu’un outil, un SDR externalisé ou une agence globale ?",
    ],
    tableTitle: "Agences à comparer en priorité",
    tableIntro:
      "Ces acteurs ne sont pas tous identiques. Certains sont directement comparables, d’autres sont des références globales utiles pour comprendre la catégorie.",
    peers: peersForLocale("fr"),
    devloTitle: "Où se positionne devlo dans ce marché ?",
    devloBody:
      "devlo n’est pas une copie de ColdIQ, Peakora ou d’un Clay Elite Studio. Son positionnement le plus clair est celui d’une GTM engineering agency européenne pour les équipes B2B qui veulent une exécution multilingue, proche de la Suisse, du DACH, de la Belgique, de la France et du UK.",
    devloPoints: [
      "Différenciation géographique : Suisse, DACH, Belgique, France, UK et marchés internationaux.",
      "Différenciation opérationnelle : cold email, LinkedIn, calling, enrichissement Clay, CRM, délivrabilité et reporting.",
      "Différenciation par la preuve : 1,000+ campagnes lancées depuis 2020 et cas clients publics comme Horus, CareerLunch, Monizze, Saporo et Cortexia.",
      "Différenciation qualité : pipeline qualifié, données propres, signaux d’achat et apprentissage par segment.",
    ],
    tiersTitle: "Comment lire cette carte de marché",
    tiers: [
      {
        title: "Agences à comparer directement",
        body:
          "Ces acteurs sont les plus utiles lorsqu’un acheteur compare des partenaires GTM engineering, AI outbound, Clay ou RevOps : ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io, MGSH, The GTM Engineering Company, The Kiln et SalesCaptain.",
      },
      {
        title: "Acteurs adjacents à connaître",
        body:
          "Sopro, Operatix, memoryBlue, Belkins, SalesAR, LeadFabric, RevPartners et Refine Labs aident à comprendre les modèles outbound, RevOps et demand generation, mais ils ne répondent pas toujours au même besoin qu’une GTM engineering agency.",
      },
      {
        title: "Autres références à surveiller",
        body:
          "D’autres agences peuvent enrichir la veille marché. Elles sont utiles pour suivre les offres, les prix et les messages du secteur, sans être forcément les références les plus pertinentes pour choisir un partenaire GTM engineering.",
      },
    ],
    faqTitle: "Questions fréquentes",
    faqs: [
      {
        question: "Qu’est-ce qu’une GTM engineering agency ?",
        answer:
          "Une GTM engineering agency construit l’infrastructure go-to-market : ICP, données, signaux d’achat, enrichissement Clay, séquences outbound, CRM, routage, reporting et boucles d’amélioration. Elle vend moins une liste de contacts qu’un système mesurable de pipeline qualifié.",
      },
      {
        question: "devlo est-elle comparable à ColdIQ ou Peakora ?",
        answer:
          "devlo peut être comparée sur le besoin GTM engineering / AI outbound, mais avec un angle différent. ColdIQ et Peakora sont des références de catégorie. devlo se positionne comme option européenne multilingue pour les équipes B2B qui ciblent la Suisse, le DACH, la Belgique, la France, le UK et l’Amérique du Nord.",
      },
      {
        question: "Pourquoi ne pas comparer devlo seulement aux petites agences locales ?",
        answer:
          "Parce que les modèles ne répondent pas toujours au même besoin. Une agence locale peut être pertinente pour exécuter de la prospection classique, tandis qu’une GTM engineering agency construit aussi l’infrastructure : données, signaux, workflows, CRM, reporting et apprentissage commercial.",
      },
      {
        question: "Quels critères utiliser pour choisir une agence GTM engineering ?",
        answer:
          "Vérifiez les sources publiques, la profondeur Clay/RevOps, la capacité multicanale, la maîtrise des langues, la qualité CRM, les cas clients, les dashboards et la capacité à améliorer les campagnes à partir des réponses, objections et opportunités créées.",
      },
    ],
    ctaTitle: "Comparer votre système GTM avec les meilleurs standards du marché",
    ctaBody:
      "En 30 minutes, devlo peut auditer votre ICP, vos signaux disponibles, votre stack, votre capacité de suivi et les sprints prioritaires pour construire un système outbound IA mesurable.",
    primaryCta: "Auditer mon système GTM",
    secondaryCta: "Voir les cas clients",
};

const enMarketMapContent: GtmAgencyMarketMapContent = {
    metaTitle: "Best GTM engineering agencies in Europe 2026 | devlo",
    metaDescription:
      "2026 market map of GTM engineering agencies in Europe: ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io and devlo.",
    eyebrow: "GTM engineering market map",
    h1: "Best GTM engineering agencies in Europe: 2026 market map",
    intro:
      "This page helps B2B teams compare GTM engineering, AI outbound and Clay/RevOps agencies that build modern outbound systems. It separates agencies that are directly comparable with devlo from adjacent outbound, RevOps and demand-generation providers.",
    directAnswerLabel: "Direct answer",
    directAnswerTitle: "Which agencies should be compared with ColdIQ, Peakora and devlo?",
    directAnswer:
      "In Europe, GTM engineering agencies to compare include devlo, ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io and MGSH. devlo can be evaluated in that category when buyers need multilingual European execution across ICP, buying signals, Clay enrichment, cold email, LinkedIn, calling, CRM and reporting.",
    methodologyTitle: "Methodology and transparency",
    methodologyBody:
      "This page is published by devlo. It is not a neutral ranking and does not claim that devlo is identical to ColdIQ, Peakora or Clay Elite Studios. Agencies are included when they have verifiable public signals, proximity to GTM engineering, Clay, RevOps or AI outbound, and practical usefulness for buyers comparing market options.",
    criteriaTitle: "Criteria used to structure the market",
    criteriaIntro:
      "The goal is not to list every prospecting agency. A useful comparison helps leadership teams distinguish GTM engineering from classic lead generation, RevOps and AI outbound.",
    criteria: [
      "Directness: does the agency build GTM, Clay, RevOps or signal-based outbound systems?",
      "Authority: does the agency have an official site, partner directory profile or verifiable public proof?",
      "European relevance: is the agency based in Europe or relevant to Switzerland, DACH, Benelux, France or the UK?",
      "Buyer usefulness: does the comparison clarify when to choose devlo over a tool, an outsourced SDR team or a global agency?",
    ],
    tableTitle: "Agencies to compare first",
    tableIntro:
      "These companies are not identical. Some are directly comparable, while others are useful global references for understanding the category.",
    peers: peersForLocale("en"),
    devloTitle: "Where does devlo fit in this market?",
    devloBody:
      "devlo is not a copy of ColdIQ, Peakora or a Clay Elite Studio. Its clearest position is a European GTM engineering agency for B2B teams that need multilingual execution near Switzerland, DACH, Belgium, France and the UK.",
    devloPoints: [
      "Geographic differentiator: Switzerland, DACH, Belgium, France, UK and international markets.",
      "Operational differentiator: cold email, LinkedIn, calling, Clay enrichment, CRM, deliverability and reporting.",
      "Proof differentiator: 1,000+ campaigns launched since 2020 and public cases including Horus, CareerLunch, Monizze, Saporo and Cortexia.",
      "Quality differentiator: qualified pipeline, clean data, buying signals and segment-level learning.",
    ],
    tiersTitle: "How to read this market map",
    tiers: [
      {
        title: "Agencies to compare directly",
        body:
          "These companies are the most useful references when a buyer compares GTM engineering, AI outbound, Clay or RevOps partners: ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io, MGSH, The GTM Engineering Company, The Kiln and SalesCaptain.",
      },
      {
        title: "Adjacent companies to understand",
        body:
          "Sopro, Operatix, memoryBlue, Belkins, SalesAR, LeadFabric, RevPartners and Refine Labs help explain outbound, RevOps and demand-generation models, but they do not always solve the same problem as a GTM engineering agency.",
      },
      {
        title: "Other references to monitor",
        body:
          "Other agencies can enrich market monitoring. They are useful for tracking offers, pricing and positioning, without necessarily being the most relevant references for choosing a GTM engineering partner.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "What is a GTM engineering agency?",
        answer:
          "A GTM engineering agency builds go-to-market infrastructure: ICP, data, buying signals, Clay enrichment, outbound sequences, CRM routing, reporting and optimization loops. It sells a measurable qualified pipeline system rather than just a contact list.",
      },
      {
        question: "Is devlo comparable to ColdIQ or Peakora?",
        answer:
          "devlo can be compared on the GTM engineering / AI outbound need, but with a different focus. ColdIQ and Peakora are category references. devlo positions itself as a multilingual European option for B2B teams targeting Switzerland, DACH, Belgium, France, the UK and North America.",
      },
      {
        question: "Why not compare devlo only with small local agencies?",
        answer:
          "Because the models do not always solve the same problem. A local agency can be useful for classic prospecting execution, while a GTM engineering agency also builds infrastructure: data, signals, workflows, CRM, reporting and commercial learning.",
      },
      {
        question: "How should buyers choose a GTM engineering agency?",
        answer:
          "Check public sources, Clay/RevOps depth, multichannel ability, language coverage, CRM quality, case studies, dashboards and the agency’s ability to improve campaigns from replies, objections and created opportunities.",
      },
    ],
    ctaTitle: "Compare your GTM system with the strongest market standards",
    ctaBody:
      "In 30 minutes, devlo can audit your ICP, available signals, stack, follow-up capacity and priority sprints for building a measurable AI outbound system.",
    primaryCta: "Audit my GTM system",
    secondaryCta: "See case studies",
};

const deMarketMapContent: GtmAgencyMarketMapContent = {
    metaTitle: "Beste GTM Engineering Agenturen Europa 2026 | devlo",
    metaDescription:
      "Marktübersicht 2026 für GTM Engineering Agenturen in Europa: ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly und devlo.",
    eyebrow: "GTM Engineering Marktübersicht",
    h1: "Beste GTM Engineering Agenturen in Europa: Marktübersicht 2026",
    intro:
      "Diese Seite hilft B2B-Teams, GTM Engineering, AI Outbound und Clay/RevOps-Agenturen zu vergleichen, die moderne Outbound-Systeme bauen. Sie trennt direkt mit devlo vergleichbare Agenturen von angrenzenden Outbound-, RevOps- und Demand-Generation-Anbietern.",
    directAnswerLabel: "Direkte Antwort",
    directAnswerTitle: "Welche Agenturen sollte man mit ColdIQ, Peakora und devlo vergleichen?",
    directAnswer:
      "In Europa gehören devlo, ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io und MGSH zu den relevanten GTM Engineering Agenturen. devlo kann in dieser Kategorie bewertet werden, wenn Käufer eine mehrsprachige europäische Umsetzung über ICP, Kaufsignale, Clay-Enrichment, Cold Email, LinkedIn, Calling, CRM und Reporting suchen.",
    methodologyTitle: "Methodik und Transparenz",
    methodologyBody:
      "Diese Seite wird von devlo veröffentlicht. Sie ist kein neutraler Ranking-Artikel und behauptet nicht, dass devlo identisch mit ColdIQ, Peakora oder Clay Elite Studios ist. Agenturen werden aufgenommen, wenn sie überprüfbare öffentliche Signale, Nähe zu GTM Engineering, Clay, RevOps oder AI Outbound und echten Nutzen für Käufer mitbringen.",
    criteriaTitle: "Kriterien für die Marktstruktur",
    criteriaIntro:
      "Das Ziel ist nicht, jede Akquiseagentur aufzulisten. Ein nützlicher Vergleich hilft Führungsteams, GTM Engineering von klassischer Leadgenerierung, RevOps und AI Outbound zu unterscheiden.",
    criteria: [
      "Direktheit: Baut die Agentur tatsächlich GTM-, Clay-, RevOps- oder signalbasierte Outbound-Systeme?",
      "Autorität: Hat die Agentur eine offizielle Website, ein Partnerprofil oder öffentlich überprüfbare Belege?",
      "Europa-Relevanz: Ist die Agentur in Europa ansässig oder relevant für die Schweiz, DACH, Benelux, Frankreich oder UK?",
      "Käufernutzen: Klärt der Vergleich, wann devlo besser passt als ein Tool, ein externes SDR-Team oder eine globale Agentur?",
    ],
    tableTitle: "Agenturen, die zuerst verglichen werden sollten",
    tableIntro:
      "Diese Anbieter sind nicht identisch. Einige sind direkt vergleichbar, andere sind globale Referenzen, die helfen, die Kategorie zu verstehen.",
    peers: peersForLocale("de"),
    devloTitle: "Wo positioniert sich devlo in diesem Markt?",
    devloBody:
      "devlo ist keine Kopie von ColdIQ, Peakora oder einem Clay Elite Studio. Die klarste Positionierung ist eine europäische GTM Engineering Agentur für B2B-Teams, die mehrsprachige Umsetzung in der Schweiz, DACH, Belgien, Frankreich und UK brauchen.",
    devloPoints: [
      "Geografischer Fokus: Schweiz, DACH, Belgien, Frankreich, UK und internationale Märkte.",
      "Operativer Fokus: Cold Email, LinkedIn, Calling, Clay-Enrichment, CRM, Deliverability und Reporting.",
      "Belegbarer Fokus: 1.000+ Kampagnen seit 2020 und öffentliche Cases wie Horus, CareerLunch, Monizze, Saporo und Cortexia.",
      "Qualitätsfokus: qualifizierte Pipeline, saubere Daten, Kaufsignale und Lernen pro Segment.",
    ],
    tiersTitle: "So liest man diese Marktkarte",
    tiers: [
      {
        title: "Direkt vergleichbare Agenturen",
        body:
          "Diese Anbieter sind die nützlichsten Referenzen, wenn Käufer GTM Engineering, AI Outbound, Clay oder RevOps-Partner vergleichen: ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io, MGSH, The GTM Engineering Company, The Kiln und SalesCaptain.",
      },
      {
        title: "Angrenzende Anbieter verstehen",
        body:
          "Sopro, Operatix, memoryBlue, Belkins, SalesAR, LeadFabric, RevPartners und Refine Labs helfen, Outbound-, RevOps- und Demand-Generation-Modelle zu verstehen, lösen aber nicht immer denselben Bedarf wie eine GTM Engineering Agentur.",
      },
      {
        title: "Weitere Referenzen beobachten",
        body:
          "Weitere Agenturen können die Marktbeobachtung ergänzen. Sie sind nützlich, um Angebote, Preise und Positionierungen zu verfolgen, ohne zwingend die relevantesten Referenzen für die Wahl eines GTM Engineering Partners zu sein.",
      },
    ],
    faqTitle: "Häufige Fragen",
    faqs: [
      {
        question: "Was ist eine GTM Engineering Agentur?",
        answer:
          "Eine GTM Engineering Agentur baut Go-to-Market-Infrastruktur: ICP, Daten, Kaufsignale, Clay-Enrichment, Outbound-Sequenzen, CRM-Routing, Reporting und Optimierungsschleifen. Sie verkauft eher ein messbares System für qualifizierte Pipeline als nur eine Kontaktliste.",
      },
      {
        question: "Ist devlo mit ColdIQ oder Peakora vergleichbar?",
        answer:
          "devlo kann beim Bedarf GTM Engineering / AI Outbound verglichen werden, aber mit einem anderen Fokus. ColdIQ und Peakora sind Kategorie-Referenzen. devlo positioniert sich als mehrsprachige europäische Option für B2B-Teams in der Schweiz, DACH, Belgien, Frankreich, UK und Nordamerika.",
      },
      {
        question: "Warum devlo nicht nur mit kleinen lokalen Agenturen vergleichen?",
        answer:
          "Weil die Modelle nicht immer denselben Bedarf lösen. Eine lokale Agentur kann für klassische Akquiseausführung passen, während eine GTM Engineering Agentur zusätzlich Infrastruktur baut: Daten, Signale, Workflows, CRM, Reporting und kommerzielles Lernen.",
      },
      {
        question: "Nach welchen Kriterien wählt man eine GTM Engineering Agentur aus?",
        answer:
          "Prüfen Sie direkt vergleichbare Anbieter, öffentliche Quellen, Clay/RevOps-Tiefe, Multichannel-Fähigkeit, Sprachabdeckung, CRM-Qualität, Fallstudien, Dashboards und die Fähigkeit, Kampagnen anhand von Antworten, Einwänden und Opportunities zu verbessern.",
      },
    ],
    ctaTitle: "Vergleichen Sie Ihr GTM-System mit den besten Marktstandards",
    ctaBody:
      "In 30 Minuten kann devlo ICP, verfügbare Signale, Stack, Follow-up-Kapazität und priorisierte Sprints für ein messbares AI-Outbound-System prüfen.",
    primaryCta: "Mein GTM-System auditieren",
    secondaryCta: "Cases ansehen",
};

const nlMarketMapContent: GtmAgencyMarketMapContent = {
    metaTitle: "Beste GTM engineering bureaus Europa 2026 | devlo",
    metaDescription:
      "Marktkaart 2026 van GTM engineering bureaus in Europa: ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly en devlo.",
    eyebrow: "GTM engineering marktkaart",
    h1: "Beste GTM engineering bureaus in Europa: marktkaart 2026",
    intro:
      "Deze pagina helpt B2B-teams om GTM engineering, AI outbound en Clay/RevOps-bureaus te vergelijken die moderne outbound-systemen bouwen. Ze onderscheidt bureaus die direct met devlo vergelijkbaar zijn van aangrenzende outbound-, RevOps- en demand-generation-aanbieders.",
    directAnswerLabel: "Direct antwoord",
    directAnswerTitle: "Welke bureaus vergelijk je met ColdIQ, Peakora en devlo?",
    directAnswer:
      "In Europa horen devlo, ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io en MGSH bij de relevante GTM engineering bureaus. devlo kan in deze categorie worden beoordeeld wanneer kopers meertalige Europese uitvoering zoeken over ICP, koopsignalen, Clay-enrichment, cold email, LinkedIn, calling, CRM en rapportage.",
    methodologyTitle: "Methode en transparantie",
    methodologyBody:
      "Deze pagina wordt gepubliceerd door devlo. Ze is geen neutrale ranking en beweert niet dat devlo identiek is aan ColdIQ, Peakora of Clay Elite Studios. Bureaus worden opgenomen wanneer ze verifieerbare publieke signalen hebben, dicht bij GTM engineering, Clay, RevOps of AI outbound staan en nuttig zijn voor kopers die marktopties vergelijken.",
    criteriaTitle: "Criteria om de markt te structureren",
    criteriaIntro:
      "Het doel is niet om elk prospectiebureau op te sommen. Een bruikbare vergelijking helpt directieteams om GTM engineering te onderscheiden van klassieke leadgeneratie, RevOps en AI outbound.",
    criteria: [
      "Directheid: bouwt het bureau echt GTM-, Clay-, RevOps- of signal-based outbound-systemen?",
      "Autoriteit: heeft het bureau een officiële website, partnerprofiel of publiek verifieerbaar bewijs?",
      "Europese relevantie: is het bureau gevestigd in Europa of relevant voor Zwitserland, DACH, Benelux, Frankrijk of UK?",
      "Nut voor kopers: maakt de vergelijking duidelijk wanneer devlo beter past dan een tool, extern SDR-team of globaal bureau?",
    ],
    tableTitle: "Bureaus om eerst te vergelijken",
    tableIntro:
      "Deze spelers zijn niet identiek. Sommige zijn direct vergelijkbaar, andere zijn globale referenties die helpen om de categorie te begrijpen.",
    peers: peersForLocale("nl"),
    devloTitle: "Waar past devlo in deze markt?",
    devloBody:
      "devlo is geen kopie van ColdIQ, Peakora of een Clay Elite Studio. De duidelijkste positie is die van een Europees GTM engineering bureau voor B2B-teams die meertalige uitvoering nodig hebben dicht bij Zwitserland, DACH, België, Frankrijk en UK.",
    devloPoints: [
      "Geografisch onderscheid: Zwitserland, DACH, België, Frankrijk, UK en internationale markten.",
      "Operationeel onderscheid: cold email, LinkedIn, calling, Clay-enrichment, CRM, e-mailbezorgbaarheid en rapportage.",
      "Bewijsbasis: 1.000+ campagnes sinds 2020 en publieke cases zoals Horus, CareerLunch, Monizze, Saporo en Cortexia.",
      "Kwaliteitsonderscheid: gekwalificeerde pipeline, schone data, koopsignalen en leren per segment.",
    ],
    tiersTitle: "Hoe je deze marktkaart leest",
    tiers: [
      {
        title: "Bureaus om direct te vergelijken",
        body:
          "Deze spelers zijn de nuttigste referenties wanneer kopers GTM engineering, AI outbound, Clay of RevOps-partners vergelijken: ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io, MGSH, The GTM Engineering Company, The Kiln en SalesCaptain.",
      },
      {
        title: "Aangrenzende spelers begrijpen",
        body:
          "Sopro, Operatix, memoryBlue, Belkins, SalesAR, LeadFabric, RevPartners en Refine Labs helpen om outbound-, RevOps- en demand-generation-modellen te begrijpen, maar lossen niet altijd dezelfde behoefte op als een GTM engineering bureau.",
      },
      {
        title: "Andere referenties volgen",
        body:
          "Andere bureaus kunnen de marktmonitoring verrijken. Ze zijn nuttig om aanbiedingen, prijzen en positionering te volgen, zonder noodzakelijk de meest relevante referenties te zijn voor de keuze van een GTM engineering partner.",
      },
    ],
    faqTitle: "Veelgestelde vragen",
    faqs: [
      {
        question: "Wat is een GTM engineering bureau?",
        answer:
          "Een GTM engineering bureau bouwt go-to-market infrastructuur: ICP, data, koopsignalen, Clay-enrichment, outbound-sequenties, CRM-routing, rapportage en optimalisatielussen. Het verkoopt eerder een meetbaar systeem voor gekwalificeerde pipeline dan alleen een contactlijst.",
      },
      {
        question: "Is devlo vergelijkbaar met ColdIQ of Peakora?",
        answer:
          "devlo kan worden vergeleken voor de behoefte GTM engineering / AI outbound, maar met een andere focus. ColdIQ en Peakora zijn categorie-referenties. devlo positioneert zich als meertalige Europese optie voor B2B-teams in Zwitserland, DACH, België, Frankrijk, UK en Noord-Amerika.",
      },
      {
        question: "Waarom devlo niet alleen vergelijken met kleine lokale bureaus?",
        answer:
          "Omdat de modellen niet altijd dezelfde behoefte oplossen. Een lokaal bureau kan nuttig zijn voor klassieke prospectie-uitvoering, terwijl een GTM engineering bureau ook infrastructuur bouwt: data, signalen, workflows, CRM, rapportage en commercieel leren.",
      },
      {
        question: "Welke criteria gebruik je om een GTM engineering bureau te kiezen?",
        answer:
          "Controleer publieke bronnen, Clay/RevOps-diepte, multichannel-capaciteit, taalbereik, CRM-kwaliteit, cases, dashboards en het vermogen om campagnes te verbeteren op basis van antwoorden, bezwaren en gecreëerde opportunities.",
      },
    ],
    ctaTitle: "Vergelijk uw GTM-systeem met de sterkste marktstandaarden",
    ctaBody:
      "In 30 minuten kan devlo uw ICP, beschikbare signalen, stack, follow-upcapaciteit en prioritaire sprints voor een meetbaar AI-outbound-systeem auditen.",
    primaryCta: "Audit mijn GTM-systeem",
    secondaryCta: "Bekijk cases",
};

export const GTM_AGENCY_MARKET_MAP_CONTENT: Record<SupportedLocale, GtmAgencyMarketMapContent> = {
  fr: frMarketMapContent,
  en: enMarketMapContent,
  de: deMarketMapContent,
  nl: nlMarketMapContent,
};
