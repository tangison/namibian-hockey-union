import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { orgFacts, nationalTeams } from "@/data/site";
import {
  CalendarBlank,
  MapPin,
  Trophy,
  Users,
  ArrowRight,
  Info,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Namibian Hockey Union",
  description:
    "The official home of hockey in Namibia. Fixtures, results, clubs, national teams, and the rules of the game.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: true }, // demo: noindex
};

export default function HomePage() {
  return (
    <>
      <DemoBanner />
      <Hero />
      <PrimaryPathways />
      <LatestResults />
      <NationalTeamsSection />
      <VerifiedSources />
    </>
  );
}

function DemoBanner() {
  return (
    <div className="bg-accent text-ink border-b border-ink/10">
      <Container className="py-2.5">
        <p className="text-xs md:text-sm font-medium text-center">
          <span className="font-mono uppercase tracking-wider text-[10px] mr-2">Demo</span>
          This is a preview of the new NHU website. Only the home and brand pages are unlocked.
        </p>
      </Container>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-surface-alt">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">
              National governing body
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.05]">
              Hockey in
              <br />
              Namibia.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-[55ch]">
              The official home of the Namibian Hockey Union. Fixtures, results, clubs, national teams, and the rules of the game.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/fixtures" variant="accent" size="lg">
                View fixtures
              </ButtonLink>
              <ButtonLink href="/clubs" variant="secondary" size="lg">
                Find a club
              </ButtonLink>
            </div>
            <p className="mt-8 text-sm text-ink-muted">
              Recognised by{" "}
              <a
                href="https://www.fih.hockey/about-fih/ourmembers/dynamic/namibia"
                className="text-ink underline-offset-4 hover:underline"
                rel="noopener noreferrer"
              >
                FIH
              </a>{" "}
              and the{" "}
              <a
                href="https://olympic.org.na/members/affiliated-members/namibia-hockey-union"
                className="text-ink underline-offset-4 hover:underline"
                rel="noopener noreferrer"
              >
                Namibian National Olympic Committee
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] bg-ink overflow-hidden rounded-lg">
              <Image
                src="/brand/nhu-logo-twitter.jpg"
                alt="Namibian Hockey Union crest"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/30" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-surface text-sm font-mono uppercase tracking-wider">
                  Verified crest
                </p>
                <p className="text-surface/80 text-xs mt-1">
                  Player emblem with Namibian flag colours
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PrimaryPathways() {
  const pathways = [
    {
      href: "/fixtures",
      icon: CalendarBlank,
      label: "Fixtures",
      description: "Upcoming matches, dates, venues, and kick-off times across all competitions.",
      status: "Locked in demo",
    },
    {
      href: "/clubs",
      icon: MapPin,
      label: "Clubs",
      description: "Find a hockey club in your region. Training times, contacts, and teams.",
      status: "Locked in demo",
    },
    {
      href: "/national-teams",
      icon: Trophy,
      label: "National teams",
      description: "Men and women, outdoor and indoor, junior and senior. Squads, fixtures, results.",
      status: "Locked in demo",
    },
  ];
  return (
    <section>
      <Container className="py-16 md:py-24">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              This week
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Three ways to follow the sport
            </h2>
          </div>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-y border-border">
          {pathways.map((p) => (
            <li key={p.href} className="group">
              <Link
                href={p.href}
                className="block p-8 hover:bg-surface-alt transition-colors h-full"
              >
                <p.icon
                  size={28}
                  weight="regular"
                  className="text-ink mb-6"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                  {p.label}
                </h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                    {p.status}
                  </span>
                  <ArrowRight
                    size={16}
                    weight="regular"
                    className="text-ink group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function LatestResults() {
  return (
    <section className="bg-surface-alt">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              Verified recent results
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
              On the international stage
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Verified results from the senior men squad and the World Games campaign. Full fixtures, logs, and match reports unlock in full mode.
            </p>
            <ButtonLink
              href="/results"
              variant="secondary"
              size="md"
              className="mt-6"
            >
              All results
            </ButtonLink>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-border border-y border-border">
              {orgFacts.verifiedResults.map((r, i) => (
                <li
                  key={i}
                  className="grid grid-cols-12 gap-4 py-6 items-baseline"
                >
                  <div className="col-span-12 md:col-span-5">
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                      {r.event}
                    </p>
                    <p className="font-display text-xl font-semibold tracking-tight mt-1">
                      vs {r.opponent}
                    </p>
                  </div>
                  <div className="col-span-6 md:col-span-3 tabular font-mono text-2xl">
                    {r.score}
                  </div>
                  <div className="col-span-6 md:col-span-4 text-right md:text-left">
                    <p className="text-sm text-ink">{r.result}</p>
                    <p className="text-xs text-ink-muted mt-1">{r.venue}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-ink-muted">
              Verified via Tavily API queries against Namibian sport media and the NHU social accounts. See PROOF.md for evidence.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function NationalTeamsSection() {
  return (
    <section>
      <Container className="py-16 md:py-24">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              National teams
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Six squads, one union
            </h2>
          </div>
          <ButtonLink
            href="/national-teams"
            variant="ghost"
            size="md"
            className="hidden md:inline-flex"
          >
            All teams
          </ButtonLink>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {nationalTeams.map((team) => (
            <li key={team.slug} className="bg-surface">
              <Link
                href={`/national-teams/${team.slug}`}
                className="block p-6 hover:bg-surface-alt transition-colors h-full"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {team.name}
                    </h3>
                    <p className="mt-1 text-xs font-mono uppercase tracking-wider text-ink-muted">
                      {team.status}
                    </p>
                  </div>
                  <Users
                    size={20}
                    weight="regular"
                    className="text-ink-muted shrink-0 mt-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-ink-muted">
          Squad selections to be confirmed. Verified squad lists unlock in full mode.
        </p>
      </Container>
    </section>
  );
}

function VerifiedSources() {
  return (
    <section className="bg-ink text-surface">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted-on-dark mb-2">
              Verified
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
              Sourced from primary records
            </h2>
            <p className="mt-4 text-ink-muted-on-dark leading-relaxed">
              Every fact on this site traces to a primary source. No invented metrics, testimonials, or claims.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {orgFacts.verifiedSources.map((s) => (
                <li
                  key={s.url}
                  className="flex items-start gap-4 pb-4 border-b border-ink-muted-on-dark/30"
                >
                  <Info
                    size={20}
                    weight="regular"
                    className="text-accent shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium">{s.label}</p>
                    <a
                      href={s.url}
                      className="text-xs text-ink-muted-on-dark hover:text-accent transition-colors break-all"
                      rel="noopener noreferrer"
                    >
                      {s.url}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
