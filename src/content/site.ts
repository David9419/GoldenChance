/**
 * GoldenChance — source unique de tous les textes, liens et données du site.
 *
 * Pour modifier un texte : changez-le ici, enregistrez, puis poussez sur GitHub.
 * Vercel redéploie le site automatiquement.
 *
 * Les points marqués « TODO » ou « À CONFIRMER » doivent être validés par David
 * avant la mise en production.
 */

/* -------------------------------------------------------------------------- */
/*  Identité, liens et coordonnées                                            */
/* -------------------------------------------------------------------------- */

export const site = {
  name: "GoldenChance",
  slogan: "Plus qu'un concours, une chance de rêve",
  title: "GoldenChance — Plus qu'un concours, une chance de rêve",
  description:
    "GoldenChance organise un concours toutes les deux semaines pour faire gagner sacs de créateurs, montres d'exception, bijoux précieux et produits high-tech. Tirage au sort filmé en vidéo et publié sur Instagram et WhatsApp.",
  foundedLabel: "Fondé en juillet 2026",
  copyright: "© 2026 GoldenChance. Tous droits réservés.",
} as const;

export const links = {
  instagram:
    "https://www.instagram.com/goldenchanceconcours?stkn=MXc5cGU3Zmwyd3k0dA%3D%3D&utm_source=qr",
  instagramHandle: "@goldenchanceconcours",
  /** URL « propre » utilisée pour les données structurées (SEO). */
  instagramProfile: "https://www.instagram.com/goldenchanceconcours",
  whatsapp: "https://chat.whatsapp.com/CWlBcodgLiS9rhHWEuLBWD",
  phones: [{ label: "07 49 94 20 81", href: "tel:0749942081" }],
  /** WhatsApp direct de David (format international, sans le 0 ni espaces). */
  whatsappDirect: "33749942081",
} as const;

/* -------------------------------------------------------------------------- */
/*  Images                                                                    */
/* -------------------------------------------------------------------------- */

export type SiteImage = { src: string; alt: string };

export const images = {
  logo: {
    src: "/images/logo-goldenchance.png",
    alt: "Logo GoldenChance : médaillon doré GC et slogan « Plus qu'un concours, une chance de rêve »",
  },
  jewelry: {
    src: "/images/hero-jewelry.jpg",
    alt: "Bijoux dorés posés à plat : montre dorée, bracelet cœur, créoles, perles et lunettes",
  },
  bags: {
    src: "/images/hero-bags.jpg",
    alt: "Étagère de sacs de luxe de créateurs aux tons rose, beige et noir",
  },
  tech: {
    src: "/images/hero-tech.jpg",
    alt: "Produits Apple en noir et blanc : iPad, AirPods Max, MacBook, iPhone et Apple Watch",
  },
  watches: {
    src: "/images/hero-watches.jpg",
    alt: "Écrin de montres bi-ton acier et or rose sur coussinets bleu nuit",
  },
  instagram: { src: "/images/logo-instagram.jpg", alt: "Instagram" },
  whatsapp: { src: "/images/logo-whatsapp.png", alt: "WhatsApp" },
} satisfies Record<string, SiteImage>;

/** Fond fixe : un coin chacun (haut-gauche, haut-droite, bas-gauche, bas-droite). */
export const backgroundImages: SiteImage[] = [
  images.jewelry,
  images.bags,
  images.tech,
  images.watches,
];

/** Carte photo du hero : bijoux → sacs → montres → tech. */
export const heroSlides: SiteImage[] = [
  images.jewelry,
  images.bags,
  images.watches,
  images.tech,
];

/** Carré photo du menu burger : bijoux → montres → tech → sacs. */
export const menuSlides: SiteImage[] = [
  images.jewelry,
  images.watches,
  images.tech,
  images.bags,
];

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

export type NavLink = { label: string; href: string };

/** Liens au centre de la navbar (écrans ≥ 900px). */
export const navbarLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Concours", href: "/#concours" },
  { label: "Gagnants", href: "/gagnants" },
  { label: "Contact", href: "/contact" },
];

/** Liens du menu burger plein écran. */
export const menuLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Concours", href: "/#concours" },
  { label: "Les lots", href: "/#univers" },
  { label: "À propos", href: "/#apropos" },
  { label: "FAQ", href: "/#faq" },
  { label: "Gagnants", href: "/gagnants" },
  { label: "Contact", href: "/contact" },
];

