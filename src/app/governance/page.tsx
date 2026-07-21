import type { Metadata } from "next";
import { LockedPreview } from "@/components/locked-preview";

export const metadata: Metadata = {
  title: "Governance",
  description: "Constitution, board, policies, and annual reports.",
  alternates: { canonical: "/governance" },
  robots: { index: false, follow: true },
};

export default function GovernancePage() {
  return (
    <LockedPreview
      title="Governance"
      description="Governance documents are being prepared. The constitution, board, policies, and annual reports will be available here."
    />
  );
}
