import { ServiceCTA, ServiceFAQ, ServiceRelated } from "@/components/services/ServiceClosingSections";
import { ServiceSchema } from "@/components/services/ServiceSchema";
import {
  ServiceBenefitsEditorial,
  ServiceProcessTimeline,
  ServiceTechVisual,
} from "@/components/services/ServiceVisualSections2";
import {
  ServiceVisualBreak,
  ServiceVisualBuild,
  ServiceVisualHero,
  ServiceVisualIntro,
} from "@/components/services/ServiceVisualSections";
import {
  ServiceAiAutomation,
  ServiceAiFlow,
  ServiceDevopsStrip,
  ServiceIndustriesVisual,
  ServiceProjectsShowcase,
  ServiceQualitiesStrip,
  ServiceResponsibleAi,
} from "@/components/services/ServiceVisualSections3";
import type { ServicePageData } from "@/lib/services/service-pages-data";
import { getServiceVisualConfig } from "@/lib/services/service-visual-config";

export function ServicePageContent({ service }: { service: ServicePageData }) {
  const visual = getServiceVisualConfig(service.slug);

  return (
    <>
      <ServiceSchema service={service} />
      <ServiceVisualHero service={service} />
      <ServiceVisualIntro service={service} />
      <ServiceVisualBuild service={service} />
      <ServiceVisualBreak service={service} />

      {service.slug === "web-application-development" ? (
        <ServiceQualitiesStrip service={service} />
      ) : null}

      {service.slug === "cloud-devops" ? (
        <ServiceDevopsStrip service={service} />
      ) : null}

      {service.slug === "ui-ux-design" ? (
        <ServiceBenefitsEditorial service={service} />
      ) : service.benefits ? (
        <ServiceBenefitsEditorial service={service} />
      ) : null}

      <ServiceProcessTimeline service={service} />

      {visual?.showAiFlow ? <ServiceAiFlow /> : null}
      {service.aiAutomation ? <ServiceAiAutomation service={service} /> : null}
      {service.technologies ? <ServiceTechVisual service={service} /> : null}
      {service.responsibleAi ? <ServiceResponsibleAi service={service} /> : null}

      <ServiceIndustriesVisual service={service} />
      <ServiceProjectsShowcase service={service} />
      <ServiceFAQ service={service} />
      <ServiceRelated service={service} />
      <ServiceCTA service={service} />
    </>
  );
}
