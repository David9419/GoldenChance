# GoldenChance

Site vitrine de GoldenChance — « Plus qu'un concours, une chance de rêve ».
Next.js + TypeScript + Tailwind CSS + shadcn/ui + Motion, déployé sur Vercel.

## Modifier un texte

Tous les textes, liens et données sont dans **un seul fichier** :
[`src/content/site.ts`](src/content/site.ts).

1. Sur GitHub, ouvrez `src/content/site.ts` puis cliquez sur l'icône crayon (« Edit »).
2. Changez le texte **entre les guillemets** uniquement (gardez les guillemets et les virgules).
3. Cliquez sur « Commit changes ». Vercel remet le site à jour tout seul en 1 à 2 minutes.

> Astuce : si une phrase contient une apostrophe `'`, c'est normal, elle est entre guillemets doubles `"…"`.

## Ajouter un gagnant

1. Ajoutez la photo dans `public/images/` (ex. `winner-sarah.jpg`, format portrait).
2. Dans `src/content/site.ts`, cherchez `export const winners` et ajoutez un bloc :

```ts
  {
    nom: "Prénom Nom",
    lot: "Le lot gagné",
    concours: "Concours Sac",
    edition: 2,
    photo: {
      src: "/images/winner-sarah.jpg",
      alt: "Description de la photo",
    },
    texte: "Une phrase sur le tirage et la remise du lot.",
  },
```

Les gagnants s'affichent automatiquement du plus récent (numéro d'édition le plus grand) au plus ancien.
Ne publiez un gagnant qu'avec son accord écrit (droit à l'image).

## Pour les développeurs

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
npm run lint
```

- Pages : `src/app/` (`/`, `/gagnants`, `/contact`)
- Sections de l'accueil : `src/components/sections/`
- Éléments globaux (navbar, menu, fond flou, diaporamas…) : `src/components/site/`
- Composants shadcn/ui personnalisés : `src/components/ui/`
- Variable d'environnement optionnelle : `NEXT_PUBLIC_SITE_URL` (adresse du site, ex. `https://goldenchance.fr`) pour le SEO.

Le cahier des charges complet est dans [`CLAUDE.md`](CLAUDE.md). Les points à valider avant la mise en ligne sont dans [`A_VALIDER.md`](A_VALIDER.md).
