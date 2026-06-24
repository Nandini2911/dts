import type { MetadataRoute } from "next";

import {
  ALL_SEO_SERVICE_SLUGS,
} from "@/data/seo-services";

import {
  getPublishedServiceCityPages,
} from "@/lib/service-city";

import { SITE } from "@/lib/site";

import { client } from "@/sanity/lib/client";

import {
  BLOG_SITEMAP_QUERY,
} from "@/sanity/lib/queries";

export const revalidate = 60;

type SitemapBlogPost = {
  slug: string;
  lastModified?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  const blogPosts =
    await client.fetch<SitemapBlogPost[]>(
      BLOG_SITEMAP_QUERY,
      {
        now,
      },
    );

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
  ];

  const servicePages: MetadataRoute.Sitemap =
    ALL_SEO_SERVICE_SLUGS.map(
      (serviceSlug) => ({
        url: `${SITE.url}/services/${serviceSlug}`,
        changeFrequency: "monthly",
        priority: 0.8,
      }),
    );

  const serviceCityPages: MetadataRoute.Sitemap =
    getPublishedServiceCityPages().map(
      (page) => ({
        url: page.canonicalUrl,

        lastModified:
          page.lastModified ?? undefined,

        changeFrequency: "monthly",
        priority: 0.7,
      }),
    );

  const blogPostPages: MetadataRoute.Sitemap =
    blogPosts
      .filter((post) => Boolean(post.slug))
      .map((post) => ({
        url: `${SITE.url}/blog/${post.slug}`,

        lastModified:
          post.lastModified ?? undefined,

        changeFrequency: "monthly",
        priority: 0.7,
      }));

  return [
    ...staticPages,
    ...servicePages,
    ...serviceCityPages,
    ...blogPostPages,
  ];
}