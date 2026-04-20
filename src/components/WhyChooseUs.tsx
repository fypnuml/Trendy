"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Premium Quality",
    description:
      "We use only top-grade aluminum and materials, ensuring durability and elegance in every installation.",
  },
  {
    number: "02",
    title: "Expert Craftsmanship",
    description:
      "Our team of skilled professionals delivers precision workmanship with meticulous attention to detail.",
  },
  {
    number: "03",
    title: "Tailored Solutions",
    description:
      "Every project is custom-designed to match your vision, space requirements, and architectural style.",
  },
  {
    number: "04",
    title: "Timely Delivery",
    description:
      "We respect your timeline. Projects are completed on schedule without compromising on quality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-charcoal text-white relative overflow-hidden noise-bg">
      {/* Subtle accent gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-copper/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-copper" />
            <span className="text-xs tracking-[0.3em] text-copper uppercase font-medium">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
            Built on Trust,
            <br />
            <span className="text-copper italic font-serif font-normal">
              Defined by Quality
            </span>
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-10 bg-charcoal hover:bg-charcoal-light transition-colors duration-500 border-l border-white/5 first:border-l-0"
            >
              <span className="text-5xl font-display font-light text-copper/30 group-hover:text-copper transition-colors duration-300">
                {reason.number}
              </span>
              <h3 className="text-lg font-semibold mt-6 mb-3 tracking-wide text-white group-hover:text-gold transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
