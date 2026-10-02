import Image from "next/image";

import { isConfirmed, siteFacts } from "@/config/site-facts";

export function AboutTeam() {
  return (
    <section className="bg-[#F4F7FC] py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-[0.14em] text-brand-600 uppercase">
            Founders
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            Three co-founders.{" "}
            <span className="text-[#1d81f2]">One small studio.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
            DevsRoute is a remote software studio in {siteFacts.locationLabel}.
            We work with funded founders and SaaS teams — and you talk directly
            to the people building.
            {isConfirmed(siteFacts.usTimeOverlap)
              ? ` Overlap with US time zones: ${siteFacts.usTimeOverlap}.`
              : null}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {siteFacts.founders.map((founder) => (
            <li
              key={founder.id}
              className="overflow-hidden rounded-2xl border border-ink-100 bg-white"
            >
              <div className="relative aspect-[4/5] bg-ink-100">
                <Image
                  src={founder.photo}
                  alt={founder.photoAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-heading text-lg font-semibold text-ink-700">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm text-brand-600">{founder.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
