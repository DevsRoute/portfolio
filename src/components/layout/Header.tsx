"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Cloud, Code2, Globe, Layers, Menu, Smartphone, Sparkles, X, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { services, siteConfig, type ServiceIcon } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  code: Code2,
  globe: Globe,
  smartphone: Smartphone,
  sparkles: Sparkles,
  layers: Layers,
  cloud: Cloud,
};

function ServiceMenuContent({
  service,
}: {
  service: (typeof services)[number];
}) {
  const Icon = serviceIcons[service.icon];

  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-focus/dropdown-menu-item:bg-brand-100 group-focus/dropdown-menu-item:text-brand-700 group-hover/dropdown-menu-item:bg-brand-100 group-hover/dropdown-menu-item:text-brand-700">
        <Icon className="size-4" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex flex-col gap-0.5">
        <span className="font-medium text-foreground">{service.label}</span>
        <span className="text-xs leading-4 text-muted-foreground">
          {service.description}
        </span>
      </div>
    </div>
  );
}

function isNavItemActive(href: string, pathname: string) {
  if (href === "/about") return pathname.startsWith("/about");
  if (href === "/work") return pathname.startsWith("/work");
  if (href === "/approach") return pathname.startsWith("/approach");
  return pathname === href;
}

function servicesTriggerClass(solid: boolean, onHero = false) {
  return cn(
    "inline-flex items-center gap-1.5 border-0 bg-transparent text-[0.95rem] font-medium outline-none select-none",
    solid
      ? "text-foreground/80 hover:text-brand-600 data-popup-open:text-brand-600"
      : onHero
        ? "text-white/90 hover:text-white data-popup-open:text-white"
        : "text-ink-700/85 hover:text-brand-600 data-popup-open:text-brand-600",
  );
}

const noopSubscribe = () => () => {};

// Render the dropdown only on the client to avoid hydration ID mismatches.
function useIsClient() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

function ServicesMenu({ solid, onHero }: { solid: boolean; onHero?: boolean }) {
  const ready = useIsClient();
  const pathname = usePathname();
  const isServicesActive = pathname.startsWith("/services");

  if (!ready) {
    return (
      <span className={servicesTriggerClass(solid, onHero)}>
        Services
        <ChevronDown className="size-4" />
      </span>
    );
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        openOnHover
        delay={80}
        closeDelay={120}
        className={cn(
          "group",
          servicesTriggerClass(solid, onHero),
          isServicesActive && (solid || !onHero) && "text-brand-600",
        )}
      >
        Services
        <ChevronDown className="size-4 transition-transform duration-200 group-data-popup-open:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={12}
        className="w-[22rem] min-w-[22rem] rounded-xl p-2"
      >
        {services.map((service) => (
          <DropdownMenuItem
            key={service.href}
            render={<a href={service.href} />}
            className={cn(
              "items-start rounded-lg px-2 py-2.5",
              pathname === service.href && "bg-brand-50",
            )}
          >
            <ServiceMenuContent service={service} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;
  const onHero = pathname === "/" && !solid;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[padding] duration-300",
        solid
          ? "px-4 pt-3 sm:px-6 sm:pt-3.5 lg:px-8"
          : "pt-5 sm:pt-6",
      )}
    >
      <div
        className={cn(
          "container-site transition-[background-color,box-shadow,color,border-radius] duration-300",
          solid
            ? "rounded-[5px] bg-background/95 text-foreground shadow-sm backdrop-blur-md"
            : onHero
              ? "bg-transparent text-white"
              : "bg-transparent text-ink-700",
          menuOpen &&
            "flex max-h-[calc(100dvh-1.25rem)] flex-col overflow-hidden sm:max-h-[calc(100dvh-1.5rem)]",
        )}
      >
        <div className="flex h-14 shrink-0 items-center justify-between gap-4 sm:h-16">
          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center"
            onClick={() => setMenuOpen(false)}
          >
            {/* White logo on hero; colored logo when scrolled / solid header */}
            <Image
              src={
                onHero
                  ? "/brand/devsroute-logo-white.png"
                  : "/brand/devsroute-logo-color.png"
              }
              alt={siteConfig.name}
              width={218}
              height={38}
              priority
              className="h-8 w-auto sm:h-9"
              key={onHero ? "logo-white" : "logo-color"}
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex xl:gap-8">
            {siteConfig.nav.map((item) =>
              item.label === "Services" ? (
                <ServicesMenu key={item.href} solid={solid} onHero={onHero} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[0.95rem] font-medium transition-colors",
                    solid
                      ? "text-foreground/80 hover:text-brand-600"
                      : onHero
                        ? "text-white/90 hover:text-white"
                        : "text-ink-700/85 hover:text-brand-600",
                    isNavItemActive(item.href, pathname) &&
                      (onHero ? "text-white" : "text-brand-600"),
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Button
              href={siteConfig.cta.href}
              size="lg"
              variant={onHero ? "light" : "default"}
              className="h-11 text-sm whitespace-nowrap"
            >
              {siteConfig.cta.label}
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-[5px] lg:hidden",
              onHero ? "text-white" : "text-ink-700",
            )}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            "min-h-0 border-t border-border lg:hidden",
            menuOpen
              ? "block overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]"
              : "hidden",
          )}
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1 py-4">
            <button
              type="button"
              className="flex items-center justify-between rounded-[5px] px-3 py-3 text-left text-base font-medium text-foreground hover:bg-muted"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((open) => !open)}
            >
              Services
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  mobileServicesOpen && "rotate-180",
                )}
              />
            </button>
            {mobileServicesOpen ? (
              <div className="mb-1 ml-2 flex flex-col border-l border-border pl-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={cn(
                      "rounded-[5px] px-3 py-2.5 hover:bg-muted",
                      pathname === service.href && "bg-brand-50",
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    <ServiceMenuContent service={service} />
                  </Link>
                ))}
              </div>
            ) : null}

            {siteConfig.nav
              .filter((item) => item.label !== "Services")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-[5px] px-3 py-3 text-base font-medium text-foreground hover:bg-muted",
                    isNavItemActive(item.href, pathname) && "bg-brand-50 text-brand-700",
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            <Button href={siteConfig.cta.href} size="lg" className="mt-2 w-full" onClick={() => setMenuOpen(false)}>
              {siteConfig.cta.label}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
