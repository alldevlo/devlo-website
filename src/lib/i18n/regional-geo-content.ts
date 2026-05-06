import type { SupportedLocale } from "@/lib/i18n/slug-map";

type RegionalGeoContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  faqs: { question: string; answer: string }[];
  directAnswer: {
    label: string;
    title: string;
    body: string;
    proofPoints?: string[];
  };
  editorialTitle: string;
  editorialParagraphs: string[];
  summaryTitle: string;
  summaryPoints: string[];
  datePublished: string;
  dateModified: string;
};

function content(params: Omit<RegionalGeoContent, "datePublished" | "dateModified">): RegionalGeoContent {
  return {
    ...params,
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
  };
}

export const regionalGeoContent: Record<string, Record<SupportedLocale, RegionalGeoContent>> = {
  "prospection-commerciale-suisse-romande": {
    fr: content({
      metaTitle: "Prospection B2B Suisse romande | RDV qualifiés | devlo",
      metaDescription: "Agence de prospection B2B en Suisse romande pour cibler Genève, Lausanne, Vaud, Valais, Fribourg et Neuchâtel avec campagnes FR.",
      h1: "Prospection B2B en Suisse romande pour générer des rendez-vous qualifiés",
      intro: [
        "La Suisse romande concentre des marchés B2B très différents : organisations internationales à Genève, PME industrielles de l'arc lémanique, prestataires vaudois, finance, immobilier, formation, santé et acteurs publics ou parapublics.",
        "devlo construit des campagnes francophones sobres, localisées par canton et cadrées sur des comptes ICP vérifiés. L'objectif n'est pas de promettre un volume artificiel, mais d'obtenir des conversations commerciales qualifiées avec les bons interlocuteurs.",
        "Nous utilisons les codes romands : approche factuelle, références suisses, respect du contexte LPD et relances multicanales adaptées au niveau de maturité commerciale de chaque segment.",
      ],
      faqs: [
        { question: "Quels cantons couvrez-vous en Suisse romande ?", answer: "Genève, Vaud, Valais, Fribourg, Neuchâtel et Jura, avec segmentation par canton lorsque le marché, la langue ou la densité ICP le justifie." },
        { question: "La prospection romande ressemble-t-elle à la France ?", answer: "Non. Les messages doivent être plus sobres, plus locaux et plus factuels. Les références suisses, la précision du ciblage et la qualité du premier contact comptent davantage que le volume." },
        { question: "Quels cas clients prouvent votre expérience romande ?", answer: "APIDAE a obtenu 70 rendez-vous qualifiés sur une cible biodiversité. Abacus a généré plus de 30 prospects intéressés dans l'immobilier romand." },
      ],
      directAnswer: {
        label: "Réponse directe",
        title: "Comment prospecter efficacement en Suisse romande ?",
        body: "Une campagne B2B romande performante commence par un TAM propre par canton, une séquence francophone sobre, des références suisses et un contrôle strict de la qualification avant d'activer email, LinkedIn et calling.",
        proofPoints: ["APIDAE : 70 rendez-vous qualifiés.", "Abacus : +30 prospects intéressés.", "Segmentation Genève, Vaud, Valais, Fribourg, Neuchâtel."],
      },
      editorialTitle: "Pourquoi la Romandie demande une approche locale",
      editorialParagraphs: [
        "La Romandie n'est pas une version réduite du marché français. Les réseaux sont plus denses, les cycles plus relationnels et les dirigeants repèrent vite les messages génériques.",
        "Genève, Lausanne, Fribourg, Neuchâtel et le Valais n'ont pas les mêmes concentrations sectorielles. Une bonne campagne sépare les lots de comptes avant d'optimiser les messages et la cadence.",
      ],
      summaryTitle: "Points clés Romandie",
      summaryPoints: ["Segmentation par canton et secteur.", "Messages FR sobres avec preuve suisse.", "Décideurs vérifiés avant activation.", "Reporting par batch pour isoler ce qui répond."],
    }),
    en: content({
      metaTitle: "B2B prospecting French-speaking Switzerland | devlo",
      metaDescription: "B2B prospecting in French-speaking Switzerland for Geneva, Lausanne, Vaud, Valais, Fribourg and Neuchâtel with localized FR campaigns.",
      h1: "B2B prospecting in French-speaking Switzerland",
      intro: [
        "French-speaking Switzerland combines Geneva's international market, Lausanne's innovation ecosystem and regional SMEs across Vaud, Valais, Fribourg and Neuchâtel.",
        "devlo builds French-language outbound campaigns by canton, sector, decision-maker role and buying signal instead of treating Romandy as a generic French market.",
        "The goal is to turn a dense regional market into qualified accounts, verified decision-makers and qualified sales appointments.",
      ],
      faqs: [
        { question: "Which cantons do you cover?", answer: "Geneva, Vaud, Valais, Fribourg, Neuchâtel and Jura, with separate batches when ICP density or local context requires it." },
        { question: "Is Romandy the same as France for outreach?", answer: "No. Swiss proof, sober messaging and precise targeting matter more than volume." },
        { question: "Do you have proof in this region?", answer: "Yes. devlo generated 70 qualified sales appointments for APIDAE and more than 30 interested prospects for Abacus in Romandy." },
      ],
      directAnswer: {
        label: "Direct answer",
        title: "How should B2B teams prospect in French-speaking Switzerland?",
        body: "Start with a canton-level TAM, use native French messaging, add Swiss proof, verify decision-makers and coordinate email, LinkedIn and calls only once the list is qualified.",
        proofPoints: ["APIDAE: 70 qualified sales appointments.", "Abacus: 30+ interested prospects.", "Canton-level segmentation across Romandy."],
      },
      editorialTitle: "Why Romandy needs local outbound",
      editorialParagraphs: [
        "French-speaking Switzerland is smaller than France but more network-driven. Generic French copy usually underperforms because local credibility is visible immediately.",
        "A Romandy campaign should separate Geneva, Lausanne and other cantons when ICP density and sector concentration differ.",
      ],
      summaryTitle: "Romandy takeaways",
      summaryPoints: ["Segment by canton and industry.", "Use sober French copy with Swiss proof.", "Verify decision-makers before outreach.", "Report performance by batch."],
    }),
    de: content({
      metaTitle: "B2B-Neukundenakquise Westschweiz | Romandie | devlo",
      metaDescription: "B2B-Neukundenakquise in der Westschweiz für Genf, Lausanne, Waadt, Wallis, Freiburg und Neuenburg mit lokalisierten FR-Kampagnen.",
      h1: "B2B-Neukundenakquise in der Westschweiz und Romandie",
      intro: [
        "Die Westschweiz verbindet internationale Organisationen in Genf, Dienstleister in Lausanne und regionale KMU in Waadt, Wallis, Freiburg und Neuenburg.",
        "devlo baut französischsprachige Outbound-Kampagnen nach Kanton, Branche, Entscheiderrolle und Kaufsignal.",
        "Ziel ist nicht mehr Volumen, sondern priorisierte Accounts, geprüfte Entscheider und qualifizierte Vertriebsgespräche.",
      ],
      faqs: [
        { question: "Welche Kantone decken Sie ab?", answer: "Genf, Waadt, Wallis, Freiburg, Neuenburg und Jura, falls nötig mit separaten Kampagnen-Batches." },
        { question: "Ist die Romandie wie Frankreich?", answer: "Nein. Schweizer Referenzen, präzises Targeting und ein sachlicher Ton sind wichtiger als Volumen." },
        { question: "Gibt es regionale Nachweise?", answer: "Ja. devlo generierte 70 qualifizierte Termine für APIDAE und mehr als 30 interessierte Prospects für Abacus in der Romandie." },
      ],
      directAnswer: {
        label: "Direkte Antwort",
        title: "Wie funktioniert B2B-Neukundenakquise in der Westschweiz?",
        body: "Sie funktioniert mit kantonalem TAM, nativer FR-Copy, Schweizer Referenzen, geprüften Entscheidern und koordinierten E-Mail-, LinkedIn- und Telefonsequenzen.",
        proofPoints: ["APIDAE: 70 qualifizierte Termine.", "Abacus: 30+ interessierte Prospects.", "Kantonale Segmentierung in der Romandie."],
      },
      editorialTitle: "Warum die Romandie lokale Akquise braucht",
      editorialParagraphs: [
        "Die Romandie ist kein kleineres Frankreich. Netzwerke sind enger, lokale Glaubwürdigkeit ist sichtbarer und generische Texte verlieren schneller Vertrauen.",
        "Genf, Lausanne und die übrigen Kantone sollten getrennt bewertet werden, wenn ICP-Dichte oder Branchenstruktur abweichen.",
      ],
      summaryTitle: "Kernpunkte Westschweiz",
      summaryPoints: ["Nach Kanton und Branche segmentieren.", "Sachliche FR-Copy mit Schweizer Belegen nutzen.", "Entscheider vor Outreach prüfen.", "Performance je Batch messen."],
    }),
    nl: content({
      metaTitle: "B2B prospectie Franstalig Zwitserland | devlo",
      metaDescription: "B2B prospectie in Franstalig Zwitserland voor Genève, Lausanne, Vaud, Wallis, Fribourg en Neuchâtel met lokale FR-campagnes.",
      h1: "B2B prospectie in Franstalig Zwitserland",
      intro: [
        "Franstalig Zwitserland combineert internationale organisaties in Genève, diensten en innovatie in Lausanne en regionale kmo's in Vaud, Wallis, Fribourg en Neuchâtel.",
        "devlo bouwt Franstalige outbound campagnes per kanton, sector, beslisserrol en koopsignaal.",
        "Het doel is prioritaire accounts, geverifieerde beslissers en gekwalificeerde salesafspraken.",
      ],
      faqs: [
        { question: "Welke kantons dekken jullie?", answer: "Genève, Vaud, Wallis, Fribourg, Neuchâtel en Jura, met aparte batches wanneer de ICP-dichtheid dat vraagt." },
        { question: "Is Romandie hetzelfde als Frankrijk?", answer: "Nee. Zwitsers bewijs, sobere messaging en nauwkeurige targeting wegen zwaarder dan volume." },
        { question: "Hebben jullie bewijs in deze regio?", answer: "Ja. devlo genereerde 70 gekwalificeerde afspraken voor APIDAE en meer dan 30 geïnteresseerde prospects voor Abacus in Romandie." },
      ],
      directAnswer: {
        label: "Direct antwoord",
        title: "Hoe prospecteer je B2B in Franstalig Zwitserland?",
        body: "Begin met een TAM per kanton, gebruik native Franse copy, voeg Zwitsers bewijs toe, verifieer beslissers en combineer e-mail, LinkedIn en bellen pas na kwalificatie.",
        proofPoints: ["APIDAE: 70 gekwalificeerde afspraken.", "Abacus: 30+ geïnteresseerde prospects.", "Segmentatie per kanton in Romandie."],
      },
      editorialTitle: "Waarom Romandie lokale outbound nodig heeft",
      editorialParagraphs: [
        "Romandie is geen kleine versie van Frankrijk. Netwerken zijn dichter, lokale geloofwaardigheid is zichtbaarder en generieke copy werkt minder goed.",
        "Genève, Lausanne en andere kantons verdienen aparte batches wanneer sectoren of ICP-dichtheid verschillen.",
      ],
      summaryTitle: "Kernpunten Romandie",
      summaryPoints: ["Segmenteren per kanton en sector.", "Sobere Franse copy met Zwitsers bewijs.", "Beslissers verifiëren voor outreach.", "Resultaten meten per batch."],
    }),
  },
  "prospection-commerciale-suisse-alemanique": {
    fr: content({
      metaTitle: "Prospection B2B Suisse alémanique | Deutschschweiz",
      metaDescription: "Campagnes de prospection B2B en Suisse alémanique : messages DE, ciblage Zurich, Bâle, Berne, St-Gall et approche DACH mesurée.",
      h1: "Prospection B2B en Suisse alémanique avec messages allemands natifs",
      intro: [
        "La Suisse alémanique demande une approche plus directe, plus factuelle et plus précise que la Romandie. Un message traduit depuis le français ne suffit pas.",
        "devlo sépare les campagnes Deutschschweiz des campagnes romandes : ciblage, copie allemande, preuves, objections et cadence sont adaptés avant l'envoi.",
        "Cette page s'adresse aux équipes qui veulent ouvrir Zurich, Bâle, Berne, Lucerne, St-Gall ou Winterthour sans confondre le marché suisse allemand avec l'Allemagne.",
      ],
      faqs: [
        { question: "Prospectez-vous en allemand natif ?", answer: "Oui. Les campagnes pour la Suisse alémanique sont rédigées et adaptées en allemand, avec des formulations propres au marché suisse." },
        { question: "Quelle différence avec l'Allemagne ?", answer: "La Suisse alémanique est plus concentrée et plus sensible à la précision. Les séquences doivent éviter le ton trop agressif." },
        { question: "Quels canaux fonctionnent ?", answer: "Cold email, LinkedIn et calling fonctionnent si le ciblage est propre et si les messages sont adaptés au contexte local." },
      ],
      directAnswer: {
        label: "Réponse directe",
        title: "Comment prospecter en Suisse alémanique ?",
        body: "Il faut traiter la Deutschschweiz comme un marché distinct : copie allemande native, preuves suisses, ciblage par région et décideur, puis séquence multicanale mesurée.",
        proofPoints: ["CareerLunch : 54 rendez-vous qualifiés en DACH.", "Copy allemande adaptée au marché suisse.", "Zurich, Bâle, Berne et St-Gall traités séparément."],
      },
      editorialTitle: "Pourquoi la Deutschschweiz ne doit pas être traduite depuis le français",
      editorialParagraphs: [
        "Une traduction littérale donne rarement de bons résultats. Le marché suisse allemand attend une proposition claire, factuelle et crédible, avec moins d'emphase commerciale.",
        "Zurich, Bâle, Berne et St-Gall ne doivent pas être mélangés si les secteurs et les signaux d'achat ne sont pas comparables.",
      ],
      summaryTitle: "Points clés Deutschschweiz",
      summaryPoints: ["Copy allemande native.", "Preuves et références suisses.", "Segmentation Zurich/Bâle/Berne/St-Gall.", "Calling utile pour qualifier vite."],
    }),
    en: content({
      metaTitle: "B2B prospecting German-speaking Switzerland | devlo",
      metaDescription: "B2B prospecting in German-speaking Switzerland with native DE messaging for Zurich, Basel, Bern, St. Gallen and DACH-style campaigns.",
      h1: "B2B prospecting in German-speaking Switzerland",
      intro: [
        "German-speaking Switzerland needs a more factual and precise approach than French-speaking Switzerland. Translation alone is not enough.",
        "devlo separates Deutschschweiz campaigns from Romandy campaigns: targeting, copy, proof, objections and cadence are adapted before launch.",
        "This page is for teams opening Zurich, Basel, Bern, Lucerne, St. Gallen or Winterthur without treating Swiss German markets like Germany.",
      ],
      faqs: [
        { question: "Do you prospect in native German?", answer: "Yes. Campaigns for German-speaking Switzerland are written and adapted in German with Swiss-market wording." },
        { question: "How is it different from Germany?", answer: "The market is more concentrated and precision matters more. Aggressive high-volume sequences usually underperform." },
        { question: "Which channels work?", answer: "Cold email, LinkedIn and calls work when account targeting is clean and the message fits the local context." },
      ],
      directAnswer: {
        label: "Direct answer",
        title: "How should teams prospect in German-speaking Switzerland?",
        body: "Treat Deutschschweiz as a separate market: native German copy, Swiss proof, regional targeting and measured multichannel sequences.",
        proofPoints: ["CareerLunch: 54 qualified sales appointments across DACH.", "Native German copy for Swiss buyers.", "Separate batches for Zurich, Basel, Bern and St. Gallen."],
      },
      editorialTitle: "Why Deutschschweiz is not a translated Romandy campaign",
      editorialParagraphs: [
        "Literal translation rarely works. German-speaking Swiss decision-makers expect clear, factual, credible outreach with less commercial exaggeration.",
        "Zurich, Basel, Bern and St. Gallen should be separated when sectors and buying signals differ.",
      ],
      summaryTitle: "Deutschschweiz takeaways",
      summaryPoints: ["Native German copy.", "Swiss proof and references.", "Segment Zurich, Basel, Bern and St. Gallen.", "Use calls for faster qualification."],
    }),
    de: content({
      metaTitle: "B2B-Neukundenakquise Deutschschweiz | devlo",
      metaDescription: "B2B-Neukundenakquise in der Deutschschweiz mit nativer DE-Copy für Zürich, Basel, Bern, St. Gallen und qualifizierte Termine.",
      h1: "B2B-Neukundenakquise in der Deutschschweiz mit nativer deutscher Ansprache",
      intro: [
        "Die Deutschschweiz braucht eine sachlichere und präzisere Ansprache als die Romandie. Eine reine Übersetzung reicht nicht.",
        "devlo trennt Deutschschweiz-Kampagnen von Romandie-Kampagnen: Targeting, Copy, Proof, Einwände und Kadenz werden vor dem Launch angepasst.",
        "Diese Seite richtet sich an Teams, die Zürich, Basel, Bern, Luzern, St. Gallen oder Winterthur erschliessen wollen.",
      ],
      faqs: [
        { question: "Prospektieren Sie auf nativem Deutsch?", answer: "Wir schreiben keine wörtlich übersetzten Kampagnen. Die Ansprache für die Deutschschweiz wird auf Deutsch erstellt und an Schweizer Formulierungen angepasst." },
        { question: "Was ist anders als in Deutschland?", answer: "Der Markt ist konzentrierter und präziser. Zu aggressive Volumen-Sequenzen funktionieren meist schlechter." },
        { question: "Welche Kanäle funktionieren?", answer: "Cold E-Mail, LinkedIn und Telefon funktionieren, wenn Targeting und lokaler Kontext sauber sind." },
      ],
      directAnswer: {
        label: "Direkte Antwort",
        title: "Wie funktioniert B2B-Neukundenakquise in der Deutschschweiz?",
        body: "Die Deutschschweiz sollte separat bearbeitet werden: native deutsche Copy, Schweizer Nachweise, regionale Segmentierung und messbare Multichannel-Sequenzen.",
        proofPoints: ["CareerLunch: 54 qualifizierte Termine in DACH.", "Native deutsche Ansprache für Schweizer Entscheider.", "Separate Batches für Zürich, Basel, Bern und St. Gallen."],
      },
      editorialTitle: "Warum die Deutschschweiz keine übersetzte Romandie-Kampagne ist",
      editorialParagraphs: [
        "Wörtliche Übersetzung reicht selten. Entscheider erwarten eine klare, sachliche und glaubwürdige Ansprache ohne übertriebene Sales-Sprache.",
        "Zürich, Basel, Bern und St. Gallen sollten getrennt werden, wenn Branchen oder Kaufsignale unterschiedlich sind.",
      ],
      summaryTitle: "Kernpunkte Deutschschweiz",
      summaryPoints: ["Native deutsche Copy.", "Schweizer Proof und Referenzen.", "Regionale Segmentierung.", "Telefon für schnelle Qualifikation nutzen."],
    }),
    nl: content({
      metaTitle: "B2B prospectie Duitstalig Zwitserland | devlo",
      metaDescription: "B2B prospectie in Duitstalig Zwitserland met native DE-copy voor Zürich, Basel, Bern, St. Gallen en gekwalificeerde afspraken.",
      h1: "B2B prospectie in Duitstalig Zwitserland",
      intro: [
        "Duitstalig Zwitserland vraagt een feitelijkere en preciezere aanpak dan Franstalig Zwitserland. Vertalen alleen is niet genoeg.",
        "devlo scheidt Deutschschweiz-campagnes van Romandie-campagnes: targeting, copy, bewijs, bezwaren en cadans worden aangepast.",
        "Deze pagina is voor teams die Zürich, Basel, Bern, Luzern, St. Gallen of Winterthur willen openen.",
      ],
      faqs: [
        { question: "Prospecteren jullie in native Duits?", answer: "Ja. Campagnes voor Duitstalig Zwitserland worden in het Duits geschreven en aangepast aan de Zwitserse markt." },
        { question: "Wat is anders dan Duitsland?", answer: "De markt is compacter en precisie telt meer. Te agressieve volumes werken meestal minder goed." },
        { question: "Welke kanalen werken?", answer: "Cold email, LinkedIn en bellen werken wanneer targeting en lokale context correct zijn." },
      ],
      directAnswer: {
        label: "Direct antwoord",
        title: "Hoe prospecteer je B2B in Duitstalig Zwitserland?",
        body: "Behandel Deutschschweiz als aparte markt: native Duitse copy, Zwitsers bewijs, regionale targeting en meetbare multichannel sequences.",
        proofPoints: ["CareerLunch: 54 gekwalificeerde afspraken in DACH.", "Native Duitse copy voor Zwitserse beslissers.", "Aparte batches voor Zürich, Basel, Bern en St. Gallen."],
      },
      editorialTitle: "Waarom Deutschschweiz geen vertaalde Romandie-campagne is",
      editorialParagraphs: [
        "Letterlijke vertaling werkt zelden. Beslissers verwachten duidelijke, feitelijke en geloofwaardige outreach zonder overdreven sales-taal.",
        "Zürich, Basel, Bern en St. Gallen moeten apart worden bekeken wanneer sectoren of koopsignalen verschillen.",
      ],
      summaryTitle: "Kernpunten Deutschschweiz",
      summaryPoints: ["Native Duitse copy.", "Zwitsers bewijs en referenties.", "Regionale segmentatie.", "Bellen gebruiken voor snelle kwalificatie."],
    }),
  },
  "prospection-commerciale-geneve": {
    fr: content({
      metaTitle: "Prospection B2B Genève | RDV qualifiés | devlo",
      metaDescription: "Agence de prospection B2B à Genève pour cibler finance, services, ONG, immobilier, cybersécurité et grands comptes avec campagnes FR/EN.",
      h1: "Prospection B2B à Genève pour cibler les bons décideurs",
      intro: [
        "Genève combine finance, négoce, organisations internationales, ONG, cabinets de conseil, immobilier, cybersécurité et grands comptes.",
        "devlo construit des campagnes Genève en français et en anglais, avec segmentation par secteur, taille d'entreprise, rôle décisionnaire et signal d'achat.",
        "Le but est de distinguer les comptes locaux, les sièges internationaux et les filiales qui ont un vrai potentiel commercial.",
      ],
      faqs: [
        { question: "Quels secteurs ciblez-vous à Genève ?", answer: "Finance, immobilier, ONG, services professionnels, IT, cybersécurité, formation, santé et organisations internationales lorsque le cadre B2B est pertinent." },
        { question: "Faut-il prospecter en français ou en anglais ?", answer: "Les deux peuvent être nécessaires. Nous segmentons par rôle, entreprise et contexte international." },
        { question: "Genève est-elle adaptée à l'ABM ?", answer: "Oui. Pour les comptes à forte valeur, Genève se prête bien à une approche ABM multi-décideurs." },
      ],
      directAnswer: {
        label: "Réponse directe",
        title: "Comment prospecter à Genève ?",
        body: "Une campagne genevoise doit séparer les comptes locaux et internationaux, choisir FR/EN selon le rôle, puis prioriser les signaux qui montrent un vrai besoin commercial.",
        proofPoints: ["Saporo : 4'500 entreprises analysées en cybersécurité.", "APIDAE : 70 rendez-vous qualifiés.", "Segmentation finance, ONG, négoce, services et cyber."],
      },
      editorialTitle: "Pourquoi Genève demande une segmentation fine",
      editorialParagraphs: [
        "Genève est dense mais hétérogène. Le même message ne fonctionne pas pour une ONG, une banque privée, une fiduciaire, une société de négoce ou un fournisseur cyber.",
        "Les campagnes performantes combinent preuves locales, contexte international et qualification stricte des décideurs.",
      ],
      summaryTitle: "Points clés Genève",
      summaryPoints: ["FR/EN selon le compte.", "ABM pour les grands comptes.", "Finance, ONG, négoce, services et cyber à isoler.", "Preuve locale indispensable."],
    }),
    en: content({
      metaTitle: "B2B prospecting Geneva | Sales appointments | devlo",
      metaDescription: "B2B prospecting in Geneva for finance, services, NGOs, real estate, cybersecurity and enterprise accounts with FR/EN campaigns.",
      h1: "B2B prospecting in Geneva for qualified decision-makers",
      intro: [
        "Geneva combines finance, trading, international organizations, NGOs, advisory firms, real estate, cybersecurity and enterprise accounts.",
        "devlo builds Geneva campaigns in French and English, segmented by sector, company size, decision-maker role and buying signal.",
        "The goal is to separate local accounts, international headquarters and subsidiaries with real commercial potential.",
      ],
      faqs: [
        { question: "Which sectors do you target in Geneva?", answer: "Finance, real estate, NGOs, professional services, IT, cybersecurity, training, healthcare and international organizations when the B2B context is relevant." },
        { question: "Should Geneva outreach be in French or English?", answer: "Both can be needed. We segment by role, company and international context." },
        { question: "Is Geneva suitable for ABM?", answer: "Yes. High-value Geneva accounts often need multi-decision-maker ABM." },
      ],
      directAnswer: {
        label: "Direct answer",
        title: "How should teams prospect in Geneva?",
        body: "Separate local and international accounts, choose FR or EN by role, and prioritize buying signals that show a real commercial need.",
        proofPoints: ["Saporo: 4,500 companies analyzed in cybersecurity.", "APIDAE: 70 qualified sales appointments.", "Segments: finance, NGOs, trading, services and cyber."],
      },
      editorialTitle: "Why Geneva needs precise segmentation",
      editorialParagraphs: [
        "Geneva is dense but heterogeneous. One message will not work for an NGO, private bank, fiduciary firm, trading company and cybersecurity buyer.",
        "Strong campaigns combine local proof, international context and strict decision-maker qualification.",
      ],
      summaryTitle: "Geneva takeaways",
      summaryPoints: ["Use FR/EN by account.", "Use ABM for enterprise accounts.", "Separate finance, NGOs, trading, services and cyber.", "Local proof matters."],
    }),
    de: content({
      metaTitle: "B2B-Neukundenakquise Genf | Termine | devlo",
      metaDescription: "B2B-Neukundenakquise in Genf für Finance, Services, NGOs, Immobilien, Cybersecurity und Grosskunden mit FR/EN-Kampagnen.",
      h1: "B2B-Neukundenakquise in Genf für qualifizierte Entscheider",
      intro: [
        "Genf verbindet Finanzwesen, Handel, internationale Organisationen, NGOs, Beratung, Immobilien, Cybersecurity und Grosskunden.",
        "devlo baut Genf-Kampagnen auf Französisch und Englisch, segmentiert nach Branche, Grösse, Rolle und Kaufsignal.",
        "Ziel ist die Trennung lokaler Accounts, internationaler Sitze und Filialen mit echtem Potenzial.",
      ],
      faqs: [
        { question: "Welche Branchen zielen Sie in Genf an?", answer: "Finance, Immobilien, NGOs, Professional Services, IT, Cybersecurity, Training, Gesundheit und internationale Organisationen im passenden B2B-Kontext." },
        { question: "Französisch oder Englisch?", answer: "Beides kann nötig sein. Wir segmentieren nach Rolle, Unternehmen und internationalem Kontext." },
        { question: "Eignet sich Genf für ABM?", answer: "Ja. Hochwertige Accounts in Genf brauchen oft ABM mit mehreren Entscheidern." },
      ],
      directAnswer: {
        label: "Direkte Antwort",
        title: "Wie funktioniert Neukundenakquise in Genf?",
        body: "Lokale und internationale Accounts trennen, FR/EN nach Rolle wählen und Kaufsignale priorisieren, die echten Bedarf zeigen.",
        proofPoints: ["Saporo: 4'500 Unternehmen in Cybersecurity analysiert.", "APIDAE: 70 qualifizierte Termine.", "Segmente: Finance, NGOs, Handel, Services und Cyber."],
      },
      editorialTitle: "Warum Genf präzise Segmentierung braucht",
      editorialParagraphs: [
        "Genf ist dicht, aber heterogen. Eine Botschaft passt nicht gleichzeitig für NGO, Privatbank, Treuhand, Handelsunternehmen und Cybersecurity.",
        "Starke Kampagnen verbinden lokale Belege, internationalen Kontext und strikte Entscheiderqualifikation.",
      ],
      summaryTitle: "Kernpunkte Genf",
      summaryPoints: ["FR/EN nach Account.", "ABM für Grosskunden.", "Finance, NGOs, Handel, Services und Cyber trennen.", "Lokaler Proof zählt."],
    }),
    nl: content({
      metaTitle: "B2B prospectie Genève | Salesafspraken | devlo",
      metaDescription: "B2B prospectie in Genève voor finance, services, NGO's, vastgoed, cybersecurity en enterprise accounts met FR/EN-campagnes.",
      h1: "B2B prospectie in Genève voor gekwalificeerde beslissers",
      intro: [
        "Genève combineert finance, handel, internationale organisaties, NGO's, advieskantoren, vastgoed, cybersecurity en enterprise accounts.",
        "devlo bouwt Genève-campagnes in Frans en Engels, gesegmenteerd per sector, grootte, rol en koopsignaal.",
        "Het doel is lokale accounts, internationale hoofdzetels en filialen met potentieel te scheiden.",
      ],
      faqs: [
        { question: "Welke sectoren targeten jullie in Genève?", answer: "Finance, vastgoed, NGO's, professionele diensten, IT, cybersecurity, training, zorg en internationale organisaties wanneer B2B relevant is." },
        { question: "Frans of Engels?", answer: "Beide kunnen nodig zijn. We segmenteren per rol, bedrijf en internationale context." },
        { question: "Is Genève geschikt voor ABM?", answer: "Ja. Waardevolle Genève-accounts vragen vaak ABM met meerdere beslissers." },
      ],
      directAnswer: {
        label: "Direct antwoord",
        title: "Hoe prospecteer je in Genève?",
        body: "Scheid lokale en internationale accounts, kies FR/EN per rol en prioriteer koopsignalen die echte commerciële behoefte tonen.",
        proofPoints: ["Saporo: 4.500 bedrijven geanalyseerd in cybersecurity.", "APIDAE: 70 gekwalificeerde afspraken.", "Segmenten: finance, NGO's, handel, services en cyber."],
      },
      editorialTitle: "Waarom Genève precieze segmentatie nodig heeft",
      editorialParagraphs: [
        "Genève is dicht maar heterogeen. Eén boodschap werkt niet tegelijk voor een NGO, private bank, fiduciary, handelsbedrijf en cybersecurity buyer.",
        "Sterke campagnes combineren lokaal bewijs, internationale context en strikte kwalificatie.",
      ],
      summaryTitle: "Kernpunten Genève",
      summaryPoints: ["FR/EN per account.", "ABM voor enterprise accounts.", "Finance, NGO's, handel, services en cyber scheiden.", "Lokaal bewijs telt."],
    }),
  },
  "prospection-commerciale-lausanne": {
    fr: content({
      metaTitle: "Prospection B2B Lausanne | Agence outbound | devlo",
      metaDescription: "Prospection B2B à Lausanne et dans le canton de Vaud : génération de leads, cold email, LinkedIn, calling et rendez-vous qualifiés.",
      h1: "Prospection B2B à Lausanne et dans le canton de Vaud",
      intro: [
        "Lausanne et Vaud combinent PME, scale-ups, EPFL, medtech, éducation, prestations B2B, industrie et acteurs publics ou parapublics.",
        "Depuis notre base vaudoise, devlo transforme ce marché local en segments ICP, listes qualifiées et séquences de rendez-vous.",
        "La proximité locale aide, mais impose plus de précision : un mauvais ciblage se remarque vite.",
      ],
      faqs: [
        { question: "devlo est-elle basée près de Lausanne ?", answer: "Oui. devlo est basée dans le canton de Vaud et connaît le tissu économique lausannois et romand." },
        { question: "Quels secteurs fonctionnent à Lausanne ?", answer: "Prestations B2B, tech, medtech, éducation, industrie, immobilier, formation et fournisseurs ciblant PME ou grandes organisations." },
        { question: "Pouvez-vous cibler Vaud uniquement ?", answer: "Oui. Vaud peut être un premier batch avant extension Romandie ou Suisse." },
      ],
      directAnswer: {
        label: "Réponse directe",
        title: "Comment prospecter à Lausanne ?",
        body: "Commencez par un TAM vaudois propre, isolez EPFL/innovation, prestations B2B, PME et grands comptes, puis lancez une séquence locale avec preuves suisses.",
        proofPoints: ["Abacus : +30 prospects intéressés en immobilier romand.", "Lemanvisio : 16 rendez-vous en audiovisuel.", "Base devlo dans le canton de Vaud."],
      },
      editorialTitle: "Pourquoi Lausanne est un bon premier batch romand",
      editorialParagraphs: [
        "Lausanne offre une densité B2B forte sans la dispersion d'un marché national.",
        "Une campagne vaudoise permet de tester le message avant d'étendre vers Genève, Fribourg ou Neuchâtel.",
      ],
      summaryTitle: "Points clés Lausanne",
      summaryPoints: ["Base locale vaudoise.", "ICP par secteur.", "Preuves romandes.", "Extension progressive vers la Suisse."],
    }),
    en: content({
      metaTitle: "B2B prospecting Lausanne | Outbound agency | devlo",
      metaDescription: "B2B prospecting in Lausanne and Vaud: lead generation, cold email, LinkedIn, calling and qualified sales appointments.",
      h1: "B2B prospecting in Lausanne and Vaud",
      intro: [
        "Lausanne and Vaud combine SMEs, scale-ups, EPFL, medtech, education, B2B services, industry and public-adjacent organizations.",
        "From its Vaud base, devlo turns this local market into ICP segments, qualified lists and sales appointment sequences.",
        "Local proximity helps, but it also requires higher precision because weak targeting is visible quickly.",
      ],
      faqs: [
        { question: "Is devlo based near Lausanne?", answer: "Yes. devlo is based in Vaud and understands the Lausanne and Romandy business landscape." },
        { question: "Which sectors work in Lausanne?", answer: "B2B services, tech, medtech, education, industry, real estate, training and vendors targeting SMEs or large organizations." },
        { question: "Can you target only Vaud?", answer: "Yes. Vaud can be the first batch before expanding to Romandy or Switzerland." },
      ],
      directAnswer: {
        label: "Direct answer",
        title: "How should teams prospect in Lausanne?",
        body: "Start with a clean Vaud TAM, separate innovation, services, SMEs and larger accounts, then launch a local sequence with Swiss proof.",
        proofPoints: ["Abacus: 30+ interested prospects in Romandy real estate.", "Lemanvisio: 16 appointments in audiovisual.", "devlo is based in the canton of Vaud."],
      },
      editorialTitle: "Why Lausanne is a strong first Romandy batch",
      editorialParagraphs: [
        "Lausanne offers strong B2B density without the dispersion of a national market.",
        "A Vaud campaign can test messaging before expanding to Geneva, Fribourg or Neuchâtel.",
      ],
      summaryTitle: "Lausanne takeaways",
      summaryPoints: ["Local Vaud base.", "ICP by sector.", "Romandy proof.", "Progressive Swiss expansion."],
    }),
    de: content({
      metaTitle: "B2B-Neukundenakquise Lausanne | devlo",
      metaDescription: "B2B-Neukundenakquise in Lausanne und Waadt: Leadgenerierung, Cold E-Mail, LinkedIn, Telefon und qualifizierte Termine.",
      h1: "B2B-Neukundenakquise in Lausanne und im Kanton Waadt",
      intro: [
        "Lausanne und Waadt verbinden KMU, Scale-ups, EPFL, Medtech, Bildung, B2B-Services, Industrie und staatsnahe Organisationen.",
        "Von Waadt aus verwandelt devlo diesen lokalen Markt in ICP-Segmente, qualifizierte Listen und Termin-Sequenzen.",
        "Lokale Nähe hilft, erfordert aber präzises Targeting.",
      ],
      faqs: [
        { question: "Ist devlo nahe Lausanne?", answer: "Ja. devlo sitzt im Kanton Waadt und kennt den Markt Lausanne/Romandie." },
        { question: "Welche Branchen funktionieren?", answer: "B2B-Services, Tech, Medtech, Bildung, Industrie, Immobilien, Training und Anbieter für KMU oder Grossorganisationen." },
        { question: "Können Sie nur Waadt targetieren?", answer: "Ja. Waadt kann ein erster Batch vor Romandie- oder Schweiz-Ausbau sein." },
      ],
      directAnswer: {
        label: "Direkte Antwort",
        title: "Wie funktioniert Neukundenakquise in Lausanne?",
        body: "Mit sauberem Waadt-TAM starten, Innovation, Services, KMU und Grosskunden trennen und eine lokale Sequenz mit Schweizer Proof testen.",
        proofPoints: ["Abacus: 30+ interessierte Prospects im Immobilienmarkt Romandie.", "Lemanvisio: 16 Termine im audiovisuellen Markt.", "devlo sitzt im Kanton Waadt."],
      },
      editorialTitle: "Warum Lausanne ein guter erster Romandie-Batch ist",
      editorialParagraphs: [
        "Lausanne bietet starke B2B-Dichte ohne die Streuung eines nationalen Markts.",
        "Eine Waadt-Kampagne testet Messaging vor Genf, Freiburg oder Neuenburg.",
      ],
      summaryTitle: "Kernpunkte Lausanne",
      summaryPoints: ["Lokale Waadt-Basis.", "ICP nach Branche.", "Romandie-Proof.", "Schrittweise Expansion."],
    }),
    nl: content({
      metaTitle: "B2B prospectie Lausanne | Outbound agency | devlo",
      metaDescription: "B2B prospectie in Lausanne en Vaud: leadgeneratie, cold email, LinkedIn, bellen en gekwalificeerde afspraken.",
      h1: "B2B prospectie in Lausanne en Vaud",
      intro: [
        "Lausanne en Vaud combineren kmo's, scale-ups, EPFL, medtech, onderwijs, B2B-services, industrie en publieke spelers.",
        "Vanuit Vaud zet devlo deze lokale markt om in ICP-segmenten, gekwalificeerde lijsten en salesafspraken.",
        "Lokale nabijheid helpt, maar vraagt precieze targeting.",
      ],
      faqs: [
        { question: "Is devlo nabij Lausanne gevestigd?", answer: "Ja. devlo is gevestigd in Vaud en kent de markt Lausanne/Romandie." },
        { question: "Welke sectoren werken?", answer: "B2B-services, tech, medtech, onderwijs, industrie, vastgoed, training en leveranciers voor kmo's of grote organisaties." },
        { question: "Kunnen jullie alleen Vaud targeten?", answer: "Ja. Vaud kan de eerste batch zijn voor uitbreiding naar Romandie of Zwitserland." },
      ],
      directAnswer: {
        label: "Direct antwoord",
        title: "Hoe prospecteer je in Lausanne?",
        body: "Start met een zuivere Vaud-TAM, scheid innovatie, services, kmo's en grote accounts, en test een lokale sequence met Zwitsers bewijs.",
        proofPoints: ["Abacus: 30+ geïnteresseerde prospects in Romandy vastgoed.", "Lemanvisio: 16 afspraken in audiovisueel.", "devlo is gevestigd in Vaud."],
      },
      editorialTitle: "Waarom Lausanne een sterke eerste Romandie-batch is",
      editorialParagraphs: [
        "Lausanne biedt sterke B2B-dichtheid zonder de spreiding van een nationale markt.",
        "Een Vaud-campagne test messaging voor uitbreiding naar Genève, Fribourg of Neuchâtel.",
      ],
      summaryTitle: "Kernpunten Lausanne",
      summaryPoints: ["Lokale Vaud-basis.", "ICP per sector.", "Romandie-bewijs.", "Stapsgewijze uitbreiding."],
    }),
  },
  "prospection-commerciale-zurich": {
    fr: content({
      metaTitle: "B2B-Akquise Zurich | Leads & Termine | devlo",
      metaDescription: "Prospection B2B à Zurich pour cibler finance, tech, SaaS, industrie et grands comptes avec séquences allemandes et multicanales.",
      h1: "Prospection B2B à Zurich pour ouvrir le marché suisse alémanique",
      intro: [
        "Zurich est le marché B2B le plus dense de Suisse : finance, assurances, tech, SaaS, industrie, conseil et sièges régionaux.",
        "devlo prépare les campagnes Zurich avec messages allemands, preuves de marché, signaux d'achat et approche multicanale.",
        "Zurich est souvent le premier batch logique pour ouvrir la Suisse alémanique.",
      ],
      faqs: [
        { question: "Pourquoi commencer par Zurich ?", answer: "Zurich concentre sièges, décideurs financiers, tech et services. C'est souvent le meilleur premier batch si l'ICP est qualifié." },
        { question: "Les messages doivent-ils être en allemand ?", answer: "Dans la plupart des cas oui. L'anglais peut fonctionner pour les fonctions internationales." },
        { question: "Pouvez-vous prospecter Zurich depuis la Romandie ?", answer: "Oui, si la campagne Zurich est traitée comme un marché distinct avec copy DE et preuves adaptées." },
      ],
      directAnswer: {
        label: "Réponse directe",
        title: "Comment prospecter à Zurich ?",
        body: "Zurich doit être traité comme un marché DE prioritaire : comptes à forte valeur, messages allemands, signaux d'achat et coordination email, LinkedIn et calling.",
        proofPoints: ["CareerLunch : 54 rendez-vous qualifiés en DACH.", "Saporo : 4'500 entreprises analysées.", "Finance, SaaS, industrie et conseil à segmenter."],
      },
      editorialTitle: "Pourquoi Zurich est le point d'entrée de la Deutschschweiz",
      editorialParagraphs: [
        "Zurich concentre les sièges et les budgets, mais aussi la concurrence commerciale.",
        "Une campagne Zurich doit isoler finance, SaaS, industrie et conseil au lieu de mélanger tout le marché.",
      ],
      summaryTitle: "Points clés Zurich",
      summaryPoints: ["Copy DE prioritaire.", "Finance, SaaS et industrie à segmenter.", "ABM pour grands comptes.", "Calling utile pour qualification."],
    }),
    en: content({
      metaTitle: "B2B prospecting Zurich | Sales appointments | devlo",
      metaDescription: "B2B prospecting in Zurich for finance, tech, SaaS, industry and enterprise accounts with German multichannel sequences.",
      h1: "B2B prospecting in Zurich to open German-speaking Switzerland",
      intro: [
        "Zurich is Switzerland's densest B2B market: finance, insurance, tech, SaaS, industry, consulting and regional headquarters.",
        "devlo prepares Zurich campaigns with German messaging, market proof, buying signals and multichannel execution.",
        "Zurich is often the logical first batch for German-speaking Switzerland.",
      ],
      faqs: [
        { question: "Why start with Zurich?", answer: "Zurich concentrates headquarters and finance, tech and services decision-makers." },
        { question: "Should messages be in German?", answer: "Usually yes. English can work for international roles." },
        { question: "Can you prospect Zurich from Romandy?", answer: "Yes, if Zurich is treated as a separate market with DE copy and adapted proof." },
      ],
      directAnswer: {
        label: "Direct answer",
        title: "How should teams prospect in Zurich?",
        body: "Treat Zurich as a priority German-language market: high-value accounts, German copy, buying signals and coordinated email, LinkedIn and calls.",
        proofPoints: ["CareerLunch: 54 qualified sales appointments across DACH.", "Saporo: 4,500 companies analyzed.", "Segment finance, SaaS, industry and consulting."],
      },
      editorialTitle: "Why Zurich is the entry point to Deutschschweiz",
      editorialParagraphs: [
        "Zurich concentrates headquarters and budget, but also commercial competition.",
        "A Zurich campaign should separate finance, SaaS, industry and consulting instead of mixing the whole market.",
      ],
      summaryTitle: "Zurich takeaways",
      summaryPoints: ["German copy first.", "Segment finance, SaaS and industry.", "ABM for enterprise accounts.", "Use calls for qualification."],
    }),
    de: content({
      metaTitle: "B2B-Neukundenakquise Zürich | Leads & Termine | devlo",
      metaDescription: "B2B-Neukundenakquise in Zürich für Finance, Tech, SaaS, Industrie und Grosskunden mit deutschen Multichannel-Sequenzen.",
      h1: "B2B-Neukundenakquise in Zürich für den Einstieg in die Deutschschweiz",
      intro: [
        "Zürich ist der dichteste B2B-Markt der Schweiz: Finance, Versicherungen, Tech, SaaS, Industrie, Beratung und regionale Headquarters.",
        "devlo bereitet Zürich-Kampagnen mit deutscher Copy, Marktbelegen, Kaufsignalen und Multichannel-Ausführung vor.",
        "Zürich ist oft der logische erste Batch für die Deutschschweiz.",
      ],
      faqs: [
        { question: "Warum mit Zürich starten?", answer: "Zürich konzentriert Headquarters sowie Finance-, Tech- und Service-Entscheider." },
        { question: "Müssen Nachrichten deutsch sein?", answer: "Meist ja. Englisch funktioniert bei internationalen Rollen." },
        { question: "Kann devlo Zürich aus der Romandie bearbeiten?", answer: "Ja, wenn Zürich als eigener Markt mit DE-Copy und passenden Belegen behandelt wird." },
      ],
      directAnswer: {
        label: "Direkte Antwort",
        title: "Wie funktioniert B2B-Neukundenakquise in Zürich?",
        body: "Zürich sollte als prioritärer deutschsprachiger Markt behandelt werden: hochwertige Accounts, deutsche Copy, Kaufsignale und koordinierte E-Mail-, LinkedIn- und Telefonsequenzen.",
        proofPoints: ["CareerLunch: 54 qualifizierte Termine in DACH.", "Saporo: 4'500 Unternehmen analysiert.", "Finance, SaaS, Industrie und Beratung segmentieren."],
      },
      editorialTitle: "Warum Zürich der Einstieg in die Deutschschweiz ist",
      editorialParagraphs: [
        "Zürich konzentriert Headquarters und Budget, aber auch kommerzielle Konkurrenz.",
        "Eine Zürich-Kampagne sollte Finance, SaaS, Industrie und Beratung getrennt behandeln.",
      ],
      summaryTitle: "Kernpunkte Zürich",
      summaryPoints: ["Deutsche Copy zuerst.", "Finance, SaaS und Industrie trennen.", "ABM für Grosskunden.", "Telefon für Qualifikation nutzen."],
    }),
    nl: content({
      metaTitle: "B2B prospectie Zürich | Salesafspraken | devlo",
      metaDescription: "B2B prospectie in Zürich voor finance, tech, SaaS, industrie en enterprise accounts met Duitse multichannel sequences.",
      h1: "B2B prospectie in Zürich voor Duitstalig Zwitserland",
      intro: [
        "Zürich is de dichtste B2B-markt van Zwitserland: finance, verzekeringen, tech, SaaS, industrie, consulting en regionale hoofdzetels.",
        "devlo bereidt Zürich-campagnes voor met Duitse copy, marktbewijs, koopsignalen en multichannel uitvoering.",
        "Zürich is vaak de logische eerste batch voor Duitstalig Zwitserland.",
      ],
      faqs: [
        { question: "Waarom starten met Zürich?", answer: "Zürich concentreert hoofdzetels en beslissers in finance, tech en services." },
        { question: "Moeten berichten in het Duits?", answer: "Meestal wel. Engels kan werken voor internationale rollen." },
        { question: "Kunnen jullie Zürich vanuit Romandie prospecteren?", answer: "Ja, als Zürich als aparte markt wordt behandeld met DE-copy en aangepast bewijs." },
      ],
      directAnswer: {
        label: "Direct antwoord",
        title: "Hoe prospecteer je in Zürich?",
        body: "Behandel Zürich als prioritaire Duitstalige markt: waardevolle accounts, Duitse copy, koopsignalen en gecoördineerde e-mail, LinkedIn en calls.",
        proofPoints: ["CareerLunch: 54 gekwalificeerde afspraken in DACH.", "Saporo: 4.500 bedrijven geanalyseerd.", "Finance, SaaS, industrie en consulting segmenteren."],
      },
      editorialTitle: "Waarom Zürich de ingang naar Deutschschweiz is",
      editorialParagraphs: [
        "Zürich concentreert hoofdzetels en budget, maar ook commerciële concurrentie.",
        "Een Zürich-campagne moet finance, SaaS, industrie en consulting apart behandelen.",
      ],
      summaryTitle: "Kernpunten Zürich",
      summaryPoints: ["Duitse copy eerst.", "Finance, SaaS en industrie segmenteren.", "ABM voor enterprise accounts.", "Bellen voor kwalificatie."],
    }),
  },
  "prospection-commerciale-dach": {
    fr: content({
      metaTitle: "Prospection B2B DACH | Allemagne Autriche Suisse",
      metaDescription: "Prospection B2B DACH pour cibler Allemagne, Autriche et Suisse alémanique avec messages allemands, signaux d'achat et RDV qualifiés.",
      h1: "Prospection B2B DACH pour développer Allemagne, Autriche et Suisse alémanique",
      intro: [
        "Le DACH n'est pas un seul marché uniforme. Allemagne, Autriche et Suisse alémanique partagent la langue allemande, pas les mêmes codes.",
        "devlo distingue pays, régions, preuves et objections commerciales avant d'envoyer les séquences.",
        "Cette approche aide les entreprises francophones à passer à une exécution germanophone sans perdre en précision.",
      ],
      faqs: [
        { question: "Quelle différence entre DACH et Suisse alémanique ?", answer: "La Suisse alémanique fait partie du DACH, mais doit rester séparée dans le ciblage et le messaging." },
        { question: "Avez-vous déjà obtenu des résultats en DACH ?", answer: "Oui. CareerLunch a généré 54 rendez-vous qualifiés sur le marché DACH." },
        { question: "Faut-il lancer tous les pays ensemble ?", answer: "Pas toujours. Nous recommandons souvent un premier batch par pays ou sous-région." },
      ],
      directAnswer: {
        label: "Réponse directe",
        title: "Comment lancer une campagne DACH ?",
        body: "Une campagne DACH doit séparer Allemagne, Autriche et Suisse alémanique, puis tester messages allemands, preuves locales et objections par pays avant d'augmenter le volume.",
        proofPoints: ["CareerLunch : 54 rendez-vous qualifiés en DACH.", "Copy allemande native.", "Allemagne, Autriche et Suisse alémanique traitées séparément."],
      },
      editorialTitle: "Pourquoi le DACH doit être segmenté",
      editorialParagraphs: [
        "Le risque principal est de confondre langue commune et marché commun.",
        "Une bonne campagne DACH compare les signaux et taux de réponse par pays avant d'augmenter le volume.",
      ],
      summaryTitle: "Points clés DACH",
      summaryPoints: ["Pays séparés.", "Copy allemande native.", "Preuves locales.", "Augmentation du volume après validation par batch."],
    }),
    en: content({
      metaTitle: "B2B prospecting DACH | Germany Austria Switzerland",
      metaDescription: "B2B prospecting across DACH: Germany, Austria and German-speaking Switzerland with German messaging, buying signals and qualified appointments.",
      h1: "B2B prospecting across DACH for Germany, Austria and Switzerland",
      intro: [
        "DACH is not one uniform market. Germany, Austria and German-speaking Switzerland share German, but not the same commercial codes.",
        "devlo separates countries, regions, proof points and objections before launching sequences.",
        "This approach helps teams move into German-language outbound without losing precision.",
      ],
      faqs: [
        { question: "How is DACH different from German-speaking Switzerland?", answer: "German-speaking Switzerland is part of DACH, but it should remain separate in targeting and messaging." },
        { question: "Do you have DACH proof?", answer: "Yes. CareerLunch generated 54 qualified sales appointments across DACH." },
        { question: "Should all countries launch together?", answer: "Not always. We often recommend a first batch by country or sub-region." },
      ],
      directAnswer: {
        label: "Direct answer",
        title: "How should teams launch a DACH campaign?",
        body: "Separate Germany, Austria and German-speaking Switzerland, then test German messaging, local proof and objections by country before increasing volume.",
        proofPoints: ["CareerLunch: 54 qualified sales appointments across DACH.", "Native German copy.", "Separate Germany, Austria and German-speaking Switzerland."],
      },
      editorialTitle: "Why DACH must be segmented",
      editorialParagraphs: [
        "The main risk is confusing a shared language with a shared market.",
        "A strong DACH campaign compares signals and reply rates by country before increasing volume.",
      ],
      summaryTitle: "DACH takeaways",
      summaryPoints: ["Separate countries.", "Native German copy.", "Local proof.", "Increase volume after batch validation."],
    }),
    de: content({
      metaTitle: "B2B-Neukundenakquise DACH | DE AT CH | devlo",
      metaDescription: "B2B-Neukundenakquise in DACH: Deutschland, Österreich und Deutschschweiz mit deutscher Copy, Kaufsignalen und qualifizierten Terminen.",
      h1: "B2B-Neukundenakquise in DACH für Deutschland, Österreich und Schweiz",
      intro: [
        "DACH ist kein einheitlicher Markt. Deutschland, Österreich und die Deutschschweiz teilen die Sprache, aber nicht dieselben kommerziellen Codes.",
        "devlo trennt Länder, Regionen, Proof Points und Einwände vor dem Launch.",
        "So können Teams deutschsprachigen Outbound starten, ohne Präzision zu verlieren.",
      ],
      faqs: [
        { question: "Was ist der Unterschied zur Deutschschweiz?", answer: "Die Deutschschweiz gehört zu DACH, muss aber in Targeting und Messaging separat bleiben." },
        { question: "Gibt es DACH-Nachweise?", answer: "Ja. CareerLunch generierte 54 qualifizierte Termine im DACH-Markt." },
        { question: "Sollten alle Länder zusammen starten?", answer: "Nicht immer. Oft empfehlen wir einen ersten Batch pro Land oder Subregion." },
      ],
      directAnswer: {
        label: "Direkte Antwort",
        title: "Wie startet man eine DACH-Kampagne?",
        body: "Deutschland, Österreich und Deutschschweiz trennen, dann deutsche Copy, lokale Belege und Einwände pro Land testen, bevor das Volumen erhöht wird.",
        proofPoints: ["CareerLunch: 54 qualifizierte Termine in DACH.", "Native deutsche Copy.", "Deutschland, Österreich und Deutschschweiz separat behandeln."],
      },
      editorialTitle: "Warum DACH segmentiert werden muss",
      editorialParagraphs: [
        "Das Hauptrisiko ist, gemeinsame Sprache mit gemeinsamem Markt zu verwechseln.",
        "Eine starke DACH-Kampagne vergleicht Signale und Antwortquoten pro Land vor mehr Volumen.",
      ],
      summaryTitle: "Kernpunkte DACH",
      summaryPoints: ["Länder trennen.", "Native deutsche Copy.", "Lokaler Proof.", "Skalierung nach Batch-Validierung."],
    }),
    nl: content({
      metaTitle: "B2B prospectie DACH | Duitsland Oostenrijk Zwitserland",
      metaDescription: "B2B prospectie in DACH: Duitsland, Oostenrijk en Duitstalig Zwitserland met Duitse copy, koopsignalen en afspraken.",
      h1: "B2B prospectie in DACH voor Duitsland, Oostenrijk en Zwitserland",
      intro: [
        "DACH is geen uniforme markt. Duitsland, Oostenrijk en Duitstalig Zwitserland delen taal, maar niet dezelfde commerciële codes.",
        "devlo scheidt landen, regio's, bewijs en bezwaren voor lancering.",
        "Zo kunnen teams Duitstalige outbound starten zonder precisie te verliezen.",
      ],
      faqs: [
        { question: "Wat is anders dan Duitstalig Zwitserland?", answer: "Duitstalig Zwitserland is deel van DACH, maar moet apart blijven in targeting en messaging." },
        { question: "Hebben jullie DACH-bewijs?", answer: "Ja. CareerLunch genereerde 54 gekwalificeerde afspraken in DACH." },
        { question: "Moeten alle landen tegelijk starten?", answer: "Niet altijd. Vaak adviseren we een eerste batch per land of subregio." },
      ],
      directAnswer: {
        label: "Direct antwoord",
        title: "Hoe start je een DACH-campagne?",
        body: "Scheid Duitsland, Oostenrijk en Duitstalig Zwitserland, test Duitse copy, lokaal bewijs en bezwaren per land, en verhoog daarna pas het volume.",
        proofPoints: ["CareerLunch: 54 gekwalificeerde afspraken in DACH.", "Native Duitse copy.", "Duitsland, Oostenrijk en Duitstalig Zwitserland apart behandelen."],
      },
      editorialTitle: "Waarom DACH segmentatie nodig heeft",
      editorialParagraphs: [
        "Het grootste risico is gedeelde taal verwarren met gedeelde markt.",
        "Een sterke DACH-campagne vergelijkt signalen en reply rates per land voor meer volume.",
      ],
      summaryTitle: "Kernpunten DACH",
      summaryPoints: ["Landen scheiden.", "Native Duitse copy.", "Lokaal bewijs.", "Schalen na batchvalidatie."],
    }),
  },
};
