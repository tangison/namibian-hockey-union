import Link from "next/link";
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
    <footer className="bg-ink text-surface mt-24">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <p className="font-display text-lg font-semibold tracking-tight">
              Namibian Hockey Union
            </p>
            <p className="mt-2 text-sm text-ink-muted-on-dark leading-relaxed">
              The official home of hockey in Namibia. Fixtures, results, clubs, national teams, and the rules of the game.
            </p>
          </div>
          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-xs font-mono uppercase tracking-wider text-ink-muted-on-dark mb-4">
                {group.title}
              </h2>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-surface hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-ink-muted-on-dark/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-ink-muted-on-dark">
            &copy; {year} Namibian Hockey Union. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted-on-dark">
            <Link
              href="https://studio.tangison.com"
              className="text-surface hover:text-accent transition-colors underline-offset-4 hover:underline"
              rel="noopener noreferrer"
            >
              Made by Tangison Studio
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
