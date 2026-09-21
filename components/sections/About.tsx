import Image from "next/image";
import { contactDetails, eyewearImages } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <section className="section-y bg-porcelain">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-lg border border-charcoal/10 bg-white shadow-card">
            <div className="relative aspect-[4/5]">
              <Image
                src={eyewearImages.case.src}
                alt={eyewearImages.case.alt}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <SectionHeader
            eyebrow="About the business"
            title="Simple, stylish eyewear guidance."
            description="Harold Jey Eyewear was created to make finding stylish and comfortable eyewear simpler. We believe glasses should do more than help you see clearly-they should reflect your personality and make you feel confident."
          />
          <div className="mt-8 rounded-lg border border-charcoal/10 bg-white p-6 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">Founder</p>
            <p className="mt-2 text-2xl font-semibold text-charcoal">{contactDetails.owner}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
