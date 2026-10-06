import { About } from "@/components/sections/About";
import { Concept } from "@/components/sections/Concept";
import { ExampleContest } from "@/components/sections/ExampleContest";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { JoinCta } from "@/components/sections/JoinCta";
import { Marquee } from "@/components/site/Marquee";
import { joinCta } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ExampleContest />
      <Concept />
      <About />
      <Faq />
      <JoinCta
        eyebrow={joinCta.eyebrow}
        title={joinCta.title}
        text={joinCta.text}
        button={joinCta.button}
        className="pb-[110px] pt-4"
      />
    </>
  );
}
