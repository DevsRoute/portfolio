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
import { pageMetadata } from "@/lib/seo";

const title = "Our Approach | Software Product Development Process | DevsRoute";
const description =
  "How DevsRoute takes a product from discovery and design through build and launch, with a clear scope and a defined end date.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/approach",
  absolute: true,
});

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
