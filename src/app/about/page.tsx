import type { Metadata } from "next";

import { AboutApproach } from "@/components/about/AboutApproach";
import { AboutCapabilities } from "@/components/about/AboutCapabilities";
import { AboutCta } from "@/components/about/AboutCta";
import { AboutExpertise } from "@/components/about/AboutExpertise";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutMetrics } from "@/components/about/AboutMetrics";
import { AboutWhyUs } from "@/components/about/AboutWhyUs";
import { AboutWorkPreview } from "@/components/about/AboutWorkPreview";
import { pageMetadata } from "@/lib/seo";

const description =
  "Remote software studio for startups and B2B founders. SaaS MVP development and AI product development, with a clear scope and a defined end date.";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description,
  path: "/about",
});

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
      {/* <AboutTeam /> */}
      <AboutCta />
    </main>
  );
}
