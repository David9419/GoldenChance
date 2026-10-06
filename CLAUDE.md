# CLAUDE.md — Projet GoldenChance

> Ce fichier décrit **tout** le site GoldenChance (structure, textes exacts, images, couleurs, typographies, animations, comportements). Il sert de cahier des charges pour **reconstruire le site de zéro, proprement, avec Claude Code**, puis le déployer sur Vercel via GitHub.
> Le propriétaire (David) communique en français, donne des briefs détaillés et attend une exécution autonome, complète et professionnelle (pas de version minimaliste). Il a un œil très exigeant sur la qualité visuelle : rien ne doit paraître amateur. Il ne sait pas coder : explique les étapes manuelles qu'il doit faire (GitHub, Vercel, variables d'environnement) en français, simplement, pas à pas.

> **État actuel (v6)** : écran de chargement à chaque arrivée (`SiteLoader.tsx`) : logo + pourcentage 0 → 100 (chiffres dorés) + barre dorée, puis filet doré et ouverture en deux volets ; l'accueil (navbar, titre, texte, photo) ne s'anime qu'à ce moment-là via `data-ready` sur `<html>` (`src/lib/site-ready.ts`). **v5** : animations **toujours actives**, même si l'appareil a « Réduire les animations » (demande explicite de David : sur son téléphone, tout était instantané) ; intro logo à **chaque** visite ; textes et images qui apparaissent en sortant du flou (fondu, gauche, droite, zoom) ; liens du menu : le menu se referme puis défilement animé. **v4** : navbar grande en haut puis compacte au scroll, défilement fluide Lenis + défilement animé vers les sections, rideau entre les pages, chiffres qui défilent, bouton WhatsApp flottant déplaçable (4 coins), diaporamas sans effet « double image », bandeau 11s, nouvelles photos. **v3** : animations d'arrivée (intro logo + rideau, titre mot par mot, entrées par les côtés), sections numérotées, nouvelle section « Trois univers de lots » (§5.1 D bis), bandeau 18s. **v2** : le site a été reconstruit selon ce document (Next.js 16 App Router, Tailwind v4, shadcn/ui sur Radix, Motion). Tous les textes sont dans `src/content/site.ts`. Les points en attente de validation sont listés dans `A_VALIDER.md`.

---

## 0. Comment travailler sur ce projet (consignes pour Claude Code)

1. **Lis tout ce fichier avant d'écrire du code.** Les textes en français entre guillemets sont à reprendre **mot pour mot**.
2. **Annonce un court plan**, puis exécute en autonomie (scaffold → composants → pages → animations → SEO → vérification).
3. **Vérifie visuellement** : lance le serveur de dev, prends des captures (desktop 1280px et mobile 390px), compare avec les descriptions ci-dessous, corrige.
4. **Ne change pas le design** décrit ici sans demande. Ne rajoute pas de fausses informations (faux gagnants, faux chiffres, faux avis).
5. **Commits propres** et réguliers, messages en français ou anglais cohérents.
6. À la fin : donne à David la liste exacte des étapes manuelles (push GitHub, import Vercel, domaine) et un récapitulatif de ce qui est fait / à faire.
7. **Publication** : David demande de **publier directement** chaque modification terminée et vérifiée (pull request vers `main` puis fusion → Vercel redéploie tout seul), sans attendre son accord. S'il n'aime pas un résultat, on re-modifie ensuite.
8. Les points marqués **⚠️ À CONFIRMER** sont des textes ou des affirmations à valider par David avant mise en production.

---

## 1. Présentation du projet

- **Nom** : GoldenChance
- **Slogan** : « Plus qu'un concours, une chance de rêve »
- **Concept** : plateforme de concours (tirages au sort) où l'on peut gagner des objets de luxe et de haute technologie (sacs de créateurs, montres, bijoux, produits Apple, trottinettes…). **Un concours toutes les deux semaines.**
- **Fondé en** : juillet 2026.
- **Mission** : permettre à celles et ceux qui n'ont pas toujours les moyens d'accéder à des objets de luxe, par le tirage au sort.
- **Fonctionnement d'un concours (exemple réel : iPad 11)** :
  - Prix du ticket : **10 €**
  - **Tickets limités**
  - Tirage au sort **filmé en direct en vidéo sur Instagram**, sur une vraie plateforme de roulette
- **Canaux** : Instagram, communauté WhatsApp, 2 numéros de téléphone.
- **Phase 2 (plus tard, pas maintenant)** : connecter **Revolut** pour acheter un ticket / participer. Prévoir l'architecture pour ça (voir §12), sans l'implémenter tant que David ne le demande pas.

### Liens et coordonnées (à utiliser tels quels)

| Élément | Valeur |
|---|---|
| Instagram (compte) | `@goldenchanceconcours` |
| Instagram (URL) | `https://www.instagram.com/goldenchanceconcours?stkn=MXc5cGU3Zmwyd3k0dA%3D%3D&utm_source=qr` |
| Communauté WhatsApp (URL) | `https://chat.whatsapp.com/CWlBcodgLiS9rhHWEuLBWD` |
| Téléphone 1 | `07 44 98 17 75` → `tel:0744981775` |
| Téléphone 2 | `07 49 94 20 81` → `tel:0749942081` |

---

