import type { Metadata } from "next";
import { LockedPreview } from "@/components/locked-preview";

export const metadata: Metadata = {
  title: "News",
  description: "Match reports, announcements, and updates from NHU.",
  alternates: { canonical: "/news" },
  robots: { index: false, follow: true },
};

export default function NewsPage() {
  return (
    <LockedPreview
      title="News"
      description="News index is being prepared. Recent articles will appear here with the latest first."
    />
  );
}
