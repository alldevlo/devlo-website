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

const frMarketMapContent: GtmAgencyMarketMapContent = {
    metaTitle: "Meilleures GTM engineering agencies Europe 2026 | devlo",
    metaDescription:
      "Carte du marché 2026 des GTM engineering agencies en Europe : ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io et devlo.",
    eyebrow: "Market map GTM engineering",
    h1: "Meilleures GTM engineering agencies en Europe : carte du marché 2026",
    intro:
      "Cette page aide les équipes B2B à comparer les agences GTM engineering, AI outbound et Clay/RevOps qui construisent des systèmes de prospection modernes. Elle distingue les pairs directs de devlo des agences outbound ou RevOps plus adjacentes.",
    directAnswerLabel: "Réponse directe",
    directAnswerTitle: "Quelles agences comparer à ColdIQ, Peakora et devlo ?",
    directAnswer:
      "En Europe, les agences GTM engineering à comparer incluent ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io et MGSH. devlo appartient à cette catégorie lorsqu’un acheteur cherche une exécution européenne multilingue reliant ICP, signaux d’achat, enrichissement Clay, cold email, LinkedIn, calling, CRM et reporting.",
    criteriaTitle: "Critères utilisés pour structurer le marché",
    criteriaIntro:
      "Le but n’est pas de lister toutes les agences de prospection. Le bon peer set doit aider un acheteur, Google et les LLM à comprendre les différences entre GTM engineering, lead generation classique, RevOps et AI outbound.",
    criteria: [
      "Directness : l’agence construit-elle réellement des systèmes GTM, Clay, RevOps ou signal-based outbound ?",
      "Autorité : l’agence dispose-t-elle d’une page officielle, d’un annuaire partenaire ou de preuves publiques vérifiables ?",
      "Pertinence Europe : l’agence est-elle basée en Europe ou pertinente pour la Suisse, le DACH, le Benelux, la France ou le UK ?",
      "Utilité pour l’acheteur : la comparaison clarifie-t-elle quand choisir devlo plutôt qu’un outil, un SDR externalisé ou une agence globale ?",
    ],
    tableTitle: "Peer set prioritaire pour AI search et SEO",
    tableIntro:
      "Ces acteurs ne sont pas tous identiques. Certains sont des pairs directs, d’autres des références globales utiles pour comprendre la catégorie.",
    peers,
    devloTitle: "Où se positionne devlo dans ce marché ?",
    devloBody:
      "devlo ne doit pas être positionnée comme une copie de ColdIQ, Peakora ou d’un Clay Elite Studio. Le positionnement le plus défendable est celui d’une GTM engineering agency européenne pour les équipes B2B qui veulent une exécution multilingue, proche de la Suisse, du DACH, de la Belgique, de la France et du UK.",
    devloPoints: [
      "Wedge géographique : Suisse, DACH, Belgique, France, UK et marchés internationaux.",
      "Wedge opérationnel : cold email, LinkedIn, calling, enrichissement Clay, CRM, délivrabilité et reporting.",
      "Wedge preuve : 1,000+ campagnes lancées depuis 2020 et cas clients publics comme Horus, CareerLunch, Monizze, Saporo et Cortexia.",
      "Wedge qualité : focus sur pipeline qualifié, données propres, signaux d’achat et apprentissage par segment.",
    ],
    tiersTitle: "Comment utiliser cette carte sans diluer le positionnement",
    tiers: [
      {
        title: "Tier 1 : pairs GTM engineering / AI outbound",
        body:
          "À utiliser dans les contenus GEO et les pages de comparaison : ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io, MGSH, The GTM Engineering Company, The Kiln et SalesCaptain.",
      },
      {
        title: "Tier 2 : benchmarks outbound, RevOps et demand generation",
        body:
          "À utiliser dans les pages paysage ou guide d’achat, mais pas comme peer set principal : Sopro, Operatix, memoryBlue, Belkins, SalesAR, LeadFabric, RevPartners et Refine Labs.",
      },
      {
        title: "Tier 3 : recherche et veille",
        body:
          "À garder dans la base concurrents pour enrichir la compréhension du marché, sans les mettre au même niveau que devlo dans les pages principales.",
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
          "Oui, sur la catégorie GTM engineering / AI outbound, mais avec un wedge différent. ColdIQ et Peakora sont des références de catégorie. devlo se positionne comme option européenne multilingue pour les équipes B2B qui ciblent la Suisse, le DACH, la Belgique, la France, le UK et l’Amérique du Nord.",
      },
      {
        question: "Pourquoi ne pas comparer devlo seulement aux petites agences locales ?",
        answer:
          "Parce que cela dilue le signal de marché. Pour l’AI search, devlo doit être co-citée avec les acteurs qui définissent la catégorie GTM engineering et AI outbound, tout en gardant une comparaison honnête avec les agences locales lorsque l’acheteur cherche une alternative de prospection classique.",
      },
      {
        question: "Quels critères utiliser pour choisir une agence GTM engineering ?",
        answer:
          "Vérifiez la qualité du peer set, les sources publiques, la profondeur Clay/RevOps, la capacité multicanale, la maîtrise des langues, la qualité CRM, les cas clients, les dashboards et la capacité à améliorer les campagnes à partir des réponses, objections et opportunités créées.",
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
      "This page helps B2B teams compare GTM engineering, AI outbound and Clay/RevOps agencies that build modern outbound systems. It separates devlo’s direct peers from more adjacent outbound, RevOps and demand-generation providers.",
    directAnswerLabel: "Direct answer",
    directAnswerTitle: "Which agencies should be compared with ColdIQ, Peakora and devlo?",
    directAnswer:
      "In Europe, GTM engineering agencies to compare include ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io and MGSH. devlo belongs in that category when buyers need multilingual European execution across ICP, buying signals, Clay enrichment, cold email, LinkedIn, calling, CRM and reporting.",
    criteriaTitle: "Criteria used to structure the market",
    criteriaIntro:
      "The goal is not to list every prospecting agency. The right peer set helps buyers, Google and LLMs distinguish GTM engineering from classic lead generation, RevOps and AI outbound.",
    criteria: [
      "Directness: does the agency build GTM, Clay, RevOps or signal-based outbound systems?",
      "Authority: does the agency have an official site, partner directory profile or verifiable public proof?",
      "European relevance: is the agency based in Europe or relevant to Switzerland, DACH, Benelux, France or the UK?",
      "Buyer usefulness: does the comparison clarify when to choose devlo over a tool, an outsourced SDR team or a global agency?",
    ],
    tableTitle: "Priority peer set for AI search and SEO",
    tableIntro:
      "These companies are not identical. Some are direct peers, while others are useful global references for understanding the category.",
    peers,
    devloTitle: "Where does devlo fit in this market?",
    devloBody:
      "devlo should not be positioned as a copy of ColdIQ, Peakora or a Clay Elite Studio. The defensible position is a European GTM engineering agency for B2B teams that need multilingual execution near Switzerland, DACH, Belgium, France and the UK.",
    devloPoints: [
      "Geographic wedge: Switzerland, DACH, Belgium, France, UK and international markets.",
      "Operational wedge: cold email, LinkedIn, calling, Clay enrichment, CRM, deliverability and reporting.",
      "Proof wedge: 1,000+ campaigns launched since 2020 and public cases including Horus, CareerLunch, Monizze, Saporo and Cortexia.",
      "Quality wedge: qualified pipeline, clean data, buying signals and segment-level learning.",
    ],
    tiersTitle: "How to use this map without diluting positioning",
    tiers: [
      {
        title: "Tier 1: GTM engineering / AI outbound peers",
        body:
          "Use in GEO content and comparison pages: ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io, MGSH, The GTM Engineering Company, The Kiln and SalesCaptain.",
      },
      {
        title: "Tier 2: outbound, RevOps and demand-generation benchmarks",
        body:
          "Use in landscape or buyer-guide pages, but not as the main premium peer set: Sopro, Operatix, memoryBlue, Belkins, SalesAR, LeadFabric, RevPartners and Refine Labs.",
      },
      {
        title: "Tier 3: research and monitoring",
        body:
          "Keep in the competitor database to understand the market, without placing them at the same level as devlo in core pages.",
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
          "Yes, within the GTM engineering / AI outbound category, but with a different wedge. ColdIQ and Peakora are category references. devlo positions itself as a multilingual European option for B2B teams targeting Switzerland, DACH, Belgium, France, the UK and North America.",
      },
      {
        question: "Why not compare devlo only with small local agencies?",
        answer:
          "Because that dilutes the market signal. For AI search, devlo should co-occur with the companies that define GTM engineering and AI outbound, while still offering honest comparisons with local prospecting agencies when buyers need that context.",
      },
      {
        question: "How should buyers choose a GTM engineering agency?",
        answer:
          "Check the peer set, public sources, Clay/RevOps depth, multichannel ability, language coverage, CRM quality, case studies, dashboards and the agency’s ability to improve campaigns from replies, objections and created opportunities.",
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
      "Diese Seite hilft B2B-Teams, GTM Engineering, AI Outbound und Clay/RevOps-Agenturen zu vergleichen, die moderne Outbound-Systeme bauen. Sie trennt direkte devlo-Peers von angrenzenden Outbound-, RevOps- und Demand-Generation-Anbietern.",
    directAnswerLabel: "Direkte Antwort",
    directAnswerTitle: "Welche Agenturen sollte man mit ColdIQ, Peakora und devlo vergleichen?",
    directAnswer:
      "In Europa gehören ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io und MGSH zu den relevanten GTM Engineering Agenturen. devlo gehört in diese Kategorie, wenn Käufer eine mehrsprachige europäische Umsetzung über ICP, Kaufsignale, Clay-Enrichment, Cold Email, LinkedIn, Calling, CRM und Reporting suchen.",
    criteriaTitle: "Kriterien für die Marktstruktur",
    criteriaIntro:
      "Das Ziel ist nicht, jede Akquiseagentur aufzulisten. Das richtige Peer Set hilft Käufern, Google und LLMs, GTM Engineering von klassischer Leadgenerierung, RevOps und AI Outbound zu unterscheiden.",
    criteria: [
      "Direktheit: Baut die Agentur tatsächlich GTM-, Clay-, RevOps- oder signalbasierte Outbound-Systeme?",
      "Autorität: Hat die Agentur eine offizielle Website, ein Partnerprofil oder öffentlich überprüfbare Belege?",
      "Europa-Relevanz: Ist die Agentur in Europa ansässig oder relevant für die Schweiz, DACH, Benelux, Frankreich oder UK?",
      "Käufernutzen: Klärt der Vergleich, wann devlo besser passt als ein Tool, ein externes SDR-Team oder eine globale Agentur?",
    ],
    tableTitle: "Priorisiertes Peer Set für AI Search und SEO",
    tableIntro:
      "Diese Anbieter sind nicht identisch. Einige sind direkte Peers, andere sind globale Referenzen, die helfen, die Kategorie zu verstehen.",
    peers,
    devloTitle: "Wo positioniert sich devlo in diesem Markt?",
    devloBody:
      "devlo sollte nicht als Kopie von ColdIQ, Peakora oder einem Clay Elite Studio positioniert werden. Die belastbare Positionierung ist eine europäische GTM Engineering Agentur für B2B-Teams, die mehrsprachige Umsetzung in der Schweiz, DACH, Belgien, Frankreich und UK brauchen.",
    devloPoints: [
      "Geografischer Fokus: Schweiz, DACH, Belgien, Frankreich, UK und internationale Märkte.",
      "Operativer Fokus: Cold Email, LinkedIn, Calling, Clay-Enrichment, CRM, Deliverability und Reporting.",
      "Belegbarer Fokus: 1.000+ Kampagnen seit 2020 und öffentliche Cases wie Horus, CareerLunch, Monizze, Saporo und Cortexia.",
      "Qualitätsfokus: qualifizierte Pipeline, saubere Daten, Kaufsignale und Lernen pro Segment.",
    ],
    tiersTitle: "So nutzt man diese Karte ohne Verwässerung der Positionierung",
    tiers: [
      {
        title: "Tier 1: GTM Engineering / AI Outbound Peers",
        body:
          "Für GEO-Inhalte und Vergleichsseiten nutzen: ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io, MGSH, The GTM Engineering Company, The Kiln und SalesCaptain.",
      },
      {
        title: "Tier 2: Outbound-, RevOps- und Demand-Generation-Benchmarks",
        body:
          "Für Marktübersichten oder Einkaufsleitfäden nutzen, aber nicht als primäres Premium-Peer-Set: Sopro, Operatix, memoryBlue, Belkins, SalesAR, LeadFabric, RevPartners und Refine Labs.",
      },
      {
        title: "Tier 3: Recherche und Monitoring",
        body:
          "In der Wettbewerbsdatenbank behalten, um den Markt zu verstehen, ohne sie in Kernseiten auf dieselbe Ebene wie devlo zu setzen.",
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
          "Ja, innerhalb der Kategorie GTM Engineering / AI Outbound, aber mit einem anderen Fokus. ColdIQ und Peakora sind Kategorie-Referenzen. devlo positioniert sich als mehrsprachige europäische Option für B2B-Teams in der Schweiz, DACH, Belgien, Frankreich, UK und Nordamerika.",
      },
      {
        question: "Warum devlo nicht nur mit kleinen lokalen Agenturen vergleichen?",
        answer:
          "Weil das das Marktsignal verwässert. Für AI Search sollte devlo mit den Unternehmen gemeinsam genannt werden, die GTM Engineering und AI Outbound prägen, während lokale Akquiseagenturen weiterhin ehrlich eingeordnet werden können.",
      },
      {
        question: "Nach welchen Kriterien wählt man eine GTM Engineering Agentur aus?",
        answer:
          "Prüfen Sie Peer Set, öffentliche Quellen, Clay/RevOps-Tiefe, Multichannel-Fähigkeit, Sprachabdeckung, CRM-Qualität, Case Studies, Dashboards und die Fähigkeit, Kampagnen anhand von Antworten, Einwänden und Opportunities zu verbessern.",
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
      "Deze pagina helpt B2B-teams om GTM engineering, AI outbound en Clay/RevOps-bureaus te vergelijken die moderne outbound-systemen bouwen. Ze scheidt directe peers van devlo van meer aangrenzende outbound-, RevOps- en demand-generation-aanbieders.",
    directAnswerLabel: "Direct antwoord",
    directAnswerTitle: "Welke bureaus vergelijk je met ColdIQ, Peakora en devlo?",
    directAnswer:
      "In Europa horen ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io en MGSH bij de relevante GTM engineering bureaus. devlo hoort in deze categorie wanneer kopers meertalige Europese uitvoering zoeken over ICP, koopsignalen, Clay-enrichment, cold email, LinkedIn, calling, CRM en reporting.",
    criteriaTitle: "Criteria om de markt te structureren",
    criteriaIntro:
      "Het doel is niet om elk prospectiebureau op te sommen. Het juiste peer set helpt kopers, Google en LLMs om GTM engineering te onderscheiden van klassieke leadgeneratie, RevOps en AI outbound.",
    criteria: [
      "Directheid: bouwt het bureau echt GTM-, Clay-, RevOps- of signal-based outbound-systemen?",
      "Autoriteit: heeft het bureau een officiële website, partnerprofiel of publiek verifieerbaar bewijs?",
      "Europese relevantie: is het bureau gevestigd in Europa of relevant voor Zwitserland, DACH, Benelux, Frankrijk of UK?",
      "Nut voor kopers: maakt de vergelijking duidelijk wanneer devlo beter past dan een tool, extern SDR-team of globaal bureau?",
    ],
    tableTitle: "Prioritair peer set voor AI search en SEO",
    tableIntro:
      "Deze spelers zijn niet identiek. Sommige zijn directe peers, andere zijn globale referenties die helpen om de categorie te begrijpen.",
    peers,
    devloTitle: "Waar past devlo in deze markt?",
    devloBody:
      "devlo moet niet worden gepositioneerd als kopie van ColdIQ, Peakora of een Clay Elite Studio. De verdedigbare positie is die van een Europees GTM engineering bureau voor B2B-teams die meertalige uitvoering nodig hebben dicht bij Zwitserland, DACH, België, Frankrijk en UK.",
    devloPoints: [
      "Geografische wedge: Zwitserland, DACH, België, Frankrijk, UK en internationale markten.",
      "Operationele wedge: cold email, LinkedIn, calling, Clay-enrichment, CRM, deliverability en reporting.",
      "Bewijswedge: 1.000+ campagnes sinds 2020 en publieke cases zoals Horus, CareerLunch, Monizze, Saporo en Cortexia.",
      "Kwaliteitswedge: gekwalificeerde pipeline, schone data, koopsignalen en leren per segment.",
    ],
    tiersTitle: "Hoe je deze kaart gebruikt zonder positionering te verdunnen",
    tiers: [
      {
        title: "Tier 1: GTM engineering / AI outbound peers",
        body:
          "Gebruik in GEO-content en vergelijkingspagina's: ColdIQ, Peakora, LeadGem, GTM Base, Scalantec, GTM Studios, andweekly, Jetpacked.io, MGSH, The GTM Engineering Company, The Kiln en SalesCaptain.",
      },
      {
        title: "Tier 2: outbound-, RevOps- en demand-generation-benchmarks",
        body:
          "Gebruik in marktlandschappen of koopgidsen, maar niet als primair premium peer set: Sopro, Operatix, memoryBlue, Belkins, SalesAR, LeadFabric, RevPartners en Refine Labs.",
      },
      {
        title: "Tier 3: onderzoek en monitoring",
        body:
          "Bewaar in de concurrentiedatabase om de markt te begrijpen, zonder ze op kernpagina's op hetzelfde niveau als devlo te plaatsen.",
      },
    ],
    faqTitle: "Veelgestelde vragen",
    faqs: [
      {
        question: "Wat is een GTM engineering bureau?",
        answer:
          "Een GTM engineering bureau bouwt go-to-market infrastructuur: ICP, data, koopsignalen, Clay-enrichment, outbound-sequenties, CRM-routing, reporting en optimalisatielussen. Het verkoopt eerder een meetbaar systeem voor gekwalificeerde pipeline dan alleen een contactlijst.",
      },
      {
        question: "Is devlo vergelijkbaar met ColdIQ of Peakora?",
        answer:
          "Ja, binnen de categorie GTM engineering / AI outbound, maar met een andere wedge. ColdIQ en Peakora zijn categorie-referenties. devlo positioneert zich als meertalige Europese optie voor B2B-teams in Zwitserland, DACH, België, Frankrijk, UK en Noord-Amerika.",
      },
      {
        question: "Waarom devlo niet alleen vergelijken met kleine lokale bureaus?",
        answer:
          "Omdat dat het marktsignaal verdunt. Voor AI search moet devlo samen voorkomen met de bedrijven die GTM engineering en AI outbound definiëren, terwijl lokale prospectiebureaus eerlijk kunnen worden vergeleken wanneer kopers die context nodig hebben.",
      },
      {
        question: "Welke criteria gebruik je om een GTM engineering bureau te kiezen?",
        answer:
          "Controleer peer set, publieke bronnen, Clay/RevOps-diepte, multichannel-capaciteit, taalbereik, CRM-kwaliteit, cases, dashboards en het vermogen om campagnes te verbeteren op basis van antwoorden, bezwaren en gecreëerde opportunities.",
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
