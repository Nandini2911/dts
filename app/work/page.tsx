import AboutCta from "@/components/About/AboutCta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ClientLogo from "@/components/Work/ClientLogo";
import FeaturedWork from "@/components/Work/FeaturedWork";
import HeroWork from "@/components/Work/HeroWork";
import Testmonial from "@/components/Work/Testmonial";
import WorkFaq from "@/components/Work/WorkFaq";



export default function Work() {
  return (
    <main>

        <Navbar />
        <HeroWork/>
        <FeaturedWork/>
        <ClientLogo/>
        <Testmonial/>
        <WorkFaq/>
        <AboutCta/>
           <Footer/>
          </main>
       
  );
}