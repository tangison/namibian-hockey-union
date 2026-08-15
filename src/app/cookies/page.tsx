import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "Cookie policy of the Namibian Hockey Union website.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true }, // public since 2026-08-15
};

export default function CookiesPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="max-w-[65ch]">
        <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">Legal</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
          Cookie policy
        </h1>
        <p className="mt-4 text-sm text-ink-muted">Last updated: 21 July 2026</p>

        <div className="mt-12 space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">1. Cookies in demo mode</h2>
            <p>This demo version of the site runs no analytics and no advertising. It sets only essential technical cookies required to display pages and remember your preferences. No consent banner is required because no non-essential cookies are set.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">2. Cookies in full mode</h2>
            <p>When the site moves to full mode, a consent banner will appear before any non-essential cookies are set. The banner will list each category, its purpose, and the third party involved. You will be able to accept, reject, or manage each category separately.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">3. Managing cookies</h2>
            <p>You can also manage cookies through your browser settings. Browsing without cookies will not prevent you from reading fixtures, results, or news on this site.</p>
          </section>
        </div>
      </div>
    </Container>
  );
}
