"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

type FormSuccessProps = {
  onReset: () => void;
};

export function FormSuccess({ onReset }: FormSuccessProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex min-h-[32rem] flex-col items-center justify-center px-6 py-12 text-center sm:px-10"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      role="status"
      aria-live="polite"
    >
      <motion.span
        className="flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white shadow-glow"
        initial={reduceMotion ? false : { scale: 0.75 }}
        animate={reduceMotion ? undefined : { scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <Check aria-hidden="true" className="h-7 w-7" />
      </motion.span>
      <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-teal">Consultation received</p>
      <h3 className="mt-3 font-display text-4xl leading-none text-charcoal sm:text-5xl">Thank you!</h3>
      <p className="mt-5 max-w-lg text-base leading-7 text-ink/65 sm:text-lg">
        Your eyewear consultation has been received. Our team will review your preferences and contact you shortly.
      </p>
      <Button variant="secondary" className="mt-8" onClick={onReset}>
        <RotateCcw aria-hidden="true" className="h-4 w-4" />
        Start again
      </Button>
    </motion.div>
  );
}

