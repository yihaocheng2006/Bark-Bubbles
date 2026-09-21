"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPostGrid({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(() => {
    const seen = new Set<string>();
    posts.forEach((post) => seen.add(post.tags[0]));
    return ["All Posts", ...Array.from(seen)];
  }, [posts]);

  const [active, setActive] = useState("All Posts");

  const filtered =
    active === "All Posts" ? posts : posts.filter((post) => post.tags[0] === active);

  return (
    <section className="w-full bg-white px-8 pb-20 pt-4 sm:px-16">
      <div className="mx-auto w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-b border-black/10 pb-5 text-sm font-semibold uppercase tracking-wide [font-family:var(--font-fredoka)]">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`border-b-2 pb-1 transition-colors ${
                active === category
                  ? "border-[#c1440e] text-[#c1440e]"
                  : "border-transparent text-zinc-400 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <article key={post.slug} className="flex flex-col">
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-zinc-400 [font-family:var(--font-fredoka)]">
                {post.tags[0]}
              </span>
              <Link href={`/blog/${post.slug}`} className="mt-1">
                <h2 className="text-xl font-bold leading-snug text-[#c1440e] transition-colors hover:text-black [font-family:var(--font-fredoka)]">
                  {post.title}
                </h2>
              </Link>
              <p className="mt-1 text-sm text-zinc-500">
                by {post.author} &middot; {formatDate(post.date)}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
