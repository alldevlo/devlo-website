/**
 * Translates Insights pages (hub + buying-signals) to EN/DE/NL via DeepL.
 * Output: src/lib/i18n/insights-content.json
 *
 * Usage: DEEPL_API_KEY=xxx node scripts/translate_insights_deepl.mjs
 */

import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const deeplKey = process.env.DEEPL_API_KEY;
if (!deeplKey) throw new Error('Missing DEEPL_API_KEY');

const TARGETS = [
  { locale: 'en', deepl: 'EN-GB' },
  { locale: 'de', deepl: 'DE' },
  { locale: 'nl', deepl: 'NL' },
];

const ENDPOINTS = [
  'https://api.deepl.com/v2/translate',
  'https://api-free.deepl.com/v2/translate',
];

/* ------------------------------------------------------------------ */
/*  DeepL helpers (same pattern as translate_fr_only_pages_deepl.mjs)  */
/* ------------------------------------------------------------------ */

function shouldSkipString(value) {
  if (!value || typeof value !== 'string') return true;
  const v = value.trim();
  if (!v) return true;
  if (v.startsWith('/')) return true;
  if (/^https?:\/\//i.test(v)) return true;
  if (/\.(webp|png|jpg|jpeg|svg|gif|pdf|mp4|webm)$/i.test(v)) return true;
  if (/^\+?[0-9\s().-]{8,}$/.test(v)) return true;
  if (/^[A-Za-z0-9_-]{2,}$/.test(v) && !/[\s'']/.test(v) && v.length < 18) return true;
  return false;
}

function collectStrings(node, out, key = '') {
  if (Array.isArray(node)) {
    for (const item of node) collectStrings(item, out, key);
    return;
  }
  if (!node || typeof node !== 'object') {
    if (typeof node === 'string' && !shouldSkipString(node)) out.add(node);
    return;
  }
  for (const [k, v] of Object.entries(node)) {
    collectStrings(v, out, k);
  }
}

function applyTranslations(node, map, key = '') {
  if (Array.isArray(node)) return node.map((item) => applyTranslations(item, map, key));
  if (!node || typeof node !== 'object') {
    if (typeof node === 'string' && !shouldSkipString(node)) return map.get(node) || node;
    return node;
  }
  const out = {};
  for (const [k, v] of Object.entries(node)) {
    out[k] = applyTranslations(v, map, k);
  }
  return out;
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

let totalCharsSent = 0;

async function translateBatch(texts, targetLang, attempt = 0) {
  if (texts.length === 0) return [];
  let lastError = '';
  for (const endpoint of ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Authorization: `DeepL-Auth-Key ${deeplKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: texts, source_lang: 'FR', target_lang: targetLang, preserve_formatting: true }),
      });
      const raw = await response.text();
      if (!response.ok) { lastError = `${response.status}:${raw.slice(0, 180)}`; continue; }
      const json = JSON.parse(raw);
      const rows = Array.isArray(json?.translations) ? json.translations : [];
      if (rows.length !== texts.length) { lastError = `invalid-count:${rows.length}/${texts.length}`; continue; }
      totalCharsSent += texts.reduce((sum, t) => sum + t.length, 0);
      return rows.map((row) => row?.text || '');
    } catch (err) {
      lastError = String(err.message || err);
      console.warn(`  fetch error on ${endpoint}: ${lastError}`);
    }
  }
  if (attempt < 4) {
    const delay = 1000 * Math.pow(2, attempt);
    console.warn(`  retry ${attempt + 1}/4 in ${delay}ms for ${targetLang}...`);
    await sleep(delay);
    return translateBatch(texts, targetLang, attempt + 1);
  }
  throw new Error(`DeepL translate failed (${targetLang}) ${lastError}`);
}

async function buildTranslationMap(source, label) {
  const strings = new Set();
  collectStrings(source, strings);
  const all = Array.from(strings);
  console.log(`${label}: ${all.length} strings to translate`);

  const maps = {};
  for (const target of TARGETS) {
    const map = new Map();
    const chunkSize = 35;
    for (let i = 0; i < all.length; i += chunkSize) {
      const chunk = all.slice(i, i + chunkSize);
      const translated = await translateBatch(chunk, target.deepl);
      chunk.forEach((src, idx) => map.set(src, translated[idx] || src));
    }
    maps[target.locale] = map;
    console.log(`  ${label}: translated ${target.locale}`);
  }
  return maps;
}

async function buildBundle(source, label) {
  const maps = await buildTranslationMap(source, label);
  const result = { fr: source };
  for (const target of TARGETS) {
    result[target.locale] = applyTranslations(source, maps[target.locale]);
  }
  return result;
}

function write(outFile, data) {
  const outPath = resolve(process.cwd(), outFile);
  writeFileSync(outPath, JSON.stringify(data, null, 2));
  console.log(`written: ${outPath}`);
}

/* ------------------------------------------------------------------ */
/*  Source content — Insights Hub                                       */
/* ------------------------------------------------------------------ */

const insightsHub = {
  title: "Insights",
  subtitle: "Guides pratiques, listes de référence et ressources pour améliorer votre prospection B2B.",
  metaTitle: "Insights — Ressources et guides pour la prospection B2B",
  metaDescription: "Guides pratiques, listes de reference et ressources pour ameliorer votre prospection B2B. Signaux d'achat, automatisation IA, et strategies outbound.",
  breadcrumbs: {
    home: "Accueil",
    insights: "Insights",
  },
  cards: [
    {
      title: "94 Signaux d'Intention d'Achat B2B",
      description: "La liste la plus complète de signaux d'achat B2B. 7 catégories, outils de détection, et niveaux d'intensité pour chaque signal.",
      tag: "Liste",
      date: "Mars 2026",
    },
    {
      title: "Dictation-Clean",
      description: "Transformez vos dictées vocales en contenus structurés avec Wispr Flow et Claude Code. Guide étape par étape.",
      tag: "Guide",
      date: "Mars 2026",
    },
  ],
  cta: {
    heading: "Vous cherchez des résultats concrets ?",
    body: "devlo aide les entreprises B2B à générer des rendez-vous qualifiés grâce à la prospection outbound automatisée.",
    primaryButton: "Réserver une consultation",
    secondaryButton: "Voir nos services",
  },
  readLink: "Lire →",
  lastUpdated: "Dernière mise à jour : mars 2026",
};

/* ------------------------------------------------------------------ */
/*  Source content — Buying Signals                                     */
/* ------------------------------------------------------------------ */

const buyingSignals = {
  hero: {
    title: "Liste des Signaux d'Intention d'Achat B2B",
    subtitle: "La liste la plus complète pour identifier vos prospects prêts à acheter — avant vos concurrents. 94 signaux classés par catégorie, intensité et outil de détection.",
    authorRole: "Fondateur de",
    dateLabel: "Mars 2026",
  },
  breadcrumbs: {
    home: "Accueil",
    insights: "Insights",
    buyingSignals: "94 Signaux d'Achat B2B",
  },
  metaTitle: "94 Signaux d'Intention d'Achat B2B — Le Guide Complet pour Identifier vos Prospects",
  metaDescription: "Decouvrez 94 signaux d'achat B2B classes par categorie (entreprise, personne, tech stack, usage produit, communaute, evenements). Detectez les prospects prets a acheter avant vos concurrents.",
  intensityLabels: {
    "tres-forte": "Très forte",
    "forte": "Forte",
    "moyenne": "Moyenne",
    "faible": "Faible",
  },
  searchPlaceholder: "Rechercher un signal...",
  allTab: "Tous",
  resultsCounter: "{count} signaux affichés",
  resultsSingular: "{count} signal affiché",
  categoryTooltips: {
    entreprise: "Signaux liés aux changements organisationnels, financiers et stratégiques d'une entreprise",
    personne: "Signaux liés aux mouvements de carrière et à l'activité des décideurs",
    "tech-stack": "Signaux liés aux changements technologiques détectables sur le site web",
    "usage-produit": "Signaux liés au comportement des utilisateurs dans votre produit",
    communaute: "Signaux détectés dans les forums, communautés en ligne et réseaux sociaux",
    evenements: "Signaux liés à la participation ou l'organisation d'événements professionnels",
    "lemlist-intent": "Signaux d'intention détectés via les outils de tracking web (lemlist, snitcher, Bombora)",
  },
  categoryTitles: [
    "Signaux Entreprise",
    "Signaux Personne",
    "Signaux Tech Stack",
    "Signaux Usage Produit",
    "Signaux Communautaires",
    "Signaux Événements",
    "Signaux d'Intention Lemlist",
  ],
  signalNames: [
    "Recrutement massif",
    "Levée de fonds récente",
    "Opportunité commerciale en sommeil",
    "Pic d'ouvertures d'emails",
    "Changement de législation",
    "Changement de politique d'une plateforme",
    "Fermeture ou rachat d'un concurrent",
    "Vague de licenciements",
    "Avis négatif sur un produit concurrent",
    "Abandon de formulaire ou chat",
    "Ticket support chez un concurrent",
    "Couverture médiatique négative",
    "Consommation de contenu",
    "Rapport trimestriel / Publication 10-K",
    "Participation à un webinaire",
    "Fusion-acquisition",
    "Prix ou distinction reçue",
    "Étude de cas client publiée",
    "Expansion géographique",
    "Expiration d'offre",
    "Bounce d'email prospect ou client",
    "Jalon professionnel",
    "Couverture médiatique positive",
    "Publication d'une étude de cas par un concurrent",
    "Renouvellement de contrat concurrent",
    "Dirigeant qui mentionne un problème en interview",
    "Revue trimestrielle planifiée (QBR)",
    "Déménagement ou expansion de bureaux",
    "Changement de poste d'un champion",
    "Recrutement d'un profil ICP",
    "Nouveau dirigeant (CEO, C-level, board)",
    "Offre d'emploi",
    "Changement de poste chez un concurrent",
    "Promotion d'un client ou prospect",
    "Passage dans un podcast",
    "Post sur les réseaux sociaux",
    "Article ou thought leadership publié",
    "Anniversaire ou événement personnel",
    "Adjacence tech stack",
    "Dépréciation d'une fonctionnalité concurrente",
    "Suppression d'une intégration",
    "Changement technologique du site web",
    "Ajout d'un tag analytics",
    "Ajout d'un tag publicitaire",
    "Refonte de site web",
    "Lancement d'un produit ou fonctionnalité",
    "Pic ou chute de trafic web",
    "Lancement d'une application mobile",
    "Pic d'utilisation du produit",
    "Identification IT ou compliance",
    "Pic puis chute d'utilisation",
    "Workspaces multiples dans une même entreprise",
    "Demande de fonctionnalité",
    "Demande d'extension de période d'essai",
    "Vidéo produit visionnée",
    "Utilisation du calculateur ROI",
    "Partage de compte avec un collègue",
    "Export de données",
    "Génération de clé API",
    "Abandon de panier",
    "Score NPS négatif",
    "Demande de démo ou essai gratuit",
    "Actif dans une communauté en ligne",
    "Question posée dans une communauté",
    "Douleur mentionnée dans un forum",
    "Feature request upvotée",
    "Membre de la communauté d'un concurrent",
    "Commentaire sur un blog de l'industrie",
    "Avis laissé sur un concurrent (G2)",
    "Participation à une conférence concurrente",
    "Partage de contenu d'un influenceur",
    "Abonnement à une newsletter concurrente",
    "Follow d'un concurrent sur les réseaux",
    "Téléchargement de contenu concurrent",
    "Participation à un webinaire concurrent",
    "Mention dans une discussion en ligne",
    "Prise de parole à une conférence",
    "Inscription à un événement de l'industrie",
    "Sponsoring d'un événement",
    "Organisation d'un événement ou webinaire",
    "Stand à un salon professionnel",
    "Activité sur la page pricing",
    "Consultation de la documentation",
    "Visite de page étude de cas",
    "Visite de la page intégrations",
    "Visite de la page sécurité",
    "Lecture répétée d'un article support",
    "Partage de contenu concurrent",
    "Visite de page de comparaison",
    "Demande de démo ou d'essai",
    "Téléchargement de contenu gaté",
    "Changement de description de profil",
    "Adhésion à un groupe professionnel",
    "Certification ou formation terminée",
    "Page comparaison concurrent visitée",
    "Article support consulté plusieurs fois",
  ],
  signalDescriptions: [
    "Quand une entreprise recrute massivement, elle a besoin de nouveaux outils pour équiper ses équipes. 50 nouveaux commerciaux ? Il leur faut un CRM, des outils d'engagement, de la formation. Chaque poste ouvert est un budget débloqué.",
    "Après une levée, les entreprises dépensent pendant environ 6 mois. Le moment idéal se situe entre 30 et 90 jours après l'annonce : elles recrutent, construisent leur stack technologique et planifient leur croissance.",
    "Un deal perdu n'est jamais vraiment mort. Budget libéré ? Nouveau décideur ? Concurrent qui a déçu ? Ces opportunités ont un taux de conversion 3 fois supérieur au cold outreach car la relation existe déjà.",
    "Un email ouvert 8 fois par la même personne, ce n'est pas de l'obsession — c'est votre champion qui le transmet en interne. Plusieurs ouvertures = plusieurs parties prenantes = comité d'achat actif.",
    "Les nouvelles réglementations créent de l'urgence comme rien d'autre. Le RGPD a fait dépenser des millions aux entreprises du jour au lendemain. Nouvelles lois = budgets obligatoires + attention de la direction + cycles de vente raccourcis.",
    "Quand Gmail change ses exigences pour les expéditeurs, les outils d'emailing font fortune en quelques semaines. Les changements de plateforme créent une douleur immédiate. Votre fenêtre de tir : 30 à 90 jours maximum.",
    "Quand un concurrent ferme ou se fait racheter, des milliers d'utilisateurs cherchent une alternative. Pas besoin de prospection froide — ils viennent à vous. Préparez vos pages de comparaison et vos offres de migration.",
    "Les licenciements signalent un mode efficacité. Les budgets se resserrent, mais les outils qui promettent un ROI immédiat ou de l'automatisation attirent encore plus l'attention. Vendez de la consolidation et de la productivité.",
    "Les critiques sur G2 ou Reddit sont des signaux d'achat déguisés. Quelqu'un de suffisamment frustré pour écrire un avis est suffisamment frustré pour changer de solution.",
    "Ils ont rempli 80% du formulaire de démo et ont abandonné. Ce n'est pas un rejet — c'est de l'hésitation. Un simple email de relance convertit 20 à 30% de ces abandons en rendez-vous.",
    "Les tickets support = des douleurs identifiées = des budgets qui se débloquent. Quelqu'un qui galère avec son outil actuel est mentalement en train de chercher une alternative.",
    "Une fuite de données rend les outils de sécurité indispensables. De mauvais résultats ? Les outils de réduction des coûts sont approuvés plus vite. Approchez avec empathie, pas opportunisme.",
    "Clics sur vos emails, inscriptions aux webinaires, téléchargement de guides — ce sont des signaux d'intention. Le contenu à forte intention (pages prix, comparatifs) vaut 10 fois plus que les articles de blog.",
    "Les appels aux analystes révèlent les priorités. Le CEO mentionne 'expansion internationale' ? Les outils de localisation, de paiement, de conformité deviennent urgents.",
    "Les participants qui restent plus de 30 minutes comparent des solutions, prennent des notes, construisent un business case. Relancez dans les 24 heures pendant que votre marque est fraîche.",
    "Les M&A créent le chaos : outils en doublon, systèmes incompatibles, équipes déboussolées. La consolidation est obligatoire et quelqu'un va se faire remplacer.",
    "Les récompenses = validation + attention des parties prenantes + budgets pour maintenir l'élan. Félicitez et enchaînez avec une proposition pertinente.",
    "Quand un client vous donne un témoignage, il est au maximum de sa satisfaction. C'est le moment d'élargir la relation et d'explorer des fonctionnalités avancées.",
    "Nouveaux marchés = nouvelles contraintes réglementaires, nouveaux moyens de paiement, nouveaux besoins de support. Soyez l'expert local qui facilite l'expansion.",
    "Fin de période d'essai ? Remise qui expire ? L'expiration crée de l'urgence, mais seulement si le prospect a vu la valeur. Peignez la douleur du retour en arrière.",
    "Un email qui rebondit = changement de poste, licenciement, migration d'inbox. Si c'est un champion qui est parti, retrouvez-le dans sa nouvelle entreprise.",
    "Anniversaire de travail, promotion, certification — ce sont des occasions de créer du lien. Les promotions signifient aussi de nouveaux budgets.",
    "Un article dans la presse = mode croissance. Ils recrutent, lèvent des fonds, ou lancent quelque chose d'important. Surfez sur l'élan positif.",
    "Quand vos concurrents publient des études de cas, ils affichent leur liste de clients — et leurs lacunes. Lisez entre les lignes et contactez des entreprises similaires.",
    "Quand un contrat arrive à échéance, le prospect est en mode évaluation, les budgets sont révisés. C'est le moment idéal pour proposer une alternative.",
    "Quand un dirigeant parle publiquement de ses défis, il diffuse un signal d'achat. Il dit essentiellement : je cherche des solutions pour ce problème.",
    "Les QBR sont des moments de décision. Arriver avec des données pertinentes juste avant une QBR permet d'influencer les priorités et les budgets.",
    "L'expansion physique signifie de nouveaux besoins technologiques — nouvelles licences, nouvelle infrastructure, nouvelles mesures de sécurité.",
    "Vos meilleurs clients restent vos meilleurs vendeurs, même après leur départ. Un champion qui aimait votre produit le poussera dans sa nouvelle entreprise. La fenêtre de 90 jours est critique.",
    "Un nouveau Head of Sales, CMO ou VP Engineering construit sa stack de zéro. Il n'est pas fidèle à l'ancien fournisseur — il est fidèle à ce qui marche. Les 60 premiers jours sont votre fenêtre.",
    "Nouveaux dirigeants = nouveaux budgets, nouveaux fournisseurs, mandat de faire ses preuves. Les 100 premiers jours, ils repensent le stack et challengent les contrats existants.",
    "Les offres d'emploi sont des approbations de budget déguisées. Un Head of Sales Ops ? Ils ont besoin de CRM et d'analytics. Contactez-les AVANT que la personne ne commence.",
    "Les ex-employés de vos concurrents connaissent les faiblesses du produit, la roadmap, les raisons de churn. Ne les pitchez pas — apprenez d'eux.",
    "Promotion = nouvelles responsabilités + nouveaux budgets + pression de quick wins. Félicitez et proposez de résoudre leur nouveau problème.",
    "Les invités de podcast sont des thought leaders qui cherchent à construire leur autorité. Engagez authentiquement en citant un point précis de leur intervention.",
    "Un post LinkedIn qui exprime une douleur est une invitation à aider. Commentez avec de la valeur (pas un pitch), puis glissez en DM.",
    "Quand un prospect publie du contenu, il signale ses priorités. S'y engager authentiquement montre que vous avez fait vos devoirs.",
    "Marathons, naissances — les jalons personnels rendent les gens humains. Un rapide félicitations sans rien demander construit la relation pour le long terme.",
    "Connaître le stack technologique d'une entreprise permet de personnaliser votre approche et de montrer de l'empathie avec leurs pain points spécifiques.",
    "Quand un concurrent abandonne une fonctionnalité, tous ses utilisateurs qui en dépendaient sont soudain sur le marché. Migration forcée = votre opportunité.",
    "Retirer une intégration du stack signale que l'outil ne donnait pas satisfaction. L'entreprise cherche une meilleure alternative.",
    "Les changements de stack web signalent des initiatives stratégiques plus larges ou des douleurs de croissance. Migration vers Shopify ? Ils modernisent.",
    "L'ajout d'un outil d'analytics montre une volonté de comprendre les comportements utilisateurs. Souvent lié à l'arrivée d'un nouveau responsable marketing ou growth.",
    "L'installation d'un pixel ou tag publicitaire révèle une montée en puissance du budget pub et une volonté de mesurer le ROI des dépenses.",
    "Un nouveau site web signale un changement stratégique ou une nouvelle direction go-to-market. Ce niveau d'investissement suggère de l'ambition et des budgets.",
    "Le lancement d'un nouveau produit peut signifier un changement de stratégie, une nouvelle ligne de business, ou un nouveau segment client à équiper.",
    "Un trafic web qui double signale une croissance rapide (besoin de scaler). S'il chute, c'est un risque de churn. Dans les deux cas, proposez de l'aide.",
    "Le lancement d'une app signale un investissement mobile-first et crée de nouveaux besoins techniques (analytics mobile, tests, infrastructure).",
    "Plus d'utilisateurs, plus de fonctionnalités, plus de sessions = ils retirent de la valeur. Frappez quand la satisfaction est haute, pas à l'approche du renouvellement.",
    "Quand l'IT ou la compliance se connecte, ce n'est pas pour naviguer — c'est pour évaluer. Questionnaires de sécurité, demandes SSO = deal en cours. Fournissez proactivement vos docs de conformité.",
    "Un usage qui monte en flèche puis s'effondre = activation ratée ou attentes non satisfaites. C'est le stade presque churné. Réagissez vite pour comprendre ce qui n'a pas fonctionné.",
    "Plusieurs workspaces = confusion ou expansion. Consolidez-les ou upsell vers un plan entreprise. Dans les deux cas : plusieurs points de contact = deal plus gros.",
    "Les feature requests montrent ce qui bloque l'adoption ou empêche l'expansion. Ce sont des opportunités en or pour montrer votre roadmap.",
    "Une extension de trial indique un intérêt réel mais aussi des blockers potentiels — budget, buy-in interne, ou questions techniques. Le deal est là, aidez à lever les obstacles.",
    "Le taux de complétion des vidéos montre l'intérêt réel et aide à identifier les fonctionnalités qui comptent le plus pour le prospect.",
    "Quelqu'un qui utilise votre calculateur ROI est en train de construire un business case pour sa hiérarchie. Il est proche de la décision.",
    "Le partage d'accès montre une recherche de buy-in interne et un élargissement de l'évaluation. Chaque nouveau membre ajouté est un signal d'expansion.",
    "L'export peut signaler une adoption (intégration avec d'autres outils) ou un risque de churn (migration en cours). Contactez proactivement pour clarifier.",
    "La création d'une clé API montre une intention d'intégration technique sérieuse. Un développeur est impliqué — la phase d'implémentation a commencé.",
    "En B2B, l'abandon de panier signale une sensibilité au prix ou un besoin d'approbation hiérarchique. C'est le moment de négocier ou d'aider à convaincre en interne.",
    "Un NPS bas est un risque de churn qui nécessite une intervention immédiate. Traitez chaque score négatif comme une urgence et planifiez un call de résolution.",
    "Le signal d'intention le plus fort — ils évaluent activement et comparent des solutions. Qualifiez leurs besoins pour personnaliser la présentation.",
    "L'engagement communautaire montre du thought leadership et une volonté d'aider les autres — profil parfait de champion interne.",
    "Les questions dans les communautés sont des demandes d'aide explicites. C'est littéralement une recherche de fournisseur. Répondez avec de la valeur, pas un pitch.",
    "Les plaintes publiques et frustrations sont des signaux d'achat déguisés. Un post Reddit qui critique un outil concurrent ? C'est un acheteur frustré.",
    "L'upvote de fonctionnalités montre ce dont le prospect a besoin mais ne trouve pas dans ses outils actuels. Si votre produit l'a, c'est un pitch tout trouvé.",
    "Rejoindre la communauté d'un concurrent indique une utilisation active ou une évaluation en cours, avec potentiellement des frustrations exploitables.",
    "Les commentaires de blog montrent une recherche active et un processus de réflexion sur des sujets pertinents pour votre solution.",
    "Les avis montrent une expérience directe et révèlent souvent les manques du produit concurrent. Identifiez les fonctionnalités souhaitées que vous avez déjà.",
    "La participation montre un investissement significatif dans la catégorie et des besoins potentiels d'expansion. Opportunité de positionnement complémentaire.",
    "Les patterns d'engagement social révèlent les intérêts, priorités et influences du prospect. Partager du contenu SaaS = acheteur d'outils SaaS potentiel.",
    "L'abonnement à la newsletter d'un concurrent montre un intérêt continu pour la catégorie et une veille concurrentielle active.",
    "Suivre un concurrent indique une awareness de la catégorie et une évaluation potentielle des alternatives. Trois concurrents suivis = recherche active.",
    "Télécharger du contenu d'un concurrent montre une recherche active de solutions. Proposez votre perspective différente.",
    "La participation à un webinaire concurrent montre un engagement élevé et une évaluation active de solutions. Ces personnes investissent du temps.",
    "Être mentionné ou tagué dans une discussion montre une pertinence pour le réseau du prospect et ses défis actuels. Signal inbound déguisé.",
    "Quand votre cible parle à un événement, c'est un brise-glace parfait qui montre que vous suivez son thought leadership. Référencez un point précis de leur talk.",
    "L'inscription à un événement montre un engagement actif dans l'industrie et une ouverture aux conversations. Proposez un café sur place.",
    "Le sponsoring montre des budgets marketing disponibles, des initiatives de branding, et une volonté de visibilité. Ce niveau d'investissement signale des ambitions sérieuses.",
    "Organiser des événements signale un positionnement de thought leader et des initiatives de croissance. Les entreprises qui scalent leurs événements ont souvent besoin d'outils tech.",
    "La présence à un salon indique une démarche de vente active, un développement de partenariats, ou une expansion de marché. L'occasion d'une rencontre en personne.",
    "Visiter la page pricing, c'est demander 'C'est combien ?' Le prospect est passé de la curiosité à l'évaluation. Si 3+ visites sans conversion, quelque chose bloque.",
    "Un usage intensif de la documentation montre une évaluation technique et une planification d'implémentation. 2 heures dans vos docs API = acheteur technique en phase active.",
    "Les visites de case studies indiquent une recherche de preuve et de validation auprès d'entreprises similaires. Le prospect construit son business case interne.",
    "La recherche d'intégrations montre une réflexion sur la compatibilité avec le stack existant. La question n'est plus 'c'est bien ?' mais 'ça s'intègre ?'",
    "Les visites de page sécurité indiquent une évaluation enterprise et des exigences de conformité. Le prospect est probablement en phase de validation IT/procurement.",
    "Revenir plusieurs fois sur le même article support signale une douleur persistante ou une confusion qui nécessite une intervention directe.",
    "Le partage de contenu concurrent montre une awareness de la catégorie et un comportement de recherche. Assurez-vous d'être dans le comparatif.",
    "Visiter une page 'vs competitor' est un signal d'évaluation active. Le prospect est en train de comparer — donnez-lui les 3 différences clés pour son cas d'usage.",
    "Le signal d'intention le plus fort. Ils évaluent activement et comparent des solutions. Qualifiez et personnalisez la présentation.",
    "Les téléchargements de contenu signalent une recherche active. Un guide de prix vaut 10 fois plus qu'un ebook générique — routez en conséquence.",
    "Les mises à jour de profil LinkedIn signalent des changements de rôle, de nouvelles priorités, ou des virages stratégiques qui créent des opportunités.",
    "Rejoindre un groupe professionnel signale un engagement actif et une initiation potentielle de cycle d'achat. L'influence des pairs y est puissante.",
    "Les signaux d'apprentissage montrent que quelqu'un développe des compétences pour de nouvelles initiatives. Certification AWS ? Initiative infrastructure cloud en cours.",
    "Visiter une page de comparaison montre une évaluation active et une considération d'alternatives. Le prospect cherche des différences concrètes.",
    "Les vues répétées de contenu support spécifique révèlent une douleur ou confusion persistante. Proposez de clarifier ou de montrer une meilleure approche.",
  ],
  faq: [
    {
      question: "Qu'est-ce qu'un signal d'intention d'achat B2B ?",
      answer: "Un signal d'intention d'achat est un événement observable dans la vie d'une entreprise ou d'un contact qui indique une probabilité élevée de besoin pour votre solution. Par exemple : une levée de fonds, un recrutement massif, ou un changement de tech stack.",
    },
    {
      question: "Combien de signaux d'achat existe-t-il ?",
      answer: "Ce guide recense 94 signaux répartis en 7 catégories : signaux entreprise (26), signaux personne (10), tech stack (10), usage produit (14), communauté (14), événements (5), et signaux d'intention lemlist (15). Plus 5 signaux high-impact bonus.",
    },
    {
      question: "Comment détecter les signaux d'achat automatiquement ?",
      answer: "Les outils les plus utilisés incluent Clay, lemlist, Sales Navigator, ZoomInfo, Lonescale, BuiltWith, Bombora, et G2. Chaque signal a un ou plusieurs outils de détection recommandés. L'automatisation passe par des enrichissements de données et des alertes configurées sur ces plateformes.",
    },
    {
      question: "Quels sont les signaux d'achat les plus forts ?",
      answer: "Les signaux à très forte intensité incluent : demande de démo ou essai, score NPS négatif, identification IT/compliance, pic d'utilisation produit, opportunité commerciale en sommeil, fermeture d'un concurrent, et changement de législation. Ces signaux indiquent un besoin immédiat.",
    },
    {
      question: "Comment utiliser les signaux d'achat dans un email de prospection ?",
      answer: "Le framework en 5 parties : mentionnez le signal détecté, identifiez le problème qu'il implique, proposez votre solution, ajoutez un CTA simple, et terminez par un proof point. Contactez dans les 24-48h suivant la détection du signal pour un impact maximal.",
    },
  ],
  emailFramework: {
    title: "Comment utiliser ces signaux dans vos emails de prospection",
    subtitle: "Chaque email de prospection basé sur un signal suit un framework en 5 parties. Contactez dans les 24-48h suivant la détection pour un impact maximal.",
    steps: [
      { step: "Signal", desc: "L'événement observable que vous avez détecté" },
      { step: "Problème", desc: "Le défi que ce signal implique pour le prospect" },
      { step: "Solution", desc: "Comment vous aidez à résoudre ce problème" },
      { step: "CTA", desc: "Une question simple et non-engageante" },
      { step: "P.S.", desc: "Un proof point concret (résultat client, chiffre)" },
    ],
  },
  faqSectionTitle: "Questions fréquentes",
  cta: {
    heading: "Vous voulez détecter ces signaux automatiquement ?",
    body: "devlo configure et automatise la détection de signaux d'achat pour vos campagnes de prospection B2B. On transforme les signaux en rendez-vous qualifiés.",
    primaryButton: "Réserver une consultation",
    secondaryButton: "Voir nos services",
  },
  newsletter: {
    title: "Recevez nos insights B2B chaque semaine",
    subtitle: "Stratégies outbound concrètes, automatisation IA et intelligence du marché suisse. Pas de blabla — uniquement ce qui fonctionne.",
    button: "S'abonner",
    placeholder: "votre@email.com",
  },
  lastUpdated: "Dernière mise à jour : mars 2026",
};

/* ------------------------------------------------------------------ */
/*  Run translations                                                   */
/* ------------------------------------------------------------------ */

console.log('\n=== Insights Hub ===');
const hubBundle = await buildBundle(insightsHub, 'insights-hub');

console.log('\n=== Buying Signals ===');
const signalsBundle = await buildBundle(buyingSignals, 'buying-signals');

const output = {
  insightsHub: hubBundle,
  buyingSignals: signalsBundle,
};

write('src/lib/i18n/insights-content.json', output);

console.log(`\nTotal characters sent to DeepL: ${totalCharsSent.toLocaleString()}`);
console.log('All translations complete.');
