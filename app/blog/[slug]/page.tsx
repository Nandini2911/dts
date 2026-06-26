import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText, PortableTextComponents } from "@portabletext/react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { POST_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import BlogShareButtons from "@/components/BlogShareButtons";



export const revalidate = 60;
export const dynamicParams = true;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Post = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  authorName?: string;
  excerpt?: string;
  bodyText?: string;
  mainImage?: any;
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
  seoKeywords?: string[];
  canonicalUrl?: string;
  viewCount?: number;
  body?: any;
};

type TocItem = {
  id: string;
  title: string;
};

const blogCategoryOrder = [
  "All",
  "PR & Media",
  "Celebrity Management",
  "Event Management",
  "Guest Management",
  "Digital Marketing",
  "Social Media Marketing",
  "Website Development",
  "SEO",
  "AI Video & VFX",
  "Brand Strategy",
];

function formatDate(date?: string) {
  if (!date) return "DTS Insight";

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function getReadTime(post: Post) {
  const text = `${post.bodyText || ""} ${post.excerpt || ""}`.trim();

  if (!text) return "3 min read";

  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));

  return `${minutes} min read`;
}

function getBlockText(block: any) {
  if (!block) return "";

  if (typeof block === "string") return block;

  if (Array.isArray(block.children)) {
    return block.children.map((child: any) => child?.text || "").join("");
  }

  return "";
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function getTableOfContents(body: any): TocItem[] {
  if (!Array.isArray(body)) return [];

  return body
    .filter((block) => block?._type === "block" && block?.style === "h2")
    .map((block) => {
      const title = getBlockText(block);

      return {
        title,
        id: slugify(title),
      };
    })
    .filter((item) => item.title && item.id);
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value) return null;

      return (
        <div className="relative my-10 h-[260px] w-full overflow-hidden rounded-[28px] bg-[#DDE8F7] sm:h-[420px]">
          <Image
            src={urlFor(value).width(1400).height(850).url()}
            alt={value.alt || "Double Trouble Studio blog image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },

  block: {
    h2: ({ children, value }: any) => {
      const title = getBlockText(value);
      const id = slugify(title);

      return (
        <h2
          id={id}
          className="scroll-mt-28 pt-5 text-3xl font-black leading-tight tracking-[-0.04em] text-[#0D2444] sm:text-4xl"
          style={{
            fontFamily: "New York, ui-serif, Georgia, serif",
          }}
        >
          {children}
        </h2>
      );
    },

    h3: ({ children }) => (
      <h3
        className="mt-9 text-2xl font-black leading-tight tracking-[-0.03em] text-[#0D2444]"
        style={{
          fontFamily: "New York, ui-serif, Georgia, serif",
        }}
      >
        {children}
      </h3>
    ),

    normal: ({ children }) => (
      <p className="text-[17px] leading-8 text-[#263D58]">{children}</p>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-[28px] border-l-4 border-[#315E91] bg-[#F7FAFF] p-6 text-xl font-semibold leading-8 text-[#0D2444]">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="my-6 list-disc space-y-3 pl-6 text-[17px] leading-8 text-[#263D58]">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="my-6 list-decimal space-y-3 pl-6 text-[17px] leading-8 text-[#263D58]">
        {children}
      </ol>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-black text-[#0D2444]">{children}</strong>
    ),

    link: ({ children, value }) => {
      const href = value?.href || "#";

      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#315E91] underline underline-offset-4"
        >
          {children}
        </a>
      );
    },
  },
};

export async function generateStaticParams() {
  const now = new Date().toISOString();

  const posts = await client.fetch<Post[]>(POSTS_QUERY, {
    now,
  });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const now = new Date().toISOString();

  const post = await client.fetch<Post | null>(POST_QUERY, {
    slug,
    now,
  });

  if (!post) {
    return {
      title: "Blog Not Found | Double Trouble Studio",
      description: "This blog post is not available.",
    };
  }

  const title = post.seoTitle || post.title;

  const description =
    post.seoDescription ||
    post.excerpt ||
    "Read insights from Double Trouble Studio.";

  const keywords = [
    ...(post.seoKeywords || []),
    post.focusKeyword,
    post.category,
    "Double Trouble Studio",
    "DTS",
    "Digital Marketing Agency",
    "PR Agency",
    "Event Management",
  ].filter(Boolean) as string[];

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : undefined;

  return {
    title: `${title} | Double Trouble Studio`,
    description,
    keywords,
    alternates: {
      canonical: post.canonicalUrl || `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      url: `/blog/${post.slug}`,
      siteName: "Double Trouble Studio",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.mainImage?.alt || post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const now = new Date().toISOString();

  const post = await client.fetch<Post | null>(POST_QUERY, {
    slug,
    now,
  });

  if (!post) {
    notFound();
  }

  const allPosts = await client.fetch<Post[]>(POSTS_QUERY, {
    now,
  });

  const allRelatedPosts = allPosts
    .filter((item) => item.slug !== post.slug)
    .filter((item) => {
      if (!post.category) return true;

      return item.category === post.category;
    });

  const relatedPosts = allRelatedPosts.slice(0, 3);
  const sidebarRelatedPosts = allRelatedPosts.slice(0, 5);

  const relatedExploreHref = post.category
    ? `/blog?category=${encodeURIComponent(post.category)}#blog-results`
    : "/blog#blog-results";

  const categoryCounts = blogCategoryOrder.map((category) => {
    const count =
      category === "All"
        ? allPosts.length
        : allPosts.filter((item) => item.category === category).length;

    const href =
      category === "All"
        ? "/blog#blog-results"
        : `/blog?category=${encodeURIComponent(category)}#blog-results`;

    return {
      category,
      count,
      href,
    };
  });

  const tableOfContents = getTableOfContents(post.body);
  const readTime = getReadTime(post);

  const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.dtsworld.in";

const shareUrl = `${siteUrl.replace(/\/$/, "")}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    image: post.mainImage
      ? urlFor(post.mainImage).width(1200).height(630).url()
      : undefined,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.authorName || "Double Trouble Studio",
    },
    publisher: {
      "@type": "Organization",
      name: "Double Trouble Studio",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/blog/${post.slug}`,
    },
  };

  return (
    <main className="overflow-hidden bg-[#F7FAFF] text-[#0D2444]">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      {/* Hero */}
      <section className="relative isolate px-5 pb-12 pt-28 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#DDEBFF] blur-3xl" />
        <div className="absolute right-0 top-32 -z-10 h-72 w-72 rounded-full bg-[#BFD7F6] opacity-60 blur-3xl" />
        <div className="absolute left-0 top-60 -z-10 h-72 w-72 rounded-full bg-white opacity-80 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <Link
              href="/blog"
              className="mb-6 inline-flex rounded-full border border-[#C9DAF0] bg-white/80 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#315E91] shadow-sm backdrop-blur transition hover:bg-[#EAF2FF]"
            >
              ← Back to Blog
            </Link>

            <div className="mb-5 flex flex-wrap justify-center gap-3">
              <span className="inline-flex rounded-full bg-[#0D2444] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                {post.category || "DTS Insight"}
              </span>

              <span className="inline-flex rounded-full border border-[#C9DAF0] bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#315E91]">
                {formatDate(post.publishedAt)}
              </span>

              <span className="inline-flex rounded-full border border-[#C9DAF0] bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#315E91]">
                {readTime}
              </span>
            </div>

            <h1
              className="text-[40px] font-black leading-[0.98] tracking-[-0.07em] text-[#0D2444] sm:text-6xl lg:text-7xl"
              style={{
                fontFamily: "New York, ui-serif, Georgia, serif",
              }}
            >
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#38506D] sm:text-lg">
                {post.excerpt}
              </p>
            )}

            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3 rounded-[26px] border border-[#DCE7F5] bg-white/80 p-3 shadow-xl shadow-[#0D2444]/10 backdrop-blur">
              <span className="rounded-full bg-[#F7FAFF] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#0D2444]">
                By {post.authorName || "Double Trouble Studio"}
              </span>

              <span className="rounded-full bg-[#F7FAFF] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#53677F]">
                Published {formatDate(post.publishedAt)}
              </span>

              <span className="rounded-full bg-[#F7FAFF] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#53677F]">
                {readTime}
              </span>
            </div>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-[42px] border border-[#D7E5F6] bg-white p-3 shadow-2xl shadow-[#173B6414]">
            <div className="relative h-[280px] overflow-hidden rounded-[34px] bg-[#DDE8F7] sm:h-[480px] lg:h-[620px]">
              {post.mainImage ? (
                <Image
                  src={urlFor(post.mainImage).width(1600).height(950).url()}
                  alt={post.mainImage?.alt || post.title}
                  fill
                  priority
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#0D2444] via-[#315E91] to-[#6288B9] text-5xl font-black text-white">
                  DTS Blog
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
{/* Blog Content */}
<section className="px-5 pb-20 pt-8 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-start gap-10 lg:grid-cols-[340px_minmax(0,1fr)]">
      
      {/* Left Sticky Sidebar */}
      <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
        

        {/* Table of Contents */}
        {tableOfContents.length > 0 && (
          <div className="rounded-[32px] border border-[#DCE7F5] bg-white p-6 shadow-xl shadow-[#0D2444]/10">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6288B9]">
              Table of Contents
            </p>

            <div className="mt-5 space-y-3">
              {tableOfContents.map((item, index) => (
                <a
                  key={`${item.id}-${index}`}
                  href={`#${item.id}`}
                  className="grid grid-cols-[28px_1fr] gap-3 rounded-[18px] bg-[#F7FAFF] px-4 py-3 text-sm font-bold leading-6 text-[#38506D] transition hover:bg-[#EAF2FF] hover:text-[#0D2444]"
                >
                  <span className="text-xs font-black text-[#6288B9]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Share Blog */}
<BlogShareButtons
  title={post.title}
  excerpt={post.excerpt}
  url={shareUrl}
/>

        {/* Related Blogs */}
        <div className="rounded-[32px] border border-[#DCE7F5] bg-white p-6 shadow-xl shadow-[#0D2444]/10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6288B9]">
                Related Blogs
              </p>

              <h3
                className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#0D2444]"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                Similar Reads
              </h3>
            </div>

            <span className="rounded-full bg-[#EAF2FF] px-3 py-2 text-xs font-black text-[#315E91]">
              {allRelatedPosts.length}
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {sidebarRelatedPosts.length === 0 ? (
              <p className="rounded-[20px] bg-[#F7FAFF] p-4 text-sm font-semibold leading-6 text-[#53677F]">
                No related blogs available in this category yet.
              </p>
            ) : (
              sidebarRelatedPosts.map((item) => (
                <Link
                  key={item._id}
                  href={`/blog/${item.slug}`}
                  className="group block rounded-[22px] border border-[#E5EEF9] bg-[#F7FAFF] p-4 transition hover:-translate-y-0.5 hover:border-[#C9DAF0] hover:bg-[#EAF2FF]"
                >
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#6288B9]">
                    {item.category || "DTS Insight"} • {getReadTime(item)}
                  </p>

                  <h4
                    className="line-clamp-2 text-sm font-black leading-5 tracking-[-0.03em] text-[#0D2444] transition group-hover:text-[#315E91]"
                    style={{
                      fontFamily: "New York, ui-serif, Georgia, serif",
                    }}
                  >
                    {item.title}
                  </h4>

                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7B8EA5]">
                    {formatDate(item.publishedAt)}
                  </p>
                </Link>
              ))
            )}
          </div>

          <Link
            href={relatedExploreHref}
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#0D2444] px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#315E91]"
          >
            Explore More →
          </Link>
        </div>

        {/* All Categories */}
        <div className="rounded-[32px] border border-[#DCE7F5] bg-white p-6 shadow-xl shadow-[#0D2444]/10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6288B9]">
                All Categories
              </p>

              <h3
                className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#0D2444]"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                Blog Topics
              </h3>
            </div>

            <span className="rounded-full bg-[#0D2444] px-3 py-2 text-xs font-black text-white">
              {allPosts.length}
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {categoryCounts.map((item) => {
              const isActive =
                item.category !== "All" && item.category === post.category;

              return (
                <Link
                  key={item.category}
                  href={item.href}
                  className={`flex items-center justify-between gap-4 rounded-[20px] border px-4 py-3 transition hover:-translate-y-0.5 ${
                    isActive
                      ? "border-[#0D2444] bg-[#0D2444] text-white shadow-lg shadow-[#0D2444]/15"
                      : "border-[#E5EEF9] bg-[#F7FAFF] text-[#0D2444] hover:bg-[#EAF2FF]"
                  }`}
                >
                  <span className="text-sm font-black leading-5">
                    {item.category}
                  </span>

                  <span
                    className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-xs font-black ${
                      isActive
                        ? "bg-white text-[#0D2444]"
                        : "bg-white text-[#315E91]"
                    }`}
                  >
                    {item.count}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Scrollable Article Content */}
<article className="rounded-[38px] border border-[#DCE7F5] bg-white p-6 shadow-xl shadow-[#0D2444]/10 sm:p-9 lg:h-[3000px] lg:overflow-y-auto lg:p-12 lg:[scrollbar-width:none] lg:[-ms-overflow-style:none] lg:[&::-webkit-scrollbar]:hidden">{post.body ? (
          <div className="prose prose-lg max-w-none space-y-7">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>
        ) : (
          <div className="rounded-[28px] border border-dashed border-[#C9DAF0] bg-[#F7FAFF] p-8 text-center">
            <h2 className="text-2xl font-black text-[#0D2444]">
              Blog content coming soon.
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#53677F]">
              Add content in Sanity Studio and publish the blog.
            </p>
          </div>
        )}

        <div className="mt-12 rounded-[30px] bg-gradient-to-br from-[#0D2444] via-[#193B63] to-[#6288B9] p-7 text-white sm:p-9">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#DDE8F7]">
            Need this for your brand?
          </p>

          <h2
            className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-4xl"
            style={{
              fontFamily: "New York, ui-serif, Georgia, serif",
            }}
          >
            Let DTS build your next campaign.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#DDE8F7]">
            From PR, celebrity management and events to websites, social media,
            SEO and AI video production — Double Trouble Studio helps brands
            grow with strategy and execution.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black text-[#0D2444] transition hover:bg-[#EAF2FF]"
          >
            Discuss Your Requirement →
          </Link>
        </div>
      </article>
    </div>
  </div>
</section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-5 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#6288B9]">
                  Related Blogs
                </p>

                <h2
                  className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#0D2444] sm:text-5xl"
                  style={{
                    fontFamily: "New York, ui-serif, Georgia, serif",
                  }}
                >
                  More DTS Insights
                </h2>
              </div>

              <Link
                href={relatedExploreHref}
                className="inline-flex w-fit rounded-full bg-[#0D2444] px-6 py-3 text-sm font-black text-white transition hover:bg-[#315E91]"
              >
                Explore More →
              </Link>
            </div>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item._id}
                  href={`/blog/${item.slug}`}
                  className="group overflow-hidden rounded-[32px] border border-[#DCE7F5] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0D2444]/10"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-[#DDE8F7]">
                    {item.mainImage ? (
                      <Image
                        src={urlFor(item.mainImage)
                          .width(900)
                          .height(650)
                          .url()}
                        alt={item.mainImage?.alt || item.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#0D2444] via-[#315E91] to-[#6288B9] text-2xl font-black text-white">
                        DTS Blog
                      </div>
                    )}

                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#315E91] backdrop-blur">
                      {item.category || "DTS Insight"}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#315E91]">
                        {formatDate(item.publishedAt)}
                      </span>

                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7B8EA5]">
                        {getReadTime(item)}
                      </span>
                    </div>

                    <h3
                      className="text-2xl font-black leading-tight tracking-[-0.04em] text-[#0D2444] transition group-hover:text-[#315E91]"
                      style={{
                        fontFamily: "New York, ui-serif, Georgia, serif",
                      }}
                    >
                      {item.title}
                    </h3>

                    {item.excerpt && (
                      <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#53677F]">
                        {item.excerpt}
                      </p>
                    )}

                    <div className="mt-7 flex items-center justify-between border-t border-[#E5EEF9] pt-5">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6288B9]">
                        By {item.authorName || "Double Trouble Studio"}
                      </p>

                      <p className="text-sm font-black text-[#315E91]">
                        Read →
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}