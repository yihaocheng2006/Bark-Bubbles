import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ | Bark & Bubbles",
  description:
    "Answers to common questions about booking, pricing, first-time visits, cancellations, and what to expect at Bark & Bubbles.",
};

export default function FaqPage() {
  return <FaqClient />;
}
