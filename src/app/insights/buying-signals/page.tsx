import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { WaveDivider } from "@/components/ui/wave-divider";
import { JsonLd } from "@/components/seo/json-ld";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildArticleSchema,
  buildFaqPageSchema,
} from "@/lib/seo/schema-builders";

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = buildPageMetadata({
  title:
    "94 Signaux d'Intention d'Achat B2B — Le Guide Complet pour Identifier vos Prospects",
  description:
    "Decouvrez 94 signaux d'achat B2B classes par categorie (entreprise, personne, tech stack, usage produit, communaute, evenements). Detectez les prospects prets a acheter avant vos concurrents.",
  path: "/insights/buying-signals",
  type: "article",
  datePublished: "2026-03-22",
  dateModified: "2026-03-22",
  author: "Charles Perret",
});

/* ------------------------------------------------------------------ */
/*  Breadcrumb                                                        */
/* ------------------------------------------------------------------ */

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Insights", path: "/insights" },
  { name: "94 Signaux d'Achat B2B", path: "/insights/buying-signals" },
];

/* ------------------------------------------------------------------ */
/*  FAQ (SEO schema)                                                  */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Qu'est-ce qu'un signal d'intention d'achat B2B ?",
    answer:
      "Un signal d'intention d'achat est un evenement observable dans la vie d'une entreprise ou d'un contact qui indique une probabilite elevee de besoin pour votre solution. Par exemple : une levee de fonds, un recrutement massif, ou un changement de tech stack.",
  },
  {
    question: "Combien de signaux d'achat existe-t-il ?",
    answer:
      "Ce guide recense 94 signaux repartis en 7 categories : signaux entreprise (26), signaux personne (10), tech stack (10), usage produit (14), communaute (14), evenements (5), et signaux d'intention lemlist (15). Plus 5 signaux high-impact bonus.",
  },
  {
    question:
      "Comment detecter les signaux d'achat automatiquement ?",
    answer:
      "Les outils les plus utilises incluent Clay, lemlist, Sales Navigator, ZoomInfo, Lonescale, BuiltWith, Bombora, et G2. Chaque signal a un ou plusieurs outils de detection recommandes. L'automatisation passe par des enrichissements de donnees et des alertes configurees sur ces plateformes.",
  },
  {
    question:
      "Quels sont les signaux d'achat les plus forts ?",
    answer:
      "Les signaux a tres forte intensite incluent : demande de demo ou essai, score NPS negatif, identification IT/compliance, pic d'utilisation produit, opportunite commerciale en sommeil, fermeture d'un concurrent, et changement de legislation. Ces signaux indiquent un besoin immediat.",
  },
  {
    question:
      "Comment utiliser les signaux d'achat dans un email de prospection ?",
    answer:
      "Le framework en 5 parties : mentionnez le signal detecte, identifiez le probleme qu'il implique, proposez votre solution, ajoutez un CTA simple, et terminez par un proof point. Contactez dans les 24-48h suivant la detection du signal pour un impact maximal.",
  },
];

/* ------------------------------------------------------------------ */
/*  Signal data                                                       */
/* ------------------------------------------------------------------ */

type Signal = {
  name: string;
  intensity: "tres-forte" | "forte" | "moyenne" | "faible";
  description: string;
  detection: string;
};

type SignalCategory = {
  id: string;
  title: string;
  count: number;
  signals: Signal[];
};