## 2. Stack technique recommandée

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS** + **shadcn/ui** (David a explicitement demandé des composants shadcn)
- **Motion** (ex-Framer Motion) pour les animations d'entrée, transitions de pages et carrousels
- **`next/font`** pour Cormorant Garamond et Manrope (pas de lien Google Fonts externe)
- **`next/image`** pour toutes les images (optimisation, `sizes`, `priority` sur le hero)
- Déploiement : **GitHub → Vercel** (déploiement automatique à chaque push sur `main`)
- Pages réelles (routes) : `/` (accueil), `/gagnants`, `/contact`
- Composants shadcn à utiliser (au minimum) : `Button`, `Accordion` (FAQ), `Sheet` ou `Dialog` (menu burger plein écran), `Badge` (tags), `Card`/panneaux, `Separator`. Les personnaliser au design ci-dessous (ne pas laisser le style par défaut).
- Structure suggérée :
  ```
  src/
    app/
      layout.tsx          (fonts, metadata, fond fixe, navbar, footer, transitions)
      page.tsx            (accueil)
      gagnants/page.tsx
      contact/page.tsx
      globals.css         (variables de design, utilitaires)
    components/
      site/               (Navbar, BurgerMenu, Marquee, FrostBackground, Footer, Reveal, Slideshow, ProductCarousel)
      sections/           (Hero, ExampleContest, Concept, About, Faq, JoinCta)
      ui/                 (shadcn)
    content/
      site.ts             (tous les textes, liens, FAQ, gagnants — source unique)
    lib/
  public/
    images/               (voir §4)
    favicon.png
  ```
- **Tous les textes et données dans `content/site.ts`** (jamais en dur dans les composants) pour que David puisse modifier facilement (nouveaux gagnants, nouveau concours).

---

## 3. Design system

### 3.1 Direction artistique
Luxe discret, nocturne, « coffre-fort de verre » : fond bleu nuit profond, panneaux en verre dépoli, argent et bleu-gris dominants, **touches d'or** (reprises du logo) uniquement sur les accents (boutons principaux, italiques, puces). Rien de criard. Beaucoup d'air. Rendu pro, fluide, animé avec élégance.

Phrase guide : **« plus on descend dans le site, plus l'ambiance devient floue et sombre »** (voir §6.1).

### 3.2 Couleurs (variables CSS / tokens Tailwind)

| Token | Valeur | Usage |
|---|---|---|
| `navy-950` | `#050810` | fond principal du site |
| `navy-900` | `#0a1120` | fonds secondaires |
| `navy-800` | `#111c30` | panneaux |
| `slate-700` | `#233246` | bordures/fonds froids |
| `slate-500` | `#4c6178` | texte discret (tag du menu, labels contact, copyright) |
| `silver-300` | `#c7d1db` | texte courant secondaire, liens de nav |
| `silver-100` | `#eef2f6` | titres, texte principal |
| `ice-400` | `#7ea3c2` | eyebrows (sur-titres italiques), « prize » |
| `gold-400` | `#c9a25b` | or principal (puces, dégradé bouton) |
| `gold-300` | `#e0c07f` | or clair (mots en italique dorés, hover liens) |

- Panneaux « verre » : `background: rgba(17,28,48,0.42)`, bordure `1px solid rgba(199,209,219,0.14)`, `backdrop-filter: blur(16px)`, rayon **28px**, padding 44px (28px sur mobile).
- Bouton principal : dégradé `linear-gradient(135deg, #e0c07f, #c9a25b)`, texte `#241a08`, ombre dorée `0 10px 30px rgba(201,162,91,0.25)` (plus forte au hover), pilule (rayon 999px), léger `translateY(-2px)` au hover.
- Bouton fantôme : fond `rgba(199,209,219,0.06)`, bordure `rgba(199,209,219,0.22)`, texte `silver-100`.
- Sélection de texte : fond `gold-400`, texte `navy-950`.
- Focus clavier visible : outline 2px `gold-300`, offset 3px.

### 3.3 Typographies
- **Titres / éléments éditoriaux** : **Cormorant Garamond** (poids 400, 500, 600 + italique 400). Titres en 500, `line-height ~1.08`.
- **Texte / UI** : **Manrope** (400, 500, 600, 700, 800).
- Tailles repères : `h1` `clamp(2.7rem, 6.2vw, 4.6rem)` ; `h2` `clamp(2.2rem, 4.4vw, 3.4rem)` ; lead `1.12rem`, `line-height 1.75`, couleur `silver-300`, `max-width 640px`.
- **Eyebrow** (sur-titre) : Cormorant italique, `1.05rem`, couleur `ice-400`.

### 3.4 Espacements & layout
- Conteneur max **1180px**, padding horizontal 28px.
- Sections : padding vertical **110px**.
- Rayon des grands panneaux : 28px ; boutons/pilules : 999px ; cartes photo : 24px.
- Mobile first, breakpoints principaux : 640px, 820px, 900px (navbar étendue + menu 2 colonnes), 960px (grilles 2 colonnes).

---

## 4. Images et assets

Tous à placer dans `public/images/` (David possède les fichiers originaux ; sinon demande-les-lui). Noms de fichiers à conserver :

