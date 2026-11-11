import { jsonLdScript } from "@/lib/json-ld";
import { organizationId } from "@/lib/seo";
import type { ServicePageData } from "@/lib/services/service-pages-data";
import { siteConfig } from "@/lib/site-config";

export function ServiceSchema({ service }: { service: ServicePageData }) {
  const pageUrl = `${siteConfig.url}/services/${service.slug}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.hero.eyebrow,
        item: pageUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: service.hero.eyebrow,
    description: service.meta.description,
    serviceType: service.hero.eyebrow,
    url: pageUrl,
    provider: { "@id": organizationId },
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(serviceSchema) }}
      />
    </>
  );
}
