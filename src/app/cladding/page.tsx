import { Metadata } from "next";
import { getSettings } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogCategory from "@/components/CatalogCategory";
import { getImagesFromDir } from "@/lib/assetsUtils";

export const metadata: Metadata = {
  title: "Aluminium Wall Cladding | Grace Aluminium",
  description: "Explore our premium aluminium wall cladding solutions, designed for durability and modern architectural aesthetics.",
};

export default function CladdingPage() {
  const settings = getSettings();
  const images = getImagesFromDir("cladding");

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      <div className="h-24 bg-charcoal w-full" />
      <div className="flex-grow flex flex-col">
        <CatalogCategory 
          category="cladding" 
          title="Wall Cladding" 
          description="Transform your building's exterior with our high-performance aluminium cladding systems. Engineered for weather resistance and a sleek, modern finish." 
          images={images}
        />
      </div>
      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
