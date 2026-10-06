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
    "GoldenChance organise un concours toutes les deux semaines pour faire gagner sacs de créateurs, montres d'exception, bijoux précieux et produits high-tech. Tirage au sort filmé en direct sur Instagram.",
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
  phones: [
    { label: "07 44 98 17 75", href: "tel:0744981775" },
    { label: "07 49 94 20 81", href: "tel:0749942081" },
  ],
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
  { label: "Concours", href: "/#presentation" },
  { label: "Gagnants", href: "/gagnants" },
  { label: "Contact", href: "/contact" },
];

/** Liens du menu burger plein écran. */
export const menuLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Concours", href: "/#presentation" },
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
  secondaryHref: "/#presentation",
  badgeTitle: "Concours en cours",
  badgeText: "Un nouveau lot toutes les deux semaines",
};

export const exampleContest = {
  eyebrow: "Exemple de concours",
  title: "Comment se déroule un tirage",
  lead: "Chaque édition suit le même principe : un lot annoncé, un nombre de tickets limité, et un tirage réalisé en direct sur Instagram.",
  status: "Concours terminé",
  name: "iPad 11 — Gris (2025)",
  prize: "Tirage au sort effectué",
  /** `strong` est affiché en gras après `label`. */
  details: [
    { label: "Lot : ", strong: "iPad 11, coloris gris, modèle 2025" },
    { label: "Prix du ticket : ", strong: "10 €" },
    { label: "Tickets limités" },
    { label: "Tirage au sort filmé en direct sur Instagram" },
    // À CONFIRMER : David a dit « une vraie plateforme de roulette ».
    // Le mot « certifiée » ne doit être ajouté que si la certification est confirmée.
    { label: "Résultat déterminé sur une vraie plateforme de roulette" },
  ] as { label: string; strong?: string }[],
  slides: [
    { src: "/images/ipad-face.png", alt: "iPad 11 argent vu de face, écran allumé" },
    { src: "/images/ipad-coins.png", alt: "Gros plan des appareils photo de l'iPad 11 en quatre coloris" },
    { src: "/images/ipad-dos.png", alt: "iPad 11 argent vu de dos" },
  ] satisfies SiteImage[],
};

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
      text: "Un tirage au sort tous les 15 jours, filmé en direct sur Instagram.",
    },
  ],
  next: {
    kicker: "Prochain concours",
    title: "Disponible très prochainement",
    text: "Un nouveau concours est lancé toutes les deux semaines, annoncé en avant-première sur notre Instagram et notre communauté WhatsApp.",
    button: "Être prévenu en premier",
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
  // (ticket à 10 €, tickets limités, tirage filmé en direct). Voir A_VALIDER.md.
  items: [
    {
      question: "Comment participer à un concours GoldenChance ?",
      answer:
        "Chaque concours est annoncé sur notre compte Instagram et relayé dans notre communauté WhatsApp. Les modalités de participation (suivre le compte, réagir à la publication, inviter des proches) sont détaillées dans le post de lancement de chaque édition.",
    },
    {
      question: "Comment le gagnant est-il désigné ?",
      answer:
        "Le tirage se fait au hasard parmi les participants ayant respecté les conditions du concours en cours. Le résultat est annoncé en direct et publié sur notre page Gagnants ainsi que sur Instagram.",
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
    text: "Recevez les annonces de concours en priorité, échangez avec les autres membres et suivez chaque tirage en direct.",
    button: "Rejoignez notre communauté",
  },
};