/** Bouton WhatsApp flottant (déplaçable dans les 4 coins). Lien : `links.whatsapp`. */
export const floatingWhatsApp = {
  label: "Rejoindre la communauté WhatsApp",
};

export const marqueeWords = [
  "Montres",
  "Sacs de luxe",
  "Trottinettes",
  "MacBook",
  "iPhone",
  "Dior",
  "Bijoux",
  "Chanel",
  "Rolex",
  "Louis Vuitton",
];

/* -------------------------------------------------------------------------- */
/*  Page d'accueil                                                            */
/* -------------------------------------------------------------------------- */

export const hero = {
  titleBefore: "Le luxe,",
  titleAccent: "accessible",
  titleAfter: "à tous, tous les 15 jours.",
  text: "GoldenChance organise un concours toutes les deux semaines pour offrir sacs de créateurs, montres d'exception et bijoux précieux à celles et ceux qui n'auraient jamais pensé pouvoir les porter un jour.",
  primaryCta: "Rejoindre la communauté",
  secondaryCta: "Découvrir les concours",
  secondaryHref: "/#concours",
  badgeTitle: "Concours en cours",
  badgeText: "Un nouveau lot toutes les deux semaines",
};

/**
 * Concours en cours. Pour lancer un nouveau concours : changez les textes,
 * la date, le message WhatsApp et les photos ci-dessous.
 */
export const currentContest = {
  eyebrow: "Nouveau concours",
  title: "Le concours Essentials est lancé",
  lead: "Un lot pensé pour le quotidien, avec style\u00a0: deux ensembles Essentials au choix et une paire de On au choix.",
  /** Date de début (AAAA-MM-JJ) : avant ce jour, le badge affiche « Début … ». */
  startDate: "2026-10-15",
  startLabel: "Début jeudi 15 octobre",
  liveLabel: "Concours en cours",
  name: "2 ensembles Essentials au choix + une paire de On au choix",
  prize: "Choisissez vos coloris d'ensembles et votre modèle de On",
  /** Précision affichée sous la galerie : les photos ne sont que des exemples. */
  galleryNote:
    "Ces photos ne sont que quelques exemples\u00a0: bien d'autres coloris d'ensembles Essentials et modèles de On sont disponibles au choix.",
  /** `strong` est affiché en gras après `label`. */
  details: [
    { label: "Lot : ", strong: "2 ensembles Essentials au choix + 1 paire de On au choix" },
    { label: "Prix du ticket : ", strong: "10 €" },
    { label: "Tickets limités : ", strong: "50 tickets maximum" },
    { label: "Début du concours : ", strong: "jeudi 15 octobre 2026" },
    { label: "Tirage au sort filmé en vidéo, publiée sur Instagram et WhatsApp" },
  ] as { label: string; strong?: string }[],
  button: "Participer",
  /** Message pré-rempli envoyé sur WhatsApp quand on clique sur « Participer ». */
  whatsappMessage: "Bonjour, je voudrais un ticket pour les ensembles Essentials et la paire de On",
  /** Coloris au choix (photos dans public/images/). */
  choices: [
    { label: "Noir", src: "/images/essentials-noir.jpg", alt: "Ensemble Essentials noir : sweat à capuche et jogging" },
    { label: "Gris chiné", src: "/images/essentials-gris.jpg", alt: "Ensemble Essentials gris chiné : sweat à capuche et jogging" },
    { label: "Gris clair", src: "/images/essentials-gris-clair.jpg", alt: "Ensemble Essentials gris clair : sweat à capuche et jogging" },
    { label: "Marron", src: "/images/essentials-marron.jpg", alt: "Ensemble Essentials marron : sweat à capuche et jogging" },
    { label: "Noir 1977", src: "/images/essentials-noir-1977.jpg", alt: "Ensemble Essentials noir 1977 : sweat à capuche et jogging" },
  ],
  /** Modèles de On au choix (photos dans public/images/). */
  shoeChoices: [
    { label: "Noir et blanc", src: "/images/on-noir-blanc.jpg", alt: "Chaussure On noir et blanc, vue de profil" },
    { label: "Gris et blanc", src: "/images/on-gris-blanc.jpg", alt: "Chaussure On gris et blanc à lacets noirs, vue de profil" },
    { label: "Tout blanc", src: "/images/on-blanc.jpg", alt: "Chaussure On entièrement blanche, vue de profil" },
    { label: "Blanc et bleu-vert", src: "/images/on-blanc-bleu.jpg", alt: "Chaussure On blanche et bleu-vert, vue de profil" },
    { label: "Crème et marron", src: "/images/on-creme-marron.jpg", alt: "Chaussure On crème et marron, vue de profil" },
  ],
};

