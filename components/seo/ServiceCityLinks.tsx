import Link from "next/link";

import {
  ALL_SEO_CITY_SLUGS,
  formatCityName,
} from "@/data/seo-cities";

import {
  SEO_SERVICES,
  type SeoServiceSlug,
} from "@/data/seo-services";

type ServiceCityLinksProps = {
  serviceSlug: SeoServiceSlug;
};

export default function ServiceCityLinks({
  serviceSlug,
}: ServiceCityLinksProps) {
  const service = SEO_SERVICES[serviceSlug];

  return (
    <section className="bg-slate-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6288B9]">
          Areas We Serve
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-[#0D2444] md:text-5xl">
          {service.shortName} across India
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Explore our {service.shortName.toLowerCase()}{" "}
          services across major Indian business,
          tourism and emerging digital markets.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ALL_SEO_CITY_SLUGS.map((city) => (
            <Link
              key={city}
              href={`/services/${serviceSlug}/${city}`}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-5 font-medium text-[#0D2444] shadow-sm transition hover:-translate-y-1 hover:border-[#6288B9]"
            >
              {service.shortName} in{" "}
              {formatCityName(city)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}