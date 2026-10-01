import {
  ServiceEyebrow,
  ServiceHeading,
} from "@/components/services/ServiceShared";
import type { ServicePageData } from "@/lib/services/service-pages-data";
import { cn } from "@/lib/utils";

export function ServiceProcess({ service }: { service: ServicePageData }) {
  const horizontal = service.process.layout === "horizontal";

  return (
    <section
      className={cn(
        "py-20 sm:py-24 lg:py-28",
        service.slug === "custom-software-development" ||
          service.slug === "ui-ux-design"
          ? "bg-ink-50/60"
          : "bg-white",
      )}
    >
      <div className="container-site">
        <div className="max-w-2xl">
          {service.process.eyebrow ? (
            <ServiceEyebrow>{service.process.eyebrow}</ServiceEyebrow>
          ) : null}
          <ServiceHeading
            as="h2"
            title={service.process.title}
            accent={service.process.titleAccent}
            className={service.process.eyebrow ? "mt-4" : undefined}
          />
        </div>

        <ol
          className={cn(
            "mt-12 sm:mt-14 lg:mt-16",
            horizontal
              ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              : "grid gap-8 lg:grid-cols-4 xl:grid-cols-7",
          )}
        >
          {service.process.steps.map((step, index) => (
            <li key={step.title} className="relative border-t border-ink-200 pt-5">
              <span className="font-mono text-sm tracking-wide text-brand-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight text-ink-700 sm:text-xl">
                {step.title}
              </h3>
              {step.description ? (
                <p className="mt-2 text-sm leading-7 text-ink-500">
                  {step.description}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ServiceTechnologies({ service }: { service: ServicePageData }) {
  if (!service.technologies) return null;

  return (
    <section className="border-t border-ink-100 bg-ink-50/60 py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        <div className="max-w-2xl">
          {service.technologies.eyebrow ? (
            <ServiceEyebrow>{service.technologies.eyebrow}</ServiceEyebrow>
          ) : null}
          <ServiceHeading
            as="h2"
            title={service.technologies.title}
            accent={service.technologies.titleAccent}
            className={service.technologies.eyebrow ? "mt-4" : undefined}
          />
        </div>
        <div className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {service.technologies.groups.map((group) => (
            <div key={group.category} className="border-t border-ink-200 pt-5">
              <h3 className="font-heading text-lg font-semibold text-ink-700">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-6 text-ink-500">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceIndustries({ service }: { service: ServicePageData }) {
  if (!service.industries) return null;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        <ServiceHeading
          as="h2"
          title={service.industries.title}
          accent={service.industries.titleAccent}
        />
        <ul className="mt-10 flex flex-wrap gap-3">
          {service.industries.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-ink-200 px-4 py-2 text-sm font-medium text-ink-600"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServiceUseCases({ service }: { service: ServicePageData }) {
  if (!service.useCases) return null;

  return (
    <section className="border-y border-ink-100 bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        <ServiceHeading
          as="h2"
          title={service.useCases.title}
          accent={service.useCases.titleAccent}
        />
        <ul className="mt-10 space-y-4">
          {service.useCases.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border-t border-ink-100 pt-4 text-sm leading-7 text-ink-600 sm:text-base"
            >
              <span
                aria-hidden
                className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
