import Image from "next/image";

export function AboutTeam() {
  return (
    <section className="bg-[#F4F7FC] py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100 sm:aspect-[5/4]">
            <Image
              src="/brand/services/ui-ux-design-v2.jpg"
              alt="Design and engineering team collaborating on a digital product"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-xl lg:py-4">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Good Products Come From{" "}
              <span className="text-[#1d81f2]">Good Teams.</span>
            </h2>
            <p className="mt-6 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
              We bring together designers, developers, and problem-solvers who
              care about the details and take ownership of what they build.
            </p>
            <p className="mt-5 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
              Collaboration is part of how we work — not a line on a slide. We
              stay close to the product, the people using it, and the business
              outcomes behind every decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
