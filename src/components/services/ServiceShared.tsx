import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function ServiceEyebrow({
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

export function ServiceHeading({
  title,
  accent,
  as = "h2",
  className,
}: {
  title: string;
  accent?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "font-heading font-semibold tracking-tight text-ink-700",
        as === "h1" &&
          "text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] xl:text-[3.1rem]",
        as === "h2" &&
          "text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]",
        as === "h3" && "text-xl sm:text-2xl",
        className,
      )}
    >
      {title}
      {accent ? (
        <>
          {" "}
          <span className="text-[#1d81f2]">{accent}</span>
        </>
      ) : null}
    </Tag>
  );
}

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ServiceNumberedGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <li
          key={item}
          className="border-b border-ink-200 py-5 sm:border-r sm:px-5 sm:py-6 lg:px-6 lg:py-7 [&:nth-child(2n)]:sm:border-r-0 [&:nth-child(4n)]:lg:border-r-0"
        >
          <span className="font-mono text-xs tracking-wide text-ink-400 sm:text-sm">
            {formatIndex(index)}
          </span>
          <p className="mt-3 font-heading text-lg font-semibold tracking-tight text-ink-700 sm:text-xl">
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function ServiceSimpleGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item}
          className="border-t border-ink-200 pt-4 text-sm leading-6 text-ink-600 sm:text-[0.95rem] sm:leading-7"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
