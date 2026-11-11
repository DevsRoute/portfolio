import type { Metadata } from "next";

import { ContactHero, ContactMain } from "@/components/contact/ContactPage";
import { jsonLdScript } from "@/lib/json-ld";
import { organizationId, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const title = "Contact | Start a Project | DevsRoute";
const description =
  "Contact DevsRoute about SaaS MVP development, AI product development, custom software, web apps, and mobile products.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/contact",
  absolute: true,
});

export default function ContactPage() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${siteConfig.url}/contact`,
    name: title,
    description,
    mainEntity: { "@id": organizationId },
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(data) }}
      />
      <ContactHero />
      <ContactMain />
    </main>
  );
}
