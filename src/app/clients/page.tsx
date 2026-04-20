import { Metadata } from "next";
import { getSettings, getClients, getPartners } from "@/lib/data";
import Clients from "@/components/Clients";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Clients & Partners | Trendy Aluminum & Interiors",
  description: "Discover the organizations and industry leaders we partner with to deliver excellence.",
};

export default function ClientsPage() {
  const settings = getSettings();
  const clientsData = getClients();
  const partnersData = getPartners();

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      
      <div className="h-24 bg-charcoal w-full" />
      
      <div className="flex-grow flex flex-col justify-center py-12">
        <Clients clients={clientsData} partners={partnersData} />
      </div>

      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
