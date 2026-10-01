import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  ServiceEyebrow,
  ServiceHeading,
} from "@/components/services/ServiceShared";
import { Button } from "@/components/ui/button";
import type { ServicePageData } from "@/lib/services/service-pages-data";
import { cn } from "@/lib/utils";

export function ServiceHero({ service }: { service: ServicePageData }) {
  const imageRight = service.hero.imagePosition !== "left";

  return (
    <section className="relative overflow-hidden bg-white pt-40 pb-20 sm:pt-44 sm:pb-24 lg:pt-48 lg:pb-28">
      <div className="container-site">
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20",
            !imageRight && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
          )}
        >
          <div className="max-w-2xl">
            <ServiceEyebrow>{service.hero.eyebrow}</ServiceEyebrow>
            <ServiceHeading
              as="h1"
              title={service.hero.heading}
              accent={service.hero.headingAccent}
              className="mt-4"
            />
            <p className="mt-6 max-w-xl text-base leading-7 text-ink-500 sm:text-lg sm:leading-8">
              {service.hero.supporting}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={service.hero.cta.href} size="lg">
                {service.hero.cta.label}
              </Button>
              {service.hero.secondaryCta ? (
                <Link
                  href={service.hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  {service.hero.secondaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
              ) : null}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100 sm:aspect-[5/4] lg:aspect-[4/3]">
              <Image
                src={service.hero.image}
                alt={service.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden
              className={cn(
                "absolute -z-10 hidden h-full w-full rounded-2xl bg-brand-50 lg:block",
                imageRight ? "-right-4 -bottom-4" : "-bottom-4 -left-4",
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