| Fichier | Contenu | Usage |
|---|---|---|
| `hero-jewelry.jpg` | Photo flat-lay bijoux dorés (montre dorée, bracelet cœur, créoles, perles, lunettes, magazine, sac marron) — portrait ~1024×1536 | Hero (1ʳᵉ image du carrousel), menu burger, fond |
| `hero-bags.jpg` | Étagère de sacs de luxe (Louis Vuitton, Chanel, Miu Miu, Dior… roses/beiges/noirs) ~736×981 | Hero, menu burger, fond |
| `hero-tech.jpg` | Photo noir & blanc de produits Apple (iPad, AirPods Max, MacBook, iPhone, Apple Watch, Pencil) ~1200×1110 | Hero, menu burger, fond |
| `hero-watches.jpg` | Écrin de montres bi-ton (acier/or rose) sur coussinets bleu nuit ~784×1168 | Hero, menu burger, fond, section À propos |
| `logo-goldenchance.png` | **Logo GoldenChance en PNG à fond transparent** : médaillon doré « GC » dans un cercle fin + mot « GOLDENCHANCE » + slogan en petit dessous. 500×500. **Ne jamais le rogner dans un cercle** (le texte du bas serait coupé) : l'afficher en entier (`object-fit: contain`). | Navbar (40px), hero (180px), footer (38px) |
| `favicon.png` | **Uniquement le médaillon circulaire « GC »** (sans le texte), recadré carré, fond transparent, 512×512 | Favicon + apple-touch-icon |
| `logo-instagram.jpg` | Pictogramme Instagram (dégradé) fond noir | Menu burger, contact, footer (rond 52px / 38px, `object-fit: cover`) |
| `logo-whatsapp.png` | Pictogramme WhatsApp vert, **fond transparent** | Boutons « Rejoindre la communauté », menu, contact, footer |
| `ipad-face.png` | iPad 11 argent vu de face, écran coloré, **fond transparent** | Carrousel concours iPad |
| `ipad-coins.png` | Gros plan des coins/appareils photo d'iPad en 4 couleurs, fond transparent | Carrousel concours iPad |
| `ipad-dos.png` | iPad argent vu de dos (pomme), fond transparent | Carrousel concours iPad |
| `winner-levi.jpg` | Photo de David (équipe GoldenChance) avec le gagnant **Lévi Siboni** dans un centre commercial, sac Swatch en main — portrait ~506×900 | Page Gagnants |

