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
  ArrowUpRight,
  Info,
  ShieldCheck,
  Camera,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Namibian Hockey Union",
  description:
    "The official home of hockey in Namibia. Fixtures, results, clubs, national teams, and the rules of the game.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: true }, // demo: noindex
};

// Curated real Namibian hockey imagery (sourced via Tavily, see PROOF.md)
const heroCollage = [
  { src: "/imagery/namibia-men-action.jpg", alt: "Namibia men's hockey team in action during an international match", span: "row-span-2" },
  { src: "/imagery/img-14-3086c6.jpg", alt: "Namibia women's hockey team huddle and celebration", span: "" },
  { src: "/imagery/img-13-5a7aa3.jpg", alt: "Namibia hockey fans in the stands", span: "" },
  { src: "/imagery/img-17-0e53d4.jpg", alt: "Namibia under-21 hockey squad", span: "" },
  { src: "/imagery/namibia-women-win.jpg", alt: "Namibia women's hockey team celebrating a victory", span: "" },
];

const galleryImages = [
  { src: "/imagery/img-01-899b19.jpg", alt: "Namibia men's national hockey team", category: "Men" },
  { src: "/imagery/img-03-bbbcd8.jpg", alt: "Namibia women's national hockey team", category: "Women" },
  { src: "/imagery/img-05-5271fe.jpg", alt: "Namibia indoor hockey at the Indoor Africa Cup", category: "Indoor" },
  { src: "/imagery/img-07-51ffed.jpg", alt: "Namibia junior hockey at the FIH Junior World Cup", category: "Junior" },
  { src: "/imagery/img-12-4f5075.jpg", alt: "Namibia hockey during the Olympic qualifier campaign", category: "Qualifier" },
  { src: "/imagery/img-15-f92a74.webp", alt: "Namibia men's hockey at the World Games", category: "World Games" },
  { src: "/imagery/img-16-4e0734.jpg", alt: "Hockey Astroturf in Windhoek, Namibia", category: "Pitch" },
  { src: "/imagery/img-18-9f69b5.jpg", alt: "Namibia under-21 hockey squad", category: "Junior" },
  { src: "/imagery/namibia-women-action.jpg", alt: "Namibia women's hockey team in action", category: "Women" },
];

export default function HomePage() {
  return (
    <>
      <DemoBanner />
      <Hero />
      <ImageStrip />
      <PrimaryPathways />
      <Gallery />
      <LatestResults />
      <NationalTeamsSection />
      <VerifiedSources />
    </>
  );
}

