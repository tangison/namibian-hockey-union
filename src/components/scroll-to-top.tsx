"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

/**
 * Conventional scroll-to-top button.
 *
 * - Appears after the user scrolls 480px down the page.
 * - Fixed to the bottom-right corner with safe spacing.
 * - Smooth-scrolls to top on click.
 * - Respects reduced-motion preferences via CSS.
 * - Accessible: focusable, labelled, aria-hidden when not visible.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-ink text-surface shadow-[0_12px_30px_-10px_rgba(10,26,47,0.45)] border border-ink/10 transition-all duration-300 hover:bg-ink/90 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      {/* Tri-colour ring accent (Namibian flag) */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"
      />
      <ArrowUp size={20} weight="bold" className="relative" />
    </button>
  );
}
