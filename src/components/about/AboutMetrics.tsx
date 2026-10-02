import {
  getConfirmedStats,
  getSafeImpactClaims,
} from "@/config/site-facts";

export function AboutMetrics() {
  const confirmed = getConfirmedStats();
  const items = confirmed.length >= 3 ? confirmed : getSafeImpactClaims();
  if (items.length === 0) return null;

  return (
    <section className="bg-[#1d81f2] py-16 text-white sm:py-20 lg:py-24">
      <div className="container-site">
        <div
          className={`grid gap-y-10 ${items.length >= 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"} lg:gap-y-0`}
        >
          {items.map((stat, index) => (
            <div
              key={stat.id}
              className="relative flex flex-col px-2 text-center sm:px-4 lg:px-6"
            >
              {index > 0 ? (
                <span
                  aria-hidden
                  className="absolute top-1/2 left-0 hidden h-14 w-px -translate-y-1/2 bg-white/25 sm:block"
                />
              ) : null}

              <p className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {stat.value}
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
