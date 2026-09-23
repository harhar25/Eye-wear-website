import { Clock3, LockKeyhole, SlidersHorizontal } from "lucide-react";
import { EyewearConsultationForm } from "@/components/forms/EyewearConsultationForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const consultationBenefits = [
  { icon: SlidersHorizontal, label: "Tailored to your preferences" },
  { icon: Clock3, label: "Only a few focused questions" },
  { icon: LockKeyhole, label: "Your details are sent securely" }
];

export function ConsultationSection() {
  return (
    <section id="consultation" className="section-y bg-porcelain">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <ScrollReveal className="min-w-0">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Personalized consultation"
              title="Find Your Perfect Pair"
              description="Answer a few questions and we'll help you discover eyewear that matches your style, lifestyle, and budget."
            />
            <ul className="mt-8 space-y-4">
              {consultationBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <li key={benefit.label} className="flex items-center gap-3 text-sm font-medium text-ink/65">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-teal shadow-sm">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    {benefit.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal className="min-w-0" delay={0.08}>
          <EyewearConsultationForm />
        </ScrollReveal>
      </div>
    </section>
  );
}

