import {
  techStackGroups,
  type TechItem,
} from "@/components/home/tech-stack-data";

function TechCard({ item }: { item: TechItem }) {
  const src = `https://cdn.simpleicons.org/${item.slug}/${item.color ?? "1d81f2"}`;

  return (
    <div className="flex h-[6.5rem] flex-col items-center justify-center gap-2.5 rounded-2xl border border-[#E6EBF3] bg-white px-2 transition-colors hover:border-[#1d81f2]/40 hover:bg-brand-50/50 sm:h-[7.25rem] sm:gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element -- brand logos from Simple Icons CDN */}
      <img
        src={src}
        alt={`${item.name} logo`}
        width={44}
        height={44}
        className="size-9 object-contain sm:size-11"
        loading="lazy"
      />
      <span className="text-center text-[11px] font-semibold text-ink-700 sm:text-[13px]">
        {item.name}
      </span>
    </div>
  );
}

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14 xl:gap-16">
          <div className="w-full shrink-0 lg:max-w-[22rem] xl:max-w-[24rem]">
            <p className="font-mono text-xs tracking-[0.14em] text-[#1d81f2] uppercase sm:text-[0.8rem]">
              06 — Tech stack
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              Modern tools,{" "}
              <span className="text-[#1d81f2]">proven at scale.</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
              We pick the stack for your product — not the other way round.
              Every tool here is one our team ships with in production.
            </p>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-7 sm:gap-8">
            {techStackGroups.map((group) => (
              <div key={group.category} className="flex flex-col gap-3">
                <span className="font-mono text-[11px] tracking-[0.12em] text-ink-500 uppercase sm:text-xs">
                  {group.category}
                </span>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {group.items.map((item) => (
                    <TechCard key={`${group.category}-${item.name}`} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
