"use client";

import { motion } from "framer-motion";

export default function CompanyIntro() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-sm overflow-hidden z-10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/assets/home/home_page.jpeg" 
                alt="Grace Aluminum Facility" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            </div>
            
            {/* Decorative Accents */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-copper/30 z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-copper/30 z-0" />
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-copper/10 blur-2xl rounded-full" />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-copper text-[11px] tracking-[0.4em] font-bold uppercase block mb-6">
              Legacy of Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-8">
              The Leading Wholesale <br />
              <span className="text-copper">Aluminum Supplier</span>
            </h2>
            
            <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg">
              <p>
                Grace Aluminum is a leading wholesale supplier of premium aluminium sections, offering all gauges and profiles to meet the highest industry standards. We combine consistent quality with precision and reliability, ensuring every product reflects excellence.
              </p>
              <p>
                With a strong nationwide distribution network, we are committed to delivering orders quickly and efficiently—keeping your projects moving without delay. At Grace Aluminum, we don’t just supply aluminium, we deliver trust, performance, and long-term value.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">20+</span>
                <span className="text-[10px] tracking-widest text-copper uppercase font-medium">Years Active</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">100%</span>
                <span className="text-[10px] tracking-widest text-copper uppercase font-medium">Quality Check</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
