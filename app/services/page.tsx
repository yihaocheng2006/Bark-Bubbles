import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Bark & Bubbles",
  description:
    "Grooming services and pricing by dog size — bath & brush, full grooming, nail trims, and de-shedding, plus add-ons like teeth brushing and flea treatment.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
