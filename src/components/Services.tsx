"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Grid3x3, DoorOpen, Droplets, LayoutGrid, ChefHat } from "lucide-react";
import type { Service } from "@/lib/data";

interface ServicesProps {
  services: Service[];
}

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  Grid3x3: <Grid3x3 className="w-8 h-8" />,
  DoorOpen: <DoorOpen className="w-8 h-8" />,
  Droplets: <Droplets className="w-8 h-8" />,
  LayoutGrid: <LayoutGrid className="w-8 h-8" />,
  ChefHat: <ChefHat className="w-8 h-8" />,
};

// Route mapping helper
const routeMap: Record<string, string> = {
  "aluminum-windows": "/windows",
  "aluminum-doors": "/doors",
  "shower-enclosures": "/catalog/shower",
  "wardrobes": "/wardrobes",
  "aluminum-kitchens": "/kitchens",
  "cladding": "/cladding",
  "skylights": "/skylights",
  "railings": "/railings",
};

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="section-padding bg-beige relative">
      <div className="absolute inset-0 noise-bg mix-blend-overlay opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-copper" />
            <span className="text-xs tracking-[0.3em] text-copper uppercase font-medium">
              Our Services
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight text-charcoal">
              What We{" "}
              <span className="text-copper italic font-serif font-normal">Offer</span>
            </h2>
            <p className="text-sm text-charcoal-lighter max-w-sm leading-relaxed">
              Each service is delivered with precision craftsmanship and an
              unwavering commitment to quality.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link 
                href={routeMap[service.slug] || "/services"}
                className="premium-card bg-white rounded-sm overflow-hidden border border-border shadow-sm flex flex-col h-full hover:border-copper transition-all duration-500"
              >
                {/* Image Area */}
                <div className="relative aspect-[16/10] bg-charcoal overflow-hidden img-zoom">
                  {/* Service Image */}
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 text-[9px] font-medium tracking-[0.15em] uppercase bg-white/95 backdrop-blur-sm text-charcoal rounded-sm shadow-sm">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-display font-bold text-charcoal mb-3 group-hover:text-copper transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-charcoal-lighter leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-charcoal text-xs font-semibold tracking-[0.1em] uppercase group-hover:text-copper group-hover:gap-3 transition-all duration-300 mt-auto">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
