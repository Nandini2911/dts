
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SeoAuditSection from "@/components/SearchEngineOptimization/SeoAuditSection";
import SeoCompetitorAnalysisSection from "@/components/SearchEngineOptimization/SeoCompetitorAnalysisSection";
import SeoContentAuthoritySection from "@/components/SearchEngineOptimization/SeoContentAuthoritySection";
import SeoFaqSection from "@/components/SearchEngineOptimization/SeoFaqSection";
import SeoFinalCtaSection from "@/components/SearchEngineOptimization/SeoFinalCtaSection";
import SeoHeroSection from "@/components/SearchEngineOptimization/SeoHeroSection";
import SeoIndustryFitSection from "@/components/SearchEngineOptimization/SeoIndustryFitSection";
import SeoKeywordIntentSection from "@/components/SearchEngineOptimization/SeoKeywordIntentSection";
import SeoLocalSeoSection from "@/components/SearchEngineOptimization/SeoLocalSeoSection";
import SeoOverviewSection from "@/components/SearchEngineOptimization/SeoOverviewSection";
import SeoProcessSection from "@/components/SearchEngineOptimization/SeoProcessSection";
import SeoReportingAnalyticsSection from "@/components/SearchEngineOptimization/SeoReportingAnalyticsSection";
import SeoResultsCaseStudiesSection from "@/components/SearchEngineOptimization/SeoResultsCaseStudiesSection";
import SeoServicesSection from "@/components/SearchEngineOptimization/SeoServicesSection";
import SeoWebsiteIntegrationSection from "@/components/SearchEngineOptimization/SeoWebsiteIntegrationSection";
import SeoWhyDtsSection from "@/components/SearchEngineOptimization/SeoWhyDtsSection";
import ServiceCityLinks from "@/components/seo/ServiceCityLinks";

// --------------------------------------------------
// SITE CONSTANTS
// --------------------------------------------------

const siteUrl = "https://www.dtsworld.in";

const pageUrl =
  `${siteUrl}/services/search-engine-optimization`;

const pageTitle =
  "SEO Agency & SEO Services in Mumbai | Double Trouble Studio";

const pageDescription =
  "Double Trouble Studio is an SEO agency in Mumbai offering technical SEO, local SEO, content and AI-search optimisation that turns rankings into enquiries.";

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const contactPointId = `${siteUrl}/#contact-point`;
const logoId = `${siteUrl}/#logo`;

const webpageId = `${pageUrl}#webpage`;
const serviceId = `${pageUrl}#service`;
const breadcrumbId = `${pageUrl}#breadcrumb`;

// --------------------------------------------------
// SEO METADATA
// --------------------------------------------------

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },

  description: pageDescription,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Double Trouble Studio",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },

  robots: {
    index: true,
    follow: true,
  },
};

// --------------------------------------------------
// SEO STRUCTURED DATA
// --------------------------------------------------

