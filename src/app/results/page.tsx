import type { Metadata } from "next";
import { LockedPreview } from "@/components/locked-preview";

export const metadata: Metadata = {
  title: "Results",
  description: "Recent results and competition logs.",
  alternates: { canonical: "/results" },
  robots: { index: false, follow: true },
};

export default function ResultsPage() {
  return (
    <LockedPreview
      title="Results"
      description="Results will appear here once the season begins. The results table will show recent matches, scores, and match reports where available."
    />
  );
}
