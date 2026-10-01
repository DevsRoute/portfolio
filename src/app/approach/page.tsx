import type { Metadata } from "next";

import {
  ApproachCollaboration,
  ApproachCommunication,
  ApproachHero,
  ApproachPrinciples,
  ApproachProcess,
  ApproachTechnology,
  ApproachTimeline,
} from "@/components/approach/ApproachSections";

export const metadata: Metadata = {
  title: {
    absolute:
      "Our Approach | Software Product Development Process | DevsRoute",
  },
  description:
    "See how DevsRoute takes digital products from discovery and design through development, launch, and continuous improvement.",
  openGraph: {
    title: "Our Approach | Software Product Development Process | DevsRoute",
    description:
      "See how DevsRoute takes digital products from discovery and design through development, launch, and continuous improvement.",
  },
};

export default function ApproachPage() {
  return (
    <main className="flex-1">
      <ApproachHero />
      <ApproachProcess />
      <ApproachCollaboration />
      <ApproachPrinciples />
      <ApproachCommunication />
      <ApproachTechnology />
      <ApproachTimeline />
    </main>
  );
}
