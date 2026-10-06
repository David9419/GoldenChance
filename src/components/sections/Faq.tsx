import { faq } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-lux">
      <div className="container-lux">
        <SectionHeading
          index="05"
          id="faq-title"
          eyebrow={faq.eyebrow}
          title={faq.title}
        />
        <Reveal>
          <Card pad={false} className="px-7 py-3 sm:px-11 sm:py-5">
            <Accordion type="single" collapsible>
              {faq.items.map((item, i) => (
                <AccordionItem key={item.question} value={`q${i}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
