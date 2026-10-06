import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { images, links, site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import { FrostBackground } from "@/components/site/FrostBackground";
import { Footer } from "@/components/site/Footer";
import {
  PageFade,
  PageTransitionProvider,
} from "@/components/site/PageTransition";
import { SiteHeader } from "@/components/site/SiteHeader";
import { MotionProvider } from "@/components/site/MotionProvider";
import { Effects } from "@/components/site/Effects";
import { Intro, introScript } from "@/components/site/Intro";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: "/",
    images: [
      {
        url: images.jewelry.src,
        width: 933,
        height: 1400,
        alt: images.jewelry.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [images.jewelry.src],
  },
};

export const viewport: Viewport = {
  themeColor: "#050810",
  colorScheme: "dark",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  slogan: site.slogan,
  url: siteUrl,
  logo: `${siteUrl}${images.logo.src}`,
  sameAs: [links.instagramProfile],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <MotionProvider>
          <Intro />
          <FrostBackground />
          <Effects />
          <PageTransitionProvider>
            <SiteHeader />
            <PageFade>
              <main className="flex-1">{children}</main>
              <Footer />
            </PageFade>
          </PageTransitionProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
