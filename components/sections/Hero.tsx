"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { eyewearImages } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative isolate min-h-[88svh] overflow-hidden bg-charcoal text-white">
      <Image
        src={eyewearImages.hero.src}
        alt={eyewearImages.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.62]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,13,16,0.94)_0%,rgba(11,13,16,0.74)_38%,rgba(11,13,16,0.36)_100%)]" />
      <div className="absolute inset-0 bg-radial-teal" />

      <motion.div
        aria-hidden="true"
        className="absolute right-[4%] top-[18%] hidden w-[28rem] max-w-[36vw] rounded-[2rem] border border-white/[0.12] bg-white/[0.08] p-3 shadow-glow backdrop-blur-md lg:block"
        animate={reduceMotion ? undefined : { y: [0, -16, 0], rotate: [0, -1.2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
          <Image
            src={eyewearImages.sunglassesYellow.src}
            alt=""
            fill
            sizes="34vw"
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-[8%] right-[24%] hidden rounded-full border border-white/[0.14] bg-white/10 px-5 py-3 text-sm text-white/[0.76] backdrop-blur lg:flex"
        animate={reduceMotion ? undefined : { x: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        Style, comfort, budget, fit.
      </motion.div>

      <div className="container-shell relative z-10 flex min-h-[88svh] items-center pb-20 pt-32">
        <div className="max-w-3xl">
          <motion.div
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/10 px-4 py-2 text-sm text-white/[0.76] backdrop-blur"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles aria-hidden="true" className="h-4 w-4 text-teal-100" />
            Premium eyewear recommendations
          </motion.div>

          <motion.h1
            className="max-w-full font-display text-[3.05rem] leading-[0.92] text-white sm:text-7xl lg:text-8xl"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          >
            Eyewear That{" "}
            <span className="block sm:inline">Looks Like</span>{" "}
            <span className="block sm:inline">You.</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.76] sm:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          >
            Discover stylish, comfortable eyeglasses selected around your personality, lifestyle, and budget.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
          >
            <ButtonLink href="#find-your-pair" variant="light">
              Find Your Perfect Pair
            </ButtonLink>
            <ButtonLink href="#styles" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/[0.18] hover:text-white">
              Explore Styles
            </ButtonLink>
          </motion.div>
        </div>
      </div>

      <a
        href="#eyeglasses"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/[0.14] bg-white/10 px-4 py-2 text-sm text-white/70 backdrop-blur transition hover:text-white sm:flex"
      >
        Scroll
        <ArrowDown aria-hidden="true" className="h-4 w-4" />
      </a>
    </section>
  );
}
