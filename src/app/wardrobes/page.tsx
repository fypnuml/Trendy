import { Metadata } from "next";
import { getSettings } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogCategory from "@/components/CatalogCategory";
import { getImagesFromDir } from "@/lib/assetsUtils";

export const metadata: Metadata = {
  title: "Luxury Wardrobes | Grace Aluminum",
  description: "Custom built-in and walk-in wardrobe systems featuring sleek aluminum frames and bespoke interior organization.",
};

export default function WardrobesPage() {
  const settings = getSettings();
  const images = getImagesFromDir("wardrobes");

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      <div className="h-24 bg-charcoal w-full" />
      <div className="flex-grow flex flex-col">
        <CatalogCategory 
          category="wardrobes" 
          title="Luxury Wardrobes" 
          description="Transform your space with intelligent storage design. Our custom wardrobe solutions blend sleek aluminum profiles with premium glass and functional interiors." 
          images={images}
        />
      </div>
      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
