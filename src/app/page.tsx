import type { Metadata } from "next";

import { ClientStories } from "@/components/home/ClientStories";
import { ContactCta } from "@/components/home/ContactCta";
import { Hero } from "@/components/home/Hero";
import { IndustryDomains } from "@/components/home/IndustryDomains";
import { OurServices } from "@/components/home/OurServices";
import { ProjectsDelivered } from "@/components/home/ProjectsDelivered";
import { TrustProof } from "@/components/home/TrustProof";
import { WhoWeHelp } from "@/components/home/WhoWeHelp";
import {
  getOrganizationSameAs,
  siteFacts,
} from "@/config/site-facts";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [{ url: "/brand/og/og-default.jpg", width: 1200, height: 630 }],
  },
};

function OrganizationJsonLd() {
  const sameAs = getOrganizationSameAs();
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteFacts.companyName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/devsroute-logo-color.png`,
    email: siteFacts.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Block D, MasterCity",
      addressLocality: "Gujranwala",
      addressCountry: "PK",
    },
    ...(sameAs.length ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <OrganizationJsonLd />
      <Hero />
      <WhoWeHelp />
      <IndustryDomains />
      <OurServices />
      <TrustProof />
      <ProjectsDelivered />
      <ClientStories />
      <ContactCta />
    </main>
  );
}
