import { Metadata } from "next";
import { getSettings } from "@/lib/data";
import { getProjectsFromDir } from "@/lib/assetsUtils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const projects = getProjectsFromDir();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Grace Aluminum Projects`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const settings = getSettings();
  const projects = getProjectsFromDir();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-charcoal min-h-screen flex flex-col">
      <Navbar />
      <div className="h-24 bg-charcoal w-full" />
      
      <div className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Back Button */}
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/40 hover:text-copper transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-xs uppercase tracking-widest font-semibold">Back to Portfolio</span>
          </Link>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left: Content */}
            <div className="lg:col-span-5">
              <span className="text-copper text-[10px] tracking-[0.4em] font-bold uppercase block mb-4">Case Study</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-white/60 text-lg leading-relaxed font-light mb-12">
                {project.description}
              </p>

              {/* Project Meta */}
              <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-widest font-bold">
                    <User className="w-3 h-3" />
                    Client
                  </div>
                  <p className="text-white font-medium">{project.client}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-widest font-bold">
                    <Calendar className="w-3 h-3" />
                    Year
                  </div>
                  <p className="text-white font-medium">{project.year}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-widest font-bold">
                    <Tag className="w-3 h-3" />
                    Category
                  </div>
                  <p className="text-white font-medium">{project.category}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16">
                 <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-copper text-white hover:bg-copper-light transition-all rounded-sm text-[11px] font-bold uppercase tracking-widest">
                    Inquire About Similar Project
                 </Link>
              </div>
            </div>

            {/* Right: Large Image Gallery */}
            <div className="lg:col-span-7">
              <div className="space-y-8">
                {project.images.map((img, idx) => (
                  <div key={idx} className="relative aspect-[16/10] rounded-sm overflow-hidden border border-white/5 shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={img} 
                      alt={`${project.title} detail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer settings={settings} />
      <WhatsAppButton phoneNumber={settings.whatsappNumber} />
    </main>
  );
}
