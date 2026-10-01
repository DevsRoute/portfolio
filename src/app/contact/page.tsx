import type { Metadata } from "next";

import { ContactHero, ContactMain } from "@/components/contact/ContactPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Contact | Start a Project | DevsRoute",
  },
  description:
    "Get in touch with DevsRoute to discuss custom software, web apps, mobile products, AI solutions, and product design.",
  openGraph: {
    title: "Contact | Start a Project | DevsRoute",
    description:
      "Tell us what you're building. We'll help you shape the right path from idea to launch.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ContactHero />
      <ContactMain />
    </main>
  );
}
