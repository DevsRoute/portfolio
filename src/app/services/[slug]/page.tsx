import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePageContent } from "@/components/services/ServicePageContent";
import {
  getServicePage,
  getServicePageSlugs,
} from "@/lib/services/service-pages-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServicePageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {};
  }

  return {
    title: {
      absolute: service.meta.title,
    },
    description: service.meta.description,
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex-1">
      <ServicePageContent service={service} />
    </main>
  );
}
