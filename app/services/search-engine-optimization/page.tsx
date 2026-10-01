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

export default function SeoPage() {
  return (
    <main>
    <Navbar/>
      <SeoHeroSection />
      <SeoOverviewSection/>
      <SeoServicesSection/>
      <SeoAuditSection/>
      <SeoKeywordIntentSection/>
      <SeoLocalSeoSection/>
      <SeoCompetitorAnalysisSection/>
      <SeoProcessSection/>
      <SeoIndustryFitSection/>
      <SeoContentAuthoritySection/>
      <SeoWebsiteIntegrationSection/>
      <SeoReportingAnalyticsSection/>
      <SeoResultsCaseStudiesSection/>
      <SeoWhyDtsSection/>
      <SeoFaqSection/>
      <SeoFinalCtaSection/>
      
      <ServiceCityLinks
  serviceSlug="search-engine-optimization"
/>
      <Footer/>
    </main>
  );
}