const CATEGORIES: SignalCategory[] = [
  {
    id: "entreprise",
    title: "Signaux Entreprise",
    count: 28,
    signals: [
      {
        name: "Recrutement massif",
        intensity: "forte",
        description:
          "Quand une entreprise recrute massivement, elle a besoin de nouveaux outils pour equiper ses equipes. 50 nouveaux commerciaux ? Il leur faut un CRM, des outils d'engagement, de la formation. Chaque poste ouvert est un budget debloque.",
        detection: "lemlist, Sales Navigator, ZoomInfo, Lonescale",
      },
      {
        name: "Levee de fonds recente",
        intensity: "forte",
        description:
          "Apres une levee, les entreprises depensent pendant environ 6 mois. Le moment ideal se situe entre 30 et 90 jours apres l'annonce : elles recrutent, construisent leur stack technologique et planifient leur croissance.",
        detection: "lemlist, Crunchbase, ZoomInfo",
      },
      {
        name: "Opportunite commerciale en sommeil",
        intensity: "tres-forte",
        description:
          "Un deal perdu n'est jamais vraiment mort. Budget libere ? Nouveau decideur ? Concurrent qui a decu ? Ces opportunites ont un taux de conversion 3 fois superieur au cold outreach car la relation existe deja.",
        detection: "Dealfront",
      },
      {
        name: "Pic d'ouvertures d'emails",
        intensity: "tres-forte",
        description:
          "Un email ouvert 8 fois par la meme personne, ce n'est pas de l'obsession — c'est votre champion qui le transmet en interne. Plusieurs ouvertures = plusieurs parties prenantes = comite d'achat actif.",
        detection: "interne (outil emailing)",
      },
      {
        name: "Changement de legislation",
        intensity: "tres-forte",
        description:
          "Les nouvelles reglementations creent de l'urgence comme rien d'autre. Le RGPD a fait depenser des millions aux entreprises du jour au lendemain. Nouvelles lois = budgets obligatoires + attention de la direction + cycles de vente raccourcis.",
        detection: "Google Alerts",
      },
      {
        name: "Changement de politique d'une plateforme",
        intensity: "tres-forte",
        description:
          "Quand Gmail change ses exigences pour les expediteurs, les outils d'emailing font fortune en quelques semaines. Les changements de plateforme creent une douleur immediate. Votre fenetre de tir : 30 a 90 jours maximum.",
        detection: "interne",
      },
      {
        name: "Fermeture ou rachat d'un concurrent",
        intensity: "tres-forte",
        description:
          "Quand un concurrent ferme ou se fait racheter, des milliers d'utilisateurs cherchent une alternative. Pas besoin de prospection froide — ils viennent a vous. Preparez vos pages de comparaison et vos offres de migration.",
        detection: "Owler",
      },
      {
        name: "Vague de licenciements",
        intensity: "forte",
        description:
          "Les licenciements signalent un mode efficacite. Les budgets se resserrent, mais les outils qui promettent un ROI immediat ou de l'automatisation attirent encore plus l'attention. Vendez de la consolidation et de la productivite.",
        detection: "LinkedIn",
      },
      {
        name: "Avis negatif sur un produit concurrent",
        intensity: "forte",
        description:
          "Les critiques sur G2 ou Reddit sont des signaux d'achat deguises. Quelqu'un de suffisamment frustre pour ecrire un avis est suffisamment frustre pour changer de solution.",
        detection: "G2",
      },
      {
        name: "Abandon de formulaire ou chat",
        intensity: "forte",
        description:
          "Ils ont rempli 80% du formulaire de demo et ont abandonne. Ce n'est pas un rejet — c'est de l'hesitation. Un simple email de relance convertit 20 a 30% de ces abandons en rendez-vous.",
        detection: "Default, Chilipiper",
      },
      {
        name: "Ticket support chez un concurrent",
        intensity: "forte",
        description:
          "Les tickets support = des douleurs identifiees = des budgets qui se debloquent. Quelqu'un qui galere avec son outil actuel est mentalement en train de chercher une alternative.",
        detection: "Intercom, Zendesk",
      },
      {
        name: "Couverture mediatique negative",
        intensity: "forte",
        description:
          "Une fuite de donnees rend les outils de securite indispensables. De mauvais resultats ? Les outils de reduction des couts sont approuves plus vite. Approchez avec empathie, pas opportunisme.",
        detection: "Clay",
      },
      {
        name: "Consommation de contenu",
        intensity: "moyenne",
        description:
          "Clics sur vos emails, inscriptions aux webinaires, telechargement de guides — ce sont des signaux d'intention. Le contenu a forte intention (pages prix, comparatifs) vaut 10 fois plus que les articles de blog.",
        detection: "HubSpot, Salesforce",
      },
      {
        name: "Rapport trimestriel / Publication 10-K",
        intensity: "moyenne",
        description:
          "Les appels aux analystes revelent les priorites. Le CEO mentionne 'expansion internationale' ? Les outils de localisation, de paiement, de conformite deviennent urgents.",
        detection: "Claap",
      },
      {
        name: "Participation a un webinaire",
        intensity: "moyenne",
        description:
          "Les participants qui restent plus de 30 minutes comparent des solutions, prennent des notes, construisent un business case. Relancez dans les 24 heures pendant que votre marque est fraiche.",
        detection: "Luma",
      },
      {
        name: "Fusion-acquisition",
        intensity: "moyenne",
        description:
          "Les M&A creent le chaos : outils en doublon, systemes incompatibles, equipes deboussolees. La consolidation est obligatoire et quelqu'un va se faire remplacer.",
        detection: "PitchBook, Crunchbase",
      },
      {
        name: "Prix ou distinction recue",
        intensity: "moyenne",
        description:
          "Les recompenses = validation + attention des parties prenantes + budgets pour maintenir l'elan. Felicitez et enchainez avec une proposition pertinente.",
        detection: "Owler",
      },
      {
        name: "Etude de cas client publiee",
        intensity: "moyenne",
        description:
          "Quand un client vous donne un temoignage, il est au maximum de sa satisfaction. C'est le moment d'elargir la relation et d'explorer des fonctionnalites avancees.",
        detection: "interne",
      },
      {
        name: "Expansion geographique",
        intensity: "moyenne",
        description:
          "Nouveaux marches = nouvelles contraintes reglementaires, nouveaux moyens de paiement, nouveaux besoins de support. Soyez l'expert local qui facilite l'expansion.",
        detection: "Sales Navigator",
      },
      {
        name: "Expiration d'offre",
        intensity: "moyenne",
        description:
          "Fin de periode d'essai ? Remise qui expire ? L'expiration cree de l'urgence, mais seulement si le prospect a vu la valeur. Peignez la douleur du retour en arriere.",
        detection: "interne",
      },
      {
        name: "Bounce d'email prospect ou client",
        intensity: "moyenne",
        description:
          "Un email qui rebondit = changement de poste, licenciement, migration d'inbox. Si c'est un champion qui est parti, retrouvez-le dans sa nouvelle entreprise.",
        detection: "interne",
      },
      {
        name: "Jalon professionnel",
        intensity: "faible",
        description:
          "Anniversaire de travail, promotion, certification — ce sont des occasions de creer du lien. Les promotions signifient aussi de nouveaux budgets.",
        detection: "LinkedIn",
      },
      {
        name: "Couverture mediatique positive",
        intensity: "moyenne",
        description:
          "Un article dans la presse = mode croissance. Ils recrutent, levent des fonds, ou lancent quelque chose d'important. Surfez sur l'elan positif.",
        detection: "Clay",
      },
      {
        name: "Publication d'une etude de cas par un concurrent",
        intensity: "moyenne",
        description:
          "Quand vos concurrents publient des etudes de cas, ils affichent leur liste de clients — et leurs lacunes. Lisez entre les lignes et contactez des entreprises similaires.",
        detection: "manuel",
      },
      {
        name: "Renouvellement de contrat concurrent",
        intensity: "forte",
        description:
          "Quand un contrat arrive a echeance, le prospect est en mode evaluation, les budgets sont revises. C'est le moment ideal pour proposer une alternative.",
        detection: "Claap",
      },
      {
        name: "Dirigeant qui mentionne un probleme en interview",
        intensity: "forte",
        description:
          "Quand un dirigeant parle publiquement de ses defis, il diffuse un signal d'achat. Il dit essentiellement : je cherche des solutions pour ce probleme.",
        detection: "Claap",
      },
      {
        name: "Revue trimestrielle planifiee (QBR)",
        intensity: "forte",
        description:
          "Les QBR sont des moments de decision. Arriver avec des donnees pertinentes juste avant une QBR permet d'influencer les priorites et les budgets.",
        detection: "manuel",
      },
      {
        name: "Demenagement ou expansion de bureaux",
        intensity: "moyenne",
        description:
          "L'expansion physique signifie de nouveaux besoins technologiques — nouvelles licences, nouvelle infrastructure, nouvelles mesures de securite.",
        detection: "Bombora",
      },
    ],
  },
  {
    id: "personne",
    title: "Signaux Personne",
    count: 10,
    signals: [
      {
        name: "Changement de poste d'un champion",
        intensity: "forte",
        description:
          "Vos meilleurs clients restent vos meilleurs vendeurs, meme apres leur depart. Un champion qui aimait votre produit le poussera dans sa nouvelle entreprise. La fenetre de 90 jours est critique.",
        detection: "lemlist, Lonescale, Cognism, Clay",
      },
      {
        name: "Recrutement d'un profil ICP",
        intensity: "moyenne",
        description:
          "Un nouveau Head of Sales, CMO ou VP Engineering construit sa stack de zero. Il n'est pas fidele a l'ancien fournisseur — il est fidele a ce qui marche. Les 60 premiers jours sont votre fenetre.",
        detection: "Sales Navigator, lemlist, Clay",
      },
      {
        name: "Nouveau dirigeant (CEO, C-level, board)",
        intensity: "moyenne",
        description:
          "Nouveaux dirigeants = nouveaux budgets, nouveaux fournisseurs, mandat de faire ses preuves. Les 100 premiers jours, ils repensent le stack et challengent les contrats existants.",
        detection: "lemlist, Clay, Sales Navigator",
      },
      {
        name: "Offre d'emploi",
        intensity: "moyenne",
        description:
          "Les offres d'emploi sont des approbations de budget deguisees. Un Head of Sales Ops ? Ils ont besoin de CRM et d'analytics. Contactez-les AVANT que la personne ne commence.",
        detection: "lemlist, Lonescale, Clay",
      },
      {
        name: "Changement de poste chez un concurrent",
        intensity: "forte",
        description:
          "Les ex-employes de vos concurrents connaissent les faiblesses du produit, la roadmap, les raisons de churn. Ne les pitchez pas — apprenez d'eux.",
        detection: "Clay, Sales Navigator, lemlist",
      },
      {
        name: "Promotion d'un client ou prospect",
        intensity: "moyenne",
        description:
          "Promotion = nouvelles responsabilites + nouveaux budgets + pression de quick wins. Felicitez et proposez de resoudre leur nouveau probleme.",
        detection: "Clay, Sales Navigator, lemlist",
      },
      {
        name: "Passage dans un podcast",
        intensity: "moyenne",
        description:
          "Les invites de podcast sont des thought leaders qui cherchent a construire leur autorite. Engagez authentiquement en citant un point precis de leur intervention.",
        detection: "Google Alerts",
      },
      {
        name: "Post sur les reseaux sociaux",
        intensity: "moyenne",
        description:
          "Un post LinkedIn qui exprime une douleur est une invitation a aider. Commentez avec de la valeur (pas un pitch), puis glissez en DM.",
        detection: "Clay",
      },
      {
        name: "Article ou thought leadership publie",
        intensity: "moyenne",
        description:
          "Quand un prospect publie du contenu, il signale ses priorites. S'y engager authentiquement montre que vous avez fait vos devoirs.",
        detection: "manuel",
      },
      {
        name: "Anniversaire ou evenement personnel",
        intensity: "faible",
        description:
          "Marathons, naissances — les jalons personnels rendent les gens humains. Un rapide felicitations sans rien demander construit la relation pour le long terme.",
        detection: "Clay, Jungler",
      },
    ],
  },
  {
    id: "tech-stack",
    title: "Signaux Tech Stack",
    count: 10,
    signals: [
      {
        name: "Adjacence tech stack",
        intensity: "moyenne",
        description:
          "Connaitre le stack technologique d'une entreprise permet de personnaliser votre approche et de montrer de l'empathie avec leurs pain points specifiques.",
        detection: "BuiltWith",
      },
      {
        name: "Depreciation d'une fonctionnalite concurrente",
        intensity: "tres-forte",
        description:
          "Quand un concurrent abandonne une fonctionnalite, tous ses utilisateurs qui en dependaient sont soudain sur le marche. Migration forcee = votre opportunite.",
        detection: "G2",
      },
      {
        name: "Suppression d'une integration",
        intensity: "forte",
        description:
          "Retirer une integration du stack signale que l'outil ne donnait pas satisfaction. L'entreprise cherche une meilleure alternative.",
        detection: "interne",
      },
      {
        name: "Changement technologique du site web",
        intensity: "moyenne",
        description:
          "Les changements de stack web signalent des initiatives strategiques plus larges ou des douleurs de croissance. Migration vers Shopify ? Ils modernisent.",
        detection: "BuiltWith",
      },
      {
        name: "Ajout d'un tag analytics",
        intensity: "moyenne",
        description:
          "L'ajout d'un outil d'analytics montre une volonte de comprendre les comportements utilisateurs. Souvent lie a l'arrivee d'un nouveau responsable marketing ou growth.",
        detection: "BuiltWith, SimilarWeb",
      },
      {
        name: "Ajout d'un tag publicitaire",
        intensity: "moyenne",
        description:
          "L'installation d'un pixel ou tag publicitaire revele une montee en puissance du budget pub et une volonte de mesurer le ROI des depenses.",
        detection: "BuiltWith, SimilarWeb",
      },
      {
        name: "Refonte de site web",
        intensity: "moyenne",
        description:
          "Un nouveau site web signale un changement strategique ou une nouvelle direction go-to-market. Ce niveau d'investissement suggere de l'ambition et des budgets.",
        detection: "manuel",
      },
      {
        name: "Lancement d'un produit ou fonctionnalite",
        intensity: "moyenne",
        description:
          "Le lancement d'un nouveau produit peut signifier un changement de strategie, une nouvelle ligne de business, ou un nouveau segment client a equiper.",
        detection: "manuel",
      },
      {
        name: "Pic ou chute de trafic web",
        intensity: "moyenne",
        description:
          "Un trafic web qui double signale une croissance rapide (besoin de scaler). S'il chute, c'est un risque de churn. Dans les deux cas, proposez de l'aide.",
        detection: "Semrush, SimilarWeb",
      },
      {
        name: "Lancement d'une application mobile",
        intensity: "moyenne",
        description:
          "Le lancement d'une app signale un investissement mobile-first et cree de nouveaux besoins techniques (analytics mobile, tests, infrastructure).",
        detection: "SensorTower",
      },
    ],
  },
  {
    id: "usage-produit",
    title: "Signaux Usage Produit",
    count: 14,
    signals: [
      {
        name: "Pic d'utilisation du produit",
        intensity: "tres-forte",
        description:
          "Plus d'utilisateurs, plus de fonctionnalites, plus de sessions = ils retirent de la valeur. Frappez quand la satisfaction est haute, pas a l'approche du renouvellement.",
        detection: "interne",
      },
      {
        name: "Identification IT ou compliance",
        intensity: "tres-forte",
        description:
          "Quand l'IT ou la compliance se connecte, ce n'est pas pour naviguer — c'est pour evaluer. Questionnaires de securite, demandes SSO = deal en cours. Fournissez proactivement vos docs de conformite.",
        detection: "interne",
      },
      {
        name: "Pic puis chute d'utilisation",
        intensity: "forte",
        description:
          "Un usage qui monte en fleche puis s'effondre = activation ratee ou attentes non satisfaites. C'est le stade presque churne. Reagissez vite pour comprendre ce qui n'a pas fonctionne.",
        detection: "interne",
      },
      {
        name: "Workspaces multiples dans une meme entreprise",
        intensity: "tres-forte",
        description:
          "Plusieurs workspaces = confusion ou expansion. Consolidez-les ou upsell vers un plan entreprise. Dans les deux cas : plusieurs points de contact = deal plus gros.",
        detection: "interne",
      },
      {
        name: "Demande de fonctionnalite",
        intensity: "forte",
        description:
          "Les feature requests montrent ce qui bloque l'adoption ou empeche l'expansion. Ce sont des opportunites en or pour montrer votre roadmap.",
        detection: "Claap",
      },
      {
        name: "Demande d'extension de periode d'essai",
        intensity: "forte",
        description:
          "Une extension de trial indique un interet reel mais aussi des blockers potentiels — budget, buy-in interne, ou questions techniques. Le deal est la, aidez a lever les obstacles.",
        detection: "interne",
      },
      {
        name: "Video produit visionnee",
        intensity: "moyenne",
        description:
          "Le taux de completion des videos montre l'interet reel et aide a identifier les fonctionnalites qui comptent le plus pour le prospect.",
        detection: "HubSpot, Salesforce",
      },
      {
        name: "Utilisation du calculateur ROI",
        intensity: "forte",
        description:
          "Quelqu'un qui utilise votre calculateur ROI est en train de construire un business case pour sa hierarchie. Il est proche de la decision.",
        detection: "snitcher, Bombora",
      },
      {
        name: "Partage de compte avec un collegue",
        intensity: "forte",
        description:
          "Le partage d'acces montre une recherche de buy-in interne et un elargissement de l'evaluation. Chaque nouveau membre ajoute est un signal d'expansion.",
        detection: "interne",
      },
      {
        name: "Export de donnees",
        intensity: "moyenne",
        description:
          "L'export peut signaler une adoption (integration avec d'autres outils) ou un risque de churn (migration en cours). Contactez proactivement pour clarifier.",
        detection: "interne",
      },
      {
        name: "Generation de cle API",
        intensity: "forte",
        description:
          "La creation d'une cle API montre une intention d'integration technique serieuse. Un developpeur est implique — la phase d'implementation a commence.",
        detection: "interne",
      },
      {
        name: "Abandon de panier",
        intensity: "forte",
        description:
          "En B2B, l'abandon de panier signale une sensibilite au prix ou un besoin d'approbation hierarchique. C'est le moment de negocier ou d'aider a convaincre en interne.",
        detection: "Albacross, Shopify",
      },
      {
        name: "Score NPS negatif",
        intensity: "tres-forte",
        description:
          "Un NPS bas est un risque de churn qui necessite une intervention immediate. Traitez chaque score negatif comme une urgence et planifiez un call de resolution.",
        detection: "interne",
      },
      {
        name: "Demande de demo ou essai gratuit",
        intensity: "tres-forte",
        description:
          "Le signal d'intention le plus fort — ils evaluent activement et comparent des solutions. Qualifiez leurs besoins pour personnaliser la presentation.",
        detection: "Default, Chilipiper",
      },
    ],
  },
  {
    id: "communaute",
    title: "Signaux Communautaires",
    count: 14,
    signals: [
      {
        name: "Actif dans une communaute en ligne",
        intensity: "moyenne",
        description:
          "L'engagement communautaire montre du thought leadership et une volonte d'aider les autres — profil parfait de champion interne.",
        detection: "manuel",
      },
      {
        name: "Question posee dans une communaute",
        intensity: "forte",
        description:
          "Les questions dans les communautes sont des demandes d'aide explicites. C'est litteralement une recherche de fournisseur. Repondez avec de la valeur, pas un pitch.",
        detection: "Trigify",
      },
      {
        name: "Douleur mentionnee dans un forum",
        intensity: "forte",
        description:
          "Les plaintes publiques et frustrations sont des signaux d'achat deguises. Un post Reddit qui critique un outil concurrent ? C'est un acheteur frustre.",
        detection: "Trigify",
      },
      {
        name: "Feature request upvotee",
        intensity: "moyenne",
        description:
          "L'upvote de fonctionnalites montre ce dont le prospect a besoin mais ne trouve pas dans ses outils actuels. Si votre produit l'a, c'est un pitch tout trouve.",
        detection: "interne",
      },
      {
        name: "Membre de la communaute d'un concurrent",
        intensity: "moyenne",
        description:
          "Rejoindre la communaute d'un concurrent indique une utilisation active ou une evaluation en cours, avec potentiellement des frustrations exploitables.",
        detection: "Common Room",
      },
      {
        name: "Commentaire sur un blog de l'industrie",
        intensity: "moyenne",
        description:
          "Les commentaires de blog montrent une recherche active et un processus de reflexion sur des sujets pertinents pour votre solution.",
        detection: "Brandwatch",
      },
      {
        name: "Avis laisse sur un concurrent (G2)",
        intensity: "forte",
        description:
          "Les avis montrent une experience directe et revelent souvent les manques du produit concurrent. Identifiez les fonctionnalites souhaitees que vous avez deja.",
        detection: "G2",
      },
      {
        name: "Participation a une conference concurrente",
        intensity: "moyenne",
        description:
          "La participation montre un investissement significatif dans la categorie et des besoins potentiels d'expansion. Opportunite de positionnement complementaire.",
        detection: "manuel",
      },
      {
        name: "Partage de contenu d'un influenceur",
        intensity: "moyenne",
        description:
          "Les patterns d'engagement social revelent les interets, priorites et influences du prospect. Partager du contenu SaaS = acheteur d'outils SaaS potentiel.",
        detection: "FollowersAnalysis",
      },
      {
        name: "Abonnement a une newsletter concurrente",
        intensity: "moyenne",
        description:
          "L'abonnement a la newsletter d'un concurrent montre un interet continu pour la categorie et une veille concurrentielle active.",
        detection: "manuel",
      },
      {
        name: "Follow d'un concurrent sur les reseaux",
        intensity: "moyenne",
        description:
          "Suivre un concurrent indique une awareness de la categorie et une evaluation potentielle des alternatives. Trois concurrents suivis = recherche active.",
        detection: "Sales Navigator, Pronto",
      },
      {
        name: "Telechargement de contenu concurrent",
        intensity: "moyenne",
        description:
          "Telecharger du contenu d'un concurrent montre une recherche active de solutions. Proposez votre perspective differente.",
        detection: "manuel",
      },
      {
        name: "Participation a un webinaire concurrent",
        intensity: "forte",
        description:
          "La participation a un webinaire concurrent montre un engagement eleve et une evaluation active de solutions. Ces personnes investissent du temps.",
        detection: "manuel",
      },
      {
        name: "Mention dans une discussion en ligne",
        intensity: "moyenne",
        description:
          "Etre mentionne ou tague dans une discussion montre une pertinence pour le reseau du prospect et ses defis actuels. Signal inbound deguise.",
        detection: "Mention",
      },
    ],
  },
  {
    id: "evenements",
    title: "Signaux Evenements",
    count: 5,
    signals: [
      {
        name: "Prise de parole a une conference",
        intensity: "moyenne",
        description:
          "Quand votre cible parle a un evenement, c'est un brise-glace parfait qui montre que vous suivez son thought leadership. Reference un point precis de leur talk.",
        detection: "Octoparse, webscraper",
      },
      {
        name: "Inscription a un evenement de l'industrie",
        intensity: "moyenne",
        description:
          "L'inscription a un evenement montre un engagement actif dans l'industrie et une ouverture aux conversations. Proposez un cafe sur place.",
        detection: "manuel",
      },
      {
        name: "Sponsoring d'un evenement",
        intensity: "moyenne",
        description:
          "Le sponsoring montre des budgets marketing disponibles, des initiatives de branding, et une volonte de visibilite. Ce niveau d'investissement signale des ambitions serieuses.",
        detection: "Octoparse, webscraper",
      },
      {
        name: "Organisation d'un evenement ou webinaire",
        intensity: "moyenne",
        description:
          "Organiser des evenements signale un positionnement de thought leader et des initiatives de croissance. Les entreprises qui scalent leurs evenements ont souvent besoin d'outils tech.",
        detection: "Luma",
      },
      {
        name: "Stand a un salon professionnel",
        intensity: "moyenne",
        description:
          "La presence a un salon indique une demarche de vente active, un developpement de partenariats, ou une expansion de marche. L'occasion d'une rencontre en personne.",
        detection: "Octoparse, webscraper",
      },
    ],
  },
  {
    id: "lemlist-intent",
    title: "Signaux d'Intention Lemlist",
    count: 15,
    signals: [
      {
        name: "Activite sur la page pricing",
        intensity: "forte",
        description:
          "Visiter la page pricing, c'est demander 'C'est combien ?' Le prospect est passe de la curiosite a l'evaluation. Si 3+ visites sans conversion, quelque chose bloque.",
        detection: "lemlist, snitcher, Bombora",
      },
      {
        name: "Consultation de la documentation",
        intensity: "forte",
        description:
          "Un usage intensif de la documentation montre une evaluation technique et une planification d'implementation. 2 heures dans vos docs API = acheteur technique en phase active.",
        detection: "lemlist, snitcher, Bombora",
      },
      {
        name: "Visite de page etude de cas",
        intensity: "moyenne",
        description:
          "Les visites de case studies indiquent une recherche de preuve et de validation aupres d'entreprises similaires. Le prospect construit son business case interne.",
        detection: "lemlist, snitcher, Bombora",
      },
      {
        name: "Visite de la page integrations",
        intensity: "moyenne",
        description:
          "La recherche d'integrations montre une reflexion sur la compatibilite avec le stack existant. La question n'est plus 'c'est bien ?' mais 'ca s'integre ?'",
        detection: "lemlist, snitcher, Bombora",
      },
      {
        name: "Visite de la page securite",
        intensity: "forte",
        description:
          "Les visites de page securite indiquent une evaluation enterprise et des exigences de conformite. Le prospect est probablement en phase de validation IT/procurement.",
        detection: "lemlist, snitcher, Bombora",
      },
      {
        name: "Lecture repetee d'un article support",
        intensity: "moyenne",
        description:
          "Revenir plusieurs fois sur le meme article support signale une douleur persistante ou une confusion qui necessite une intervention directe.",
        detection: "lemlist, snitcher, Bombora",
      },
      {
        name: "Partage de contenu concurrent",
        intensity: "moyenne",
        description:
          "Le partage de contenu concurrent montre une awareness de la categorie et un comportement de recherche. Assurez-vous d'etre dans le comparatif.",
        detection: "lemlist, Clay",
      },
      {
        name: "Visite de page de comparaison",
        intensity: "forte",
        description:
          "Visiter une page 'vs competitor' est un signal d'evaluation active. Le prospect est en train de comparer — donnez-lui les 3 differences cles pour son cas d'usage.",
        detection: "snitcher, Bombora",
      },
      {
        name: "Demande de demo ou d'essai",
        intensity: "tres-forte",
        description:
          "Le signal d'intention le plus fort. Ils evaluent activement et comparent des solutions. Qualifiez et personnalisez la presentation.",
        detection: "Default, Chilipiper",
      },
      {
        name: "Telechargement de contenu gate",
        intensity: "moyenne",
        description:
          "Les telechargements de contenu signalent une recherche active. Un guide de prix vaut 10 fois plus qu'un ebook generique — routez en consequence.",
        detection: "HubSpot, Salesforce",
      },
      {
        name: "Changement de description de profil",
        intensity: "moyenne",
        description:
          "Les mises a jour de profil LinkedIn signalent des changements de role, de nouvelles priorites, ou des virages strategiques qui creent des opportunites.",
        detection: "manuel",
      },
      {
        name: "Adhesion a un groupe professionnel",
        intensity: "moyenne",
        description:
          "Rejoindre un groupe professionnel signale un engagement actif et une initiation potentielle de cycle d'achat. L'influence des pairs y est puissante.",
        detection: "PhantomBuster",
      },
      {
        name: "Certification ou formation terminee",
        intensity: "moyenne",
        description:
          "Les signaux d'apprentissage montrent que quelqu'un developpe des competences pour de nouvelles initiatives. Certification AWS ? Initiative infrastructure cloud en cours.",
        detection: "PhantomBuster",
      },
      {
        name: "Page comparaison concurrent visitee",
        intensity: "forte",
        description:
          "Visiter une page de comparaison montre une evaluation active et une consideration d'alternatives. Le prospect cherche des differences concretes.",
        detection: "snitcher, Bombora",
      },
      {
        name: "Article support consulte plusieurs fois",
        intensity: "moyenne",
        description:
          "Les vues repetees de contenu support specifique revelent une douleur ou confusion persistante. Proposez de clarifier ou de montrer une meilleure approche.",
        detection: "lemlist, snitcher, Bombora",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function IntensityBadge({ level }: { level: Signal["intensity"] }) {
  const config = {
    "tres-forte": { label: "Tres forte", bg: "bg-red-100 text-red-800" },
    forte: { label: "Forte", bg: "bg-orange-100 text-orange-800" },
    moyenne: { label: "Moyenne", bg: "bg-yellow-100 text-yellow-800" },
    faible: { label: "Faible", bg: "bg-gray-100 text-gray-700" },
  };
  const c = config[level];
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${c.bg}`}
    >
      {c.label}
    </span>
  );
}

function CategoryNav({
  categories,
}: {
  categories: SignalCategory[];
}) {
  return (
    <nav className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <a
          key={cat.id}
          href={`#${cat.id}`}
          className="rounded-lg border border-[#074f74]/15 bg-[#074f74]/5 px-3 py-1.5 text-xs font-semibold text-[#074f74] transition hover:bg-[#074f74]/10"
        >
          {cat.title} ({cat.count})
        </a>
      ))}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function BuyingSignalsPage() {
  const totalSignals = CATEGORIES.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "94 Signaux d'Intention d'Achat B2B — Le Guide Complet",
            description:
              "Decouvrez 94 signaux d'achat B2B classes par categorie pour detecter les prospects prets a acheter avant vos concurrents.",
            path: "/insights/buying-signals",
            imagePath: "/images/CharlesPerretProfilePicture2025.webp",
            datePublished: "2026-03-22",
            dateModified: "2026-03-22",
            author: "Charles Perret",
            authorUrl:
              "https://www.linkedin.com/in/charlesperret-devlo/",
          }),
          buildFaqPageSchema(faqItems),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#074f74] to-[#0a3a54] pt-2 text-white">
        <Breadcrumb items={breadcrumbItems} variant="dark" />

        <div className="mx-auto w-full max-w-3xl px-6 pb-14 pt-10 text-center lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
            Insight
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl">
            94 Signaux d&apos;Intention d&apos;Achat B2B
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg font-semibold leading-relaxed text-white/85">
            Le guide complet pour identifier vos prospects prets a acheter —
            avant vos concurrents.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Image
              src="/images/CharlesPerretProfilePicture2025.webp"
              alt="Charles Perret, fondateur de devlo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-left text-sm">
              <p className="font-medium text-white">Par Charles Perret</p>
              <p className="text-white/50">Mars 2026 · 15 min de lecture</p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="layered-bottom" fromBg="#0a3a54" toBg="#FFFFFF" />

      {/* Body */}
      <article className="mx-auto w-full max-w-3xl px-6 py-14 lg:px-10">
        {/* Intro */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">
            Pourquoi les signaux d&apos;achat changent tout
          </h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Un signal d&apos;intention d&apos;achat est un evenement observable
            dans la vie d&apos;une entreprise ou d&apos;un contact qui indique
            un besoin reel pour votre solution. Recrutement massif, levee de
            fonds, changement de tech stack, score NPS en chute : chaque signal
            represente un moment ou le prospect est plus receptif qu&apos;a
            n&apos;importe quel autre moment.
          </p>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Ce guide recense <strong>{totalSignals} signaux</strong> repartis
            en {CATEGORIES.length} categories. Pour chaque signal, vous
            trouverez une description, un niveau d&apos;intensite (de faible a
            tres forte), et les outils pour le detecter automatiquement.
          </p>
        </section>

        {/* Table of contents */}
        <section className="mt-10 rounded-xl border border-[#074f74]/10 bg-[#074f74]/5 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#074f74]">
            Sommaire
          </h3>
          <div className="mt-4">
            <CategoryNav categories={CATEGORIES} />
          </div>
        </section>

        {/* Signal categories */}
        {CATEGORIES.map((category) => (
          <section key={category.id} id={category.id} className="mt-16">
            <div className="mb-6 border-b-2 border-[#074f74]/20 pb-3">
              <h2 className="text-2xl font-semibold text-[#153a54]">
                {category.title}
              </h2>
              <p className="mt-1 text-sm text-[#2a4c63]/60">
                {category.count} signaux
              </p>
            </div>

            <div className="space-y-6">
              {category.signals.map((signal, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-[#074f74]/10 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base font-semibold text-[#153a54]">
                      {signal.name}
                    </h3>
                    <IntensityBadge level={signal.intensity} />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#2a4c63]/80">
                    {signal.description}
                  </p>
                  <p className="mt-3 text-xs text-[#2a4c63]/50">
                    <span className="font-semibold text-[#2a4c63]/70">
                      Detection :
                    </span>{" "}
                    {signal.detection}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Framework email */}
        <section className="mt-16 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">
            Comment utiliser ces signaux dans un email
          </h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Chaque email de prospection base sur un signal suit un framework en
            5 parties :
          </p>
          <div className="space-y-3">
            {[
              {
                step: "Signal",
                desc: "L'evenement observable que vous avez detecte",
              },
              {
                step: "Probleme",
                desc: "Le defi que ce signal implique pour le prospect",
              },
              {
                step: "Solution",
                desc: "Comment vous aidez a resoudre ce probleme",
              },
              {
                step: "CTA",
                desc: "Une question simple et non-engageante",
              },
              {
                step: "P.S.",
                desc: "Un proof point concret (resultat client, chiffre)",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#074f74] text-xs font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#153a54]">
                    {item.step}
                  </p>
                  <p className="text-sm text-[#2a4c63]/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pro tips */}
        <section className="mt-14 space-y-4">
          <h2 className="text-2xl font-semibold text-[#153a54]">
            Bonnes pratiques
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                label: "Timing",
                desc: "Contactez dans les 24-48h. Apres 7 jours, c'est de l'info perimee.",
              },
              {
                label: "Mobile first",
                desc: "80% des emails sont lus sur mobile. Paragraphes de 2-3 lignes max.",
              },
              {
                label: "Personnalisation intelligente",
                desc: "Ne mentionnez que les details qui connectent au probleme resolu.",
              },
              {
                label: "Test & iterate",
                desc: "A/B testez vos signaux, problemes et CTAs par segment.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-[#074f74]/10 bg-[#074f74]/5 p-4"
              >
                <p className="text-sm font-semibold text-[#153a54]">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-[#2a4c63]/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">
            Questions frequentes
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group rounded-lg border border-[#074f74]/10 bg-white"
              >
                <summary className="cursor-pointer p-4 text-sm font-semibold text-[#153a54] transition hover:text-[#074f74]">
                  {item.question}
                </summary>
                <p className="px-4 pb-4 text-sm leading-relaxed text-[#2a4c63]/80">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14">
          <div className="rounded-xl bg-gradient-to-b from-[#074f74] to-[#0a3a54] p-8 text-center text-white md:p-12">
            <h2 className="text-2xl font-bold">
              Vous voulez detecter ces signaux automatiquement ?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/75">
              devlo configure et automatise la detection de signaux d&apos;achat
              pour vos campagnes de prospection B2B. On transforme les signaux
              en rendez-vous qualifies.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/consultation"
                className="inline-flex h-11 items-center rounded-lg bg-white px-6 text-sm font-semibold uppercase tracking-[0.08em] text-[#074f74] transition hover:bg-white/90"
              >
                Reserver une consultation
              </Link>
              <Link
                href="/services/cold-email"
                className="inline-flex h-11 items-center rounded-lg border border-white/30 px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white/50 hover:bg-white/10"
              >
                Voir nos services
              </Link>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-14 space-y-3">
          <h2 className="text-2xl font-semibold text-[#153a54]">
            Pour aller plus loin
          </h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Les signaux d&apos;achat sont au coeur de la methode{" "}
            <Link
              href="/"
              className="font-medium text-[#074f74] underline hover:text-[#0a3a54]"
            >
              devlo
            </Link>
            . Decouvrez comment nous les utilisons dans nos campagnes de{" "}
            <Link
              href="/services/cold-email"
              className="font-medium text-[#074f74] underline hover:text-[#0a3a54]"
            >
              cold email
            </Link>
            , de{" "}
            <Link
              href="/services/linkedin-outreach"
              className="font-medium text-[#074f74] underline hover:text-[#0a3a54]"
            >
              LinkedIn outreach
            </Link>{" "}
            et de{" "}
            <Link
              href="/services/generation-leads"
              className="font-medium text-[#074f74] underline hover:text-[#0a3a54]"
            >
              generation de leads B2B
            </Link>
            .
          </p>
        </section>

        <p className="mt-10 text-xs text-[#2a4c63]/50">
          Derniere mise a jour : mars 2026
        </p>
      </article>

      <NewsletterSection />
    </>
  );
}
