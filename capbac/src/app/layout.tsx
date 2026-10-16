import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { AppShell } from "@/components/app/app-shell";
import { Toaster } from "@/components/app/toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { THEME_SCRIPT } from "@/lib/theme-script";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap", weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: { default: "CapBac — Ma route vers le bac", template: "%s · CapBac" },
  description: "Emploi du temps, cours, exercices notés, contrôles et vie scolaire : de la Seconde au bac.",
  applicationName: "CapBac",
  appleWebApp: { capable: true, title: "CapBac", statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  themeColor: "#07080f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${jakarta.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <div className="app-aurora" aria-hidden />
        <TooltipProvider delayDuration={200}>
          <AppShell>{children}</AppShell>
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
