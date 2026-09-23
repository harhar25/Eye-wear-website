import { products } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProductCard } from "@/components/sections/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FeaturedProducts() {
  return (
    <section className="section-y bg-pearl">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Featured eyewear"
            title="Sample products ready for real inventory."
            description="These placeholder products are structured in a data file so names, pricing, materials, and photos can be replaced cleanly later."
          />
          <ButtonLink href="#consultation" variant="secondary">
            Ask for a recommendation
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 0.04}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
