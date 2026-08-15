import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";

export const metadata: Metadata = {
  title: "Brand",
  description:
    "The public brand identity of the Namibian Hockey Union. Logo, colours, typography, and usage rules.",
  alternates: { canonical: "/brand" },
  robots: { index: true, follow: true }, // public since 2026-08-15
};

export default function BrandPage() {
  return (
    <>
      <section className="bg-surface-alt">
        <Container className="py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">
            Brand identity
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.05] max-w-[12ch]">
            Pitch and coast.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-[55ch]">
            Namibia is the line where the world oldest desert meets the Atlantic. Hockey here is played on that edge. The brand synthesises the deep ocean blue of the Atlantic, the gold of the Namibian sun, and the cool mineral grey of desert stone.
          </p>
        </Container>
      </section>

      <LogoSection />
      <ColourSection />
      <TypographySection />
      <ShapeSection />
      <ComponentSection />
      <UsageSection />
      <ApprovalSection />
    </>
  );
}

function LogoSection() {
  return (
    <section>
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">01</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">The crest</h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              A circular emblem with a hockey player line drawing, wrapped in a green, red, and yellow swoosh in Namibian flag order. The wordmark reads NAMIBIA and HOCKEY UNION in deep blue below.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
              <div className="bg-surface p-8 flex flex-col items-center justify-center aspect-square">
                <Image src="/brand/nhu-logo-twitter.jpg" alt="NHU logo on white background" width={200} height={200} className="object-contain" />
                <p className="mt-4 text-xs font-mono uppercase tracking-wider text-ink-muted">Primary</p>
              </div>
              <div className="bg-ink p-8 flex flex-col items-center justify-center aspect-square">
                <Image src="/brand/nhu-logo-white.png" alt="NHU logo in white for dark backgrounds" width={200} height={200} className="object-contain" />
                <p className="mt-4 text-xs font-mono uppercase tracking-wider text-surface/60">On dark</p>
              </div>
              <div className="bg-surface-alt p-8 flex flex-col items-center justify-center aspect-square">
                <Image src="/brand/nhu-logo-transparent.png" alt="NHU logo with transparent background" width={200} height={200} className="object-contain" />
                <p className="mt-4 text-xs font-mono uppercase tracking-wider text-ink-muted">Transparent</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">Clear space</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">Minimum clear space on every side equals the height of the HOCKEY UNION wordmark.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">Minimum size</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">120 pixels wide for digital. 30 millimetres wide for print.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ColourSection() {
  const swatches = [
    { name: "White", hex: "#FFFFFF", role: "Primary surface", text: "ink" },
    { name: "Cool mist", hex: "#F5F7FA", role: "Surface alt", text: "ink" },
    { name: "Atlantic", hex: "#0A1A2F", role: "Deep ink, body, header", text: "surface" },
    { name: "Slate", hex: "#54607A", role: "Muted text", text: "surface" },
    { name: "Cool grey", hex: "#D6DCE5", role: "Border", text: "ink" },
    { name: "Sun gold", hex: "#FCD116", role: "Accent (locked)", text: "ink" },
    { name: "Flag red", hex: "#D21034", role: "Live, urgent only", text: "surface" },
    { name: "Flag green", hex: "#1E8449", role: "Success, clubs tag", text: "surface" },
  ];
  return (
    <section className="bg-surface-alt">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">02</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Colour</h2>
            <p className="mt-4 text-ink-muted leading-relaxed">One accent colour, locked across the whole site. Red and green appear only for live and success states, derived from the Namibian flag.</p>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
              {swatches.map((s) => (
                <li key={s.hex} className="p-6 aspect-[4/5] flex flex-col justify-between" style={{ backgroundColor: s.hex, color: s.text === "surface" ? "#FFFFFF" : "#0A1A2F" }}>
                  <div>
                    <p className="font-display font-semibold text-sm">{s.name}</p>
                    <p className="text-xs opacity-70 mt-1">{s.role}</p>
                  </div>
                  <p className="font-mono text-xs uppercase">{s.hex}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-ink-muted">All pairings verified to WCAG AA. Sun gold is reserved as the single accent. Never use gold for body text on white.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TypographySection() {
  return (
    <section>
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">03</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Typography</h2>
            <p className="mt-4 text-ink-muted leading-relaxed">Three families, each with a clear role. Bricolage Grotesque for display. Inter for body. JetBrains Mono for fixtures, scores, and tabular data.</p>
            <p className="mt-4 text-xs text-ink-muted">All three are licensed under the SIL Open Font Licence and self-hosted via next/font.</p>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">Display - Bricolage Grotesque</p>
              <p className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.05]">Hockey in Namibia.</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">Body - Inter</p>
              <p className="text-base leading-relaxed max-w-[65ch]">The Namibian Hockey Union is the national governing body for hockey in Namibia. This is body copy in Inter, set at 16 pixels with relaxed line height for readability across all screen sizes.</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">Numeric - JetBrains Mono</p>
              <p className="font-mono text-2xl tabular">12 OCT 2024 / 19:30 / NAM 2 - 1 SWE</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ShapeSection() {
  return (
    <section className="bg-surface-alt">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">04</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Shapes</h2>
            <p className="mt-4 text-ink-muted leading-relaxed">One documented radius system. Sharp on tables, eight pixels on cards and inputs, full pill only on live status badges.</p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-surface p-8 border border-border">
                <div className="aspect-square bg-surface-alt border border-border mb-4" style={{ borderRadius: 0 }} />
                <p className="font-display font-semibold">Sharp</p>
                <p className="text-xs text-ink-muted mt-1">Tables, fixtures grids</p>
                <p className="font-mono text-xs mt-2">0px</p>
              </div>
              <div className="bg-surface p-8 border border-border">
                <div className="aspect-square bg-surface-alt border border-border mb-4" style={{ borderRadius: 8 }} />
                <p className="font-display font-semibold">Card</p>
                <p className="text-xs text-ink-muted mt-1">Cards, inputs, buttons</p>
                <p className="font-mono text-xs mt-2">8px</p>
              </div>
              <div className="bg-surface p-8 border border-border">
                <div className="aspect-square bg-surface-alt border border-border mb-4" style={{ borderRadius: 9999 }} />
                <p className="font-display font-semibold">Pill</p>
                <p className="text-xs text-ink-muted mt-1">Live badges, tags only</p>
                <p className="font-mono text-xs mt-2">9999px</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ComponentSection() {
  return (
    <section>
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">05</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Components</h2>
            <p className="mt-4 text-ink-muted leading-relaxed">Built with shadcn primitives customised to brand tokens. No default themes shipped. One icon family, Phosphor.</p>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-3">Buttons</p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="#" variant="primary" size="md">Primary</ButtonLink>
                <ButtonLink href="#" variant="secondary" size="md">Secondary</ButtonLink>
                <ButtonLink href="#" variant="accent" size="md">Accent</ButtonLink>
                <ButtonLink href="#" variant="ghost" size="md">Ghost</ButtonLink>
              </div>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-3">Status badges</p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-live text-surface text-xs font-mono uppercase tracking-wider rounded-pill">Live</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-success text-surface text-xs font-mono uppercase tracking-wider rounded-pill">Final</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-surface-alt text-ink-muted text-xs font-mono uppercase tracking-wider rounded-pill border border-border">Scheduled</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-3">Fixture row</p>
              <div className="border-y border-border">
                <div className="grid grid-cols-12 gap-4 py-4 items-baseline">
                  <div className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-wider text-ink-muted">12 OCT 2024 / 19:30</div>
                  <div className="col-span-12 md:col-span-6 font-display text-lg font-semibold">Namibia vs Sweden</div>
                  <div className="col-span-12 md:col-span-3 text-right md:text-left tabular font-mono text-lg">2 - 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function UsageSection() {
  const correct = [
    "Split hero with editorial copy on the left and a real match photo on the right",
    "Fixtures table in JetBrains Mono with sharp corners and tabular numbers",
    "Sun gold accent on a single CTA per section",
    "Deep ink header with white logo variant",
  ];
  const incorrect = [
    "Centred hero over a purple mesh gradient",
    "Three equal feature cards with icons in coloured circles",
    "Glassmorphism cards over a blurred photo",
    "Generic stock hockey photo of a European player",
    "Beige background with brass accent",
    "Fraunces or Instrument Serif display",
    "Em dash in any visible string",
  ];
  return (
    <section className="bg-surface-alt">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">06</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Usage</h2>
            <p className="mt-4 text-ink-muted leading-relaxed">The correct and incorrect applications of the identity.</p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface p-8 border border-border">
              <p className="text-xs font-mono uppercase tracking-wider text-success mb-4">Correct</p>
              <ul className="space-y-3 text-sm text-ink">
                {correct.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-success shrink-0">+</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface p-8 border border-border">
              <p className="text-xs font-mono uppercase tracking-wider text-live mb-4">Incorrect</p>
              <ul className="space-y-3 text-sm text-ink">
                {incorrect.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-live shrink-0">x</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ApprovalSection() {
  return (
    <section>
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">07</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Sources and approval</h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight">Sources</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                <li>Logo: client-supplied PNG, verified via vision model inspection</li>
                <li>Colours: derived from the Namibian flag and the verified logo swoosh</li>
                <li>Typography: Bricolage Grotesque, Inter, JetBrains Mono (all OFL)</li>
                <li>Reference sites inspected for structure, not copied</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight">Approval status</h3>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">Draft. Approved by the client on 21 July 2026 to proceed to demo build. Subject to revision after demo review.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
