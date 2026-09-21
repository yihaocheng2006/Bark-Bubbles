import type { Metadata } from "next";
import BookClient from "./BookClient";

export const metadata: Metadata = {
  title: "Book a Grooming | Bark & Bubbles",
  description:
    "Book your dog's grooming appointment online — pick a date, time, and dog size, and get an instant confirmation by email.",
};

export default function BookPage() {
  return <BookClient />;
}
