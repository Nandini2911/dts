import CelebrityBookingIntro from "@/components/CelebrityManagement/CelebrityBookingIntro";
import CelebrityEventTypes from "@/components/CelebrityManagement/CelebrityEventTypes";
import CelebrityManagementHero from "@/components/CelebrityManagement/CelebrityManagementHero";
import CelebrityManagementServices from "@/components/CelebrityManagement/CelebrityManagementServices";
import WhatIsCelebrityManagement from "@/components/CelebrityManagement/WhatIsCelebrityManagement";
import WhyBrandsInvestCelebrityManagement from "@/components/CelebrityManagement/WhyBrandsInvestCelebrityManagement";
import Footer from "@/components/Footer";
import CelebrityManagementIndustries from "@/components/CelebrityManagement/CelebrityManagementIndustries";
import CelebrityManagementProcess from "@/components/CelebrityManagement/CelebrityManagementProcess";

import Navbar from "@/components/Navbar";
import CelebrityTalentTypesSection from "@/components/CelebrityManagement/CelebrityTalentTypesSection";




export default function CelebrityManagement() {
  return (
    <main>
      <Navbar />
     <CelebrityManagementHero/>
     <CelebrityBookingIntro/>
     <WhatIsCelebrityManagement/>
     <CelebrityManagementServices/>
     {/* <WhyBrandsInvestCelebrityManagement/> */}
   <CelebrityEventTypes/>
   <CelebrityManagementIndustries/>
   <CelebrityManagementProcess/>
   <CelebrityTalentTypesSection/>
      <Footer/>
    </main>
  );
}