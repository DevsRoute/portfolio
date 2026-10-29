import { ServiceContainer, ServiceSection } from "@/components/services/ServiceLayout";
import { ServiceHeading } from "@/components/services/ServiceShared";
import type { ServicePageData } from "@/lib/services/service-pages-data";

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ServiceBenefitsEditorial({ service }: { service: ServicePageData }) {
  const benefits =
    service.benefits?.items ??
    service.designPrinciples?.items ??
    service.whyChooseUs?.items ??
    [];

  if (benefits.length === 0) return null;

  const title =
    service.benefits?.title ??
    service.designPrinciples?.title ??
    "Why It";
  const accent =
    service.benefits?.titleAccent ??
    service.designPrinciples?.titleAccent ??
    "Matters.";

  return (
    <ServiceSection tone="white">
      <ServiceContainer>
        <ServiceHeading as="h2" title={title} accent={accent} className="max-w-2xl" />
        <div className="mt-12 divide-y divide-ink-100 sm:mt-14">
          {benefits.slice(0, 5).map((item, index) => (
            <div
              key={item.title}
              className="grid gap-4 py-6 sm:grid-cols-[5rem_1fr] sm:gap-8 sm:py-7"
            >
              <span className="font-mono text-sm tracking-wide text-[#1d81f2]">
                {formatIndex(index)}
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-ink-700">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-500 sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}

export function ServiceProcessTimeline({ service }: { service: ServicePageData }) {
  const steps = service.process.steps;

  return (
    <ServiceSection tone="soft">
      <ServiceContainer>
        <div className="max-w-2xl">
          {service.process.eyebrow ? (
            <p className="font-mono text-xs tracking-[0.14em] text-[#1d81f2] uppercase sm:text-[0.8rem]">
              {service.process.eyebrow}
            </p>
          ) : null}
          <ServiceHeading
            as="h2"
            title={service.process.title}
            accent={service.process.titleAccent}
            className={service.process.eyebrow ? "mt-4" : undefined}
          />
        </div>

        <ol className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="flex size-10 items-center justify-center rounded-full border border-ink-200 bg-white font-mono text-sm text-[#1d81f2]">
                {formatIndex(index)}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight text-ink-700">
                {step.title}
              </h3>
              {step.description ? (
                <p className="mt-2 text-sm leading-6 text-ink-500">
                  {step.description}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </ServiceContainer>
    </ServiceSection>
  );
}

export function ServiceTechVisual({ service }: { service: ServicePageData }) {
  if (!service.technologies) return null;

  return (
    <ServiceSection tone="white">
      <ServiceContainer>
        <div className="max-w-2xl">
          {service.technologies.eyebrow ? (
            <p className="font-mono text-xs tracking-[0.14em] text-[#1d81f2] uppercase sm:text-[0.8rem]">
              {service.technologies.eyebrow}
            </p>
          ) : null}
          <ServiceHeading
            as="h2"
            title={service.technologies.title}
            accent={service.technologies.titleAccent}
            className={service.technologies.eyebrow ? "mt-4" : undefined}
          />
        </div>
        <div className="mt-12 grid gap-10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {service.technologies.groups.map((group) => (
            <div key={group.category} className="border-t border-ink-200 pt-5">
              <h3 className="font-heading text-lg font-semibold text-ink-700">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[#DCE3F0] bg-[#F4F7FC] px-3.5 py-1.5 text-sm text-ink-600 transition-colors hover:border-[#1d81f2]/40 hover:text-[#1d81f2]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}
