import type { Metadata } from "next";
import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms placeholder for Harold Jey Eyewear."
};

export default function TermsPage() {
  return (
    <main className="bg-pearl">
      <section className="container-shell min-h-[70vh] pb-20 pt-32">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">Terms placeholder</p>
          <h1 className="mt-4 font-display text-5xl leading-none text-charcoal sm:text-6xl">Terms</h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-ink/[0.72]">
            <p>
              This page is a placeholder for {contactDetails.business}. Replace it with official terms before launch.
            </p>
            <p>
              Product prices, availability, policies, and service details shown during development are placeholders
              unless confirmed by the business owner.
            </p>
            <p>
              Add finalized purchase, prescription, warranty, return, and response-time terms only after those policies
              are available.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
