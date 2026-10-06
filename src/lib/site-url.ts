/**
 * Adresse publique du site (SEO, Open Graph, sitemap).
 * Domaine principal : www.golden-chance.website (golden-chance.website y redirige).
 * Peut être remplacée par la variable d'environnement NEXT_PUBLIC_SITE_URL.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production" ? "https://www.golden-chance.website" : "http://localhost:3000");
