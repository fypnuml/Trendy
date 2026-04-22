import { Metadata } from "next";
import { getSettings, getClients, getPartners } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle2, Building2, School2, Hospital, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Clients & Strategic Partners | Grace Aluminium",
  description: "Explore our prestigious portfolio of clients and strategic partners. Trusted by leading housing societies and commercial groups in Pakistan.",
};

export default function ClientsPage() {
  const settings = getSettings();
  const clients = getClients();
  const partners = getPartners();

  // Categorize clients for professional layout
  const categories = [
    {
      title: "Real Estate & Housing",
      icon: <Building2 className="w-6 h-6 text-copper" />,
      clients: clients.filter(c => 
        c.name.includes("DHA") || c.name.includes("City") || c.name.includes("Gardens") || 
        c.name.includes("Orchard") || c.name.includes("Homes") || c.name.includes("Square") ||
        c.name.includes("Cottages")
      )
    },
    {
      title: "Healthcare",
      icon: <Hospital className="w-6 h-6 text-copper" />,
      clients: clients.filter(c => c.name.includes("Hospital"))
    },
    {
      title: "Commercial & Regional",
      icon: <Building className="w-6 h-6 text-copper" />,
      clients: clients.filter(c => 
        !c.name.includes("Hospital") && !c.name.includes("DHA") && !c.name.includes("City") && 
        !c.name.includes("Gardens") && !c.name.includes("Orchard") && !c.name.includes("University") &&
        !c.name.includes("Homes") && !c.name.includes("Square") && !c.name.includes("Cottages")
      )
    },
    {
        title: "Educational Institutions",
        icon: <School2 className="w-6 h-6 text-copper" />,
        clients: clients.filter(c => c.name.includes("University"))
      },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* 1. Hero Showcase Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16 max-w-3xl">
             <span className="text-copper text-[10px] tracking-[0.4em] font-black uppercase mb-4 block">Our Portfolio</span>
             <h1 className="text-4xl md:text-6xl font-display font-black text-charcoal tracking-tight mb-8">
               Proven Excellence <br/>
               <span className="text-copper">Trusted by Industry Leaders</span>
             </h1>
             <p className="text-lg text-charcoal/60 font-light leading-relaxed">
               Grace Aluminum has a long-standing history of delivering premium solutions to some of the most prestigious housing societies, commercial groups, and public institutions in Pakistan.
             </p>
          </div>

          {/* Group Showcase Banner */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/assets/clients/our_clients.jpeg" 
              alt="Grace Aluminum Valued Clients" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* 2. Strategic Partners Grid */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
                <span className="text-copper text-[10px] tracking-[0.4em] font-black uppercase mb-4 block">Collaboration</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal">Strategic Partners</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {partners.map((partner) => (
                    <div key={partner.id} className="group p-8 border border-slate-100 rounded-xl hover:border-copper/30 transition-all duration-300 hover:shadow-xl hover:shadow-copper/5 flex flex-col items-center">
                        {partner.logo ? (
                            <img src={partner.logo} alt={partner.name} className="h-16 w-auto object-contain mb-6 transition-transform duration-500 group-hover:scale-110" />
                        ) : (
                            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6">
                                <Building2 className="w-8 h-8 text-copper/40" />
                            </div>
                        )}
                        <h3 className="text-sm font-display font-bold text-charcoal text-center tracking-wide uppercase transition-colors group-hover:text-copper">
                            {partner.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 3. Detailed Client Categories */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12">
                {categories.map((cat, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 h-full">
                        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-50">
                            {cat.icon}
                            <h3 className="text-xl font-display font-bold text-charcoal uppercase tracking-wider">{cat.title}</h3>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {cat.clients.map((client) => (
                                <li key={client.id} className="flex items-start gap-3 group">
                                    <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex flex-col">
                                        {client.logo && (
                                            <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain mb-2 filter grayscale group-hover:grayscale-0 transition-all" />
                                        )}
                                        <span className="text-sm text-charcoal/70 group-hover:text-charcoal transition-colors font-medium">
                                            {client.name}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
