import type { SupportedLocale } from "@/lib/i18n/slug-map";

export type ProgrammaticSeoPage = {
  frPath: string;
  locale: SupportedLocale;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  market: string;
  service: string;
  serviceCategory: string;
  audience: string;
  answer: string;
  proofPoints: string[];
  localSignals: string[];
  criteria: Array<{ label: string; detail: string }>;
  marketNotes: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedLinks: Array<{ label: string; href: string }>;
  datePublished: string;
  dateModified: string;
};

type ProgrammaticSeoCell = {
  frPath: string;
  localizations: Record<SupportedLocale, Omit<ProgrammaticSeoPage, "frPath" | "locale" | "datePublished" | "dateModified">>;
};

const datePublished = "2026-05-10";
const dateModified = "2026-05-10";

const cells: ProgrammaticSeoCell[] = [
  {
    frPath: "/agence-prospection-b2b-geneve",
    localizations: {
      fr: {
        path: "/agence-prospection-b2b-geneve",
        metaTitle: "Agence prospection B2B Geneve | RDV qualifies",
        metaDescription: "Prospection B2B a Geneve pour finance, ONG, services, SaaS et grands comptes. devlo cible les bons decideurs avec signaux et sequences.",
        h1: "Agence de prospection B2B a Geneve",
        market: "Geneve",
        service: "prospection B2B",
        serviceCategory: "Prospection commerciale B2B",
        audience: "equipes B2B qui ciblent finance, services professionnels, ONG, tech et comptes internationaux a Geneve",
        answer: "Une campagne de prospection B2B a Geneve doit separer les comptes locaux, les sieges internationaux et les organisations publiques ou parapubliques avant de lancer email, LinkedIn et calling.",
        proofPoints: ["Campagnes FR/EN pour decideurs suisses et internationaux.", "Cas suisses et romands disponibles sur immobilier, biodiversite, formation et cybersécurite.", "Qualification par ICP, signal d'achat et role decisionnaire."],
        localSignals: ["Finance, négoce, ONG, organisations internationales et services B2B.", "Messages souvent bilingues FR/EN selon fonction et siege.", "Cycle d'achat plus relationnel que volume-driven."],
        criteria: [
          { label: "TAM local", detail: "Segmenter Geneve par secteur, taille, langue et presence locale reelle." },
          { label: "Preuve suisse", detail: "Utiliser des cas clients et references regionales plutot qu'une promesse generique." },
          { label: "Decideur verifie", detail: "Verifier role, seniorite et contexte avant toute sequence." },
        ],
        marketNotes: ["Geneve reunit des comptes locaux et internationaux. Une page ou une campagne genevoise doit donc clarifier la langue, le type d'organisation et le niveau de decision vise.", "devlo privilegie les rendez-vous qualifies aux volumes de contacts, avec un controle de la pertinence avant activation."],
        faqs: [
          { question: "Quelle langue utiliser pour prospecter a Geneve ?", answer: "Le francais convient aux decideurs locaux. L'anglais est souvent necessaire pour les sieges internationaux, ONG, organisations internationales et fonctions regionales." },
          { question: "Geneve est-elle adaptee a l'ABM ?", answer: "Oui. La densite de comptes a forte valeur justifie une approche ABM avec recherche compte, signaux d'achat et plusieurs decideurs par organisation." },
          { question: "devlo peut-elle cibler uniquement Geneve ?", answer: "Oui. Geneve peut etre traitee comme un premier batch local, ou comme une partie d'une campagne Suisse romande plus large." },
        ],
        relatedLinks: [
          { label: "Prospection B2B a Geneve", href: "/prospection-commerciale-geneve" },
          { label: "Prospection B2B en Suisse romande", href: "/prospection-commerciale-suisse-romande" },
          { label: "Consultation gratuite", href: "/consultation" },
        ],
      },
      en: {
        path: "/en/b2b-prospecting-agency-geneva",
        metaTitle: "B2B prospecting agency Geneva | qualified meetings",
        metaDescription: "B2B prospecting in Geneva for finance, NGOs, services, SaaS and international accounts. devlo targets decision-makers with signals.",
        h1: "B2B prospecting agency in Geneva",
        market: "Geneva",
        service: "B2B prospecting",
        serviceCategory: "B2B outbound prospecting",
        audience: "B2B teams targeting finance, professional services, NGOs, tech and international accounts in Geneva",
        answer: "A Geneva B2B prospecting campaign should separate local companies, international headquarters and public-adjacent organizations before activating email, LinkedIn and calls.",
        proofPoints: ["FR/EN campaigns for Swiss and international decision-makers.", "Swiss and Romandy case studies across real estate, biodiversity, training and cybersecurity.", "Qualification by ICP fit, buying signal and decision-maker role."],
        localSignals: ["Finance, trading, NGOs, international organizations and B2B services.", "Messaging is often bilingual depending on role and headquarters.", "Buying cycles are relationship-heavy and precision-driven."],
        criteria: [
          { label: "Local TAM", detail: "Segment Geneva by sector, size, language and real local presence." },
          { label: "Swiss proof", detail: "Use local case studies and regional references instead of generic claims." },
          { label: "Verified decision-maker", detail: "Check role, seniority and context before sequencing." },
        ],
        marketNotes: ["Geneva combines local and international accounts. A Geneva campaign must clarify language, organization type and decision level.", "devlo optimizes for qualified sales conversations, not raw contact volume."],
        faqs: [
          { question: "Which language works for Geneva outreach?", answer: "French works for local decision-makers. English is often required for international headquarters, NGOs and regional functions." },
          { question: "Is Geneva a good ABM market?", answer: "Yes. High-value account density makes Geneva suitable for account research, buying signals and multi-threaded outreach." },
          { question: "Can devlo target Geneva only?", answer: "Yes. Geneva can be a local first batch or part of a broader French-speaking Switzerland campaign." },
        ],
        relatedLinks: [
          { label: "B2B prospecting in Geneva", href: "/en/b2b-prospecting-geneva" },
          { label: "B2B prospecting in French-speaking Switzerland", href: "/en/b2b-prospecting-french-speaking-switzerland" },
          { label: "Free consultation", href: "/en/consultation" },
        ],
      },
      de: {
        path: "/de/b2b-prospecting-agentur-genf",
        metaTitle: "B2B-Prospecting Agentur Genf | devlo",
        metaDescription: "B2B-Prospecting in Genf fuer Finance, NGOs, Services, SaaS und internationale Accounts mit Signalen, DE/FR/EN Copy und Qualifikation.",
        h1: "B2B-Prospecting Agentur in Genf",
        market: "Genf",
        service: "B2B-Prospecting",
        serviceCategory: "B2B Outbound Prospecting",
        audience: "B2B-Teams, die Finance, Services, NGOs, Tech und internationale Accounts in Genf erreichen wollen",
        answer: "Eine B2B-Kampagne in Genf sollte lokale Firmen, internationale Headquarters und oeffentlichkeitsnahe Organisationen trennen, bevor E-Mail, LinkedIn und Telefon aktiviert werden.",
        proofPoints: ["FR/EN-Kampagnen fuer Schweizer und internationale Entscheider.", "Schweizer Case Studies in Immobilien, Biodiversitaet, Training und Cybersecurity.", "Qualifikation nach ICP, Kaufsignal und Entscheiderrolle."],
        localSignals: ["Finance, Handel, NGOs, internationale Organisationen und B2B Services.", "Messaging ist haeufig je nach Rolle und Sitz FR/EN.", "Kaufzyklen sind beziehungsorientiert und praezisionsgetrieben."],
        criteria: [
          { label: "Lokaler TAM", detail: "Genf nach Branche, Groesse, Sprache und echter lokaler Praesenz segmentieren." },
          { label: "Schweizer Nachweis", detail: "Regionale Cases statt generischer Versprechen nutzen." },
          { label: "Gepruefter Entscheider", detail: "Rolle, Senioritaet und Kontext vor der Sequenz pruefen." },
        ],
        marketNotes: ["Genf kombiniert lokale und internationale Accounts. Kampagne und Seite muessen Sprache, Organisationstyp und Entscheiderlevel klar machen.", "devlo optimiert auf qualifizierte Vertriebsgespraeche statt Kontaktvolumen."],
        faqs: [
          { question: "Welche Sprache funktioniert in Genf?", answer: "Franzoesisch fuer lokale Entscheider, Englisch fuer internationale Headquarters, NGOs und regionale Funktionen." },
          { question: "Ist Genf fuer ABM geeignet?", answer: "Ja. Die Dichte hochwertiger Accounts rechtfertigt Account-Recherche, Kaufsignale und mehrere Entscheider pro Organisation." },
          { question: "Kann devlo nur Genf targetieren?", answer: "Ja. Genf kann ein lokaler erster Batch oder Teil einer breiteren Westschweiz-Kampagne sein." },
        ],
        relatedLinks: [
          { label: "B2B-Akquise in Genf", href: "/de/b2b-akquise-genf" },
          { label: "B2B-Akquise Westschweiz", href: "/de/b2b-akquise-westschweiz" },
          { label: "Kostenlose Beratung", href: "/de/beratung" },
        ],
      },
      nl: {
        path: "/nl/b2b-prospectie-bureau-geneve",
        metaTitle: "B2B prospectie bureau Geneve | devlo",
        metaDescription: "B2B prospectie in Geneve voor finance, NGOs, services, SaaS en internationale accounts met signalen en beslisserkwalificatie.",
        h1: "B2B prospectie bureau in Geneve",
        market: "Geneve",
        service: "B2B prospectie",
        serviceCategory: "B2B outbound prospectie",
        audience: "B2B-teams die finance, zakelijke diensten, NGOs, tech en internationale accounts in Geneve willen bereiken",
        answer: "Een B2B prospectiecampagne in Geneve moet lokale bedrijven, internationale hoofdkantoren en publieke organisaties scheiden voordat e-mail, LinkedIn en bellen worden geactiveerd.",
        proofPoints: ["FR/EN-campagnes voor Zwitserse en internationale beslissers.", "Zwitserse cases in vastgoed, biodiversiteit, training en cybersecurity.", "Kwalificatie op ICP-fit, koopsignaal en beslisserrol."],
        localSignals: ["Finance, handel, NGOs, internationale organisaties en B2B-diensten.", "Messaging is vaak tweetalig per rol en hoofdkantoor.", "Koopcycli zijn relationeel en vragen precisie."],
        criteria: [
          { label: "Lokale TAM", detail: "Geneve segmenteren op sector, grootte, taal en echte lokale aanwezigheid." },
          { label: "Zwitserse proof", detail: "Regionale cases gebruiken in plaats van generieke claims." },
          { label: "Geverifieerde beslisser", detail: "Rol, senioriteit en context checken voor sequencing." },
        ],
        marketNotes: ["Geneve combineert lokale en internationale accounts. Campagne en pagina moeten taal, organisatietype en beslissingsniveau duidelijk maken.", "devlo optimaliseert voor gekwalificeerde salesgesprekken, niet voor contactvolume."],
        faqs: [
          { question: "Welke taal werkt voor outreach in Geneve?", answer: "Frans werkt voor lokale beslissers. Engels is vaak nodig voor internationale hoofdkantoren, NGOs en regionale functies." },
          { question: "Is Geneve geschikt voor ABM?", answer: "Ja. De dichtheid aan high-value accounts maakt account research, koopsignalen en multithreaded outreach logisch." },
          { question: "Kan devlo alleen Geneve targeten?", answer: "Ja. Geneve kan een lokale eerste batch zijn of onderdeel van een bredere campagne in Franstalig Zwitserland." },
        ],
        relatedLinks: [
          { label: "B2B prospectie in Geneve", href: "/nl/b2b-prospectie-geneve" },
          { label: "B2B prospectie in Franstalig Zwitserland", href: "/nl/b2b-prospectie-franstalig-zwitserland" },
          { label: "Gratis consultatie", href: "/nl/adviesgesprek" },
        ],
      },
    },
  },
  {
    frPath: "/agence-prospection-b2b-lausanne",
    localizations: {
      fr: {
        path: "/agence-prospection-b2b-lausanne",
        metaTitle: "Agence prospection B2B Lausanne | devlo",
        metaDescription: "Prospection B2B a Lausanne et dans le canton de Vaud pour PME, scale-ups, EPFL, medtech, services et industrie.",
        h1: "Agence de prospection B2B a Lausanne",
        market: "Lausanne",
        service: "prospection B2B",
        serviceCategory: "Prospection commerciale B2B",
        audience: "entreprises B2B qui ciblent Lausanne, Vaud, l'arc lemanique, les PME et les organisations innovantes",
        answer: "A Lausanne, la prospection B2B fonctionne quand le ciblage distingue PME vaudoises, scale-ups, ecosysteme EPFL, services professionnels et comptes institutionnels.",
        proofPoints: ["Base devlo dans le canton de Vaud.", "Cas romands sur immobilier, formation, biodiversite et audiovisuel.", "Segmentation par canton, secteur et maturite commerciale."],
        localSignals: ["EPFL, medtech, education, services B2B et PME vaudoises.", "Marche dense mais relationnel.", "Preuve locale plus importante que volume brut."],
        criteria: [
          { label: "Proximite locale", detail: "Utiliser les references vaudoises quand elles sont pertinentes." },
          { label: "Segmentation secteur", detail: "Separer EPFL/tech, PME, services et institutions." },
          { label: "Qualification stricte", detail: "Eviter les listes larges sans decideur verifie." },
        ],
        marketNotes: ["Lausanne est un marche ou la precision se remarque vite. Un mauvais ciblage cree plus de bruit que de pipeline.", "devlo peut traiter Lausanne comme un batch local avant extension a Vaud, Geneve ou Suisse romande."],
        faqs: [
          { question: "Pourquoi cibler Lausanne separement ?", answer: "Lausanne combine PME, innovation, education, medtech et services. Les messages sont plus credibles quand ils refletent ce tissu local." },
          { question: "devlo est-elle proche de Lausanne ?", answer: "Oui. devlo est basee dans le canton de Vaud, ce qui aide a comprendre les references locales et les bassins economiques romands." },
          { question: "Peut-on lancer une campagne seulement sur Vaud ?", answer: "Oui. Vaud peut etre un premier batch avant une extension vers Geneve, Fribourg ou toute la Suisse romande." },
        ],
        relatedLinks: [
          { label: "Prospection B2B a Lausanne", href: "/prospection-commerciale-lausanne" },
          { label: "Prospection B2B en Suisse romande", href: "/prospection-commerciale-suisse-romande" },
          { label: "Consultation gratuite", href: "/consultation" },
        ],
      },
      en: {
        path: "/en/b2b-prospecting-agency-lausanne",
        metaTitle: "B2B prospecting agency Lausanne | devlo",
        metaDescription: "B2B prospecting in Lausanne and Vaud for SMEs, scale-ups, EPFL-related ecosystems, medtech, services and industry.",
        h1: "B2B prospecting agency in Lausanne",
        market: "Lausanne",
        service: "B2B prospecting",
        serviceCategory: "B2B outbound prospecting",
        audience: "B2B companies targeting Lausanne, Vaud, Lake Geneva SMEs and innovation-driven accounts",
        answer: "In Lausanne, B2B prospecting works when targeting separates Vaud SMEs, scale-ups, EPFL-related ecosystems, professional services and institutional accounts.",
        proofPoints: ["devlo is based in the canton of Vaud.", "Romandy case studies in real estate, training, biodiversity and audiovisual.", "Segmentation by canton, sector and commercial maturity."],
        localSignals: ["EPFL, medtech, education, B2B services and Vaud SMEs.", "Dense but relationship-driven market.", "Local proof matters more than raw volume."],
        criteria: [
          { label: "Local proximity", detail: "Use Vaud references where they are relevant." },
          { label: "Sector segmentation", detail: "Separate EPFL/tech, SMEs, services and institutions." },
          { label: "Strict qualification", detail: "Avoid broad lists without verified decision-makers." },
        ],
        marketNotes: ["Lausanne is a market where precision is visible quickly. Poor targeting creates noise instead of pipeline.", "devlo can treat Lausanne as a local first batch before expanding to Vaud, Geneva or all French-speaking Switzerland."],
        faqs: [
          { question: "Why target Lausanne separately?", answer: "Lausanne combines SMEs, innovation, education, medtech and services. Messaging is stronger when it reflects that local market." },
          { question: "Is devlo near Lausanne?", answer: "Yes. devlo is based in the canton of Vaud, which helps with local references and regional business context." },
          { question: "Can a campaign target only Vaud?", answer: "Yes. Vaud can be a first batch before expanding to Geneva, Fribourg or all French-speaking Switzerland." },
        ],
        relatedLinks: [
          { label: "B2B prospecting in Lausanne", href: "/en/b2b-prospecting-lausanne" },
          { label: "B2B prospecting in French-speaking Switzerland", href: "/en/b2b-prospecting-french-speaking-switzerland" },
          { label: "Free consultation", href: "/en/consultation" },
        ],
      },
      de: {
        path: "/de/b2b-prospecting-agentur-lausanne",
        metaTitle: "B2B-Prospecting Agentur Lausanne | devlo",
        metaDescription: "B2B-Prospecting in Lausanne und Waadt fuer KMU, Scale-ups, EPFL-nahe Oekosysteme, Medtech, Services und Industrie.",
        h1: "B2B-Prospecting Agentur in Lausanne",
        market: "Lausanne",
        service: "B2B-Prospecting",
        serviceCategory: "B2B Outbound Prospecting",
        audience: "B2B-Unternehmen, die Lausanne, Waadt, KMU und innovationsnahe Accounts erreichen wollen",
        answer: "In Lausanne funktioniert B2B-Prospecting, wenn KMU in Waadt, Scale-ups, EPFL-nahe Oekosysteme, Services und Institutionen separat segmentiert werden.",
        proofPoints: ["devlo ist im Kanton Waadt basiert.", "Romandie-Cases in Immobilien, Training, Biodiversitaet und Audiovisual.", "Segmentierung nach Kanton, Branche und Reifegrad."],
        localSignals: ["EPFL, Medtech, Bildung, B2B Services und KMU in Waadt.", "Dichter, aber beziehungsorientierter Markt.", "Lokaler Nachweis ist wichtiger als Volumen."],
        criteria: [
          { label: "Lokale Naehe", detail: "Referenzen aus Waadt nutzen, wenn sie relevant sind." },
          { label: "Branchen-Segmentierung", detail: "EPFL/Tech, KMU, Services und Institutionen trennen." },
          { label: "Strikte Qualifikation", detail: "Keine breiten Listen ohne gepruefte Entscheider." },
        ],
        marketNotes: ["Lausanne ist ein Markt, in dem Praezision schnell sichtbar wird. Schlechte Zielgruppen erzeugen Rauschen statt Pipeline.", "devlo kann Lausanne als lokalen ersten Batch vor Waadt, Genf oder der Westschweiz behandeln."],
        faqs: [
          { question: "Warum Lausanne separat targetieren?", answer: "Lausanne kombiniert KMU, Innovation, Bildung, Medtech und Services. Messaging wird glaubwuerdiger, wenn es den lokalen Markt reflektiert." },
          { question: "Ist devlo nahe Lausanne?", answer: "Ja. devlo ist im Kanton Waadt basiert und kennt den regionalen Kontext." },
          { question: "Kann eine Kampagne nur Waadt targetieren?", answer: "Ja. Waadt kann ein erster Batch vor Genf, Freiburg oder der ganzen Westschweiz sein." },
        ],
        relatedLinks: [
          { label: "B2B-Akquise in Lausanne", href: "/de/b2b-akquise-lausanne" },
          { label: "B2B-Akquise Westschweiz", href: "/de/b2b-akquise-westschweiz" },
          { label: "Kostenlose Beratung", href: "/de/beratung" },
        ],
      },
      nl: {
        path: "/nl/b2b-prospectie-bureau-lausanne",
        metaTitle: "B2B prospectie bureau Lausanne | devlo",
        metaDescription: "B2B prospectie in Lausanne en Vaud voor kmo's, scale-ups, EPFL-ecosystemen, medtech, services en industrie.",
        h1: "B2B prospectie bureau in Lausanne",
        market: "Lausanne",
        service: "B2B prospectie",
        serviceCategory: "B2B outbound prospectie",
        audience: "B2B-bedrijven die Lausanne, Vaud, kmo's en innovatiegedreven accounts willen bereiken",
        answer: "In Lausanne werkt B2B prospectie wanneer Vaud-kmo's, scale-ups, EPFL-ecosystemen, zakelijke diensten en institutionele accounts apart worden gesegmenteerd.",
        proofPoints: ["devlo is gevestigd in het kanton Vaud.", "Romandy-cases in vastgoed, training, biodiversiteit en audiovisueel.", "Segmentatie per kanton, sector en commerciele maturiteit."],
        localSignals: ["EPFL, medtech, onderwijs, B2B-diensten en Vaud-kmo's.", "Dichte maar relationele markt.", "Lokale proof is belangrijker dan volume."],
        criteria: [
          { label: "Lokale nabijheid", detail: "Gebruik Vaud-referenties wanneer relevant." },
          { label: "Sectorsegmentatie", detail: "Scheid EPFL/tech, kmo's, diensten en instellingen." },
          { label: "Strikte kwalificatie", detail: "Vermijd brede lijsten zonder geverifieerde beslissers." },
        ],
        marketNotes: ["Lausanne is een markt waar precisie snel zichtbaar is. Slechte targeting maakt ruis in plaats van pipeline.", "devlo kan Lausanne behandelen als lokale eerste batch voor uitbreiding naar Vaud, Geneve of Franstalig Zwitserland."],
        faqs: [
          { question: "Waarom Lausanne apart targeten?", answer: "Lausanne combineert kmo's, innovatie, onderwijs, medtech en diensten. Messaging wordt sterker met lokale context." },
          { question: "Is devlo dicht bij Lausanne?", answer: "Ja. devlo is gevestigd in het kanton Vaud, wat helpt met lokale referenties en regionale context." },
          { question: "Kan een campagne alleen Vaud targeten?", answer: "Ja. Vaud kan een eerste batch zijn voor uitbreiding naar Geneve, Fribourg of Franstalig Zwitserland." },
        ],
        relatedLinks: [
          { label: "B2B prospectie in Lausanne", href: "/nl/b2b-prospectie-lausanne" },
          { label: "B2B prospectie in Franstalig Zwitserland", href: "/nl/b2b-prospectie-franstalig-zwitserland" },
          { label: "Gratis consultatie", href: "/nl/adviesgesprek" },
        ],
      },
    },
  },
];

