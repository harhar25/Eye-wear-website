"use client";

import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type SelectionCardProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  title: string;
  description?: string;
  icon?: ReactNode;
};

export const SelectionCard = forwardRef<HTMLInputElement, SelectionCardProps>(function SelectionCard(
  { checked, className, description, icon, title, ...props },
  ref
) {
  const reduceMotion = useReducedMotion();

  return (
    <label className="group relative block min-w-0 cursor-pointer focus-within:outline focus-within:outline-[3px] focus-within:outline-offset-4 focus-within:outline-teal">
      <input ref={ref} type="radio" checked={checked} className="peer sr-only" {...props} />
      <motion.span
        className={cn(
          "flex min-h-24 items-center gap-4 rounded-lg border bg-white p-4 text-left transition duration-300",
          checked
            ? "border-teal bg-teal/[0.06] shadow-[0_12px_32px_rgba(14,124,134,0.12)]"
            : "border-charcoal/10 hover:border-charcoal/25 hover:bg-porcelain/45",
          className
        )}
        animate={reduceMotion ? undefined : { y: checked ? -2 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {icon ? (
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition",
              checked ? "bg-teal text-white" : "bg-porcelain text-charcoal group-hover:bg-mist"
            )}
          >
            {icon}
          </span>
        ) : null}
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold leading-5 text-charcoal">{title}</span>
          {description ? <span className="mt-1 block text-xs leading-5 text-ink/55">{description}</span> : null}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition",
            checked ? "border-teal bg-teal text-white" : "border-charcoal/20 text-transparent"
          )}
        >
          <Check className="h-3.5 w-3.5" />
        </span>
      </motion.span>
    </label>
  );
});

