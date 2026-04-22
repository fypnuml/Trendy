"use client";

import { motion } from "framer-motion";

interface AboutProps {
  settings: {
    aboutText: string;
    aboutText2: string;
  };
}

export default function About({ settings }: AboutProps) {
  return (
    <section id="about" className="section-padding bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-copper" />
              <span className="text-xs tracking-[0.3em] text-copper uppercase font-medium">
                About Grace Aluminum
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 text-charcoal">
              Premium Quality
              <br />
              <span className="text-copper font-serif italic font-normal">
                Sections & Profiles
              </span>
            </h2>

            <p className="text-charcoal-lighter leading-relaxed mb-6">
                Grace Aluminum is a trusted name in the aluminium industry, delivering premium-quality solutions with a focus on strength, precision, and reliability. We proudly offer our own brands—Grace and Grace Pro—developed to meet the highest standards of performance and durability.
            </p>

            <p className="text-charcoal-lighter leading-relaxed mb-10">
                Our aluminium sections are available in full-thickness gauges, ensuring superior hardness, structural integrity, and long-lasting quality. Designed for professionals who demand excellence, our products are ideal for a wide range of fabrication and construction applications.
            </p>

            {/* Key Brands/Values */}
            <div className="grid grid-cols-2 gap-8">
              {[
                { title: "Grace", desc: "Core premium sections" },
                { title: "Grace Pro", desc: "High-performance profiles" },
                { title: "Full Gauges", desc: "Highest industry standards" },
                { title: "Reliability", desc: "Nationwide supply network" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="pl-4 border-l-2 border-copper/30"
                >
                  <h4 className="text-sm font-semibold tracking-wide text-charcoal uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs text-charcoal-lighter/70 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] bg-beige-dark rounded-sm overflow-hidden shadow-2xl shadow-charcoal/10">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src="/assets/home/home_page.jpeg" 
                 alt="Grace Aluminum Quality Solutions" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/40 to-transparent mix-blend-multiply" />
            </div>

            {/* Floating accent card */}
            <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute -bottom-8 -left-8 bg-charcoal p-8 shadow-xl rounded-sm"
            >
              <div className="text-4xl font-display font-bold text-copper mb-1">
                20+
              </div>
              <div className="text-[10px] tracking-[0.15em] text-white/50 uppercase font-medium">
                Years of Excellence
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
