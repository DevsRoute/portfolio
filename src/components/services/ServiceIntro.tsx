import {
  ServiceEyebrow,
  ServiceHeading,
  ServiceNumberedGrid,
  ServiceSimpleGrid,
} from "@/components/services/ServiceShared";
import type { ServicePageData } from "@/lib/services/service-pages-data";
import { cn } from "@/lib/utils";

export function ServiceIntro({ service }: { service: ServicePageData }) {
  return (
    <section className="border-t border-ink-100 bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
          <div className="lg:pt-2">
            <ServiceHeading
              as="h2"
              title={service.intro.heading}
              accent={service.intro.headingAccent}
            />
          </div>
          <div className="space-y-5 text-sm leading-7 text-ink-500 sm:space-y-6 sm:text-base sm:leading-8">
            {service.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {service.intro.bullets ? (
              <ul className="space-y-2.5 pt-1">
                {service.intro.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceWhatWeBuild({ service }: { service: ServicePageData }) {
  if (!service.whatWeBuild) return null;
  const { whatWeBuild } = service;

  return (
    <section
      className={cn(
        "py-20 sm:py-24 lg:py-28",
        service.slug === "web-application-development" ||
          service.slug === "cloud-devops"
          ? "bg-ink-50/60"
          : "bg-white",
      )}
    >
      <div className="container-site">
        <div className="max-w-2xl">
          {whatWeBuild.eyebrow ? (
            <ServiceEyebrow>{whatWeBuild.eyebrow}</ServiceEyebrow>
          ) : null}
          <ServiceHeading
            as="h2"
            title={whatWeBuild.title}
            accent={whatWeBuild.titleAccent}
            className={whatWeBuild.eyebrow ? "mt-4" : undefined}
          />
        </div>
        <div className="mt-12 border-t border-ink-200 sm:mt-14 lg:mt-16">
          {whatWeBuild.layout === "columns" ? (
            <ServiceSimpleGrid items={whatWeBuild.items} />
          ) : (
            <ServiceNumberedGrid items={whatWeBuild.items} />
          )}
        </div>
      </div>
    </section>
  );
}
