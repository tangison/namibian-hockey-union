import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy of the Namibian Hockey Union website.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="max-w-[65ch]">
        <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">
          Legal
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
          Privacy policy
        </h1>
        <p className="mt-4 text-sm text-ink-muted">
          Last updated: 21 July 2026
        </p>

        <div className="mt-12 space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">
              1. Who we are
            </h2>
            <p>
              This website is published by the Namibian Hockey Union (NHU), the national governing body for hockey in Namibia. The NHU is recognised by the International Hockey Federation (FIH) and the Namibian National Olympic Committee. Official contact details will be published on this page once verified.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">
              2. What we collect
            </h2>
            <p>
              This demo version of the site does not use analytics, advertising, or third-party tracking. The site sets only essential technical cookies required to display pages and remember your language and accessibility preferences.
            </p>
            <p className="mt-3">
              When the contact and membership forms are activated in full mode, they will collect the information you submit, such as your name, email address, and message. We will state the purpose and legal basis for each form at the point of collection.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">
              3. How we use information
            </h2>
            <p>
              We use submitted information to respond to enquiries, process membership applications, and operate the federation. We do not sell personal information. We do not share personal information with third parties for marketing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">
              4. Your rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your personal information held by the NHU. Requests will be actioned within a reasonable period once verified contact details are published.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">
              5. Changes to this policy
            </h2>
            <p>
              This policy will be updated when the site moves from demo to full mode and whenever new data processing is introduced. The last updated date above will reflect the most recent change.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">
              6. Contact
            </h2>
            <p>
              For privacy questions, contact the NHU via the existing federation contact at{" "}
              <a
                href="https://namibiahockey.org"
                className="text-ink underline-offset-4 hover:underline"
                rel="noopener noreferrer"
              >
                namibiahockey.org
              </a>{" "}
              until the verified contact details are published here.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}
