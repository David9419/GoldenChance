import { hero, heroSlides, links } from "@/content/site";
import { Logo } from "@/components/site/Logo";
import { SmartLink } from "@/components/site/PageTransition";
import { Reveal } from "@/components/site/Reveal";
import { Slideshow } from "@/components/site/Slideshow";
import { WhatsAppIcon } from "@/components/site/Social";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="flex min-h-svh items-center pb-20 pt-[132px] split:pb-16"
    >
      <div className="container-lux grid items-center gap-14 split:grid-cols-[1.1fr_0.9fr] split:gap-16">
        <Reveal className="flex flex-col items-center text-center split:items-start split:text-left">
          <Logo
            size={180}
            priority
            className="-ml-2 mb-4 drop-shadow-[0_0_46px_rgba(201,162,91,0.22)] split:-ml-5"
          />
          <h1 id="hero-title" className="title-h1">
            {hero.titleBefore} <em className="font-normal italic text-gold-300">{hero.titleAccent}</em>
            <br />
            {hero.titleAfter}
          </h1>
          <p className="lead-lux mt-6">{hero.text}</p>
          <div className="mt-9 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:items-center">
            <Button asChild variant="gold">
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={22} />
                {hero.primaryCta}
              </a>
            </Button>
            <Button asChild variant="ghost">
              <SmartLink href={hero.secondaryHref}>{hero.secondaryCta}</SmartLink>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto w-full max-w-[460px] split:max-w-none">
          <div className="glass relative aspect-[4/5] p-3 shadow-[0_40px_90px_rgba(0,0,0,0.5)]">
            <Slideshow
              images={heroSlides}
              interval={3200}
              fade={1600}
              priority
              sizes="(min-width: 960px) 460px, (min-width: 520px) 460px, 92vw"
              label="Exemples de lots GoldenChance"
              className="size-full rounded-[22px]"
            />
            <div className="absolute bottom-7 left-7 right-7 rounded-[18px] border border-[rgba(199,209,219,0.16)] bg-[rgba(5,8,16,0.62)] px-5 py-4 backdrop-blur-[14px]">
              <p className="font-serif text-[1.25rem] italic text-gold-300">{hero.badgeTitle}</p>
              <p className="mt-0.5 text-[0.88rem] text-silver-300">{hero.badgeText}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
