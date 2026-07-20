import type { Metadata } from "next";
import { LockedPreview } from "@/components/locked-preview";

export const metadata: Metadata = {
  title: "Clubs",
  description: "Find a hockey club in your region.",
  alternates: { canonical: "/clubs" },
  robots: { index: false, follow: true },
};

export default function ClubsPage() {
  return (
    <LockedPreview
      title="Clubs"
      description="The Namibian club directory is being prepared. Each club will have a profile with location, contact, training times, and teams. The existing club list at namibiahockey.org remains the current source."
      sample={
        <div className="bg-surface border border-border p-6 max-w-md">
          <p className="font-display text-lg font-semibold">Sample club</p>
          <p className="text-xs text-ink-muted mt-1">Sample region</p>
          <p className="text-sm mt-3">Sample training times and contact details appear here in full mode.</p>
        </div>
      }
    />
  );
}
