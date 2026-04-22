import { Metadata } from "next";
import { getSettings } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogCategory from "@/components/CatalogCategory";
import { getImagesFromDir } from "@/lib/assetsUtils";

export const metadata: Metadata = {
  title: "Modern Stair Railings | Grace Aluminium",
  description: "Explore our sleek and safe aluminium stair railing systems, combining modern design with durable construction.",
};

export default function RailingsPage() {
  const settings = getSettings();
  const images = getImagesFromDir("railings");

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      <div className="h-24 bg-charcoal w-full" />
      <div className="flex-grow flex flex-col">
        <CatalogCategory 
          category="railings" 
          title="Modern Stair Railings" 
          description="Enhance your staircase with our premium aluminium railing systems. Designed for safety, durability, and a clean minimalist aesthetic." 
          images={images}
        />
      </div>
      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
