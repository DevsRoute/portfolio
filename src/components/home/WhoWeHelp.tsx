import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const audiences = [
  {
    id: "founders",
    index: "01",
    path: "MVP path",
    title: "Founders launching an MVP",
    description:
      "Funded non-technical founders who need a scoped product shipped in weeks — not months of hiring.",
    href: "/founders",
    detail: "2–6 week scoped builds",
  },
  {
    id: "saas-ai",
    index: "02",
    path: "AI path",
    title: "SaaS teams adding AI",
    description:
      "Product teams that want chatbots, automation, or OpenAI features without pulling the core roadmap off track.",
    href: "/ai-features",
    detail: "Focused AI features",
  },
] as const;

export function WhoWeHelp() {
  return (
    <section
      id="who-we-help"
      className="relative overflow-hidden bg-[#F4F7FC] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#1d81f2]/8 blur-3xl"
      />

      <div className="container-site relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-xl">
            <p className="font-mono text-xs tracking-[0.14em] text-[#1d81f2] uppercase sm:text-[0.8rem]">
              Who we help
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Two clear paths.
              <span className="mt-1 block text-[#1d81f2] sm:mt-1.5">
                One senior team.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-ink-500 sm:text-base sm:leading-8 lg:pb-1">
            Choose the lane that matches where you are — then talk directly to
            the people who will build it.
          </p>
        </div>

        <div className="mt-12 border-t border-ink-200/90 sm:mt-14 lg:mt-16">
          {audiences.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group grid gap-4 border-b border-ink-200/90 py-7 transition-colors hover:bg-white/70 focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d81f2] focus-visible:ring-offset-2 sm:gap-5 sm:py-8 lg:grid-cols-[4.5rem_minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:px-3 lg:py-9"
            >
              <span className="font-mono text-sm tracking-wide text-[#1d81f2] sm:text-base">
                {item.index}
              </span>

              <div className="min-w-0">
                <p className="font-mono text-[11px] tracking-[0.16em] text-ink-400 uppercase">
                  {item.path}
                </p>
                <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight text-ink-700 transition-colors group-hover:text-[#1d81f2] sm:text-2xl lg:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-ink-500 sm:text-[0.95rem] sm:leading-7">
                  {item.description}
                </p>
                <p className="mt-3 text-sm font-medium text-ink-600 sm:hidden">
                  {item.detail}
                </p>
              </div>

              <div className="flex items-center justify-between gap-6 lg:flex-col lg:items-end lg:justify-center lg:gap-3">
                <p className="hidden text-sm font-medium text-ink-500 sm:block lg:text-right">
                  {item.detail}
                </p>
                <span
                  aria-hidden
                  className="inline-flex size-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition-all duration-300 group-hover:border-[#1d81f2] group-hover:bg-[#1d81f2] group-hover:text-white group-hover:shadow-[0_10px_28px_rgb(29_129_242/0.28)] group-focus-visible:border-[#1d81f2] group-focus-visible:bg-[#1d81f2] group-focus-visible:text-white"
                >
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
