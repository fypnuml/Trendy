"use client";

import { motion } from "framer-motion";
import { Grid3x3, LayoutGrid, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Doors",
    count: "Various Systems",
    icon: <Grid3x3 className="w-6 h-6" />,
    href: "/doors",
    image: "/assets/doors/door 1.jpeg",
  },
  {
    title: "Windows",
    count: "Custom Layouts",
    icon: <LayoutGrid className="w-6 h-6" />,
    href: "/windows",
    image: "/assets/windows/windows1.jpeg",
  },
  {
    title: "Kitchens",
    count: "Premium Aluminum",
    icon: <Grid3x3 className="w-6 h-6" />,
    href: "/kitchens",
    image: "/assets/kitchens/kitchen1.jpeg",
  },
  {
    title: "Wardrobes",
    count: "Bespoke Storage",
    icon: <LayoutGrid className="w-6 h-6" />,
    href: "/wardrobes",
    image: "/assets/wardrobes/wardobes.jpeg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
             <span className="text-copper text-[10px] tracking-[0.3em] font-semibold uppercase block mb-4">Our Expertise</span>
             <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white tracking-tight">Dedicated Product Lines</h2>
          </div>
          <Link href="/services" className="group flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
            View All Services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Link
                href={category.href}
                className="group relative block h-[300px] rounded-sm overflow-hidden border border-white/10 shadow-lg shadow-charcoal-light/10"
              >
                {/* Background placeholder if image missing, else image */}
                <div className="absolute inset-0 bg-charcoal-light" />
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                  style={{ backgroundImage: `url("${category.image}")` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-copper/20 backdrop-blur-md rounded-full flex items-center justify-center text-copper mb-4 transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-copper group-hover:text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1 transition-transform duration-500 group-hover:-translate-y-1">
                    {category.title}
                  </h3>
                  <p className="text-xs text-white/50 tracking-wider transition-all duration-500 group-hover:-translate-y-1 group-hover:text-copper">
                    {category.count}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
