import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CustomerExperience } from "@/components/sections/CustomerExperience";
import { EyewearCategories } from "@/components/sections/EyewearCategories";
import { FAQ } from "@/components/sections/FAQ";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { FrameShapes } from "@/components/sections/FrameShapes";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { JotformSection } from "@/components/sections/JotformSection";
import { StyleGallery } from "@/components/sections/StyleGallery";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { categories, contactDetails, products } from "@/data/site";
import { siteConfig } from "@/lib/config";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: siteConfig.name,
  founder: {
    "@type": "Person",
    name: contactDetails.owner
  },
  description: siteConfig.description,
  url: siteConfig.url,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Eyewear categories",
    itemListElement: categories.map((category) => ({
      "@type": "OfferCatalog",
      name: category.title,
      description: category.description
    }))
  },
  makesOffer: products.map((product) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: product.name,
      category: product.category,
      material: product.material,
      image: new URL(product.image.src, siteConfig.url).toString()
    },
    priceCurrency: "PHP",
    price: product.price.replace(/[^\d.]/g, "")
  }))
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <EyewearCategories />
      <StyleGallery />
      <FrameShapes />
      <FeaturedProducts />
      <WhyChooseUs />
      <HowItWorks />
      <JotformSection />
      <About />
      <CustomerExperience />
      <FAQ />
      <Contact />
    </main>
  );
}
