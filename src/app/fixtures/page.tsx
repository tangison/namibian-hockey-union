import type { Metadata } from "next";
import { LockedPreview } from "@/components/locked-preview";

export const metadata: Metadata = {
  title: "Fixtures",
  description: "Upcoming and past matches across all NHU competitions.",
  alternates: { canonical: "/fixtures" },
  robots: { index: false, follow: true },
};

export default function FixturesPage() {
  return (
    <LockedPreview
      title="Fixtures"
      description="Fixtures are being prepared. The full season schedule will be available here once the competition calendar is confirmed. Return home or contact NHU for urgent fixture questions."
      sample={
        <div className="border-y border-border">
          <div className="grid grid-cols-12 gap-4 py-4 items-baseline">
            <div className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-wider text-ink-muted">
              Sample date / 19:30
            </div>
            <div className="col-span-12 md:col-span-6 font-display text-lg font-semibold">
              Sample fixture
            </div>
            <div className="col-span-12 md:col-span-3 text-right md:text-left tabular font-mono text-lg">
              TBD
            </div>
          </div>
        </div>
      }
    />
  );
}
