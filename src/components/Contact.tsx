"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import type { SiteSettings } from "@/lib/data";

interface ContactProps {
  settings: SiteSettings;
}

export default function Contact({ settings }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Temporary simulated API call (since we aren't using DB yet)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-surface relative">
      <div className="absolute inset-0 noise-bg" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-copper" />
              <span className="text-xs tracking-[0.3em] text-copper uppercase font-medium">
                Get in Touch
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 text-charcoal">
              Let&apos;s Build
              <br />
              <span className="text-copper italic font-serif font-normal">
                Something Great
              </span>
            </h2>

            <p className="text-charcoal-lighter leading-relaxed mb-12 max-w-md">
              Ready to transform your space? Get in touch with our team to
              discuss your project requirements and get a free consultation.
            </p>

            {/* Contact Info Array */}
            <div className="space-y-8">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", text: settings.email },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", text: settings.phone },
                { icon: <MapPin className="w-5 h-5" />, label: "Location", text: settings.address },
              ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-white border border-border shadow-sm rounded-sm text-copper group-hover:bg-copper group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-charcoal-lighter uppercase tracking-[0.15em] font-medium mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-charcoal font-semibold">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 mt-12 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold tracking-wide rounded-sm hover:bg-[#20bd5a] transition-colors duration-300 shadow-lg shadow-[#25D366]/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-sm shadow-xl shadow-charcoal/5 border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-[10px] font-semibold tracking-[0.15em] text-charcoal uppercase mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-copper text-charcoal text-base outline-none transition-colors duration-300 placeholder:text-charcoal-lighter/30"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div>
                  <label htmlFor="email" className="block text-[10px] font-semibold tracking-[0.15em] text-charcoal uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-copper text-charcoal text-base outline-none transition-colors duration-300 placeholder:text-charcoal-lighter/30"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] font-semibold tracking-[0.15em] text-charcoal uppercase mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-copper text-charcoal text-base outline-none transition-colors duration-300 placeholder:text-charcoal-lighter/30"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-semibold tracking-[0.15em] text-charcoal uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-copper text-charcoal text-base outline-none transition-colors duration-300 resize-none placeholder:text-charcoal-lighter/30"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full flex items-center justify-center gap-3 py-4 bg-charcoal text-white text-sm font-semibold tracking-[0.1em] uppercase hover:bg-copper transition-all duration-500 rounded-sm disabled:opacity-60 disabled:hover:bg-charcoal"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
