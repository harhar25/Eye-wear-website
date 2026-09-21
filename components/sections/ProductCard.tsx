import Image from "next/image";

type Product = {
  name: string;
  category: string;
  style: string;
  frameShape: string;
  material: string;
  price: string;
  image: {
    src: string;
    alt: string;
  };
  badge?: string;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-charcoal/10 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-charcoal px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{product.category}</p>
        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-charcoal">{product.name}</h3>
          <p className="shrink-0 text-sm font-bold text-charcoal">{product.price}</p>
        </div>

        <dl className="mt-5 grid gap-3 text-sm text-ink/[0.68]">
          <div className="flex justify-between gap-4 border-t border-charcoal/[0.08] pt-3">
            <dt>Style</dt>
            <dd className="font-medium text-charcoal">{product.style}</dd>
          </div>
          <div className="flex justify-between gap-4 border-t border-charcoal/[0.08] pt-3">
            <dt>Shape</dt>
            <dd className="font-medium text-charcoal">{product.frameShape}</dd>
          </div>
          <div className="flex justify-between gap-4 border-t border-charcoal/[0.08] pt-3">
            <dt>Material</dt>
            <dd className="text-right font-medium text-charcoal">{product.material}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
