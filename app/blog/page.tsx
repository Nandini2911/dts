import BlogFAQSection from "@/components/Blog/BlogFAQSection";
import BlogHero from "@/components/Blog/BlogHero";
import CategoriesSection from "@/components/Blog/CategoriesSection";
import CategoryBlogResults from "@/components/Blog/CategoryBlogResults";
import DiscoverSection from "@/components/Blog/DiscoverSection";
import FeaturedBlogsSection from "@/components/Blog/FeaturedBlogsSection";
import LeadMagnetSection from "@/components/Blog/LeadMagnetSection";
import MostReadBlogsSection from "@/components/Blog/MostReadBlogsSection";
import ResourcesSection from "@/components/Blog/ResourcesSection";
import SearchResultsSection from "@/components/Blog/SearchResultsSection";
import TrustSection from "@/components/Blog/TrustSection";
import { BlogPageProps, Post } from "@/components/Blog/types";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FinalCTASection from "@/components/WebDevelopmentMarketting/FinalCTASection";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog | Branding, PR, Digital Marketing & AI Insights",
  },

  description:
    "Explore expert insights, strategies, case studies and industry trends from Double Trouble Studio covering branding, PR, celebrity management, event marketing, website development, SEO, digital marketing, social media, AI video production and business growth.",

  applicationName: "Double Trouble Studio",
  creator: "Double Trouble Studio",
  publisher: "Double Trouble Studio",

  alternates: {
    canonical: "https://www.dtsworld.in/blog",
  },

  keywords: [
    "Digital Marketing Blog",
    "Branding Blog",
    "PR Blog",
    "SEO Blog",
    "Website Development Blog",
    "Social Media Marketing Blog",
    "AI Video Production Blog",
    "Celebrity Management Blog",
    "Guest Management Blog",
    "Event Management Blog",
    "Brand Strategy Insights",
    "Marketing Case Studies",
    "Double Trouble Studio Blog"
  ],

  openGraph: {
    title: "Blog | Branding, PR, Digital Marketing & AI Insights",
    description:
      "Read practical insights, case studies and expert strategies on branding, PR, events, SEO, websites, digital marketing, social media and AI-powered content creation.",
    url: "https://www.dtsworld.in/blog",
    siteName: "Double Trouble Studio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.dtsworld.in/og/blog-og.png",
        width: 1200,
        height: 630,
        alt: "Double Trouble Studio Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog | Branding, PR, Digital Marketing & AI Insights",
    description:
      "Explore branding, PR, SEO, websites, social media, AI video production and digital marketing insights from Double Trouble Studio.",
    images: ["https://www.dtsworld.in/twitter/blog-twitter.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = (await searchParams) || {};

  const searchQuery = params?.q?.trim() || "";
  const selectedCategory = params?.category?.trim() || "All";

  const now = new Date().toISOString();

  const posts = await client.fetch<Post[]>(POSTS_QUERY, {
    now,
  });

  console.log(
  "SANITY BLOG COUNT:",
  posts.length,
);
  const recentPost = posts[0];

  const searchFilteredPosts = searchQuery
    ? posts.filter((post) => {
        const title = post.title?.toLowerCase() || "";
        const excerpt = post.excerpt?.toLowerCase() || "";
        const category = post.category?.toLowerCase() || "";
        const keywords = post.seoKeywords?.join(" ").toLowerCase() || "";
        const query = searchQuery.toLowerCase();

        return (
          title.includes(query) ||
          excerpt.includes(query) ||
          category.includes(query) ||
          keywords.includes(query)
        );
      })
    : [];

  const categoryPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const hasActiveFilter = selectedCategory !== "All";

  const postsPerPage = 9;
  const currentPage = Math.max(1, Number(params?.page || "1") || 1);
  const totalPages = Math.max(1, Math.ceil(categoryPosts.length / postsPerPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedPosts = categoryPosts.slice(
    (safeCurrentPage - 1) * postsPerPage,
    safeCurrentPage * postsPerPage
  );

  const selectedFeaturedBlogs = posts
    .filter((post) => post.isFeatured === true)
    .sort((a, b) => {
      const orderA = a.featuredOrder ?? 999;
      const orderB = b.featuredOrder ?? 999;

      if (orderA !== orderB) return orderA - orderB;

      return (
        new Date(b.publishedAt || "").getTime() -
        new Date(a.publishedAt || "").getTime()
      );
    });

  const featuredPostsPerPage = 9;
  const featuredCurrentPage = Math.max(1, Number(params?.fpage || "1") || 1);

  const featuredTotalPages = Math.max(
    1,
    Math.ceil(selectedFeaturedBlogs.length / featuredPostsPerPage)
  );

  const safeFeaturedPage = Math.min(featuredCurrentPage, featuredTotalPages);

  const paginatedFeaturedPosts = selectedFeaturedBlogs.slice(
    (safeFeaturedPage - 1) * featuredPostsPerPage,
    safeFeaturedPage * featuredPostsPerPage
  );

  const mostReadBlogs = posts
    .filter((post) => post.isMostRead === true)
    .sort((a, b) => {
      const orderA = a.mostReadOrder ?? 999;
      const orderB = b.mostReadOrder ?? 999;

      if (orderA !== orderB) return orderA - orderB;

      return (
        new Date(b.publishedAt || "").getTime() -
        new Date(a.publishedAt || "").getTime()
      );
    });

  const mostReadPostsPerPage = 9;
  const mostReadCurrentPage = Math.max(1, Number(params?.mrpage || "1") || 1);

  const mostReadTotalPages = Math.max(
    1,
    Math.ceil(mostReadBlogs.length / mostReadPostsPerPage)
  );

  const safeMostReadPage = Math.min(mostReadCurrentPage, mostReadTotalPages);

  const paginatedMostReadBlogs = mostReadBlogs.slice(
    (safeMostReadPage - 1) * mostReadPostsPerPage,
    safeMostReadPage * mostReadPostsPerPage
  );

  function getBlogUrl(category: string) {
    const query = new URLSearchParams();

    if (category !== "All") {
      query.set("category", category);
    }

    const queryString = query.toString();

    return queryString
      ? `/blog?${queryString}#blog-results`
      : "/blog#blog-results";
  }

  function getPaginationUrl(page: number) {
    const query = new URLSearchParams();

    if (selectedCategory !== "All") {
      query.set("category", selectedCategory);
    }

    if (page > 1) {
      query.set("page", String(page));
    }

    const queryString = query.toString();

    return queryString
      ? `/blog?${queryString}#blog-results`
      : "/blog#blog-results";
  }

  function getFeaturedPaginationUrl(page: number) {
    const query = new URLSearchParams();

    if (selectedCategory !== "All") {
      query.set("category", selectedCategory);
    }

    if (params?.page && params.page !== "1") {
      query.set("page", params.page);
    }

    if (params?.mrpage && params.mrpage !== "1") {
      query.set("mrpage", params.mrpage);
    }

    if (page > 1) {
      query.set("fpage", String(page));
    }

    const queryString = query.toString();

    return queryString
      ? `/blog?${queryString}#featured-blogs`
      : "/blog#featured-blogs";
  }

  function getMostReadPaginationUrl(page: number) {
    const query = new URLSearchParams();

    if (selectedCategory !== "All") {
      query.set("category", selectedCategory);
    }

    if (params?.page && params.page !== "1") {
      query.set("page", params.page);
    }

    if (params?.fpage && params.fpage !== "1") {
      query.set("fpage", params.fpage);
    }

    if (page > 1) {
      query.set("mrpage", String(page));
    }

    const queryString = query.toString();

    return queryString
      ? `/blog?${queryString}#most-read-blogs`
      : "/blog#most-read-blogs";
  }


  const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.dtsworld.in/blog/#blog",
  name: "Double Trouble Studio Blog",
  description:
    "Insights on branding, PR, digital marketing, SEO, websites, events, celebrity management, guest management and AI video production.",
  url: "https://www.dtsworld.in/blog",
  inLanguage: "en-IN",
  publisher: {
    "@id": "https://www.dtsworld.in/#organization",
  },
};
  return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(blogSchema),
      }}
    />
    <main className="overflow-hidden bg-[#F7FAFF] text-[#0D2444]">
      <Navbar />

      <BlogHero recentPost={recentPost} searchQuery={searchQuery} />

      <SearchResultsSection
        searchQuery={searchQuery}
        searchFilteredPosts={searchFilteredPosts}
      />

      <DiscoverSection />

      <FeaturedBlogsSection
        selectedFeaturedBlogs={selectedFeaturedBlogs}
        paginatedFeaturedPosts={paginatedFeaturedPosts}
        safeFeaturedPage={safeFeaturedPage}
        featuredPostsPerPage={featuredPostsPerPage}
        featuredTotalPages={featuredTotalPages}
        getFeaturedPaginationUrl={getFeaturedPaginationUrl}
      />

      <CategoriesSection
        selectedCategory={selectedCategory}
        hasActiveFilter={hasActiveFilter}
        getBlogUrl={getBlogUrl}
      />

      <CategoryBlogResults
        hasActiveFilter={hasActiveFilter}
        selectedCategory={selectedCategory}
        categoryPosts={categoryPosts}
        paginatedPosts={paginatedPosts}
        safeCurrentPage={safeCurrentPage}
        postsPerPage={postsPerPage}
        totalPages={totalPages}
        getPaginationUrl={getPaginationUrl}
      />

      <MostReadBlogsSection
        mostReadBlogs={mostReadBlogs}
        paginatedMostReadBlogs={paginatedMostReadBlogs}
        safeMostReadPage={safeMostReadPage}
        mostReadPostsPerPage={mostReadPostsPerPage}
        mostReadTotalPages={mostReadTotalPages}
        getMostReadPaginationUrl={getMostReadPaginationUrl}
      />

      <ResourcesSection getBlogUrl={getBlogUrl} />
      <TrustSection />
      <LeadMagnetSection />
      <BlogFAQSection />
      <FinalCTASection />
      <Footer />
    </main>
    </>
  );
}