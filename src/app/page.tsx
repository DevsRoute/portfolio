import type { Metadata } from "next";

import { ClientStories } from "@/components/home/ClientStories";
import { ContactCta } from "@/components/home/ContactCta";
import { FaqSection } from "@/components/home/FaqSection";
import { Hero } from "@/components/home/Hero";
import { IndustryDomains } from "@/components/home/IndustryDomains";
import { OurServices } from "@/components/home/OurServices";
import { ProjectsDelivered } from "@/components/home/ProjectsDelivered";
import { TrustProof } from "@/components/home/TrustProof";
import {
  getOrganizationSameAs,
  siteFacts,
} from "@/config/site-facts";
import { jsonLdScript } from "@/lib/json-ld";
import { organizationId, pageMetadata, websiteId } from "@/lib/seo";
import { services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  ...pageMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/",
    absolute: true,
  }),
  keywords: [
    "SaaS MVP development",
    "AI product development",
    "startup MVP",
    "B2B product development",
  ],
};

function HomeJsonLd() {
  const sameAs = getOrganizationSameAs();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteFacts.companyName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/brand/favicon-512.png`,
        email: siteFacts.email,
        description: siteConfig.description,
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteFacts.companyName,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: { "@id": organizationId },
      },
      {
        "@type": "ItemList",
        name: "DevsRoute services",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.label,
          url: `${siteConfig.url}${service.href}`,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(data) }}
    />
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <HomeJsonLd />
      <Hero />
      <IndustryDomains />
      <OurServices />
      <TrustProof />
      <ProjectsDelivered />
      <ClientStories />
      <FaqSection />
      <ContactCta />
    </main>
  );
}
