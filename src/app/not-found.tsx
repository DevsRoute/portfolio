import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not on the DevsRoute site.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex-1">
      <section className="bg-[#F4F7FC] pt-40 pb-20 sm:pt-44 lg:pt-48">
        <div className="container-site max-w-2xl">
          <p className="font-mono text-xs tracking-[0.14em] text-brand-600 uppercase">
            404
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl">
            This page is not available.
          </h1>
          <p className="mt-4 text-base leading-7 text-ink-500">
            The address may be wrong, or the page may have moved. Start from the
            homepage, the work, or contact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/" size="lg" arrow={false}>
              Go to the homepage
            </Button>
            <Link
              href="/work"
              className="inline-flex items-center text-sm font-semibold text-brand-600"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
