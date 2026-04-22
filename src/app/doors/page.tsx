import { Metadata } from "next";
import { getSettings } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogCategory from "@/components/CatalogCategory";
import { getImagesFromDir } from "@/lib/assetsUtils";

export const metadata: Metadata = {
  title: "Premium Doors Collection | Grace Aluminum",
  description: "Explore our collection of high-end aluminum doors, featuring pivot systems, minimalist sliding doors, and more.",
};

export default function DoorsPage() {
  const settings = getSettings();
  const images = getImagesFromDir("doors");

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      <div className="h-24 bg-charcoal w-full" />
      <div className="flex-grow flex flex-col">
        <CatalogCategory 
          category="doors" 
          title="Premium Doors" 
          description="Make a lasting impression with our architectural door systems. Engineered for seamless operation, exceptional security, and unmatched aesthetic appeal." 
          images={images}
        />
      </div>
      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
