import type { MetadataRoute } from "next";

/**
 * Robots policy: PUBLIC.
 *
 * The site was previously in demo mode with `Disallow: /`, which blocked all
 * search engine crawling. Opened to crawlers on client instruction (2026-08-15).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://namibiahockey.org/sitemap.xml",
    host: "https://namibiahockey.org",
  };
}
