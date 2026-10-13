import type { Metadata } from "next";
import { siteConfig } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** Legal and utility pages stay out of the index but keep link equity flowing. */
  noindex?: boolean;
  /** Use the title as-is instead of applying the "| IRON TV MAX" template. */
  absoluteTitle?: boolean;
};

export function pageMetadata({ title, description, path, noindex, absoluteTitle }: PageSeo): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url,
      title: fullTitle,
      description,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
  };
}
