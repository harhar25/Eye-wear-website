"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FormStepProps = {
  children: ReactNode;
  description?: string;
  direction: number;
  error?: string;
  title: string;
};

export function FormStep({ children, description, direction, error, title }: FormStepProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: direction > 0 ? 24 : -24 }}
      animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, x: direction > 0 ? -24 : 24 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="text-2xl font-semibold leading-tight text-charcoal sm:text-3xl">{title}</h3>
      {description ? <p className="mt-3 text-sm leading-6 text-ink/60 sm:text-base">{description}</p> : null}
      <div className="mt-7">{children}</div>
      {error ? (
        <p className="mt-4 text-sm font-medium text-wine" role="alert">
          {error}
        </p>
      ) : null}
    </motion.div>
  );
}

