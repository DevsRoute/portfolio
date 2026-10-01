"use client";

import { useState } from "react";
import Image from "next/image";

import { AboutEyebrow } from "@/components/about/AboutSectionHeading";
import {
  approachCommunication,
  approachPrinciples,
  approachProcess,
  approachTechGroups,
  approachTimeline,
} from "@/lib/approach-data";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ApproachHero() {
  return (
    <section className="overflow-hidden bg-[#F4F7FC] pt-40 pb-16 sm:pt-44 sm:pb-20 lg:pt-48 lg:pb-24">
      <div className="container-site">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <AboutEyebrow>Our Approach</AboutEyebrow>
            <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] xl:text-[3.1rem]">
              A Clear Process From First Idea to{" "}
              <span className="text-[#1d81f2]">Final Product.</span>
            </h1>
            <p className="mt-5 text-base leading-7 text-ink-500 sm:text-lg sm:leading-8">
              Great digital products don&apos;t happen by accident. We combine
              strategy, thoughtful design, modern engineering, and continuous
              improvement to turn ideas into products people can rely on.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100">
            <Image
              src="/brand/services/ui-ux-design-v2.jpg"
              alt="Product design and development workflow with interface screens"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ApproachProcess() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <h2 className="max-w-2xl font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
          Simple Process.{" "}
          <span className="text-[#1d81f2]">Serious Execution.</span>
        </h2>

        <div className="relative mt-14 hidden lg:block">
          <div aria-hidden className="absolute top-5 right-0 left-0 h-px bg-ink-200" />
          <ol className="grid grid-cols-5 gap-6">
            {approachProcess.map((step, index) => (
              <li key={step.number}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="w-full text-left"
                >
                  <div
                    className={cn(
                      "relative z-10 mb-4 flex size-10 items-center justify-center rounded-full border font-mono text-sm transition-colors",
                      active === index
                        ? "border-[#1d81f2] bg-[#1d81f2] text-white"
                        : "border-ink-200 bg-white text-[#1d81f2]",
                    )}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-ink-700">
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-6 text-ink-500 transition-opacity",
                      active === index ? "opacity-100" : "opacity-65",
                    )}
                  >
                    {step.description}
                  </p>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <ol className="relative mt-12 space-y-8 lg:hidden">
          <div aria-hidden className="absolute top-2 bottom-2 left-5 w-px bg-ink-200" />
          {approachProcess.map((step) => (
            <li key={step.number} className="relative pl-12">
              <span className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-full border border-[#1d81f2]/30 bg-white font-mono text-sm text-[#1d81f2]">
                {step.number}
              </span>
              <h3 className="font-heading text-lg font-semibold text-ink-700">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-500">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ApproachCollaboration() {
  return (
    <section className="bg-[#F4F7FC] py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100">
            <Image
              src="/brand/services/custom-software-v2.jpg"
              alt="Product team collaborating on software design and development"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              You Stay Involved.{" "}
              <span className="text-[#1d81f2]">We Handle the Complexity.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
              You don&apos;t need to manage every technical detail. We keep
              communication clear and involve you at the important decision
              points while our team handles design, development, testing,
              deployment, and technical execution.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
              That means fewer surprises, faster decisions, and a product
              direction that stays aligned with your business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ApproachPrinciples() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <h2 className="max-w-2xl font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
          How We Think About{" "}
          <span className="text-[#1d81f2]">Building Products.</span>
        </h2>
        <div className="mt-12 divide-y divide-ink-100 sm:mt-14">
          {approachPrinciples.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:py-7"
            >
              <span className="font-mono text-sm text-[#1d81f2]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold text-ink-700">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-500 sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ApproachCommunication() {
  return (
    <section className="bg-[#F4F7FC] py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            No Black Boxes.{" "}
            <span className="text-[#1d81f2]">No Guesswork.</span>
          </h2>
          <div>
            <p className="mb-6 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
              We believe good partnerships are built on clarity. You should always
              know what we&apos;re working on, what comes next, and where things
              stand.
            </p>
            <ul className="grid gap-0 sm:grid-cols-2">
              {approachCommunication.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 border-t border-ink-200 py-4 text-sm text-ink-600"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-[#1d81f2]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ApproachTechnology() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            The Right Technology for{" "}
            <span className="text-[#1d81f2]">the Problem.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
            Technology choices are based on product requirements, performance,
            scalability, maintainability, budget, and long-term goals — not
            trends or one-size-fits-all preferences.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {approachTechGroups.map((group) => (
            <div key={group.category} className="border-t border-ink-200 pt-5">
              <h3 className="font-heading text-lg font-semibold text-ink-700">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[#DCE3F0] bg-[#F4F7FC] px-3 py-1.5 text-sm text-ink-600"
                  >
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

export function ApproachTimeline() {
  return (
    <section className="bg-[#F4F7FC] py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Working <span className="text-[#1d81f2]">Together.</span>
            </h2>
            <ol className="mt-10 max-w-xl space-y-0">
              {approachTimeline.map((step, index) => (
                <li
                  key={step}
                  className="flex items-start gap-4 border-t border-ink-200 py-4"
                >
                  <span className="font-mono text-sm text-[#1d81f2]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-heading text-lg font-semibold text-ink-700">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] bg-[#1d81f2] p-8 text-white sm:rounded-[2rem] sm:p-10">
            <AboutEyebrow className="text-white/80">Next Step</AboutEyebrow>
            <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ready to start with clarity?
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/88 sm:text-base">
              Tell us what you&apos;re building. We&apos;ll help map the right
              path from idea to launch.
            </p>
            <Button href={siteConfig.cta.href} size="lg" variant="light" className="mt-8">
              {siteConfig.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
