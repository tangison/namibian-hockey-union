import type { Metadata } from "next";
import { LockedPreview } from "@/components/locked-preview";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Namibian Hockey Union.",
  alternates: { canonical: "/contact" },
  robots: { index: false, follow: true },
};

export default function ContactPage() {
  return (
    <LockedPreview
      title="Contact NHU"
      description="Contact details are being prepared. The contact form and NHU office details will be available here. For urgent matters, contact the existing federation contact at namibiahockey.org."
    />
  );
}
