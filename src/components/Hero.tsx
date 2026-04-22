"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  settings: {
    heroTitle: string;
    heroSubtitle: string;
    stats: { number: string; label: string }[];
  };
}

export default function Hero({ settings }: HeroProps) {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* 1. Light-Theme Background: Clean Silver/White with soft depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Light Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 opacity-90" />
        
        {/* Soft Silver/Metallic Reflections */}
        <motion.div 
           animate={{ 
             opacity: [0.1, 0.2, 0.1],
             scale: [1, 1.05, 1],
           }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-gradient-radial from-slate-200 via-slate-100/30 to-transparent blur-[100px] rounded-full" 
        />
        <motion.div 
           animate={{ 
             opacity: [0.05, 0.15, 0.05],
             scale: [1, 1.1, 1],
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-gradient-radial from-copper/10 via-transparent to-transparent blur-[120px] rounded-full" 
        />

        {/* Subtle Metallic Grid Pattern (Very Faint) */}
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center opacity-[0.03] mix-blend-multiply" />
        
        {/* Fine Architectural Lines */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-charcoal" />
          <div className="absolute top-0 left-1/2 w-[0.5px] h-full bg-charcoal" />
        </div>
      </div>

      {/* 2. Content Container with Architectural Balance */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full pt-32 md:pt-40 flex flex-col justify-center items-start">
        <div className="max-w-3xl">
          {/* Refined Overline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-6 mb-10"
          >
            <span className="h-[2px] w-10 bg-copper/60" />
            <span className="text-[10px] tracking-[0.6em] text-copper uppercase font-black">
              Engineering Perfection
            </span>
          </motion.div>

          {/* 3. Professionally Scaled Main Heading */}
          <div className="relative mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col gap-3 sm:gap-4"
            >
              <span className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-charcoal tracking-tight leading-tight">
                The Standard of 
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
                <span className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tighter leading-none text-charcoal">
                  Premium
                </span>
                <span className="text-4xl sm:text-6xl md:text-7xl font-serif italic text-copper/90 font-light tracking-wide mt-2 sm:mt-0">
                  Aluminum
                </span>
              </div>
            </motion.h1>
          </div>

          {/* 4. Elegant Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-l-[3px] border-copper/20 pl-8 mb-14 max-w-xl"
          >
            <p className="text-base md:text-lg text-charcoal/60 font-light leading-relaxed">
              {settings.heroSubtitle}
            </p>
          </motion.div>

          {/* 5. Minimalist CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <Link
              href="/#categories"
              className="group relative overflow-hidden px-10 py-5 bg-charcoal text-white text-[12px] tracking-[0.25em] uppercase font-black rounded-sm transition-all duration-500 hover:bg-copper shadow-lg flex items-center gap-3"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Catalog
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
              </span>
            </Link>
            
            <Link
              href="/contact"
              className="group relative px-10 py-5 border-[1.5px] border-charcoal/20 text-charcoal text-[12px] tracking-[0.25em] uppercase font-black hover:border-copper hover:text-copper transition-all duration-500 rounded-sm flex items-center justify-center bg-transparent"
            >
               Get a Quote
            </Link>
          </motion.div>

          {/* 6. Refined Stats Section (Light Theme) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mt-20 pt-12 border-t border-charcoal/5 flex flex-wrap gap-12 md:gap-24"
          >
            {settings.stats.map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <span className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-2 block group-hover:text-copper transition-colors">
                  {stat.number}
                </span>
                <span className="text-[10px] tracking-[0.3em] text-charcoal/30 uppercase font-black">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
