import { trustStats } from "@/components/home/trust-proof-data";

export function AboutMetrics() {
  return (
    <section className="bg-[#1d81f2] py-16 text-white sm:py-20 lg:py-24">
      <div className="container-site">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-0">
          {trustStats.map((stat, index) => (
            <div
              key={stat.id}
              className="relative flex flex-col px-2 text-center sm:px-4 lg:px-6"
            >
              {index > 0 ? (
                <span
                  aria-hidden
                  className="absolute top-1/2 left-0 hidden h-14 w-px -translate-y-1/2 bg-white/25 lg:block"
                />
              ) : null}
              {index % 2 === 1 ? (
                <span
                  aria-hidden
                  className="absolute top-1/2 left-0 h-12 w-px -translate-y-1/2 bg-white/25 lg:hidden"
                />
              ) : null}

              <p className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {stat.value}
                {"suffix" in stat && stat.suffix ? (
                  <span className="ml-1 text-lg font-semibold tracking-normal text-white/75 sm:text-xl">
                    {stat.suffix}
                  </span>
                ) : null}
              </p>
              <p className="mt-2 text-[0.7rem] font-medium tracking-[0.14em] text-white/70 uppercase sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
