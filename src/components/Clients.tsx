"use client";

import { motion } from "framer-motion";
import type { Client } from "@/lib/data";

interface ClientsProps {
  clients: Client[];
  partners: Client[];
}

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center px-12 py-8 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center border border-copper/20">
          <span className="text-sm font-display font-bold text-copper">
            {name.charAt(0)}
          </span>
        </div>
        <span className="text-base font-display font-semibold tracking-wide text-charcoal/60 whitespace-nowrap">
          {name}
        </span>
      </div>
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
                <LogoPlaceholder key={`${client.id}-${index}`} name={client.name} />
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
                <LogoPlaceholder key={`${partner.id}-${index}`} name={partner.name} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
