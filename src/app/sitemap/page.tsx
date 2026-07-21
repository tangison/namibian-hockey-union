import type { Metadata } from "next";
import { Container } from "@/components/container";
import { routes } from "@/data/site";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Human-readable sitemap of the Namibian Hockey Union website.",
  alternates: { canonical: "/sitemap" },
  robots: { index: false, follow: true },
};

export default function SitemapPage() {
  const groups = [
    { title: "Hockey", links: routes.filter(r => ["/fixtures", "/results", "/clubs", "/national-teams", "/news"].includes(r.href)) },
    { title: "Federation", links: routes.filter(r => ["/about", "/governance", "/membership", "/contact"].includes(r.href)) },
    { title: "Brand", links: [{ href: "/brand", label: "Brand identity", description: "Logo, colours, typography, usage" }] },
    { title: "Legal", links: [
      { href: "/privacy", label: "Privacy policy", description: "How we handle information" },
      { href: "/terms", label: "Terms of use", description: "Acceptable use and IP" },
      { href: "/cookies", label: "Cookie policy", description: "How we use cookies" },
    ] },
  ];
  return (
    <Container className="py-16 md:py-24">
      <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">Sitemap</p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
        Every page on the site
      </h1>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="font-display text-xl font-semibold tracking-tight mb-4">{g.title}</h2>
            <ul className="divide-y divide-border border-y border-border">
              {g.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="block py-3 hover:bg-surface-alt transition-colors">
                    <span className="font-medium">{l.label}</span>
                    <span className="block text-sm text-ink-muted">{l.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}
