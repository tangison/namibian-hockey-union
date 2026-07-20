import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms of use of the Namibian Hockey Union website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="max-w-[65ch]">
        <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">Legal</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
          Terms of use
        </h1>
        <p className="mt-4 text-sm text-ink-muted">Last updated: 21 July 2026</p>

        <div className="mt-12 space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">1. Acceptable use</h2>
            <p>You may use this site for personal, non-commercial purposes related to hockey in Namibia. You may not misuse the site, attempt to disrupt its operation, or scrape content for commercial purposes without written permission from the NHU.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">2. Intellectual property</h2>
            <p>The NHU name, crest, and brand assets are the property of the Namibian Hockey Union. The site design and source code are the work of Tangison Studio. Match data, scores, and fixture information are factual and used here for informational purposes.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">3. Accuracy</h2>
            <p>The NHU aims to publish accurate fixtures, results, and squad information. Verified information is labelled with its source. If you find an error, contact the NHU via the existing federation contact at namibiahockey.org.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">4. Links to other sites</h2>
            <p>This site links to FIH, the Namibian National Olympic Committee, and existing federation social accounts. The NHU is not responsible for the content or privacy practices of those sites.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">5. Changes</h2>
            <p>These terms may be updated as the site moves from demo to full mode. The last updated date above will reflect the most recent change.</p>
          </section>
        </div>
      </div>
    </Container>
  );
}
