import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DemoPopup } from "@/components/demo-popup";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/json-ld";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hockey.tangison.com"),
  title: {
    default: "Namibian Hockey Union",
    template: "%s | Namibian Hockey Union",
  },
  description:
    "The official home of the Namibian Hockey Union. Fixtures, results, clubs, national teams, and the rules of the game.",
  applicationName: "Namibian Hockey Union",
  authors: [{ name: "Tangison Studio", url: "https://studio.tangison.com" }],
  creator: "Tangison Studio",
  publisher: "Namibian Hockey Union",
  robots: { index: true, follow: true }, // public since 2026-08-15
  icons: {
    icon: [
      { url: "/brand/nhu-logo-transparent.png", type: "image/png" },
    ],
    apple: [{ url: "/brand/nhu-logo-transparent.png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_NA",
    url: "https://hockey.tangison.com",
    siteName: "Namibian Hockey Union",
    title: "Namibian Hockey Union",
    description:
      "The official home of the Namibian Hockey Union. Fixtures, results, clubs, national teams, and the rules of the game.",
    images: [
      {
        url: "/brand/og-default.png",
        width: 1200,
        height: 630,
        alt: "Namibian Hockey Union",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Namibian Hockey Union",
    description:
      "The official home of the Namibian Hockey Union. Fixtures, results, clubs, national teams, and the rules of the game.",
    images: ["/brand/og-default.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <DemoPopup />
      </body>
    </html>
  );
}
