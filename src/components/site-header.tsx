"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { SiteNav } from "./site-nav";
import { MobileNav } from "./mobile-nav";
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
 * Floating, light, colourful header.
 *
 * - Sits inside the page (not full-bleed) with breathing room above and beside.
 * - Glass background (white / 80 + backdrop blur).
 * - Subtle border, soft shadow, fully-rounded (rounded-2xl) pill shape.
 * - Tiny tri-colour stripe (Namibian flag accent: red / gold / green) under the bar.
 * - Gains a stronger shadow once the user scrolls past 8px.
 * - The NHU transparent logo is used AS-IS, no ink badge, made prominent.
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
    <Container className="pt-4 md:pt-6">
      <header
        className={`sticky top-3 md:top-4 z-40 rounded-2xl border border-border/80 bg-surface/85 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-[0_8px_30px_-12px_rgba(10,26,47,0.18)]" : "shadow-[0_2px_12px_-8px_rgba(10,26,47,0.12)]"
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
            className="flex items-center gap-3 shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Namibian Hockey Union home"
          >
            {/* Logo used AS-IS — transparent PNG, no background badge, large */}
            <Image
              src="/brand/nhu-logo-transparent.png"
              alt="Namibian Hockey Union crest"
              width={96}
              height={96}
              className="h-16 w-16 md:h-20 md:w-20 object-contain drop-shadow-[0_2px_8px_rgba(10,26,47,0.15)]"
              priority
            />
          </Link>

          <SiteNav items={navItems} />
          <MobileNav items={navItems} />
        </div>
      </header>
    </Container>
  );
}
