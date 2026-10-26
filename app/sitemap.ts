
import type { MetadataRoute } from "next";

import { ALL_SEO_SERVICE_SLUGS } from "@/data/seo-services";
import { getPublishedServiceCityPages } from "@/lib/service-city";
import { SITE } from "@/lib/site";
import { client } from "@/sanity/lib/client";
import { BLOG_SITEMAP_QUERY } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type SitemapBlogPost = {
  slug: string;
  lastModified?: string;
};

// ==========================================
// ERROR #29: THIN CITY PAGES
// Add the exact 67 URL paths from the
// Excel sheet's "Noindex" tab.
// ==========================================

const NOINDEX_CITY_PATHS = new Set<string>([
  // Example format (do not add unless listed):
  // "/services/example-service/example-city",
]);

function normalizePath(value: string): string {
  const path = value.startsWith("http")
    ? new URL(value).pathname
    : value;

  return path.replace(/\/+$/, "") || "/";
}

function isIndexableCityPage(url: string): boolean {
  return !NOINDEX_CITY_PATHS.has(normalizePath(url));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  // ==========================================
  // EXISTING SANITY BLOG FETCHING
  // ==========================================

  const blogPosts = await client.fetch<SitemapBlogPost[]>(
    BLOG_SITEMAP_QUERY,
    { now },
    {
      cache: "no-store",
    }
  );

  console.log("SITEMAP BLOG COUNT:", blogPosts.length);

  // ==========================================
  // STATIC PAGES
  // ERROR #36: FAQ ADDED
  // ==========================================

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE.url,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/contact`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/work`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/blog`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/locations`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Error #36: FAQ page
    {
      url: `${SITE.url}/faq`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // ==========================================
  // SERVICE PAGES
  // ==========================================

  const servicePages: MetadataRoute.Sitemap =
    ALL_SEO_SERVICE_SLUGS.map((serviceSlug) => ({
      url: `${SITE.url}/services/${serviceSlug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  // ==========================================
  // ERROR #29: EXCLUDE NOINDEX CITY PAGES
  // ==========================================

  const serviceCityPages: MetadataRoute.Sitemap =
    getPublishedServiceCityPages()
      .filter((page) =>
        isIndexableCityPage(page.canonicalUrl)
      )
      .map((page) => ({
        url: page.canonicalUrl,
        lastModified: page.lastModified ?? undefined,
        changeFrequency: "monthly",
        priority: 0.7,
      }));

  // ==========================================
  // BLOG PAGES
  // ==========================================

  const blogPostPages: MetadataRoute.Sitemap =
    blogPosts
      .filter(
        (post) =>
          post.slug && post.slug.trim() !== ""
      )
      .map((post) => ({
        url: `${SITE.url}/blog/${post.slug}`,
        lastModified: post.lastModified ?? now,
        changeFrequency: "monthly",
        priority: 0.7,
      }));

  // ==========================================
  // FINAL SITEMAP
  // ==========================================

  return [
    ...staticPages,
    ...servicePages,
    ...serviceCityPages,
    ...blogPostPages,
  ];
}
