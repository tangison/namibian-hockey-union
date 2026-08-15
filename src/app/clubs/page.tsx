import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { ComingSoon } from "@/components/coming-soon";
import { MapPin, Info, Building, Users } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Clubs",
  description:
    "Find a hockey club in Namibia. The NHU club directory — Windhoek, Swakopmund, Otjiwarongo and beyond — with training times, contacts, and team lists.",
  alternates: { canonical: "/clubs" },
  robots: { index: true, follow: true }, // public since 2026-08-15
};

// Verified venue
const verifiedVenue = {
  name: "Windhoek High School Stadium",
  city: "Windhoek",
  certification: "FIH Hockey Turf — Category 3 (Certified)",
  surface: "CCGrass FastPro HF 18 EF10",
  note: "The primary venue for outdoor hockey in Namibia. Hosts the NHU outdoor league and international test series.",
};

// Verified club references (per Tavily / Wikipedia / NIIHA cross-reference)
const verifiedClubRefs = [
  {
    name: "Badgers",
    city: "Windhoek",
    note: "One of the NHU's longest-established affiliated clubs. Verified via Wikipedia's NHU article and the NIIHA club listing.",
    region: "Khomas",
  },
  {
    name: "Coastal Pirates",
    city: "Swakopmund",
    note: "Coastal club, regular participant in the indoor league. Verified via the NIIHA club directory.",
    region: "Erongo",
  },
];

export default function ClubsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-alt">
        <div
          aria-hidden="true"
          className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-success/15 blur-3xl"
        />
        <Container className="relative py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur-sm mb-6">
                <MapPin size={14} weight="regular" className="text-ink" aria-hidden="true" />
                <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                  Club directory
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.04] text-ink">
                Find a{" "}
                <span className="relative inline-block">
                  club
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/60 -z-10"
                  />
                </span>
                .
              </h1>
              <p className="mt-7 text-lg md:text-xl text-ink-muted leading-relaxed max-w-[58ch]">
                From the capital Windhoek to the coast at Swakopmund, NHU-affiliated
                clubs run training sessions and enter teams in the indoor and outdoor
                leagues. The full verified directory unlocks here when the site moves
                into production.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -top-4 -right-4 bottom-4 left-4 rounded-3xl bg-accent/40"
                />
                <Image
                  src="/imagery/img-13-5a7aa3.jpg"
                  alt="Namibia hockey fans in the stands"
                  width={600}
                  height={700}
                  className="relative w-full h-[420px] md:h-[500px] object-cover rounded-3xl border-2 border-ink shadow-[0_24px_60px_-24px_rgba(10,26,47,0.4)]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Verified clubs */}
      <section>
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Verified clubs
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            A few we can name with confidence.
          </h2>
          <p className="mt-4 text-ink-muted leading-relaxed max-w-[60ch]">
            The NHU's full member-club directory is being verified club-by-club. The two
            below have been confirmed against Wikipedia's NHU article and the NIIHA club
            listing.
          </p>

          <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {verifiedClubRefs.map((c) => (
              <li key={c.name}>
                <div className="h-full rounded-3xl border border-border bg-surface p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted">
                        {c.region}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
                        {c.name}
                      </h3>
                      <p className="mt-1 text-sm text-ink-muted flex items-center gap-2">
                        <MapPin size={12} weight="regular" aria-hidden="true" />
                        {c.city}
                      </p>
                    </div>
                    <span className="grid place-items-center h-11 w-11 rounded-full bg-surface-alt">
                      <Users size={20} weight="regular" className="text-ink" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-ink-muted leading-relaxed">{c.note}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs text-ink-muted flex items-center gap-2">
            <Info size={14} weight="regular" aria-hidden="true" />
            Club training times, contacts, and team lists unlock in the full directory.
          </p>
        </Container>
      </section>

      {/* Verified venue */}
      <section className="bg-surface-alt">
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Verified venue
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            Where the game is played.
          </h2>

          <div className="mt-10 rounded-3xl border border-border bg-surface p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <div className="flex items-start gap-3">
                  <span className="grid place-items-center h-12 w-12 rounded-full bg-accent/20 shrink-0">
                    <Building size={22} weight="regular" className="text-ink" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                      {verifiedVenue.name}
                    </h3>
                    <p className="text-sm text-ink-muted mt-1 flex items-center gap-2">
                      <MapPin size={12} weight="regular" aria-hidden="true" />
                      {verifiedVenue.city}, Namibia
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-ink-muted leading-relaxed">{verifiedVenue.note}</p>

                <ul className="mt-6 grid grid-cols-2 gap-4">
                  <li>
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted">Certification</p>
                    <p className="mt-1 font-display text-sm font-semibold text-ink">{verifiedVenue.certification}</p>
                  </li>
                  <li>
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted">Surface</p>
                    <p className="mt-1 font-display text-sm font-semibold text-ink">{verifiedVenue.surface}</p>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/imagery/img-16-4e0734.jpg"
                    alt="Hockey Astroturf in Windhoek, Namibia"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-ink-muted flex items-center gap-2">
            <Info size={14} weight="regular" aria-hidden="true" />
            Verified via Alamy stock reference and the CCGrass project portfolio.
          </p>
        </Container>
      </section>

      {/* Full directory — coming soon */}
      <section>
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <ComingSoon
              title="Full club directory — coming soon"
              description="Every NHU-affiliated club, filterable by region and discipline, with training times, contacts, team lists, and a map. Verified club-by-club before publication."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
