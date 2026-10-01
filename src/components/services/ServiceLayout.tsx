import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ServiceSectionTone =
  | "white"
  | "tint"
  | "soft"
  | "muted"
  | "dark"
  | "brand";

export function ServiceSection({
  children,
  tone = "white",
  className,
  id,
}: {
  children: ReactNode;
  tone?: ServiceSectionTone;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 sm:py-28 lg:py-32",
        tone === "white" && "bg-white",
        tone === "tint" && "bg-brand-50/45",
        tone === "soft" && "bg-[#F4F7FC]",
        tone === "muted" && "bg-ink-50/80",
        tone === "dark" &&
          "bg-[#1d81f2] bg-[linear-gradient(#ffffff0f_1px,#0000_1px),linear-gradient(90deg,#ffffff0f_1px,#0000_1px)] bg-[length:48px_48px] text-white",
        tone === "brand" && "bg-[#1d81f2] text-white",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function ServiceContainer({ children }: { children: ReactNode }) {
  return <div className="container-site">{children}</div>;
}