Règles images :
- Photos « ambiance » : `object-fit: cover`. Packshots iPad (transparents) : `object-fit: contain` avec `drop-shadow(0 24px 44px rgba(0,0,0,0.55))`.
- Toujours un `alt` descriptif en français. Optimiser avec `next/image`.
- ⚠️ **À CONFIRMER** : accord du gagnant (Lévi Siboni) pour publier sa photo et son nom (droit à l'image / RGPD).

---

## 5. Structure des pages et contenus exacts

### 5.0 Éléments globaux

**Fond fixe** (derrière tout) : composition de **4 photos** (jewelry, bags, tech, watches) placées aux 4 coins (chacune ~52 % × 52 %, décalées de −4 %), teintées bleu-gris (`grayscale(.35) saturate(.75) brightness(.85) sepia(.08) hue-rotate(170deg)`, opacité .68) et **floutées de façon progressive au scroll** (voir §6.1). Par-dessus : voile dégradé radial sombre.

**Navbar** — pilule flottante (rectangle aux bords très arrondis), fixe en haut :
- Position : `top: 18px`, centrée horizontalement, largeur `min(560px, 92vw)` (`min(760px, 92vw)` dès 900px).
- Style : fond `rgba(14,22,38,0.55)`, bordure `rgba(199,209,219,0.14)`, `backdrop-filter: blur(18px)`, ombre `0 8px 30px rgba(0,0,0,0.35)`, rayon 999px, `z-index` élevé.
- Gauche : logo (40px) + « **GoldenChance** » en Cormorant 600, 1.18rem.
- Centre (≥900px uniquement) : liens **Accueil · Concours · Gagnants · Contact** (couleur `silver-300`, hover `gold-300`).
- Droite : **bouton burger** rond 42px (3 traits → se transforme en croix « X » à l'ouverture).

**Menu burger (plein écran)** :
- Overlay plein écran, fond dégradé `rgba(5,8,16,0.94 → 0.985)`, apparition en fondu (.45s).
- **Arrière-plan ambiant** : diaporama plein écran des 4 photos en fondu enchaîné (1.8s de fondu, changement toutes les ~3.4s), opacité .4, léger flou 2px, légère désaturation.
- Contenu en 2 colonnes (≥900px) / empilé sur mobile (photo au-dessus des liens) :
  - **Colonne gauche** : petite ligne « PLUS QU'UN CONCOURS, UNE CHANCE DE RÊVE » (majuscules, espacée, `slate-500`) ; puis les liens en grand (Cormorant, `clamp(2rem, 6vw, 3.2rem)`) : **Accueil, Concours, À propos, FAQ, Gagnants, Contact** ; puis 2 pastilles rondes 52px : **Instagram** et **WhatsApp** (liens externes, `target="_blank"`, `rel="noopener"`).
  - **Colonne droite — le « carré photo »** : 300×380px (220×280 sur mobile), rayon 24px, bordure fine, grosse ombre. **Il fait défiler en fondu enchaîné, à l'infini, 4 photos une par une : bijoux → montres → tech → sacs** (fondu 1.6s, changement toutes les ~2.8s). **C'est un point que David a redemandé plusieurs fois : il doit être bien visible, net (pas flouté) et tourner en boucle.**
- Cliquer sur un lien ferme le menu et navigue (voir §6.2). Fermeture aussi en cliquant hors du contenu. `Escape` ferme le menu. Gérer le focus (accessibilité).

**Bandeau défilant infini** (juste sous le hero) :
- Barre pleine largeur, fond `rgba(10,17,32,0.55)`, bordures haut/bas `rgba(199,209,219,0.1)`, flou 10px, padding vertical 13px.
- Mots (Cormorant italique 1.15rem, `silver-300`) séparés par un **✦ doré** : **Montres, Sacs de luxe, Trottinettes, MacBook, iPhone, Dior, Bijoux, Chanel, Rolex, Louis Vuitton** (liste dupliquée pour une boucle parfaite).
- Animation : `translateX(0 → -50%)`, **11s, linear, infinite** (accéléré à la demande de David en v3 puis v4), bords fondus. En `prefers-reduced-motion` : ralentir (≈30s) plutôt que couper.

**Footer** : logo (38px) + « GoldenChance » ; slogan en italique `slate-500` « Plus qu'un concours, une chance de rêve » ; pastilles Instagram + WhatsApp (38px) ; « © 2026 GoldenChance. Tous droits réservés. » ; bordure haute fine.

---

### 5.1 Page Accueil (`/`) — sections dans cet ordre

#### A. Hero (`#accueil`)
Plein écran (min 100vh), grille 2 colonnes (1.1fr / 0.9fr) dès 960px.
- Logo GoldenChance (180px, avec halo doré `drop-shadow(0 0 46px rgba(201,162,91,0.22))`).
- **H1** : « Le luxe, *accessible* à tous, tous les 15 jours. » (le mot « accessible » en italique `gold-300`, saut de ligne après « accessible »).
- **Paragraphe** : « GoldenChance organise un concours toutes les deux semaines pour offrir sacs de créateurs, montres d'exception et bijoux précieux à celles et ceux qui n'auraient jamais pensé pouvoir les porter un jour. »
- **Boutons** : 
  1. (principal doré, icône WhatsApp 22px) « **Rejoindre la communauté** » → lien WhatsApp ;
  2. (fantôme) « **Découvrir les concours** » → défile en douceur jusqu'à `#presentation`.
- **Carte photo à droite** (ratio 4:5, panneau verre, rayon 28px, image intérieure rayon 22px) : **diaporama en fondu enchaîné infini** des 4 photos (bijoux → sacs → montres → tech, fondu 1.6s, toutes les ~3.2s). En bas de la carte, un badge verre sombre : « *Concours en cours* » (Cormorant italique doré) + « Un nouveau lot toutes les deux semaines ».

#### B. Bandeau défilant (voir §5.0)

#### C. Exemple de concours (`#concours-exemple`) — **placé juste sous le bandeau, avant « Le concept »**
- Eyebrow : « Exemple de concours »
- **H2** : « Comment se déroule un tirage »
- Lead : « Chaque édition suit le même principe : un lot annoncé, un nombre de tickets limité, et un tirage réalisé en direct sur Instagram. »
- **Panneau 2 colonnes** :
  - **Gauche : carrousel produit** (fond dégradé radial discret, packshots transparents centrés, `contain`) avec les 3 images **iPad face → coins → dos**, fondu 1.4s, auto toutes les ~3.4s, **+ flèche gauche « ‹ » et flèche droite « › »** (boutons ronds 42px, verre sombre, hover doré) pour naviguer manuellement ; un clic relance le minuteur. Accessibles au clavier, `aria-label` « Photo précédente / suivante ».
  - **Droite** : badge gris « **Concours terminé** » ; **H3** « iPad 11 — Gris (2025) » ; ligne prize italique `ice-400` « Tirage au sort effectué » ; liste à puces dorées :
    - « Lot : **iPad 11, coloris gris, modèle 2025** »
    - « Prix du ticket : **10 €** »
    - « Tickets limités »
    - « Tirage au sort filmé en direct sur Instagram »
    - « Résultat déterminé sur une plateforme de roulette certifiée » — ⚠️ **À CONFIRMER** : David a dit « une vraie plateforme de roulette » ; le mot « certifiée » a été ajouté par l'assistant. Utiliser « une vraie plateforme de roulette » tant qu'il n'a pas confirmé la certification.

#### D. Le concept (`#presentation`) — **sous l'exemple iPad** (refait en v3)
- Eyebrow : « Le concept » ; **H2** : « Deux concours par mois, une chance tous les 15 jours »
- Lead : « Chaque concours GoldenChance met en jeu des objets que l'on admire sans toujours pouvoir se les offrir. Notre promesse : les rendre atteignables, pour de vrai, à intervalles réguliers. »
- 2 cartes chiffres (grand chiffre doré) : **2** « concours par mois » — « Deux éditions chaque mois, chacune avec son propre lot. » ; **15** « jours entre chaque tirage » — « Un tirage au sort tous les 15 jours, filmé en direct sur Instagram. »
- Carte mise en avant (bordure dorée, point lumineux) : « Prochain concours » ; titre « *Disponible très prochainement* » ; texte « Un nouveau concours est lancé toutes les deux semaines, annoncé en avant-première sur notre Instagram et notre communauté WhatsApp. » ; bouton doré WhatsApp « Être prévenu en premier ».

#### D bis. Trois univers de lots (`#univers`) — ajouté en v3
- Eyebrow : « Les lots » ; **H2** : « Trois univers de lots » ; lead « Des objets que l'on admire, choisis pour chaque édition. »
- 3 grandes cartes photo (ratio 3:4, texte sur dégradé sombre, zoom au survol) :
  1. *Univers I* — **Sacs & maroquinerie** (photo sacs) — « Sacs de créateurs et pièces de maroquinerie recherchées, celles qu'on garde toute une vie. »
  2. *Univers II* — **Montres d'exception** (photo montres) — « Garde-temps suisses et éditions recherchées, du poignet au collector. »
  3. *Univers III* — **Haute technologie & bijoux** (photo tech) — « Du dernier iPhone au MacBook, en passant par des bijoux précieux — la sélection change à chaque édition. »
- Lien « Les lots » ajouté au menu burger.

### Animations v3 (en plus du §6)
- (v6) Remplacée par l'écran de chargement `SiteLoader` : compteur ~2,3 s (attend aussi le chargement réel de la page, max 6 s), ouverture ~1,1 s. Les entrées du hero sont en CSS sous `html[data-ready]` (jamais de délai fixe : c'était la cause de l'animation « coupée »). Défilement bloqué pendant le chargement.
- Hero : titre mot par mot, « accessible » avec reflet doré animé, texte et boutons depuis la gauche, carte photo depuis la droite, indicateur « Découvrir ».
- **v4** : navbar large (74px, `min(1080px,94vw)`, logo 52px) en haut de page, compacte (60px, `min(760px,92vw)`) dès 40px de scroll ; défilement fluide Lenis (`src/components/site/SmoothScroll.tsx`) ; clic vers une section = défilement animé (easeInOutQuart) ; changement de page = rideau navy avec logo (`PageTransition.tsx`) ; chiffres 2 et 15 qui défilent 1, 2, 3… (`CountUp`) ; bouton WhatsApp flottant déplaçable par glisser vers l'un des 4 coins, coin mémorisé (`WhatsAppFloat.tsx`).
- **v4 — diaporamas** : la nouvelle photo apparaît PAR-DESSUS l'ancienne restée opaque (jamais deux images semi-transparentes = pas de « double image » avec le fond). Hero 2,6s / fondu 1s ; carré du menu 2,4s / 1s ; iPad 3s / 0,9s.
- **v4 — flou au scroll** : rendu par 3 couches pré-floutées (2, 14, 40px) dont on fait varier l'opacité, + voile sombre en opacité (fluide sur mobile).
- **v5** : `MotionConfig reducedMotion="never"`, Lenis `respectReducedMotion: false`, aucun bloc CSS `prefers-reduced-motion`. `Reveal` (`from`: up / left / right / fade / zoom) = opacité + flou 12–18px + glissement, `filter: none` à la fin. Liens du menu burger : `navigateDelay` 380ms (le menu se ferme avant le défilement).
- **Leçon v4** : ne jamais laisser de `filter` (même `blur(0)`) sur un parent d'un panneau verre : cela casse son `backdrop-filter`.
- Titres de section mot par mot ; sections numérotées 01 à 05 ; blocs qui arrivent par les côtés ; zoom lent sur les photos des diaporamas ; reflet doré qui suit la souris sur les cartes ; brillance sur le bouton doré ; barre de progression dorée en haut ; léger grain.

#### E. À propos (`#apropos`)
Grille 2 colonnes : image `hero-watches.jpg` (rayon 28px, bordure fine) à gauche, texte à droite.
- Pastille dorée : « ✦ Fondé en juillet 2026 »
- **H2** : « Pourquoi GoldenChance existe »
- §1 : « Nous avons créé GoldenChance en juillet 2026 à partir d'un constat simple : trop de belles choses restent hors de portée, non pas parce qu'elles ne le méritent pas, mais parce que leur prix les réserve à quelques-uns. »
- §2 : « Notre mission est de donner à ceux qui n'en ont pas toujours les moyens une vraie chance d'accéder à des objets de luxe — par le tirage au sort plutôt que par le porte-monnaie. Chaque concours est une occasion concrète de vivre, l'espace d'un lot, ce que l'on croyait inaccessible. »

#### F. FAQ (`#faq`)
- Eyebrow : « Questions fréquentes » ; **H2** : « Ce qu'il faut savoir avant de participer »
- Accordéon (shadcn `Accordion`, **un seul item ouvert à la fois**, icône « + » dorée qui tourne de 135° à l'ouverture, séparateurs fins, questions en Cormorant 1.28rem, réponses `silver-300`) :
  1. **Comment participer à un concours GoldenChance ?** — « Chaque concours est annoncé sur notre compte Instagram et relayé dans notre communauté WhatsApp. Les modalités de participation (suivre le compte, réagir à la publication, inviter des proches) sont détaillées dans le post de lancement de chaque édition. »
  2. **Comment le gagnant est-il désigné ?** — « Le tirage se fait au hasard parmi les participants ayant respecté les conditions du concours en cours. Le résultat est annoncé en direct et publié sur notre page Gagnants ainsi que sur Instagram. »
  3. **Les lots sont-ils authentiques ?** — « Oui. Chaque lot mis en jeu — sac, montre, bijou ou produit high-tech — est un article authentique, présenté et remis au gagnant en main propre ou par livraison suivie. »
  4. **Comment et quand je reçois mon lot si je gagne ?** — « Nous contactons chaque gagnant directement après l'annonce des résultats pour organiser la remise du lot, en main propre ou par envoi sécurisé, dans les jours qui suivent le tirage. »
  5. **Puis-je participer à plusieurs concours à la fois ?** — « Oui, chaque édition est indépendante. Vous pouvez participer à autant de concours GoldenChance que vous le souhaitez, un nouveau lot étant proposé toutes les deux semaines. »
  6. **Comment être prévenu du prochain concours ?** — « Le plus simple est de suivre notre Instagram @goldenchanceconcours et de rejoindre notre communauté WhatsApp : les annonces y sont publiées en priorité, avant chaque nouveau tirage. »
- ⚠️ **À CONFIRMER / À METTRE À JOUR** : ces réponses ont été rédigées de façon générique. Depuis, David a précisé que **le ticket coûte 10 €, que les tickets sont limités et que le tirage est filmé en direct sur Instagram**. Proposer à David une FAQ réécrite en cohérence (ex. « Combien coûte un ticket ? », « Comment se déroule le tirage ? », « Que se passe-t-il si tous les tickets ne sont pas vendus ? », « Comment je reçois mon lot ? ») **et lui faire valider** avant mise en ligne. Ne pas inventer de règles.

#### G. Appel à rejoindre la communauté
Panneau verre centré : eyebrow « Rejoignez l'aventure » ; H3 « Ne manquez plus aucun concours » ; texte « Rejoignez notre communauté WhatsApp pour être averti dès l'ouverture d'un nouveau tirage, en priorité. » ; bouton doré avec icône WhatsApp « **Rejoignez notre communauté** » → lien WhatsApp.

> ⚠️ **Il n'y a PAS de section gagnants sur la page d'accueil** (David l'a explicitement refusé). Les gagnants vivent uniquement sur `/gagnants`.

---

### 5.2 Page Gagnants (`/gagnants`) — page dédiée
- Eyebrow « Page Gagnants » ; **H2** « Ils ont tenté leur chance, ils l'ont eue » ; lead « Chaque concours a son gagnant. Retrouvez ici, édition après édition, celles et ceux qui sont repartis avec leur lot. »
- **Carte gagnant** (panneau 2 colonnes : photo `winner-levi.jpg` ratio 3:4 à gauche, infos à droite) :
  - badge doré « Concours Montre — Édition #1 »
  - H3 « **Lévi Siboni** »
  - prize italique `ice-400` « Une Swatch x Omega MoonSwatch »
  - texte : « Premier grand tirage GoldenChance dédié aux montres : Lévi a été désigné gagnant et a reçu sa montre directement des mains de l'équipe GoldenChance. »
- **Bloc « prochaine édition »** (panneau verre centré) : eyebrow « Prochaine édition » ; H3 « Le prochain gagnant, c'est peut-être vous » ; texte « Un nouveau concours est lancé toutes les deux semaines. Rejoignez notre communauté pour être informé dès l'ouverture du prochain tirage. » ; boutons : « Rejoindre la communauté » (doré, WhatsApp) + « Suivre sur Instagram » (fantôme).
- **Architecture** : les gagnants viennent d'un tableau dans `content/site.ts` (`{ nom, lot, concours, edition, photo, texte }`) pour ajouter facilement de futurs gagnants ; la page affiche une carte par gagnant, du plus récent au plus ancien. **Ne jamais inventer de gagnants.**

### 5.3 Page Contact (`/contact`)
- Eyebrow « Page Contact » ; **H2** « Une question ? Parlons-en » ; lead « Retrouvez tous nos canaux pour nous joindre, suivre les concours et rejoindre la communauté GoldenChance. »
- **Grille 2×2 de cartes verre** (icône ronde 52px + label discret majuscules + valeur en Cormorant 1.35rem) :
  1. Téléphone — **07 44 98 17 75** (`tel:0744981775`)
  2. Téléphone — **07 49 94 20 81** (`tel:0749942081`)
  3. Instagram — **@goldenchanceconcours** (logo Instagram, lien externe)
  4. Communauté — **Groupe WhatsApp** (logo WhatsApp, lien externe)
- Panneau final : H3 « Rejoignez notre communauté » ; texte « Recevez les annonces de concours en priorité, échangez avec les autres membres et suivez chaque tirage en direct. » ; bouton doré WhatsApp « **Rejoignez notre communauté** ».

---

## 6. Animations et comportements (à respecter précisément)

### 6.1 Effet de flou progressif au scroll — **demande n°1 de David, redemandée plusieurs fois**
« Plus on descend dans le site, plus il y a un effet flou. »
- Variables CSS pilotées par le scroll sur `:root` : `--frost-blur` et `--frost-dark`.
- Progression `p = min(scrollY / min(maxScroll, 2200), 1)` → l'effet atteint son maximum après ~2 écrans de scroll (il doit être **nettement visible**).
- `--frost-blur = 2px + p × 38px` (de 2px en haut à 40px).
- `--frost-dark = 0.42 + p × 0.5` (de 0.42 à 0.92) : opacité du voile sombre (dégradé radial `rgba(5,8,16,0.35)` en haut → `rgba(5,8,16,var(--frost-dark))` à 55 % → `rgba(5,8,16,0.97)` en bas).
- **Appliquer le flou directement sur les 4 images du fond** via `filter: ... blur(var(--frost-blur))` (technique fiable). Ne pas compter uniquement sur `backdrop-filter` pour cet effet.
- Écouter l'événement `scroll` de **`window`** (passif) avec `requestAnimationFrame` ; recalculer au changement de page (reset du scroll).
- Bonus : les panneaux « verre » utilisent `backdrop-filter: blur(16px)` pour renforcer l'impression de profondeur.
- L'effet est piloté par le scroll utilisateur (pas un autoplay) : ne pas le désactiver en `prefers-reduced-motion`.

### 6.2 Navigation et transitions
- Cliquer sur un lien de la navbar / du menu qui pointe vers **une section de la même page** → **défilement fluide** (smooth scroll) directement jusqu'à la section (pas de saut en haut avant).
- Cliquer sur un lien qui change de **page** (Accueil ↔ Gagnants ↔ Contact) → **transition en fondu** : l'ancienne page s'efface (~260ms), la nouvelle apparaît (~320ms), scroll remis en haut. Si le lien cible une section d'une autre page (ex. « Concours » depuis `/gagnants`) : fondu vers `/`, puis défilement fluide jusqu'à la section.
- « Accueil » quand on est déjà sur `/` → remonte en douceur en haut.
- Avec Next.js : utiliser de vraies routes + un template/`AnimatePresence` pour le fondu ; gérer les ancres (`/#presentation`, `/#apropos`, `/#faq`) ; `scroll-padding-top` pour tenir compte de la navbar fixe.
- Respecter `prefers-reduced-motion` : transitions réduites/instantanées, **mais les diaporamas continuent de tourner (plus lentement, ×2.2)** car ce sont des contenus, pas de la décoration.

### 6.3 Apparition au scroll (reveal)
Chaque bloc de contenu : départ `opacity: 0; translateY(22px)` → `opacity: 1; translateY(0)` en **0.7s ease**, déclenché à l'entrée dans le viewport (seuil ~12 %).

### 6.4 Diaporamas en fondu enchaîné (4 instances)
1. Fond du menu burger (plein écran, 4 photos, ~3.4s)
2. **Carré photo du menu burger** (4 photos, ~2.8s, fondu 1.6s)
3. **Carte hero** (4 photos, ~3.2s, fondu 1.6s)
4. **Carrousel iPad** (3 images + flèches, ~3.4s, fondu 1.4s)
- Implémentation : images empilées en `position: absolute`, une seule `active` (opacité 1), les autres à 0 avec `transition: opacity`. Composant réutilisable `Slideshow`. Pause possible au survol (optionnel), jamais de saccade.

### 6.5 Autres micro-interactions
- Boutons : `translateY(-2px)` au hover, ombre dorée renforcée.
- Burger : trait du milieu disparaît, les 2 autres forment un X (transition .25s).
- Accordéon FAQ : hauteur animée (.35s), icône « + » → rotation 135°.
- Liens de nav : couleur `silver-300` → `gold-300` au hover (.2s).

---

## 7. SEO, accessibilité, performance

- `<html lang="fr">`. Metadata Next : titre « GoldenChance — Plus qu'un concours, une chance de rêve », description (reprendre le concept), Open Graph + Twitter card (image : `hero-jewelry.jpg` ou une image OG 1200×630 dédiée à créer), `theme-color` `#050810`.
- **Favicon** : `favicon.png` (médaillon « GC ») + `apple-touch-icon`.
- Données structurées JSON-LD `Organization` (nom, logo, `sameAs` Instagram).
- `sitemap.xml` et `robots.txt`.
- Accessibilité : navigation clavier complète, focus visibles, `aria-label` sur les boutons icône (burger, flèches, réseaux), contrastes AA, `alt` sur toutes les images, menu burger avec piégeage du focus et `aria-expanded`.
- Performance : `next/image`, `priority` sur l'image LCP du hero, polices via `next/font` (`display: swap`), pas de JS inutile, viser Lighthouse ≥ 90.
- Responsive impeccable de 320px à 1920px (tester 390px, 768px, 1280px).

---

## 8. Leçons apprises (bugs rencontrés sur la v1 — à ne pas reproduire)

1. **Ne jamais mettre `overflow-x: hidden` sur `body`** sans précaution : le navigateur transformait `body` en conteneur de scroll et l'événement `scroll` de `window` ne se déclenchait plus → l'effet de flou ne marchait pas. Mettre `overflow-x: clip`/`hidden` sur `html` (ou éviter le débordement horizontal à la source).
2. **Logo** : ne pas l'afficher dans un cercle (`border-radius: 50%` + `cover`) → le texte « GOLDENCHANCE » était coupé. Toujours `object-fit: contain`, fichier PNG **transparent** (pas de fond noir, pas de `mix-blend-mode`).
3. **Packshots iPad** : `contain` (pas `cover`) sinon ils sont rognés.
4. **Spécificité CSS** : attention aux règles génériques `.photo img { object-fit: cover }` qui écrasent les règles des carrousels produit.
5. **Images** : ne pas les intégrer en base64 dans le HTML (fichier de 4 Mo illisible sur GitHub). Fichiers séparés dans `public/images/`.
6. Le dossier d'images doit s'appeler **exactement** `images` (David s'était trompé `asset` vs `assets` à la v1) : garde des chemins simples et cohérents.
7. Le **carré photo du menu burger** doit réellement faire défiler plusieurs photos ; vérifier en ouvrant le menu et en attendant ~4 secondes.
8. (v2) Cormorant Garamond place ses accents (é, ê) légèrement décalés : c'est le dessin de la police (identique dans toutes ses versions), pas un bug du site.
9. (v2) Le site ui.shadcn.com peut être bloqué dans certains environnements : les composants shadcn de `src/components/ui/` ont été écrits à la main sur `radix-ui`.

---

## 9. Points d'attention juridiques et de conformité ⚠️ (à lire avant d'activer le paiement)

> Je ne suis pas juriste — ceci est une alerte à faire vérifier par un professionnel avant toute mise en production du paiement.

- **Tirage au sort avec ticket payant (10 €)** : en France, les loteries/tirages au sort payants sont en principe **encadrés voire interdits** (code de la sécurité intérieure : loteries prohibées sauf exceptions autorisées ; les jeux concours gratuits « sans obligation d'achat » sont, eux, permis sous conditions). **David doit se renseigner (avocat, ANJ — Autorité nationale des jeux) avant de vendre des tickets.** Ne pas implémenter la vente de tickets sans son feu vert explicite.
- Prévoir des **mentions légales**, **CGV / règlement du concours** (déposé chez un huissier, usage courant), **politique de confidentialité (RGPD)** et un lien dans le footer — pages à ajouter une fois le contenu fourni par David.
- Droit à l'image des gagnants (accord écrit), âge minimum de participation (majeurs), données personnelles collectées.

---

## 10. Contenu et textes — règles
- Tout en **français**, tutoiement absent (vouvoiement / formulation neutre sur le site).
- Toujours « **GoldenChance** » (un seul mot, deux majuscules).
- Ne rien inventer : pas de faux témoignages, faux chiffres de participants, fausses dates. Les infos manquantes → `TODO` visible dans `content/site.ts` et signalées à David.

---

## 11. Définition de « terminé » (checklist)
- [ ] Les 3 routes (`/`, `/gagnants`, `/contact`) fonctionnent avec transitions en fondu.
- [ ] Navbar pilule + menu burger plein écran avec **carré photo qui défile en boucle**.
- [ ] Fond fixe avec **flou/assombrissement progressif au scroll** clairement visible.
- [ ] Bandeau défilant infini, hero avec carrousel, section exemple iPad avec flèches, concept, à propos, FAQ, CTA.
- [ ] Textes strictement conformes à ce document.
- [ ] Logo non rogné, favicon médaillon, liens Instagram/WhatsApp/téléphones fonctionnels.
- [ ] Responsive vérifié (captures 390px et 1280px), Lighthouse ≥ 90, accessibilité clavier OK.
- [ ] `npm run build` sans erreur ni warning bloquant.
- [ ] README court pour David : comment modifier les textes (`content/site.ts`) et ajouter un gagnant.

---

## 12. Phase 2 (pas maintenant) — Participation / paiement Revolut
À préparer sans coder tant que David n'a pas validé le volet juridique (§9) :
- Options : lien de paiement **Revolut** (type Revolut.me / Payment Link) pour une v1 simple, ou **Revolut Merchant API / Revolut Pay** pour un vrai tunnel (création de commande côté serveur, webhook de confirmation).
- Données à prévoir (ex. Supabase/Postgres, via variables d'environnement Vercel — **jamais de clés dans le code ni sur GitHub**) : `contests` (titre, lot, prix du ticket, nb max de tickets, statut, dates, vidéo du tirage), `tickets` (contest_id, numéro, acheteur, statut de paiement, référence de paiement), `winners` (contest_id, ticket_id, nom, photo, consentement), `participants` (nom, email, téléphone, consentements RGPD).
- Route API `/api/checkout` + webhook `/api/webhooks/revolut` (vérification de signature), page de confirmation, e-mail de reçu.
- Afficher un compteur « tickets restants » en temps réel et le statut du concours (à venir / en cours / terminé).
- **Sécurité** : validation côté serveur, anti-doublon, limitation de débit, aucune logique de prix côté client.

---

## 13. Premier message à envoyer à Claude Code (suggestion)
« Lis `CLAUDE.md` en entier. Crée le projet GoldenChance en Next.js + TypeScript + Tailwind + shadcn/ui, reproduis le site exactement comme décrit (textes mot pour mot, couleurs, animations, flou progressif au scroll, carré photo du menu burger qui défile). Mets les images dans `public/images/` (je te les fournis). Vérifie avec des captures desktop et mobile, puis explique-moi pas à pas comment le pousser sur GitHub et le déployer sur Vercel. »

---

@AGENTS.md
