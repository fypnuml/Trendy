"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({ phoneNumber, defaultMessage = "Hello! I'm interested in your services." }: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Clean phone number (remove spaces, +, etc)
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultMessage)}`;

  useEffect(() => {
    // Show button after scrolling down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Show tooltip occasionally to grab attention
    const tooltipInterval = setInterval(() => {
      if (window.scrollY > 300) {
          setShowTooltip(true);
          setTimeout(() => setShowTooltip(false), 5000); // Hide after 5s
      }
    }, 30000); // Every 30 seconds

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(tooltipInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-4"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
               <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: 10 }}
                 className="hidden sm:flex items-center bg-white shadow-xl px-4 py-2 rounded-lg border border-border"
               >
                 <span className="text-sm text-charcoal font-medium mr-3">Need help? Chat with us!</span>
                 <button onClick={() => setShowTooltip(false)} className="text-charcoal-lighter hover:text-copper transition-colors">
                    <X className="w-3 h-3" />
                 </button>
                 {/* Triangle pointer */}
                 <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-b border-border rotate-[-45deg]" />
               </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
          >
             {/* Pulse effect */}
             <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40" />
             <MessageCircle className="w-7 h-7 relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
