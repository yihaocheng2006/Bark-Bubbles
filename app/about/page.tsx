import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Bark & Bubbles",
  description:
    "Meet the team behind Bark & Bubbles — a family-run grooming studio built on trust, gentle handling, and making every dog feel safe and loved.",
};

export default function AboutPage() {
  return <AboutClient />;
}
