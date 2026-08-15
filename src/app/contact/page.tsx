import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ComingSoon } from "@/components/coming-soon";
import { orgFacts } from "@/data/site";
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Globe,
  ArrowUpRight,
  Info,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Namibian Hockey Union. Verified postal address, phone, email, and social channels.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true }, // public since 2026-08-15
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-alt">
        <div
          aria-hidden="true"
          className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl"
        />
        <Container className="relative py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur-sm mb-6">
              <span
                aria-hidden="true"
                className="flex h-1.5 w-6 overflow-hidden rounded-full"
              >
                <span className="flex-1 bg-live" />
                <span className="flex-1 bg-accent" />
                <span className="flex-1 bg-success" />
              </span>
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                Get in touch
              </p>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.04] text-ink">
              Contact the{" "}
              <span className="relative inline-block">
                NHU
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/60 -z-10"
                />
              </span>
              .
            </h1>
            <p className="mt-7 text-lg md:text-xl text-ink-muted leading-relaxed">
              Reach the Union office in Windhoek by post, phone, or email. For
              registration and competition queries, please include your club or region in
              the subject line.
            </p>
          </div>
        </Container>
      </section>

      {/* Verified details */}
      <section>
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: details */}
            <div className="lg:col-span-7">
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
                Verified contact details
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] text-ink">
                Office of the Namibian Hockey Union
              </h2>
              <p className="mt-4 text-ink-muted leading-relaxed">
                Sourced directly from the FIH members register and cross-checked against
                the Namibian National Olympic Committee affiliate listing.
              </p>

              <ul className="mt-10 divide-y divide-border border-y border-border">
                <li className="grid grid-cols-12 gap-4 py-6">
                  <div className="col-span-12 md:col-span-3 flex items-start gap-2">
                    <MapPin size={18} weight="regular" className="text-ink-muted shrink-0" aria-hidden="true" />
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">Address</p>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <p className="text-ink leading-relaxed">
                      {orgFacts.contact.postalAddress}
                    </p>
                    <p className="text-sm text-ink-muted mt-1">
                      {orgFacts.headquarters}
                    </p>
                  </div>
                </li>

                <li className="grid grid-cols-12 gap-4 py-6">
                  <div className="col-span-12 md:col-span-3 flex items-start gap-2">
                    <Phone size={18} weight="regular" className="text-ink-muted shrink-0" aria-hidden="true" />
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">Phone</p>
                  </div>
                  <div className="col-span-12 md:col-span-9 space-y-1">
                    <p className="text-ink">
                      <span className="text-ink-muted text-sm">Office:</span>{" "}
                      <a
                        href={`tel:${orgFacts.contact.phone.replace(/\s/g, "")}`}
                        className="font-mono hover:text-accent transition-colors"
                      >
                        {orgFacts.contact.phone}
                      </a>
                    </p>
                    <p className="text-ink">
                      <span className="text-ink-muted text-sm">Mobile (President):</span>{" "}
                      <a
                        href={`tel:${orgFacts.contact.mobile.replace(/\s/g, "")}`}
                        className="font-mono hover:text-accent transition-colors"
                      >
                        {orgFacts.contact.mobile}
                      </a>
                    </p>
                  </div>
                </li>

                <li className="grid grid-cols-12 gap-4 py-6">
                  <div className="col-span-12 md:col-span-3 flex items-start gap-2">
                    <EnvelopeSimple size={18} weight="regular" className="text-ink-muted shrink-0" aria-hidden="true" />
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">Email</p>
                  </div>
                  <div className="col-span-12 md:col-span-9 space-y-1">
                    {orgFacts.contact.emails.map((e) => (
                      <p key={e.value} className="text-ink">
                        <span className="text-ink-muted text-sm">{e.label}:</span>{" "}
                        <a
                          href={`mailto:${e.value}`}
                          className="font-mono hover:text-accent transition-colors break-all"
                        >
                          {e.value}
                        </a>
                      </p>
                    ))}
                  </div>
                </li>

                <li className="grid grid-cols-12 gap-4 py-6">
                  <div className="col-span-12 md:col-span-3 flex items-start gap-2">
                    <Globe size={18} weight="regular" className="text-ink-muted shrink-0" aria-hidden="true" />
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">Website</p>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <a
                      href={orgFacts.contact.website}
                      className="text-ink font-mono hover:text-accent transition-colors break-all"
                      rel="noopener noreferrer"
                    >
                      {orgFacts.contact.website}
                    </a>
                  </div>
                </li>
              </ul>

              {/* Social channels */}
              <p className="mt-10 text-xs font-mono uppercase tracking-wider text-ink-muted mb-3">
                Social channels
              </p>
              <ul className="flex flex-wrap gap-2">
                {orgFacts.verifiedSocials.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-ink text-sm hover:border-ink hover:bg-surface-alt transition-colors"
                    >
                      <span className="font-medium">{s.label}</span>
                      <span className="text-ink-muted text-xs">{s.handle}</span>
                      <ArrowUpRight size={14} weight="regular" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs text-ink-muted flex items-center gap-2">
                <Info size={14} weight="regular" aria-hidden="true" />
                Verified via the FIH members register and NNOC affiliated-members page.
              </p>
            </div>

            {/* Right: form (coming soon) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-border bg-surface-alt/60 p-6 md:p-8">
                <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
                  Contact form
                </p>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  Send the NHU a message
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  The contact form is being built and will route messages directly to the
                  NHU secretary's inbox. In the meantime, please use the verified phone or
                  email above.
                </p>

                <div className="mt-6">
                  <ComingSoon
                    title="Form — coming soon"
                    description="A secure contact form will land here in production. Until then, email secretary@namibiahockey.org directly."
                  />
                </div>

                {/* Static preview of the planned form (visually shown, not functional) */}
                <div className="mt-6 space-y-3 opacity-50 pointer-events-none" aria-hidden="true">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">Your name</p>
                    <div className="mt-1 h-11 rounded-full border border-border bg-surface" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">Your email</p>
                    <div className="mt-1 h-11 rounded-full border border-border bg-surface" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">Subject</p>
                    <div className="mt-1 h-11 rounded-full border border-border bg-surface" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">Message</p>
                    <div className="mt-1 h-28 rounded-2xl border border-border bg-surface" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
