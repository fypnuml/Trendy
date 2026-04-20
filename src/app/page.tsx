import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Import data methods
import {
  getSettings,
  getServices,
  getFeaturedProjects,
  getClients,
  getPartners,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Trendy | Premium Aluminum & Interior Solutions",
  description: "Transforming spaces with precision-engineered aluminum solutions and bespoke interior design.",
};

export default function Home() {
  const settings = getSettings();
  // Only slice a preview of services for the home page
  const servicesPreview = getServices().slice(0, 3); 
  const featuredProjects = getFeaturedProjects();
  const clients = getClients();
  const partners = getPartners();

  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="bg-charcoal min-h-screen">
        <Hero settings={settings} />
        
        {/* Quick Icon Categories */}
        <Categories />
        
        {/* Services Preview Section */}
        <section className="relative">
           <Services services={servicesPreview} />
           <div className="flex justify-center pb-24 mt-[-60px] relative z-10">
              <Link href="/services" className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-copper text-copper hover:bg-copper hover:text-white transition-all duration-300 rounded-sm text-[10px] tracking-[0.2em] uppercase font-semibold">
                View All Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
           </div>
        </section>

        {/* Featured Projects Section */}
        <section className="relative">
          <Projects projects={featuredProjects} />
          <div className="flex justify-center pb-24 mt-[-40px] relative z-10">
              <Link href="/projects" className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white hover:text-charcoal transition-all duration-300 rounded-sm text-[10px] tracking-[0.2em] uppercase font-semibold">
                View Full Portfolio
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
           </div>
        </section>

        {/* Clients Marquee */}
        <Clients clients={clients} partners={partners} />
        
        {/* Bottom CTA Block before Footer */}
        <section className="py-24 relative overflow-hidden bg-charcoal">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-copper/5 pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
             <span className="text-copper text-[10px] tracking-[0.3em] font-semibold uppercase block mb-4">Start Your Journey</span>
             <h2 className="text-3xl md:text-5xl font-serif font-semibold text-white tracking-tight mb-8">Ready to transform your space?</h2>
             <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-copper text-white hover:bg-copper-light transition-all duration-300 rounded-sm text-xs tracking-[0.2em] uppercase font-bold shadow-[0_0_20px_rgba(194,65,12,0.3)] hover:shadow-[0_0_30px_rgba(194,65,12,0.5)]">
                Contact Us Today
                <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </section>
      </main>
      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </>
  );
}
