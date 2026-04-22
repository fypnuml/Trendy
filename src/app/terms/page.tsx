import { Metadata } from "next";
import { getSettings } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Terms of Service | Grace Aluminum",
  description: "By using the Grace Aluminum website, you agree to our Terms of Service regarding usage, intellectual property, and limitations connecting to our premium services.",
};

export default function TermsPage() {
  const settings = getSettings();

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      <div className="h-24 bg-charcoal w-full" />
      
      <div className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-16 w-full">
         <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight mb-8">Terms of Service</h1>
         <div className="prose prose-invert prose-copper max-w-none">
            <p className="text-white/70">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-serif font-semibold text-white mt-12 mb-4">1. Agreement to Terms</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              By accessing our website, you signify your acceptance of these Terms of Service. If you do not agree to these terms, please do not use our site. These terms apply to all visitors, users, and clients.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-white mt-12 mb-4">2. Intellectual Property</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              All content on this site, including but not limited to the premium architectural photography, custom UI designs, graphics, and text, is the exclusive property of Grace Aluminum or its content suppliers and protected by international copyright laws.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-white mt-12 mb-4">3. Quotations & Service Provisions</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Any quotes or estimates generated via forms on this website are non-binding placeholders. Final architectural plans, aluminum implementations, and interior work contracts are only finalized upon signed physical or digitally-verified corporate agreements.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-white mt-12 mb-4">4. Limitation of Liability</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Grace Aluminum shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website. The materials on this website are provided &quot;as is&quot; without warranties of any kind.
            </p>
         </div>
      </div>

      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
