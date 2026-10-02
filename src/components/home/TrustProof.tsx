import { Button } from "@/components/ui/button";
import {
  getConfirmedStats,
  getSafeImpactClaims,
} from "@/config/site-facts";
import { calendlyHref, siteConfig } from "@/lib/site-config";

function ImpactRouteArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      role="img"
      aria-label="A stepped route from Discover to Launch"
      className={className}
    >
      <g
        stroke="#8FB0FF"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.45"
      >
        <path d="M0 452 H108 V332 H244 V212 H380 V40" />
        <path d="M0 476 H132 V356 H268 V236 H404 V40" />
      </g>
      <path
        d="M0 428 H84 V308 H220 V188 H356 V40"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M0 428 H84 V308 H220 V188 H356 V40"
        stroke="#7FE7FF"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeDasharray="4 10"
        transform="translate(-24 -24)"
        opacity="0.7"
      />
      <g fill="#2433D9" stroke="#ffffff" strokeWidth="2">
        <circle cx="84" cy="428" r="9" />
        <circle cx="220" cy="308" r="9" />
        <circle cx="356" cy="188" r="9" />
      </g>
      <circle
        cx="356"
        cy="40"
        r="26"
        stroke="#7FE7FF"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <circle cx="356" cy="40" r="13" fill="#7FE7FF" />
      <g
        fontFamily="var(--font-geist-mono), ui-monospace, monospace"
        fontSize="12"
        letterSpacing="1.2"
        fill="#ffffff"
        opacity="0.85"
      >
        <text x="98" y="455">
          01 DISCOVER
        </text>
        <text x="234" y="335">
          02 DESIGN
        </text>
        <text x="370" y="215">
          03 BUILD
        </text>
        <text x="394" y="45">
          04 LAUNCH
        </text>
      </g>
    </svg>
  );
}

export function TrustProof() {
  const confirmed = getConfirmedStats();
  const useNumeric = confirmed.length >= 3;
  const items = useNumeric ? confirmed : getSafeImpactClaims();

  if (items.length === 0) return null;

  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-[#1d81f2] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="container-site relative z-10 flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex w-full max-w-2xl flex-col gap-7 lg:max-w-[42rem] lg:shrink-0 lg:gap-8">
          <span className="font-mono text-xs tracking-[0.12em] text-white/80 sm:text-sm">
            How we work
          </span>

          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.08] xl:text-[3.75rem]">
            {useNumeric ? (
              <>
                Delivery you can plan around —{" "}
                <span className="text-[#7FE7FF]">clear scope, weekly demos.</span>
              </>
            ) : (
              <>
                Small team. Senior builders.{" "}
                <span className="text-[#7FE7FF]">Direct access.</span>
              </>
            )}
          </h2>

          <Button
            href={calendlyHref("/")}
            size="lg"
            variant="light"
            className="w-fit"
            data-analytics="calendly"
          >
            {siteConfig.cta.label}
          </Button>

          <div className="grid grid-cols-1 gap-8 border-t border-white/20 pt-8 sm:grid-cols-3 sm:gap-6 lg:gap-8">
            {items.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-2.5">
                <span className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-none">
                  {stat.value}
                </span>
                <span className="text-sm leading-6 text-white/88 sm:text-[0.95rem] sm:leading-7">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <ImpactRouteArt className="hidden h-auto w-full max-w-[22rem] shrink-0 sm:block lg:max-w-[26rem] xl:max-w-[30rem]" />
      </div>
    </section>
  );
}
