import { ClipboardCheck, MessagesSquare, SlidersHorizontal } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Testimonial = {
  quote: string;
  name: string;
  context?: string;
};

const testimonials: Testimonial[] = [];

const benefits = [
  {
    title: "Preference-led recommendations",
    description: "Frame suggestions can account for style, shape, lifestyle, and budget instead of relying on a generic catalog.",
    icon: SlidersHorizontal
  },
  {
    title: "Cleaner follow-up",
    description: "The form creates a more organized lead flow for Jotform and future n8n automation.",
    icon: ClipboardCheck
  },
  {
    title: "Room for real stories later",
    description: "The component is ready for verified testimonials once the business has permission to publish them.",
    icon: MessagesSquare
  }
];

export function CustomerExperience() {
  return (
    <section className="section-y bg-charcoal text-white">
      <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Customer experience"
            title="Built around recommendations, not guesswork."
            description="Visitors can browse styles first, then share what they like so Harold Jey Eyewear can provide a more useful shortlist."
            theme="dark"
          />

          <div className="mt-10 grid gap-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.08] p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-teal-100">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/[0.65]">{benefit.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="rounded-lg border border-white/10 bg-white/[0.08] p-6 shadow-glow backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-100">Testimonials</p>
            {testimonials.length > 0 ? (
              <div className="mt-5 grid gap-4">
                {testimonials.map((testimonial) => (
                  <blockquote key={`${testimonial.name}-${testimonial.quote}`} className="rounded-md bg-white p-5 text-charcoal">
                    <p className="text-lg leading-8">{testimonial.quote}</p>
                    <footer className="mt-4 text-sm font-semibold">{testimonial.name}</footer>
                    {testimonial.context ? <p className="mt-1 text-sm text-ink/[0.62]">{testimonial.context}</p> : null}
                  </blockquote>
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-md border border-dashed border-white/[0.18] bg-charcoal/30 p-6">
                <p className="text-2xl font-semibold">Real customer stories can be added here later.</p>
                <p className="mt-3 text-sm leading-7 text-white/[0.65]">
                  No testimonials are shown until genuine customer feedback is provided and approved for publishing.
                </p>
              </div>
            )}
            <ButtonLink href="#find-your-pair" variant="light" className="mt-6">
              Get personalized options
            </ButtonLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
