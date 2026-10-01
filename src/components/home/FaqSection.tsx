"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";

import { homeFaqs, type HomeFaq } from "@/components/home/faq-data";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function FaqItem({
  item,
  open,
  onToggle,
}: {
  item: HomeFaq;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div
      className={cn(
        "rounded-[1.25rem] border border-[#E6EBF3] bg-white transition-shadow",
        open && "shadow-[0_12px_32px_rgb(29_129_242/0.08)]",
      )}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
      >
        <h3
          className={cn(
            "font-heading text-lg font-semibold tracking-tight transition-colors sm:text-xl",
            open ? "text-[#1d81f2]" : "text-ink-700",
          )}
        >
          {item.question}
        </h3>
        <span
          className={cn(
            "inline-flex size-10 shrink-0 items-center justify-center rounded-full transition-colors",
            open
              ? "bg-[#1d81f2] text-white"
              : "border border-[#DCE3F0] bg-white text-ink-700",
          )}
        >
          {open ? (
            <Minus className="size-4" strokeWidth={2.4} />
          ) : (
            <Plus className="size-4" strokeWidth={2.4} />
          )}
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl px-6 pb-6 text-sm leading-7 text-ink-500 sm:px-8 sm:pb-7 sm:text-[0.95rem] sm:leading-7">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openId, setOpenId] = useState(homeFaqs[0]?.id ?? "");

  function toggle(id: string) {
    setOpenId((current) => (current === id ? "" : id));
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F4F7FC] py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="w-full shrink-0 lg:max-w-[22rem] xl:max-w-[25rem]">
            <p className="font-mono text-xs tracking-[0.14em] text-[#1d81f2] uppercase sm:text-[0.8rem]">
              09 — FAQ
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              Questions, <span className="text-[#1d81f2]">answered.</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
              Can&apos;t find what you need? Ask our AI Engine or talk to the
              team.
            </p>
            <Link
              href={siteConfig.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-700 transition-colors hover:text-[#1d81f2]"
            >
              {siteConfig.cta.label}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-3">
            {homeFaqs.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                open={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
