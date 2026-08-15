import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { ComingSoon } from "@/components/coming-soon";
import { orgFacts } from "@/data/site";
import {
  Person,
  Hockey,
  Clipboard,
  GraduationCap,
  ArrowRight,
  Info,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Membership of the Namibian Hockey Union — player, coach, umpire, and official registration, fees, and benefits.",
  alternates: { canonical: "/membership" },
  robots: { index: true, follow: true }, // public since 2026-08-15
};

export default function MembershipPage() {
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
                <span
                  aria-hidden="true"
                  className="flex h-1.5 w-6 overflow-hidden rounded-full"
                >
                  <span className="flex-1 bg-live" />
                  <span className="flex-1 bg-accent" />
                  <span className="flex-1 bg-success" />
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                  Join the Union
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.04] text-ink">
                Players, coaches,{" "}
                <span className="relative inline-block">
                  umpires
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/60 -z-10"
                  />
                </span>
                .
              </h1>
              <p className="mt-7 text-lg md:text-xl text-ink-muted leading-relaxed max-w-[58ch]">
                Membership of the Namibian Hockey Union is the gateway to playing,
                coaching, umpiring, and officiating in sanctioned hockey competitions
                across Namibia. Register once, play everywhere.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#categories" variant="primary" size="md">
                  See categories
                  <ArrowRight size={16} weight="regular" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/clubs" variant="secondary" size="md">
                  Find a club first
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -top-4 -right-4 bottom-4 left-4 rounded-3xl bg-accent/40"
                />
                <Image
                  src="/imagery/img-17-0e53d4.jpg"
                  alt="Namibia under-21 hockey squad"
                  width={600}
                  height={700}
                  className="relative w-full h-[420px] md:h-[500px] object-cover rounded-3xl border-2 border-ink shadow-[0_24px_60px_-24px_rgba(10,26,47,0.4)]"
                />
                <span className="absolute -bottom-3 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface text-ink text-[10px] font-mono uppercase tracking-wider border border-border shadow-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" aria-hidden="true" />
                  Junior pathway
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section id="categories">
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Membership categories
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            Four ways to be part of the Union.
          </h2>
          <p className="mt-4 text-ink-muted leading-relaxed max-w-[60ch]">
            Every member is registered annually, covered by the NHU insurance framework,
            and eligible to compete in NHU-sanctioned indoor and outdoor competitions.
          </p>

          <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Person,
                title: "Player membership",
                body: "For all senior and junior players registered to an NHU-affiliated club. Required to play in the outdoor league, the indoor league, and to be selected for national squads.",
                tint: "live",
                bullet: ["Annual registration", "Insurance cover", "Squad eligibility"],
              },
              {
                icon: GraduationCap,
                title: "Coach registration",
                body: "For NHU-licensed coaches. The Union runs FIH-aligned coaching courses from Level 1 through to Level 3. Licensed coaches are required to manage NHU-affiliated clubs and national squads.",
                tint: "accent",
                bullet: ["Level 1–3 courses", "License renewal", "Safeguarding cert."],
              },
              {
                icon: Hockey,
                title: "Umpire registration",
                body: `For graded umpires. The NHU runs outdoor and indoor umpiring courses with international instructors — the next Outdoor Hockey Umpires Course is scheduled for ${orgFacts.umpiresCourse.dates} in ${orgFacts.umpiresCourse.venue}, with international umpire ${orgFacts.umpiresCourse.instructor}.`,
                tint: "success",
                bullet: ["Grading pathway", "International courses", "League allocations"],
              },
              {
                icon: Clipboard,
                title: "Official & volunteer",
                body: "For technical officials, timekeepers, scorekeepers, and team managers who run the sport behind the scenes. The NHU provides training and accreditation for every match-day role.",
                tint: "live",
                bullet: ["Technical official", "Match-day roles", "Event volunteers"],
              },
            ].map((c) => (
              <li key={c.title}>
                <div className="group h-full rounded-3xl border border-border bg-surface p-6 hover:border-ink hover:shadow-[0_12px_40px_-20px_rgba(10,26,47,0.25)] transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`grid place-items-center h-12 w-12 rounded-full ${
                        c.tint === "live"
                          ? "bg-live/10"
                          : c.tint === "accent"
                            ? "bg-accent/20"
                            : "bg-success/10"
                      }`}
                    >
                      <c.icon
                        size={22}
                        weight="regular"
                        className={
                          c.tint === "live"
                            ? "text-live"
                            : c.tint === "accent"
                              ? "text-ink"
                              : "text-success"
                        }
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl md:text-2xl font-semibold tracking-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{c.body}</p>
                  <ul className="mt-4 space-y-1.5">
                    {c.bullet.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-ink">
                        <CheckCircle size={14} weight="regular" className="text-success shrink-0" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Verified umpires course */}
      <section className="bg-surface-alt">
        <Container className="py-16 md:py-24">
          <div className="rounded-3xl bg-ink text-surface p-8 md:p-12 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <p className="text-xs font-mono uppercase tracking-wider text-accent mb-2">
                  Verified upcoming course
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
                  {orgFacts.umpiresCourse.title}
                </h2>
                <p className="mt-4 text-ink-muted-on-dark leading-relaxed">
                  {orgFacts.umpiresCourse.structure}{" "}
                  {orgFacts.umpiresCourse.eligibility}
                </p>

                <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <li>
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted-on-dark">Instructor</p>
                    <p className="mt-1 font-display text-sm font-semibold">{orgFacts.umpiresCourse.instructor}</p>
                  </li>
                  <li>
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted-on-dark">Venue</p>
                    <p className="mt-1 font-display text-sm font-semibold">{orgFacts.umpiresCourse.venue}</p>
                  </li>
                  <li>
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted-on-dark">Dates</p>
                    <p className="mt-1 font-display text-sm font-semibold">{orgFacts.umpiresCourse.dates}</p>
                  </li>
                  <li>
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted-on-dark">Cost</p>
                    <p className="mt-1 font-display text-sm font-semibold">{orgFacts.umpiresCourse.cost}</p>
                  </li>
                </ul>

                <p className="mt-6 text-xs text-ink-muted-on-dark">
                  Contact for applications: <span className="text-surface font-medium">{orgFacts.umpiresCourse.contact}</span>
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-surface/5 border border-surface/10 p-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-accent">Register interest</p>
                  <p className="mt-2 text-sm text-ink-muted-on-dark leading-relaxed">
                    Online registration for umpires, players, and coaches opens here when
                    the site moves into production.
                  </p>
                  <div className="mt-4">
                    <ComingSoon
                      title="Online registration — coming soon"
                      description="Until then, please email secretary@namibiahockey.org to register."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process / FAQ */}
      <section>
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            How registration works
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            A simple four-step pathway.
          </h2>

          <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", title: "Find a club", body: "Browse the NHU club directory and contact a club near you." },
              { n: "02", title: "Pick a category", body: "Player, coach, umpire, or official. Each has its own form." },
              { n: "03", title: "Register online", body: "Complete the online form, upload your ID, and pay the annual fee." },
              { n: "04", title: "Get your license", body: "Receive your NHU license number by email. You're ready to play." },
            ].map((s) => (
              <li key={s.n}>
                <div className="h-full rounded-3xl border border-border bg-surface p-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-muted font-bold">{s.n}</p>
                  <p className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">{s.title}</p>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-xs text-ink-muted flex items-center gap-2">
            <Info size={14} weight="regular" aria-hidden="true" />
            Online registration portal is being built. Verified via NHU Instagram for the umpires course details.
          </p>
        </Container>
      </section>
    </>
  );
}
