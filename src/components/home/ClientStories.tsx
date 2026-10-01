"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import {
  clientStories,
  type ClientStory,
} from "@/components/home/client-stories-data";
import { cn } from "@/lib/utils";

function StoryCard({ story }: { story: ClientStory }) {
  return (
    <article className="group flex h-full min-h-[22rem] flex-col gap-7 rounded-3xl border border-[#E6EBF3] bg-white p-7 transition-all duration-300 hover:border-[#1d81f2] hover:bg-[#1d81f2] hover:shadow-[0_20px_50px_rgb(29_129_242/0.28)] sm:min-h-[24rem] sm:p-8 lg:p-9">
      <Quote
        aria-hidden
        className="size-8 shrink-0 text-[#1d81f2] transition-colors duration-300 group-hover:text-white sm:size-9"
        strokeWidth={1.75}
      />

      <p className="flex-1 text-base leading-7 text-ink-600 transition-colors duration-300 group-hover:text-white sm:text-lg sm:leading-8">
        {story.quote}
      </p>

      <div className="mt-auto flex items-center gap-3.5">
        <span
          aria-hidden
          className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[#1d81f2]/10 font-heading text-sm font-semibold tracking-wide text-[#1d81f2] transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white"
        >
          {story.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink-700 transition-colors duration-300 group-hover:text-white sm:text-[0.95rem]">
            {story.name}
          </p>
          <p className="truncate text-sm text-ink-500 transition-colors duration-300 group-hover:text-white/80">
            {story.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export function ClientStories() {
  const [sliderReady, setSliderReady] = useState(false);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount Swiper only after hydration
    setSliderReady(true);
  }, []);

  function syncNav(instance: SwiperInstance) {
    setAtStart(instance.isBeginning);
    setAtEnd(instance.isEnd);
  }

  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-[#F4F7FC] py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site relative">
        <div className="mb-10 flex flex-col gap-8 lg:mb-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-xl shrink-0">
            <p className="font-mono text-xs tracking-[0.14em] text-[#1d81f2] uppercase sm:text-[0.8rem]">
              Client stories
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              What our clients{" "}
              <span className="text-[#1d81f2]">say.</span>
            </h2>
          </div>

          <div className="flex w-full max-w-md flex-col gap-5 lg:pt-1">
            <div className="flex items-center gap-2 lg:justify-end">
              <button
                type="button"
                aria-label="Previous stories"
                disabled={atStart}
                onClick={() => swiper?.slidePrev()}
                className={cn(
                  "inline-flex size-11 items-center justify-center rounded-full bg-[#1d81f2] text-white transition-colors",
                  "hover:bg-[#1d81f2]/90 disabled:cursor-not-allowed disabled:bg-ink-200 disabled:text-ink-400",
                )}
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next stories"
                disabled={atEnd}
                onClick={() => swiper?.slideNext()}
                className={cn(
                  "inline-flex size-11 items-center justify-center rounded-full bg-[#1d81f2] text-white transition-colors",
                  "hover:bg-[#1d81f2]/90 disabled:cursor-not-allowed disabled:bg-ink-200 disabled:text-ink-400",
                )}
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
            <p className="text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
              Real feedback from teams we&apos;ve partnered with — on delivery,
              communication, and the products we ship together.
            </p>
          </div>
        </div>

        {sliderReady ? (
          <Swiper
            modules={[Navigation]}
            speed={650}
            spaceBetween={20}
            slidesPerView={1.08}
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
            }}
            className="stories-swiper cursor-grab overflow-visible! active:cursor-grabbing"
          >
            {clientStories.map((story) => (
              <SwiperSlide key={story.id} className="h-auto!">
                <StoryCard story={story} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clientStories.slice(0, 3).map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
