"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400); // Wait a bit at 100%
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-charcoal z-[100] flex items-center justify-center noise-bg"
        >
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-copper/[0.05] rounded-full blur-[120px] pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col items-center gap-10 relative z-10 w-full max-w-xs px-6">
            {/* Logo Mark */}
            <div className="relative text-center">
               <motion.span 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
                 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white block mb-2"
               >
                Trendy
              </motion.span>
               <motion.span 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 className="text-[9px] tracking-[0.25em] text-copper uppercase font-medium"
               >
                Premium Solutions
              </motion.span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full flex flex-col items-center gap-4">
              <div className="w-full h-[1px] bg-white/10 overflow-hidden relative">
                 {/* Progress Indicator */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-copper shadow-[0_0_10px_rgba(194,65,12,0.5)]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
              </div>
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="flex justify-between w-full"
              >
                  <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase font-medium">
                    Loading
                  </span>
                  <span className="text-[10px] tracking-[0.1em] text-copper font-medium">
                    {progress}%
                  </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
