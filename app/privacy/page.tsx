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
              The website collects consultation details so Harold Jey Eyewear can provide personalized frame
              recommendations and follow up using the contact information submitted by the visitor.
            </p>
            <p>
              Consultation data is relayed through a protected server endpoint. Finalize the business&apos;s retention,
              access, and deletion practices before replacing this placeholder policy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