/** Lien WhatsApp direct avec message pré-rempli (bouton « Participer »). */
export const participateHref = `https://wa.me/${links.whatsappDirect}?text=${encodeURIComponent(currentContest.whatsappMessage)}`;

export const concept = {
  eyebrow: "Le concept",
  title: "Deux concours par mois, une chance tous les 15\u00a0jours",
  lead: "Chaque concours GoldenChance met en jeu des objets que l'on admire sans toujours pouvoir se les offrir. Notre promesse\u00a0: les rendre atteignables, pour de vrai, à intervalles réguliers.",
  /** Chiffres clés (faits réels uniquement) : ils défilent jusqu'à leur valeur. */
  facts: [
    {
      value: 2,
      label: "concours par mois",
      text: "Deux éditions chaque mois, chacune avec son propre lot.",
    },
    {
      value: 15,
      label: "jours entre chaque tirage",
      text: "Un tirage au sort tous les 15 jours, filmé en vidéo et publié sur Instagram et WhatsApp.",
    },
  ],
  next: {
    kicker: "Concours actuel",
    title: "Ensembles Essentials + On",
    text: "Deux ensembles Essentials au choix et une paire de On au choix. Ticket à 10\u00a0€, 50 tickets maximum. Début jeudi 15 octobre.",
    button: "Participer",
  },
};

export const universes = {
  eyebrow: "Les lots",
  title: "Trois univers de lots",
  lead: "Des objets que l'on admire, choisis pour chaque édition.",
  cards: [
    {
      kicker: "Univers I",
      title: "Sacs & maroquinerie",
      text: "Sacs de créateurs et pièces de maroquinerie recherchées, celles qu'on garde toute une vie.",
      image: images.bags,
    },
    {
      kicker: "Univers II",
      title: "Montres d'exception",
      text: "Garde-temps suisses et éditions recherchées, du poignet au collector.",
      image: images.watches,
    },
    {
      kicker: "Univers III",
      title: "Haute technologie & bijoux",
      text: "Du dernier iPhone au MacBook, en passant par des bijoux précieux — la sélection change à chaque édition.",
      image: images.tech,
    },
  ],
};

export const about = {
  pill: "✦ Fondé en juillet 2026",
  title: "Pourquoi GoldenChance existe",
  paragraphs: [
    "Nous avons créé GoldenChance en juillet 2026 à partir d'un constat simple : trop de belles choses restent hors de portée, non pas parce qu'elles ne le méritent pas, mais parce que leur prix les réserve à quelques-uns.",
    "Notre mission est de donner à ceux qui n'en ont pas toujours les moyens une vraie chance d'accéder à des objets de luxe — par le tirage au sort plutôt que par le porte-monnaie. Chaque concours est une occasion concrète de vivre, l'espace d'un lot, ce que l'on croyait inaccessible.",
  ],
};

