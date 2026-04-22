"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Branch, SiteSettings } from "@/lib/data";

interface BranchContentProps {
  branches: Branch[];
  settings: SiteSettings;
}

export default function BranchContent({ branches, settings }: BranchContentProps) {
  return (
    <main className="bg-charcoal min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/assets/branch/branch top.jpeg" 
            alt="Our Branch Network" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-[2px] group-hover:backdrop-blur-none group-hover:bg-charcoal/40 transition-all duration-700" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-copper text-[10px] tracking-[0.5em] font-bold uppercase block mb-4"
          >
            Nationwide Presence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Our Branch <span className="text-white/50 italic font-serif">Network</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-24 h-px bg-copper mx-auto"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 leading-tight">
                Delivering Excellence <br />
                <span className="text-copper italic font-serif">Across Pakistan</span>
              </h2>
              <div className="space-y-6 text-white/70 font-light text-lg leading-relaxed">
                <p>
                  At Grace Aluminium, we are committed to delivering excellence in aluminium solutions across Pakistan. With a strong presence in Multan and Islamabad, we proudly offer our premium product lines — Grace and Grace Pro — engineered with full-thickness gauges, superior hardness, and refined finishing to meet modern architectural standards.
                </p>
                <p>
                  Our branches cater to both retail and wholesale clients, providing a comprehensive range of aluminium profiles, sections, and customized solutions in multiple solid colors and elegant wooden designs.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/5 shadow-2xl lg:translate-y-12"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/assets/branch/branch1.jpeg" 
                alt="Grace Aluminium Showroom" 
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-24 bg-surface-dark relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-charcoal border border-white/5 rounded-sm p-8 flex flex-col h-full hover:border-copper/30 transition-all duration-500 group relative"
              >
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                   <Building2 size={80} className="text-white" />
                </div>

                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-16 h-16 bg-white rounded-sm flex items-center justify-center p-2 group-hover:bg-beige transition-colors overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={branch.logo} 
                      alt={branch.name} 
                      className="max-w-full max-h-full object-contain transition-all duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-copper transition-colors">{branch.name}</h3>
                    <p className="text-copper text-[10px] tracking-widest uppercase font-medium">{branch.location}</p>
                  </div>
                </div>

                <div className="space-y-6 flex-grow relative z-10">
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-copper flex-shrink-0 mt-1" />
                    <p className="text-white/60 text-sm leading-relaxed">{branch.address}</p>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors cursor-pointer group/link">
                      <Phone className="w-4 h-4 text-copper group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{branch.phone}</span>
                    </div>
                    {branch.ptcl && (
                      <div className="flex items-center gap-4 text-white/60">
                        <Building2 className="w-4 h-4 text-copper" />
                        <span className="text-sm">PTCL: {branch.ptcl}</span>
                      </div>
                    )}
                    {branch.email && (
                      <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors cursor-pointer group/link">
                        <Mail className="w-4 h-4 text-copper group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm truncate">{branch.email}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-white/50 text-sm italic font-light pt-6 leading-relaxed border-t border-white/5">
                    {branch.description}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 relative z-10">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-white/40 hover:text-copper transition-all"
                  >
                    View on Map <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Slogan */}
      <section className="py-20 bg-charcoal border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
              <h2 className="text-2xl md:text-3xl font-display text-white/90 italic">
                Grace Aluminium — <span className="text-copper not-italic font-bold">Designing Strength, Delivering Excellence.</span>
              </h2>
           </motion.div>
        </div>
      </section>

      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
