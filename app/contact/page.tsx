import ContactFaq from "@/components/Contact/ContactFaq";
import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactMap from "@/components/Contact/ContactMap";
import LocationSEO from "@/components/Contact/LocationSEO";
import ServicesSEO from "@/components/Contact/ServicesSEO";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";




export default function Contact() {
  return (
    <main>

  <Navbar/>
        <ContactHero/>
                <LocationSEO/>
                <ServicesSEO/>
        <ContactInfo/>
        <ContactMap/>
        
        <ContactFaq/>

           <Footer/>
          </main>
       
  );
}