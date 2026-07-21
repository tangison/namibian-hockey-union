"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { SiteNav } from "./site-nav";
import { MobileNav } from "./mobile-nav";
import { ScrollToTop } from "./scroll-to-top";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/fixtures", label: "Fixtures" },
  { href: "/clubs", label: "Clubs" },
  { href: "/national-teams", label: "National teams" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/**
 * Premium floating, sticky header.
 *
 * Design goals:
 * - Truly sticky: pins flush to the top of the viewport on scroll.
 * - Glass background (white / 85 + backdrop blur) with stronger shadow on scroll.
 * - Fully-rounded pill shape with subtle border.
 * - Tri-colour stripe (Namibian flag accent: red / gold / green) under the bar.
 * - The NHU transparent logo is rendered PROMINENTLY: larger, with a soft white
 *   halo so it reads cleanly on any background, plus a stacked wordmark.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="sticky top-0 z-40">
        <Container className="pt-3 md:pt-4">
          <header
            className={`rounded-2xl border border-border/80 bg-surface/85 backdrop-blur-md transition-shadow duration-300 ${
              scrolled
                ? "shadow-[0_10px_40px_-12px_rgba(10,26,47,0.22)]"
                : "shadow-[0_2px_12px_-8px_rgba(10,26,47,0.10)]"
            }`}
          >
            {/* Tri-colour accent line: red / gold / green (Namibian flag accent) */}
            <div
              aria-hidden="true"
              className="grid grid-cols-3 overflow-hidden rounded-t-2xl h-[3px]"
            >
              <div className="bg-live" />
              <div className="bg-accent" />
              <div className="bg-success" />
            </div>

            <div className="flex h-20 md:h-24 items-center justify-between gap-4 px-4 md:px-6">
              <Link
                href="/"
                className="group flex items-center gap-3 md:gap-4 shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Namibian Hockey Union home"
              >
                {/* Logo — PROMINENT: large transparent PNG with soft halo + wordmark */}
                <span className="relative inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center">
                  {/* Soft white halo so the transparent crest reads on any background */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-white/60 blur-[6px] opacity-70"
                  />
                  <Image
                    src="/brand/nhu-logo-transparent.png"
                    alt="Namibian Hockey Union crest"
                    width={96}
                    height={96}
                    className="relative h-16 w-16 md:h-20 md:w-20 object-contain drop-shadow-[0_2px_10px_rgba(10,26,47,0.18)] transition-transform duration-300 group-hover:scale-[1.04]"
                    priority
                  />
                </span>
                {/* Stacked wordmark — gives the crest real presence */}
                <span className="hidden sm:flex flex-col leading-none">
                  <span className="font-display font-semibold tracking-tight text-ink text-xl md:text-2xl">
                    Namibian Hockey
                  </span>
                  <span className="mt-1 font-mono text-[10px] md:text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted">
                    Union · Est. NHU
                  </span>
                </span>
              </Link>

              <SiteNav items={navItems} />
              <MobileNav items={navItems} />
            </div>
          </header>
        </Container>
      </div>
      <ScrollToTop />
    </>
  );
}
