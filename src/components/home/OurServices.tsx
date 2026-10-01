"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";

import {
  featuredServices,
  type FeaturedService,
} from "@/components/home/featured-services";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function formatIndex(index: number) {
  return `//${String(index + 1).padStart(2, "0")}`;
}

function ServiceAccordionItem({
  service,
  index,
  open,
  onToggle,
}: {
  service: FeaturedService;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border-b border-ink-100">
      <button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="group flex w-full items-center gap-4 py-5 text-left sm:gap-6 sm:py-6 lg:gap-10 lg:py-7"
      >
        <span className="w-10 shrink-0 font-mono text-xs tracking-wide text-ink-400 sm:w-12 sm:text-sm">
          {formatIndex(index)}
        </span>

        <span
          className={cn(
            "min-w-0 flex-1 font-heading text-xl font-semibold tracking-tight transition-colors sm:text-2xl lg:text-[1.85rem]",
            open ? "text-brand-600" : "text-ink-700 group-hover:text-brand-600",
          )}
        >
          {service.title}
        </span>

        <span
          className={cn(
            "inline-flex size-10 shrink-0 items-center justify-center rounded-full transition-colors sm:size-11",
            open
              ? "bg-brand-500 text-white"
              : "bg-ink-800 text-white group-hover:bg-brand-600",
          )}
        >
          {open ? (
            <Minus className="size-4 sm:size-5" strokeWidth={2.25} />
          ) : (
            <Plus className="size-4 sm:size-5" strokeWidth={2.25} />
          )}
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-6 pb-7 pl-0 sm:pb-8 sm:pl-12 lg:flex-row lg:gap-10 lg:pb-10 lg:pl-[4.5rem]">
            <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-2xl bg-ink-100 sm:h-56 lg:h-52 lg:w-72 xl:w-80">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="max-w-2xl text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
                {service.description}
              </p>

              <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:mt-6 sm:grid-cols-2">
                {service.offerings.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm font-medium text-ink-700 sm:text-[0.95rem]"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              >
                Learn more
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OurServices() {
  const [openId, setOpenId] = useState<string>(featuredServices[0].id);

  function toggle(id: string) {
    setOpenId((current) => (current === id ? "" : id));
  }

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site relative">
        <div className="relative mb-10 flex flex-col gap-5 sm:mb-12 lg:mb-14 lg:min-h-14 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:max-w-sm lg:text-[2.75rem] lg:leading-[1.12]">
            <span className="text-brand-500">Services</span>{" "}
            <span className="text-ink-700">We Offer</span>
          </h2>

          <p className="max-w-xs text-sm leading-7 text-ink-500 sm:text-base sm:leading-8 lg:absolute lg:left-1/2 lg:max-w-[14rem] lg:-translate-x-1/2 lg:text-center">
            From strategy to delivery. Engineering that ships.
          </p>

          <Button href="/#services" size="lg" className="w-fit">
            View all services
          </Button>
        </div>

        <div className="border-t border-ink-100">
          {featuredServices.map((service, index) => (
            <ServiceAccordionItem
              key={service.id}
              service={service}
              index={index}
              open={openId === service.id}
              onToggle={() => toggle(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
