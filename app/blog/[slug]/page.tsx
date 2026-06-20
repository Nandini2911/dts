import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { POST_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export const revalidate = 60;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Post = {
  _id?: string;
  title: string;
  slug: string;
  category?: string;
  excerpt?: string;
  mainImage?: any;
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
  seoKeywords?: string[];
  canonicalUrl?: string;
  body?: any;
  bodyText?: string;
  viewCount?: number;
  isMostRead?: boolean;
  mostReadOrder?: number;
};
const blogCategories = [
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

export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: string }[]>(`
    *[_type == "post" && defined(slug.current)] {
      "slug": slug.current
    }
  `);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch<Post>(POST_QUERY, {
    slug,
  });

  if (!post) {
    return {
      title: "Blog Not Found | Double Trouble Studio",
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

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value) return null;

      return (
        <div className="relative my-10 h-[260px] w-full overflow-hidden rounded-[28px] sm:h-[420px]">
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
          className="scroll-mt-28 pt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-[#0D2444] sm:text-4xl"
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

function formatDate(date?: string) {
  if (!date) return "DTS Insight";

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}


function getBlockText(block: any) {
  if (!block) return "";

  if (typeof block === "string") return block;

  if (Array.isArray(block.children)) {
    return block.children
      .map((child: any) => child?.text || "")
      .join("")
      .trim();
  }

  return "";
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function getTocItems(body?: any[]) {
  if (!body) return [];

  return body
    .filter((block: any) => block.style === "h2" || block.style === "h3")
    .map((block: any) => {
      const title =
        block.children
          ?.map((child: any) => child.text || "")
          .join("")
          .trim() || "";

      return {
        id: `section-${block._key}`,
        title,
        level: block.style === "h3" ? 3 : 2,
      };
    })
    .filter((item) => item.title);
}

function getReadTime(post: Post) {
  const text = `${post.title || ""} ${post.excerpt || ""} ${post.bodyText || ""}`.trim();

  if (!text) return "3 min read";

  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));

  return `${minutes} min read`;
}

function getRelatedPosts(currentPost: Post, allPosts: Post[]) {
  const sameCategory = allPosts.filter(
    (item) =>
      item.slug !== currentPost.slug && item.category === currentPost.category
  );

  const fallbackPosts = allPosts.filter(
    (item) =>
      item.slug !== currentPost.slug &&
      !sameCategory.some((related) => related.slug === item.slug)
  );

  return [...sameCategory, ...fallbackPosts].slice(0, 4);
}

function getCategoryCounts(posts: Post[]) {
  const categoryMap = posts.reduce<Record<string, number>>((acc, post) => {
    const category = post.category || "DTS Insight";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return blogCategories.map((category) => {
    if (category === "All") {
      return {
        category,
        count: posts.length,
      };
    }

    return {
      category,
      count: categoryMap[category] || 0,
    };
  });
}

function MiniSidebarPost({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid grid-cols-[72px_1fr] gap-4 rounded-[22px] border border-[#DCE7F5] bg-white p-3 transition hover:-translate-y-1 hover:border-[#BFD7F6] hover:shadow-lg hover:shadow-[#173B6410]"
    >
      <div className="relative h-[72px] overflow-hidden rounded-[18px] bg-[#DDE8F7]">
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).width(220).height(220).url()}
            alt={post.mainImage?.alt || post.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0D2444] to-[#6288B9] text-xs font-black text-white">
            DTS
          </div>
        )}
      </div>

      <div className="min-w-0">
        <p className="mb-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#6288B9]">
          {post.category || "DTS Blog"}
        </p>

        <h3 className="line-clamp-2 text-sm font-black leading-snug text-[#0D2444] transition group-hover:text-[#315E91]">
          {post.title}
        </h3>

        <p className="mt-1 text-xs font-bold text-[#7B8EA5]">
          {getReadTime(post)}
        </p>
      </div>
    </Link>
  );
}

export default async function SingleBlogPage({ params }: PageProps) {
  const { slug } = await params;

  const [post, allPosts] = await Promise.all([
    client.fetch<Post>(POST_QUERY, { slug }),
    client.fetch<Post[]>(POSTS_QUERY),
  ]);

  if (!post) {
    notFound();
  }

  const title = post.seoTitle || post.title;
  const description =
    post.seoDescription || post.excerpt || "DTS blog insight.";

  const tocItems = getTocItems(post.body);
  const relatedPosts = getRelatedPosts(post, allPosts);
  const categoryCounts = getCategoryCounts(allPosts);
  const exploreMorePosts = allPosts
    .filter(
      (item) =>
        item.slug !== post.slug &&
        !relatedPosts.some((related) => related.slug === item.slug)
    )
    .slice(0, 4);

  const mainImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: mainImageUrl ? [mainImageUrl] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    articleSection: post.category,
    keywords: [
      ...(post.seoKeywords || []),
      post.focusKeyword,
      post.category,
      "Double Trouble Studio",
      "DTS",
    ]
      .filter(Boolean)
      .join(", "),
    author: {
      "@type": "Organization",
      name: "Double Trouble Studio",
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `/blog/${post.slug}`,
      },
    ],
  };

  return (
    <main className="overflow-hidden bg-[#F7FAFF] text-[#0D2444]">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="relative isolate px-5 pb-14 pt-28 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#DDEBFF] blur-3xl" />
        <div className="absolute right-0 top-32 -z-10 h-72 w-72 rounded-full bg-[#BFD7F6] opacity-60 blur-3xl" />
        <div className="absolute left-0 top-60 -z-10 h-72 w-72 rounded-full bg-white opacity-80 blur-3xl" />

        <article className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#315E91]">
              {post.category || "DTS Blog"}
            </span>
          

          <div className="mb-5 flex flex-wrap justify-center gap-3">
          

            <span className="inline-flex rounded-full border border-[#DCE7F5] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#7B8EA5]">
              {formatDate(post.publishedAt)}
            </span>
          </div>

          <h1
            className="mx-auto max-w-5xl text-[42px] font-black leading-[0.98] tracking-[-0.07em] text-[#0D2444] sm:text-6xl md:text-7xl"
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

          {post.focusKeyword && (
            <p className="mx-auto mt-5 inline-flex rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6288B9] shadow-sm">
              Focus: {post.focusKeyword}
            </p>
          )}
        </article>
      </section>

      {/* Featured Image */}
      {post.mainImage && (
        <section className="px-5 pb-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="relative h-[280px] w-full overflow-hidden rounded-[34px] border border-[#DCE7F5] bg-[#DDE8F7] shadow-2xl shadow-[#0D2444]/10 sm:h-[520px]">
              <Image
                src={urlFor(post.mainImage).width(1600).height(950).url()}
                alt={post.mainImage?.alt || post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

    {/* Blog Content */}
<section className="px-5 pb-20 sm:px-6 lg:px-8">
  <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1fr_320px]">
    <article
 
  className="no-scrollbar rounded-[38px] border border-[#DCE7F5] bg-white p-6 shadow-xl shadow-[#173B6410] sm:p-10 lg:h-[calc(375vh-400px)] lg:overflow-y-auto lg:p-12 lg:pr-8"
>
  <div className="space-y-7">
    {post.body ? (
      <PortableText
        value={post.body}
        components={portableTextComponents}
      />
    ) : (
      <p className="text-[17px] leading-8 text-[#263D58]">
        No blog content found.
      </p>
    )}
  </div>
</article>

    {/* Sidebar */}
    <aside className="space-y-5 lg:sticky lg:top-28 lg:h-fit lg:self-start">
            {/* Table of Contents */}
            {tocItems.length > 0 && (
              <div className="rounded-[34px] border border-[#DCE7F5] bg-white p-6 shadow-xl shadow-[#173B6410]">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6288B9]">
                  Table of Contents
                </p>

                <div className="mt-5 grid gap-3">
                  {tocItems.map((item, index) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group grid grid-cols-[28px_1fr] gap-3 rounded-[18px] bg-[#F7FAFF] px-4 py-3 text-sm font-bold leading-6 text-[#38506D] transition hover:bg-[#EAF2FF] hover:text-[#0D2444]"
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

            {/* Related Blogs */}
            {relatedPosts.length > 0 && (
              <div className="rounded-[34px] border border-[#DCE7F5] bg-white p-6 shadow-xl shadow-[#173B6410]">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6288B9]">
                  Related Blogs
                </p>

                <div className="mt-5 grid gap-3">
                  {relatedPosts.map((relatedPost) => (
                    <MiniSidebarPost key={relatedPost.slug} post={relatedPost} />
                  ))}
                </div>
              </div>
            )}

            {/* Categories With Count */}
            {categoryCounts.length > 0 && (
              <div className="rounded-[34px] border border-[#DCE7F5] bg-white p-6 shadow-xl shadow-[#173B6410]">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6288B9]">
                  Categories
                </p>

                <div className="mt-5 grid gap-2">
                  {categoryCounts.map((item) => {
                  const isActive =
  item.category !== "All" && item.category === post.category;

                    return (
                      <Link
                        key={item.category}
                        href={
  item.category === "All"
    ? "/blog#blog-results"
    : `/blog?category=${encodeURIComponent(item.category)}#blog-results`
}
                        className={`flex items-center justify-between gap-4 rounded-[18px] px-4 py-3 text-sm font-black transition ${
                          isActive
                            ? "bg-[#0D2444] text-white"
                            : "bg-[#F7FAFF] text-[#0D2444] hover:bg-[#EAF2FF]"
                        }`}
                      >
                        <span>{item.category}</span>
                        <span
                          className={`rounded-full px-3 py-1 text-xs ${
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
            )}

            {/* Explore More */}
            <div className="rounded-[34px] border border-[#DCE7F5] bg-white p-6 shadow-xl shadow-[#173B6410]">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6288B9]">
                Explore More
              </p>

              {exploreMorePosts.length > 0 ? (
                <div className="mt-5 grid gap-3">
                  {exploreMorePosts.map((explorePost) => (
                    <MiniSidebarPost key={explorePost.slug} post={explorePost} />
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm leading-7 text-[#53677F]">
                  More DTS blogs will appear here after publishing.
                </p>
              )}

              <Link
                href="/blog#blog-results"
                className="mt-5 inline-flex w-full justify-center rounded-full bg-[#0D2444] px-6 py-4 text-sm font-black text-white transition hover:bg-[#315E91]"
              >
                View All Blogs
              </Link>
            </div>

            {/* Need Help CTA */}
            <div className="rounded-[34px] border border-[#DCE7F5] bg-[#0D2444] p-6 text-white shadow-xl shadow-[#173B6410]">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#BFD7F6]">
                Need Help?
              </p>

              <h2
                className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em]"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                Want to apply this strategy for your brand?
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/75">
                DTS helps with PR, events, celebrity management, websites, SEO,
                digital marketing, social media and AI video production.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex w-full justify-center rounded-full bg-white px-6 py-4 text-sm font-black text-[#0D2444] transition hover:bg-[#EAF2FF]"
              >
                Get in Touch
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}