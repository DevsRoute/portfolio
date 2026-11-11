import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const organizationId = `${siteConfig.url}/#organization`;
export const websiteId = `${siteConfig.url}/#website`;

export const defaultOgImage = {
  url: "/brand/og/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "DevsRoute — SaaS MVP development and AI product development",
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  /** Path beginning with `/`, or `/` for the homepage. */
  path: string;
  /** Skip the root title template when the title already includes the brand. */
  absolute?: boolean;
  index?: boolean;
};

/** Canonical, Open Graph, and Twitter tags for one public URL. */
export function pageMetadata({
  title,
  description,
  path,
  absolute = false,
  index = true,
}: PageMetadataOptions): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
  const socialTitle =
    absolute || title.includes(siteConfig.name)
      ? title
      : `${title} | ${siteConfig.name}`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [defaultOgImage.url],
    },
    robots: {
      index,
      follow: true,
    },
  };
}
