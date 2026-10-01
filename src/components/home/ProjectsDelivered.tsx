"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import {
  deliveredProjects,
  type DeliveredProject,
} from "@/components/home/projects-delivered-data";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: DeliveredProject }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl bg-brand-50/90 p-4 sm:p-5">
      <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-white">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/5"
        />
      </div>

      <div className="mt-4 flex flex-1 flex-col sm:mt-5">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs tracking-wide text-ink-400">
            {project.number}
          </span>
          <p className="text-[0.65rem] font-medium tracking-[0.14em] text-brand-600 uppercase sm:text-xs">
            {project.category}
          </p>
        </div>

        <h3 className="mt-2.5 font-heading text-xl font-semibold tracking-tight text-ink-700 sm:text-2xl">
          {project.name}
        </h3>

        <p className="mt-2.5 line-clamp-3 text-sm leading-6 text-ink-500 sm:leading-7">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export function ProjectsDelivered() {
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
      id="projects"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site relative">
        <div className="mb-10 flex flex-col gap-8 lg:mb-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-xl shrink-0">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-600 uppercase sm:text-[0.7rem]">
              Projects Delivered
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Built for Real Businesses.
              <span className="mt-1 block text-brand-500 sm:mt-1.5">
                Designed to Perform.
              </span>
            </h2>
          </div>

          <div className="flex w-full max-w-md flex-col gap-5 lg:pt-1">
            <div className="flex items-center gap-2 lg:justify-end">
              <button
                type="button"
                aria-label="Previous projects"
                disabled={atStart}
                onClick={() => swiper?.slidePrev()}
                className={cn(
                  "inline-flex size-11 items-center justify-center rounded-full bg-brand-600 text-white transition-colors",
                  "hover:bg-brand-500 disabled:cursor-not-allowed disabled:bg-ink-200 disabled:text-ink-400",
                )}
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next projects"
                disabled={atEnd}
                onClick={() => swiper?.slideNext()}
                className={cn(
                  "inline-flex size-11 items-center justify-center rounded-full bg-brand-600 text-white transition-colors",
                  "hover:bg-brand-500 disabled:cursor-not-allowed disabled:bg-ink-200 disabled:text-ink-400",
                )}
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
            <p className="text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
              A selection of digital products we&apos;ve designed and developed
              across different industries, from SaaS platforms to modern
              eCommerce experiences.
            </p>
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
            className="projects-swiper cursor-grab overflow-visible! active:cursor-grabbing"
          >
            {deliveredProjects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto!">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {deliveredProjects.slice(0, 4).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
