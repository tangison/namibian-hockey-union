import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";

const footerNav = [
  {
    title: "Hockey",
    links: [
      { href: "/fixtures", label: "Fixtures" },
      { href: "/results", label: "Results" },
      { href: "/clubs", label: "Clubs" },
      { href: "/national-teams", label: "National teams" },
      { href: "/news", label: "News" },
    ],
  },
  {
    title: "Federation",
    links: [
      { href: "/about", label: "About NHU" },
      { href: "/governance", label: "Governance" },
      { href: "/membership", label: "Membership" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/cookies", label: "Cookies" },
      { href: "/sitemap", label: "Sitemap" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24">
      {/* Tri-colour top accent (Namibian flag accent: red / gold / green) */}
      <div
        aria-hidden="true"
        className="grid grid-cols-3 h-1"
      >
        <div className="bg-live" />
        <div className="bg-accent" />
        <div className="bg-success" />
      </div>

      <div className="bg-surface-alt text-ink">
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <Image
                src="/brand/nhu-logo-transparent.png"
                alt="Namibian Hockey Union crest"
                width={120}
                height={120}
                className="h-24 w-24 md:h-28 md:w-28 object-contain mb-4 drop-shadow-[0_2px_8px_rgba(10,26,47,0.15)]"
              />
              <p className="font-display text-lg font-semibold tracking-tight">
                Namibian Hockey Union
              </p>
              <p className="mt-4 text-sm text-ink-muted leading-relaxed">
                The official home of hockey in Namibia. Fixtures, results, clubs, national teams, and the rules of the game.
              </p>
              <div
                aria-hidden="true"
                className="mt-6 flex h-1.5 w-24 overflow-hidden rounded-full"
              >
                <div className="flex-1 bg-live" />
                <div className="flex-1 bg-accent" />
                <div className="flex-1 bg-success" />
              </div>
            </div>
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">
                  {group.title}
                </h2>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-ink-muted">
              &copy; {year} Namibian Hockey Union. All rights reserved.
            </p>
            <p className="text-xs text-ink-muted">
              <Link
                href="https://studio.tangison.com"
                className="text-ink hover:text-accent transition-colors underline-offset-4 hover:underline font-medium"
                rel="noopener noreferrer"
              >
                Made by Tangison Studio
              </Link>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
