import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug, type BlogPost } from "@/lib/blog-posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Bark & Bubbles" };
  }

  return {
    title: `${post.title} | Bark & Bubbles Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getReadingTime(post: BlogPost) {
  const words = post.content.reduce((count, block) => {
    if (block.type === "list") {
      return count + block.items.join(" ").split(/\s+/).length;
    }
    return count + block.text.split(/\s+/).length;
  }, 0);
  return Math.max(1, Math.round(words / 200));
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function getRelatedPosts(current: BlogPost, count = 3): BlogPost[] {
  const others = blogPosts.filter((post) => post.slug !== current.slug);
  const sameTag = others.filter((post) =>
    post.tags.some((tag) => current.tags.includes(tag))
  );
  const rest = others.filter((post) => !sameTag.includes(post));
  return [...sameTag, ...rest].slice(0, count);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = getReadingTime(post);
  const relatedPosts = getRelatedPosts(post);

  return (
    <>
      <section className="w-full bg-white px-8 pt-14 pb-8 sm:px-16 sm:pt-16">
        <div className="mx-auto w-full max-w-3xl lg:max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-500 transition-colors hover:text-black [font-family:var(--font-fredoka)]"
          >
            ← Back to Blog
          </Link>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#fee199] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#c1440e]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl [font-family:var(--font-fredoka)]">
            {post.title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-7 text-zinc-600">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-black/10 pt-6">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-[#fee199]">
              {post.authorPhoto ? (
                <Image
                  src={post.authorPhoto}
                  alt={post.author}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#fee199] text-sm font-bold text-[#c1440e]">
                  {getInitials(post.author)}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-black [font-family:var(--font-fredoka)]">
                {post.author}
              </span>
              {post.authorRole && (
                <span className="text-xs text-zinc-500">{post.authorRole}</span>
              )}
            </div>
            <span className="ml-auto text-sm text-zinc-500">
              {formatDate(post.date)} &middot; {readingTime} min read
            </span>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-8 pb-4 sm:px-16">
        <div className="relative mx-auto aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-2xl shadow-md lg:max-w-4xl">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="w-full bg-white px-8 py-10 sm:px-16">
        <article className="mx-auto flex w-full max-w-2xl flex-col gap-6 text-lg leading-8 text-zinc-700">
          {post.content.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  className="mt-4 flex items-center gap-3 text-2xl font-bold text-black [font-family:var(--font-fredoka)]"
                >
                  <span className="h-6 w-1.5 shrink-0 rounded-full bg-[#c1440e]" />
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="flex flex-col gap-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c1440e]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-[#c1440e] py-1 pl-5 text-xl italic leading-8 text-zinc-800 [font-family:var(--font-fredoka)]"
                >
                  &ldquo;{block.text}&rdquo;
                </blockquote>
              );
            }
            return <p key={i}>{block.text}</p>;
          })}
        </article>
      </section>

      {relatedPosts.length > 0 && (
        <section className="w-full bg-white px-8 pb-16 sm:px-16">
          <div className="mx-auto w-full max-w-3xl border-t border-black/10 pt-10 lg:max-w-4xl">
            <h2 className="text-2xl font-bold text-black [font-family:var(--font-fredoka)]">
              Keep Reading
            </h2>
            <div className="mt-6 grid w-full grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3">
              {relatedPosts.map((related) => (
                <article key={related.slug} className="flex flex-col">
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group block overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                      <Image
                        src={related.coverImage}
                        alt={related.coverImageAlt}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-zinc-500 [font-family:var(--font-fredoka)]">
                    {related.tags[0]}
                  </span>
                  <Link href={`/blog/${related.slug}`} className="mt-1">
                    <h3 className="text-lg font-bold leading-snug text-[#c1440e] transition-colors hover:text-black [font-family:var(--font-fredoka)]">
                      {related.title}
                    </h3>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="w-full bg-[#fee199] px-8 py-16 sm:px-16">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-sm sm:p-10">
          <h3 className="text-2xl font-bold text-black [font-family:var(--font-fredoka)]">
            Ready to spoil your pup?
          </h3>
          <p className="max-w-md text-zinc-600">
            Book a grooming session and let our team take care of the rest.
          </p>
          <Link
            href="/book"
            className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-base font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Book a Grooming
          </Link>
        </div>
      </section>
    </>
  );
}
