import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Demo mode: noindex everything
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: "https://namibiahockey.org/sitemap.xml",
    host: "https://namibiahockey.org",
  };
}
