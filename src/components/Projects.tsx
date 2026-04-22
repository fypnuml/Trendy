"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/data";
import Link from "next/link";

interface ProjectsProps {
  projects: Project[];
}

const categories = ["All", "Exterior", "Interior", "Aluminum"];

export default function Projects({ projects }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-copper" />
            <span className="text-xs tracking-[0.3em] text-copper uppercase font-medium">
              Portfolio
            </span>
            <div className="w-8 h-[2px] bg-copper" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-charcoal">
            Featured Projects
          </h2>
          <p className="text-sm text-charcoal-lighter mt-4 max-w-md mx-auto">
            A curated selection of our finest work across residential and
            commercial projects.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-xs tracking-[0.1em] uppercase font-medium transition-all duration-300 rounded-full border ${
                activeCategory === cat
                  ? "bg-charcoal text-white border-charcoal"
                  : "bg-transparent text-charcoal-lighter border-border hover:border-copper hover:text-copper"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Link 
                  href={`/projects/${project.slug}`}
                  className="group relative cursor-pointer block p-0 m-0 rounded-sm overflow-hidden border border-border/50 hover:border-copper transition-all duration-500 shadow-sm"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-charcoal-lighter overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/80 transition-all duration-500 flex flex-col justify-end p-8">
                      
                      {/* Zoom Icon */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <div className="w-14 h-14 rounded-full bg-copper/90 text-white flex items-center justify-center shadow-xl">
                          <Maximize2 className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Info text that slides up */}
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                         <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase block mb-2">
                           {project.category}
                         </span>
                         <h3 className="text-xl font-display font-bold text-white mb-4">
                           {project.title}
                         </h3>
                         <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                            View Project Case
                            <ArrowRight className="w-3 h-3" />
                         </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
