import { Metadata } from "next";
import { getSettings } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogCategory from "@/components/CatalogCategory";
import { getImagesFromDir } from "@/lib/assetsUtils";

export const metadata: Metadata = {
  title: "Architectural Windows | Grace Aluminum",
  description: "Discover our premium aluminum window systems designed for superior thermal performance and panoramic views.",
};

export default function WindowsPage() {
  const settings = getSettings();
  const images = getImagesFromDir("windows");

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      <div className="h-24 bg-charcoal w-full" />
      <div className="flex-grow flex flex-col">
        <CatalogCategory 
          category="windows" 
          title="Architectural Windows" 
          description="Frame your world with our high-performance window systems. From floor-to-ceiling panoramic glass to versatile European tilt-and-turn functionality." 
          images={images}
        />
      </div>
      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
