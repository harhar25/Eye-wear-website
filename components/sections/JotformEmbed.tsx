"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, ExternalLink, LoaderCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

type EmbedStatus = "loading" | "ready" | "error" | "complete";

const jotformOrigin = "https://form.jotform.com";

function createEmbedUrl(formId: string, publicUrl: string) {
  const source = formId ? `${jotformOrigin}/${formId}` : publicUrl;

  try {
    const url = new URL(source);
    url.searchParams.set("isIframeEmbed", "1");
    return url.toString();
  } catch {
    return publicUrl;
  }
}

function isTrustedJotformOrigin(origin: string) {
  try {
    const hostname = new URL(origin).hostname;
    return hostname === "jotform.com" || hostname.endsWith(".jotform.com");
  } catch {
    return false;
  }
}

export function JotformEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hasSharedPageUrls = useRef(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [status, setStatus] = useState<EmbedStatus>("loading");
  const [iframeHeight, setIframeHeight] = useState(920);
  const iframeId = `JotFormIFrame-${siteConfig.jotformId}`;
  const embedUrl = useMemo(
    () => createEmbedUrl(siteConfig.jotformId, siteConfig.jotformUrl),
    []
  );

  useEffect(() => {
    const container = containerRef.current;

    if (!container || shouldLoad) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad || status !== "loading") {
      return;
    }

    const timeout = window.setTimeout(() => setStatus("error"), 20000);
    return () => window.clearTimeout(timeout);
  }, [shouldLoad, status]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const iframe = iframeRef.current;

      if (
        !iframe ||
        event.source !== iframe.contentWindow ||
        typeof event.data !== "string" ||
        !isTrustedJotformOrigin(event.origin)
      ) {
        return;
      }

      const [action, value] = event.data.split(":");

      switch (action) {
        // Jotform's thank-you view can retain the full form height.
        case "submission-completed":
          setStatus("complete");
          break;
        case "setHeight": {
          const nextHeight = Number.parseInt(value, 10);

          if (Number.isFinite(nextHeight) && nextHeight >= 480 && nextHeight <= 12000) {
            setIframeHeight(nextHeight);
            setStatus((current) => current === "complete" ? current : "ready");
          }
          break;
        }
        case "scrollIntoView":
          iframe.scrollIntoView({ block: "start" });
          break;
        case "collapseErrorPage":
          setIframeHeight(Math.min(iframe.clientHeight, window.innerHeight));
          break;
        case "reloadPage":
          window.location.reload();
          break;
      }

      if (!hasSharedPageUrls.current) {
        hasSharedPageUrls.current = true;
        iframe.contentWindow?.postMessage(
          JSON.stringify({
            type: "urls",
            value: {
              docurl: encodeURIComponent(document.URL),
              referrer: encodeURIComponent(document.referrer)
            }
          }),
          event.origin
        );
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (status === "complete") {
    return (
      <div
        className="min-w-0 rounded-lg border border-charcoal/10 bg-white px-6 py-10 shadow-card sm:px-10"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 aria-hidden="true" className="h-10 w-10 text-teal" />
        <h3 className="mt-5 font-display text-3xl text-charcoal">Thank you!</h3>
        <p className="mt-3 max-w-md text-base leading-7 text-ink/70">
          Your inquiry was submitted. We&apos;ll review your preferences and contact you using the details you provided.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-w-0 overflow-hidden rounded-lg border border-charcoal/10 bg-white shadow-card"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-charcoal/[0.08] px-5 py-4 sm:px-6">
        <p className="text-sm font-semibold text-charcoal">Eyewear recommendation form</p>
        <a
          href={siteConfig.jotformUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-teal transition hover:text-charcoal"
        >
          Open form
          <ExternalLink aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>

      <div className="relative min-h-[720px] bg-porcelain/40 sm:min-h-[820px]">
        {status !== "ready" ? (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center p-6 text-center sm:p-10"
            role={status === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            {status === "loading" ? (
              <div className="max-w-sm">
                <LoaderCircle aria-hidden="true" className="mx-auto h-8 w-8 animate-spin text-teal" />
                <p className="mt-5 text-base font-semibold text-charcoal">
                  Loading your eyewear consultation form...
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/60">This should only take a moment.</p>
              </div>
            ) : (
              <div className="max-w-md">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-wine/10 text-wine">
                  <AlertCircle aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="mt-5 text-lg font-semibold text-charcoal">We couldn&apos;t load the form here.</p>
                <p className="mt-2 text-sm leading-6 text-ink/65">
                  You can still complete it securely using the button below.
                </p>
                <ButtonLink
                  href={siteConfig.jotformUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6"
                >
                  Open Eyewear Form
                </ButtonLink>
              </div>
            )}
          </div>
        ) : null}

        {shouldLoad ? (
          <iframe
            ref={iframeRef}
            id={iframeId}
            title="Harold Jey Eyewear personalized recommendation form"
            src={embedUrl}
            allow="geolocation; microphone; camera; fullscreen"
            scrolling="no"
            onError={() => setStatus("error")}
            className={cn(
              "block min-w-full max-w-full border-0 bg-white transition-opacity duration-300",
              status === "ready" ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
            )}
            style={{ height: `${iframeHeight}px` }}
          />
        ) : null}
      </div>

      <p className="border-t border-charcoal/[0.08] px-5 py-4 text-sm leading-6 text-ink/60 sm:px-6">
        Having trouble viewing the form?{" "}
        <a
          href={siteConfig.jotformUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-sm font-semibold text-teal underline decoration-teal/30 underline-offset-4 transition hover:text-charcoal"
        >
          Open the form directly.
        </a>
      </p>
    </div>
  );
}
