
import type { Metadata } from "next";

import {
  ALL_SEO_CITY_SLUGS,
  getCityInfo,
  isSeoCitySlug,
} from "@/data/seo-cities";

import {
  ALL_SEO_SERVICE_SLUGS,
  SEO_SERVICES,
  isSeoServiceSlug,
} from "@/data/seo-services";

import {
  SERVICE_CITY_CONTENT,
  type ServiceCityContentKey,
} from "@/data/service-city-content";

import { SITE } from "@/lib/site";
import { CITY_SEO_AUDIT_OVERRIDES } from "@/data/service-city-audit-overrides";

const DEFAULT_INDUSTRIES = [
  "Hospitality",
  "Real estate",
  "Professional services",
  "Consumer brands",
  "Startups",
  "Events",
] as const;

// --------------------------------------------------
// MUMBAI SEO OVERRIDES — AUDIT #37
// --------------------------------------------------

const MUMBAI_SEO_OVERRIDES: Record<
  string,
  {
    title: string;
    description: string;
    h1: string;
  }
> = {
  "celebrity-management": {
    title:
      "Celebrity Management Agency in Mumbai | DTS",

    description:
      "Celebrity management company in Mumbai for celebrity bookings, Bollywood artist appearances, brand endorsements, performances and influencer collaborations.",

    h1:
      "Celebrity Management Company in Mumbai",
  },

  "guest-management": {
    title:
      "Guest Management Services in Mumbai | Double Trouble Studio",

    description:
      "Guest management company in Mumbai for weddings, corporate events and launches: RSVP, guest lists, check-in, hospitality desks and VIP travel coordination.",

    h1:
      "Guest Management Company in Mumbai",
  },

  "events-weddings": {
    title:
      "Event Management Company in Mumbai | Double Trouble Studio",

    description:
      "Event management company in Mumbai for luxury weddings, corporate events, brand launches and private celebrations, covering planning, production and guests.",

    h1:
      "Event Management Company in Mumbai for Weddings & Corporate Events",
  },

  "pr-media-marketing": {
    title:
      "PR Agency in Mumbai for Luxury & Hospitality Brands | DTS",

    description:
      "PR agency in Mumbai for luxury, hospitality and lifestyle brands: media relations, launch PR, founder profiles, influencer outreach and crisis communication.",

    h1:
      "PR Agency in Mumbai for Luxury, Hospitality & Lifestyle Brands",
  },

  "ai-video-vfx": {
    title:
      "AI Video Production Company in Mumbai | DTS",

    description:
      "AI video production company in Mumbai for AI video ads, CGI product films, VFX and reels, from script to final edit and faster than traditional shoots.",

    h1:
      "AI Video Production Company in Mumbai",
  },
};

// --------------------------------------------------
// BUILD SERVICE CITY URL
// --------------------------------------------------

export function buildServiceCityUrl(
  serviceSlug: string,
  citySlug: string,
): string {
  return `${SITE.url}/services/${serviceSlug}/${citySlug}`;
}

// --------------------------------------------------
// GET SERVICE CITY DATA
// --------------------------------------------------

export function getServiceCityData(
  serviceValue: string,
  cityValue: string,
) {
  if (
    !isSeoServiceSlug(serviceValue) ||
    !isSeoCitySlug(cityValue)
  ) {
    return null;
  }

  const service = SEO_SERVICES[serviceValue];
  const city = getCityInfo(cityValue);

  if (!city) {
    return null;
  }

  const contentKey =
    `${serviceValue}:${cityValue}` as ServiceCityContentKey;

  const customContent =
    SERVICE_CITY_CONTENT[contentKey];

  const canonicalUrl = buildServiceCityUrl(
    serviceValue,
    cityValue,
  );

  // Apply overrides only to the 5 selected
  // Mumbai service pages.
 

const seoOverride =
  CITY_SEO_AUDIT_OVERRIDES[contentKey];


  return {
    serviceSlug: serviceValue,
    citySlug: cityValue,
    service,
    city,
    canonicalUrl,

    // Preserve existing noindex configuration.
    indexable:
      customContent?.indexable ?? true,

    // SEO title.
    title:
      seoOverride?.title ??
      `${service.seoName} in ${city.name} | ${SITE.shortName}`,

    // Meta description.
    metaDescription:
      seoOverride?.description ??
      customContent?.metaDescription ??
      service.metaDescription(city.name),

    // H1 text available to the page component.
    h1:
      seoOverride?.h1 ??
      `${service.name} in ${city.name}`,

    introduction:
      customContent?.introduction ??
      service.defaultIntroduction(city.name),

    localContext:
      customContent?.localContext ??
      `Our team works with businesses, brands and organisations serving ${city.name}, ${city.region}, through planned consultations, remote coordination and project-based execution.`,

    serviceAreas:
      customContent?.serviceAreas ?? [],

    industries:
      customContent?.industries ??
      DEFAULT_INDUSTRIES,

    lastModified:
      customContent?.lastModified ?? null,
  };
}

// --------------------------------------------------
// BUILD SEO METADATA
// --------------------------------------------------

export function buildServiceCityMetadata(
  serviceSlug: string,
  citySlug: string,
): Metadata {
  const data = getServiceCityData(
    serviceSlug,
    citySlug,
  );

  if (!data) {
    return {
      title: {
        absolute:
          `Page Not Found | ${SITE.name}`,
      },

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: {
      absolute: data.title,
    },

    description:
      data.metaDescription,

    alternates: {
      canonical:
        data.canonicalUrl,
    },

    robots: {
      index: data.indexable,
      follow: true,

      googleBot: {
        index: data.indexable,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",
      url: data.canonicalUrl,
      siteName: SITE.name,
      title: data.title,
      description: data.metaDescription,

      images: [
        {
          url: SITE.ogImage,
          width: 1200,
          height: 630,
          alt:
            `${data.service.name} in ${data.city.name}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.metaDescription,
      images: [SITE.ogImage],
    },
  };
}

// --------------------------------------------------
// PUBLISHED / INDEXABLE CITY PAGES
// --------------------------------------------------

export function getPublishedServiceCityPages() {
  return ALL_SEO_SERVICE_SLUGS.flatMap(
    (serviceSlug) =>
      ALL_SEO_CITY_SLUGS.map(
        (citySlug) =>
          getServiceCityData(
            serviceSlug,
            citySlug,
          ),
      ).filter(
        (
          page,
        ): page is NonNullable<typeof page> =>
          page !== null && page.indexable,
      ),
  );
}
