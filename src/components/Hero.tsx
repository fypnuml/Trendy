"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

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
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#0a0a0b]">
        {/* Animated Background Mesh */}
        <motion.div 
           animate={{ 
             scale: [1, 1.1, 1],
             opacity: [0.2, 0.35, 0.2],
             rotate: [0, 5, 0]
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute -top-[10%] -right-[5%] w-[90%] h-[90%] bg-gradient-radial from-copper/15 via-copper/5 to-transparent blur-[120px] rounded-full" 
        />
        <motion.div 
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.15, 0.25, 0.15],
             rotate: [0, -8, 0]
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute -bottom-[15%] -left-[5%] w-[80%] h-[80%] bg-gradient-radial from-gold/10 via-copper/5 to-transparent blur-[100px] rounded-full" 
        />
        
        {/* Additional "Shades" for Depth */}
        <div className="absolute top-1/4 right-[20%] w-[400px] h-[400px] bg-copper/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-[30%] w-[350px] h-[350px] bg-gold/5 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Subtle Grid & Industrial Pattern */}
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.05]" />
        
        {/* Architectural Blueprint Lines (Subtle) */}
        <div className="absolute inset-0 opacity-[0.03]">
           <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white" />
           <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white" />
           <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/50" />
           <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/50" />
        </div>

        {/* Floating Abstract Shapes */}
        <motion.div
           animate={{ 
             y: [0, -30, 0],
             rotate: [0, 45, 0]
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/4 left-[10%] w-32 h-32 border border-white/5 rounded-2xl rotate-45"
        />
        <motion.div
           animate={{ 
             y: [0, 40, 0],
             rotate: [0, -30, 0]
           }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-1/4 right-[15%] w-24 h-24 border border-copper/10 rounded-full"
        />
      </div>

      {/* Noise overlay for texture */}
      <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            {/* Elegant Tagline/Overline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="h-px w-8 bg-copper" />
              <span className="text-[10px] sm:text-xs tracking-[0.4em] text-copper uppercase font-bold">
                Quality • Precision • Reliability
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.1] mb-8 text-white"
            >
              The Standard of 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper via-gold to-copper bg-[length:200%_auto] animate-gradient-x">
                Premium
              </span> 
              <br />
              <span className="font-serif italic font-light text-white/90">Aluminum</span>
            </motion.h1>

            {/* Descriptive Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mb-12 border-l-2 border-white/10 pl-6"
            >
              {settings.heroSubtitle}
            </motion.p>

            {/* Main Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <button
                onClick={() => handleScroll("#services")}
                className="group relative overflow-hidden px-8 py-4 bg-copper text-white text-[11px] tracking-[0.2em] uppercase font-bold rounded-sm transition-all duration-300 hover:bg-copper-light shadow-[0_10px_20px_-10px_rgba(194,65,12,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Catalog
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
              
              <button
                onClick={() => handleScroll("#contact")}
                className="group px-8 py-4 border border-white/20 text-white text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-white hover:text-charcoal transition-all duration-500 rounded-sm"
              >
                Get a Quote
              </button>
            </motion.div>

            {/* Quick Stats Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 pt-10 border-t border-white/5 flex flex-wrap gap-10 md:gap-20"
            >
              {settings.stats.map((stat, index) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                    {stat.number}
                  </span>
                  <span className="text-[9px] tracking-[0.2em] text-white/40 uppercase font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
        onClick={() => handleScroll("#categories")}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-copper group-hover:h-16 transition-all duration-500" />
        <span className="text-[9px] tracking-[0.4em] text-white/30 uppercase group-hover:text-white transition-colors">
          Discovery
        </span>
      </motion.div>
    </section>
  );
}
