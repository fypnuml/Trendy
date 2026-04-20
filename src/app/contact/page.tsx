import { Metadata } from "next";
import { getSettings } from "@/lib/data";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact Us | Trendy Aluminum & Interiors",
  description: "Get in touch with our team for premium architectural aluminum and interior design consultation.",
};

export default function ContactPage() {
  const settings = getSettings();

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      
      <div className="h-24 bg-charcoal w-full" />
      
      <div className="flex-grow flex flex-col py-12">
        <Contact settings={settings} />
      </div>

      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
