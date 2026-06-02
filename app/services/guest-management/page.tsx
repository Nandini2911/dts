import Footer from "@/components/Footer";
import { EventTypes } from "@/components/GuestManagement/EventTypes";
import GuestChallengesWeSolve from "@/components/GuestManagement/GuestChallengesWeSolve";
import GuestFeaturedWork from "@/components/GuestManagement/GuestFeaturedWork";
import GuestManagementHero from "@/components/GuestManagement/GuestManagementHero";
import { OurProcess } from "@/components/GuestManagement/GuestProcess";
import GuestServiceOverview from "@/components/GuestManagement/GuestServiceOverview";
import { WhatYouGet } from "@/components/GuestManagement/GuestWhatYouGet";
import WhyItMatters from "@/components/GuestManagement/GuestWhyItMatters";
import { IndustriesWeServe } from "@/components/GuestManagement/IndustriesWeServe";
import { ResultsOutcomes } from "@/components/GuestManagement/ResultOutcomes";
import { WhyDoubleTroubleStudio } from "@/components/GuestManagement/WhyDoubleTrouble";
import Navbar from "@/components/Navbar";
import { GitPullRequestClosed } from "lucide-react";



export default function GuestManagement() {
  return (
    <main>
      <Navbar />
      <GuestManagementHero/>
      <GuestServiceOverview/>
      <WhyItMatters/>
      <GuestFeaturedWork/>
      <GuestChallengesWeSolve/>
      <IndustriesWeServe/>
      <OurProcess/>
      <WhatYouGet/>
      <ResultsOutcomes/>
     <EventTypes/>
     <WhyDoubleTroubleStudio/>

      <Footer/>
    </main>
  );
}