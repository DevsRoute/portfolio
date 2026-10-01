import { AboutEyebrow } from "@/components/about/AboutSectionHeading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function AboutCta() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <div className="overflow-hidden rounded-[1.75rem] bg-[#1d81f2] p-8 text-white sm:rounded-[2rem] sm:p-12 lg:p-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <AboutEyebrow className="text-white/80">Let&apos;s Build</AboutEyebrow>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Have a Product in Mind?{" "}
              <span className="text-white/80">Let&apos;s Build It.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/88 sm:text-base sm:leading-8">
              Whether you&apos;re starting something new or improving an existing
              product, we&apos;d love to hear what you&apos;re working on.
            </p>
            <Button href={siteConfig.cta.href} size="lg" variant="light" className="mt-8">
              {siteConfig.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
