import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import AboutStudio from "@/components/Home/AboutSection";
import WhyStudio from "@/components/Home/WhyStudio";
import ServicesSection from "@/components/Home/ServiceSection";
import StudioMethod from "@/components/Home/StudioMethode";
import FeaturedWork from "@/components/Home/FeaturedWork";
import StudioDNA from "@/components/Home/StudiaDna";
import PromiseSection from "@/components/Home/PromiseSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutStudio/>
      <WhyStudio/>
      <ServicesSection/>
      <StudioMethod/>
      <FeaturedWork/>
      <StudioDNA/>
      <PromiseSection/>
    </main>
  );
}