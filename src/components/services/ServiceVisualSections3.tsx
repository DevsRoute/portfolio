import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ServiceContainer, ServiceSection } from "@/components/services/ServiceLayout";
import { ServiceHeading } from "@/components/services/ServiceShared";
import { siteFacts } from "@/config/site-facts";
import { getFeaturedProjects } from "@/data/projects";
import type { ServicePageData } from "@/lib/services/service-pages-data";
import { getServiceVisualConfig } from "@/lib/services/service-visual-config";

export function ServiceAiAutomation({ service }: { service: ServicePageData }) {
  if (!service.aiAutomation) return null;

  return (
    <ServiceSection tone="soft">
      <ServiceContainer>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <ServiceHeading
            as="h2"
            title={service.aiAutomation.title}
            accent={service.aiAutomation.titleAccent}
          />
          <div className="space-y-4 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
            {service.aiAutomation.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}

export function ServiceIndustriesVisual({ service }: { service: ServicePageData }) {
  const visual = getServiceVisualConfig(service.slug);
  if (!visual) return null;

  return (
    <ServiceSection tone="white">
      <ServiceContainer>
        <ServiceHeading
          as="h2"
          title={service.industries?.title ?? "Industries We"}
          accent={service.industries?.titleAccent ?? "Work With."}
        />
        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {visual.industryBlocks.map((block) => (
            <article key={block.name} className="group">
              <div className="relative aspect-16/9 overflow-hidden rounded-2xl bg-ink-100">
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-4 sm:pt-5">
                <h3 className="font-heading text-lg font-semibold text-ink-700 transition-colors group-hover:text-[#1d81f2] sm:text-xl">
                  {block.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-500">
                  {block.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}

export function ServiceAiFlow() {
  const steps = [
    { label: "Data", description: "Business inputs, documents, and product context" },
    { label: "AI", description: "Models, retrieval, and intelligent processing" },
    { label: "Automation", description: "Workflow actions and system integrations" },
    { label: "Result", description: "Faster decisions and measurable outcomes" },
  ];

  return (
    <ServiceSection tone="white">
      <ServiceContainer>
        <ServiceHeading
          as="h2"
          title="From AI Idea to"
          accent="Working Product."
        />
        <div className="mt-12 grid gap-0 border-y border-ink-100 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.label}
              className="border-b border-ink-100 py-6 sm:border-r sm:px-5 sm:py-7 lg:border-b-0 lg:px-6 [&:nth-child(2n)]:sm:border-r-0 [&:nth-child(4n)]:lg:border-r-0"
            >
              <p className="font-mono text-xs tracking-wide text-[#1d81f2]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-heading text-lg font-semibold text-ink-700">
                {step.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-500">{step.description}</p>
            </div>
          ))}
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}

export function ServiceResponsibleAi({ service }: { service: ServicePageData }) {
  if (!service.responsibleAi) return null;

  return (
    <ServiceSection tone="soft">
      <ServiceContainer>
        <ServiceHeading as="h2" title={service.responsibleAi.title} />
        <ul className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {service.responsibleAi.items.map((item) => (
            <li
              key={item}
              className="border-t border-ink-200 py-5 text-sm leading-6 text-ink-600 sm:pr-6"
            >
              {item}
            </li>
          ))}
        </ul>
      </ServiceContainer>
    </ServiceSection>
  );
}

export function ServiceProjectsShowcase({ service }: { service: ServicePageData }) {
  const visual = getServiceVisualConfig(service.slug);
  if (!visual) return null;

  const projects = getFeaturedProjects(siteFacts.showConcepts).slice(0, 3);
  if (projects.length === 0) return null;

  return (
    <ServiceSection tone="dark" className="!py-20 sm:!py-24">
      <ServiceContainer>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <ServiceHeading
            as="h2"
            title="Related"
            accent="Work."
            className="text-white [&_span]:text-white/75"
          />
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-colors hover:text-white"
          >
            View All Projects
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-white/10">
                <Image
                  src={project.screenshot}
                  alt={project.screenshotAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-5">
                <p className="text-[0.65rem] font-medium tracking-[0.14em] text-white/70 uppercase">
                  {project.category}
                </p>
                <h3 className="mt-2 font-heading text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/75">
                  Our role: {project.roleSummary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}

export function ServiceQualitiesStrip({ service }: { service: ServicePageData }) {
  if (!service.qualities) return null;

  return (
    <ServiceSection tone="white">
      <ServiceContainer>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <ServiceHeading
            as="h2"
            title={service.qualities.title}
            accent={service.qualities.titleAccent}
          />
          <ul className="grid gap-0 sm:grid-cols-2">
            {service.qualities.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 border-t border-ink-100 py-4 text-sm text-ink-600"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-[#1d81f2]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}

export function ServiceDevopsStrip({ service }: { service: ServicePageData }) {
  if (!service.devopsWhy) return null;

  return (
    <ServiceSection tone="white">
      <ServiceContainer>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <ServiceHeading
              as="h2"
              title={service.devopsWhy.title}
              accent={service.devopsWhy.titleAccent}
            />
            {service.devopsWhy.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-sm leading-7 text-ink-500 sm:text-base">
                {p}
              </p>
            ))}
          </div>
          <ul className="space-y-0">
            {service.devopsWhy.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 border-t border-ink-200 py-4 text-sm leading-6 text-ink-600"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#1d81f2]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}
