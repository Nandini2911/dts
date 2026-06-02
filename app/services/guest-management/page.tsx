import Footer from "@/components/Footer";
import GuestManagementHero from "@/components/GuestManagement/GuestManagementHero";
import GuestServiceOverview from "@/components/GuestManagement/GuestServiceOverview";
import Navbar from "@/components/Navbar";
import { GitPullRequestClosed } from "lucide-react";



export default function GuestManagement() {
  return (
    <main>
      <Navbar />
      <GuestManagementHero/>
      <GuestServiceOverview/>
     

      <Footer/>
    </main>
  );
}