const seoStructuredData = {
  "@context": "https://schema.org",

  "@graph": [
    // ----------------------------------------------
    // ORGANIZATION / LOCAL BUSINESS
    // ----------------------------------------------

    {
      "@type": ["Organization", "LocalBusiness"],

      "@id": organizationId,

      name: "Double Trouble Studio",

      legalName: "Double Trouble Studio Pvt. Ltd.",

      alternateName: ["DTS", "DTS World"],

      url: `${siteUrl}/`,

      logo: {
        "@id": logoId,
      },

      image: {
        "@id": logoId,
      },

      description:
        "Double Trouble Studio is a Mumbai-based creative, digital marketing, public relations, event management, website development and SEO agency serving brands and businesses across India.",

      telephone: "+918000006021",

      email: "info@dtsworld.in",

      priceRange: "Custom quotations",

      address: {
        "@type": "PostalAddress",

        streetAddress:
          "Plot No. 177, 1st Floor, Aaram Nagar Part 2, Seven Bungalows, J. P. Road, Versova, Andheri West",

        addressLocality: "Mumbai",

        addressRegion: "Maharashtra",

        postalCode: "400061",

        addressCountry: "IN",
      },

      contactPoint: {
        "@type": "ContactPoint",

        "@id": contactPointId,

        contactType: "project enquiries",

        telephone: "+918000006021",

        email: "info@dtsworld.in",

        url: `${siteUrl}/contact`,

        areaServed: {
          "@type": "Country",
          name: "India",
        },

        availableLanguage: ["English", "Hindi"],
      },

      areaServed: {
        "@type": "Country",
        name: "India",
      },

      knowsAbout: [
        "Search Engine Optimization",
        "SEO Services",
        "Technical SEO",
        "On-Page SEO",
        "Local SEO",
        "SEO Audits",
        "Keyword Research",
        "Content SEO",
        "SEO Content Strategy",
        "Competitor Analysis",
        "Website Optimization",
        "Internal Linking",
        "Core Web Vitals",
        "Google Search Console",
        "SEO Reporting",
        "AI Search Optimization",
        "Generative Engine Optimization",
        "Website Development",
        "Digital Marketing",
      ],
    },

    // ----------------------------------------------
    // WEBSITE
    // ----------------------------------------------

    {
      "@type": "WebSite",

      "@id": websiteId,

      url: `${siteUrl}/`,

      name: "Double Trouble Studio",

      alternateName: ["DTS", "DTS World"],

      publisher: {
        "@id": organizationId,
      },

      inLanguage: "en-IN",
    },

    // ----------------------------------------------
    // SEO SERVICE
    // ----------------------------------------------

    {
      "@type": "Service",

      "@id": serviceId,

      name: "SEO Services in Mumbai",

      alternateName: [
        "Search Engine Optimization Services",
        "SEO Agency Services",
        "Technical SEO Services",
        "Local SEO Services",
        "Content SEO Services",
      ],

      serviceType: [
        "Search Engine Optimization",
        "Technical SEO",
        "On-Page SEO",
        "Local SEO",
        "Keyword Research",
        "SEO Content Strategy",
        "SEO Audit",
        "Competitor SEO Analysis",
        "Website SEO Optimization",
        "AI Search Optimization",
      ],

      category:
        "Search Engine Optimization and Digital Marketing",

      url: pageUrl,

      description: pageDescription,

      provider: {
        "@id": organizationId,
      },

      areaServed: [
        {
          "@type": "City",
          name: "Mumbai",
        },
        {
          "@type": "State",
          name: "Maharashtra",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],

      audience: {
        "@type": "BusinessAudience",

        name:
          "Businesses and brands seeking organic search visibility",

        audienceType:
          "Businesses, startups, service providers, ecommerce brands, hospitality companies and corporate organizations",
      },

      mainEntityOfPage: {
        "@id": webpageId,
      },
    },

    // ----------------------------------------------
    // WEBPAGE
    // ----------------------------------------------

    {
      "@type": "WebPage",

      "@id": webpageId,

      url: pageUrl,

      name: pageTitle,

      headline:
        "SEO Agency & SEO Services in Mumbai",

      description: pageDescription,

      isPartOf: {
        "@id": websiteId,
      },

      about: {
        "@id": serviceId,
      },

      mainEntity: {
        "@id": serviceId,
      },

      publisher: {
        "@id": organizationId,
      },

      breadcrumb: {
        "@id": breadcrumbId,
      },

      inLanguage: "en-IN",
    },

    // ----------------------------------------------
    // BREADCRUMB
    // ----------------------------------------------

    {
      "@type": "BreadcrumbList",

      "@id": breadcrumbId,

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          name: "Home",

          item: `${siteUrl}/`,
        },

        {
          "@type": "ListItem",

          position: 2,

          name: "SEO Services",

          item: pageUrl,
        },
      ],
    },
  ],
};

// --------------------------------------------------
// PAGE COMPONENT
// --------------------------------------------------

export default function SeoPage() {
  return (
    <>
      <script
        id="seo-service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            seoStructuredData
          ).replace(/</g, "\\u003c"),
        }}
      />

      <main>
        <Navbar />

        <SeoHeroSection />

        <SeoOverviewSection />

        <SeoServicesSection />

        <SeoAuditSection />

        <SeoKeywordIntentSection />

        <SeoLocalSeoSection />

        <SeoCompetitorAnalysisSection />

        <SeoProcessSection />

        <SeoIndustryFitSection />

        <SeoContentAuthoritySection />

        <SeoWebsiteIntegrationSection />

        <SeoReportingAnalyticsSection />

        <SeoResultsCaseStudiesSection />

        <SeoWhyDtsSection />

        <SeoFaqSection />

        <SeoFinalCtaSection />

        <ServiceCityLinks
          serviceSlug="search-engine-optimization"
        />

        <Footer />
      </main>
    </>
  );
}
