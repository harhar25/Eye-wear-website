import { CheckCircle2, Glasses, MessageSquareText } from "lucide-react";
import { processSteps } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stepIcons = [MessageSquareText, Glasses, CheckCircle2];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-y bg-charcoal text-white">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="How it works"
              title="Three steps from style idea to stronger shortlist."
              description="A guided consultation captures your taste, use case, frame shape, and budget so every recommendation has a clear reason behind it."
              theme="dark"
            />
            <ButtonLink href="#consultation" variant="light" className="mt-8">
              Start My Eyewear Search
            </ButtonLink>
          </div>

          <div className="grid gap-5">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index] ?? Glasses;
              return (
                <ScrollReveal key={step.step} delay={index * 0.08}>
                  <article className="group grid gap-5 rounded-lg border border-white/10 bg-white/[0.08] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.12] sm:grid-cols-[84px_1fr]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/[0.15] bg-white/10 text-teal-100">
                      <Icon aria-hidden="true" className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/[0.42]">{step.step}</p>
                      <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/[0.68]">{step.description}</p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
