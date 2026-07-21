import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { ComingSoon } from "@/components/coming-soon";
import { orgFacts } from "@/data/site";
import { CalendarBlank, MapPin, Clock, Info, Funnel } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Fixtures",
  description:
    "Fixtures for the Namibian Hockey Union — upcoming outdoor and indoor matches, venues, kick-off times, and competitions.",
  alternates: { canonical: "/fixtures" },
  robots: { index: false, follow: true },
};

export default function FixturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-alt">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-live/15 blur-3xl"
        />
        <Container className="relative py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur-sm mb-6">
              <CalendarBlank size={14} weight="regular" className="text-ink" aria-hidden="true" />
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                Fixtures & schedule
              </p>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.04] text-ink">
              Upcoming{" "}
              <span className="relative inline-block">
                fixtures
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/60 -z-10"
                />
              </span>
              .
            </h1>
            <p className="mt-7 text-lg md:text-xl text-ink-muted leading-relaxed">
              The full NHU fixture list — outdoor league, indoor league, national squad
              tests, and Continental Cup qualifiers — will appear here when the site
              moves into production.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter bar (static demo) */}
      <section className="border-y border-border bg-surface">
        <Container className="py-4">
          <div className="flex items-center gap-3 flex-wrap">
            <Funnel size={16} weight="regular" className="text-ink-muted" aria-hidden="true" />
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">Filter:</p>
            {["All", "Men", "Women", "Indoor", "Outdoor", "Junior"].map((f, i) => (
              <span
                key={f}
                className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${
                  i === 0
                    ? "bg-ink text-surface"
                    : "bg-surface-alt border border-border text-ink-muted"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Verified events */}
      <section>
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Verified events
              </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            What's confirmed.
          </h2>
          <p className="mt-4 text-ink-muted leading-relaxed max-w-[60ch]">
            A small number of upcoming and recently played events have been verified
            against the FIH, AfHF, NNOC, and the NHU's own social channels. The full
            fixture list unlocks here when the site moves into production.
          </p>

          <ul className="mt-10 divide-y divide-border border-y border-border">
            {orgFacts.verifiedEvents.map((e) => (
              <li
                key={e.name}
                className="grid grid-cols-12 gap-4 py-6 items-baseline"
              >
                <div className="col-span-12 md:col-span-3">
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-muted flex items-center gap-2">
                    <CalendarBlank size={12} weight="regular" aria-hidden="true" />
                    {e.dates}
                  </p>
                  <p className="font-mono text-xs text-ink-muted mt-1">{e.year}</p>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <p className="font-display text-xl md:text-2xl font-semibold tracking-tight text-ink">
                    {e.name}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted flex items-center gap-2">
                    <MapPin size={12} weight="regular" aria-hidden="true" />
                    {e.venue}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right">
                  <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">{e.source}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Full fixture list — coming soon */}
      <section className="bg-surface-alt">
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Clock size={28} weight="regular" className="text-ink" aria-hidden="true" />
              <p className="mt-4 text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
                Full fixture list
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] text-ink">
                The full 2026 season schedule is on its way.
              </h2>
              <p className="mt-4 text-ink-muted leading-relaxed">
                The outdoor league fixtures, the indoor league fixtures, junior
                tournaments, and the national squad test schedule will all live here —
                filterable by team, competition, and venue.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ComingSoon
                title="Full fixture list — coming soon"
                description="The NHU office is preparing the 2026 outdoor and indoor season fixtures. Once verified, they will be published here with iCal export and per-team subscription."
              />

              {/* Static preview of fixture UI (visual only, not interactive) */}
              <div className="mt-6 space-y-2 opacity-50 pointer-events-none" aria-hidden="true">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-border bg-surface p-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-mono text-xs text-ink-muted">Sat 12 Sep · 14:00</p>
                      <p className="font-display text-base font-semibold text-ink">Badgers vs Coastal Pirates</p>
                    </div>
                    <p className="font-mono text-xs text-ink-muted">Windhoek HS Stadium</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 text-xs text-ink-muted flex items-center gap-2">
            <Info size={14} weight="regular" aria-hidden="true" />
            Verified via the FIH, AfHF, NNOC, and the NHU's own Instagram.
          </p>
        </Container>
      </section>
    </>
  );
}
