"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import { Container } from "./container";

export type NavItem = { href: string; label: string };

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when the menu is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Menu is closed by onClick handlers on each Link, not by effect.
  // This avoids setState-in-effect cascading renders.
  const closeMenu = () => setOpen(false);
  const openMenu = () => setOpen(true);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={openMenu}
        className="inline-flex items-center justify-center h-10 w-10 -mr-2 text-surface hover:text-accent transition-colors"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        <List size={24} weight="regular" />
      </button>
      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-50 bg-ink text-surface flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <Container className="flex h-16 items-center justify-between">
            <span className="font-display font-semibold text-sm">Menu</span>
            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex items-center justify-center h-10 w-10 -mr-2 text-surface hover:text-accent transition-colors"
              aria-label="Close menu"
            >
              <X size={24} weight="regular" />
            </button>
          </Container>
          <Container className="flex flex-col gap-1 py-8 overflow-y-auto">
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block py-4 text-2xl font-display font-semibold tracking-tight border-b border-ink-muted-on-dark/30 transition-colors ${
                    active ? "text-accent" : "text-surface hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/brand"
              onClick={closeMenu}
              className="block py-4 text-base text-ink-muted-on-dark hover:text-accent transition-colors mt-4"
            >
              Brand
            </Link>
          </Container>
        </div>
      )}
    </div>
  );
}
