import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Bark & Bubbles",
  description:
    "Get in touch with Bark & Bubbles — call, email, or send us a message. Find our hours, location, and directions to the studio.",
};

export default function ContactPage() {
  return <ContactClient />;
}
