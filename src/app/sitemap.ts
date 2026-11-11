import type { MetadataRoute } from "next";

import { siteFacts } from "@/config/site-facts";
import { getProjectSlugs } from "@/data/projects";
import { getServicePageSlugs } from "@/lib/services/service-pages-data";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = getServicePageSlugs().map((slug) => ({
    url: `${siteConfig.url}/services/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const workPages = getProjectSlugs(siteFacts.showConcepts).map((slug) => ({
    url: `${siteConfig.url}/work/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/founders`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/ai-features`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/work`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/approach`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/contact`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/privacy`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteConfig.url}/terms`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    ...servicePages,
    ...workPages,
  ];
}
