import { Search } from "lucide-react";
import { contactDetails, footerCategories, navItems } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <a href="#home" className="inline-flex items-center gap-3 rounded-full">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <Search aria-hidden="true" className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-bold uppercase tracking-[0.22em]">Harold Jey</span>
              <span className="block text-xs text-white/[0.62]">Eyewear</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/[0.65]">
            Stylish eyeglasses, blue-light glasses, reading glasses, sunglasses, and modern frames selected around
            personality, lifestyle, and budget.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.55]">Navigation</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/[0.72]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.55]">Categories</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/[0.72]">
            {footerCategories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.55]">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/[0.72]">
            <li>{contactDetails.phone}</li>
            <li>{contactDetails.email}</li>
            <li>{contactDetails.facebook}</li>
            <li>{contactDetails.instagram}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-4 py-6 text-sm text-white/[0.55] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} {contactDetails.business}. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="transition hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
