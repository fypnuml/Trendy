"use client";

import { motion } from "framer-motion";
import type { Client } from "@/lib/data";

interface ClientsProps {
  clients: Client[];
  partners: Client[];
}

function LogoItem({ name, logo }: { name: string; logo?: string }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center px-12 py-6 opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer group">
      {logo ? (
        <div className="h-12 md:h-16 w-auto relative flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={logo} 
            alt={name} 
            className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-charcoal/5 shadow-sm">
            <span className="text-lg font-display font-bold text-copper">
              {name.charAt(0)}
            </span>
          </div>
          <span className="text-sm font-display font-bold tracking-widest text-charcoal/80 uppercase whitespace-nowrap">
            {name}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Clients({ clients, partners }: ClientsProps) {
  // Duplicate arrays to create continuous infinite scroll effect
  const scrollingClients = [...clients, ...clients, ...clients];
  const scrollingPartners = [...partners, ...partners, ...partners];

  return (
    <section className="section-padding bg-beige-dark/30 relative overflow-hidden">
      {/* Edge Gradients for Marquee smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-beige-dark/30 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-beige-dark/30 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-copper" />
            <span className="text-xs tracking-[0.3em] text-copper uppercase font-medium">
              Trusted By
            </span>
            <div className="w-8 h-[2px] bg-copper" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-charcoal">
            Clients & Partners
          </h2>
        </motion.div>

        {/* Clients Marquee */}
        <div className="mb-16">
           <p className="text-[10px] tracking-[0.3em] text-charcoal-lighter uppercase text-center mb-8 font-medium">
            Our Valued Clients
          </p>
          <div className="flex overflow-hidden border-y border-border/60 py-4 bg-white/50 backdrop-blur-sm">
            <div className="animate-marquee flex whitespace-nowrap hover:[animation-play-state:paused]">
              {scrollingClients.map((client, index) => (
                <LogoItem key={`${client.id}-${index}`} name={client.name} logo={client.logo} />
              ))}
            </div>
          </div>
        </div>

        {/* Partners Marquee (Reverse direction) */}
        <div>
           <p className="text-[10px] tracking-[0.3em] text-charcoal-lighter uppercase text-center mb-8 font-medium">
            Our Strategic Partners
          </p>
          <div className="flex overflow-hidden border-y border-border/60 py-4 bg-white/50 backdrop-blur-sm" style={{ direction: 'rtl' }}>
             {/* Note: reverse direction achieved via CSS RTL on container and continuous scrolling animation */}
            <div className="animate-marquee flex whitespace-nowrap hover:[animation-play-state:paused]" style={{ direction: 'ltr' }}>
              {scrollingPartners.map((partner, index) => (
                <LogoItem key={`${partner.id}-${index}`} name={partner.name} logo={partner.logo} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
