import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteFacts } from "@/config/site-facts";
import { calendlyHref, services, siteConfig } from "@/lib/site-config";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Approach", href: "/approach" },
  { label: "For founders", href: "/founders" },
  { label: "AI features", href: "/ai-features" },
  { label: "Contact", href: "/contact" },
] as const;

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

const footerLinkClass =
  "text-sm text-white/90 transition-colors hover:text-[#1d81f2]";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-[#0e0d0d] bg-[linear-gradient(#ffffff0f_1px,#0000_1px),linear-gradient(90deg,#ffffff0f_1px,#0000_1px)] bg-[length:48px_48px] text-white">
      <div className="container-site relative pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex w-full max-w-sm shrink-0 flex-col gap-5">
            <Link href="/" className="inline-flex w-fit">
              <Image
                src="/brand/devsroute-logo-white-sm.png"
                alt="DevsRoute logo"
                width={200}
                height={34}
                unoptimized
                sizes="200px"
                className="h-8 w-auto sm:h-9"
              />
            </Link>
            <p className="max-w-xs text-sm leading-7 text-white/80">
              SaaS MVP development and AI product development for startups and
              B2B founders. Clear scope and a defined end date.
            </p>
            <Button href={calendlyHref("/")} size="lg" className="w-fit" data-analytics="calendly">
              {siteConfig.cta.label}
            </Button>
          </div>

          <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col gap-3.5">
              <span className="font-mono text-[11px] tracking-[0.14em] text-white/60 uppercase">
                Services
              </span>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className={footerLinkClass}
                >
                  {service.label === "Mobile Apps"
                    ? "Mobile App Development"
                    : service.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3.5">
              <span className="font-mono text-[11px] tracking-[0.14em] text-white/60 uppercase">
                Company
              </span>
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={footerLinkClass}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3.5 sm:col-span-2 lg:col-span-1">
              <span className="font-mono text-[11px] tracking-[0.14em] text-white/60 uppercase">
                Connect
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className={`inline-flex items-center gap-2.5 ${footerLinkClass}`}
              >
                <Mail className="size-4 shrink-0 text-[#1d81f2]" />
                {siteConfig.email}
              </a>
              <a
                href={siteFacts.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 ${footerLinkClass}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="size-4 shrink-0 text-[#1d81f2]"
                >
                  <path
                    fill="currentColor"
                    d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.5h4.56V24H.22V8.5zM8.34 8.5h4.37v2.12h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7V24h-4.56v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V24H8.34V8.5z"
                  />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="mt-6 overflow-hidden text-center font-heading text-[clamp(4.5rem,18vw,13.75rem)] leading-[0.85] font-bold tracking-[-0.05em] text-white/10 select-none sm:mt-8"
        >
          devsroute
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/20 pt-6 text-sm text-white/70 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteFacts.companyName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className={footerLinkClass}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
