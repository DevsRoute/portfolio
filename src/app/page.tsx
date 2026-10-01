import { ClientStories } from "@/components/home/ClientStories";
import { ContactCta } from "@/components/home/ContactCta";
import { Hero } from "@/components/home/Hero";
import { IndustryDomains } from "@/components/home/IndustryDomains";
import { OurServices } from "@/components/home/OurServices";
import { ProjectsDelivered } from "@/components/home/ProjectsDelivered";
// import { TechStack } from "@/components/home/TechStack";
import { TrustProof } from "@/components/home/TrustProof";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <IndustryDomains />
      <OurServices />
      <TrustProof />
      <ProjectsDelivered />
      {/* <TechStack /> */}
      <ClientStories />
      {/* <FaqSection /> */}
      <ContactCta />
    </main>
  );
}
