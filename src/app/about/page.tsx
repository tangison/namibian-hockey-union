import type { Metadata } from "next";
import { LockedPreview } from "@/components/locked-preview";

export const metadata: Metadata = {
  title: "About",
  description: "About the Namibian Hockey Union, history, mission, and structure.",
  alternates: { canonical: "/about" },
  robots: { index: false, follow: true },
};

export default function AboutPage() {
  return (
    <LockedPreview
      title="About NHU"
      description="About NHU is being prepared. The federation history, mission, and structure will be presented here."
    />
  );
}
