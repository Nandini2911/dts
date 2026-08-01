import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ALL_SEO_CITY_SLUGS,
  formatCityName,
} from "@/data/seo-cities";

import {
  ALL_SEO_SERVICE_SLUGS,
  SEO_SERVICES,
  type SeoServiceSlug,
} from "@/data/seo-services";

import { SITE } from "@/lib/site";
import { getServiceCityData } from "@/lib/service-city";

import Footer from "../Footer";
import Navbar from "../Navbar";

type ServiceCityLandingPageProps = {
  serviceSlug: SeoServiceSlug;
  citySlug: string;
};

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your requirements, audience, objectives, timeline and current position.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Our team creates a focused strategy covering deliverables, execution and responsibilities.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "The approved plan is executed by the relevant creative, digital and operations teams.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "Progress, output and future opportunities are reviewed with your team.",
  },
] as const;

export default function ServiceCityLandingPage({
  serviceSlug,
  citySlug,
}: ServiceCityLandingPageProps) {
  const data = getServiceCityData(
    serviceSlug,
    citySlug,
  );

  if (!data) {
    notFound();
  }

  const otherServices =
    ALL_SEO_SERVICE_SLUGS.filter(
      (slug) => slug !== serviceSlug,
    );

  const otherCities =
    ALL_SEO_CITY_SLUGS.filter(
      (slug) => slug !== citySlug,
    );

  const containedInPlace =
    data.city.schemaType === "City"
      ? {
          "@type": "AdministrativeArea",
          name: data.city.region,
        }
      : {
          "@type": "Country",
          name: "India",
        };

  /*
   * Prevents duplicate labels such as:
   * Kerala, Kerala
   * Chandigarh, Chandigarh
   * Delhi, Delhi
   */
  const cityRegionLabel =
    data.city.name.toLowerCase() ===
    data.city.region.toLowerCase()
      ? data.city.name
      : `${data.city.name}, ${data.city.region}`;

  // =====================================================
  // FAQ DATA
  // Automatically changes according to service + city
  // =====================================================

  const faqItems = [
    {
      question: `What is included in ${data.service.shortName} services in ${data.city.name}?`,

      answer: `Our ${data.service.shortName.toLowerCase()} services in ${
        data.city.name
      } include ${data.service.features
        .map((feature) => feature.title)
        .join(
          ", ",
        )}. The exact scope is customised according to your project requirements, timeline and objectives.`,
    },

    {
      question: `Who can use ${data.service.shortName} services in ${data.city.name}?`,

      answer: `Double Trouble Studio works with ${data.industries.join(
        ", ",
      )} and other businesses, brands and organisations that require professional ${data.service.shortName.toLowerCase()} support in ${
        data.city.name
      }.`,
    },

    {
      question: `Does Double Trouble Studio provide ${data.service.shortName} services across ${data.city.name}?`,

      answer:
        data.serviceAreas.length > 0
          ? `Yes. We support projects across ${
              data.city.name
            }, including ${data.serviceAreas.join(
              ", ",
            )}. Service availability and execution depend on project requirements, scope and schedule.`
          : `Yes. Double Trouble Studio works with businesses, brands and organisations serving ${cityRegionLabel} through consultations, remote coordination and scheduled project execution.`,
    },

    {
      question: `How does the ${data.service.shortName} process work?`,

      answer:
        "Our process includes discovery, planning, execution and review. We first understand your requirements, audience, objectives and timeline, then create an execution plan, deliver the approved scope and review the results and future opportunities.",
    },

    {
      question: `Can ${data.service.shortName} services be customised for my project in ${data.city.name}?`,

      answer: `Yes. Every project is planned according to your requirements, audience, timeline, deliverables and objectives. Double Trouble Studio creates a customised ${data.service.shortName.toLowerCase()} strategy instead of applying the same package to every project.`,
    },

    {
      question: `How can I get a quote for ${data.service.shortName} in ${data.city.name}?`,

      answer: `You can contact Double Trouble Studio and share your requirements, expected deliverables, timeline and project objectives. Our team will review the brief and recommend an appropriate scope of work for your ${data.service.shortName.toLowerCase()} requirements in ${
        data.city.name
      }.`,
    },
  ];

  // =====================================================
  // COMPLETE STRUCTURED DATA
  // Organization + WebSite + BreadcrumbList
  // Service + OfferCatalog + FAQPage + WebPage
  // =====================================================

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      // =================================================
      // ORGANIZATION
      // =================================================

      {
        "@type": "Organization",

        "@id": `${SITE.url}/#organization`,

        name: SITE.name,

        alternateName: SITE.shortName,

        url: SITE.url,

        email: SITE.email,
      },

      // =================================================
      // WEBSITE
      // =================================================

      {
        "@type": "WebSite",

        "@id": `${SITE.url}/#website`,

        url: SITE.url,

        name: SITE.name,

        alternateName: SITE.shortName,

        publisher: {
          "@id": `${SITE.url}/#organization`,
        },

        inLanguage: "en-IN",
      },

      // =================================================
      // BREADCRUMB
      // =================================================

      {
        "@type": "BreadcrumbList",

        "@id": `${data.canonicalUrl}#breadcrumb`,

        itemListElement: [
          {
            "@type": "ListItem",

            position: 1,

            name: "Home",

            item: SITE.url,
          },

          {
            "@type": "ListItem",

            position: 2,

            name: data.service.name,

            item: `${SITE.url}/services/${serviceSlug}`,
          },

          {
            "@type": "ListItem",

            position: 3,

            name: `${data.service.shortName} in ${data.city.name}`,

            item: data.canonicalUrl,
          },
        ],
      },

      // =================================================
      // MAIN SERVICE
      // =================================================

      {
        "@type": "Service",

        "@id": `${data.canonicalUrl}#service`,

        name: `${data.service.name} in ${data.city.name}`,

        serviceType:
          data.service.schemaServiceType,

        url: data.canonicalUrl,

        description:
          data.metaDescription,

        provider: {
          "@id": `${SITE.url}/#organization`,
        },

        areaServed: {
          "@type": data.city.schemaType,

          name: data.city.name,

          containedInPlace,
        },

        audience: {
          "@type": "Audience",

          audienceType:
            data.industries.join(", "),
        },

        // ===============================================
        // SERVICE OFFER CATALOG
        // ===============================================

        hasOfferCatalog: {
          "@type": "OfferCatalog",

          name: `${data.service.name} Services in ${data.city.name}`,

          itemListElement:
            data.service.features.map(
              (feature) => ({
                "@type": "Offer",

                itemOffered: {
                  "@type": "Service",

                  name:
                    feature.title,

                  description:
                    feature.description,

                  provider: {
                    "@id":
                      `${SITE.url}/#organization`,
                  },

                  areaServed: {
                    "@type":
                      data.city.schemaType,

                    name:
                      data.city.name,
                  },
                },
              }),
            ),
        },
      },

      // =================================================
      // FAQ PAGE
      // =================================================

      {
        "@type": "FAQPage",

        "@id": `${data.canonicalUrl}#faq`,

        url: `${data.canonicalUrl}#faq`,

        mainEntity:
          faqItems.map((faq) => ({
            "@type": "Question",

            name:
              faq.question,

            acceptedAnswer: {
              "@type": "Answer",

              text:
                faq.answer,
            },
          })),
      },

      // =================================================
      // WEB PAGE
      // =================================================

      {
        "@type": "WebPage",

        "@id": `${data.canonicalUrl}#webpage`,

        url:
          data.canonicalUrl,

        name:
          data.title,

        description:
          data.metaDescription,

        isPartOf: {
          "@id":
            `${SITE.url}/#website`,
        },

        publisher: {
          "@id":
            `${SITE.url}/#organization`,
        },

        about: {
          "@id":
            `${data.canonicalUrl}#service`,
        },

        mainEntity: {
          "@id":
            `${data.canonicalUrl}#service`,
        },

        breadcrumb: {
          "@id":
            `${data.canonicalUrl}#breadcrumb`,
        },

        hasPart: {
          "@id":
            `${data.canonicalUrl}#faq`,
        },

        ...(data.lastModified
          ? {
              dateModified:
                data.lastModified,
            }
          : {}),

        inLanguage:
          "en-IN",
      },
    ],
  };

  return (
    <>
      {/* ================================================= */}
      {/* JSON-LD STRUCTURED DATA */}
      {/* ================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData,
          ).replace(/</g, "\\u003c"),
        }}
      />

      <main className="overflow-hidden bg-white text-slate-900">

        <Navbar />

        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <section className="relative bg-gradient-to-br from-[#0D2444] to-[#6288B9] px-6 py-24 text-white md:py-32">

          <div className="mx-auto max-w-7xl">

            <nav
              aria-label="Breadcrumb"
              className="mb-8 text-sm text-white/70"
            >

              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <span
                aria-hidden="true"
                className="mx-2"
              >
                /
              </span>

              <Link
                href={`/services/${serviceSlug}`}
                className="transition hover:text-white"
              >
                {data.service.name}
              </Link>

              <span
                aria-hidden="true"
                className="mx-2"
              >
                /
              </span>

              <span aria-current="page">
                {data.city.name}
              </span>

            </nav>

            <div className="max-w-4xl">

              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                Premium Services
              </p>

              <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">

                {data.service.name} in{" "}

                {data.city.name}

              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/85 md:text-xl">

                {data.service.heroDescription(
                  data.city.name,
                )}

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href={`/contact?service=${serviceSlug}&city=${citySlug}`}
                  className="rounded-xl bg-white px-7 py-4 font-semibold text-[#0D2444] transition hover:-translate-y-0.5"
                >
                  Discuss Your Project
                </Link>

                <Link
                  href={`/services/${serviceSlug}`}
                  className="rounded-xl border border-white/40 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Explore Service
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* INTRODUCTION */}
        {/* ================================================= */}

        <section className="px-6 py-20 md:py-28">

          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6288B9]">
                Double Trouble Studio
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0D2444] md:text-5xl">

                Professional{" "}

                {data.service.shortName} for{" "}

                {data.city.name}

              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {data.introduction}
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {data.localContext}
              </p>

            </div>

            <article className="premium-card">

              <h2 className="text-2xl font-semibold text-[#0D2444]">
                What this service includes
              </h2>

              <ul className="mt-7 space-y-5">

                {data.service.features.map(
                  (feature) => (

                    <li
                      key={feature.title}
                      className="flex gap-4"
                    >

                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#6288B9]"
                      />

                      <div>

                        <h3 className="font-semibold text-[#0D2444]">
                          {feature.title}
                        </h3>

                        <p className="mt-1 leading-7 text-slate-600">
                          {feature.description}
                        </p>

                      </div>

                    </li>

                  ),
                )}

              </ul>

            </article>

          </div>

        </section>

        {/* ================================================= */}
        {/* INDIVIDUAL SERVICE CARDS */}
        {/* ================================================= */}

        <section className="bg-slate-50 px-6 py-20 md:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6288B9]">
                Our capabilities
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#0D2444] md:text-5xl">

                {data.service.shortName} services in{" "}

                {data.city.name}

              </h2>

            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {data.service.features.map(
                (feature) => (

                  <article
                    key={feature.title}
                    className="premium-card"
                  >

                    <h3 className="text-xl font-semibold text-[#0D2444]">
                      {feature.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {feature.description}
                    </p>

                  </article>

                ),
              )}

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* INDUSTRIES AND AREAS */}
        {/* ================================================= */}

        <section className="px-6 py-20 md:py-28">

          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">

            <article className="premium-card">

              <h2 className="text-3xl font-semibold text-[#0D2444]">
                Industries we support
              </h2>

              <div className="mt-7 flex flex-wrap gap-3">

                {data.industries.map(
                  (industry) => (

                    <span
                      key={industry}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                    >
                      {industry}
                    </span>

                  ),
                )}

              </div>

            </article>

            <article className="premium-card">

              <h2 className="text-3xl font-semibold text-[#0D2444]">

                Areas served in{" "}

                {data.city.name}

              </h2>

              {data.serviceAreas.length > 0 ? (

                <div className="mt-7 flex flex-wrap gap-3">

                  {data.serviceAreas.map(
                    (area) => (

                      <span
                        key={area}
                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                      >
                        {area}
                      </span>

                    ),
                  )}

                </div>

              ) : (

                <p className="mt-6 leading-7 text-slate-600">

                  We work with businesses and organisations serving{" "}

                  {cityRegionLabel} through consultations, remote coordination and scheduled project execution.

                </p>

              )}

            </article>

          </div>

        </section>

        {/* ================================================= */}
        {/* PROCESS */}
        {/* ================================================= */}

        <section className="bg-slate-50 px-6 py-20 md:py-28">

          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6288B9]">
              How we work
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#0D2444] md:text-5xl">
              From strategy to execution
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {PROCESS_STEPS.map(
                (step) => (

                  <article
                    key={step.number}
                    className="premium-card"
                  >

                    <span className="text-sm font-semibold text-[#6288B9]">
                      {step.number}
                    </span>

                    <h3 className="mt-4 text-xl font-semibold text-[#0D2444]">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {step.description}
                    </p>

                  </article>

                ),
              )}

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* SAME SERVICE ACROSS CITIES */}
        {/* ================================================= */}

        <section className="px-6 py-20 md:py-28">

          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6288B9]">
              Areas We Serve
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#0D2444] md:text-5xl">

              {data.service.shortName} across India

            </h2>

            <div className="mt-10 flex flex-wrap gap-3">

              {otherCities.map(
                (city) => (

                  <Link
                    key={city}
                    href={`/services/${serviceSlug}/${city}`}
                    className="rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-[#0D2444] transition hover:-translate-y-0.5 hover:border-[#6288B9]"
                  >

                    {data.service.shortName} in{" "}

                    {formatCityName(city)}

                  </Link>

                ),
              )}

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* OTHER SERVICES IN CURRENT CITY */}
        {/* ================================================= */}

        <section className="bg-slate-50 px-6 py-20 md:py-28">

          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6288B9]">
              Explore more services
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#0D2444] md:text-5xl">

              Other services in{" "}

              {data.city.name}

            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {otherServices.map(
                (otherServiceSlug) => {
                  const otherService =
                    SEO_SERVICES[
                      otherServiceSlug
                    ];

                  return (

                    <Link
                      key={otherServiceSlug}
                      href={`/services/${otherServiceSlug}/${citySlug}`}
                      className="premium-card block"
                    >

                      <h3 className="text-xl font-semibold text-[#0D2444]">
                        {otherService.name}
                      </h3>

                      <p className="mt-3 text-sm text-slate-500">

                        Services in{" "}

                        {data.city.name}

                      </p>

                    </Link>

                  );
                },
              )}

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* FAQ SECTION — ANSWERS ALWAYS VISIBLE */}
        {/* ================================================= */}

        <section
          id="faq"
          className="px-6 py-20 md:py-28"
        >

          <div className="mx-auto max-w-5xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6288B9]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0D2444] md:text-5xl">

                {data.service.shortName} in{" "}

                {data.city.name} FAQs

              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">

                Answers to common questions about{" "}

                {data.service.shortName.toLowerCase()} services in{" "}

                {data.city.name}.

              </p>

            </div>

            <div className="mt-12 space-y-4">

              {faqItems.map(
                (faq) => (

                  <article
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >

                    <h3 className="px-6 py-6 text-left text-lg font-semibold leading-7 text-[#0D2444] md:px-8 md:text-xl">

                      {faq.question}

                    </h3>

                    <p className="border-t border-slate-100 px-6 py-6 text-base leading-8 text-slate-600 md:px-8">

                      {faq.answer}

                    </p>

                  </article>

                ),
              )}

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <section className="px-6 py-20 md:py-28">

          <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-br from-[#0D2444] to-[#6288B9] px-8 py-16 text-center text-white md:px-16 md:py-20">

            <h2 className="text-3xl font-semibold md:text-5xl">

              Looking for{" "}

              {data.service.shortName} in{" "}

              {data.city.name}?

            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">

              Speak with Double Trouble Studio about your requirements, timeline, objectives and expected deliverables.

            </p>

            <Link
              href={`/contact?service=${serviceSlug}&city=${citySlug}`}
              className="mt-9 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-[#0D2444] transition hover:-translate-y-0.5"
            >
              Get a Free Consultation
            </Link>

          </div>

        </section>

        <Footer />

      </main>
    </>
  );
}