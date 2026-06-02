import Footer from "@/components/Footer";
import GuestManagementHero from "@/components/GuestManagement/GuestManagementHero";
import GuestServiceOverview from "@/components/GuestManagement/GuestServiceOverview";
import WhyItMatters from "@/components/GuestManagement/WhyItMatters";
import Navbar from "@/components/Navbar";
import { GitPullRequestClosed } from "lucide-react";



export default function GuestManagement() {
  return (
    <main>
      <Navbar />
      <GuestManagementHero/>
      <GuestServiceOverview/>
      <WhyItMatters/>
     

      <Footer/>
    </main>
  );
}