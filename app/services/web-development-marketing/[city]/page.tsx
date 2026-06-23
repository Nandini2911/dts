

import type { Metadata } from "next";

import ServiceCityLandingPage from "@/components/seo/ServiceCityLandingPage";
import { ALL_SEO_CITY_SLUGS } from "@/data/seo-cities";
import { buildServiceCityMetadata } from "@/lib/service-city";



const SERVICE_SLUG =
  "web-development-marketing" as const;

type PageProps = {
  params: Promise<{
    city: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_SEO_CITY_SLUGS.map((city) => ({
    city,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city } = await params;

  return buildServiceCityMetadata(
    SERVICE_SLUG,
    city,
  );
}

export default async function WebDevelopmentCityPage({
  params,
}: PageProps) {
  const { city } = await params;

  return (
    <ServiceCityLandingPage
      serviceSlug={SERVICE_SLUG}
      citySlug={city}
    />
  );
}