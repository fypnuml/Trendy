import { Metadata } from "next";
import { getSettings } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogCategory from "@/components/CatalogCategory";
import { getImagesFromDir } from "@/lib/assetsUtils";

export const metadata: Metadata = {
  title: "Architectural Skylights | Grace Aluminium",
  description: "Discover our premium aluminium skylights designed to bring natural light and elegance to your space.",
};

export default function SkylightsPage() {
  const settings = getSettings();
  const images = getImagesFromDir("skylights");

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      <div className="h-24 bg-charcoal w-full" />
      <div className="flex-grow flex flex-col">
        <CatalogCategory 
          category="skylights" 
          title="Architectural Skylights" 
          description="Illuminate your interiors with our elegant skylight systems. Custom-engineered for thermal efficiency and a seamless integration with your roof." 
          images={images}
        />
      </div>
      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
