import { Metadata } from "next";
import { getSettings } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Privacy Policy | Grace Aluminum",
  description: "Read our privacy policy to understand how Grace Aluminum protects your personal data and ensures secure interactions on our platform.",
};

export default function PrivacyPage() {
  const settings = getSettings();

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      <div className="h-24 bg-charcoal w-full" />
      
      <div className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-16 w-full">
         <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight mb-8">Privacy Policy</h1>
         <div className="prose prose-invert prose-copper max-w-none">
            <p className="text-white/70">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-serif font-semibold text-white mt-12 mb-4">1. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              When you use the Grace Aluminum website, we may collect personal information such as your name, email address, phone number, and any details you provide via our contact forms or direct communications. We also automatically collect non-identifiable usage data through cookies and analytics tools to improve our website experience.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-white mt-12 mb-4">2. How We Use Your Information</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              The information we collect is strictly used to:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2 mb-6">
              <li>Respond to your inquiries and provide accurate quotes for our architectural and interior design services.</li>
              <li>Improve our website&apos;s UI/UX by analyzing aggregated traffic patterns.</li>
              <li>Send you updates regarding your project or inquiries.</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-white mt-12 mb-4">3. Data Security & Sharing</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We do not sell, trade, or rent your personal identification information to third parties. Our database and systems are secured using industry-standard cryptography to prevent unauthorized access.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-white mt-12 mb-4">4. Contact Us</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, please contact us at {settings.email} or call us at {settings.phone}.
            </p>
         </div>
      </div>

      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
