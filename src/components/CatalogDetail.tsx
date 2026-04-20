import { getCatalogItem, getSettings } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface CatalogDetailProps {
  category: string;
  slug: string;
}

export default function CatalogDetail({ category, slug }: CatalogDetailProps) {
  const item = getCatalogItem(category, slug);
  const settings = getSettings();

  if (!item) {
    notFound();
  }

  const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hello, I'm interested in the ${item.title} from your catalog.`)}`;

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full mt-24">
        {/* Placeholder background, replacing with an image later ideally */}
        <div className="absolute inset-0 bg-charcoal-light" />
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${item.mainImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-6 md:px-12 pb-16">
           <Link href={`/${category}`} className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-white/50 hover:text-copper transition-colors w-fit mb-6">
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to {category}
           </Link>
           <h1 className="text-4xl md:text-6xl font-serif font-semibold text-white tracking-tight max-w-4xl">{item.title}</h1>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-serif font-semibold text-white mb-6">Product Overview</h2>
            <p className="text-white/70 leading-relaxed mb-12 text-lg font-light">
              {item.description}
            </p>

            <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-copper mb-6">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
               {item.features.map((feature, idx) => (
                 <li key={idx} className="flex items-start gap-3 bg-white/5 p-4 border border-white/10 rounded-sm">
                   <CheckCircle2 className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                   <span className="text-sm text-white/80">{feature}</span>
                 </li>
               ))}
            </ul>

            {/* Gallery */}
            {item.gallery.length > 0 && (
              <>
                <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-copper mb-6">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                  {item.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-[4/3] bg-charcoal-light rounded-sm overflow-hidden border border-white/10">
                       <div className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700 cursor-pointer" style={{ backgroundImage: `url(${img})` }} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sticky Sidebar CTA */}
          <div className="lg:col-span-4">
             <div className="sticky top-32 bg-white/5 border border-white/10 p-8 rounded-sm">
                <h3 className="text-xl font-serif font-semibold text-white mb-4">Interested in this item?</h3>
                <p className="text-sm text-white/60 mb-8 border-b border-white/10 pb-8">
                   Our experts are ready to assist you with custom dimensions, finishes, and pricing for the {item.title}.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white text-sm font-semibold tracking-wider uppercase rounded-sm hover:-translate-y-1 transition-transform shadow-lg shadow-[#25D366]/20"
                  >
                    <Phone className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                  
                  <Link 
                    href="/contact"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-transparent border border-white/20 text-white hover:border-copper hover:text-copper transition-colors text-sm font-semibold tracking-wider uppercase rounded-sm"
                  >
                    Request a Quote
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </div>

      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
