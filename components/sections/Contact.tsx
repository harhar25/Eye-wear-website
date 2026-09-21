import { Facebook, Instagram, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { contactDetails } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const contactRows = [
  { label: "Owner", value: contactDetails.owner, icon: UserRound },
  { label: "Phone", value: contactDetails.phone, icon: Phone },
  { label: "Email", value: contactDetails.email, icon: Mail },
  { label: "Facebook", value: contactDetails.facebook, icon: Facebook },
  { label: "Instagram", value: contactDetails.instagram, icon: Instagram },
  { label: "Physical Address", value: contactDetails.address, icon: MapPin }
];

export function Contact() {
  return (
    <section id="contact" className="section-y bg-pearl">
      <div className="container-shell">
        <div className="rounded-lg border border-charcoal/10 bg-charcoal p-6 text-white shadow-card sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Contact"
                title={contactDetails.business}
                description="For the best eyewear recommendation, send an inquiry through the form and include your preferred style, use case, frame shape, and budget."
                theme="dark"
              />
              <ButtonLink href="#find-your-pair" variant="light" className="mt-8">
                Send an Inquiry
              </ButtonLink>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-2">
                {contactRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.label} className="rounded-md border border-white/10 bg-white/[0.08] p-5">
                      <div className="flex items-center gap-3 text-white/[0.58]">
                        <Icon aria-hidden="true" className="h-4 w-4" />
                        <p className="text-xs font-bold uppercase tracking-[0.18em]">{row.label}</p>
                      </div>
                      <p className="mt-3 break-words text-base font-semibold text-white">{row.value}</p>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
