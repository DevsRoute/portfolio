"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, Mail, Minus, Plus } from "lucide-react";

import { ServiceContainer, ServiceSection } from "@/components/services/ServiceLayout";
import { Button } from "@/components/ui/button";
import {
  ServiceEyebrow,
  ServiceHeading,
} from "@/components/services/ServiceShared";
import {
  getServicePage,
  type ServicePageData,
} from "@/lib/services/service-pages-data";
import { services, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function ServiceFaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div
      className={cn(
        "rounded-[1.25rem] border border-[#E6EBF3] bg-white transition-shadow",
        open && "shadow-[0_12px_32px_rgb(29_129_242/0.08)]",
      )}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
      >
        <h3
          className={cn(
            "font-heading text-lg font-semibold tracking-tight transition-colors sm:text-xl",
            open ? "text-[#1d81f2]" : "text-ink-700",
          )}
        >
          {question}
        </h3>
        <span
          className={cn(
            "inline-flex size-10 shrink-0 items-center justify-center rounded-full transition-colors",
            open
              ? "bg-[#1d81f2] text-white"
              : "border border-[#DCE3F0] bg-white text-ink-700",
          )}
        >
          {open ? (
            <Minus className="size-4" strokeWidth={2.4} />
          ) : (
            <Plus className="size-4" strokeWidth={2.4} />
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
          <p className="max-w-2xl px-6 pb-6 text-sm leading-7 text-ink-500 sm:px-8 sm:pb-7 sm:text-[0.95rem] sm:leading-7">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ServiceFAQ({ service }: { service: ServicePageData }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ServiceSection tone="soft">
      <ServiceContainer>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="w-full shrink-0 lg:max-w-[22rem] xl:max-w-[25rem]">
            <ServiceEyebrow>FAQ</ServiceEyebrow>
            <ServiceHeading
              as="h2"
              title="Questions,"
              accent="answered."
              className="mt-4"
            />
            <p className="mt-4 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
              Still deciding if this service fits? Ask us anything about scope,
              timeline, or how we work.
            </p>
            <Link
              href={siteConfig.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-700 transition-colors hover:text-[#1d81f2]"
            >
              {siteConfig.cta.label}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-3">
            {service.faq.map((item, index) => (
              <ServiceFaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                open={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? -1 : index))
                }
              />
            ))}
          </div>
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}

export function ServiceRelated({ service }: { service: ServicePageData }) {
  const related = service.relatedSlugs
    .map((slug) => getServicePage(slug))
    .filter((page): page is ServicePageData => Boolean(page));

  return (
    <ServiceSection tone="white">
      <ServiceContainer>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <ServiceHeading as="h2" title="Related" accent="Services." />
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 transition-colors hover:text-[#1d81f2]"
          >
            All services
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 divide-y divide-ink-100 border-y border-ink-100 sm:mt-12">
          {related.map((page) => {
            const navItem = services.find((item) =>
              item.href.includes(page.slug),
            );

            return (
              <Link
                key={page.slug}
                href={`/services/${page.slug}`}
                className="group grid gap-2 py-6 transition-colors sm:grid-cols-[minmax(0,14rem)_1fr_auto] sm:items-center sm:gap-8 sm:py-7"
              >
                <p className="font-mono text-xs tracking-[0.14em] text-[#1d81f2] uppercase">
                  {page.hero.eyebrow}
                </p>
                <div>
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-ink-700 transition-colors group-hover:text-[#1d81f2]">
                    {navItem?.label ?? page.hero.eyebrow}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-ink-500">
                    {navItem?.description ?? page.hero.supporting}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 transition-colors group-hover:text-[#1d81f2]">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-ink-700 transition-colors hover:text-[#1d81f2]"
          >
            View our work
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/approach"
            className="inline-flex items-center gap-2 text-ink-700 transition-colors hover:text-[#1d81f2]"
          >
            Our approach
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}

export function ServiceCTA({ service }: { service: ServicePageData }) {
  const formId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const subject = encodeURIComponent(
      `${service.cta.buttonLabel} — DevsRoute`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Service: ${service.hero.eyebrow}`,
        "",
        message.trim() || "—",
      ].join("\n"),
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <ServiceSection tone="white" className="!pt-10 sm:!pt-12 lg:!pt-14">
      <ServiceContainer>
        <div className="overflow-hidden rounded-[1.75rem] bg-[#1d81f2] bg-[length:48px_48px] p-7 text-white sm:rounded-[2rem] sm:p-10 lg:p-14 xl:p-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-14 xl:gap-16">
            <div className="flex min-w-0 flex-1 flex-col gap-6 lg:gap-7">
              <ServiceEyebrow className="text-white/80">
                {service.cta.eyebrow}
              </ServiceEyebrow>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.08] xl:text-[3.25rem]">
                {service.cta.title}
                {service.cta.titleAccent ? (
                  <>
                    {" "}
                    <span className="text-white/80">{service.cta.titleAccent}</span>
                  </>
                ) : null}
              </h2>
              <p className="max-w-md text-sm leading-7 text-white/88 sm:text-base sm:leading-8">
                {service.cta.description}
              </p>

              <div className="mt-1 flex flex-col gap-3.5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex w-fit items-center gap-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:text-base"
                >
                  <Mail className="size-5 shrink-0" strokeWidth={2} />
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.calendly.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:text-base"
                >
                  <CalendarDays className="size-5 shrink-0" strokeWidth={2} />
                  {siteConfig.calendly.label}
                </a>
              </div>

              <Button
                href={siteConfig.cta.href}
                size="lg"
                variant="light"
                className="mt-2 w-fit"
              >
                {siteConfig.cta.label}
              </Button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex w-full shrink-0 flex-col gap-5 rounded-2xl bg-white p-6 text-ink-700 sm:p-8 lg:max-w-[28rem] xl:max-w-[32rem]"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor={`${formId}-name`}
                    className="text-xs font-semibold tracking-wide text-ink-700"
                  >
                    Name
                  </label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="h-12 rounded-xl border border-[#DCE3F0] px-3.5 text-sm text-ink-700 outline-none transition-colors placeholder:text-ink-400 focus:border-[#1d81f2]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor={`${formId}-email`}
                    className="text-xs font-semibold tracking-wide text-ink-700"
                  >
                    Email
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-12 rounded-xl border border-[#DCE3F0] px-3.5 text-sm text-ink-700 outline-none transition-colors placeholder:text-ink-400 focus:border-[#1d81f2]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor={`${formId}-message`}
                  className="text-xs font-semibold tracking-wide text-ink-700"
                >
                  Message
                </label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  rows={4}
                  placeholder="Share a short overview of your idea or project…"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="resize-none rounded-xl border border-[#DCE3F0] px-3.5 py-3.5 text-sm text-ink-700 outline-none transition-colors placeholder:text-ink-400 focus:border-[#1d81f2]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-1 w-full bg-[#1d81f2] text-white hover:bg-[#1d81f2]/90 [&_[data-slot=btn-arrow]]:bg-white [&_[data-slot=btn-arrow]]:text-[#1d81f2]"
              >
                {submitted ? "Opening email…" : "Start a conversation"}
              </Button>
            </form>
          </div>
        </div>
      </ServiceContainer>
    </ServiceSection>
  );
}
