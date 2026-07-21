"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "@phosphor-icons/react";
import { orgFacts } from "@/data/site";

export type NavItem = { href: string; label: string };

/**
 * Premium offcanvas navigation.
 *
 * Design goals:
 * - Slide-in panel from the right (max-w 420px on desktop, full-bleed on mobile).
 * - Backdrop with blur + dark tint, click-to-close.
 * - Staggered link entrance animations.
 * - Large, generous typography (font-display, tracking-tight).
 * - Active state with subtle accent bar.
 * - Premium close button (top-right of panel).
 * - Panel footer with verified socials (from site data).
 * - Body scroll lock while open.
 * - Esc-to-close + focus management.
 *
 * The toggle is a custom 2-line hamburger (no Phosphor icon) — see trigger button.
 */
export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Lock body scroll + wire Esc-to-close while the panel is open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      // Focus the close button for keyboard users.
      requestAnimationFrame(() => closeBtnRef.current?.focus());
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const closeMenu = () => setOpen(false);
  const openMenu = () => setOpen(true);

  return (
    <div className="md:hidden">
      {/* Premium 2-line hamburger trigger */}
      <button
        type="button"
        onClick={openMenu}
        className="group inline-flex h-12 w-12 items-center justify-center -mr-2 rounded-full text-ink hover:bg-surface-alt transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
      >
        <span
          aria-hidden="true"
          className="relative block h-4 w-6"
        >
          {/* Two lines only — premium minimalist hamburger */}
          <span className="absolute left-0 right-0 top-[3px] h-[2px] rounded-full bg-current transition-colors duration-300 group-hover:bg-accent" />
          <span className="absolute left-0 right-0 bottom-[3px] h-[2px] rounded-full bg-current transition-colors duration-300 group-hover:bg-accent" />
        </span>
      </button>

      {/* Offcanvas overlay + panel */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <div
          ref={panelRef}
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute right-0 top-0 h-full w-full max-w-[420px] bg-surface text-ink shadow-[0_0_60px_-12px_rgba(10,26,47,0.35)] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Tri-colour accent strip (Namibian flag) */}
          <div
            aria-hidden="true"
            className="grid grid-cols-3 h-[4px] shrink-0"
          >
            <div className="bg-live" />
            <div className="bg-accent" />
            <div className="bg-success" />
          </div>

          {/* Panel header — logo + close */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-border/70 shrink-0">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Namibian Hockey Union home"
            >
              <Image
                src="/brand/nhu-logo-transparent.png"
                alt=""
                width={64}
                height={64}
                className="h-12 w-12 object-contain"
                priority
              />
              <span className="font-display font-semibold tracking-tight text-ink text-lg leading-none">
                NHU
                <span className="block font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted mt-1">
                  Namibian Hockey
                </span>
              </span>
            </Link>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={closeMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-surface-alt transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Close menu"
            >
              <X size={22} weight="regular" />
            </button>
          </div>

          {/* Nav list — staggered entrance */}
          <nav
            className="flex-1 overflow-y-auto px-6 py-6"
            aria-label="Mobile primary"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted mb-4">
              Menu
            </p>
            <ul className="flex flex-col">
              {items.map((item, i) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li
                    key={item.href}
                    style={{
                      transitionDelay: open ? `${120 + i * 55}ms` : "0ms",
                    }}
                    className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      open
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-3"
                    }`}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`group flex items-center justify-between py-3.5 border-b border-border/60 ${
                        active ? "text-accent" : "text-ink hover:text-accent"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="font-display text-[28px] leading-tight font-semibold tracking-tight">
                        {item.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`h-[3px] rounded-full bg-accent transition-all duration-300 ${
                          active
                            ? "w-8"
                            : "w-0 group-hover:w-6"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Secondary CTA — Brand */}
            <div
              style={{
                transitionDelay: open ? `${120 + items.length * 55 + 80}ms` : "0ms",
              }}
              className={`mt-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
              }`}
            >
              <Link
                href="/brand"
                onClick={closeMenu}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-[0.18em] font-semibold text-ink bg-accent hover:bg-accent/90 rounded-full transition-colors"
              >
                Brand centre
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </nav>

          {/* Panel footer — verified socials */}
          <div
            style={{
              transitionDelay: open ? `${120 + items.length * 55 + 200}ms` : "0ms",
            }}
            className={`px-6 py-5 border-t border-border/70 bg-surface-alt/60 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted mb-3">
              Follow
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {orgFacts.verifiedSocials.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink hover:text-accent transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              © {new Date().getFullYear()} {orgFacts.shortName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
