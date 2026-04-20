import { Metadata } from "next";
import { getSettings } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogCategory from "@/components/CatalogCategory";

export const metadata: Metadata = {
  title: "Aluminum Kitchens | Trendy Interiors",
  description: "Modern, durable, and elegant aluminum kitchen solutions crafted for superior performance and minimalist design.",
};

export default function KitchensPage() {
  const settings = getSettings();

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      <div className="h-24 bg-charcoal w-full" />
      <div className="flex-grow flex flex-col">
        <CatalogCategory 
          category="kitchens" 
          title="Bespoke Kitchens" 
          description="Discover the intersection of exceptional durability and minimalist design. Our aluminum kitchens withstand daily wear while maintaining a flawless, contemporary aesthetic." 
        />
      </div>
      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
