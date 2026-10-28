import type { Metadata } from "next";

import { ClientStories } from "@/components/home/ClientStories";
import { ContactCta } from "@/components/home/ContactCta";
import { FaqSection } from "@/components/home/FaqSection";
import { homeFaqs } from "@/components/home/faq-data";
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
import { services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  keywords: [
    "SaaS MVP development",
    "AI product development",
    "startup MVP",
    "B2B product development",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: "/brand/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "DevsRoute — SaaS MVP development and AI product development",
      },
    ],
  },
};

function HomeJsonLd() {
  const sameAs = getOrganizationSameAs();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteFacts.companyName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/brand/devsroute-logo-color.png`,
        email: siteFacts.email,
        description: siteConfig.description,
        ...(sameAs.length ? { sameAs } : {}),
      },
      ...services.map((service) => ({
        "@type": "Service",
        name: service.label,
        description: service.description,
        url: `${siteConfig.url}${service.href}`,
        provider: {
          "@type": "Organization",
          name: siteFacts.companyName,
          url: siteConfig.url,
        },
      })),
      {
        "@type": "FAQPage",
        mainEntity: homeFaqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
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
      <HomeJsonLd />
      <Hero />
      <WhoWeHelp />
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