const sharedCells: ProgrammaticSeoCell[] = [
  {
    frPath: "/agence-prospection-b2b-zurich",
    localizations: {
      fr: makeZurich("fr", "/agence-prospection-b2b-zurich"),
      en: makeZurich("en", "/en/b2b-outbound-agency-zurich"),
      de: makeZurich("de", "/de/b2b-outbound-agentur-zuerich"),
      nl: makeZurich("nl", "/nl/b2b-outbound-bureau-zurich"),
    },
  },
  {
    frPath: "/agence-outbound-b2b-suisse",
    localizations: {
      fr: makeSwitzerland("fr", "/agence-outbound-b2b-suisse"),
      en: makeSwitzerland("en", "/en/b2b-outbound-agency-switzerland"),
      de: makeSwitzerland("de", "/de/b2b-outbound-agentur-schweiz"),
      nl: makeSwitzerland("nl", "/nl/b2b-outbound-bureau-zwitserland"),
    },
  },
  {
    frPath: "/agence-prospection-b2b-paris",
    localizations: {
      fr: makeParis("fr", "/agence-prospection-b2b-paris"),
      en: makeParis("en", "/en/b2b-outbound-agency-paris"),
      de: makeParis("de", "/de/b2b-outbound-agentur-paris"),
      nl: makeParis("nl", "/nl/b2b-outbound-bureau-parijs"),
    },
  },
];

