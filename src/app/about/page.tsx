import { Metadata } from "next";
import { getSettings } from "@/lib/data";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "About Us | Trendy Aluminum & Interiors",
  description: "Learn more about Trendy, our expertise in premium aluminum and interior solutions, and our commitment to architectural excellence.",
};

export default function AboutPage() {
  const settings = getSettings();

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      
      {/* Spacer for fixed navbar since this page doesn't have a full screen Hero */}
      <div className="h-24 bg-charcoal w-full" />
      
      <div className="flex-grow flex flex-col justify-center py-12">
         <About settings={settings} />
      </div>

      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
