import { orgFacts } from "@/data/site";

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          name: orgFacts.name,
          alternateName: orgFacts.shortName,
          description: orgFacts.description,
          url: "https://namibiahockey.org",
          sport: "Hockey",
          logo: "https://namibiahockey.org/brand/nhu-logo-transparent.png",
          sameAs: orgFacts.verifiedSocials.map((s) => s.url),
          parentOrganization: {
            "@type": "SportsOrganization",
            name: "International Hockey Federation",
            url: "https://www.fih.hockey",
          },
        }),
      }}
    />
  );
}

export function WebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Namibian Hockey Union",
          url: "https://namibiahockey.org",
          inLanguage: "en",
          publisher: {
            "@type": "SportsOrganization",
            name: "Namibian Hockey Union",
          },
        }),
      }}
    />
  );
}
