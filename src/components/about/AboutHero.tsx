import Image from "next/image";

import { AboutEyebrow } from "@/components/about/AboutSectionHeading";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FC] pt-40 pb-20 sm:pt-44 sm:pb-24 lg:pt-48 lg:pb-28">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          <div className="max-w-2xl">
            <AboutEyebrow>About Us</AboutEyebrow>
            <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] xl:text-[3.1rem]">
              We Build Digital Products That{" "}
              <span className="text-[#1d81f2]">Move Businesses Forward.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink-500 sm:text-lg sm:leading-8">
              We are a technology team focused on designing and developing
              reliable digital products that help businesses grow, operate
              better, and create better experiences for their customers.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100 sm:aspect-[5/4] lg:aspect-[4/3]">
              <Image
                src="/brand/services/custom-software-v2.jpg"
                alt="Developers collaborating on a software product in a modern workspace"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
