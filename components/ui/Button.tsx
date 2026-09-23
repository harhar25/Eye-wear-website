import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, type = "button", variant = "primary", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" && "bg-charcoal text-white shadow-card hover:bg-teal",
        variant === "secondary" &&
          "border border-charcoal/15 bg-white text-charcoal hover:border-teal hover:text-teal",
        variant === "ghost" && "text-charcoal hover:bg-charcoal/5",
        className
      )}
      {...props}
    />
  );
});

