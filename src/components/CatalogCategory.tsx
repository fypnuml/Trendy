"use client";

import { useState } from "react";
import { getCatalogByCategory } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CatalogCategoryProps {
  category: "doors" | "windows" | "kitchens" | "wardrobes" | "shower";
  title: string;
  description: string;
  images?: string[];
}

export default function CatalogCategory({ category, title, description, images = [] }: CatalogCategoryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const items = getCatalogByCategory(category as any);
  const showGallery = images.length > 0;

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
          {showGallery ? (
            // Dynamic Image Gallery Mode
            images.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/5] rounded-sm overflow-hidden bg-charcoal-light border border-white/10 hover:border-copper/50 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={img} 
                  alt={`${title} design ${index + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-10 h-[1px] bg-copper mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                  <h4 className="text-white text-lg font-display font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    View Description
                  </h4>
                  <p className="text-copper text-[10px] tracking-[0.2em] uppercase mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {title} Detail
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            // Catalog Items Mode
            items.map((item) => (
              <Link 
                key={item.id} 
                href={`/${category}/${item.slug}`}
                className="group block bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-copper/50 transition-colors duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-charcoal-light">
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
            ))
          )}

          {(!showGallery && items.length === 0) && (
            <div className="col-span-full py-24 text-center">
              <p className="text-white/40 mb-4">New catalog items coming soon.</p>
              <Link href="/contact" className="text-copper text-sm uppercase tracking-widest font-semibold hover:underline">Contact us for custom options</Link>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox / Modal for Image Description */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 backdrop-blur-sm p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-2xl"
              >
                <img 
                  src={selectedImage} 
                  alt="Selected design" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-left"
              >
                <span className="text-copper text-xs tracking-[0.3em] font-bold uppercase block mb-4">Product Detail</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">{title} Specification</h2>
                <div className="h-px w-20 bg-copper mb-8" />
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {description}
                </p>
                <p className="text-white/40 text-sm leading-relaxed">
                  Our {title.toLowerCase()} systems are custom-engineered for each project, ensuring perfect fit and finish. Contact us for technical specifications and pricing for this specific configuration.
                </p>
                <div className="mt-12">
                   <Link 
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-copper text-white hover:bg-copper-light transition-all rounded-sm text-xs font-bold uppercase tracking-widest"
                   >
                    Inquire About This Design
                   </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
