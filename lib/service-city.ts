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

const DEFAULT_INDUSTRIES = [
  "Hospitality",
  "Real estate",
  "Professional services",
  "Consumer brands",
  "Startups",
  "Events",
] as const;

export function buildServiceCityUrl(
  serviceSlug: string,
  citySlug: string,
): string {
  return `${SITE.url}/services/${serviceSlug}/${citySlug}`;
}

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

  return {
    serviceSlug: serviceValue,
    citySlug: cityValue,
    service,
    city,
    canonicalUrl,

    indexable: customContent?.indexable === true,

    title:
      `${service.seoName} in ${city.name} | ${SITE.shortName}`,

    metaDescription:
      customContent?.metaDescription ??
      service.metaDescription(city.name),

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
      title: `Page Not Found | ${SITE.name}`,

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: data.title,
    description: data.metaDescription,

    alternates: {
      canonical: data.canonicalUrl,
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
          alt: `${data.service.name} in ${data.city.name}`,
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

export function getPublishedServiceCityPages() {
  return ALL_SEO_SERVICE_SLUGS.flatMap(
    (serviceSlug) =>
      ALL_SEO_CITY_SLUGS.map((citySlug) =>
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