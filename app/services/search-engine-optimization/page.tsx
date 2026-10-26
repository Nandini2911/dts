
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

// ========================================
// SEO METADATA - ERROR #1 FIX
// ========================================

const seoPageUrl =
  "https://www.dtsworld.in/services/search-engine-optimization";

const seoTitle =
  "SEO Agency & SEO Services in Mumbai | Double Trouble Studio";

const seoDescription =
  "Double Trouble Studio is an SEO agency in Mumbai offering technical SEO, local SEO, content and AI-search optimisation that turns rankings into enquiries.";

export const metadata: Metadata = {
  title: {
    absolute: seoTitle,
  },

  description: seoDescription,

  alternates: {
    canonical: seoPageUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: seoPageUrl,
    siteName: "Double Trouble Studio",
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: "/og/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Double Trouble Studio SEO Agency in Mumbai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ========================================
// EXISTING PAGE - DESIGN UNCHANGED
// ========================================

export default function SeoPage() {
  return (
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
  );
}
