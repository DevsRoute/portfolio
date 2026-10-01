import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function AboutEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-xs tracking-[0.14em] text-[#1d81f2] uppercase sm:text-[0.8rem]",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function AboutSectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? <AboutEyebrow>{eyebrow}</AboutEyebrow> : null}
      <h2
        className={cn(
          "font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]",
          eyebrow && "mt-4",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-500 sm:text-base sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
