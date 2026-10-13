import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Only indexable pages; legal pages are noindex and intentionally excluded.
const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/tarifs", priority: 0.9, changeFrequency: "weekly" },
  { path: "/remises", priority: 0.6, changeFrequency: "monthly" },
  { path: "/tutoriels", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${siteConfig.url}${r.path === "/" ? "" : r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
