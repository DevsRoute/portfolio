import Image from "next/image";

import { AboutEyebrow } from "@/components/about/AboutSectionHeading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function WorkHero() {
  return (
    <section className="overflow-hidden bg-[#F4F7FC] pt-40 pb-16 sm:pt-44 sm:pb-20 lg:pt-48 lg:pb-24">
      <div className="container-site">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="max-w-2xl">
            <AboutEyebrow>Our Work</AboutEyebrow>
            <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] xl:text-[3.1rem]">
              Digital Products Built to{" "}
              <span className="text-[#1d81f2]">Make an Impact.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-ink-500 sm:text-lg sm:leading-8">
              Explore a selection of digital products and platforms we&apos;ve
              designed and developed for businesses across different industries.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-ink-100 lg:aspect-[16/11]">
            <Image
              src="/brand/projects/flowdesk.jpg"
              alt="Featured SaaS dashboard project preview from DevsRoute portfolio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorkCta() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <div className="overflow-hidden rounded-[1.75rem] bg-[#1d81f2] p-8 text-white sm:rounded-[2rem] sm:p-12 lg:p-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <AboutEyebrow className="text-white/80">Have an Idea?</AboutEyebrow>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Let&apos;s Build Something{" "}
              <span className="text-white/80">Worth Showing.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/88 sm:text-base sm:leading-8">
              Have a product, platform, or idea in mind? Tell us what you&apos;re
              working on and we&apos;ll help shape the next step.
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
