import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import BusinessTypesWebsiteSection from "@/components/WebDevelopmentMarketting/BusinessTypesWebsiteSection";
import CompleteDigitalSolutions from "@/components/WebDevelopmentMarketting/CompleteDigitalSolutions";
import DigitalMarketingServicesSection from "@/components/WebDevelopmentMarketting/DigitalMarketingServicesSection";
import FinalCTASection from "@/components/WebDevelopmentMarketting/FinalCTASection";
import IndiaPresenceSection from "@/components/WebDevelopmentMarketting/IndiaPresenceSection";
import IndustriesWeWorkWith from "@/components/WebDevelopmentMarketting/IndustriesWeWorkWith";
import ProjectRequirementsSection from "@/components/WebDevelopmentMarketting/ProjectRequirementsSection";
import SEOServicesSection from "@/components/WebDevelopmentMarketting/SEOServicesSection";
import UseCasesSection from "@/components/WebDevelopmentMarketting/UseCasesSection";
import WebDevelopmentMarketingProcess from "@/components/WebDevelopmentMarketting/WebDevelopmentMarketingProcess";
import WebsiteDevelopmentServices from "@/components/WebDevelopmentMarketting/WebsiteDevelopmentServices";
import WebsiteDigitalHero from "@/components/WebDevelopmentMarketting/WebsiteDigitalHero";
import WebsiteMarketingFAQSection from "@/components/WebDevelopmentMarketting/WebsiteMarketingFAQSection";
import WhatIsWebSeoMarketing from "@/components/WebDevelopmentMarketting/WhatIsWebSeoMarketing";
import WhyChooseDTSSection from "@/components/WebDevelopmentMarketting/WhyChooseDTSSection";
import WhySEOStartsDuringDevelopment from "@/components/WebDevelopmentMarketting/WhySEOStartsDuringDevelopment";
import WhyWebsiteSEOMarketingTogether from "@/components/WebDevelopmentMarketting/WhyWebsiteSEOMarketingTogether";





export default function WebDevelopmentMarketing() {
  return (
    <main>
      <Navbar />
      <WebsiteDigitalHero/>
      <CompleteDigitalSolutions/>
      <WhatIsWebSeoMarketing/>
      <WebsiteDevelopmentServices/>
      <SEOServicesSection/>
      <DigitalMarketingServicesSection/>
      <BusinessTypesWebsiteSection/>
      <WhySEOStartsDuringDevelopment/>
      <WebDevelopmentMarketingProcess/>
      <WhyWebsiteSEOMarketingTogether/>
      <IndustriesWeWorkWith/>
      <IndiaPresenceSection/>
      <UseCasesSection/>
      <ProjectRequirementsSection/>
      <WhyChooseDTSSection/>
      <WebsiteMarketingFAQSection/>
      <FinalCTASection/>
      <Footer/>
    </main>
  );
}