import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-posts";
import BlogHero from "./BlogHero";
import BlogPostGrid from "./BlogPostGrid";

export const metadata: Metadata = {
  title: "Blog | Bark & Bubbles",
  description:
    "Dog care tips, grooming advice, and recommendations from the Bark & Bubbles team.",
};

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <BlogHero />
      <BlogPostGrid posts={posts} />
    </>
  );
}
