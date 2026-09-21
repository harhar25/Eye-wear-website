import { BadgeCheck, Gem, Headphones, HeartHandshake, Palette, WalletCards } from "lucide-react";
import { valueCards } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const icons = [Palette, HeartHandshake, BadgeCheck, WalletCards, Gem, Headphones];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-y bg-porcelain">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Why choose Harold Jey Eyewear"
          title="Guided eyewear shopping without the pressure."
          description="The site is designed to move visitors from browsing to a clear inquiry, where real recommendations can happen."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {valueCards.map((card, index) => {
            const Icon = icons[index] ?? BadgeCheck;
            return (
              <ScrollReveal key={card.title} delay={index * 0.05}>
                <article className="rounded-lg border border-charcoal/10 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-teal/40">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/[0.66]">{card.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
