import { site } from "@/content/site";
import { Logo } from "@/components/site/Logo";
import { SmartLink } from "@/components/site/PageTransition";
import { SocialLinks } from "@/components/site/Social";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/site/Reveal";

export function Footer() {
  return (
    <footer className="mt-auto bg-[rgba(5,8,16,0.55)] backdrop-blur-[10px]">
      <Separator className="bg-[rgba(199,209,219,0.1)]" />
      <Reveal
        from="fade"
        className="container-lux flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left"
      >
        <div className="flex flex-col items-center gap-2 md:items-start">
          <SmartLink
            href="/"
            className="flex items-center gap-2.5 rounded-full"
            aria-label="GoldenChance, accueil"
          >
            <Logo size={38} decorative />
            <span className="font-serif text-[1.18rem] font-semibold text-silver-100">
              {site.name}
            </span>
          </SmartLink>
          <p className="font-serif italic text-slate-500">{site.slogan}</p>
        </div>
        <SocialLinks size={38} />
        <p className="text-[0.85rem] text-slate-500">{site.copyright}</p>
      </Reveal>
    </footer>
  );
}
