import { cn } from "@/lib/utils";

function MockupShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-ink-200/80 bg-white shadow-[0_24px_60px_rgb(29_129_242/0.12)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CustomSoftwareMockup({ className }: { className?: string }) {
  return (
    <MockupShell className={cn("aspect-[4/3] sm:aspect-[5/4]", className)}>
      <div className="flex h-full min-h-[18rem]">
        <div className="hidden w-[22%] bg-ink-800 p-3 sm:block">
          <div className="mb-6 h-2 w-16 rounded bg-white/20" />
          <div className="space-y-2">
            {["Overview", "Workflows", "Users", "Reports"].map((item, i) => (
              <div
                key={item}
                className={cn(
                  "rounded px-2 py-1.5 text-[0.6rem] font-medium",
                  i === 0 ? "bg-brand-500 text-white" : "text-white/55",
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-ink-50/50 p-3 sm:p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-2.5 w-24 rounded bg-ink-200" />
            <div className="size-6 rounded-full bg-brand-100" />
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {["Revenue", "Active Users", "Tasks"].map((label) => (
              <div key={label} className="rounded-lg bg-white p-2.5 sm:p-3">
                <p className="text-[0.55rem] text-ink-400 sm:text-[0.6rem]">{label}</p>
                <p className="mt-1 font-heading text-sm font-semibold text-ink-700 sm:text-base">
                  {label === "Revenue" ? "$84.2k" : label === "Active Users" ? "1,248" : "326"}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-white p-3">
            <div className="mb-3 h-2 w-20 rounded bg-ink-200" />
            <div className="flex h-20 items-end gap-1.5 sm:h-24">
              {[38, 52, 44, 68, 58, 74, 62].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-brand-400/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="mt-3 space-y-2 rounded-lg bg-white p-3">
            {[1, 2, 3].map((row) => (
              <div key={row} className="flex items-center gap-2">
                <div className="size-5 rounded-full bg-brand-100" />
                <div className="h-2 flex-1 rounded bg-ink-100" />
                <div className="h-2 w-10 rounded bg-ink-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

export function WebAppMockup({ className }: { className?: string }) {
  return (
    <MockupShell className={cn("aspect-[4/3]", className)}>
      <div className="border-b border-ink-100 bg-ink-50 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-ink-300" />
          <span className="size-2 rounded-full bg-ink-300" />
          <span className="size-2 rounded-full bg-ink-300" />
          <div className="ml-2 h-5 flex-1 rounded-md bg-white px-2 text-[0.55rem] leading-5 text-ink-400">
            app.yourproduct.com/dashboard
          </div>
        </div>
      </div>
      <div className="grid min-h-[16rem] grid-cols-[1fr_2fr] gap-0 sm:min-h-[18rem]">
        <div className="border-r border-ink-100 bg-white p-3">
          <div className="space-y-2">
            {["Home", "Projects", "Team", "Billing"].map((item, i) => (
              <div
                key={item}
                className={cn(
                  "rounded px-2 py-1 text-[0.6rem] font-medium",
                  i === 0 ? "bg-brand-50 text-brand-700" : "text-ink-500",
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-ink-50/40 p-3 sm:p-4">
          <div className="h-2.5 w-28 rounded bg-ink-200" />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="col-span-2 rounded-lg bg-white p-3">
              <div className="h-2 w-16 rounded bg-ink-200" />
              <div className="mt-3 h-16 rounded-md bg-gradient-to-r from-brand-100 to-brand-50" />
            </div>
            <div className="rounded-lg bg-white p-3">
              <div className="h-2 w-12 rounded bg-ink-200" />
              <div className="mt-2 h-8 rounded bg-brand-100" />
            </div>
            <div className="rounded-lg bg-white p-3">
              <div className="h-2 w-12 rounded bg-ink-200" />
              <div className="mt-2 h-8 rounded bg-ink-100" />
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

function PhoneScreen({ variant }: { variant: "login" | "home" | "list" | "profile" }) {
  return (
    <div className="h-full rounded-[1.1rem] bg-white p-2.5">
      {variant === "login" && (
        <>
          <div className="mx-auto mt-4 size-8 rounded-xl bg-brand-500" />
          <div className="mx-auto mt-4 h-2 w-16 rounded bg-ink-200" />
          <div className="mt-4 space-y-2">
            <div className="h-6 rounded-md bg-ink-50" />
            <div className="h-6 rounded-md bg-ink-50" />
            <div className="mt-2 h-6 rounded-md bg-brand-500" />
          </div>
        </>
      )}
      {variant === "home" && (
        <>
          <div className="h-2 w-14 rounded bg-ink-200" />
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            <div className="h-10 rounded-md bg-brand-100" />
            <div className="h-10 rounded-md bg-brand-50" />
            <div className="col-span-2 h-14 rounded-md bg-ink-50" />
          </div>
        </>
      )}
      {variant === "list" && (
        <div className="mt-2 space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-2">
              <div className="size-6 rounded-md bg-brand-100" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 w-full rounded bg-ink-200" />
                <div className="h-1.5 w-2/3 rounded bg-ink-100" />
              </div>
            </div>
          ))}
        </div>
      )}
      {variant === "profile" && (
        <>
          <div className="mx-auto size-10 rounded-full bg-brand-100" />
          <div className="mx-auto mt-2 h-2 w-12 rounded bg-ink-200" />
          <div className="mt-4 space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-5 rounded-md bg-ink-50" />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function MobileAppsMockup({ className }: { className?: string }) {
  const phones: Array<"login" | "home" | "list" | "profile"> = [
    "login",
    "home",
    "list",
    "profile",
  ];

  return (
    <div className={cn("relative flex items-end justify-center gap-2 sm:gap-3", className)}>
      {phones.map((variant, index) => (
        <div
          key={variant}
          className={cn(
            "w-[24%] min-w-[4.5rem] max-w-[7rem] rounded-[1.4rem] border-[3px] border-ink-800 bg-ink-800 p-1 shadow-[0_16px_40px_rgb(29_129_242/0.15)] sm:max-w-[8.5rem]",
            index === 1 && "-mb-2 scale-105 sm:-mb-4",
            index === 0 && "opacity-90",
            index === 3 && "opacity-90",
          )}
        >
          <div className="aspect-[9/18]">
            <PhoneScreen variant={variant} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function AiSolutionsMockup({ className }: { className?: string }) {
  return (
    <MockupShell className={cn("aspect-[4/3]", className)}>
      <div className="grid min-h-[18rem] grid-cols-1 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="border-b border-ink-100 p-4 sm:border-r sm:border-b-0">
          <div className="mb-3 flex items-center gap-2">
            <div className="size-7 rounded-full bg-brand-500" />
            <div>
              <div className="h-2 w-16 rounded bg-ink-200" />
              <div className="mt-1 h-1.5 w-24 rounded bg-ink-100" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-brand-500 px-3 py-2 text-[0.6rem] text-white">
              Summarize this week&apos;s support tickets
            </div>
            <div className="max-w-[90%] rounded-2xl rounded-bl-md bg-ink-50 px-3 py-2 text-[0.6rem] text-ink-600">
              42 tickets resolved. Top issue: onboarding setup. 3 accounts need follow-up.
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-brand-50 p-3">
            <p className="text-[0.55rem] font-semibold text-brand-700">Automation</p>
            <div className="mt-2 flex gap-2">
              {["Classify", "Route", "Notify"].map((step) => (
                <div
                  key={step}
                  className="flex-1 rounded bg-white px-2 py-1.5 text-center text-[0.55rem] text-ink-600"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-ink-50/50 p-4">
          <div className="h-2 w-20 rounded bg-ink-200" />
          <div className="mt-4 space-y-2">
            {["Insights", "Accuracy", "Time saved"].map((label, i) => (
              <div key={label} className="rounded-lg bg-white p-2.5">
                <p className="text-[0.55rem] text-ink-400">{label}</p>
                <p className="font-heading text-sm font-semibold text-ink-700">
                  {["+18%", "94%", "12h/wk"][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

export function UiUxDesignMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative min-h-[18rem] sm:min-h-[20rem]", className)}>
      <div className="absolute top-0 left-0 w-[58%] rotate-[-2deg]">
        <MockupShell>
          <div className="aspect-[4/3] bg-gradient-to-br from-brand-50 to-white p-4">
            <div className="h-2.5 w-20 rounded bg-ink-200" />
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="h-16 rounded-lg bg-white shadow-sm" />
              <div className="h-16 rounded-lg bg-brand-100" />
              <div className="col-span-2 h-10 rounded-lg bg-white shadow-sm" />
            </div>
          </div>
        </MockupShell>
      </div>
      <div className="absolute top-8 right-0 w-[52%] rotate-[2deg]">
        <MockupShell>
          <div className="aspect-[3/4] bg-white p-3">
            <div className="rounded-lg border border-dashed border-ink-200 p-3">
              <div className="h-2 w-14 rounded bg-ink-200" />
              <div className="mt-3 space-y-2">
                <div className="h-8 rounded bg-ink-50" />
                <div className="h-8 rounded bg-brand-50" />
              </div>
            </div>
          </div>
        </MockupShell>
      </div>
      <div className="absolute bottom-0 left-[18%] w-[40%]">
        <div className="rounded-xl border border-ink-200 bg-white px-3 py-2 shadow-lg">
          <div className="flex gap-2">
            {["Button", "Card", "Input"].map((c) => (
              <span
                key={c}
                className="rounded bg-brand-50 px-2 py-1 text-[0.55rem] font-medium text-brand-700"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CloudDevopsMockup({ className }: { className?: string }) {
  return (
    <MockupShell className={cn("aspect-[4/3]", className)}>
      <div className="grid min-h-[18rem] grid-cols-1 gap-0 sm:grid-cols-2">
        <div className="border-b border-ink-100 p-4 sm:border-r sm:border-b-0">
          <p className="text-[0.6rem] font-semibold tracking-wide text-brand-600 uppercase">
            Architecture
          </p>
          <div className="mt-4 space-y-2">
            {["Application", "API / Services", "Database", "Cloud"].map((node, i) => (
              <div key={node} className="flex items-center gap-2">
                <div className="flex-1 rounded-lg border border-ink-200 bg-white px-3 py-2 text-[0.65rem] font-medium text-ink-700">
                  {node}
                </div>
                {i < 3 ? <span className="text-ink-300">↓</span> : null}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-ink-50/50 p-4">
          <p className="text-[0.6rem] font-semibold tracking-wide text-brand-600 uppercase">
            CI/CD Pipeline
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Build", "Test", "Deploy", "Monitor"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="rounded-lg bg-white px-2.5 py-1.5 text-[0.6rem] font-medium text-ink-700 shadow-sm">
                  {step}
                </div>
                {i < 3 ? <span className="text-ink-300">→</span> : null}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg bg-white p-3">
            <div className="flex items-center justify-between text-[0.55rem] text-ink-500">
              <span>Uptime</span>
              <span className="font-semibold text-brand-600">99.9%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-100">
              <div className="h-full w-[92%] rounded-full bg-brand-500" />
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

export type ServiceVisualType =
  | "custom-software"
  | "web-applications"
  | "mobile-apps"
  | "ai-solutions"
  | "ui-ux-design"
  | "cloud-devops";

export function ServiceHeroVisual({
  type,
  className,
}: {
  type: ServiceVisualType;
  className?: string;
}) {
  switch (type) {
    case "custom-software":
      return <CustomSoftwareMockup className={className} />;
    case "web-applications":
      return <WebAppMockup className={className} />;
    case "mobile-apps":
      return <MobileAppsMockup className={className} />;
    case "ai-solutions":
      return <AiSolutionsMockup className={className} />;
    case "ui-ux-design":
      return <UiUxDesignMockup className={className} />;
    case "cloud-devops":
      return <CloudDevopsMockup className={className} />;
  }
}
