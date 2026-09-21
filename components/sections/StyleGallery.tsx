import Image from "next/image";
import { styleGallery } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function StyleGallery() {
  return (
    <section id="styles" className="section-y bg-charcoal text-white">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Shop by style"
          title="A more editorial way to browse your look."
          description="Style is personal. These starting points help visitors describe the mood they want before completing the eyewear form."
          theme="dark"
        />

        <div className="mt-12 grid auto-rows-[260px] gap-5 md:grid-cols-12">
          {styleGallery.map((style, index) => (
            <ScrollReveal key={style.title} className={style.span} delay={index * 0.04}>
              <article className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.08]">
                <Image
                  src={style.image.src}
                  alt={style.image.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover opacity-[0.76] transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/[0.38] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-3xl leading-none">{style.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/[0.72]">{style.description}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
