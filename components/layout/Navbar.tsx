"use client";

import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.08, 0.2, 0.4] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navClass = isScrolled
    ? "border-charcoal/10 bg-pearl/[0.92] text-charcoal shadow-[0_10px_40px_rgba(11,13,16,0.08)] backdrop-blur-xl"
    : "border-white/10 bg-charcoal/[0.08] text-white backdrop-blur-sm";

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-300", navClass)}>
      <div className="container-shell flex min-h-[76px] items-center justify-between gap-5">
        <a
          href="#home"
          className="group flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4"
          aria-label="Harold Jey Eyewear home"
        >
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border transition",
              isScrolled ? "border-charcoal/[0.15] bg-white text-charcoal" : "border-white/25 bg-white/10 text-white"
            )}
          >
            <Search aria-hidden="true" className="h-4 w-4" />
          </span>
          <span className="leading-none">
            <span className="block text-sm font-bold uppercase tracking-[0.22em]">Harold Jey</span>
            <span className={cn("block text-xs", isScrolled ? "text-charcoal/60" : "text-white/70")}>
              Eyewear
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-medium transition",
                  isScrolled ? "hover:text-teal" : "hover:text-white",
                  active && (isScrolled ? "text-teal" : "text-white")
                )}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="active-nav"
                    className={cn(
                      "absolute inset-x-3 -bottom-1 h-0.5 rounded-full",
                      isScrolled ? "bg-teal" : "bg-white"
                    )}
                    transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 28 }}
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink
            href="#find-your-pair"
            variant={isScrolled ? "primary" : "light"}
            className="min-h-11 px-5"
          >
            Find Your Perfect Pair
          </ButtonLink>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden",
            isScrolled ? "border-charcoal/[0.15] bg-white text-charcoal" : "border-white/25 bg-white/10 text-white"
          )}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-x-0 top-[76px] z-40 border-b border-charcoal/10 bg-pearl text-charcoal shadow-card lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.24 }}
          >
            <nav className="container-shell flex flex-col gap-2 py-5" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-base font-semibold hover:bg-charcoal/5"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <ButtonLink href="#find-your-pair" className="mt-2 w-full" onClick={() => setIsOpen(false)}>
                Find Your Perfect Pair
              </ButtonLink>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
