import { siteFacts } from "@/config/site-facts";

export function AboutIntro() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
          <div className="lg:pt-2">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              A remote studio for{" "}
              <span className="text-[#1d81f2]">startups that need to ship.</span>
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-ink-500 sm:space-y-6 sm:text-base sm:leading-8">
            <p>
              {siteFacts.companyName} is a small remote team. We help startups
              and B2B founders with SaaS MVP development and AI product
              development — without inventing case studies.
            </p>
            <p>
              You work directly with the developers. Every project starts with
              a clear scope and a defined end date, and you see a demo every
              week.
            </p>
            <p>
              We&apos;re not a 100-person agency. We&apos;re three co-founders
              and a senior-first delivery style built for cold-email founders
              who need clarity fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
