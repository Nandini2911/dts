import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title:
    "Services Across India | Double Trouble Studio",

  description:
    "Explore Double Trouble Studio guest management, celebrity management, events, PR, digital marketing, website development, SEO and AI video services across India.",

  alternates: {
    canonical: `${SITE.url}/locations`,
  },

  openGraph: {
    title:
      "Services Across India | Double Trouble Studio",

    description:
      "Explore Double Trouble Studio services across major cities and markets in India.",

    url: `${SITE.url}/locations`,
    siteName: SITE.name,
    type: "website",

    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt:
          "Double Trouble Studio services across India",
      },
    ],
  },
};

export default function LocationsPage() {
  return (
    <main className="bg-white text-slate-900">
        <Navbar/>
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

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-24">
          {ALL_SEO_SERVICE_SLUGS.map(
            (serviceSlug: SeoServiceSlug) => {
              const service =
                SEO_SERVICES[serviceSlug];

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
                    {ALL_SEO_CITY_SLUGS.map(
                      (city: SeoCitySlug) => (
                        <Link
                          key={`${serviceSlug}-${city}`}
                          href={`/services/${serviceSlug}/${city}`}
                          className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-[#0D2444] shadow-sm transition hover:-translate-y-1 hover:border-[#6288B9]"
                        >
                          {service.shortName} in{" "}
                          {formatCityName(city)}
                        </Link>
                      ),
                    )}
                  </div>
                </section>
              );
            },
          )}
        </div>
      </section>
      <Footer/>
    </main>
  );
}