import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import AboutStudio from "@/components/Home/AboutSection";
import WhyStudio from "@/components/Home/WhyStudio";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutStudio/>
      <WhyStudio/>
    </main>
  );
}