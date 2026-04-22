import { Metadata } from "next";
import { getSettings } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogCategory from "@/components/CatalogCategory";
import { getImagesFromDir } from "@/lib/assetsUtils";

export const metadata: Metadata = {
  title: "Premium Shower Enclosures | Grace Aluminum",
  description: "Modern, durable, and elegant aluminum shower enclosure solutions crafted for superior performance and minimalist design.",
};

export default function ShowerPage() {
  const settings = getSettings();
  const images = getImagesFromDir("shower");

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      <div className="h-24 bg-charcoal w-full" />
      <div className="flex-grow flex flex-col">
        <CatalogCategory 
          category="shower" 
          title="Shower Enclosures" 
          description="Elevate your bathroom with our bespoke shower enclosures. Featuring frameless glass panels, precision aluminum hardware, and watertight engineering." 
          images={images}
        />
      </div>
      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
