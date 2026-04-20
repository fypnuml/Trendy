import { getCatalogByCategory } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CatalogCategoryProps {
  category: "doors" | "windows" | "kitchens" | "wardrobes";
  title: string;
  description: string;
}

export default function CatalogCategory({ category, title, description }: CatalogCategoryProps) {
  const items = getCatalogByCategory(category);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
         <span className="text-copper text-[10px] tracking-[0.3em] font-semibold uppercase block mb-4">Premium Selection</span>
         <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight mb-6">{title}</h1>
         <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
           {description}
         </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link 
              key={item.id} 
              href={`/${category}/${item.slug}`}
              className="group block bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-copper/50 transition-colors duration-500"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-charcoal-light">
                 {/* Image Placeholder/Fallback */}
                 <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${item.mainImage})` }} />
                 <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80" />
                 
                 <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-copper font-medium tracking-wider">{item.features.length} Features</p>
                 </div>
              </div>
              <div className="p-6 flex flex-col justify-between" style={{ minHeight: "140px" }}>
                <p className="text-sm text-white/60 leading-relaxed mb-6 line-clamp-2">
                  {item.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-white group-hover:text-copper transition-colors">
                  Explore Details
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}

          {items.length === 0 && (
            <div className="col-span-full py-24 text-center">
              <p className="text-white/40 mb-4">New catalog items coming soon.</p>
              <Link href="/contact" className="text-copper text-sm uppercase tracking-widest font-semibold hover:underline">Contact us for custom options</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
