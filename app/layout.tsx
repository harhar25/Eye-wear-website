import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { eyewearImages } from "@/data/site";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Harold Jey Eyewear | Stylish Eyeglasses & Frames",
    template: "%s | Harold Jey Eyewear"
  },
  description:
    "Discover stylish eyeglasses, blue-light glasses, reading glasses, sunglasses, and modern frames from Harold Jey Eyewear. Tell us your style and let us help you find your perfect pair.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Harold Jey Eyewear | Stylish Eyeglasses & Frames",
    description:
      "Discover stylish eyeglasses, blue-light glasses, reading glasses, sunglasses, and modern frames from Harold Jey Eyewear.",
    url: "/",
    siteName: "Harold Jey Eyewear",
    type: "website",
    images: [
      {
        url: eyewearImages.hero.src,
        width: 1200,
        height: 630,
        alt: eyewearImages.hero.alt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Harold Jey Eyewear | Stylish Eyeglasses & Frames",
    description:
      "Tell us your style and let Harold Jey Eyewear help you find your perfect pair.",
    images: [eyewearImages.hero.src]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d10"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
