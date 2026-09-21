import { ExternalLink, Settings } from "lucide-react";
import { siteConfig } from "@/lib/config";

function resolveJotformSource(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  if (/^\d+$/.test(trimmed)) {
    return `https://form.jotform.com/${trimmed}`;
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://form.jotform.com/${trimmed}`;
}

export function JotformEmbed() {
  const jotformSource = resolveJotformSource(siteConfig.jotformUrl);

  if (!jotformSource) {
    return (
      <div className="min-w-0 rounded-lg border border-dashed border-teal/[0.45] bg-white p-6 shadow-card sm:p-8">
        <div className="flex min-w-0 max-w-2xl flex-col gap-5 sm:flex-row">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
            <Settings aria-hidden="true" className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h3 className="text-2xl font-semibold text-charcoal">Jotform embed placeholder</h3>
            <p className="mt-3 min-w-0 break-words text-sm leading-7 text-ink/[0.68]">
              Add your Jotform URL or form ID to <code className="break-all rounded bg-charcoal/5 px-1.5 py-1">NEXT_PUBLIC_JOTFORM_URL</code>.
              The production site will then render the responsive embedded form here.
            </p>
            <p className="mt-4 min-w-0 break-words text-sm font-semibold text-teal">
              Example: <code className="break-all rounded bg-teal/10 px-1.5 py-1">NEXT_PUBLIC_JOTFORM_URL=https://form.jotform.com/your-form-id</code>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-charcoal/10 bg-white shadow-card">
      <div className="flex items-center justify-between gap-4 border-b border-charcoal/[0.08] px-5 py-4">
        <p className="text-sm font-semibold text-charcoal">Eyewear recommendation form</p>
        <a
          href={jotformSource}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-charcoal"
        >
          Open form
          <ExternalLink aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
      <iframe
        title="Harold Jey Eyewear recommendation form"
        src={jotformSource}
        className="block min-h-[760px] w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
