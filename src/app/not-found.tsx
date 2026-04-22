"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center relative overflow-hidden px-6">
      {/* Background elements */}
      <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-copper/10 blur-[120px] rounded-full"
      />
      
      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-copper text-[10px] tracking-[0.6em] font-black uppercase mb-8 block">Error 404</span>
          
          <h1 className="text-7xl md:text-9xl font-display font-black text-white mb-8 tracking-tighter">
            Lost in <span className="text-copper">Space?</span>
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg mx-auto">
            The architectural blueprint you're looking for doesn't exist or has been moved to a new structure.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/"
              className="group flex items-center gap-3 px-10 py-5 bg-copper text-white text-[11px] tracking-[0.2em] uppercase font-bold rounded-sm transition-all duration-300 hover:bg-copper-light shadow-xl shadow-copper/20"
            >
              <Home className="w-4 h-4" />
              Back to Homepage
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="group flex items-center gap-3 px-10 py-5 border border-white/20 text-white text-[11px] tracking-[0.2em] uppercase font-bold rounded-sm transition-all duration-300 hover:border-copper hover:text-copper"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Go Back
            </button>
          </div>
        </motion.div>
        
        {/* Decorative 404 text in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
          <span className="text-[20rem] md:text-[30rem] font-black text-white/[0.03] leading-none">
            404
          </span>
        </div>
      </div>
    </div>
  );
}
