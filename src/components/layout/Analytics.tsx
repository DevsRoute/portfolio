"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const CONSENT_KEY = "dr-analytics-consent";

let utmPersisted = false;

function persistUtmOnce() {
  if (typeof window === "undefined" || utmPersisted) return;
  utmPersisted = true;
  try {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    const utmCampaign = params.get("utm_campaign");
    if (utmSource || utmCampaign) {
      window.sessionStorage.setItem(
        "dr-utm",
        JSON.stringify({
          utm_source: utmSource ?? "",
          utm_campaign: utmCampaign ?? "",
        }),
      );
    }
  } catch {
    /* ignore */
  }
}

function subscribeConsent(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => onStoreChange();
  window.addEventListener("storage", handler);
  window.addEventListener("dr-consent", handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("dr-consent", handler);
  };
}

function getConsentSnapshot(): "granted" | "denied" | null {
  if (typeof window === "undefined") return null;
  persistUtmOnce();
  const v = window.localStorage.getItem(CONSENT_KEY);
  if (v === "granted" || v === "denied") return v;
  return null;
}

function getServerConsentSnapshot(): null {
  return null;
}

export function Analytics() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );

  function grant() {
    window.localStorage.setItem(CONSENT_KEY, "granted");
    window.dispatchEvent(new Event("dr-consent"));
  }

  function deny() {
    window.localStorage.setItem(CONSENT_KEY, "denied");
    window.dispatchEvent(new Event("dr-consent"));
  }

  return (
    <>
      {plausibleDomain ? (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}

      {gaId && consent === "granted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', { analytics_storage: 'granted' });
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {gaId && !plausibleDomain && consent === null ? (
        <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-ink-200 bg-white p-4 shadow-lg sm:p-5">
          <div className="container-site flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-ink-600">
              We use optional analytics cookies to understand site usage. Decline
              by default — nothing loads until you accept. See our{" "}
              <a href="/privacy" className="font-medium text-brand-600 underline">
                Privacy Policy
              </a>
              .
            </p>
            <div className="flex shrink-0 gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                arrow={false}
                onClick={deny}
              >
                Decline
              </Button>
              <Button type="button" size="sm" arrow={false} onClick={grant}>
                Accept
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
