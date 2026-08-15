import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { ComingSoon } from "@/components/coming-soon";
import { orgFacts } from "@/data/site";
import {
  ShieldCheck,
  Users,
  Gavel,
  FileText,
  Info,
  Stamp,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Governance of the Namibian Hockey Union — executive committee, affiliations, sponsors, and the policy framework that governs the sport nationally.",
  alternates: { canonical: "/governance" },
  robots: { index: true, follow: true }, // public since 2026-08-15
};

export default function GovernancePage() {
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
                <ShieldCheck size={14} weight="regular" className="text-ink" aria-hidden="true" />
                <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                  Governance & policy
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.04] text-ink">
                How the NHU is{" "}
                <span className="relative inline-block">
                  run
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/60 -z-10"
                  />
                </span>
                .
              </h1>
              <p className="mt-7 text-lg md:text-xl text-ink-muted leading-relaxed max-w-[58ch]">
                The Namibian Hockey Union is governed by an elected executive committee,
                affiliated to the International Hockey Federation (FIH), the African
                Hockey Federation (AfHF), and the Namibian National Olympic Committee
                (NNOC).
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -top-4 -left-4 bottom-4 right-4 rounded-3xl bg-success/15"
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

      {/* Affiliations */}
      <section>
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Affiliations
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            Recognised internationally, accountable nationally.
          </h2>
          <p className="mt-4 text-ink-muted leading-relaxed max-w-[60ch]">
            The Union's authority to govern hockey in Namibia flows from three
            affiliations, each verified against the primary register of the parent body.
          </p>

          <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {orgFacts.verifiedSources.slice(0, 3).map((s, i) => {
              const meta = [
                { name: "International Hockey Federation (FIH)", note: "World governing body" },
                { name: "Namibian National Olympic Committee", note: "NNOC affiliated member" },
                { name: "African Hockey Federation (AfHF)", note: "Continental confederation" },
              ][i];
              return (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full rounded-3xl border border-border bg-surface p-6 hover:border-ink hover:shadow-[0_12px_40px_-20px_rgba(10,26,47,0.25)] transition-all"
                  >
                    <span className="grid place-items-center h-11 w-11 rounded-full bg-surface-alt group-hover:bg-accent transition-colors">
                      <Stamp size={20} weight="regular" className="text-ink" aria-hidden="true" />
                    </span>
                    <p className="mt-4 font-display text-lg font-semibold tracking-tight text-ink leading-tight">
                      {meta.name}
                    </p>
                    <p className="mt-1 text-xs font-mono uppercase tracking-wider text-ink-muted">
                      {meta.note}
                    </p>
                    <p className="mt-4 text-xs text-ink-muted break-all">{s.url}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Executive committee */}
      <section className="bg-surface-alt">
        <Container className="py-16 md:py-24">
          <div className="flex items-end justify-between gap-4 mb-10 flex-wrap">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
                Executive committee
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
                The elected board.
              </h2>
              <p className="mt-4 text-ink-muted leading-relaxed max-w-[60ch]">
                Per the FIH members register. Cross-checked against the Wikipedia NHU
                article; the FIH record is treated as authoritative where they differ.
              </p>
            </div>
            <Users size={32} weight="regular" className="text-ink-muted" aria-hidden="true" />
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {orgFacts.executiveCommittee.map((m) => (
              <li
                key={m.role}
                className="rounded-2xl border border-border bg-surface p-5 hover:shadow-[0_10px_30px_-15px_rgba(10,26,47,0.2)] transition-shadow"
              >
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted">
                  {m.role}
                </p>
                <p className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                  {m.name}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs text-ink-muted flex items-center gap-2">
            <Info size={14} weight="regular" aria-hidden="true" />
            Committee term and election date: TBC. Verified via the FIH members register.
          </p>
        </Container>
      </section>

      {/* Sponsors */}
      <section>
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
            Sponsors & partners
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            Backed by Namibia's leading brands.
          </h2>
          <p className="mt-4 text-ink-muted leading-relaxed max-w-[60ch]">
            The NHU's commercial partners make national squad campaigns, junior
            development, and the indoor and outdoor leagues possible. Verified via the
            Wikipedia NHU article.
          </p>

          <ul className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {orgFacts.sponsors.map((s) => (
              <li
                key={s}
                className="rounded-2xl border border-border bg-surface-alt/60 p-5 flex items-center justify-center min-h-[80px]"
              >
                <p className="font-display text-lg font-semibold tracking-tight text-ink text-center">
                  {s}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Policies / constitution */}
      <section className="bg-surface-alt">
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Gavel size={28} weight="regular" className="text-ink" aria-hidden="true" />
              <p className="mt-4 text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
                Constitution & policies
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] text-ink">
                The rules that govern the Union.
              </h2>
              <p className="mt-4 text-ink-muted leading-relaxed">
                The NHU constitution, anti-doping policy, safeguarding framework, and
                selection policies are being compiled and will be published as
                downloadable PDFs.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  icon: FileText,
                  title: "NHU constitution",
                  body: "The Union's founding document: structure, elections, voting, and amendment procedures.",
                },
                {
                  icon: ShieldCheck,
                  title: "Anti-doping policy",
                  body: "Adopted in line with the World Anti-Doping Agency (WADA) code and the Namibian National Anti-Doping Organisation.",
                },
                {
                  icon: Users,
                  title: "Safeguarding & child protection",
                  body: "Mandatory policy for all NHU-registered coaches, umpires, and team staff working with junior players.",
                },
                {
                  icon: Stamp,
                  title: "Selection policy",
                  body: "How the men's and women's senior and junior squads are selected for Continental Cups, World Cups, and the World Games.",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-surface p-5 flex items-start gap-4"
                >
                  <span className="grid place-items-center h-11 w-11 rounded-full bg-surface-alt shrink-0">
                    <p.icon size={20} weight="regular" className="text-ink" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold tracking-tight text-ink">
                      {p.title}
                    </p>
                    <p className="mt-1 text-sm text-ink-muted leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}

              <div className="mt-2">
                <ComingSoon
                  title="Documents — coming soon"
                  description="Each policy document will be available as a downloadable PDF once the site moves into production."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
