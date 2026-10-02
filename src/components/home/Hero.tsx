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
        variant="light"
        data-analytics="calendly"
        onClick={() => trackCalendlyClick(pathname)}
      >
        {heroContent.primaryCta}
      </Button>
      <Button href={heroContent.secondaryHref} size="lg" variant="outline" arrow={false} className="border-white/40 bg-transparent text-white hover:bg-white/10">
        {heroContent.secondaryCta}
      </Button>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate min-h-[min(100svh,48rem)] overflow-hidden bg-[#1d81f2] lg:min-h-svh">
      <Image
        src="/brand/hero-bg-banner.webp"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-right"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgb(29_129_242)_0%,rgb(29_129_242)_28%,rgb(29_129_242)_48%,rgb(29_129_242/0.18)_78%,rgb(219_235_253/0.22)_95%,rgb(255_255_255/0.12)_100%)] md:bg-[linear-gradient(90deg,rgb(29_129_242)_0%,rgb(29_129_242)_22%,rgb(29_129_242)_42%,rgb(29_129_242/0.10)_80%,rgb(219_235_253/0.22)_95%,rgb(255_255_255/0.12)_100%)]"
      />

      <div className="container-site relative z-10 grid min-h-[min(100svh,48rem)] items-center gap-8 py-20 sm:gap-9 sm:py-24 md:gap-10 lg:min-h-svh lg:grid-cols-2 lg:gap-10 lg:overflow-hidden lg:pt-32 lg:pb-16 xl:gap-14">
        <div className="min-w-0 max-w-lg lg:max-w-xl">
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl sm:leading-[1.2] md:text-[2.15rem] md:leading-[1.18] lg:text-[2.55rem] lg:leading-[1.15] xl:text-[2.75rem]">
            {heroContent.headline}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/85 sm:mt-5 sm:text-base sm:leading-7">
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
