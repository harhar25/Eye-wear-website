import type { Metadata } from "next";
import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy placeholder for Harold Jey Eyewear."
};

export default function PrivacyPage() {
  return (
    <main className="bg-pearl">
      <section className="container-shell min-h-[70vh] pb-20 pt-32">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">Policy placeholder</p>
          <h1 className="mt-4 font-display text-5xl leading-none text-charcoal sm:text-6xl">Privacy Policy</h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-ink/[0.72]">
            <p>
              This page is a placeholder for {contactDetails.business}. Replace it with the official privacy policy
              before launch.
            </p>
            <p>
              The website is designed to direct visitors to a Jotform inquiry. Any personal information submitted
              through that form should be handled according to the finalized business privacy policy and Jotform
              configuration.
            </p>
            <p>
              Do not place n8n webhook secrets, private automation credentials, or sensitive operational data in
              frontend code.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
