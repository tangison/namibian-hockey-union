import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { ComingSoon } from "@/components/coming-soon";
import { orgFacts, nationalTeams } from "@/data/site";
import { Trophy, Users, Medal, Info, ArrowRight, Star } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "National teams",
  description:
    "The six national squads of the Namibian Hockey Union — men and women, indoor and outdoor, senior and junior. Verified squad lists, captains, and head coaches.",
  alternates: { canonical: "/national-teams" },
  robots: { index: false, follow: true },
};

export default function NationalTeamsPage() {
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
                  National squads
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.04] text-ink">
                Six squads,{" "}
                <span className="relative inline-block">
                  one union
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/60 -z-10"
                  />
                </span>
                .
              </h1>
              <p className="mt-7 text-lg md:text-xl text-ink-muted leading-relaxed max-w-[58ch]">
                Men and women. Indoor and outdoor. Senior and junior. Six national squads
                carry Namibian hockey onto the continental and world stage.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -top-4 -right-4 bottom-4 left-4 rounded-3xl bg-success/15"
                />
                <Image
                  src="/imagery/img-01-899b19.jpg"
                  alt="Namibia men's national hockey team"
                  width={600}
                  height={700}
                  className="relative w-full h-[420px] md:h-[500px] object-cover rounded-3xl border-2 border-ink shadow-[0_24px_60px_-24px_rgba(10,26,47,0.4)]"
                />
                <span className="absolute -bottom-3 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface text-ink text-[10px] font-mono uppercase tracking-wider border border-border shadow-md">
                  <Medal size={11} weight="fill" className="text-accent" aria-hidden="true" />
                  Indoor Africa Cup 2024 — Gold
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Squads grid */}
      <section>
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            The six squads
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            Pick a team.
          </h2>

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nationalTeams.map((team, i) => {
              const isGold = team.status.includes("Gold");
              const isSilver = team.status.includes("Silver");
              return (
                <li key={team.slug}>
                  <Link
                    href={`/national-teams/${team.slug}`}
                    className="group block h-full rounded-3xl border border-border bg-surface p-6 hover:border-ink hover:shadow-[0_12px_40px_-20px_rgba(10,26,47,0.25)] transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted">
                          {team.slug.includes("indoor") ? "Indoor" : "Outdoor"} ·{" "}
                          {team.slug.includes("junior") ? "Junior" : "Senior"}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                          {team.name}
                        </h3>
                        <p
                          className={`mt-1 text-xs font-mono uppercase tracking-wider ${
                            isGold
                              ? "text-success"
                              : isSilver
                                ? "text-ink-muted"
                                : "text-ink-muted"
                          }`}
                        >
                          {team.status}
                        </p>
                      </div>
                      <span
                        className={`grid place-items-center h-9 w-9 rounded-full ${
                          isGold
                            ? "bg-accent"
                            : isSilver
                              ? "bg-surface-alt"
                              : "bg-surface-alt group-hover:bg-accent"
                        } transition-colors`}
                      >
                        {isGold ? (
                          <Trophy size={16} weight="fill" className="text-ink" aria-hidden="true" />
                        ) : (
                          <Users size={16} weight="regular" className="text-ink" aria-hidden="true" />
                        )}
                      </span>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted">
                        View squad
                      </span>
                      <ArrowRight
                        size={14}
                        weight="regular"
                        className="text-ink group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="mt-6 text-xs text-ink-muted flex items-center gap-2">
            <Info size={14} weight="regular" aria-hidden="true" />
            Squad lists to be confirmed for the 2026 season. Verified lists unlock in production.
          </p>
        </Container>
      </section>

      {/* Verified men's indoor squad (gold medallists) */}
      <section className="bg-surface-alt">
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-ink mb-4">
                <Star size={12} weight="fill" aria-hidden="true" />
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] font-bold">
                  Gold medallists · 2024 Indoor Africa Cup
                </p>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] text-ink">
                Namibia men's indoor squad.
              </h2>
              <p className="mt-4 text-ink-muted leading-relaxed">
                The 12-player squad that won Namibia's first-ever Indoor Africa Cup gold
                in Swakopmund on 26 May 2024, beating South Africa in a shootout.
              </p>

              <ul className="mt-6 space-y-2">
                <li className="flex items-baseline gap-2">
                  <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted w-28 shrink-0">
                    Head coach
                  </p>
                  <p className="text-ink font-medium">{orgFacts.mensIndoorSquad.headCoach}</p>
                </li>
                <li className="flex items-baseline gap-2">
                  <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted w-28 shrink-0">
                    Captains
                  </p>
                  <p className="text-ink font-medium">{orgFacts.mensIndoorSquad.captain}</p>
                </li>
              </ul>

              <p className="mt-6 text-xs text-ink-muted flex items-center gap-2">
                <Info size={14} weight="regular" aria-hidden="true" />
                Source: Wikipedia — Namibia men's national indoor hockey team.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border bg-surface p-6 md:p-8">
                <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">
                  Squad · 12 players
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {orgFacts.mensIndoorSquad.players.map((p, i) => (
                    <li key={p} className="flex items-baseline gap-3 py-1.5 border-b border-border/60">
                      <span className="font-mono text-xs text-ink-muted tabular w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-ink text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Captains / honours */}
      <section>
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Captains & individual honours
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            The leaders.
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-border bg-surface p-6">
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">Captains</p>
              <ul className="space-y-3">
                {orgFacts.nationalCaptains.map((c) => (
                  <li key={c.team} className="flex items-baseline justify-between gap-4 py-2 border-b border-border/60">
                    <div>
                      <p className="text-ink font-medium">{c.team}</p>
                      <p className="text-xs text-ink-muted mt-0.5">{c.captain}</p>
                    </div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-ink-muted">{c.source}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-6">
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">Individual honours</p>
              <ul className="space-y-3">
                {orgFacts.individualHonours.map((h) => (
                  <li key={h.award} className="py-2 border-b border-border/60">
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted">{h.event}</p>
                    <p className="text-ink font-display text-lg font-semibold tracking-tight mt-1">{h.recipient}</p>
                    <p className="text-sm text-ink-muted mt-0.5">{h.award}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Full squads — coming soon */}
      <section className="bg-surface-alt">
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <ComingSoon
              title="Full verified squads — coming soon"
              description="The remaining five national squads (men's outdoor, women's outdoor, women's indoor, men's junior, women's junior) are being verified player-by-player. They will appear here when the site moves into production."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
