export function AboutIntro() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
          <div className="lg:pt-2">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Technology With{" "}
              <span className="text-[#1d81f2]">Purpose.</span>
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-ink-500 sm:space-y-6 sm:text-base sm:leading-8">
            <p>
              We work with businesses to turn ideas into practical digital
              products — software that supports real operations, real users, and
              real growth.
            </p>
            <p>
              We believe great software is more than clean code. It should solve
              a real problem, be easy to use, and create measurable value for
              the business behind it.
            </p>
            <p>
              From early product ideas to established platforms, we combine
              thoughtful design, modern engineering, and a practical
              understanding of business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
