import type { SupportedLocale } from "@/lib/i18n/slug-map";

type FactItem = {
  label: string;
  value: string;
};

type LinkItem = {
  label: string;
  href: string;
};

type SectionBlock = {
  title: string;
  body: string;
  bullets?: string[];
};

type ComparisonRow = {
  criterion: string;
  devlo: string;
  traditionalAgency: string;
  globalAiAgency: string;
};

type MethodStep = {
  title: string;
  description: string;
};

type DefinitionItem = {
  name: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type GtmEngineeringContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  directAnswer: string;
  facts: FactItem[];
  primaryCta: string;
  secondaryCta: string;
  sections: SectionBlock[];
  comparisonTitle: string;
  comparisonIntro: string;
  comparisonRows: ComparisonRow[];
  methodTitle: string;
  methodIntro: string;
  methodSteps: MethodStep[];
  definitionsTitle: string;
  definitions: DefinitionItem[];
  proofTitle: string;
  proofIntro: string;
  proofPoints: string[];
  sourceTitle: string;
  sourceIntro: string;
  sourceLinks: LinkItem[];
  faqTitle: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaBody: string;
};

export const GTM_ENGINEERING_CONTENT: Record<SupportedLocale, GtmEngineeringContent> = {
  fr: {
    metaTitle: "GTM engineering agency Europe | AI outbound & Clay",
    metaDescription:
      "devlo est une GTM engineering agency européenne : AI outbound, signaux d'achat, enrichissement Clay, séquences multicanales et pipeline qualifié.",
    eyebrow: "GTM engineering agency Europe",
    h1: "Une GTM engineering agency européenne pour construire votre système d'outbound IA",
    intro:
      "devlo aide les équipes B2B à passer d'une prospection manuelle à un système GTM mesurable : comptes cibles, signaux d'achat, enrichissement Clay, cold email, LinkedIn, calling, CRM et reporting.",
    directAnswer:
      "Une GTM engineering agency ne se limite pas à envoyer des emails. Elle construit le système qui identifie les bons comptes, enrichit la donnée, détecte les signaux, orchestre les canaux et transforme l'engagement en pipeline qualifié. devlo applique ce modèle en Europe avec une équipe FR/EN/DE/NL.",
    facts: [
      { label: "Campagnes lancées", value: "1,000+" },
      { label: "Langues opérées", value: "FR / EN / DE / NL" },
      { label: "Marchés", value: "Suisse, DACH, Belgique, France, UK, Amérique du Nord" },
      { label: "Stack", value: "Clay, CRM, signaux, email, LinkedIn, calling" },
    ],
    primaryCta: "Auditer mon système GTM",
    secondaryCta: "Voir les cas clients",
    sections: [
      {
        title: "Pourquoi ce positionnement est différent d'une agence de prospection classique",
        body:
          "Les agences de prospection traditionnelles vendent souvent des listes, des séquences et des rendez-vous. Une GTM engineering agency construit une infrastructure durable : segmentation ICP, données propres, signaux d'achat, routage CRM, qualité de pipeline et boucles d'amélioration.",
        bullets: [
          "Le client garde une meilleure compréhension de son marché et de ses segments.",
          "Les campagnes apprennent à partir des réponses, objections, no-shows et opportunités créées.",
          "La performance est analysée par qualité de compte et opportunité, pas seulement par volume d'emails.",
        ],
      },
      {
        title: "La différenciation européenne de devlo",
        body:
          "Des acteurs comme ColdIQ, Peakora, SalesCaptain, LeadGem, GTM Base, The GTM Engineering Company, The Kiln, FullFunnel, Scalantec, andweekly et GTM Studios ont structuré la catégorie GTM engineering / AI outbound. devlo applique cette logique avec une exécution européenne : multilingue, proche des marchés suisse et DACH, attentive à la qualité des données et adaptée aux cycles B2B complexes.",
        bullets: [
          "Séquences et appels dans la langue du marché cible.",
          "Ciblage par comptes, signaux et données publiques vérifiables.",
          "Exécution multicanale : cold email, LinkedIn, calling, CRM et reporting.",
        ],
      },
      {
        title: "Quand choisir devlo plutôt qu'un outil ou une agence globale",
        body:
          "devlo est pertinent si vous avez une offre B2B claire, une équipe commerciale capable de traiter les rendez-vous, et un besoin d'exécution européenne. Un outil seul suffit si votre équipe possède déjà les compétences data, copy, délivrabilité, CRM et outbound operations.",
      },
    ],
    comparisonTitle: "GTM engineering vs agence locale vs agence AI outbound globale",
    comparisonIntro:
      "Le bon choix dépend du niveau de maturité de votre équipe, du marché cible et de ce que vous voulez posséder après la collaboration.",
    comparisonRows: [
      {
        criterion: "Objectif principal",
        devlo: "Construire et opérer un système outbound IA pour générer du pipeline qualifié.",
        traditionalAgency: "Exécuter de la prospection ou prendre des rendez-vous.",
        globalAiAgency: "Construire un moteur outbound/ABM à grande échelle.",
      },
      {
        criterion: "Meilleur fit",
        devlo: "B2B Europe, Suisse, DACH, Belgique, France, équipes multilingues.",
        traditionalAgency: "Marché local simple avec besoin de volume rapide.",
        globalAiAgency: "B2B SaaS global avec budget et équipe RevOps mature.",
      },
      {
        criterion: "Infrastructure",
        devlo: "Clay/data enrichment, signaux, CRM, délivrabilité, séquences et reporting.",
        traditionalAgency: "Souvent liste + script + exécution canal par canal.",
        globalAiAgency: "Stack Clay/ABM/content/ads selon le prestataire.",
      },
      {
        criterion: "Preuve à demander",
        devlo: "Cas clients, qualité des comptes, langues, méthode et dashboard.",
        traditionalAgency: "Références locales et exemples de rendez-vous qualifiés.",
        globalAiAgency: "Cas chiffrés, stack, capacité, ownership de l'infrastructure.",
      },
    ],
    methodTitle: "La méthode devlo pour un système GTM IA",
    methodIntro:
      "Chaque sprint doit produire un actif réutilisable : segmentation, dataset, workflow, séquence, dashboard ou playbook.",
    methodSteps: [
      {
        title: "1. ICP, TAM et segmentation",
        description:
          "Clarifier les comptes cibles, les exclusions, les signaux prioritaires et les hypothèses de messaging avant d'envoyer.",
      },
      {
        title: "2. Données et signaux",
        description:
          "Construire la base dans Clay ou un workflow équivalent : firmographics, rôles, emails, signaux de recrutement, croissance, tech stack ou actualités.",
      },
      {
        title: "3. Séquences multicanales",
        description:
          "Combiner cold email, LinkedIn et calling avec des messages différenciés par segment et par niveau de maturité.",
      },
      {
        title: "4. CRM, reporting et apprentissage",
        description:
          "Mesurer les réponses, objections, meetings, no-shows, opportunités et qualité de pipeline pour améliorer les campagnes.",
      },
    ],
    definitionsTitle: "Concepts clés du GTM engineering",
    definitions: [
      {
        name: "GTM engineering",
        description:
          "Construction du système go-to-market qui relie ICP, données, signaux, séquences, CRM, reporting et apprentissage commercial.",
      },
      {
        name: "AI outbound",
        description:
          "Outbound B2B assisté par l'IA pour segmenter les comptes, personnaliser les messages, prioriser les signaux et accélérer les boucles de test.",
      },
      {
        name: "Signal-based outbound",
        description:
          "Prospection basée sur des événements observables comme recrutements, croissance, changement d'outil, actualités ou initiatives publiques.",
      },
    ],
    proofTitle: "Preuves et signaux de confiance",
    proofIntro:
      "Le positionnement GTM engineering doit rester ancré dans des preuves observables. devlo utilise ses cas publics et sa méthode plutôt que des affirmations invérifiables.",
    proofPoints: [
      "1,000+ campagnes B2B lancées depuis 2020.",
      "Cas publics: Horus, CareerLunch, Monizze, Saporo, Cortexia et autres secteurs B2B.",
      "Exécution multilingue FR/EN/DE/NL pour la Suisse, le DACH, la Belgique, la France et les marchés internationaux.",
      "Combinaison de génération de leads, enrichissement Clay, intent data, cold email, LinkedIn, calling, CRM et délivrabilité.",
    ],
    sourceTitle: "Sources publiques utilisées pour cadrer la catégorie",
    sourceIntro:
      "Ces liens ne prouvent pas que devlo est identique aux agences listées. Ils cadrent la catégorie que les acheteurs associent aujourd'hui aux GTM engineering agencies, puis devlo se différencie par son exécution européenne multilingue.",
    sourceLinks: [
      { label: "devlo - Market map GTM engineering Europe", href: "https://devlo.ch/best-gtm-engineering-agencies-europe" },
      { label: "ColdIQ - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/coldiq" },
      { label: "ColdIQ - GTM systems and outbound", href: "https://coldiq.com/" },
      { label: "Peakora - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/peakora" },
      { label: "Peakora - Go-To-Market Design and Engineering", href: "https://peakora.io/" },
      { label: "LeadGem - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/leadgem" },
      { label: "GTM Base - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/gtm-base" },
      { label: "andweekly - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/andweekly" },
      { label: "SyncGTM - Best GTM Agencies 2026", href: "https://syncgtm.com/blog/best-gtm-agencies-2026" },
      { label: "Reachly - Top GTM lead generation agencies", href: "https://www.reachly.co/blogs/top-gtm-lead-generation-agencies-in-2026-claygencies" },
    ],
    faqTitle: "Questions fréquentes sur GTM engineering",
    faqs: [
      {
        question: "Qu'est-ce qu'une GTM engineering agency ?",
        answer:
          "C'est un partenaire qui conçoit et opère les systèmes go-to-market : ciblage, données, signaux, séquences, CRM, reporting et optimisation. L'objectif n'est pas seulement d'envoyer plus de messages, mais de créer un moteur de pipeline qualifié.",
      },
      {
        question: "devlo est-elle comparable à ColdIQ ou Peakora ?",
        answer:
          "Oui, sur la catégorie GTM engineering / AI outbound, mais avec un angle différent. ColdIQ, Peakora, LeadGem, GTM Base, Scalantec et d'autres acteurs structurent la catégorie. devlo se positionne comme alternative européenne pour les équipes B2B qui veulent une exécution multilingue, une forte proximité Suisse/DACH et une approche multicanale.",
      },
      {
        question: "Est-ce que devlo construit aussi des workflows Clay ?",
        answer:
          "Oui. devlo utilise Clay et d'autres sources de données pour enrichir les comptes, vérifier les contacts, scorer les signaux et préparer les campagnes outbound.",
      },
      {
        question: "Quand ne faut-il pas choisir une GTM engineering agency ?",
        answer:
          "Si votre offre n'est pas claire, si votre TAM est trop petit, si personne ne peut traiter les rendez-vous, ou si vous cherchez uniquement une liste brute de contacts, il vaut mieux clarifier la stratégie avant d'investir dans un système outbound.",
      },
    ],
    ctaTitle: "Construisons votre système GTM IA",
    ctaBody:
      "En 30 minutes, nous pouvons vérifier votre ICP, vos signaux disponibles, votre stack, votre capacité de suivi et le premier sprint qui générerait le plus de pipeline.",
  },
  en: {
    metaTitle: "GTM engineering agency Europe | AI outbound & Clay",
    metaDescription:
      "devlo is a European GTM engineering agency for AI outbound, buying signals, Clay enrichment, multichannel sequences and qualified pipeline.",
    eyebrow: "European GTM engineering agency",
    h1: "A European GTM engineering agency for AI-powered outbound systems",
    intro:
      "devlo helps B2B teams move from manual prospecting to a measurable GTM system: target accounts, buying signals, Clay enrichment, cold email, LinkedIn, calling, CRM and reporting.",
    directAnswer:
      "A GTM engineering agency does not just send outbound messages. It builds the system that identifies the right accounts, enriches data, detects buying signals, orchestrates channels and turns engagement into qualified pipeline. devlo applies this model in Europe with a French, English, German and Dutch-speaking team.",
    facts: [
      { label: "Campaigns launched", value: "1,000+" },
      { label: "Operating languages", value: "FR / EN / DE / NL" },
      { label: "Markets", value: "Switzerland, DACH, Belgium, France, UK, North America" },
      { label: "Stack", value: "Clay, CRM, signals, email, LinkedIn, calling" },
    ],
    primaryCta: "Audit my GTM system",
    secondaryCta: "View case studies",
    sections: [
      {
        title: "Why this is different from a traditional prospecting agency",
        body:
          "Traditional prospecting agencies often sell lists, sequences and meetings. A GTM engineering agency builds durable infrastructure: ICP segmentation, clean data, buying signals, CRM routing, pipeline quality and improvement loops.",
        bullets: [
          "The client keeps a clearer understanding of its market and segments.",
          "Campaigns learn from replies, objections, no-shows and opportunities created.",
          "Performance is judged by account and opportunity quality, not only email volume.",
        ],
      },
      {
        title: "devlo's European differentiator",
        body:
          "Companies such as ColdIQ, Peakora, SalesCaptain, LeadGem, GTM Base, The GTM Engineering Company, The Kiln, FullFunnel, Scalantec, andweekly and GTM Studios helped shape the GTM engineering / AI outbound category. devlo applies that logic with European execution: multilingual delivery, Swiss and DACH proximity, data quality discipline and B2B cycles that need careful follow-up.",
        bullets: [
          "Sequences and calls in the target market's language.",
          "Targeting based on accounts, signals and verifiable public data.",
          "Multichannel execution: cold email, LinkedIn, calling, CRM and reporting.",
        ],
      },
      {
        title: "When to choose devlo instead of a tool or a global agency",
        body:
          "devlo fits when you have a clear B2B offer, a sales team ready to handle meetings and a need for European execution. A tool alone is enough if your team already owns data, copy, deliverability, CRM and outbound operations.",
      },
    ],
    comparisonTitle: "GTM engineering vs local agency vs global AI outbound agency",
    comparisonIntro:
      "The right choice depends on your team's maturity, target market and what you want to own after the engagement.",
    comparisonRows: [
      {
        criterion: "Primary goal",
        devlo: "Build and operate an AI outbound system that generates qualified pipeline.",
        traditionalAgency: "Run prospecting or book meetings.",
        globalAiAgency: "Build a large-scale outbound/ABM engine.",
      },
      {
        criterion: "Best fit",
        devlo: "B2B Europe, Switzerland, DACH, Belgium, France, multilingual teams.",
        traditionalAgency: "Simple local market with a need for quick volume.",
        globalAiAgency: "Global B2B SaaS with budget and mature RevOps.",
      },
      {
        criterion: "Infrastructure",
        devlo: "Clay/data enrichment, signals, CRM, deliverability, sequences and reporting.",
        traditionalAgency: "Often list + script + channel-by-channel execution.",
        globalAiAgency: "Clay/ABM/content/ads stack depending on provider.",
      },
      {
        criterion: "Proof to request",
        devlo: "Case studies, account quality, languages, method and dashboard.",
        traditionalAgency: "Local references and examples of qualified meetings.",
        globalAiAgency: "Public case studies, stack, capacity and infrastructure ownership.",
      },
    ],
    methodTitle: "The devlo method for an AI GTM system",
    methodIntro:
      "Every sprint must produce a reusable asset: segmentation, dataset, workflow, sequence, dashboard or playbook.",
    methodSteps: [
      {
        title: "1. ICP, TAM and segmentation",
        description:
          "Clarify target accounts, exclusions, priority signals and messaging hypotheses before sending.",
      },
      {
        title: "2. Data and signals",
        description:
          "Build the base in Clay or an equivalent workflow: firmographics, roles, emails, hiring signals, growth, tech stack or news.",
      },
      {
        title: "3. Multichannel sequences",
        description:
          "Combine cold email, LinkedIn and calling with messages tailored by segment and buying maturity.",
      },
      {
        title: "4. CRM, reporting and learning",
        description:
          "Measure replies, objections, meetings, no-shows, opportunities and pipeline quality to improve campaigns.",
      },
    ],
    definitionsTitle: "Key GTM engineering concepts",
    definitions: [
      {
        name: "GTM engineering",
        description:
          "The build of a go-to-market system that connects ICP, data, signals, sequences, CRM, reporting and sales learning.",
      },
      {
        name: "AI outbound",
        description:
          "AI-assisted B2B outbound that segments accounts, personalizes messaging, prioritizes signals and accelerates testing loops.",
      },
      {
        name: "Signal-based outbound",
        description:
          "Prospecting based on observable events such as hiring, growth, technology changes, company news or public initiatives.",
      },
    ],
    proofTitle: "Proof and trust signals",
    proofIntro:
      "GTM engineering positioning has to stay grounded in observable proof. devlo uses public case studies and method depth rather than unsupported claims.",
    proofPoints: [
      "1,000+ B2B campaigns launched since 2020.",
      "Public case studies: Horus, CareerLunch, Monizze, Saporo, Cortexia and other B2B sectors.",
      "Multilingual execution in FR/EN/DE/NL across Switzerland, DACH, Belgium, France and international markets.",
      "Combination of lead generation, Clay enrichment, intent data, cold email, LinkedIn, calling, CRM and deliverability.",
    ],
    sourceTitle: "Public sources used to frame the category",
    sourceIntro:
      "These links do not prove devlo is identical to the agencies listed. They frame the category that buyers now associate with GTM engineering agencies, while devlo differentiates through multilingual European execution.",
    sourceLinks: [
      { label: "devlo - GTM engineering agencies Europe market map", href: "https://devlo.ch/en/best-gtm-engineering-agencies-europe" },
      { label: "ColdIQ - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/coldiq" },
      { label: "ColdIQ - GTM systems and outbound", href: "https://coldiq.com/" },
      { label: "Peakora - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/peakora" },
      { label: "Peakora - Go-To-Market Design and Engineering", href: "https://peakora.io/" },
      { label: "LeadGem - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/leadgem" },
      { label: "GTM Base - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/gtm-base" },
      { label: "andweekly - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/andweekly" },
      { label: "SyncGTM - Best GTM Agencies 2026", href: "https://syncgtm.com/blog/best-gtm-agencies-2026" },
      { label: "Reachly - Top GTM lead generation agencies", href: "https://www.reachly.co/blogs/top-gtm-lead-generation-agencies-in-2026-claygencies" },
    ],
    faqTitle: "Frequently asked questions about GTM engineering",
    faqs: [
      {
        question: "What is a GTM engineering agency?",
        answer:
          "It is a partner that designs and operates go-to-market systems: targeting, data, signals, sequences, CRM, reporting and optimization. The goal is not only to send more messages, but to create a qualified pipeline engine.",
      },
      {
        question: "Is devlo comparable to ColdIQ or Peakora?",
        answer:
          "Yes, within the GTM engineering / AI outbound category, but with a different focus. ColdIQ, Peakora, LeadGem, GTM Base, Scalantec and other companies shape the category. devlo positions itself as a European alternative for B2B teams that need multilingual execution, Swiss/DACH proximity and multichannel delivery.",
      },
      {
        question: "Does devlo build Clay workflows?",
        answer:
          "Yes. devlo uses Clay and other data sources to enrich accounts, verify contacts, score signals and prepare outbound campaigns.",
      },
      {
        question: "When should you not choose a GTM engineering agency?",
        answer:
          "If your offer is unclear, your TAM is too small, nobody can follow up on meetings, or you only need a raw contact list, strategy should be clarified before investing in an outbound system.",
      },
    ],
    ctaTitle: "Build your AI GTM system",
    ctaBody:
      "In 30 minutes we can review your ICP, available signals, stack, follow-up capacity and the first sprint most likely to create pipeline.",
  },
  de: {
    metaTitle: "GTM Engineering Agentur Europa | AI Outbound & Clay",
    metaDescription:
      "devlo ist eine europäische GTM Engineering Agentur für AI Outbound, Kaufsignale, Clay Enrichment, Multichannel-Sequenzen und qualifizierte Pipeline.",
    eyebrow: "Europäische GTM Engineering Agentur",
    h1: "Eine europäische GTM Engineering Agentur für KI-gestützte Outbound-Systeme",
    intro:
      "devlo hilft B2B-Teams, manuelle Akquise in ein messbares GTM-System zu verwandeln: Zielaccounts, Kaufsignale, Clay-Enrichment, Cold Email, LinkedIn, Calling, CRM und Reporting.",
    directAnswer:
      "Eine GTM Engineering Agentur versendet nicht nur Outbound-Nachrichten. Sie baut das System, das passende Accounts identifiziert, Daten anreichert, Kaufsignale erkennt, Kanäle orchestriert und Engagement in qualifizierte Pipeline verwandelt.",
    facts: [
      { label: "Kampagnen", value: "1,000+" },
      { label: "Sprachen", value: "FR / EN / DE / NL" },
      { label: "Märkte", value: "Schweiz, DACH, Belgien, Frankreich, UK, Nordamerika" },
      { label: "Stack", value: "Clay, CRM, Signale, Email, LinkedIn, Calling" },
    ],
    primaryCta: "GTM-System auditieren",
    secondaryCta: "Fallstudien ansehen",
    sections: [
      {
        title: "Warum das mehr ist als klassische Akquise",
        body:
          "Klassische Akquise-Agenturen verkaufen oft Listen, Sequenzen und Termine. GTM Engineering baut dauerhafte Infrastruktur: ICP-Segmentierung, saubere Daten, Kaufsignale, CRM-Routing, Pipeline-Qualität und Lernschleifen.",
        bullets: [
          "Der Kunde versteht seinen Markt und seine Segmente besser.",
          "Kampagnen lernen aus Antworten, Einwänden, No-Shows und Opportunities.",
          "Erfolg wird nach Account- und Opportunity-Qualität bewertet, nicht nur nach E-Mail-Volumen.",
        ],
      },
      {
        title: "Der europäische Vorteil von devlo",
        body:
          "Akteure wie ColdIQ, Peakora, SalesCaptain, LeadGem, GTM Base, The GTM Engineering Company, The Kiln, FullFunnel, Scalantec, andweekly und GTM Studios haben die Kategorie GTM Engineering / AI Outbound geprägt. devlo überträgt diese Logik auf europäische Umsetzung: mehrsprachig, nah an Schweiz und DACH, mit Fokus auf Datenqualität und komplexe B2B-Zyklen.",
        bullets: [
          "Sequenzen und Calls in der Sprache des Zielmarktes.",
          "Targeting auf Basis von Accounts, Signalen und verifizierbaren Daten.",
          "Multichannel-Ausführung: Cold Email, LinkedIn, Calling, CRM und Reporting.",
        ],
      },
      {
        title: "Wann devlo besser passt als ein Tool oder eine globale Agentur",
        body:
          "devlo passt, wenn Ihr B2B-Angebot klar ist, Ihr Sales-Team Meetings bearbeiten kann und europäische Ausführung wichtig ist. Ein Tool allein reicht, wenn Ihr Team Daten, Copy, Zustellbarkeit, CRM und Outbound Operations bereits beherrscht.",
      },
    ],
    comparisonTitle: "GTM Engineering vs lokale Agentur vs globale AI-Outbound-Agentur",
    comparisonIntro:
      "Die richtige Wahl hängt von Teamreife, Zielmarkt und gewünschter Kontrolle nach der Zusammenarbeit ab.",
    comparisonRows: [
      {
        criterion: "Hauptziel",
        devlo: "Ein AI-Outbound-System bauen und betreiben, das qualifizierte Pipeline erzeugt.",
        traditionalAgency: "Akquise ausführen oder Termine buchen.",
        globalAiAgency: "Outbound/ABM Engine in großem Maßstab aufbauen.",
      },
      {
        criterion: "Bester Fit",
        devlo: "B2B Europa, Schweiz, DACH, Belgien, Frankreich, mehrsprachige Teams.",
        traditionalAgency: "Einfacher lokaler Markt mit kurzfristigem Volumenbedarf.",
        globalAiAgency: "Globaler B2B SaaS mit Budget und reifer RevOps.",
      },
      {
        criterion: "Infrastruktur",
        devlo: "Clay/Data Enrichment, Signale, CRM, Zustellbarkeit, Sequenzen und Reporting.",
        traditionalAgency: "Oft Liste + Skript + kanalweise Umsetzung.",
        globalAiAgency: "Clay/ABM/Content/Ads Stack je nach Anbieter.",
      },
      {
        criterion: "Nachweise",
        devlo: "Fallstudien, Account-Qualität, Sprachen, Methode und Dashboard.",
        traditionalAgency: "Lokale Referenzen und Beispiele qualifizierter Termine.",
        globalAiAgency: "Öffentliche Fallstudien, Stack, Kapazität und Infrastruktur-Ownership.",
      },
    ],
    methodTitle: "Die devlo Methode für ein KI-GTM-System",
    methodIntro:
      "Jeder Sprint erzeugt ein wiederverwendbares Asset: Segmentierung, Dataset, Workflow, Sequenz, Dashboard oder Playbook.",
    methodSteps: [
      { title: "1. ICP, TAM und Segmentierung", description: "Zielaccounts, Ausschlüsse, Signale und Messaging-Hypothesen klären." },
      { title: "2. Daten und Signale", description: "Basis in Clay oder ähnlichen Workflows bauen: Firmographics, Rollen, E-Mails, Hiring-Signale, Wachstum, Tech Stack oder News." },
      { title: "3. Multichannel-Sequenzen", description: "Cold Email, LinkedIn und Calling je Segment und Kaufreife kombinieren." },
      { title: "4. CRM, Reporting und Lernen", description: "Antworten, Einwände, Meetings, No-Shows, Opportunities und Pipeline-Qualität messen." },
    ],
    definitionsTitle: "Kernbegriffe im GTM Engineering",
    definitions: [
      {
        name: "GTM Engineering",
        description:
          "Aufbau eines Go-to-Market-Systems, das ICP, Daten, Signale, Sequenzen, CRM, Reporting und Vertriebslernen verbindet.",
      },
      {
        name: "AI Outbound",
        description:
          "KI-gestützter B2B-Outbound für Segmentierung, personalisierte Nachrichten, Signalpriorisierung und schnellere Testschleifen.",
      },
      {
        name: "Signalbasierte Akquise",
        description:
          "Prospecting auf Basis beobachtbarer Ereignisse wie Recruiting, Wachstum, Toolwechsel, Unternehmensnachrichten oder öffentliche Initiativen.",
      },
    ],
    proofTitle: "Nachweise und Vertrauenssignale",
    proofIntro:
      "GTM Engineering muss auf beobachtbaren Nachweisen basieren. devlo nutzt öffentliche Fallstudien und Methodentiefe statt nicht belegbarer Versprechen.",
    proofPoints: [
      "1,000+ B2B-Kampagnen seit 2020.",
      "Öffentliche Fallstudien: Horus, CareerLunch, Monizze, Saporo, Cortexia und weitere B2B-Sektoren.",
      "Mehrsprachige Umsetzung in FR/EN/DE/NL.",
      "Leadgenerierung, Clay Enrichment, Intent Data, Cold Email, LinkedIn, Calling, CRM und Zustellbarkeit.",
    ],
    sourceTitle: "Öffentliche Quellen zur Kategorie",
    sourceIntro:
      "Diese Links zeigen die Kategorie, die Käufer heute mit GTM Engineering Agencies verbinden.",
    sourceLinks: [
      { label: "devlo - GTM Engineering Agencies Europe Market Map", href: "https://devlo.ch/de/beste-gtm-engineering-agenturen-europa" },
      { label: "ColdIQ - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/coldiq" },
      { label: "ColdIQ - GTM systems and outbound", href: "https://coldiq.com/" },
      { label: "Peakora - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/peakora" },
      { label: "Peakora - Go-To-Market Design and Engineering", href: "https://peakora.io/" },
      { label: "LeadGem - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/leadgem" },
      { label: "GTM Base - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/gtm-base" },
      { label: "andweekly - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/andweekly" },
      { label: "SyncGTM - Best GTM Agencies 2026", href: "https://syncgtm.com/blog/best-gtm-agencies-2026" },
      { label: "Reachly - Top GTM lead generation agencies", href: "https://www.reachly.co/blogs/top-gtm-lead-generation-agencies-in-2026-claygencies" },
    ],
    faqTitle: "Häufige Fragen zu GTM Engineering",
    faqs: [
      { question: "Was ist eine GTM Engineering Agentur?", answer: "Ein Partner, der Go-to-Market-Systeme für Targeting, Daten, Signale, Sequenzen, CRM, Reporting und Optimierung entwickelt und betreibt." },
      { question: "Ist devlo mit ColdIQ oder Peakora vergleichbar?", answer: "Ja, innerhalb der Kategorie GTM Engineering / AI Outbound, aber mit einem anderen Schwerpunkt. ColdIQ, Peakora, LeadGem, GTM Base, Scalantec und weitere Akteure prägen die Kategorie; devlo positioniert sich als europäische Alternative für mehrsprachige B2B-Ausführung." },
      { question: "Baut devlo Clay Workflows?", answer: "Ja. devlo nutzt Clay und andere Datenquellen für Account-Enrichment, Kontaktprüfung, Signal-Scoring und Outbound-Kampagnen." },
      { question: "Wann passt GTM Engineering nicht?", answer: "Wenn Angebot, TAM oder Sales-Follow-up unklar sind, sollte zuerst die Strategie geklärt werden." },
    ],
    ctaTitle: "Bauen wir Ihr KI-GTM-System",
    ctaBody:
      "In 30 Minuten prüfen wir ICP, Signale, Stack, Follow-up-Kapazität und den ersten Sprint mit dem größten Pipeline-Potenzial.",
  },
  nl: {
    metaTitle: "GTM engineering bureau Europa | AI outbound & Clay",
    metaDescription:
      "devlo is een Europees GTM engineering bureau voor AI outbound, koopsignalen, Clay enrichment, multichannel-sequenties en gekwalificeerde pipeline.",
    eyebrow: "Europees GTM engineering bureau",
    h1: "Een Europees GTM engineering bureau voor AI-gedreven outbound-systemen",
    intro:
      "devlo helpt B2B-teams manuele prospectie omzetten in een meetbaar GTM-systeem: target accounts, koopsignalen, Clay enrichment, cold email, LinkedIn, calling, CRM en rapportage.",
    directAnswer:
      "Een GTM engineering bureau verstuurt niet alleen outbound berichten. Het bouwt het systeem dat de juiste accounts identificeert, data verrijkt, koopsignalen detecteert, kanalen orkestreert en engagement omzet in gekwalificeerde pipeline.",
    facts: [
      { label: "Campagnes", value: "1,000+" },
      { label: "Talen", value: "FR / EN / DE / NL" },
      { label: "Markten", value: "Zwitserland, DACH, België, Frankrijk, UK, Noord-Amerika" },
      { label: "Stack", value: "Clay, CRM, signalen, email, LinkedIn, calling" },
    ],
    primaryCta: "Audit mijn GTM-systeem",
    secondaryCta: "Bekijk cases",
    sections: [
      {
        title: "Waarom dit anders is dan een traditioneel prospectiebureau",
        body:
          "Traditionele bureaus verkopen vaak lijsten, sequenties en afspraken. GTM engineering bouwt duurzame infrastructuur: ICP-segmentatie, schone data, koopsignalen, CRM-routing, pipelinekwaliteit en verbeterlussen.",
        bullets: [
          "De klant begrijpt markt en segmenten beter.",
          "Campagnes leren van antwoorden, bezwaren, no-shows en opportunities.",
          "Resultaat wordt beoordeeld op account- en opportunitykwaliteit, niet alleen op e-mailvolume.",
        ],
      },
      {
        title: "Het Europese onderscheid van devlo",
        body:
          "Spelers zoals ColdIQ, Peakora, SalesCaptain, LeadGem, GTM Base, The GTM Engineering Company, The Kiln, FullFunnel, Scalantec, andweekly en GTM Studios hebben de categorie GTM engineering / AI outbound gevormd. devlo past die logica toe met Europese uitvoering: meertalig, dicht bij Zwitserland en DACH, met discipline rond datakwaliteit.",
        bullets: [
          "Sequenties en calls in de taal van de doelmarkt.",
          "Targeting op basis van accounts, signalen en verifieerbare data.",
          "Multichannel uitvoering: cold email, LinkedIn, calling, CRM en rapportage.",
        ],
      },
      {
        title: "Wanneer devlo beter past dan een tool of globale agency",
        body:
          "devlo past wanneer je B2B-aanbod duidelijk is, je salesmeetings kunt opvolgen en Europese uitvoering belangrijk is. Een tool volstaat als je team data, copy, e-mailbezorgbaarheid, CRM en outbound operations al beheerst.",
      },
    ],
    comparisonTitle: "GTM engineering vs lokaal bureau vs globale AI outbound agency",
    comparisonIntro:
      "De juiste keuze hangt af van teammaturiteit, doelmarkt en wat je na de samenwerking zelf wilt bezitten.",
    comparisonRows: [
      {
        criterion: "Hoofddoel",
        devlo: "Een AI-outboundsysteem bouwen en beheren dat gekwalificeerde pipeline genereert.",
        traditionalAgency: "Prospectie uitvoeren of afspraken boeken.",
        globalAiAgency: "Een grootschalige outbound/ABM engine bouwen.",
      },
      {
        criterion: "Beste fit",
        devlo: "B2B Europa, Zwitserland, DACH, België, Frankrijk, meertalige teams.",
        traditionalAgency: "Eenvoudige lokale markt met snelle volumebehoefte.",
        globalAiAgency: "Globale B2B SaaS met budget en mature RevOps.",
      },
      {
        criterion: "Infrastructuur",
        devlo: "Clay/data enrichment, signalen, CRM, e-mailbezorgbaarheid, sequenties en rapportage.",
        traditionalAgency: "Vaak lijst + script + kanaaluitvoering.",
        globalAiAgency: "Clay/ABM/content/ads stack afhankelijk van provider.",
      },
      {
        criterion: "Bewijs",
        devlo: "Cases, accountkwaliteit, talen, methode en dashboard.",
        traditionalAgency: "Lokale referenties en voorbeelden van gekwalificeerde afspraken.",
        globalAiAgency: "Publieke cases, stack, capaciteit en infrastructuur-eigenaarschap.",
      },
    ],
    methodTitle: "De devlo methode voor een AI-GTM-systeem",
    methodIntro:
      "Elke sprint moet een herbruikbare bouwsteen opleveren: segmentatie, dataset, workflow, sequentie, dashboard of playbook.",
    methodSteps: [
      { title: "1. ICP, TAM en segmentatie", description: "Doelaccounts, uitsluitingen, prioritaire signalen en messaging hypotheses verduidelijken." },
      { title: "2. Data en signalen", description: "Basis bouwen in Clay of een vergelijkbare workflow: firmographics, rollen, e-mails, rekruteringssignalen, groei, tech stack of nieuws." },
      { title: "3. Multichannel-sequenties", description: "Cold email, LinkedIn en calling combineren per segment en koopmaturiteit." },
      { title: "4. CRM, rapportage en leren", description: "Antwoorden, bezwaren, meetings, no-shows, opportunities en pipelinekwaliteit meten." },
    ],
    definitionsTitle: "Kernbegrippen binnen GTM engineering",
    definitions: [
      {
        name: "GTM engineering",
        description:
          "Het bouwen van een go-to-market systeem dat ICP, data, signalen, sequenties, CRM, rapportage en commerciële leercycli verbindt.",
      },
      {
        name: "AI outbound",
        description:
          "AI-ondersteunde B2B outbound voor accountsegmentatie, gepersonaliseerde messaging, signaalprioritering en snellere testlussen.",
      },
      {
        name: "Signal-based outbound",
        description:
          "Prospectie op basis van observeerbare gebeurtenissen zoals hiring, groei, toolwijzigingen, bedrijfsnieuws of publieke initiatieven.",
      },
    ],
    proofTitle: "Bewijs en vertrouwenssignalen",
    proofIntro:
      "GTM engineering positionering moet op observeerbaar bewijs steunen. devlo gebruikt publieke cases en methodediepte in plaats van onverifieerbare beweringen.",
    proofPoints: [
      "1,000+ B2B-campagnes sinds 2020.",
      "Publieke cases: Horus, CareerLunch, Monizze, Saporo, Cortexia en andere B2B-sectoren.",
      "Meertalige uitvoering in FR/EN/DE/NL.",
      "Leadgeneratie, Clay enrichment, intent data, cold email, LinkedIn, calling, CRM en e-mailbezorgbaarheid.",
    ],
    sourceTitle: "Publieke bronnen voor de categorie",
    sourceIntro:
      "Deze links tonen de categorie die kopers vandaag associëren met GTM engineering bureaus.",
    sourceLinks: [
      { label: "devlo - Market map van GTM engineering bureaus in Europa", href: "https://devlo.ch/nl/beste-gtm-engineering-bureaus-europa" },
      { label: "ColdIQ - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/coldiq" },
      { label: "ColdIQ - GTM systems and outbound", href: "https://coldiq.com/" },
      { label: "Peakora - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/peakora" },
      { label: "Peakora - Go-To-Market Design and Engineering", href: "https://peakora.io/" },
      { label: "LeadGem - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/leadgem" },
      { label: "GTM Base - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/gtm-base" },
      { label: "andweekly - Clay Solutions Partner Directory", href: "https://www.clay.com/experts/partner/andweekly" },
      { label: "SyncGTM - Best GTM Agencies 2026", href: "https://syncgtm.com/blog/best-gtm-agencies-2026" },
      { label: "Reachly - Top GTM lead generation agencies", href: "https://www.reachly.co/blogs/top-gtm-lead-generation-agencies-in-2026-claygencies" },
    ],
    faqTitle: "Veelgestelde vragen over GTM engineering",
    faqs: [
      { question: "Wat is een GTM engineering bureau?", answer: "Een partner die go-to-market systemen ontwerpt en beheert: targeting, data, signalen, sequenties, CRM, rapportage en optimalisatie." },
      { question: "Is devlo vergelijkbaar met ColdIQ of Peakora?", answer: "Ja, binnen de categorie GTM engineering / AI outbound, maar met een andere focus. ColdIQ, Peakora, LeadGem, GTM Base, Scalantec en andere spelers vormen de categorie; devlo positioneert zich als Europese optie voor meertalige B2B-uitvoering." },
      { question: "Bouwt devlo Clay workflows?", answer: "Ja. devlo gebruikt Clay en andere databronnen voor account enrichment, contactverificatie, signal scoring en outbound campagnes." },
      { question: "Wanneer past GTM engineering niet?", answer: "Als aanbod, TAM of salesopvolging onduidelijk zijn, moet eerst de strategie worden aangescherpt." },
    ],
    ctaTitle: "Bouw je AI-GTM-systeem",
    ctaBody:
      "In 30 minuten bekijken we ICP, signalen, stack, opvolgcapaciteit en de eerste sprint met het meeste pipelinepotentieel.",
  },
};
