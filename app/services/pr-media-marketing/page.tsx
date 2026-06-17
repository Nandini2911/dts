import Footer from "@/components/Footer";
import WhyItMatters from "@/components/GuestManagement/GuestWhyItMatters";
import Navbar from "@/components/Navbar";
import BusinessGoals from "@/components/PRMediaDigitalMarketing/BusinessGoals";
import DigitalMarketingServices from "@/components/PRMediaDigitalMarketing/DigitalMarketingServices";
import FAQ from "@/components/PRMediaDigitalMarketing/FAQ";
import FinalCTA from "@/components/PRMediaDigitalMarketing/FinalCTA";
import Industries from "@/components/PRMediaDigitalMarketing/Industries";
import InternalLinks from "@/components/PRMediaDigitalMarketing/InternalLinks";
import Locations from "@/components/PRMediaDigitalMarketing/Locations";
import MediaManagement from "@/components/PRMediaDigitalMarketing/MediaManagement";
import PRDefinition from "@/components/PRMediaDigitalMarketing/PRDefinition";
import PRHero from "@/components/PRMediaDigitalMarketing/PRHero";
import PRIntro from "@/components/PRMediaDigitalMarketing/PRIntro";
import Process from "@/components/PRMediaDigitalMarketing/Process";
import PRServices from "@/components/PRMediaDigitalMarketing/PRServices";
import SEOContentBlock from "@/components/PRMediaDigitalMarketing/SEOContentBlock";
import StartRequirements from "@/components/PRMediaDigitalMarketing/StartRequirements";
import UseCases from "@/components/PRMediaDigitalMarketing/UseCases";
import WhyChooseDTS from "@/components/PRMediaDigitalMarketing/WhyChooseDTS";
import WhyPRDigitalMatters from "@/components/PRMediaDigitalMarketing/WhyPRDigitalMatters";


export default function PRMediaDigitalMarketingPage() {
  return (
    <main className="bg-[#F8FAFC] text-[#0F172A]">
      <Navbar/>
      <PRHero />
      <PRIntro/>
      <PRDefinition/>
      <PRServices/>
      <MediaManagement/>
      <DigitalMarketingServices/>
      <BusinessGoals/>
      <Industries/>
      <WhyPRDigitalMatters/>
      <Process/>
      <Locations/>
      <UseCases/>
      <StartRequirements/>
      <WhyChooseDTS/>
      <InternalLinks/>
      <FAQ/>
      <FinalCTA/>
      <SEOContentBlock/>
      <Footer/>
    </main>
  );
}