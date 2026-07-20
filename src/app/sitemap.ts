import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://namibiahockey.org";
  // Demo mode: only home and brand are indexable. But robots disallows all anyway.
  // List only the unlocked + legal/system routes here.
  const routes = [
    { url: `${base}/`, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${base}/brand`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/privacy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/cookies`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/sitemap`, changeFrequency: "monthly" as const, priority: 0.3 },
  ];
  return routes.map((r) => ({
    url: r.url,
    lastModified: new Date("2026-07-21"),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
