const defaultJotform = {
  id: "262635038031046",
  url: "https://form.jotform.com/Madjos/find-your-perfect-pair-of-eyeglass"
};

export const siteConfig = {
  name: "Harold Jey Eyewear",
  owner: "Harold Jey Madjos",
  description:
    "Discover stylish eyeglasses, blue-light glasses, reading glasses, sunglasses, and modern frames from Harold Jey Eyewear.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://harold-jey-eyewear.vercel.app",
  jotformId: process.env.NEXT_PUBLIC_JOTFORM_ID?.trim() || defaultJotform.id,
  jotformUrl: process.env.NEXT_PUBLIC_JOTFORM_URL?.trim() || defaultJotform.url
};
