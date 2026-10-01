import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AboutSectionHeading } from "@/components/about/AboutSectionHeading";
import { deliveredProjects } from "@/components/home/projects-delivered-data";

const previewProjects = deliveredProjects.slice(0, 3);

export function AboutWorkPreview() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <AboutSectionHeading
            eyebrow="Our Work"
            title={
              <>
                A Few Things We&apos;ve{" "}
                <span className="text-[#1d81f2]">Built.</span>
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
          {previewProjects.map((project) => (
            <article key={project.id} className="group flex flex-col">
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-ink-100">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs tracking-wide text-[#1d81f2]">
                    {project.number}
                  </span>
                  <p className="text-[0.65rem] font-medium tracking-[0.14em] text-ink-400 uppercase sm:text-xs">
                    {project.category}
                  </p>
                </div>
                <h3 className="mt-2.5 font-heading text-xl font-semibold tracking-tight text-ink-700 transition-colors group-hover:text-[#1d81f2] sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-2.5 line-clamp-2 text-sm leading-6 text-ink-500">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
