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
    "Discover stylish eyeglasses and personalized eyewear recommendations from Harold Jey Eyewear. Start a custom eyewear consultation to find your perfect pair.",
  keywords: [
    "custom eyewear consultation",
    "personalized eyewear recommendations",
    "eyeglasses style consultation"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Harold Jey Eyewear | Stylish Eyeglasses & Frames",
    description:
      "Explore stylish frames and start a custom eyewear consultation for personalized recommendations from Harold Jey Eyewear.",
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
      "Take an eyeglasses style consultation and let Harold Jey Eyewear help you find your perfect pair.",
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
