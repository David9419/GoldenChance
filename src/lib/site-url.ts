/**
 * Adresse publique du site (SEO, Open Graph, sitemap).
 * TODO : définir NEXT_PUBLIC_SITE_URL dans Vercel une fois le nom de domaine choisi
 * (ex. https://goldenchance.fr). Sinon, l'adresse Vercel de production est utilisée.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