function DemoBanner() {
  return (
    <div className="bg-ink text-surface">
      <Container className="py-2.5">
        <p className="text-xs md:text-sm font-medium text-center flex items-center justify-center gap-2 flex-wrap">
          <span className="font-mono uppercase tracking-wider text-[10px] px-1.5 py-0.5 bg-accent text-ink rounded-full">
            Demo
          </span>
          <span>
            Preview of the new NHU website at{" "}
            <span className="font-mono font-semibold">hockey.tangison.com</span>. Live data — fixtures, results, news — marked “Coming soon”.
          </span>
        </p>
      </Container>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Light, colourful backdrop: cool mist + soft gold gradient wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-surface-alt via-surface to-surface-alt"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-success/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full bg-live/10 blur-3xl"
      />

      <Container className="relative py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
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

            <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.02] text-ink">
              Hockey in
              <br />
              <span className="relative inline-block">
                Namibia
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/60 -z-10"
                />
              </span>
              <span className="text-ink">.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-[55ch]">
              The official home of the Namibian Hockey Union. Fixtures, results, clubs, national teams, and the rules of the game.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/fixtures" variant="primary" size="lg">
                View fixtures
                <ArrowRight size={18} weight="regular" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/clubs" variant="secondary" size="lg">
                Find a club
              </ButtonLink>
            </div>

            <p className="mt-8 text-sm text-ink-muted flex flex-wrap items-center gap-x-2 gap-y-1">
              <ShieldCheck
                size={16}
                weight="regular"
                className="text-success"
                aria-hidden="true"
              />
              <span>Recognised by</span>
              <a
                href="https://www.fih.hockey/about-fih/ourmembers/dynamic/namibia"
                className="text-ink underline-offset-4 hover:underline font-medium"
                rel="noopener noreferrer"
              >
                FIH
              </a>
              <span>and the</span>
              <a
                href="https://olympic.org.na/members/affiliated-members/namibia-hockey-union"
                className="text-ink underline-offset-4 hover:underline font-medium"
                rel="noopener noreferrer"
              >
                Namibian National Olympic Committee
              </a>
              .
            </p>
          </div>

          {/* Multi-image collage of real Namibian hockey action */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Sun-gold accent frame offset behind the collage */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 bottom-4 left-4 rounded-3xl bg-accent/40"
              />
              <div className="relative grid grid-cols-2 gap-2 rounded-3xl border-2 border-ink p-2 bg-ink shadow-[0_24px_60px_-24px_rgba(10,26,47,0.4)]">
                <Image
                  src={heroCollage[0].src}
                  alt={heroCollage[0].alt}
                  width={400}
                  height={500}
                  priority
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="row-span-2 h-full w-full object-cover rounded-2xl"
                />
                <Image
                  src={heroCollage[1].src}
                  alt={heroCollage[1].alt}
                  width={400}
                  height={250}
                  sizes="(max-width: 1024px) 25vw, 10vw"
                  className="h-full w-full object-cover rounded-2xl"
                />
                <Image
                  src={heroCollage[2].src}
                  alt={heroCollage[2].alt}
                  width={400}
                  height={250}
                  sizes="(max-width: 1024px) 25vw, 10vw"
                  className="h-full w-full object-cover rounded-2xl"
                />
                <Image
                  src={heroCollage[3].src}
                  alt={heroCollage[3].alt}
                  width={400}
                  height={250}
                  sizes="(max-width: 1024px) 25vw, 10vw"
                  className="h-full w-full object-cover rounded-2xl col-span-2"
                />
              </div>
              {/* Verified photo badge */}
              <span className="absolute -bottom-3 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface text-ink text-[10px] font-mono uppercase tracking-wider border border-border shadow-md">
                <span className="h-1.5 w-1.5 rounded-full bg-live animate-pulse" aria-hidden="true" />
                Real Namibian hockey photos
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ImageStrip() {
  // Marquee-like strip of 6 small thumbnails
  const strip = galleryImages.slice(0, 6);
  return (
    <section className="border-y border-border bg-surface">
      <Container className="py-6">
        <div className="flex items-center gap-3 mb-4">
          <Camera size={20} weight="regular" className="text-ink" aria-hidden="true" />
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
            Real Namibian hockey, sourced via Tavily
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {strip.map((img, i) => (
            <div
              key={i}
              className="aspect-square relative overflow-hidden rounded-2xl bg-surface-alt border border-border"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover"
              />
            </div>
          ))}
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
      status: "Coming soon",
      tint: "live",
      image: "/imagery/img-16-4e0734.jpg",
    },
    {
      href: "/clubs",
      icon: MapPin,
      label: "Clubs",
      description: "Find a hockey club in your region. Training times, contacts, and teams.",
      status: "Coming soon",
      tint: "accent",
      image: "/imagery/img-13-5a7aa3.jpg",
    },
    {
      href: "/national-teams",
      icon: Trophy,
      label: "National teams",
      description: "Men and women, outdoor and indoor, junior and senior. Squads, fixtures, results.",
      status: "Verified",
      tint: "success",
      image: "/imagery/img-01-899b19.jpg",
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
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
              Three ways to follow the sport
            </h2>
          </div>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pathways.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-surface hover:border-ink hover:shadow-[0_16px_50px_-20px_rgba(10,26,47,0.25)] transition-all"
              >
                {/* Top image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
                  />
                  {/* Top accent strip in the pathway's tint */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-0 left-6 right-6 h-1 rounded-b-full ${
                      p.tint === "live"
                        ? "bg-live"
                        : p.tint === "accent"
                          ? "bg-accent"
                          : "bg-success"
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="grid place-items-center h-11 w-11 rounded-full bg-surface/95 backdrop-blur-sm shadow-md">
                      <p.icon
                        size={22}
                        weight="regular"
                        className="text-ink"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-ink">
                    {p.label}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface-alt text-ink-muted">
                      {p.status}
                    </span>
                    <ArrowRight
                      size={16}
                      weight="regular"
                      className="text-ink group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Gallery() {
  return (
    <section className="bg-surface-alt">
      <Container className="py-16 md:py-24">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              Gallery
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
              Six squads. One union.
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed max-w-[55ch]">
              Real photographs from Namibian Hockey Union campaigns, sourced via Tavily from African hockey media, the FIH, Olympics.com, and Namibian sport press.
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <li
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-ink"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface text-ink text-[10px] font-mono uppercase tracking-wider">
                  {img.category}
                </span>
                <p className="mt-2 text-surface text-sm font-medium leading-tight">
                  {img.alt}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-ink-muted flex items-center gap-2">
          <Info size={14} weight="regular" aria-hidden="true" />
          Every photo traces to a public source. See PROOF.md for the manifest of URLs and rights holders.
        </p>
      </Container>
    </section>
  );
}

function LatestResults() {
  return (
    <section>
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              Verified recent results
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] text-ink">
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
              <ArrowRight size={16} weight="regular" aria-hidden="true" />
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
                    <p className="font-display text-xl font-semibold tracking-tight text-ink mt-1">
                      vs {r.opponent}
                    </p>
                  </div>
                  <div className="col-span-6 md:col-span-3 tabular font-mono text-2xl text-ink">
                    {r.score}
                  </div>
                  <div className="col-span-6 md:col-span-4 text-right md:text-left">
                    <p className="text-sm text-ink font-medium">{r.result}</p>
                    <p className="text-xs text-ink-muted mt-1">{r.venue}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-ink-muted flex items-center gap-2">
              <Info size={14} weight="regular" aria-hidden="true" />
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
    <section className="bg-surface-alt">
      <Container className="py-16 md:py-24">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              National teams
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
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
            <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
          </ButtonLink>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nationalTeams.map((team) => (
            <li key={team.slug}>
              <Link
                href={`/national-teams/${team.slug}`}
                className="group block h-full rounded-3xl border border-border bg-surface p-6 hover:border-ink hover:shadow-[0_12px_40px_-20px_rgba(10,26,47,0.25)] transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                      {team.name}
                    </h3>
                    <p className="mt-1 text-xs font-mono uppercase tracking-wider text-ink-muted">
                      {team.status}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="grid place-items-center h-9 w-9 rounded-full bg-surface-alt group-hover:bg-accent transition-colors"
                  >
                    <Users
                      size={18}
                      weight="regular"
                      className="text-ink"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-ink-muted flex items-center gap-2">
          <Info size={14} weight="regular" aria-hidden="true" />
          Squad selections to be confirmed. Verified squad lists unlock in full mode.
        </p>
      </Container>
    </section>
  );
}

function VerifiedSources() {
  return (
    <section className="bg-ink text-surface relative overflow-hidden">
      {/* Decorative tri-colour washes */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-live/15 blur-3xl"
      />
      <Container className="relative py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-wider text-accent mb-2">
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
