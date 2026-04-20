import { Metadata } from "next";
import { getSettings, getProjects } from "@/lib/data";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Featured Projects | Trendy Aluminum & Interiors",
  description: "Browse our portfolio of high-end residential and commercial projects featuring precision aluminum work and luxury interiors.",
};

export default function ProjectsPage() {
  const settings = getSettings();
  const projectsData = getProjects();

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      
      <div className="h-24 bg-charcoal w-full" />
      
      <div className="flex-grow flex flex-col py-12">
        <Projects projects={projectsData} />
      </div>

      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
