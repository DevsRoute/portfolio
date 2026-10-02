"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import {
  industryDomains,
  type IndustryDomain,
} from "@/components/home/industry-domains";
import { cn } from "@/lib/utils";

function IndustryCard({ domain }: { domain: IndustryDomain }) {
  return (
    <article className="group relative flex h-[28rem] flex-col overflow-hidden rounded-2xl sm:h-[30rem]">
      <Image
        src={domain.image}
        alt={domain.imageAlt}
        fill
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      {/* Dark gradient for WCAG-friendly white text over bright photos */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/45 to-ink-950/65"
      />

      <div className="relative z-10 flex h-full flex-col p-5 sm:p-6">
        <h3 className="font-heading text-2xl font-semibold tracking-tight text-white">
          {domain.title}
        </h3>
        <p className="mt-2 line-clamp-4 max-w-[17rem] flex-1 text-sm leading-6 text-white/90 sm:text-[0.95rem] sm:leading-7">
          {domain.description}
        </p>
        <Link
          href={domain.href}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
        >
          Learn more
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

export function IndustryDomains() {
  const [sliderReady, setSliderReady] = useState(false);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSliderReady(true);
  }, []);

  function syncNav(instance: SwiperInstance) {
    setAtStart(instance.isBeginning);
    setAtEnd(instance.isEnd);
  }

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site relative">
        <div className="relative mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-xl shrink-0 lg:max-w-md">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Industries We{" "}
              <span className="text-brand-500">Build For</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-ink-500 sm:text-base sm:leading-8 lg:absolute lg:left-1/2 lg:max-w-[18rem] lg:-translate-x-1/2 lg:text-center">
            From SaaS and AI products to travel, e-commerce and education, we
            build software that fits how your business works.
          </p>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Previous industries"
              disabled={atStart}
              onClick={() => swiper?.slidePrev()}
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-full bg-brand-600 text-white transition-colors",
                "hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:bg-ink-200 disabled:text-ink-400",
              )}
            >
              <ArrowLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next industries"
              disabled={atEnd}
              onClick={() => swiper?.slideNext()}
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-full bg-brand-600 text-white transition-colors",
                "hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:bg-ink-200 disabled:text-ink-400",
              )}
            >
              <ArrowRight className="size-5" aria-hidden />
            </button>
          </div>
        </div>

        {sliderReady ? (
          <Swiper
            modules={[Navigation]}
            speed={650}
            spaceBetween={20}
            slidesPerView={1.12}
            grabCursor
            simulateTouch
            allowTouchMove
            touchStartPreventDefault={false}
            threshold={5}
            onSwiper={(instance) => {
              setSwiper(instance);
              syncNav(instance);
            }}
            onSlideChange={syncNav}
            onTouchEnd={syncNav}
            onResize={syncNav}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 22 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="industries-swiper cursor-grab overflow-visible! active:cursor-grabbing"
          >
            {industryDomains.map((domain) => (
              <SwiperSlide key={domain.id} className="h-auto!">
                <IndustryCard domain={domain} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {industryDomains.slice(0, 4).map((domain) => (
              <IndustryCard key={domain.id} domain={domain} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
