import DestinationWeddingPlanningIndia from "@/components/EventsWeddings/DestinationWeddingPlanningIndia";
import EndToEndEventWeddingServices from "@/components/EventsWeddings/EndToEndEventWeddingServices";
import EventManagementServicesAcrossIndia from "@/components/EventsWeddings/EventManagementServicesAcrossIndia";
import EventsWeddingsFQA from "@/components/EventsWeddings/EventsWeddingsFQA";
import EventsWePlanManage from "@/components/EventsWeddings/EventsWePlanManage";
import EventWeddingFinalCTA from "@/components/EventsWeddings/EventWeddingFinalCTA";
import EventWeddingHero from "@/components/EventsWeddings/EventWeddingHero";
import EventWeddingManagementProcess from "@/components/EventsWeddings/EventWeddingManagementProcess";
import EventWeddingUseCases from "@/components/EventsWeddings/EventWeddingUseCases";
import IndustriesWeWorkWith from "@/components/EventsWeddings/IndustriesWeWorkWith";
import InformationRequiredToPlanEvent from "@/components/EventsWeddings/InformationRequiredToPlanEvent";
import OurEventManagementServices from "@/components/EventsWeddings/OurEventManagementServices";
import OurWeddingPlanningServices from "@/components/EventsWeddings/OurWeddingPlanningServices";
import WhyChooseDoubleTroubleStudioEvents from "@/components/EventsWeddings/WhyChooseDoubleTroubleStudioEvents";
import WhyProfessionalEventManagementMatters from "@/components/EventsWeddings/WhyProfessionalEventManagementMatters";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";




export default function EventsWeddings() {
  return (
    <main>
      <Navbar />
     <EventWeddingHero/>
     <EndToEndEventWeddingServices/>
     <OurEventManagementServices/>
     <OurWeddingPlanningServices/>
     <EventsWePlanManage/>
     <WhyProfessionalEventManagementMatters/>
     <EventWeddingManagementProcess/>
     <DestinationWeddingPlanningIndia/>
     <EventManagementServicesAcrossIndia/>
     <IndustriesWeWorkWith/>
     <WhyChooseDoubleTroubleStudioEvents/>
     <EventWeddingUseCases/>
     <InformationRequiredToPlanEvent/>
     <EventsWeddingsFQA/>
     <EventWeddingFinalCTA/>
      <Footer/>
    </main>
  );
}