import AboutCTA from "@/components/About/AboutCta";
import AboutExperience from "@/components/About/AboutExperience";
import AboutFaq from "@/components/About/AboutFaq";
import AboutHero from "@/components/About/AboutHero";
import AboutIndustries from "@/components/About/AboutIndustries";
import AboutProcess from "@/components/About/WhatWeBelive";
import AboutStory from "@/components/About/AboutStory";
import Footer from "@/components/Footer";
import AboutStudio from "@/components/Home/AboutSection";
import Navbar from "@/components/Navbar";
import WhatWeBelieve from "@/components/About/WhatWeBelive";
import LeadershipSection from "@/components/About/LeadershipSection";
import OurTeamSection from "@/components/About/OurTeamSection";


export default function About() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutStory/>
      <AboutExperience/>
    <WhatWeBelieve/>
    <LeadershipSection/>
    <OurTeamSection/>
      <AboutFaq/>
      <AboutCTA/>

      <Footer/>
    </main>
  );
}