export const faq = {
  eyebrow: "Questions fréquentes",
  title: "Ce qu'il faut savoir avant de participer",
  // À CONFIRMER / À METTRE À JOUR : réponses génériques à faire valider par David
  // (ticket à 10 €, tickets limités, tirage filmé en vidéo et publié sur Instagram et WhatsApp). Voir A_VALIDER.md.
  items: [
    {
      question: "Comment participer à un concours GoldenChance ?",
      answer:
        "Chaque concours est annoncé sur notre compte Instagram et relayé dans notre communauté WhatsApp. Les modalités de participation (suivre le compte, réagir à la publication, inviter des proches) sont détaillées dans le post de lancement de chaque édition.",
    },
    {
      question: "Comment le gagnant est-il désigné ?",
      answer:
        "Le tirage se fait au hasard parmi les participants ayant respecté les conditions du concours en cours. Le tirage est filmé en vidéo, puis publié sur Instagram, sur notre communauté WhatsApp et sur notre page Gagnants.",
    },
    {
      question: "Les lots sont-ils authentiques ?",
      answer:
        "Oui. Chaque lot mis en jeu — sac, montre, bijou ou produit high-tech — est un article authentique, présenté et remis au gagnant en main propre ou par livraison suivie.",
    },
    {
      question: "Comment et quand je reçois mon lot si je gagne ?",
      answer:
        "Nous contactons chaque gagnant directement après l'annonce des résultats pour organiser la remise du lot, en main propre ou par envoi sécurisé, dans les jours qui suivent le tirage.",
    },
    {
      question: "Puis-je participer à plusieurs concours à la fois ?",
      answer:
        "Oui, chaque édition est indépendante. Vous pouvez participer à autant de concours GoldenChance que vous le souhaitez, un nouveau lot étant proposé toutes les deux semaines.",
    },
    {
      question: "Comment être prévenu du prochain concours ?",
      answer:
        "Le plus simple est de suivre notre Instagram @goldenchanceconcours et de rejoindre notre communauté WhatsApp : les annonces y sont publiées en priorité, avant chaque nouveau tirage.",
    },
  ],
};

export const joinCta = {
  eyebrow: "Rejoignez l'aventure",
  title: "Ne manquez plus aucun concours",
  text: "Rejoignez notre communauté WhatsApp pour être averti dès l'ouverture d'un nouveau tirage, en priorité.",
  button: "Rejoignez notre communauté",
};

/* -------------------------------------------------------------------------- */
/*  Page Gagnants                                                             */
/* -------------------------------------------------------------------------- */

export const winnersPage = {
  eyebrow: "Page Gagnants",
  title: "Ils ont tenté leur chance, ils l'ont eue",
  lead: "Chaque concours a son gagnant. Retrouvez ici, édition après édition, celles et ceux qui sont repartis avec leur lot.",
  next: {
    eyebrow: "Prochaine édition",
    title: "Le prochain gagnant, c'est peut-être vous",
    text: "Un nouveau concours est lancé toutes les deux semaines. Rejoignez notre communauté pour être informé dès l'ouverture du prochain tirage.",
    primary: "Rejoindre la communauté",
    secondary: "Suivre sur Instagram",
  },
};

export type Winner = {
  /** Nom affiché du gagnant. */
  nom: string;
  /** Lot remporté. */
  lot: string;
  /** Nom du concours (ex. « Concours Montre »). */
  concours: string;
  /** Numéro d'édition — sert aussi à trier du plus récent au plus ancien. */
  edition: number;
  photo: SiteImage;
  texte: string;
};

/**
 * Liste des gagnants. Pour en ajouter un : copiez un bloc { ... }, changez les
 * valeurs, mettez la photo dans public/images/. Ne jamais inventer de gagnant.
 *
 * À CONFIRMER : accord écrit de chaque gagnant pour publier sa photo et son nom
 * (droit à l'image / RGPD).
 */
export const winners: Winner[] = [
  {
    nom: "Lévi Siboni",
    lot: "Une Swatch x Omega MoonSwatch",
    concours: "Concours Montre",
    edition: 1,
    photo: {
      src: "/images/winner-levi.jpg",
      alt: "Lévi Siboni, gagnant du concours Montre, avec un membre de l'équipe GoldenChance dans un centre commercial, sac Swatch en main",
    },
    texte:
      "Premier grand tirage GoldenChance dédié aux montres : Lévi a été désigné gagnant et a reçu sa montre directement des mains de l'équipe GoldenChance.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page Contact                                                              */
/* -------------------------------------------------------------------------- */

export const contactPage = {
  eyebrow: "Page Contact",
  title: "Une question ? Parlons-en",
  lead: "Retrouvez tous nos canaux pour nous joindre, suivre les concours et rejoindre la communauté GoldenChance.",
  final: {
    title: "Rejoignez notre communauté",
    text: "Recevez les annonces de concours en priorité, échangez avec les autres membres et retrouvez la vidéo de chaque tirage.",
    button: "Rejoignez notre communauté",
  },
};
