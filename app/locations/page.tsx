
import type { Metadata } from "next";
import { getServiceCityData } from "@/lib/service-city";
import Link from "next/link";

import {
  ALL_SEO_CITY_SLUGS,
  formatCityName,
  type SeoCitySlug,
} from "@/data/seo-cities";

import {
  ALL_SEO_SERVICE_SLUGS,
  SEO_SERVICES,
  type SeoServiceSlug,
} from "@/data/seo-services";

import { SITE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --------------------------------------------------
// PAGE CONSTANTS
// --------------------------------------------------

const locationsPageUrl = `${SITE.url}/locations`;

const pageTitle =
  "Service Locations Across India | Double Trouble Studio";

const pageDescription =
  "Find Double Trouble Studio services across India: guest management, celebrity management, events, PR, website development, SEO and AI video in your city.";

// --------------------------------------------------
// SEO METADATA
// --------------------------------------------------

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },

  description: pageDescription,

  alternates: {
    canonical: locationsPageUrl,
  },

  openGraph: {
    title: pageTitle,

    description:
      "Explore Double Trouble Studio services across major cities and markets in India.",

    url: locationsPageUrl,
    siteName: SITE.name,
    type: "website",

    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Double Trouble Studio services across India",
      },
    ],
  },
};

// --------------------------------------------------
// STRUCTURED DATA
// --------------------------------------------------

const locationsSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "CollectionPage",

      "@id": `${locationsPageUrl}#webpage`,

      url: locationsPageUrl,

      name: pageTitle,

      headline: "Premium Services Across India",

      description: pageDescription,

      isPartOf: {
        "@id": `${SITE.url}/#website`,
      },

      publisher: {
        "@id": `${SITE.url}/#organization`,
      },

      breadcrumb: {
        "@id": `${locationsPageUrl}#breadcrumb`,
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "BreadcrumbList",

      "@id": `${locationsPageUrl}#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE.url}/`,
        },

        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: locationsPageUrl,
        },
      ],
    },
  ],
};

// --------------------------------------------------
// PAGE COMPONENT
// --------------------------------------------------

export default function LocationsPage() {
  return (
    <>
      {/* SEO Structured Data */}
      <script
        id="locations-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationsSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="bg-white text-slate-900">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0D2444] to-[#6288B9] px-6 py-24 text-white md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Areas We Serve
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Premium Services Across India
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80">
              Explore our services by location and
              connect with Double Trouble Studio for
              your next project.
            </p>
          </div>
        </section>

        {/* Services and Indexable City Links */}
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl space-y-24">
            {ALL_SEO_SERVICE_SLUGS.map(
              (serviceSlug: SeoServiceSlug) => {
                const service = SEO_SERVICES[serviceSlug];

                // Exclude noindex city pages from links
                const indexableCities =
                  ALL_SEO_CITY_SLUGS.filter(
                    (city) =>
                      getServiceCityData(
                        serviceSlug,
                        city
                      )?.indexable === true
                  );

                return (
                  <section key={serviceSlug}>
                    <div className="flex flex-wrap items-end justify-between gap-5">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6288B9]">
                          Premium Service
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold text-[#0D2444] md:text-5xl">
                          {service.name}
                        </h2>
                      </div>

                      <Link
                        href={`/services/${serviceSlug}`}
                        className="secondary-btn"
                      >
                        View Main Service
                      </Link>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {indexableCities.map(
                        (city: SeoCitySlug) => (
                          <Link
                            key={`${serviceSlug}-${city}`}
                            href={`/services/${serviceSlug}/${city}`}
                            className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-[#0D2444] shadow-sm transition hover:-translate-y-1 hover:border-[#6288B9]"
                          >
                            {service.shortName} in{" "}
                            {formatCityName(city)}
                          </Link>
                        )
                      )}
                    </div>
                  </section>
                );
              }
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
