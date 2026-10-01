import type { Metadata } from "next";

import { WorkCta, WorkHero } from "@/components/work/WorkSections";
import { WorkPortfolio } from "@/components/work/WorkPortfolio";
import { workProjects } from "@/lib/work-projects";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute:
      "Our Work | Software Development Projects | DevsRoute",
  },
  description:
    "Explore software, web, mobile, AI, and digital products built by DevsRoute for businesses looking to turn ideas into reliable digital experiences.",
  openGraph: {
    title: "Our Work | Software Development Projects | DevsRoute",
    description:
      "Explore software, web, mobile, AI, and digital products built by DevsRoute for businesses looking to turn ideas into reliable digital experiences.",
  },
};

export default function WorkPage() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our Work | DevsRoute",
    description:
      "Software, web, mobile, and digital products built by DevsRoute.",
    url: `${siteConfig.url}/work`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: workProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.name,
          description: project.description,
          image: `${siteConfig.url}${project.image}`,
          genre: project.category,
        },
      })),
    },
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <WorkHero />
      <WorkPortfolio />
      <WorkCta />
    </main>
  );
}
