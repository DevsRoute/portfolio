"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import {
  featuredWorkProjects,
  gridWorkProjects,
  workFilters,
  type WorkFilter,
  type WorkProject,
} from "@/lib/work-projects";
import { cn } from "@/lib/utils";

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-[#DCE3F0] bg-[#F4F7FC] px-2.5 py-1 text-xs font-medium text-ink-600"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function FeaturedProject({
  project,
  reverse = false,
}: {
  project: WorkProject;
  reverse?: boolean;
}) {
  return (
    <article id={project.id} className="scroll-mt-28">
      <div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-ink-100">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div>
          <p className="font-mono text-sm tracking-wide text-[#1d81f2]">
            {project.number}
          </p>
          <p className="mt-2 text-xs font-semibold tracking-[0.14em] text-[#1d81f2] uppercase">
            {project.category}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl">
            {project.name}
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
            {project.description}
          </p>
          <ProjectTags tags={project.tags} />
        </div>
      </div>
    </article>
  );
}

function GridProject({ project }: { project: WorkProject }) {
  return (
    <article id={project.id} className="group scroll-mt-28">
      <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-ink-100">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="pt-5">
        <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-[#1d81f2] uppercase">
          {project.category}
        </p>
        <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-ink-700 transition-colors group-hover:text-[#1d81f2]">
          {project.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink-500">
          {project.description}
        </p>
        <ProjectTags tags={project.tags.slice(0, 3)} />
      </div>
    </article>
  );
}

export function WorkPortfolio() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("All");

  const filteredFeatured = useMemo(
    () =>
      activeFilter === "All"
        ? featuredWorkProjects
        : featuredWorkProjects.filter((p) => p.filters.includes(activeFilter)),
    [activeFilter],
  );

  const filteredGrid = useMemo(
    () =>
      activeFilter === "All"
        ? gridWorkProjects
        : gridWorkProjects.filter((p) => p.filters.includes(activeFilter)),
    [activeFilter],
  );

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-ink-700 sm:text-3xl">
            Selected <span className="text-[#1d81f2]">Projects</span>
          </h2>
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {workFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  activeFilter === filter
                    ? "border-[#1d81f2] bg-[#1d81f2] text-white"
                    : "border-[#DCE3F0] bg-white text-ink-600 hover:border-[#1d81f2]/40 hover:text-[#1d81f2]",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredFeatured.length > 0 ? (
          <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20 lg:space-y-24">
            {filteredFeatured.map((project, index) => (
              <FeaturedProject
                key={project.id}
                project={project}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        ) : null}

        {filteredGrid.length > 0 ? (
          <div className="mt-16 grid gap-10 sm:mt-20 sm:grid-cols-2 lg:gap-12">
            {filteredGrid.map((project) => (
              <GridProject key={project.id} project={project} />
            ))}
          </div>
        ) : null}

        {filteredFeatured.length === 0 && filteredGrid.length === 0 ? (
          <p className="mt-12 text-center text-sm text-ink-500">
            No projects match this filter yet.
          </p>
        ) : null}
      </div>
    </section>
  );
}
