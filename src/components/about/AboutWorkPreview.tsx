import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AboutSectionHeading } from "@/components/about/AboutSectionHeading";
import { siteFacts } from "@/config/site-facts";
import { getFeaturedProjects } from "@/data/projects";

const previewProjects = getFeaturedProjects(siteFacts.showConcepts).slice(0, 3);

export function AboutWorkPreview() {
  if (previewProjects.length === 0) return null;

  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <AboutSectionHeading
            eyebrow="Our Work"
            title={
              <>
                A Few Things We&apos;ve{" "}
                <span className="text-[#1d81f2]">Helped Ship.</span>
              </>
            }
            className="max-w-xl"
          />

          <Link
            href="/work"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink-700 transition-colors hover:text-[#1d81f2]"
          >
            View All Projects
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {previewProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-ink-100">
                <Image
                  src={project.screenshot}
                  alt={project.screenshotAlt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs tracking-wide text-[#1d81f2]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.65rem] font-medium tracking-[0.14em] text-ink-400 uppercase sm:text-xs">
                    {project.category}
                  </p>
                </div>
                <h3 className="mt-2.5 font-heading text-xl font-semibold tracking-tight text-ink-700 transition-colors group-hover:text-[#1d81f2] sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2.5 line-clamp-2 text-sm leading-6 text-ink-500">
                  {project.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
