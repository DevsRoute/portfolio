import { aboutApproach } from "@/components/about/about-data";
import { AboutSectionHeading } from "@/components/about/AboutSectionHeading";

export function AboutApproach() {
  return (
    <section id="approach" className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <AboutSectionHeading
          eyebrow="Our Approach"
          title={
            <>
              Simple Process.{" "}
              <span className="text-[#1d81f2]">Serious Execution.</span>
            </>
          }
          className="max-w-2xl"
        />

        <ol className="mt-12 grid gap-8 sm:mt-14 lg:mt-16 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {aboutApproach.map((step, index) => (
            <li key={step.number} className="relative">
              {index > 0 ? (
                <span
                  aria-hidden
                  className="absolute top-5 -left-3 hidden h-px w-6 bg-ink-200 lg:block xl:-left-4 xl:w-8"
                />
              ) : null}
              <span className="font-mono text-sm tracking-wide text-[#1d81f2]">
                {step.number}
              </span>
              <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-ink-700 sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink-500 sm:text-[0.95rem] sm:leading-7">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
