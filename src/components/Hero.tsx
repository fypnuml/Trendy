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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-charcoal" />

      {/* Geometric Accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-copper/[0.06] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.02] rounded-full" />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-bg" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-copper to-gold" />
            <span className="text-xs tracking-[0.3em] text-copper uppercase font-medium">
              Premium Design & Craftsmanship
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-8 text-white"
          >
            Premium Aluminum
            <br />
            <span className="gradient-text-copper">&</span> Interior{" "}
            <span className="font-serif italic font-normal text-white/80">
              Solutions
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-xl mb-12"
          >
            {settings.heroSubtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => handleScroll("#services")}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-copper text-white text-sm tracking-[0.1em] uppercase hover:bg-copper-light transition-all duration-300 rounded-sm"
            >
              View Services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-sm tracking-[0.1em] uppercase hover:border-copper hover:text-copper transition-all duration-300 rounded-sm"
            >
              Contact Us
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-20 md:mt-28 grid grid-cols-3 gap-8 max-w-lg"
        >
          {settings.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.15, duration: 0.5 }}
              className="text-center sm:text-left"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-white">
                {stat.number}
              </div>
              <div className="text-[10px] tracking-[0.15em] text-white/40 uppercase mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => handleScroll("#categories")}
      >
        <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-copper/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
