"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "./mobile-nav";

export function SiteNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
      {items.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative px-3 py-2 text-sm font-medium transition-colors ${
              active ? "text-accent" : "text-surface hover:text-accent"
            }`}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
            {active && (
              <span
                className="absolute left-3 right-3 -bottom-1 h-0.5 bg-accent"
                aria-hidden="true"
              />
            )}
          </Link>
        );
      })}
      <Link
        href="/brand"
        className="ml-2 px-3 py-2 text-sm font-medium text-ink-muted-on-dark hover:text-accent transition-colors"
      >
        Brand
      </Link>
    </nav>
  );
}