function makeZurich(locale: SupportedLocale, path: string): Omit<ProgrammaticSeoPage, "frPath" | "locale" | "datePublished" | "dateModified"> {
  const isDe = locale === "de";
  return {
    path,
    metaTitle: isDe ? "B2B-Outbound Agentur Zuerich | devlo" : locale === "fr" ? "Agence outbound B2B Zurich | devlo" : locale === "nl" ? "B2B outbound bureau Zurich | devlo" : "B2B outbound agency Zurich | devlo",
    metaDescription: isDe ? "B2B-Outbound in Zuerich fuer Finance, SaaS, Industrie und Consulting mit nativer DE-Copy, Signalen und qualifizierten Terminen." : locale === "fr" ? "Outbound B2B a Zurich pour finance, SaaS, industrie et conseil avec messages allemands, signaux d'achat et rendez-vous qualifies." : locale === "nl" ? "B2B outbound in Zurich voor finance, SaaS, industrie en consulting met Duitse copy, koopsignalen en gekwalificeerde afspraken." : "B2B outbound in Zurich for finance, SaaS, industry and consulting with native German copy, buying signals and qualified meetings.",
    h1: isDe ? "B2B-Outbound Agentur in Zuerich" : locale === "fr" ? "Agence outbound B2B a Zurich" : locale === "nl" ? "B2B outbound bureau in Zurich" : "B2B outbound agency in Zurich",
    market: isDe ? "Zuerich" : "Zurich",
    service: isDe ? "B2B-Outbound" : locale === "fr" ? "outbound B2B" : locale === "nl" ? "B2B outbound" : "B2B outbound",
    serviceCategory: isDe ? "B2B-Outbound und Akquise" : "B2B outbound prospecting",
    audience: isDe ? "B2B-Teams mit Fokus auf Finance, SaaS, Industrie, Consulting und Enterprise Accounts in Zuerich" : locale === "fr" ? "equipes B2B qui ciblent finance, SaaS, industrie, conseil et grands comptes a Zurich" : locale === "nl" ? "B2B-teams die finance, SaaS, industrie, consulting en enterprise accounts in Zurich targeten" : "B2B teams targeting finance, SaaS, industry, consulting and enterprise accounts in Zurich",
    answer: isDe ? "Eine Zuerich-Kampagne braucht native deutsche Copy, klare ROI-Argumente, Schweizer Referenzen und eine Segmentierung nach Branche, Account-Groesse und Kaufsignal." : locale === "fr" ? "Une campagne outbound a Zurich doit combiner copie allemande native, arguments ROI factuels, preuves suisses et segmentation par secteur, taille de compte et signal d'achat." : locale === "nl" ? "Een outbound campagne in Zurich vraagt native Duitse copy, duidelijke ROI, Zwitserse proof en segmentatie per sector, accountgrootte en koopsignaal." : "A Zurich outbound campaign needs native German copy, clear ROI arguments, Swiss proof and segmentation by sector, account size and buying signal.",
    proofPoints: isDe ? ["CareerLunch: 54 qualifizierte Termine in DACH.", "Zuerich-Seite und Deutschschweiz-Seite existieren bereits.", "Native DE-Copy statt Uebersetzung."] : locale === "fr" ? ["CareerLunch : 54 rendez-vous qualifies en DACH.", "Pages Zurich et Suisse alemanique deja presentes.", "Copy allemande native, pas simple traduction."] : locale === "nl" ? ["CareerLunch: 54 gekwalificeerde DACH-afspraken.", "Zurich- en Duitstalig Zwitserland-pagina's bestaan al.", "Native Duitse copy in plaats van vertaling."] : ["CareerLunch: 54 qualified DACH meetings.", "Zurich and German-speaking Switzerland pages already exist.", "Native German copy, not translation."],
    localSignals: isDe ? ["Finance, Versicherungen, SaaS, Industrie und Consulting.", "Starker Wettbewerb in Inbox und LinkedIn.", "Sachlicher Ton performt besser als aggressive Sequenzen."] : ["Finance, insurance, SaaS, industry and consulting.", "High competition across inboxes and LinkedIn.", "Factual messages outperform aggressive sequences."],
    criteria: [
      { label: isDe ? "DE-Copy" : "German copy", detail: isDe ? "Deutsch als Ausgangssprache, nicht als Uebersetzung." : "German should be written as source copy, not translated afterthought." },
      { label: "ICP", detail: isDe ? "Accounts nach Branche, Standort und Entscheidungsrolle trennen." : "Separate accounts by industry, location and decision role." },
      { label: isDe ? "Signal" : "Signal", detail: isDe ? "Kaufsignale vor Sequenzstart verifizieren." : "Verify buying signals before sequencing." },
    ],
    marketNotes: isDe ? ["Zuerich ist der dichteste B2B-Markt der Schweiz, aber auch einer der meistbearbeiteten.", "devlo behandelt Zuerich als eigenen Batch innerhalb der Deutschschweiz."] : ["Zurich is Switzerland's densest B2B market, but also one of the most prospected.", "devlo treats Zurich as a separate batch inside German-speaking Switzerland."],
    faqs: [
      { question: isDe ? "Warum Zuerich separat bearbeiten?" : "Why treat Zurich separately?", answer: isDe ? "Zuerich hat andere Branchenkonzentration, Sprache und Wettbewerbsdichte als Romandie oder Deutschland." : "Zurich has different sector density, language expectations and inbox competition from Romandy or Germany." },
      { question: isDe ? "Soll die Copy auf Deutsch sein?" : "Should the copy be in German?", answer: isDe ? "In den meisten Faellen ja. Englisch kann fuer internationale Rollen funktionieren, aber deutsche Copy ist fuer lokale Entscheider glaubwuerdiger." : "Usually yes. English can work for international roles, but German copy is more credible for local decision-makers." },
      { question: isDe ? "Welche Kanaele nutzt devlo?" : "Which channels does devlo use?", answer: isDe ? "Cold E-Mail, LinkedIn und Telefon, nachdem TAM, Rollen und Signale validiert wurden." : "Cold email, LinkedIn and calling after TAM, roles and signals are validated." },
    ],
    relatedLinks: [
      { label: isDe ? "B2B-Akquise Zuerich" : "B2B prospecting Zurich", href: isDe ? "/de/b2b-akquise-zuerich" : locale === "fr" ? "/prospection-commerciale-zurich" : locale === "nl" ? "/nl/b2b-prospectie-zurich" : "/en/b2b-prospecting-zurich" },
      { label: isDe ? "B2B-Akquise Deutschschweiz" : "German-speaking Switzerland", href: isDe ? "/de/b2b-akquise-deutschschweiz" : locale === "fr" ? "/prospection-commerciale-suisse-alemanique" : locale === "nl" ? "/nl/b2b-prospectie-duitstalig-zwitserland" : "/en/b2b-prospecting-german-speaking-switzerland" },
      { label: isDe ? "Kostenlose Beratung" : locale === "fr" ? "Consultation gratuite" : locale === "nl" ? "Gratis consultatie" : "Free consultation", href: isDe ? "/de/beratung" : locale === "fr" ? "/consultation" : locale === "nl" ? "/nl/adviesgesprek" : "/en/consultation" },
    ],
  };
}

