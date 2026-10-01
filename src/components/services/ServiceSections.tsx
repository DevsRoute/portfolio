import {
  ServiceHeading,
} from "@/components/services/ServiceShared";
import type { ServicePageData } from "@/lib/services/service-pages-data";

export function ServiceBenefits({ service }: { service: ServicePageData }) {
  if (!service.benefits) return null;

  return (
    <section className="border-y border-ink-100 bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        <ServiceHeading
          as="h2"
          title={service.benefits.title}
          accent={service.benefits.titleAccent}
          className="max-w-2xl"
        />
        <div className="mt-12 divide-y divide-ink-100 sm:mt-14 lg:mt-16">
          {service.benefits.items.map((item) => (
            <div key={item.title} className="grid gap-3 py-6 sm:grid-cols-[16rem_1fr] sm:gap-10 sm:py-7">
              <h3 className="font-heading text-xl font-semibold tracking-tight text-ink-700">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceQualities({ service }: { service: ServicePageData }) {
  if (!service.qualities) return null;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <ServiceHeading
              as="h2"
              title={service.qualities.title}
              accent={service.qualities.titleAccent}
            />
            {service.qualities.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.qualities.items.map((item) => (
              <li
                key={item}
                className="border-t border-ink-200 pt-4 text-sm leading-6 text-ink-600 sm:text-[0.95rem]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ServiceCapabilities({ service }: { service: ServicePageData }) {
  if (!service.capabilities) return null;

  return (
    <section className="bg-ink-50/60 py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        <ServiceHeading
          as="h2"
          title={service.capabilities.title}
          accent={service.capabilities.titleAccent}
        />
        <div className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:gap-12">
          {service.capabilities.groups.map((group) => (
            <div key={group.title} className="border-t border-ink-200 pt-5">
              <h3 className="font-heading text-lg font-semibold text-ink-700">
                {group.title}
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

export function ServiceDesignSections({ service }: { service: ServicePageData }) {
  if (!service.designServices && !service.designPrinciples && !service.whatWeDesign) {
    return null;
  }

  return (
    <>
      {service.designServices ? (
        <section className="bg-ink-50/60 py-20 sm:py-24 lg:py-28">
          <div className="container-site">
            <ServiceHeading
              as="h2"
              title={service.designServices.title}
              accent={service.designServices.titleAccent}
            />
            <ul className="mt-12 grid gap-0 border-t border-ink-200 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
              {service.designServices.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-ink-200 py-5 text-sm font-medium text-ink-700 sm:px-5 sm:py-6"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {service.designPrinciples ? (
        <section className="border-y border-ink-100 bg-white py-20 sm:py-24 lg:py-28">
          <div className="container-site">
            <ServiceHeading
              as="h2"
              title={service.designPrinciples.title}
              accent={service.designPrinciples.titleAccent}
            />
            <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
              {service.designPrinciples.items.map((item) => (
                <div key={item.title} className="border-t border-ink-200 pt-5">
                  <h3 className="font-heading text-lg font-semibold text-ink-700">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-ink-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.whatWeDesign ? (
        <section className="bg-ink-50/60 py-20 sm:py-24 lg:py-28">
          <div className="container-site">
            <ServiceHeading as="h2" title={service.whatWeDesign.title} />
            <ul className="mt-10 flex flex-wrap gap-3">
              {service.whatWeDesign.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}

export function ServiceAiSections({ service }: { service: ServicePageData }) {
  if (!service.aiAutomation && !service.responsibleAi) return null;

  return (
    <>
      {service.aiAutomation ? (
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <div className="container-site">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <ServiceHeading
                as="h2"
                title={service.aiAutomation.title}
                accent={service.aiAutomation.titleAccent}
              />
              <div className="space-y-5 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
                {service.aiAutomation.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {service.responsibleAi ? (
        <section className="border-y border-ink-100 bg-ink-50/60 py-20 sm:py-24 lg:py-28">
          <div className="container-site">
            <ServiceHeading as="h2" title={service.responsibleAi.title} />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.responsibleAi.items.map((item) => (
                <li
                  key={item}
                  className="border-t border-ink-200 pt-4 text-sm leading-7 text-ink-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}

export function ServiceDevopsWhy({ service }: { service: ServicePageData }) {
  if (!service.devopsWhy) return null;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <ServiceHeading
              as="h2"
              title={service.devopsWhy.title}
              accent={service.devopsWhy.titleAccent}
            />
            {service.devopsWhy.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="space-y-3">
            {service.devopsWhy.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 border-t border-ink-200 pt-4 text-sm leading-7 text-ink-600"
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
      </div>
    </section>
  );
}
