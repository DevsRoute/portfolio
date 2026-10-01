import { aboutWhyUs } from "@/components/about/about-data";

export function AboutWhyUs() {
  return (
    <section className="bg-[#F4F7FC] py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Built Around{" "}
              <span className="text-[#1d81f2]">Your Business.</span>
            </h2>
          </div>

          <div className="divide-y divide-ink-100">
            {aboutWhyUs.map((item) => (
              <div key={item.title} className="py-6 first:pt-0 last:pb-0 sm:py-7">
                <h3 className="font-heading text-xl font-semibold tracking-tight text-ink-700 sm:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-2.5 max-w-xl text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
