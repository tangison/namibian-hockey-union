"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "./mobile-nav";

export function SiteNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary">
      {items.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors ${
              active
                ? "text-ink bg-surface-alt"
                : "text-ink-muted hover:text-ink hover:bg-surface-alt/60"
            }`}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
            {active && (
              <span
                className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[3px] w-6 rounded-full bg-accent"
                aria-hidden="true"
              />
            )}
          </Link>
        );
      })}
      <Link
        href="/brand"
        className="ml-2 inline-flex items-center px-3 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-ink bg-accent hover:bg-accent/90 rounded-full transition-colors"
      >
        Brand
      </Link>
    </nav>
  );
}