function makeSwitzerland(locale: SupportedLocale, path: string): Omit<ProgrammaticSeoPage, "frPath" | "locale" | "datePublished" | "dateModified"> {
  return {
    path,
    metaTitle: locale === "fr" ? "Agence outbound B2B Suisse | devlo" : locale === "de" ? "B2B-Outbound Agentur Schweiz | devlo" : locale === "nl" ? "B2B outbound bureau Zwitserland | devlo" : "B2B outbound agency Switzerland | devlo",
    metaDescription: locale === "fr" ? "Agence outbound B2B en Suisse pour campagnes cold email, LinkedIn et calling avec signaux d'achat, donnees propres et RDV qualifies." : locale === "de" ? "B2B-Outbound Agentur Schweiz fuer Cold E-Mail, LinkedIn und Telefon mit Kaufsignalen, sauberen Daten und qualifizierten Terminen." : locale === "nl" ? "B2B outbound bureau Zwitserland voor cold email, LinkedIn en bellen met koopsignalen, schone data en gekwalificeerde afspraken." : "B2B outbound agency in Switzerland for cold email, LinkedIn and calling campaigns with buying signals, clean data and qualified meetings.",
    h1: locale === "fr" ? "Agence outbound B2B en Suisse" : locale === "de" ? "B2B-Outbound Agentur in der Schweiz" : locale === "nl" ? "B2B outbound bureau in Zwitserland" : "B2B outbound agency in Switzerland",
    market: locale === "de" ? "Schweiz" : locale === "nl" ? "Zwitserland" : "Switzerland",
    service: "B2B outbound",
    serviceCategory: "B2B outbound prospecting",
    audience: locale === "fr" ? "entreprises B2B qui ciblent la Suisse, la Romandie, la Suisse alemanique ou le Tessin" : locale === "de" ? "B2B-Unternehmen mit Zielmarkt Schweiz, Westschweiz, Deutschschweiz oder Tessin" : locale === "nl" ? "B2B-bedrijven die Zwitserland, Romandie, Duitstalig Zwitserland of Ticino targeten" : "B2B companies targeting Switzerland, Romandy, German-speaking Switzerland or Ticino",
    answer: locale === "fr" ? "Une agence outbound B2B en Suisse doit gerer quatre contraintes ensemble : langues, precision ICP, conformite LPD/RGPD et qualite de rendez-vous." : locale === "de" ? "Eine B2B-Outbound-Agentur in der Schweiz muss Sprache, ICP-Praezision, DSG/DSGVO-Konformitaet und Terminqualitaet gemeinsam steuern." : locale === "nl" ? "Een B2B outbound bureau in Zwitserland moet taal, ICP-precisie, privacy compliance en afspraakkwaliteit samen beheren." : "A B2B outbound agency in Switzerland must manage language, ICP precision, privacy compliance and meeting quality together.",
    proofPoints: locale === "fr" ? ["devlo est basee a Rivaz, Vaud.", "Plus de 1'000 campagnes deployees.", "Equipe multilingue FR, EN, DE, NL."] : locale === "de" ? ["devlo ist in Rivaz, Waadt basiert.", "Mehr als 1'000 Kampagnen umgesetzt.", "Mehrsprachiges Team: FR, EN, DE, NL."] : locale === "nl" ? ["devlo is gevestigd in Rivaz, Vaud.", "Meer dan 1.000 campagnes uitgevoerd.", "Meertalig team: FR, EN, DE, NL."] : ["devlo is based in Rivaz, Vaud.", "More than 1,000 campaigns deployed.", "Multilingual team: FR, EN, DE, NL."],
    localSignals: ["Romandy, German-speaking Switzerland and Ticino require different copy.", "LPD/RGPD compliance affects data sourcing and outreach.", "Qualified meetings matter more than raw lead volume."],
    criteria: [
      { label: "Language", detail: "Separate FR, DE, EN and NL copy by market and buyer role." },
      { label: "Data", detail: "Build lists from verified ICP, buying signals and decision-maker checks." },
      { label: "Handoff", detail: "Track meetings and qualification, not only opens and replies." },
    ],
    marketNotes: ["Switzerland is small enough for reputation to matter and complex enough to require language-specific execution.", "The safest first programmatic layer should strengthen Swiss authority before expanding globally."],
    faqs: [
      { question: "Does devlo cover all Switzerland?", answer: "Yes. devlo covers Romandy, German-speaking Switzerland and national B2B campaigns, with separate copy and targeting where needed." },
      { question: "Which channels are included?", answer: "Cold email, LinkedIn and calling can be combined once TAM, signals, deliverability and CRM handoff are ready." },
      { question: "Is this page part of the indexed site?", answer: "Not yet. This pilot page is intentionally noindex until the SEO and GEO review is complete." },
    ],
    relatedLinks: [
      { label: locale === "fr" ? "Prospection B2B en Suisse" : locale === "de" ? "B2B-Akquise Schweiz" : locale === "nl" ? "B2B prospectie Zwitserland" : "B2B prospecting Switzerland", href: locale === "fr" ? "/prospection-commerciale-suisse" : locale === "de" ? "/de/b2b-akquise-schweiz" : locale === "nl" ? "/nl/b2b-prospectie-zwitserland" : "/en/b2b-prospecting-switzerland" },
      { label: "Outbound multicanal", href: locale === "fr" ? "/services/outbound-multicanal" : locale === "de" ? "/de/services/outbound-multikanal" : locale === "nl" ? "/nl/services/outbound-multichannel" : "/en/services/outbound-multichannel" },
      { label: locale === "fr" ? "Consultation gratuite" : locale === "de" ? "Kostenlose Beratung" : locale === "nl" ? "Gratis consultatie" : "Free consultation", href: locale === "fr" ? "/consultation" : locale === "de" ? "/de/beratung" : locale === "nl" ? "/nl/adviesgesprek" : "/en/consultation" },
    ],
  };
}

