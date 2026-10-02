import Link from "next/link";

const audiences = [
  {
    id: "founders",
    title: "Founders launching an MVP",
    description:
      "Funded non-technical founders who need a scoped product shipped in weeks, not months of hiring.",
    href: "/founders",
  },
  {
    id: "saas-ai",
    title: "SaaS teams adding AI",
    description:
      "Product teams that want chatbots, automation, or OpenAI features without pulling the core roadmap off track.",
    href: "/ai-features",
  },
] as const;

export function WhoWeHelp() {
  return (
    <section
      id="who-we-help"
      className="border-b border-ink-100 bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="container-site">
        <p className="font-mono text-xs tracking-[0.14em] text-brand-600 uppercase">
          Who we help
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-ink-700 sm:text-3xl">
          Built for two kinds of teams.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
          {audiences.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group rounded-2xl border border-ink-200 bg-[#F4F7FC] p-6 transition-colors hover:border-brand-500 hover:bg-brand-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 sm:p-7"
            >
              <h3 className="font-heading text-xl font-semibold tracking-tight text-ink-700 group-hover:text-brand-700">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink-500 sm:text-[0.95rem]">
                {item.description}
              </p>
              <span className="mt-4 inline-flex text-sm font-semibold text-brand-600">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
