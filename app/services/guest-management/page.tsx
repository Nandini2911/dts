import Footer from "@/components/Footer";

import GuestChallengesWeSolve from "@/components/GuestManagement/GuestChallengesWeSolve";
import GuestFeaturedWork from "@/components/GuestManagement/GuestFeaturedWork";
import GuestManagementFaq from "@/components/GuestManagement/GuestManagementFaq";
import GuestManagementHero from "@/components/GuestManagement/GuestManagementHero";
import GuestManagementServices from "@/components/GuestManagement/GuestManagementServices";
import { OurProcess } from "@/components/GuestManagement/GuestProcess";
import GuestServiceOverview from "@/components/GuestManagement/GuestServiceOverview";

import WhyItMatters from "@/components/GuestManagement/GuestWhyItMatters";
import { IndustriesWeServe } from "@/components/GuestManagement/IndustriesWeServe";
import LocalSeoSection from "@/components/GuestManagement/LocalSeoSection";
import { ResultsOutcomes } from "@/components/GuestManagement/ResultOutcomes";
import { WhyDoubleTroubleStudio } from "@/components/GuestManagement/WhyDoubleTrouble";
import WhyGuestManagementMatters from "@/components/GuestManagement/WhyGuestManagementMatters";
import Navbar from "@/components/Navbar";




export default function GuestManagement() {
  return (
    <main>
      <Navbar />
      <GuestManagementHero/>
      <GuestServiceOverview/>
      <GuestManagementServices/>
      <WhyItMatters/>
      <GuestFeaturedWork/>
      <GuestChallengesWeSolve/>
     
      <OurProcess/>

      <ResultsOutcomes/>
       <IndustriesWeServe/>
   
     <WhyDoubleTroubleStudio/>
     <WhyGuestManagementMatters/>
     <GuestManagementFaq/>
     <LocalSeoSection/>

      <Footer/>
    </main>
  );
}