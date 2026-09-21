export type ImageAsset = {
  src: string;
  alt: string;
};

export const eyewearImages = {
  hero: {
    src: "/images/hero-eyeglasses.jpg",
    alt: "Premium eyeglasses resting on a light studio surface"
  },
  sunglassesYellow: {
    src: "/images/sunglasses-yellow.jpg",
    alt: "Tortoiseshell sunglasses styled on a warm yellow studio set"
  },
  clipOns: {
    src: "/images/clip-ons.jpg",
    alt: "Eyeglasses with magnetic clip-on sunglass lenses"
  },
  case: {
    src: "/images/eyeglasses-case.jpg",
    alt: "Eyeglasses in a minimal protective case"
  },
  silver: {
    src: "/images/silver-frames.jpg",
    alt: "Silver framed eyeglasses on a bright studio surface"
  },
  whiteSurface: {
    src: "/images/neutral-frames.jpg",
    alt: "Eyeglasses arranged on a calm neutral surface"
  },
  blackFrame: {
    src: "/images/black-frames.jpg",
    alt: "Black rectangular eyeglasses on a white surface"
  },
  laptop: {
    src: "/images/desk-glasses.jpg",
    alt: "Eyeglasses beside a laptop for digital work"
  }
} satisfies Record<string, ImageAsset>;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Eyeglasses", href: "#eyeglasses" },
  { label: "Styles", href: "#styles" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export const categories = [
  {
    title: "Prescription Eyeglasses",
    description: "Polished frames selected for everyday clarity, comfort, and personal style.",
    image: eyewearImages.hero,
    accent: "teal"
  },
  {
    title: "Blue Light Glasses",
    description: "Modern desk-ready options for screen-heavy routines and clean daily wear.",
    image: eyewearImages.laptop,
    accent: "blue"
  },
  {
    title: "Sunglasses",
    description: "Fashion-led sun styles that bring structure, shade, and personality.",
    image: eyewearImages.sunglassesYellow,
    accent: "copper"
  },
  {
    title: "Reading Glasses",
    description: "Easygoing frames with refined details for reading, work, and close-up tasks.",
    image: eyewearImages.silver,
    accent: "wine"
  },
  {
    title: "Everyday Frames",
    description: "Reliable silhouettes designed to move with your wardrobe and schedule.",
    image: eyewearImages.whiteSurface,
    accent: "teal"
  },
  {
    title: "Premium Frames",
    description: "Elevated materials, richer finishes, and statement-making proportions.",
    image: eyewearImages.case,
    accent: "blue"
  }
];

export const styleGallery = [
  {
    title: "Minimalist",
    description: "Clean lines, refined colors, and subtle confidence.",
    image: eyewearImages.silver,
    span: "md:col-span-5 md:row-span-2"
  },
  {
    title: "Classic",
    description: "Timeless shapes that feel sharp without trying too hard.",
    image: eyewearImages.blackFrame,
    span: "md:col-span-3"
  },
  {
    title: "Modern",
    description: "Contemporary frames with crisp edges and fresh materials.",
    image: eyewearImages.clipOns,
    span: "md:col-span-4"
  },
  {
    title: "Luxury",
    description: "Richer finishes for a more dressed-up eyewear moment.",
    image: eyewearImages.case,
    span: "md:col-span-4"
  },
  {
    title: "Sporty",
    description: "Flexible, active, and easy to wear through busy days.",
    image: eyewearImages.sunglassesYellow,
    span: "md:col-span-3"
  },
  {
    title: "Vintage",
    description: "Rounder proportions and nostalgic details with a current feel.",
    image: eyewearImages.whiteSurface,
    span: "md:col-span-5"
  },
  {
    title: "Bold / Fashion",
    description: "Distinctive shapes for expressive personal styling.",
    image: eyewearImages.hero,
    span: "md:col-span-4"
  }
];

export const frameShapes = [
  { title: "Rectangle", className: "shape-rectangle", description: "Sharp, clean, and versatile." },
  { title: "Round", className: "shape-round", description: "Soft, artistic, and easygoing." },
  { title: "Square", className: "shape-square", description: "Structured with a strong outline." },
  { title: "Aviator", className: "shape-aviator", description: "Relaxed, iconic, and confident." },
  { title: "Cat Eye", className: "shape-cat-eye", description: "Lifted, expressive, and polished." },
  { title: "Oval", className: "shape-oval", description: "Balanced with a softer profile." },
  { title: "Browline", className: "shape-browline", description: "Retro-inspired with definition." }
];

export const products = [
  {
    name: "Aster Minimal Frame",
    category: "Prescription Eyeglasses",
    style: "Minimalist",
    frameShape: "Rectangle",
    material: "Lightweight metal",
    price: "PHP 1,499",
    image: eyewearImages.silver,
    badge: "New"
  },
  {
    name: "Noir Daily Classic",
    category: "Everyday Frames",
    style: "Classic",
    frameShape: "Rectangle",
    material: "Acetate-style frame",
    price: "PHP 1,299",
    image: eyewearImages.blackFrame,
    badge: "Popular"
  },
  {
    name: "Sol Tortoise Shade",
    category: "Sunglasses",
    style: "Bold / Fashion",
    frameShape: "Cat Eye",
    material: "Gloss finish frame",
    price: "PHP 1,699",
    image: eyewearImages.sunglassesYellow,
    badge: "Popular"
  },
  {
    name: "Clear Desk Focus",
    category: "Blue Light Glasses",
    style: "Modern",
    frameShape: "Round",
    material: "Transparent frame",
    price: "PHP 1,399",
    image: eyewearImages.laptop
  },
  {
    name: "Marlow Reader",
    category: "Reading Glasses",
    style: "Vintage",
    frameShape: "Oval",
    material: "Slim metal",
    price: "PHP 999",
    image: eyewearImages.whiteSurface
  },
  {
    name: "Harbor Clip Set",
    category: "Premium Frames",
    style: "Modern",
    frameShape: "Browline",
    material: "Mixed material",
    price: "PHP 2,199",
    image: eyewearImages.clipOns,
    badge: "New"
  }
];

export const valueCards = [
  {
    title: "Stylish Selection",
    description: "A curated range of frames for everyday, work, statement, and sun-ready styling."
  },
  {
    title: "Comfort-Focused Frames",
    description: "Options are organized around fit, feel, and real daily wear, not just looks."
  },
  {
    title: "Personal Recommendations",
    description: "Tell us your style and budget so we can recommend eyewear that makes sense for you."
  },
  {
    title: "Budget-Friendly Options",
    description: "Placeholder product data is structured to support clear pricing once inventory is finalized."
  },
  {
    title: "Quality Materials",
    description: "Frame material details are easy to update as real stock and supplier information are added."
  },
  {
    title: "Helpful Customer Support",
    description: "The inquiry flow is built to make follow-up simple, organized, and personal."
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Tell Us Your Style",
    description: "Share your preferred look, frame shape, use case, and budget through the online form."
  },
  {
    step: "02",
    title: "We Recommend Your Best Options",
    description: "Harold Jey Eyewear reviews your preferences and narrows the choices to suitable styles."
  },
  {
    step: "03",
    title: "Choose Your Perfect Pair",
    description: "Compare the recommended options and move forward with the pair that feels most like you."
  }
];

export const faqs = [
  {
    question: "How do I choose the right frame?",
    answer:
      "Start with your face shape, daily routine, preferred style, and budget. The eyewear form collects those details so recommendations can be more focused."
  },
  {
    question: "Can you help me decide which style suits me?",
    answer:
      "Yes. Submit your preferences through the form and Harold Jey Eyewear can suggest styles that match your taste and intended use."
  },
  {
    question: "Do you offer prescription eyeglasses?",
    answer:
      "Prescription eyeglasses are part of the eyewear categories shown on this site. Final prescription handling details should be confirmed through the inquiry form."
  },
  {
    question: "Do you sell blue-light glasses?",
    answer:
      "Yes, blue-light eyewear is included as a category. Use the form to share your screen-use needs and preferred frame style."
  },
  {
    question: "How will you contact me after I submit the form?",
    answer:
      "Harold Jey Eyewear will use the contact details you provide in the form. Add your preferred contact method when submitting your inquiry."
  },
  {
    question: "Can I ask for recommendations based on my budget?",
    answer:
      "Yes. The form is designed to collect budget preferences so recommendations can stay realistic and useful."
  },
  {
    question: "How long does it take to receive a response?",
    answer:
      "Response timing has not been finalized yet. Once the business confirms its operating process, this answer can be updated with the official timeframe."
  }
];

// PLACEHOLDER_CONTACT: Replace these values with the business's official details before launch.
export const contactDetails = {
  business: "Harold Jey Eyewear",
  owner: "Harold Jey Madjos",
  phone: "Phone to be added",
  email: "Email to be added",
  facebook: "Facebook link to be added",
  instagram: "Instagram link to be added",
  address: "Physical address to be added"
};

export const footerCategories = [
  "Prescription Eyeglasses",
  "Blue Light Glasses",
  "Sunglasses",
  "Reading Glasses",
  "Everyday Frames",
  "Premium Frames"
];
