import type { MetadataRoute } from "next";

import {
  ALL_SEO_SERVICE_SLUGS,
} from "@/data/seo-services";

import {
  getPublishedServiceCityPages,
} from "@/lib/service-city";

import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
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
      changeFrequency: "weekly",
      priority: 0.8,
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
        url:
          `${SITE.url}/services/${serviceSlug}`,
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

  return [
    ...staticPages,
    ...servicePages,
    ...serviceCityPages,
  ];
}