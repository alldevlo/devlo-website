import type { SlugMapEntry, SupportedLocale } from "@/lib/i18n/slug-map";

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

export type ProgrammaticSeoRouteEntry = {
  pageId: string;
  frPath: string;
  entry: SlugMapEntry;
};

type LocaleText = Record<SupportedLocale, string>;

type CityProfile = {
  key: string;
  names: LocaleText;
  slugs: LocaleText;
  country: LocaleText;
  focus: LocaleText;
  sectors: Record<SupportedLocale, string[]>;
  proof: LocaleText;
  tier: "switzerland" | "dach" | "france" | "europe";
};

const datePublished = "2026-05-10";
const dateModified = "2026-05-10";

const cityProfiles: CityProfile[] = [
  {
    key: "geneva",
    names: { fr: "Genève", en: "Geneva", de: "Genf", nl: "Genève" },
    slugs: {
      fr: "agence-prospection-b2b-geneve",
      en: "b2b-prospecting-agency-geneva",
      de: "b2b-prospecting-agentur-genf",
      nl: "b2b-prospectie-bureau-geneve",
    },
    country: { fr: "Suisse", en: "Switzerland", de: "Schweiz", nl: "Zwitserland" },
    focus: {
      fr: "finance, ONG, services professionnels, SaaS et sièges internationaux",
      en: "finance, NGOs, professional services, SaaS and international headquarters",
      de: "Finanzdienstleister, NGOs, Professional Services, SaaS und internationale Headquarters",
      nl: "finance, ngo's, zakelijke diensten, SaaS en internationale hoofdkantoren",
    },
    sectors: {
      fr: ["Finance et négoce", "ONG et organisations internationales", "Services B2B bilingues"],
      en: ["Finance and trading", "NGOs and international organizations", "Bilingual B2B services"],
      de: ["Finance und Handel", "NGOs und internationale Organisationen", "Zweisprachige B2B-Services"],
      nl: ["Finance en handel", "Ngo's en internationale organisaties", "Tweetalige B2B-diensten"],
    },
    proof: {
      fr: "campagnes FR/EN pour décideurs suisses et internationaux",
      en: "FR/EN campaigns for Swiss and international decision-makers",
      de: "FR/EN-Kampagnen für Schweizer und internationale Entscheider",
      nl: "FR/EN-campagnes voor Zwitserse en internationale beslissers",
    },
    tier: "switzerland",
  },
  {
    key: "lausanne",
    names: { fr: "Lausanne", en: "Lausanne", de: "Lausanne", nl: "Lausanne" },
    slugs: {
      fr: "agence-prospection-b2b-lausanne",
      en: "b2b-prospecting-agency-lausanne",
      de: "b2b-prospecting-agentur-lausanne",
      nl: "b2b-prospectie-bureau-lausanne",
    },
    country: { fr: "Suisse", en: "Switzerland", de: "Schweiz", nl: "Zwitserland" },
    focus: {
      fr: "PME vaudoises, scale-ups, EPFL, medtech, formation et services",
      en: "Vaud SMEs, scale-ups, EPFL-related ecosystems, medtech, training and services",
      de: "KMU in Waadt, Scale-ups, EPFL-nahe Ökosysteme, Medtech, Training und Services",
      nl: "Vaud-kmo's, scale-ups, EPFL-ecosystemen, medtech, training en diensten",
    },
    sectors: {
      fr: ["EPFL et innovation", "PME vaudoises", "Medtech, formation et services B2B"],
      en: ["EPFL and innovation", "Vaud SMEs", "Medtech, training and B2B services"],
      de: ["EPFL und Innovation", "KMU in Waadt", "Medtech, Training und B2B-Services"],
      nl: ["EPFL en innovatie", "Vaud-kmo's", "Medtech, training en B2B-diensten"],
    },
    proof: {
      fr: "présence devlo dans le canton de Vaud et références en Suisse romande",
      en: "devlo presence in Vaud and French-speaking Switzerland references",
      de: "devlo-Präsenz im Kanton Waadt und Referenzen in der Westschweiz",
      nl: "devlo-aanwezigheid in Vaud en referenties in Franstalig Zwitserland",
    },
    tier: "switzerland",
  },
  {
    key: "zurich",
    names: { fr: "Zurich", en: "Zurich", de: "Zürich", nl: "Zürich" },
    slugs: {
      fr: "agence-prospection-b2b-zurich",
      en: "b2b-prospecting-agency-zurich",
      de: "b2b-prospecting-agentur-zuerich",
      nl: "b2b-prospectie-bureau-zuerich",
    },
    country: { fr: "Suisse", en: "Switzerland", de: "Schweiz", nl: "Zwitserland" },
    focus: {
      fr: "SaaS, finance, assurance, industrie, conseil et comptes DACH",
      en: "SaaS, finance, insurance, industry, consulting and DACH accounts",
      de: "SaaS, Finance, Versicherung, Industrie, Beratung und DACH-Accounts",
      nl: "SaaS, finance, verzekeringen, industrie, consulting en DACH-accounts",
    },
    sectors: {
      fr: ["Finance et assurance", "SaaS et technologie", "Comptes DACH et sièges suisses"],
      en: ["Finance and insurance", "SaaS and technology", "DACH accounts and Swiss headquarters"],
      de: ["Finance und Versicherung", "SaaS und Technologie", "DACH-Accounts und Schweizer Headquarters"],
      nl: ["Finance en verzekeringen", "SaaS en technologie", "DACH-accounts en Zwitserse hoofdkantoren"],
    },
    proof: {
      fr: "séquences multilingues FR/DE/EN adaptées aux décideurs suisses",
      en: "FR/DE/EN sequences adapted to Swiss decision-makers",
      de: "FR/DE/EN-Sequenzen für Schweizer Entscheider",
      nl: "FR/DE/EN-sequenties voor Zwitserse beslissers",
    },
    tier: "switzerland",
  },
  {
    key: "basel",
    names: { fr: "Bâle", en: "Basel", de: "Basel", nl: "Basel" },
    slugs: {
      fr: "agence-prospection-b2b-bale",
      en: "b2b-prospecting-agency-basel",
      de: "b2b-prospecting-agentur-basel",
      nl: "b2b-prospectie-bureau-basel",
    },
    country: { fr: "Suisse", en: "Switzerland", de: "Schweiz", nl: "Zwitserland" },
    focus: {
      fr: "pharma, biotech, industrie, logistique et services transfrontaliers",
      en: "pharma, biotech, industry, logistics and cross-border services",
      de: "Pharma, Biotech, Industrie, Logistik und grenzüberschreitende Services",
      nl: "farma, biotech, industrie, logistiek en grensoverschrijdende diensten",
    },
    sectors: {
      fr: ["Pharma et biotech", "Industrie et supply chain", "Marché trinational Suisse, France, Allemagne"],
      en: ["Pharma and biotech", "Industry and supply chain", "Tri-national Switzerland, France and Germany market"],
      de: ["Pharma und Biotech", "Industrie und Supply Chain", "Trinationaler Markt Schweiz, Frankreich und Deutschland"],
      nl: ["Farma en biotech", "Industrie en supply chain", "Drielandenmarkt Zwitserland, Frankrijk en Duitsland"],
    },
    proof: {
      fr: "segmentation par secteur réglementé, maturité commerciale et langue de décision",
      en: "segmentation by regulated sector, commercial maturity and decision language",
      de: "Segmentierung nach regulierter Branche, kommerzieller Reife und Entscheidungssprache",
      nl: "segmentatie op gereguleerde sector, commerciële maturiteit en beslissingstaal",
    },
    tier: "switzerland",
  },
  {
    key: "bern",
    names: { fr: "Berne", en: "Bern", de: "Bern", nl: "Bern" },
    slugs: {
      fr: "agence-prospection-b2b-berne",
      en: "b2b-prospecting-agency-bern",
      de: "b2b-prospecting-agentur-bern",
      nl: "b2b-prospectie-bureau-bern",
    },
    country: { fr: "Suisse", en: "Switzerland", de: "Schweiz", nl: "Zwitserland" },
    focus: {
      fr: "secteur public, associations, santé, industrie et services suisses",
      en: "public sector, associations, health, industry and Swiss services",
      de: "öffentlicher Sektor, Verbände, Gesundheit, Industrie und Schweizer Services",
      nl: "publieke sector, verenigingen, zorg, industrie en Zwitserse diensten",
    },
    sectors: {
      fr: ["Organisations publiques", "Associations et fédérations", "Santé, industrie et services"],
      en: ["Public organizations", "Associations and federations", "Health, industry and services"],
      de: ["Öffentliche Organisationen", "Verbände und Föderationen", "Gesundheit, Industrie und Services"],
      nl: ["Publieke organisaties", "Verenigingen en federaties", "Zorg, industrie en diensten"],
    },
    proof: {
      fr: "messages sobres pour cycles longs et décisions multiparties",
      en: "precise messaging for longer cycles and multi-stakeholder decisions",
      de: "präzises Messaging für längere Zyklen und Entscheidungen mit mehreren Stakeholdern",
      nl: "precieze messaging voor langere cycli en beslissingen met meerdere stakeholders",
    },
    tier: "switzerland",
  },
  {
    key: "zug",
    names: { fr: "Zoug", en: "Zug", de: "Zug", nl: "Zug" },
    slugs: {
      fr: "agence-prospection-b2b-zoug",
      en: "b2b-prospecting-agency-zug",
      de: "b2b-prospecting-agentur-zug",
      nl: "b2b-prospectie-bureau-zug",
    },
    country: { fr: "Suisse", en: "Switzerland", de: "Schweiz", nl: "Zwitserland" },
    focus: {
      fr: "SaaS, crypto, fintech, holdings, conseil et sièges internationaux",
      en: "SaaS, crypto, fintech, holdings, consulting and international headquarters",
      de: "SaaS, Crypto, Fintech, Holdings, Beratung und internationale Headquarters",
      nl: "SaaS, crypto, fintech, holdings, consulting en internationale hoofdkantoren",
    },
    sectors: {
      fr: ["Fintech et crypto", "Holdings et sièges internationaux", "SaaS et conseil"],
      en: ["Fintech and crypto", "Holdings and international headquarters", "SaaS and consulting"],
      de: ["Fintech und Crypto", "Holdings und internationale Headquarters", "SaaS und Beratung"],
      nl: ["Fintech en crypto", "Holdings en internationale hoofdkantoren", "SaaS en consulting"],
    },
    proof: {
      fr: "qualification par signaux d'achat pour comptes compacts à forte valeur",
      en: "buying-signal qualification for compact, high-value accounts",
      de: "Kaufsignal-Qualifikation für kompakte Accounts mit hohem Wert",
      nl: "kwalificatie op koopsignalen voor compacte accounts met hoge waarde",
    },
    tier: "switzerland",
  },
  {
    key: "winterthur",
    names: { fr: "Winterthour", en: "Winterthur", de: "Winterthur", nl: "Winterthur" },
    slugs: {
      fr: "agence-prospection-b2b-winterthour",
      en: "b2b-prospecting-agency-winterthur",
      de: "b2b-prospecting-agentur-winterthur",
      nl: "b2b-prospectie-bureau-winterthur",
    },
    country: { fr: "Suisse", en: "Switzerland", de: "Schweiz", nl: "Zwitserland" },
    focus: {
      fr: "industrie, énergie, assurance, PME et comptes proches de Zurich",
      en: "industry, energy, insurance, SMEs and accounts near Zurich",
      de: "Industrie, Energie, Versicherung, KMU und Accounts nahe Zürich",
      nl: "industrie, energie, verzekeringen, kmo's en accounts rond Zürich",
    },
    sectors: {
      fr: ["Industrie et énergie", "Assurance et services", "PME autour de Zurich"],
      en: ["Industry and energy", "Insurance and services", "SMEs around Zurich"],
      de: ["Industrie und Energie", "Versicherung und Services", "KMU rund um Zürich"],
      nl: ["Industrie en energie", "Verzekeringen en diensten", "Kmo's rond Zürich"],
    },
    proof: {
      fr: "ciblage local précis avant extension vers Zurich et la Suisse alémanique",
      en: "precise local targeting before expansion to Zurich and German-speaking Switzerland",
      de: "präzises lokales Targeting vor Expansion nach Zürich und in die Deutschschweiz",
      nl: "precieze lokale targeting voor uitbreiding naar Zürich en Duitstalig Zwitserland",
    },
    tier: "switzerland",
  },
  {
    key: "lugano",
    names: { fr: "Lugano", en: "Lugano", de: "Lugano", nl: "Lugano" },
    slugs: {
      fr: "agence-prospection-b2b-lugano",
      en: "b2b-prospecting-agency-lugano",
      de: "b2b-prospecting-agentur-lugano",
      nl: "b2b-prospectie-bureau-lugano",
    },
    country: { fr: "Suisse", en: "Switzerland", de: "Schweiz", nl: "Zwitserland" },
    focus: {
      fr: "finance, immobilier, services, industrie et passerelles Suisse-Italie",
      en: "finance, real estate, services, industry and Switzerland-Italy bridges",
      de: "Finance, Immobilien, Services, Industrie und Schweiz-Italien-Brücken",
      nl: "finance, vastgoed, diensten, industrie en Zwitserland-Italië-bruggen",
    },
    sectors: {
      fr: ["Finance et immobilier", "Services B2B", "Relations Suisse-Italie"],
      en: ["Finance and real estate", "B2B services", "Switzerland-Italy relationships"],
      de: ["Finance und Immobilien", "B2B-Services", "Schweiz-Italien-Beziehungen"],
      nl: ["Finance en vastgoed", "B2B-diensten", "Zwitserland-Italië-relaties"],
    },
    proof: {
      fr: "adaptation des messages quand l'italien, le français ou l'anglais changent le taux de réponse",
      en: "message adaptation when Italian, French or English changes reply rates",
      de: "Messaging-Anpassung, wenn Italienisch, Französisch oder Englisch die Antwortrate verändert",
      nl: "messaging-aanpassing wanneer Italiaans, Frans of Engels de reply rate verandert",
    },
    tier: "switzerland",
  },
  {
    key: "st-gallen",
    names: { fr: "Saint-Gall", en: "St. Gallen", de: "St. Gallen", nl: "Sankt Gallen" },
    slugs: {
      fr: "agence-prospection-b2b-saint-gall",
      en: "b2b-prospecting-agency-st-gallen",
      de: "b2b-prospecting-agentur-st-gallen",
      nl: "b2b-prospectie-bureau-sankt-gallen",
    },
    country: { fr: "Suisse", en: "Switzerland", de: "Schweiz", nl: "Zwitserland" },
    focus: {
      fr: "industrie, textile, éducation, services et PME de Suisse orientale",
      en: "industry, textiles, education, services and Eastern Switzerland SMEs",
      de: "Industrie, Textil, Bildung, Services und KMU in der Ostschweiz",
      nl: "industrie, textiel, onderwijs, diensten en kmo's in Oost-Zwitserland",
    },
    sectors: {
      fr: ["Industrie et textile", "Éducation et services", "PME de Suisse orientale"],
      en: ["Industry and textiles", "Education and services", "Eastern Switzerland SMEs"],
      de: ["Industrie und Textil", "Bildung und Services", "KMU in der Ostschweiz"],
      nl: ["Industrie en textiel", "Onderwijs en diensten", "Kmo's in Oost-Zwitserland"],
    },
    proof: {
      fr: "séquences locales avant extension vers Zurich, le Vorarlberg ou le sud de l'Allemagne",
      en: "local sequences before expansion to Zurich, Vorarlberg or southern Germany",
      de: "lokale Sequenzen vor Expansion nach Zürich, Vorarlberg oder Süddeutschland",
      nl: "lokale sequenties voor uitbreiding naar Zürich, Vorarlberg of Zuid-Duitsland",
    },
    tier: "switzerland",
  },
  {
    key: "switzerland",
    names: { fr: "Suisse", en: "Switzerland", de: "Schweiz", nl: "Zwitserland" },
    slugs: {
      fr: "agence-prospection-b2b-suisse",
      en: "b2b-prospecting-agency-switzerland",
      de: "b2b-prospecting-agentur-schweiz",
      nl: "b2b-prospectie-bureau-zwitserland",
    },
    country: { fr: "Suisse", en: "Switzerland", de: "Schweiz", nl: "Zwitserland" },
    focus: {
      fr: "Suisse romande, Suisse alémanique, Tessin, PME, SaaS, industrie et services",
      en: "French-speaking Switzerland, German-speaking Switzerland, Ticino, SMEs, SaaS, industry and services",
      de: "Westschweiz, Deutschschweiz, Tessin, KMU, SaaS, Industrie und Services",
      nl: "Franstalig Zwitserland, Duitstalig Zwitserland, Ticino, kmo's, SaaS, industrie en diensten",
    },
    sectors: {
      fr: ["Suisse romande et alémanique", "PME, SaaS et industrie", "Campagnes FR/DE/EN"],
      en: ["French and German-speaking Switzerland", "SMEs, SaaS and industry", "FR/DE/EN campaigns"],
      de: ["Westschweiz und Deutschschweiz", "KMU, SaaS und Industrie", "FR/DE/EN-Kampagnen"],
      nl: ["Franstalig en Duitstalig Zwitserland", "Kmo's, SaaS en industrie", "FR/DE/EN-campagnes"],
    },
    proof: {
      fr: "priorisation par canton, langue, ICP et signaux d'achat",
      en: "prioritization by canton, language, ICP and buying signals",
      de: "Priorisierung nach Kanton, Sprache, ICP und Kaufsignalen",
      nl: "prioritering op kanton, taal, ICP en koopsignalen",
    },
    tier: "switzerland",
  },
  {
    key: "paris",
    names: { fr: "Paris", en: "Paris", de: "Paris", nl: "Parijs" },
    slugs: {
      fr: "agence-prospection-b2b-paris",
      en: "b2b-prospecting-agency-paris",
      de: "b2b-prospecting-agentur-paris",
      nl: "b2b-prospectie-bureau-parijs",
    },
    country: { fr: "France", en: "France", de: "Frankreich", nl: "Frankrijk" },
    focus: {
      fr: "SaaS, conseil, finance, cybersécurité, industrie et scale-ups françaises",
      en: "SaaS, consulting, finance, cybersecurity, industry and French scale-ups",
      de: "SaaS, Beratung, Finance, Cybersecurity, Industrie und französische Scale-ups",
      nl: "SaaS, consulting, finance, cybersecurity, industrie en Franse scale-ups",
    },
    sectors: {
      fr: ["SaaS et scale-ups", "Conseil et finance", "Cybersécurité et industrie"],
      en: ["SaaS and scale-ups", "Consulting and finance", "Cybersecurity and industry"],
      de: ["SaaS und Scale-ups", "Beratung und Finance", "Cybersecurity und Industrie"],
      nl: ["SaaS en scale-ups", "Consulting en finance", "Cybersecurity en industrie"],
    },
    proof: {
      fr: "séquences francophones à forte précision pour comptes à décision rapide",
      en: "high-precision French-language sequences for fast-moving accounts",
      de: "präzise französischsprachige Sequenzen für schnell entscheidende Accounts",
      nl: "precieze Franstalige sequenties voor accounts met snelle besluitvorming",
    },
    tier: "france",
  },
  {
    key: "lyon",
    names: { fr: "Lyon", en: "Lyon", de: "Lyon", nl: "Lyon" },
    slugs: {
      fr: "agence-prospection-b2b-lyon",
      en: "b2b-prospecting-agency-lyon",
      de: "b2b-prospecting-agentur-lyon",
      nl: "b2b-prospectie-bureau-lyon",
    },
    country: { fr: "France", en: "France", de: "Frankreich", nl: "Frankrijk" },
    focus: {
      fr: "industrie, santé, logiciels B2B, services et PME de la région Auvergne-Rhône-Alpes",
      en: "industry, health, B2B software, services and Auvergne-Rhône-Alpes SMEs",
      de: "Industrie, Gesundheit, B2B-Software, Services und KMU in Auvergne-Rhône-Alpes",
      nl: "industrie, zorg, B2B-software, diensten en kmo's in Auvergne-Rhône-Alpes",
    },
    sectors: {
      fr: ["Industrie et santé", "Logiciels B2B", "PME régionales"],
      en: ["Industry and health", "B2B software", "Regional SMEs"],
      de: ["Industrie und Gesundheit", "B2B-Software", "Regionale KMU"],
      nl: ["Industrie en zorg", "B2B-software", "Regionale kmo's"],
    },
    proof: {
      fr: "ciblage par bassins industriels et maturité commerciale",
      en: "targeting by industrial clusters and commercial maturity",
      de: "Targeting nach Industrie-Clustern und kommerzieller Reife",
      nl: "targeting op industriële clusters en commerciële maturiteit",
    },
    tier: "france",
  },
  {
    key: "marseille",
    names: { fr: "Marseille", en: "Marseille", de: "Marseille", nl: "Marseille" },
    slugs: {
      fr: "agence-prospection-b2b-marseille",
      en: "b2b-prospecting-agency-marseille",
      de: "b2b-prospecting-agentur-marseille",
      nl: "b2b-prospectie-bureau-marseille",
    },
    country: { fr: "France", en: "France", de: "Frankreich", nl: "Frankrijk" },
    focus: {
      fr: "logistique, énergie, services, industrie maritime et comptes méditerranéens",
      en: "logistics, energy, services, maritime industry and Mediterranean accounts",
      de: "Logistik, Energie, Services, maritime Industrie und mediterrane Accounts",
      nl: "logistiek, energie, diensten, maritieme industrie en Mediterrane accounts",
    },
    sectors: {
      fr: ["Logistique et portuaire", "Énergie et industrie", "Services méditerranéens"],
      en: ["Logistics and port activity", "Energy and industry", "Mediterranean services"],
      de: ["Logistik und Hafenwirtschaft", "Energie und Industrie", "Mediterrane Services"],
      nl: ["Logistiek en havenactiviteit", "Energie en industrie", "Mediterrane diensten"],
    },
    proof: {
      fr: "segmentation entre comptes locaux, régionaux et méditerranéens",
      en: "segmentation between local, regional and Mediterranean accounts",
      de: "Segmentierung zwischen lokalen, regionalen und mediterranen Accounts",
      nl: "segmentatie tussen lokale, regionale en Mediterrane accounts",
    },
    tier: "france",
  },
  {
    key: "munich",
    names: { fr: "Munich", en: "Munich", de: "München", nl: "München" },
    slugs: {
      fr: "agence-prospection-b2b-munich",
      en: "b2b-prospecting-agency-munich",
      de: "b2b-prospecting-agentur-muenchen",
      nl: "b2b-prospectie-bureau-muenchen",
    },
    country: { fr: "Allemagne", en: "Germany", de: "Deutschland", nl: "Duitsland" },
    focus: {
      fr: "SaaS, industrie, mobilité, deep tech, conseil et comptes DACH",
      en: "SaaS, industry, mobility, deep tech, consulting and DACH accounts",
      de: "SaaS, Industrie, Mobility, Deep Tech, Beratung und DACH-Accounts",
      nl: "SaaS, industrie, mobiliteit, deep tech, consulting en DACH-accounts",
    },
    sectors: {
      fr: ["SaaS et deep tech", "Industrie et mobilité", "Comptes DACH"],
      en: ["SaaS and deep tech", "Industry and mobility", "DACH accounts"],
      de: ["SaaS und Deep Tech", "Industrie und Mobility", "DACH-Accounts"],
      nl: ["SaaS en deep tech", "Industrie en mobiliteit", "DACH-accounts"],
    },
    proof: {
      fr: "cadences allemandes sobres avec personnalisation par compte",
      en: "restrained German cadences with account-level personalization",
      de: "zurückhaltende deutsche Sequenzen mit Personalisierung pro Account",
      nl: "sobere Duitse sequenties met personalisatie per account",
    },
    tier: "dach",
  },
  {
    key: "berlin",
    names: { fr: "Berlin", en: "Berlin", de: "Berlin", nl: "Berlijn" },
    slugs: {
      fr: "agence-prospection-b2b-berlin",
      en: "b2b-prospecting-agency-berlin",
      de: "b2b-prospecting-agentur-berlin",
      nl: "b2b-prospectie-bureau-berlijn",
    },
    country: { fr: "Allemagne", en: "Germany", de: "Deutschland", nl: "Duitsland" },
    focus: {
      fr: "SaaS, IA, marketplaces, climat, fintech et scale-ups européennes",
      en: "SaaS, AI, marketplaces, climate, fintech and European scale-ups",
      de: "SaaS, KI, Marketplaces, Climate, Fintech und europäische Scale-ups",
      nl: "SaaS, AI, marketplaces, klimaat, fintech en Europese scale-ups",
    },
    sectors: {
      fr: ["SaaS et IA", "Fintech et marketplaces", "Climat et scale-ups"],
      en: ["SaaS and AI", "Fintech and marketplaces", "Climate and scale-ups"],
      de: ["SaaS und KI", "Fintech und Marketplaces", "Climate und Scale-ups"],
      nl: ["SaaS en AI", "Fintech en marketplaces", "Klimaat en scale-ups"],
    },
    proof: {
      fr: "messages courts pour équipes internationales et cycles de test rapides",
      en: "short messages for international teams and fast test cycles",
      de: "kurze Messages für internationale Teams und schnelle Testzyklen",
      nl: "korte berichten voor internationale teams en snelle testcycli",
    },
    tier: "dach",
  },
  {
    key: "hamburg",
    names: { fr: "Hambourg", en: "Hamburg", de: "Hamburg", nl: "Hamburg" },
    slugs: {
      fr: "agence-prospection-b2b-hambourg",
      en: "b2b-prospecting-agency-hamburg",
      de: "b2b-prospecting-agentur-hamburg",
      nl: "b2b-prospectie-bureau-hamburg",
    },
    country: { fr: "Allemagne", en: "Germany", de: "Deutschland", nl: "Duitsland" },
    focus: {
      fr: "logistique, médias, e-commerce, industrie et services B2B",
      en: "logistics, media, e-commerce, industry and B2B services",
      de: "Logistik, Medien, E-Commerce, Industrie und B2B-Services",
      nl: "logistiek, media, e-commerce, industrie en B2B-diensten",
    },
    sectors: {
      fr: ["Logistique et portuaire", "Médias et e-commerce", "Industrie et services"],
      en: ["Logistics and port activity", "Media and e-commerce", "Industry and services"],
      de: ["Logistik und Hafenwirtschaft", "Medien und E-Commerce", "Industrie und Services"],
      nl: ["Logistiek en havenactiviteit", "Media en e-commerce", "Industrie en diensten"],
    },
    proof: {
      fr: "séquences par verticales pour éviter les listes génériques",
      en: "vertical-specific sequences that avoid generic lists",
      de: "vertikale Sequenzen statt generischer Listen",
      nl: "verticale sequenties in plaats van generieke lijsten",
    },
    tier: "dach",
  },
  {
    key: "frankfurt",
    names: { fr: "Francfort", en: "Frankfurt", de: "Frankfurt", nl: "Frankfurt" },
    slugs: {
      fr: "agence-prospection-b2b-francfort",
      en: "b2b-prospecting-agency-frankfurt",
      de: "b2b-prospecting-agentur-frankfurt",
      nl: "b2b-prospectie-bureau-frankfurt",
    },
    country: { fr: "Allemagne", en: "Germany", de: "Deutschland", nl: "Duitsland" },
    focus: {
      fr: "finance, B2B SaaS, conseil, assurance et comptes d'entreprise",
      en: "finance, B2B SaaS, consulting, insurance and enterprise accounts",
      de: "Finance, B2B SaaS, Beratung, Versicherung und Enterprise-Accounts",
      nl: "finance, B2B SaaS, consulting, verzekeringen en enterprise accounts",
    },
    sectors: {
      fr: ["Finance et assurance", "B2B SaaS", "Conseil et grands comptes"],
      en: ["Finance and insurance", "B2B SaaS", "Consulting and enterprise"],
      de: ["Finance und Versicherung", "B2B SaaS", "Beratung und Enterprise"],
      nl: ["Finance en verzekeringen", "B2B SaaS", "Consulting en enterprise"],
    },
    proof: {
      fr: "qualification stricte pour acheteurs réglementés et grands comptes",
      en: "strict qualification for regulated buyers and enterprise accounts",
      de: "strikte Qualifikation für regulierte Käufer und Enterprise-Accounts",
      nl: "strikte kwalificatie voor gereguleerde kopers en enterprise accounts",
    },
    tier: "dach",
  },
  {
    key: "vienna",
    names: { fr: "Vienne", en: "Vienna", de: "Wien", nl: "Wenen" },
    slugs: {
      fr: "agence-prospection-b2b-vienne",
      en: "b2b-prospecting-agency-vienna",
      de: "b2b-prospecting-agentur-wien",
      nl: "b2b-prospectie-bureau-wenen",
    },
    country: { fr: "Autriche", en: "Austria", de: "Österreich", nl: "Oostenrijk" },
    focus: {
      fr: "SaaS, conseil, institutions, industrie et expansion DACH",
      en: "SaaS, consulting, institutions, industry and DACH expansion",
      de: "SaaS, Beratung, Institutionen, Industrie und DACH-Expansion",
      nl: "SaaS, consulting, instellingen, industrie en DACH-expansie",
    },
    sectors: {
      fr: ["SaaS et conseil", "Institutions et industrie", "Expansion DACH"],
      en: ["SaaS and consulting", "Institutions and industry", "DACH expansion"],
      de: ["SaaS und Beratung", "Institutionen und Industrie", "DACH-Expansion"],
      nl: ["SaaS en consulting", "Instellingen en industrie", "DACH-expansie"],
    },
    proof: {
      fr: "approche DACH avec adaptation au niveau de formalité autrichien",
      en: "DACH approach adapted to Austrian formality levels",
      de: "DACH-Ansatz mit Anpassung an österreichische Formalität",
      nl: "DACH-aanpak aangepast aan Oostenrijkse formaliteit",
    },
    tier: "dach",
  },
  {
    key: "amsterdam",
    names: { fr: "Amsterdam", en: "Amsterdam", de: "Amsterdam", nl: "Amsterdam" },
    slugs: {
      fr: "agence-prospection-b2b-amsterdam",
      en: "b2b-prospecting-agency-amsterdam",
      de: "b2b-prospecting-agentur-amsterdam",
      nl: "b2b-prospectie-bureau-amsterdam",
    },
    country: { fr: "Pays-Bas", en: "Netherlands", de: "Niederlande", nl: "Nederland" },
    focus: {
      fr: "SaaS, fintech, e-commerce, services et sièges européens",
      en: "SaaS, fintech, e-commerce, services and European headquarters",
      de: "SaaS, Fintech, E-Commerce, Services und europäische Headquarters",
      nl: "SaaS, fintech, e-commerce, diensten en Europese hoofdkantoren",
    },
    sectors: {
      fr: ["SaaS et fintech", "E-commerce et services", "Sièges européens"],
      en: ["SaaS and fintech", "E-commerce and services", "European headquarters"],
      de: ["SaaS und Fintech", "E-Commerce und Services", "Europäische Headquarters"],
      nl: ["SaaS en fintech", "E-commerce en diensten", "Europese hoofdkantoren"],
    },
    proof: {
      fr: "messages directs et testables pour marchés anglophones et néerlandophones",
      en: "direct, testable messaging for English and Dutch-speaking markets",
      de: "direkte, testbare Messages für englisch- und niederländischsprachige Märkte",
      nl: "directe, testbare messaging voor Engels- en Nederlandstalige markten",
    },
    tier: "europe",
  },
  {
    key: "london",
    names: { fr: "Londres", en: "London", de: "London", nl: "Londen" },
    slugs: {
      fr: "agence-prospection-b2b-londres",
      en: "b2b-prospecting-agency-london",
      de: "b2b-prospecting-agentur-london",
      nl: "b2b-prospectie-bureau-londen",
    },
    country: { fr: "Royaume-Uni", en: "United Kingdom", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
    focus: {
      fr: "SaaS, finance, conseil, IA, services et scale-ups internationales",
      en: "SaaS, finance, consulting, AI, services and international scale-ups",
      de: "SaaS, Finance, Beratung, KI, Services und internationale Scale-ups",
      nl: "SaaS, finance, consulting, AI, diensten en internationale scale-ups",
    },
    sectors: {
      fr: ["SaaS et IA", "Finance et conseil", "Scale-ups internationales"],
      en: ["SaaS and AI", "Finance and consulting", "International scale-ups"],
      de: ["SaaS und KI", "Finance und Beratung", "Internationale Scale-ups"],
      nl: ["SaaS en AI", "Finance en consulting", "Internationale scale-ups"],
    },
    proof: {
      fr: "tests de messages anglais pour marchés très concurrentiels",
      en: "English message testing for highly competitive markets",
      de: "englische Message-Tests für stark umkämpfte Märkte",
      nl: "Engelse berichttests voor zeer competitieve markten",
    },
    tier: "europe",
  },
  {
    key: "brussels",
    names: { fr: "Bruxelles", en: "Brussels", de: "Brüssel", nl: "Brussel" },
    slugs: {
      fr: "agence-prospection-b2b-bruxelles",
      en: "b2b-prospecting-agency-brussels",
      de: "b2b-prospecting-agentur-bruessel",
      nl: "b2b-prospectie-bureau-brussel",
    },
    country: { fr: "Belgique", en: "Belgium", de: "Belgien", nl: "België" },
    focus: {
      fr: "institutions, associations, conseil, SaaS et comptes Benelux",
      en: "institutions, associations, consulting, SaaS and Benelux accounts",
      de: "Institutionen, Verbände, Beratung, SaaS und Benelux-Accounts",
      nl: "instellingen, verenigingen, consulting, SaaS en Benelux-accounts",
    },
    sectors: {
      fr: ["Institutions et associations", "Conseil et SaaS", "Comptes Benelux"],
      en: ["Institutions and associations", "Consulting and SaaS", "Benelux accounts"],
      de: ["Institutionen und Verbände", "Beratung und SaaS", "Benelux-Accounts"],
      nl: ["Instellingen en verenigingen", "Consulting en SaaS", "Benelux-accounts"],
    },
    proof: {
      fr: "adaptation FR/NL/EN selon fonction, région et contexte institutionnel",
      en: "FR/NL/EN adaptation by role, region and institutional context",
      de: "FR/NL/EN-Anpassung nach Rolle, Region und institutionellem Kontext",
      nl: "FR/NL/EN-aanpassing per rol, regio en institutionele context",
    },
    tier: "europe",
  },
  {
    key: "milan",
    names: { fr: "Milan", en: "Milan", de: "Mailand", nl: "Milaan" },
    slugs: {
      fr: "agence-prospection-b2b-milan",
      en: "b2b-prospecting-agency-milan",
      de: "b2b-prospecting-agentur-mailand",
      nl: "b2b-prospectie-bureau-milaan",
    },
    country: { fr: "Italie", en: "Italy", de: "Italien", nl: "Italië" },
    focus: {
      fr: "industrie, design, mode, finance, SaaS et comptes nord-italiens",
      en: "industry, design, fashion, finance, SaaS and Northern Italy accounts",
      de: "Industrie, Design, Mode, Finance, SaaS und norditalienische Accounts",
      nl: "industrie, design, mode, finance, SaaS en Noord-Italiaanse accounts",
    },
    sectors: {
      fr: ["Industrie et design", "Finance et SaaS", "Nord de l'Italie"],
      en: ["Industry and design", "Finance and SaaS", "Northern Italy"],
      de: ["Industrie und Design", "Finance und SaaS", "Norditalien"],
      nl: ["Industrie en design", "Finance en SaaS", "Noord-Italië"],
    },
    proof: {
      fr: "ciblage entre sièges milanais, clusters industriels et comptes suisses liés",
      en: "targeting across Milan headquarters, industrial clusters and Swiss-linked accounts",
      de: "Targeting zwischen Mailänder Headquarters, Industrie-Clustern und Schweiz-nahen Accounts",
      nl: "targeting tussen Milanese hoofdkantoren, industriële clusters en Zwitserland-gelinkte accounts",
    },
    tier: "europe",
  },
  {
    key: "madrid",
    names: { fr: "Madrid", en: "Madrid", de: "Madrid", nl: "Madrid" },
    slugs: {
      fr: "agence-prospection-b2b-madrid",
      en: "b2b-prospecting-agency-madrid",
      de: "b2b-prospecting-agentur-madrid",
      nl: "b2b-prospectie-bureau-madrid",
    },
    country: { fr: "Espagne", en: "Spain", de: "Spanien", nl: "Spanje" },
    focus: {
      fr: "SaaS, fintech, conseil, énergie, services et comptes ibériques",
      en: "SaaS, fintech, consulting, energy, services and Iberian accounts",
      de: "SaaS, Fintech, Beratung, Energie, Services und iberische Accounts",
      nl: "SaaS, fintech, consulting, energie, diensten en Iberische accounts",
    },
    sectors: {
      fr: ["SaaS et fintech", "Énergie et conseil", "Comptes ibériques"],
      en: ["SaaS and fintech", "Energy and consulting", "Iberian accounts"],
      de: ["SaaS und Fintech", "Energie und Beratung", "Iberische Accounts"],
      nl: ["SaaS en fintech", "Energie en consulting", "Iberische accounts"],
    },
    proof: {
      fr: "cadences espagnoles ou anglaises selon expansion européenne",
      en: "Spanish or English cadences depending on European expansion",
      de: "spanische oder englische Sequenzen je nach europäischer Expansion",
      nl: "Spaanse of Engelse sequenties afhankelijk van Europese expansie",
    },
    tier: "europe",
  },
  {
    key: "barcelona",
    names: { fr: "Barcelone", en: "Barcelona", de: "Barcelona", nl: "Barcelona" },
    slugs: {
      fr: "agence-prospection-b2b-barcelone",
      en: "b2b-prospecting-agency-barcelona",
      de: "b2b-prospecting-agentur-barcelona",
      nl: "b2b-prospectie-bureau-barcelona",
    },
    country: { fr: "Espagne", en: "Spain", de: "Spanien", nl: "Spanje" },
    focus: {
      fr: "SaaS, mobile, e-commerce, tourisme B2B, marketplaces et scale-ups",
      en: "SaaS, mobile, e-commerce, B2B travel, marketplaces and scale-ups",
      de: "SaaS, Mobile, E-Commerce, B2B Travel, Marketplaces und Scale-ups",
      nl: "SaaS, mobile, e-commerce, B2B travel, marketplaces en scale-ups",
    },
    sectors: {
      fr: ["SaaS et mobile", "E-commerce et marketplaces", "Tourisme B2B"],
      en: ["SaaS and mobile", "E-commerce and marketplaces", "B2B travel"],
      de: ["SaaS und Mobile", "E-Commerce und Marketplaces", "B2B Travel"],
      nl: ["SaaS en mobile", "E-commerce en marketplaces", "B2B travel"],
    },
    proof: {
      fr: "tests rapides de messages pour équipes internationales basées en Espagne",
      en: "fast message tests for international teams based in Spain",
      de: "schnelle Message-Tests für internationale Teams in Spanien",
      nl: "snelle berichttests voor internationale teams in Spanje",
    },
    tier: "europe",
  },
  {
    key: "dublin",
    names: { fr: "Dublin", en: "Dublin", de: "Dublin", nl: "Dublin" },
    slugs: {
      fr: "agence-prospection-b2b-dublin",
      en: "b2b-prospecting-agency-dublin",
      de: "b2b-prospecting-agentur-dublin",
      nl: "b2b-prospectie-bureau-dublin",
    },
    country: { fr: "Irlande", en: "Ireland", de: "Irland", nl: "Ierland" },
    focus: {
      fr: "SaaS, cloud, support régional, finance et sièges EMEA",
      en: "SaaS, cloud, regional support, finance and EMEA headquarters",
      de: "SaaS, Cloud, regionaler Support, Finance und EMEA-Headquarters",
      nl: "SaaS, cloud, regionale support, finance en EMEA-hoofdkantoren",
    },
    sectors: {
      fr: ["SaaS et cloud", "Sièges EMEA", "Finance et support régional"],
      en: ["SaaS and cloud", "EMEA headquarters", "Finance and regional support"],
      de: ["SaaS und Cloud", "EMEA-Headquarters", "Finance und regionaler Support"],
      nl: ["SaaS en cloud", "EMEA-hoofdkantoren", "Finance en regionale support"],
    },
    proof: {
      fr: "outbound anglophone pour équipes européennes centralisées",
      en: "English outbound for centralized European teams",
      de: "englischer Outbound für zentralisierte europäische Teams",
      nl: "Engelse outbound voor gecentraliseerde Europese teams",
    },
    tier: "europe",
  },
  {
    key: "stockholm",
    names: { fr: "Stockholm", en: "Stockholm", de: "Stockholm", nl: "Stockholm" },
    slugs: {
      fr: "agence-prospection-b2b-stockholm",
      en: "b2b-prospecting-agency-stockholm",
      de: "b2b-prospecting-agentur-stockholm",
      nl: "b2b-prospectie-bureau-stockholm",
    },
    country: { fr: "Suède", en: "Sweden", de: "Schweden", nl: "Zweden" },
    focus: {
      fr: "SaaS, climat, fintech, industrie, design et scale-ups nordiques",
      en: "SaaS, climate, fintech, industry, design and Nordic scale-ups",
      de: "SaaS, Climate, Fintech, Industrie, Design und nordische Scale-ups",
      nl: "SaaS, klimaat, fintech, industrie, design en Noordse scale-ups",
    },
    sectors: {
      fr: ["SaaS et climat", "Fintech et design", "Scale-ups nordiques"],
      en: ["SaaS and climate", "Fintech and design", "Nordic scale-ups"],
      de: ["SaaS und Climate", "Fintech und Design", "Nordische Scale-ups"],
      nl: ["SaaS en klimaat", "Fintech en design", "Noordse scale-ups"],
    },
    proof: {
      fr: "messages très concis pour marchés nordiques à forte exigence de pertinence",
      en: "very concise messaging for Nordic markets with high relevance expectations",
      de: "sehr knappe Messages für nordische Märkte mit hoher Relevanz-Erwartung",
      nl: "zeer korte messaging voor Noordse markten met hoge relevantie-eisen",
    },
    tier: "europe",
  },
  {
    key: "copenhagen",
    names: { fr: "Copenhague", en: "Copenhagen", de: "Kopenhagen", nl: "Kopenhagen" },
    slugs: {
      fr: "agence-prospection-b2b-copenhague",
      en: "b2b-prospecting-agency-copenhagen",
      de: "b2b-prospecting-agentur-kopenhagen",
      nl: "b2b-prospectie-bureau-kopenhagen",
    },
    country: { fr: "Danemark", en: "Denmark", de: "Dänemark", nl: "Denemarken" },
    focus: {
      fr: "SaaS, climat, design, logistique, biotech et comptes nordiques",
      en: "SaaS, climate, design, logistics, biotech and Nordic accounts",
      de: "SaaS, Climate, Design, Logistik, Biotech und nordische Accounts",
      nl: "SaaS, klimaat, design, logistiek, biotech en Noordse accounts",
    },
    sectors: {
      fr: ["SaaS et climat", "Design et logistique", "Biotech et comptes nordiques"],
      en: ["SaaS and climate", "Design and logistics", "Biotech and Nordic accounts"],
      de: ["SaaS und Climate", "Design und Logistik", "Biotech und nordische Accounts"],
      nl: ["SaaS en klimaat", "Design en logistiek", "Biotech en Noordse accounts"],
    },
    proof: {
      fr: "approche nordique précise avec faible tolérance au volume non qualifié",
      en: "precise Nordic approach with low tolerance for unqualified volume",
      de: "präziser nordischer Ansatz mit geringer Toleranz für unqualifiziertes Volumen",
      nl: "precieze Noordse aanpak met lage tolerantie voor ongekwalificeerd volume",
    },
    tier: "europe",
  },
];

const consultationPath: Record<SupportedLocale, string> = {
  fr: "/consultation",
  en: "/en/consultation",
  de: "/de/beratung",
  nl: "/nl/adviesgesprek",
};

const consultationLabel: Record<SupportedLocale, string> = {
  fr: "Consultation gratuite",
  en: "Free consultation",
  de: "Kostenlose Beratung",
  nl: "Gratis consultatie",
};

function normalizeProgrammaticPath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

function pathFor(profile: CityProfile, locale: SupportedLocale): string {
  const slug = profile.slugs[locale];
  if (locale === "fr") return `/${slug}`;
  return `/${locale}/${slug}`;
}

function routeEntryFor(profile: CityProfile): ProgrammaticSeoRouteEntry {
  const entry = {
    fr: pathFor(profile, "fr"),
    en: pathFor(profile, "en"),
    de: pathFor(profile, "de"),
    nl: pathFor(profile, "nl"),
  };

  return {
    pageId: `programmatic-seo:service-location:${profile.key}`,
    frPath: entry.fr,
    entry,
  };
}

const routes = cityProfiles.map(routeEntryFor);

function localizedService(locale: SupportedLocale): string {
  if (locale === "fr") return "prospection B2B";
  if (locale === "de") return "B2B-Prospecting";
  if (locale === "nl") return "B2B-prospectie";
  return "B2B prospecting";
}

function localizedServiceCategory(locale: SupportedLocale): string {
  if (locale === "fr") return "Agence de prospection commerciale B2B";
  if (locale === "de") return "B2B-Prospecting-Agentur";
  if (locale === "nl") return "B2B outbound prospectiebureau";
  return "B2B outbound prospecting agency";
}

function buildPage(profile: CityProfile, locale: SupportedLocale): ProgrammaticSeoPage {
  const market = profile.names[locale];
  const service = localizedService(locale);
  const serviceCategory = localizedServiceCategory(locale);
  const path = pathFor(profile, locale);
  const frPath = pathFor(profile, "fr");
  const focus = profile.focus[locale];
  const sectors = profile.sectors[locale];
  const proof = profile.proof[locale];

  if (locale === "fr") {
    return {
      frPath,
      locale,
      path,
      metaTitle: `Agence prospection B2B ${market} | RDV qualifiés`,
      metaDescription: `Prospection B2B à ${market} pour ${focus}. devlo cible les bons décideurs avec signaux d'achat, données propres et séquences multicanales.`,
      h1: `Agence de prospection B2B à ${market}`,
      market,
      service,
      serviceCategory,
      audience: `entreprises B2B qui ciblent ${market}, ${profile.country.fr}, avec des offres à forte valeur`,
      answer: `Pour générer des rendez-vous qualifiés à ${market}, une campagne de prospection B2B doit combiner ciblage local, signaux d'achat, cold email, LinkedIn et qualification téléphonique. Le volume seul ne suffit pas: les listes doivent être vérifiées, les messages adaptés au marché et les décideurs priorisés par intention.`,
      proofPoints: [
        `Devlo utilise ${proof}.`,
        "Les campagnes sont construites par ICP, signaux d'achat, langue, rôle du décideur et maturité commerciale.",
        "Le modèle reprend les meilleures pratiques des pages de type \"best agency in city\": intention claire, critères visibles, FAQ et maillage local, sans classement concurrentiel invérifiable.",
      ],
      localSignals: sectors,
      criteria: [
        { label: "TAM local", detail: `Segmenter ${market} par secteur, taille d'entreprise, langue, présence locale et probabilité d'achat.` },
        { label: "Preuve vérifiable", detail: "Utiliser des cas, références ou hypothèses de marché datées au lieu d'une promesse générique." },
        { label: "Décideur qualifié", detail: "Vérifier rôle, ancienneté, contexte et responsabilité commerciale avant toute séquence." },
      ],
      marketNotes: [
        `${market} mérite une page dédiée parce que les requêtes \"best B2B prospecting agency in ${market}\" et \"agence prospection B2B ${market}\" ne cherchent pas seulement une définition. Elles cherchent un partenaire capable de comprendre le tissu local et de transformer cette compréhension en rendez-vous qualifiés.`,
        `Pour ${focus}, devlo privilégie une approche de category guide: critères de sélection, signaux de marché, FAQ et preuve d'exécution. Cette structure reprend ce qui fonctionne dans les réseaux de pages SalesCaptain, mais avec une rédaction originale et défendable pour une agence active.`,
      ],
      faqs: [
        {
          question: `Pourquoi créer une page dédiée à ${market} ?`,
          answer: `Les acheteurs recherchent souvent un partenaire par ville. Une page dédiée à ${market} rend le service, les secteurs et la langue d'exécution plus faciles à comprendre pour Google, Bing et les moteurs génératifs.`,
        },
        {
          question: `Quels canaux utiliser pour prospecter à ${market} ?`,
          answer: "La base recommandée combine cold email, LinkedIn, qualification téléphonique et signaux d'achat. Le mix exact dépend de l'ICP, du prix, du cycle de vente et de la langue de décision.",
        },
        {
          question: "devlo publie-t-elle un classement des meilleures agences ?",
          answer: "Non. Pour limiter le risque éditorial, ces pages utilisent un format de guide de catégorie: critères, contexte local et méthode de sélection plutôt qu'un classement de concurrents non audité.",
        },
      ],
      relatedLinks: [
        { label: `Prospection B2B à ${market}`, href: `/prospection-commerciale-${profile.slugs.fr.replace("agence-prospection-b2b-", "")}` },
        { label: "Services outbound B2B", href: "/services/outbound-engine" },
        { label: consultationLabel.fr, href: consultationPath.fr },
      ],
      datePublished,
      dateModified,
    };
  }

  if (locale === "de") {
    return {
      frPath,
      locale,
      path,
      metaTitle: `B2B-Prospecting Agentur ${market} | devlo`,
      metaDescription: `B2B-Prospecting in ${market} für ${focus}. devlo priorisiert Entscheider mit Kaufsignalen, sauberen Daten und mehrsprachigen Sequenzen.`,
      h1: `B2B-Prospecting Agentur in ${market}`,
      market,
      service,
      serviceCategory,
      audience: `B2B-Teams, die ${market} und ${profile.country.de} mit hochwertigen Angeboten erreichen wollen`,
      answer: `Eine B2B-Prospecting-Kampagne in ${market} sollte lokale Segmentierung, Kaufsignale, Cold Email, LinkedIn und telefonische Qualifikation verbinden. Reines Volumen reicht nicht: Listen müssen geprüft, Messages an den Markt angepasst und Entscheider nach Kaufabsicht priorisiert werden.`,
      proofPoints: [
        `Devlo nutzt ${proof}.`,
        "Kampagnen werden nach ICP, Kaufsignal, Sprache, Entscheiderrolle und kommerzieller Reife aufgebaut.",
        "Die Struktur übernimmt die funktionierenden Muster von \"best agency in city\"-Seiten: klare Suchintention, sichtbare Kriterien, FAQ und lokale interne Links, ohne nicht prüfbares Konkurrenzranking.",
      ],
      localSignals: sectors,
      criteria: [
        { label: "Lokaler TAM", detail: `${market} nach Branche, Unternehmensgröße, Sprache, lokaler Präsenz und Kaufwahrscheinlichkeit segmentieren.` },
        { label: "Prüfbarer Nachweis", detail: "Cases, Referenzen oder datierte Markthypothesen statt generischer Versprechen nutzen." },
        { label: "Qualifizierter Entscheider", detail: "Rolle, Seniorität, Kontext und kommerzielle Verantwortung vor jeder Sequenz prüfen." },
      ],
      marketNotes: [
        `${market} verdient eine eigene Seite, weil Suchanfragen wie \"best B2B prospecting agency in ${market}\" nicht nur eine Definition suchen. Sie suchen einen Partner, der den lokalen Markt versteht und daraus qualifizierte Meetings erzeugt.`,
        `Für ${focus} nutzt devlo ein Category-Guide-Format: Auswahlkriterien, Marktsignale, FAQ und Ausführungsnachweis. Das spiegelt die funktionierenden SalesCaptain-Muster, bleibt aber original und redaktionell vertretbar.`,
      ],
      faqs: [
        {
          question: `Warum gibt es eine eigene Seite für ${market}?`,
          answer: `B2B-Käufer suchen häufig nach Stadt und Service. Eine Seite für ${market} macht Service, Branchen und Sprache für Google, Bing und generative Suchmaschinen klarer.`,
        },
        {
          question: `Welche Kanäle funktionieren in ${market}?`,
          answer: "Die Basis kombiniert Cold Email, LinkedIn, telefonische Qualifikation und Kaufsignale. Der genaue Mix hängt von ICP, Preis, Sales Cycle und Entscheidungssprache ab.",
        },
        {
          question: "Veröffentlicht devlo ein Ranking der besten Agenturen?",
          answer: "Nein. Um redaktionelles Risiko zu reduzieren, nutzen diese Seiten ein Category-Guide-Format mit Kriterien, lokalem Kontext und Methode statt eines nicht auditierten Wettbewerberrankings.",
        },
      ],
      relatedLinks: [
        { label: `B2B-Akquise in ${market}`, href: `/de/b2b-akquise-${profile.slugs.de.replace("b2b-prospecting-agentur-", "")}` },
        { label: "B2B-Outbound-Services", href: "/de/services/outbound-engine" },
        { label: consultationLabel.de, href: consultationPath.de },
      ],
      datePublished,
      dateModified,
    };
  }

  if (locale === "nl") {
    return {
      frPath,
      locale,
      path,
      metaTitle: `B2B prospectiebureau ${market} | devlo`,
      metaDescription: `B2B-prospectie in ${market} voor ${focus}. devlo prioriteert beslissers met koopsignalen, schone data en multichannel sequenties.`,
      h1: `B2B prospectiebureau in ${market}`,
      market,
      service,
      serviceCategory,
      audience: `B2B-teams die ${market} en ${profile.country.nl} willen bereiken met high-value proposities`,
      answer: `Een B2B-prospectiecampagne in ${market} moet lokale segmentatie, koopsignalen, cold email, LinkedIn en telefonische kwalificatie combineren. Alleen volume is niet genoeg: lijsten moeten worden geverifieerd, berichten moeten bij de markt passen en beslissers moeten op intentie worden geprioriteerd.`,
      proofPoints: [
        `Devlo gebruikt ${proof}.`,
        "Campagnes worden opgebouwd rond ICP, koopsignalen, taal, beslisserrol en commerciële maturiteit.",
        "De structuur volgt wat werkt bij \"best agency in city\"-pagina's: duidelijke intentie, zichtbare criteria, FAQ en lokale interne links, zonder onverifieerbare concurrentieranking.",
      ],
      localSignals: sectors,
      criteria: [
        { label: "Lokale TAM", detail: `${market} segmenteren op sector, bedrijfsgrootte, taal, lokale aanwezigheid en koopwaarschijnlijkheid.` },
        { label: "Verifieerbaar bewijs", detail: "Cases, referenties of gedateerde markthypotheses gebruiken in plaats van generieke beloftes." },
        { label: "Gekwalificeerde beslisser", detail: "Rol, senioriteit, context en commerciële verantwoordelijkheid checken voor elke sequentie." },
      ],
      marketNotes: [
        `${market} verdient een eigen pagina omdat zoekopdrachten zoals \"best B2B prospecting agency in ${market}\" niet alleen een definitie zoeken. Ze zoeken een partner die lokale context kan omzetten in gekwalificeerde meetings.`,
        `Voor ${focus} gebruikt devlo een category guide: selectiecriteria, marktsignalen, FAQ en bewijs van uitvoering. Dat neemt de werkende SalesCaptain-patronen over, maar met originele en verdedigbare content.`,
      ],
      faqs: [
        {
          question: `Waarom een aparte pagina voor ${market}?`,
          answer: `B2B-kopers zoeken vaak op stad en dienst. Een pagina voor ${market} maakt service, sectoren en taal duidelijker voor Google, Bing en generatieve zoekmachines.`,
        },
        {
          question: `Welke kanalen werken in ${market}?`,
          answer: "De aanbevolen basis combineert cold email, LinkedIn, telefonische kwalificatie en koopsignalen. De exacte mix hangt af van ICP, prijs, salescyclus en beslissingstaal.",
        },
        {
          question: "Publiceert devlo een ranking van de beste bureaus?",
          answer: "Nee. Om redactioneel risico te beperken gebruiken deze pagina's een category-guideformat met criteria, lokale context en methode in plaats van een niet-geaudite concurrentieranking.",
        },
      ],
      relatedLinks: [
        { label: `B2B prospectie in ${market}`, href: `/nl/b2b-prospectie-${profile.slugs.nl.replace("b2b-prospectie-bureau-", "")}` },
        { label: "B2B outbound diensten", href: "/nl/services/outbound-engine" },
        { label: consultationLabel.nl, href: consultationPath.nl },
      ],
      datePublished,
      dateModified,
    };
  }

  return {
    frPath,
    locale,
    path,
    metaTitle: `B2B prospecting agency ${market} | qualified meetings`,
    metaDescription: `B2B prospecting in ${market} for ${focus}. devlo targets decision-makers with buying signals, clean data and multichannel sequences.`,
    h1: `B2B prospecting agency in ${market}`,
    market,
    service,
    serviceCategory,
    audience: `B2B teams targeting ${market}, ${profile.country.en}, with high-value offers`,
    answer: `A B2B prospecting campaign in ${market} should combine local segmentation, buying signals, cold email, LinkedIn and phone qualification. Volume alone is not enough: lists must be verified, messages adapted to the market and decision-makers prioritized by intent.`,
    proofPoints: [
      `Devlo uses ${proof}.`,
      "Campaigns are built around ICP, buying signals, language, decision-maker role and commercial maturity.",
      "The structure borrows the working pattern of \"best agency in city\" pages: clear intent, visible criteria, FAQ and local internal links, without an unverifiable competitor ranking.",
    ],
    localSignals: sectors,
    criteria: [
      { label: "Local TAM", detail: `Segment ${market} by sector, company size, language, local presence and buying probability.` },
      { label: "Verifiable proof", detail: "Use case studies, references or dated market hypotheses instead of generic claims." },
      { label: "Qualified decision-maker", detail: "Check role, seniority, context and commercial responsibility before any sequence." },
    ],
    marketNotes: [
      `${market} deserves a dedicated page because searches like \"best B2B prospecting agency in ${market}\" are not just asking for a definition. They are looking for a partner that can turn local context into qualified meetings.`,
      `For ${focus}, devlo uses a category guide format: selection criteria, market signals, FAQ and proof of execution. This mirrors the SalesCaptain page-network mechanics while keeping the content original and defensible for an operating agency.`,
    ],
    faqs: [
      {
        question: `Why create a dedicated page for ${market}?`,
        answer: `B2B buyers often search by service and city. A ${market} page makes the service, sectors and execution language clearer for Google, Bing and generative engines.`,
      },
      {
        question: `Which channels work in ${market}?`,
        answer: "The recommended base combines cold email, LinkedIn, phone qualification and buying signals. The exact mix depends on ICP, price point, sales cycle and decision language.",
      },
      {
        question: "Does devlo publish a ranking of the best agencies?",
        answer: "No. To reduce editorial risk, these pages use a category guide format with criteria, local context and selection method instead of an unaudited competitor ranking.",
      },
    ],
    relatedLinks: [
      { label: `B2B prospecting in ${market}`, href: `/en/b2b-prospecting-${profile.slugs.en.replace("b2b-prospecting-agency-", "")}` },
      { label: "B2B outbound services", href: "/en/services/outbound-engine" },
      { label: consultationLabel.en, href: consultationPath.en },
    ],
    datePublished,
    dateModified,
  };
}

export const PROGRAMMATIC_SEO_ROUTE_ENTRIES: ProgrammaticSeoRouteEntry[] = routes;

export const PROGRAMMATIC_SEO_PILOT_PAGES: ProgrammaticSeoPage[] = cityProfiles.flatMap((profile) =>
  (["fr", "en", "de", "nl"] as const).map((locale) => buildPage(profile, locale)),
);

export function findProgrammaticSeoRouteByLocalePath(locale: SupportedLocale, path: string): ProgrammaticSeoRouteEntry | null {
  const normalized = normalizeProgrammaticPath(path);
  return PROGRAMMATIC_SEO_ROUTE_ENTRIES.find((route) => {
    const localizedPath = route.entry[locale];
    return localizedPath ? normalizeProgrammaticPath(localizedPath) === normalized : false;
  }) ?? null;
}

export function getProgrammaticSeoPilotPage(frPath: string, locale: SupportedLocale): ProgrammaticSeoPage | null {
  const normalizedFrPath = normalizeProgrammaticPath(frPath);
  return PROGRAMMATIC_SEO_PILOT_PAGES.find((page) => normalizeProgrammaticPath(page.frPath) === normalizedFrPath && page.locale === locale) ?? null;
}