function makeParis(locale: SupportedLocale, path: string): Omit<ProgrammaticSeoPage, "frPath" | "locale" | "datePublished" | "dateModified"> {
  return {
    path,
    metaTitle: locale === "fr" ? "Agence prospection B2B Paris | devlo" : locale === "de" ? "B2B-Outbound Agentur Paris | devlo" : locale === "nl" ? "B2B outbound bureau Parijs | devlo" : "B2B outbound agency Paris | devlo",
    metaDescription: locale === "fr" ? "Prospection B2B a Paris pour SaaS, services, industrie, formation et grands comptes avec ciblage ICP, signaux et sequences multicanales." : locale === "de" ? "B2B-Outbound in Paris fuer SaaS, Services, Industrie, Training und Enterprise Accounts mit ICP, Signalen und Multichannel-Sequenzen." : locale === "nl" ? "B2B outbound in Parijs voor SaaS, diensten, industrie, training en enterprise accounts met ICP, signalen en multichannel sequences." : "B2B outbound in Paris for SaaS, services, industry, training and enterprise accounts with ICP targeting, signals and multichannel sequences.",
    h1: locale === "fr" ? "Agence de prospection B2B a Paris" : locale === "de" ? "B2B-Outbound Agentur in Paris" : locale === "nl" ? "B2B outbound bureau in Parijs" : "B2B outbound agency in Paris",
    market: locale === "nl" ? "Parijs" : "Paris",
    service: locale === "fr" ? "prospection B2B" : "B2B outbound",
    serviceCategory: "B2B outbound prospecting",
    audience: locale === "fr" ? "entreprises B2B qui ciblent Paris, Ile-de-France, SaaS, services, formation, industrie et grands comptes" : "B2B companies targeting Paris, Ile-de-France, SaaS, services, training, industry and enterprise accounts",
    answer: locale === "fr" ? "A Paris, une campagne B2B doit eviter le volume indistinct et prioriser l'ICP, le secteur, la seniorite du decideur et le signal qui justifie le premier message." : "In Paris, B2B outbound should avoid generic volume and prioritize ICP fit, sector, decision-maker seniority and the signal that justifies the first message.",
    proofPoints: locale === "fr" ? ["Cas clients francophones dans formation, biodiversite, biocarburants et audiovisuel.", "Campagnes conformes RGPD avec opt-out et tracabilite.", "Paris peut servir de batch France avant extension nationale."] : ["French-language case studies in training, biodiversity, biofuels and audiovisual.", "GDPR-aware campaigns with opt-out and traceability.", "Paris can be the first France batch before national expansion."],
    localSignals: ["SaaS, services, training, industry and enterprise accounts.", "High inbox competition and stronger need for specificity.", "French copy should be concise, contextual and proof-led."],
    criteria: [
      { label: "ICP", detail: "Split Paris by sector, headcount and commercial maturity." },
      { label: "Signal", detail: "Anchor the message in a business reason, not only a location." },
      { label: "Compliance", detail: "Keep GDPR basis, opt-out and professional data traceable." },
    ],
    marketNotes: ["Paris has high volume and high competition. A useful page should explain how to choose the right batch rather than promise generic lead volume.", "devlo should treat Paris as an ICP-core expansion only when the offer can be sold in French and handed off properly."],
    faqs: [
      { question: locale === "fr" ? "Pourquoi commencer par Paris ?" : "Why start with Paris?", answer: locale === "fr" ? "Paris concentre les sieges, SaaS, services et grands comptes. C'est souvent le premier batch francais lorsque l'ICP est suffisamment defini." : "Paris concentrates headquarters, SaaS, services and enterprise accounts. It is often the first French batch when ICP is clear enough." },
      { question: locale === "fr" ? "La prospection a Paris est-elle differente de la Suisse ?" : "Is Paris outreach different from Switzerland?", answer: locale === "fr" ? "Oui. Le volume est plus important, la concurrence inbox aussi. Les messages doivent etre encore plus segmentes pour eviter l'effet masse." : "Yes. Volume is higher and inbox competition is higher too. Messages need sharper segmentation to avoid generic outreach." },
      { question: locale === "fr" ? "Cette page est-elle indexee ?" : "Is this page indexed?", answer: locale === "fr" ? "Non. Cette page pilot reste noindex jusqu'a validation SEO, GEO et editorial." : "No. This pilot page stays noindex until SEO, GEO and editorial review is complete." },
    ],
    relatedLinks: [
      { label: locale === "fr" ? "Prospection B2B en France" : "B2B prospecting France", href: locale === "fr" ? "/prospection-commerciale-france" : locale === "de" ? "/de/b2b-akquise-frankreich" : locale === "nl" ? "/nl/b2b-prospectie-frankrijk" : "/en/b2b-prospecting-france" },
      { label: locale === "fr" ? "Cold email B2B" : "B2B cold email", href: locale === "fr" ? "/services/cold-email" : locale === "de" ? "/de/services/cold-email" : locale === "nl" ? "/nl/services/cold-email" : "/en/services/cold-email" },
      { label: locale === "fr" ? "Consultation gratuite" : locale === "de" ? "Kostenlose Beratung" : locale === "nl" ? "Gratis consultatie" : "Free consultation", href: locale === "fr" ? "/consultation" : locale === "de" ? "/de/beratung" : locale === "nl" ? "/nl/adviesgesprek" : "/en/consultation" },
    ],
  };
}

export const PROGRAMMATIC_SEO_PILOT_PAGES: ProgrammaticSeoPage[] = [...cells, ...sharedCells].flatMap((cell) =>
  (Object.entries(cell.localizations) as Array<[SupportedLocale, Omit<ProgrammaticSeoPage, "frPath" | "locale" | "datePublished" | "dateModified">]>).map(([locale, page]) => ({
    ...page,
    frPath: cell.frPath,
    locale,
    datePublished,
    dateModified,
  })),
);

export function getProgrammaticSeoPilotPage(frPath: string, locale: SupportedLocale): ProgrammaticSeoPage | null {
  return PROGRAMMATIC_SEO_PILOT_PAGES.find((page) => page.frPath === frPath && page.locale === locale) ?? null;
}
