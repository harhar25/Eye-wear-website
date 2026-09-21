import { ButtonLink } from "@/components/ui/ButtonLink";
import { JotformEmbed } from "@/components/sections/JotformEmbed";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function JotformSection() {
  return (
    <section id="find-your-pair" className="section-y bg-pearl">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <ScrollReveal className="min-w-0">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                eyebrow="Personalized eyewear form"
                title="Let's Find Your Perfect Pair"
                description="Tell us your style, preferred frame, and budget, and we'll help you find eyewear that fits you."
              />
              <ButtonLink href="#contact" variant="ghost" className="mt-8 px-0">
                View contact details
              </ButtonLink>
            </div>
          </ScrollReveal>

          <ScrollReveal className="min-w-0" delay={0.08}>
            <JotformEmbed />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
