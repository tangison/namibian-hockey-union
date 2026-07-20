import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { SiteNav } from "./site-nav";
import { MobileNav } from "./mobile-nav";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/fixtures", label: "Fixtures" },
  { href: "/clubs", label: "Clubs" },
  { href: "/national-teams", label: "National teams" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="bg-ink text-surface sticky top-0 z-40">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Namibian Hockey Union home">
          <Image
            src="/brand/nhu-logo-white.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-display font-semibold text-sm tracking-tight leading-tight">
            Namibian Hockey
            <br />
            <span className="text-ink-muted-on-dark text-xs font-normal">Union</span>
          </span>
        </Link>
        <SiteNav items={navItems} />
        <MobileNav items={navItems} />
      </Container>
    </header>
  );
}
