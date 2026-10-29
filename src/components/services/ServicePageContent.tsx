import { ServiceAudienceForSlug } from "@/components/services/ServiceAudienceBlock";
import { ServiceCTA, ServiceFAQ, ServiceRelated } from "@/components/services/ServiceClosingSections";
import { ServiceSchema } from "@/components/services/ServiceSchema";
import { ServiceProcessTimeline } from "@/components/services/ServiceVisualSections2";
import {
  ServiceVisualBuild,
  ServiceVisualHero,
  ServiceVisualIntro,
} from "@/components/services/ServiceVisualSections";
import type { ServicePageData } from "@/lib/services/service-pages-data";

export function ServicePageContent({ service }: { service: ServicePageData }) {
  return (
    <>
      <ServiceSchema service={service} />
      <ServiceVisualHero service={service} />
      <ServiceAudienceForSlug slug={service.slug} />
      <ServiceVisualIntro service={service} />
      <ServiceVisualBuild service={service} />
      <ServiceProcessTimeline service={service} />
      <ServiceRelated service={service} />
      <ServiceFAQ service={service} />
      <ServiceCTA service={service} />
    </>
  );
}
