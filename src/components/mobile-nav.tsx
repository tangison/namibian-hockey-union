"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import { Container } from "./container";
import Image from "next/image";

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

  const closeMenu = () => setOpen(false);
  const openMenu = () => setOpen(true);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={openMenu}
        className="inline-flex items-center justify-center h-10 w-10 -mr-2 text-ink hover:text-accent transition-colors rounded-full"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        <List size={24} weight="regular" />
      </button>
      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-50 bg-surface text-ink flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Tri-colour accent strip */}
          <div
            aria-hidden="true"
            className="grid grid-cols-3 h-[3px]"
          >
            <div className="bg-live" />
            <div className="bg-accent" />
            <div className="bg-success" />
          </div>
          <Container className="flex h-20 items-center justify-between">
            <Image
              src="/brand/nhu-logo-transparent.png"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex items-center justify-center h-10 w-10 -mr-2 text-ink hover:text-accent transition-colors rounded-full"
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
                  className={`block py-4 text-2xl font-display font-semibold tracking-tight border-b border-border transition-colors ${
                    active ? "text-accent" : "text-ink hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/brand"
              onClick={closeMenu}
              className="mt-6 inline-flex self-start items-center px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold text-ink bg-accent rounded-full"
            >
              Brand
            </Link>
          </Container>
        </div>
      )}
    </div>
  );
}
