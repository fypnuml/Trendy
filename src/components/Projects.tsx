"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import type { Project } from "@/lib/data";

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
                className="group relative cursor-pointer block p-0 m-0"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-charcoal-lighter rounded-sm overflow-hidden img-zoom shadow-sm">
                  {/* Fallback image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-charcoal-light">
                    <span className="text-[10px] tracking-widest text-white/20 uppercase">Project Image</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-500 flex flex-col justify-end p-6">
                    
                    {/* Zoom Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="w-12 h-12 rounded-full bg-copper/90 text-white flex items-center justify-center">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Info text that slides up */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 text-center">
                       <span className="text-[10px] text-gold font-medium tracking-[0.15em] uppercase block mb-1">
                          {project.category}
                        </span>
                        <h3 className="text-lg font-display font-semibold text-white">
                          {project.title}
                        </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
