import { aboutExpertise } from "@/components/about/about-data";
import { AboutSectionHeading } from "@/components/about/AboutSectionHeading";

export function AboutExpertise() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <AboutSectionHeading
          eyebrow="Our Expertise"
          title={
            <>
              Modern Technology.{" "}
              <span className="text-[#1d81f2]">Practical Solutions.</span>
            </>
          }
          className="max-w-2xl"
        />

        <div className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-10">
          {aboutExpertise.map((group) => (
            <div
              key={group.category}
              className="border-t border-ink-200 pt-5 sm:pt-6"
            >
              <h3 className="font-heading text-lg font-semibold tracking-tight text-ink-700">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[#DCE3F0] bg-[#F4F7FC] px-3 py-1.5 text-sm text-ink-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
