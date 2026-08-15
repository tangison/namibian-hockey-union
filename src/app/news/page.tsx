import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { ComingSoon } from "@/components/coming-soon";
import { orgFacts } from "@/data/site";
import { Newspaper, ArrowUpRight, Info } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "News",
  description:
    "News and match reports from the Namibian Hockey Union — verified stories sourced from Namibian sport media, the FIH, AfHF, and the NHU's own social channels.",
  alternates: { canonical: "/news" },
  robots: { index: true, follow: true }, // public since 2026-08-15
};

// Verified news items (sourced via Tavily from Wikipedia / NBC Sport NA / NHU Instagram)
const verifiedNews = [
  {
    title: "Namibia men win Indoor Africa Cup 2024 — gold in Swakopmund",
    excerpt:
      "Namibia's men's indoor hockey team won their first-ever Indoor Africa Cup gold, beating South Africa in a shootout after a 3-3 draw in the final at Swakopmund. The victory also qualified Namibia for the 2025 FIH Indoor World Cup.",
    date: "26 May 2024",
    source: "Wikipedia · 2024 Men's Indoor Africa Cup",
    href: "https://en.wikipedia.org/wiki/2024_Men%27s_Indoor_Africa_Cup",
    image: "/imagery/img-05-5271fe.jpg",
    tag: "Indoor · Gold",
  },
  {
    title: "Namibia women take silver at the 2024 Indoor Africa Cup",
    excerpt:
      "The women's indoor squad reached the final of the 2024 Indoor Africa Cup in Swakopmund, settling for a silver medal against South Africa. The campaign confirmed Namibia's standing as one of Africa's top two indoor hockey nations.",
    date: "26 May 2024",
    source: "MTC Dome Namibia · Facebook",
    href: "https://www.facebook.com/DomeNamibia/posts/874723574693910",
    image: "/imagery/namibia-women-action.jpg",
    tag: "Indoor · Silver",
  },
  {
    title: "Historic bronze for Namibia at the 2025 World Games in Chengdu",
    excerpt:
      "Namibia's inline hockey team claimed the country's first-ever medal at the World Games, beating France to bronze in Chengdu, China. The squad returned home to a hero's welcome at Hosea Kutako International Airport.",
    date: "August 2025",
    source: "Wikipedia · Namibia at the 2025 World Games",
    href: "https://en.wikipedia.org/wiki/Namibia_at_the_2025_World_Games",
    image: "/imagery/img-15-f92a74.webp",
    tag: "World Games · Bronze",
  },
  {
    title: "Outdoor Hockey Umpires Course announced for June 2026",
    excerpt:
      "The NHU has confirmed an Outdoor Hockey Umpires Course in Windhoek on 5–6 June 2026, led by international umpire Peter Caulder. The course is open to anyone with basic umpiring experience.",
    date: "May 2026",
    source: "NHU · Instagram",
    href: "https://www.instagram.com/namibiahockeyunion",
    image: "/imagery/img-16-4e0734.jpg",
    tag: "Course · Umpires",
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-alt">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl"
        />
        <Container className="relative py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur-sm mb-6">
              <Newspaper size={14} weight="regular" className="text-ink" aria-hidden="true" />
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                News & match reports
              </p>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.04] text-ink">
              The story so{" "}
              <span className="relative inline-block">
                far
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/60 -z-10"
                />
              </span>
              .
            </h1>
            <p className="mt-7 text-lg md:text-xl text-ink-muted leading-relaxed">
              Verified stories from the Namibian Hockey Union — sourced from African
              hockey media, the FIH, Wikipedia, and the NHU's own social channels.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured story */}
      <section>
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Featured
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            Top story.
          </h2>

          <a
            href={verifiedNews[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 block rounded-3xl border border-border bg-surface overflow-hidden hover:border-ink hover:shadow-[0_16px_50px_-20px_rgba(10,26,47,0.25)] transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <Image
                  src={verifiedNews[0].image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
                />
                <span className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full bg-surface text-ink text-[10px] font-mono uppercase tracking-wider border border-border">
                  {verifiedNews[0].tag}
                </span>
              </div>
              <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                    {verifiedNews[0].date} · {verifiedNews[0].source}
                  </p>
                  <h3 className="mt-4 font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink leading-tight">
                    {verifiedNews[0].title}
                  </h3>
                  <p className="mt-4 text-ink-muted leading-relaxed">
                    {verifiedNews[0].excerpt}
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                  Read on source site
                  <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                </div>
              </div>
            </div>
          </a>
        </Container>
      </section>

      {/* News grid */}
      <section className="bg-surface-alt">
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            More verified stories
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            Latest.
          </h2>

          <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {verifiedNews.slice(1).map((n) => (
              <li key={n.title}>
                <a
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-3xl border border-border bg-surface overflow-hidden hover:border-ink hover:shadow-[0_12px_40px_-20px_rgba(10,26,47,0.25)] transition-all"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={n.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full bg-surface text-ink text-[10px] font-mono uppercase tracking-wider border border-border">
                      {n.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                      {n.date}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink leading-tight">
                      {n.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed line-clamp-3">
                      {n.excerpt}
                    </p>
                    <p className="mt-4 text-[11px] font-mono uppercase tracking-wider text-ink-muted">
                      Source: {n.source}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs text-ink-muted flex items-center gap-2">
            <Info size={14} weight="regular" aria-hidden="true" />
            Every story links to its primary source. No invented quotes or match reports.
          </p>
        </Container>
      </section>

      {/* Full news feed — coming soon */}
      <section>
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <ComingSoon
              title="Full news feed — coming soon"
              description="An editorial news feed with original match reports, player interviews, and club spotlights will be published here when the site moves into production."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
