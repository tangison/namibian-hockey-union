import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { ComingSoon } from "@/components/coming-soon";
import { orgFacts } from "@/data/site";
import {
  ShieldCheck,
  Trophy,
  Users,
  MapPin,
  CalendarBlank,
  ArrowRight,
  Info,
  Building,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the Namibian Hockey Union — the national governing body for field and indoor hockey in Namibia. History, mission, structure, affiliations.",
  alternates: { canonical: "/about" },
  robots: { index: true, follow: true }, // public since 2026-08-15
};

export default function AboutPage() {
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
                  National governing body
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.04] text-ink">
                About the{" "}
                <span className="relative inline-block">
                  Namibian Hockey Union
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/60 -z-10"
                  />
                </span>
                .
              </h1>
              <p className="mt-7 text-lg md:text-xl text-ink-muted leading-relaxed max-w-[58ch]">
                {orgFacts.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/governance" variant="primary" size="md">
                  See governance
                  <ArrowRight size={16} weight="regular" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" size="md">
                  Contact NHU
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
                  src="/imagery/img-01-899b19.jpg"
                  alt="Namibia men's national hockey team"
                  width={600}
                  height={700}
                  className="relative w-full h-[420px] md:h-[500px] object-cover rounded-3xl border-2 border-ink shadow-[0_24px_60px_-24px_rgba(10,26,47,0.4)]"
                />
                <span className="absolute -bottom-3 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface text-ink text-[10px] font-mono uppercase tracking-wider border border-border shadow-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-live animate-pulse" aria-hidden="true" />
                  Real Namibian hockey photo
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick facts strip */}
      <section className="border-y border-border bg-surface">
        <Container className="py-10">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <li>
              <Building size={20} weight="regular" className="text-ink" aria-hidden="true" />
              <p className="mt-3 text-xs font-mono uppercase tracking-wider text-ink-muted">Headquarters</p>
              <p className="font-display text-lg font-semibold tracking-tight text-ink mt-1">
                {orgFacts.headquarters}
              </p>
            </li>
            <li>
              <ShieldCheck size={20} weight="regular" className="text-ink" aria-hidden="true" />
              <p className="mt-3 text-xs font-mono uppercase tracking-wider text-ink-muted">Affiliations</p>
              <p className="font-display text-lg font-semibold tracking-tight text-ink mt-1">
                FIH · AfHF · NNOC
              </p>
            </li>
            <li>
              <Trophy size={20} weight="regular" className="text-ink" aria-hidden="true" />
              <p className="mt-3 text-xs font-mono uppercase tracking-wider text-ink-muted">Top honour</p>
              <p className="font-display text-lg font-semibold tracking-tight text-ink mt-1">
                Indoor Africa Cup 2024 — Gold
              </p>
            </li>
            <li>
              <Users size={20} weight="regular" className="text-ink" aria-hidden="true" />
              <p className="mt-3 text-xs font-mono uppercase tracking-wider text-ink-muted">Squads</p>
              <p className="font-display text-lg font-semibold tracking-tight text-ink mt-1">
                6 national teams
              </p>
            </li>
          </ul>
        </Container>
      </section>

      {/* Mission */}
      <section>
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
                Mission
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
                Grow the game, coast to coast.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-ink-muted leading-relaxed text-lg">
              <p>
                The Namibian Hockey Union exists to govern, develop, and promote both
                indoor and field hockey across all thirteen regions of Namibia. From the
                coastal Astroturf in Swakopmund to the high-school fields of Windhoek,
                the NHU is the steward of the sport at every level — school leagues,
                senior outdoor leagues, national squads, and international competition.
              </p>
              <p>
                The Union is recognised by the International Hockey Federation (FIH) and
                the African Hockey Federation (AfHF), and is an affiliated member of the
                Namibian National Olympic Committee (NNOC). It is through these
                affiliations that Namibian hockey teams earn the right to compete in
                Continental Cups, World Cups, and the World Games.
              </p>
              <p>
                Recent seasons have been transformative: a gold medal at the 2024 Indoor
                Africa Cup in Swakopmund, an historic bronze at the 2025 World Games in
                Chengdu, and an ever-widening pool of young talent coming through the
                junior pathway. The mission is to convert that momentum into a
                sustainable, professional, and genuinely national sport.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Sports we govern */}
      <section className="bg-surface-alt">
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Disciplines
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            Two disciplines, one union.
          </h2>
          <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Indoor hockey",
                body: "Six-a-side indoor hockey, played on a hard court with sideboards. Namibia's strongest discipline on the continent — gold medallists at the 2024 Indoor Africa Cup and a regular qualifier for the FIH Indoor World Cup.",
        image: "/imagery/img-05-5271fe.jpg",
              },
              {
                title: "Field hockey",
                body: "Eleven-a-side outdoor hockey played on water- or sand-based Astroturf. The NHU runs the outdoor league out of Windhoek High School Stadium (FIH Category 3 certified) and selects the men's and women's senior outdoor squads.",
        image: "/imagery/img-16-4e0734.jpg",
              },
            ].map((d) => (
              <li key={d.title}>
                <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface h-full">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={d.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">{d.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Recent achievements timeline */}
      <section>
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Recent achievements
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            A breakthrough two years.
          </h2>
          <p className="mt-4 text-ink-muted leading-relaxed max-w-[60ch]">
            Verified against primary sources (FIH, AfHF, Wikipedia, NNOC) via the Tavily
            search API. Full historical results and fixtures unlock in production mode.
          </p>

          <ol className="mt-10 space-y-4">
            {orgFacts.verifiedResults.map((r, i) => (
              <li
                key={i}
                className="grid grid-cols-12 gap-4 p-5 rounded-2xl border border-border bg-surface hover:shadow-[0_10px_30px_-15px_rgba(10,26,47,0.2)] transition-shadow"
              >
                <div className="col-span-12 md:col-span-2 flex md:flex-col gap-2 md:gap-0.5 items-baseline md:items-start">
                  <CalendarBlank size={18} weight="regular" className="text-ink-muted" aria-hidden="true" />
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                    {r.date}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <p className="font-display text-xl font-semibold tracking-tight text-ink">
                    {r.event}
                  </p>
                  <p className="text-sm text-ink-muted mt-1">{r.note}</p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right">
                  <p className="font-mono text-sm font-semibold text-ink">{r.score}</p>
                  <p className="text-xs text-ink-muted mt-1">{r.result}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-xs text-ink-muted flex items-center gap-2">
            <Info size={14} weight="regular" aria-hidden="true" />
            Verified via Tavily API queries. See PROOF.md for the source manifest.
          </p>
        </Container>
      </section>

      {/* TBC notice */}
      <section className="bg-surface-alt">
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <ComingSoon
              title="A fuller history is on the way"
              description="The NHU founding year, archival photographs, and a season-by-season results archive are being assembled and verified. They will appear here when the site moves into production."
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container className="py-16 md:py-24">
          <div className="rounded-3xl bg-ink text-surface p-8 md:p-14 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-live/15 blur-3xl"
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <p className="text-xs font-mono uppercase tracking-wider text-accent mb-2">
                  Get involved
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
                  Find a club, register as a player, or come watch a fixture.
                </h2>
              </div>
              <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
                <ButtonLink href="/clubs" variant="primary" size="md">
                  Find a club
                </ButtonLink>
                <ButtonLink href="/membership" variant="secondary" size="md">
                  Membership
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
