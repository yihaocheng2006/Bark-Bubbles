import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Bark & Bubbles | Dog Grooming Studio",
  description:
    "Gentle, professional dog grooming in Anytown. Book a bath, trim, or full groom online — certified groomers, a calm studio, and appointments priced by dog size.",
};

export default function Home() {
  return <HomeClient />;
}
