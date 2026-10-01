import { aboutCapabilities } from "@/components/about/about-data";
import { AboutSectionHeading } from "@/components/about/AboutSectionHeading";

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function AboutCapabilities() {
  return (
    <section className="bg-[#F4F7FC] py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <AboutSectionHeading
          align="center"
          eyebrow="What We Do"
          title={
            <>
              From Idea to{" "}
              <span className="text-[#1d81f2]">Product.</span>
            </>
          }
        />

        <ul className="mt-12 grid border border-ink-200 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {aboutCapabilities.map((capability, index) => (
            <li
              key={capability}
              className="border-b border-ink-200 px-5 py-5 text-center last:border-b-0 sm:border-r sm:px-5 sm:py-6 sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-r lg:px-6 lg:py-7 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
            >
              <span className="font-mono text-xs tracking-wide text-[#1d81f2] sm:text-sm">
                {formatIndex(index)}
              </span>
              <p className="mt-3 font-heading text-lg font-semibold tracking-tight text-ink-700 sm:text-xl">
                {capability}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
