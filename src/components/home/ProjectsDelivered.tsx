"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { siteFacts } from "@/config/site-facts";
import {
  getFeaturedProjects,
  hasAnonymousProjects,
  type Project,
} from "@/data/projects";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full w-[min(88vw,22rem)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-shadow hover:shadow-[0_16px_40px_rgb(16_52_126/0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.75rem)/3)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
        <Image
          src={project.screenshot}
          alt={project.screenshotAlt}
          fill
          draggable={false}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
        <span className="font-mono text-[11px] tracking-[0.12em] text-brand-600 uppercase">
          {project.category}
        </span>
        <h3 className="font-heading text-xl font-semibold tracking-tight text-ink-700">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-6 text-ink-500">
          {project.summary}
        </p>
      </div>
    </Link>
  );
}

export function ProjectsDelivered() {
  const projects = getFeaturedProjects(siteFacts.showConcepts);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncNav = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    syncNav();
    el.addEventListener("scroll", syncNav, { passive: true });
    window.addEventListener("resize", syncNav);
    return () => {
      el.removeEventListener("scroll", syncNav);
      window.removeEventListener("resize", syncNav);
    };
  }, [syncNav, projects.length]);

  if (projects.length === 0) return null;

  function scrollByDir(dir: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("a");
    const amount = card
      ? card.getBoundingClientRect().width + 20
      : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site relative">
        <div className="relative mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-xl shrink-0 lg:max-w-md">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-600 uppercase sm:text-[0.7rem]">
              Projects Delivered
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Real work.{" "}
              <span className="text-brand-500">Honest roles.</span>
            </h2>
            {hasAnonymousProjects(siteFacts.showConcepts) ? (
              <p className="mt-3 text-sm text-ink-500">
                Some projects are shown without client names at their request.
              </p>
            ) : null}
          </div>

          <p className="max-w-md text-sm leading-7 text-ink-500 sm:text-base sm:leading-8 lg:absolute lg:left-1/2 lg:max-w-[18rem] lg:-translate-x-1/2 lg:text-center">
            A selection of products where we contributed front-end and web
            development across SaaS, AI, FinTech, and more.
          </p>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Previous projects"
              disabled={atStart}
              onClick={() => scrollByDir(-1)}
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-full bg-brand-600 text-white transition-colors",
                "hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-ink-200 disabled:text-ink-400",
              )}
            >
              <ArrowLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next projects"
              disabled={atEnd}
              onClick={() => scrollByDir(1)}
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-full bg-brand-600 text-white transition-colors",
                "hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-ink-200 disabled:text-ink-400",
              )}
            >
              <ArrowRight className="size-5" aria-hidden />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          tabIndex={0}
          role="region"
          aria-label="Projects delivered"
          className={cn(
            "flex gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-1",
            "snap-x snap-mandatory",
            "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            "cursor-default outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
          )}
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-flex text-sm font-semibold text-brand-600 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            See all work →
          </Link>
        </div>
      </div>
    </section>
  );
}
