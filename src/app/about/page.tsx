import type { Metadata } from "next";

import { AboutApproach } from "@/components/about/AboutApproach";
import { AboutCapabilities } from "@/components/about/AboutCapabilities";
import { AboutCta } from "@/components/about/AboutCta";
import { AboutExpertise } from "@/components/about/AboutExpertise";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutMetrics } from "@/components/about/AboutMetrics";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutWhyUs } from "@/components/about/AboutWhyUs";
import { AboutWorkPreview } from "@/components/about/AboutWorkPreview";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about DevsRoute — a software development team focused on building reliable digital products that help businesses grow.",
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      "We build digital products that move businesses forward with thoughtful design, modern engineering, and practical delivery.",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <AboutIntro />
      <AboutCapabilities />
      <AboutApproach />
      <AboutWhyUs />
      <AboutExpertise />
      <AboutMetrics />
      <AboutWorkPreview />
      <AboutTeam />
      <AboutCta />
    </main>
  );
}
