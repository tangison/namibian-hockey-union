import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { ComingSoon } from "@/components/coming-soon";
import { orgFacts } from "@/data/site";
import { Trophy, Medal, Info, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Verified results and honours for the Namibian Hockey Union — 2024 Indoor Africa Cup gold, 2025 World Games bronze, and the full national-team results archive.",
  alternates: { canonical: "/results" },
  robots: { index: true, follow: true }, // public since 2026-08-15
};

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-alt">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl"
        />
        <Container className="relative py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur-sm mb-6">
                <Trophy size={14} weight="regular" className="text-ink" aria-hidden="true" />
                <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                  Verified results
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.04] text-ink">
                On the{" "}
                <span className="relative inline-block">
                  international stage
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/60 -z-10"
                  />
                </span>
                .
              </h1>
              <p className="mt-7 text-lg md:text-xl text-ink-muted leading-relaxed max-w-[58ch]">
                A breakthrough two years for Namibian hockey — gold at the 2024 Indoor
                Africa Cup, an historic bronze at the 2025 World Games. Every result
                below traces to a primary source.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -top-4 -right-4 bottom-4 left-4 rounded-3xl bg-success/15"
                />
                <Image
                  src="/imagery/namibia-women-win.jpg"
                  alt="Namibia women's hockey team celebrating a victory"
                  width={600}
                  height={700}
                  className="relative w-full h-[420px] md:h-[500px] object-cover rounded-3xl border-2 border-ink shadow-[0_24px_60px_-24px_rgba(10,26,47,0.4)]"
                />
                <span className="absolute -bottom-3 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface text-ink text-[10px] font-mono uppercase tracking-wider border border-border shadow-md">
                  <Medal size={11} weight="fill" className="text-accent" aria-hidden="true" />
                  Verified results
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Verified results table */}
      <section>
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Verified honours
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            Two medals. One Union.
          </h2>

          <ul className="mt-10 divide-y divide-border border-y border-border">
            {orgFacts.verifiedResults.map((r, i) => (
              <li
                key={i}
                className="grid grid-cols-12 gap-4 py-6 items-baseline"
              >
                <div className="col-span-12 md:col-span-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                    {r.event}
                  </p>
                  <p className="font-display text-xl md:text-2xl font-semibold tracking-tight text-ink mt-1">
                    vs {r.opponent}
                  </p>
                  <p className="text-xs text-ink-muted mt-1">{r.venue} · {r.date}</p>
                </div>
                <div className="col-span-6 md:col-span-3 tabular font-mono text-2xl text-ink">
                  {r.score}
                </div>
                <div className="col-span-6 md:col-span-4 text-right md:text-left">
                  <p className="text-sm text-ink font-semibold">{r.result}</p>
                  <p className="text-xs text-ink-muted mt-1">{r.note}</p>
                  <a
                    href={r.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-ink-muted hover:text-accent transition-colors"
                  >
                    Source
                    <ArrowUpRight size={11} weight="regular" aria-hidden="true" />
                  </a>
                </div>
              </li>
            ))}
          </ul>

          {/* Individual honours */}
          <div className="mt-12">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              Individual honours
            </p>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Players recognised.
            </h3>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {orgFacts.individualHonours.map((h) => (
                <li
                  key={h.award}
                  className="rounded-2xl border border-border bg-surface p-5"
                >
                  <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted">
                    {h.event}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">
                    {h.recipient}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{h.award}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-xs text-ink-muted flex items-center gap-2">
            <Info size={14} weight="regular" aria-hidden="true" />
            Verified via Wikipedia, the FIH, AfHF, and Namibian sport media. See PROOF.md for source manifest.
          </p>
        </Container>
      </section>

      {/* Full archive — coming soon */}
      <section className="bg-surface-alt">
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <ComingSoon
              title="Full results archive — coming soon"
              description="Every senior and junior national team result, every Indoor Africa Cup, every outdoor test series — filterable by team, competition, and season. unlocks when the site moves into production."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
