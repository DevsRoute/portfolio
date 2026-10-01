import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ServiceContainer, ServiceSection } from "@/components/services/ServiceLayout";
import {
  MobileAppsMockup,
  ServiceHeroVisual,
  UiUxDesignMockup,
} from "@/components/services/ServiceMockups";
import {
  ServiceEyebrow,
  ServiceHeading,
} from "@/components/services/ServiceShared";
import { Button } from "@/components/ui/button";
import type { ServicePageData } from "@/lib/services/service-pages-data";
import { getServiceVisualConfig } from "@/lib/services/service-visual-config";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ServiceVisualHero({ service }: { service: ServicePageData }) {
  const visual = getServiceVisualConfig(service.slug);
  if (!visual) return null;

  const imageRight = service.hero.imagePosition !== "left";
  const secondaryCta = service.hero.secondaryCta ?? {
    label: "View Our Work",
    href: "/work",
  };

  return (
    <ServiceSection
      tone={visual.heroTone}
      className="overflow-hidden pt-40 pb-20 sm:pt-44 sm:pb-24 lg:pt-48 lg:pb-28"
    >
      <ServiceContainer>
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16",
            !imageRight &&
              "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
          )}
        >
          <div className="max-w-xl">
            <ServiceEyebrow>{service.hero.eyebrow}</ServiceEyebrow>
            <ServiceHeading
              as="h1"
              title={service.hero.heading}
              accent={service.hero.headingAccent}
              className="mt-4"
            />
            <p className="mt-5 max-w-lg text-base leading-7 text-ink-500 sm:text-lg sm:leading-8">
              {service.hero.supporting}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={siteConfig.cta.href} size="lg">
                {siteConfig.cta.label}
              </Button>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 transition-colors hover:text-[#1d81f2]"
              >
                {secondaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="relative lg:pl-4">
            <ServiceHeroVisual type={visual.visualType} />
          </div>
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}

export function ServiceVisualIntro({ service }: { service: ServicePageData }) {
  const visual = getServiceVisualConfig(service.slug);
  if (!visual) return null;

  const reverse = visual.intro.reverse;

  return (
    <ServiceSection tone="white">
      <ServiceContainer>
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100">
            <Image
              src={visual.intro.image}
              alt={visual.intro.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <ServiceHeading
              as="h2"
              title={service.intro.heading}
              accent={service.intro.headingAccent}
            />
            <div className="mt-5 space-y-4 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
              {service.intro.paragraphs.slice(0, 2).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {service.intro.bullets ? (
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {service.intro.bullets.slice(0, 4).map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-sm text-ink-600"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#1d81f2]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}

export function ServiceVisualBuild({ service }: { service: ServicePageData }) {
  const visual = getServiceVisualConfig(service.slug);
  if (!visual || !service.whatWeBuild) return null;

  return (
    <ServiceSection tone="soft">
      <ServiceContainer>
        <div className="max-w-2xl">
          {service.whatWeBuild.eyebrow ? (
            <ServiceEyebrow>{service.whatWeBuild.eyebrow}</ServiceEyebrow>
          ) : null}
          <ServiceHeading
            as="h2"
            title={service.whatWeBuild.title}
            accent={service.whatWeBuild.titleAccent}
            className={service.whatWeBuild.eyebrow ? "mt-4" : undefined}
          />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-14 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {visual.buildItems.map((item) => (
            <article key={item.title} className="group">
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-ink-100">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-4 sm:pt-5">
                <h3 className="font-heading text-lg font-semibold tracking-tight text-ink-700 transition-colors group-hover:text-[#1d81f2] sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-500">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}

export function ServiceVisualBreak({ service }: { service: ServicePageData }) {
  const visual = getServiceVisualConfig(service.slug);
  if (!visual) return null;

  if (visual.visualType === "mobile-apps") {
    return (
      <ServiceSection tone="white" className="!py-20 sm:!py-24 lg:!py-28">
        <ServiceContainer>
          <div className="mx-auto max-w-4xl rounded-3xl bg-[#F4F7FC] px-6 py-10 sm:px-10 sm:py-14">
            <MobileAppsMockup />
            {visual.visualBreak.caption ? (
              <p className="mt-8 text-center text-sm text-ink-500 sm:text-base">
                {visual.visualBreak.caption}
              </p>
            ) : null}
          </div>
        </ServiceContainer>
      </ServiceSection>
    );
  }

  if (visual.visualType === "ui-ux-design") {
    return (
      <ServiceSection tone="white" className="!py-20 sm:!py-24 lg:!py-28">
        <ServiceContainer>
          <div className="mx-auto max-w-4xl">
            <UiUxDesignMockup className="min-h-[22rem]" />
            {visual.visualBreak.caption ? (
              <p className="mt-8 text-center text-sm text-ink-500 sm:text-base">
                {visual.visualBreak.caption}
              </p>
            ) : null}
          </div>
        </ServiceContainer>
      </ServiceSection>
    );
  }

  return (
    <ServiceSection tone="white" className="!py-20 sm:!py-24 lg:!py-28">
      <ServiceContainer>
        <div className="relative overflow-hidden rounded-3xl bg-ink-100">
          <div className="relative aspect-[16/8] sm:aspect-[16/7] lg:aspect-[16/6]">
            <Image
              src={visual.visualBreak.image}
              alt={visual.visualBreak.imageAlt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-ink-950/10 to-transparent" />
            {visual.visualBreak.caption ? (
              <p className="absolute right-0 bottom-0 left-0 p-6 text-sm font-medium text-white sm:p-8 sm:text-base">
                {visual.visualBreak.caption}
              </p>
            ) : null}
          </div>
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}
