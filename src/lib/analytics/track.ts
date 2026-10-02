"use client";

type TrackProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: TrackProps }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, props?: TrackProps) {
  if (typeof window === "undefined") return;

  try {
    window.plausible?.(name, props ? { props } : undefined);
  } catch {
    /* ignore */
  }

  try {
    window.gtag?.("event", name, props);
  } catch {
    /* ignore */
  }
}

export function trackCalendlyClick(page: string) {
  trackEvent("calendly_click", { page });
}

export function trackContactSubmit(page: string) {
  trackEvent("contact_submit", { page });
}
