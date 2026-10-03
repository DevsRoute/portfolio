"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { HeroAIEngine } from "@/components/home/HeroAIEngine";
import { heroContent } from "@/components/home/hero-slides";
import { calendlyHref } from "@/lib/site-config";
import { trackCalendlyClick } from "@/lib/analytics/track";

function HeroCtas() {
  const pathname = usePathname() ?? "/";
  const href = calendlyHref(pathname);

  return (
    <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7 sm:gap-4">
      <Button
        href={href}
        size="lg"
        variant="default"
        data-analytics="calendly"
        onClick={() => trackCalendlyClick(pathname)}
      >
        {heroContent.primaryCta}
      </Button>
      <Button
        href={heroContent.secondaryHref}
        size="lg"
        variant="outline"
        arrow={false}
        className="border-ink-200 bg-white/70 text-ink-700 backdrop-blur-sm hover:bg-white"
      >
        {heroContent.secondaryCta}
      </Button>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate min-h-[min(100svh,48rem)] overflow-hidden bg-[#eaf3fb] lg:min-h-svh">
      <Image
        src="/brand/hero-bg-sm.webp"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(55% 75% at 14% 18%, #bfe3ff 0%, #bfe3ff00 60%)",
            "radial-gradient(45% 65% at 88% 8%, #9fd4ff 0%, #9fd4ff00 58%)",
            "radial-gradient(60% 80% at 78% 92%, #63c5ff 0%, #63c5ff00 55%)",
            "linear-gradient(#eaf3fbb3, #fffffff2 78%)",
          ].join(","),
        }}
      />

      <div className="container-site relative z-10 grid min-h-[min(100svh,48rem)] items-center gap-8 py-20 sm:gap-9 sm:py-24 md:gap-10 lg:min-h-svh lg:grid-cols-2 lg:gap-10 lg:overflow-hidden lg:pt-32 lg:pb-16 xl:gap-14">
        <div className="min-w-0 max-w-lg lg:max-w-xl">
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-ink-700 sm:text-3xl sm:leading-[1.2] md:text-[2.15rem] md:leading-[1.18] lg:text-[2.55rem] lg:leading-[1.15] xl:text-[2.75rem]">
            {heroContent.headline}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-6 text-ink-500 sm:mt-5 sm:text-base sm:leading-7">
            {heroContent.description}
          </p>
          <HeroCtas />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[440px] self-center md:max-w-[480px] lg:ml-auto lg:mr-0">
          <HeroAIEngine />
        </div>
      </div>
    </section>
  );
}
