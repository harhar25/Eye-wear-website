import Image from "next/image";
import { categories } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function EyewearCategories() {
  return (
    <section id="eyeglasses" className="section-y bg-pearl">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Eyewear categories"
            title="Find the frame category that fits your day."
            description="Browse core eyewear categories now, then submit your preferences so Harold Jey Eyewear can help narrow the right direction."
          />
          <a
            href="#find-your-pair"
            className="inline-flex text-sm font-semibold text-teal transition hover:text-charcoal"
          >
            Start with recommendations
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 0.05}>
              <article className="group overflow-hidden rounded-lg border border-charcoal/10 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/[0.54] to-transparent" />
                </div>
                <div className="p-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal">
                    {category.accent}
                  </p>
                  <h3 className="text-xl font-semibold text-charcoal">{category.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/[0.66]">{category.description}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
