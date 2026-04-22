import { Metadata } from "next";
import { getSettings, getServices } from "@/lib/data";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Our Services | Grace Aluminium",
  description: "Explore our premium aluminium solutions, including architectural cladding, skylights, windows, doors, and bespoke interior systems.",
};

export default function ServicesPage() {
  const settings = getSettings();
  const servicesData = getServices();

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      
      <div className="h-24 bg-charcoal w-full" />
      
      <div className="flex-grow flex flex-col py-12">
         <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
            <span className="text-copper text-[10px] tracking-[0.3em] font-semibold uppercase block mb-4">What We Do</span>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight mb-6">Our Services</h1>
            <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
              From structurally complex aluminum facades to bespoke interior joinery, our services cover every aspect of premium architectural implementation.
            </p>
         </div>

         <Services services={servicesData} />
      </div>

      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
