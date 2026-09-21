import { frameShapes } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FrameShape } from "@/components/ui/FrameShape";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FrameShapes() {
  return (
    <section className="section-y bg-porcelain">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Shop by frame shape"
          title="Shape changes the whole expression."
          description="Use frame shape as a shortcut when describing what feels flattering, professional, playful, or bold."
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {frameShapes.map((shape, index) => (
            <ScrollReveal key={shape.title} delay={index * 0.04}>
              <article className="group rounded-lg border border-charcoal/10 bg-white p-6 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:border-teal/40">
                <div className="flex min-h-28 items-center justify-center rounded-md bg-mist/70 px-4">
                  <FrameShape className={shape.className} label={shape.title} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal">{shape.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/[0.62]">{shape.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
