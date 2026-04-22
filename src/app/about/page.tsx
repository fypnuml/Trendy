import { Metadata } from "next";
import { getSettings } from "@/lib/data";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "About Us | Grace Aluminum",
  description: "Learn more about Grace Aluminum, our expertise in premium aluminum solutions, and our commitment to architectural excellence.",
};

export default function AboutPage() {
  const settings = getSettings();

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      
      {/* Spacer for fixed navbar since this page doesn't have a full screen Hero */}
      <div className="h-24 bg-charcoal w-full" />
      
      <div className="flex-grow flex flex-col justify-center py-12">
         <About settings={settings} />
         
         {/* CEO Message Section */}
         <section className="py-24 bg-surface-dark relative">
           <div className="max-w-7xl mx-auto px-6 md:px-12">
             <div className="bg-charcoal rounded-sm overflow-hidden shadow-2xl relative border border-white/5">
                <div className="grid lg:grid-cols-2 items-stretch">
                   {/* CEO Image */}
                   <div className="relative min-h-[400px] lg:min-h-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src="/assets/ceo/ceo.jpeg" 
                        alt="Waqas Mirza, CEO Grace Aluminum" 
                        className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 via-transparent to-transparent" />
                   </div>

                   {/* CEO Text */}
                   <div className="p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                         <svg width="120" height="120" viewBox="0 0 24 24" fill="white"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                      </div>

                      <span className="text-copper text-[10px] tracking-[0.4em] font-bold uppercase block mb-4">Leadership</span>
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">CEO&apos;s Message</h2>
                      
                      <div className="space-y-6">
                        <p className="text-white/80 font-serif italic text-lg leading-relaxed">
                          &quot;Welcome to Grace Aluminum. At Grace Aluminum, quality is not just a standard—it is our commitment.&quot;
                        </p>
                        
                        <div className="space-y-4 text-white/60 font-light text-base leading-relaxed">
                          <p>
                            As a wholesale supplier of aluminium sections in all gauges and profiles, we proudly serve bulk buyers and retailers with the same dedication and reliability.
                          </p>
                          <p>
                            Our quality assurance processes ensure that every product meets industry standards and customer expectations. From sourcing to delivery, we maintain strict control to guarantee durability, precision, and consistent performance.
                          </p>
                          <p>
                            With a strong nationwide delivery network, we are committed to supporting our partners—retailers, fabricators, and businesses—through timely supply and dependable service across Pakistan.
                          </p>
                        </div>
                      </div>

                      <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-xl font-display font-bold text-white">Waqas Mirza</p>
                        <p className="text-copper text-[10px] tracking-widest uppercase font-medium mt-1">CEO, Grace Aluminum</p>
                      </div>
                   </div>
                </div>
             </div>
           </div>
         </section>
      </div>

      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
