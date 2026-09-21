import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  showIcon?: boolean;
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  showIcon = true,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4",
        variant === "primary" &&
          "bg-charcoal text-white shadow-glow hover:-translate-y-0.5 hover:bg-ink",
        variant === "secondary" &&
          "border border-charcoal/[0.15] bg-white/70 text-charcoal backdrop-blur hover:-translate-y-0.5 hover:border-teal hover:text-teal",
        variant === "ghost" &&
          "text-charcoal hover:-translate-y-0.5 hover:bg-charcoal/5",
        variant === "light" &&
          "bg-pearl text-charcoal shadow-card hover:-translate-y-0.5 hover:bg-white",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {showIcon ? (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      ) : null}
    </a>
  );
}
