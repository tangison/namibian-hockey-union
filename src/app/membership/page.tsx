import type { Metadata } from "next";
import { LockedPreview } from "@/components/locked-preview";

export const metadata: Metadata = {
  title: "Membership",
  description: "Register as a player, coach, umpire, or official with NHU.",
  alternates: { canonical: "/membership" },
  robots: { index: false, follow: true },
};

export default function MembershipPage() {
  return (
    <LockedPreview
      title="Membership"
      description="Membership registration is being prepared. Players, coaches, umpires, and officials will be able to register with NHU through this page."
    />
  );
}
