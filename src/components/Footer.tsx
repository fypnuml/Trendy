"use client";

import { Instagram, Facebook, Phone } from "lucide-react";
import Link from "next/link";
import type { SiteSettings } from "@/lib/data";

interface FooterProps {
  settings: SiteSettings;
}

export default function Footer({ settings }: FooterProps) {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { label: "Aluminium Doors", href: "/doors" },
        { label: "Aluminium Windows", href: "/windows" },
        { label: "Kitchens", href: "/kitchens" },
        { label: "Wardrobes", href: "/wardrobes" },
        { label: "Shower Enclosures", href: "/catalog/shower" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-charcoal text-white relative border-t border-white/10">
      <div className="absolute inset-0 noise-bg opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Footer */}
        <div className="py-24 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5 xl:col-span-4">
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <span className="text-3xl font-serif font-semibold tracking-tight text-white hover:text-copper transition-colors">
                  {settings.companyName}
                </span>
                <p className="text-[9px] font-medium tracking-[0.25em] text-copper uppercase mt-2">
                  {settings.tagline}
                </p>
              </Link>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-8 pr-4">
              Leading retailer and wholesaler of premium aluminium products. Delivering full-gauge thickness, superior strength, and lasting quality for modern architecture.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-auto">
              {[
                { name: "Instagram", href: settings.socialMedia.instagram, icon: <Instagram className="w-4 h-4" /> },
                { name: "Facebook", href: settings.socialMedia.facebook, icon: <Facebook className="w-4 h-4" /> },
                { name: "WhatsApp", href: settings.socialMedia.whatsapp, icon: <Phone className="w-4 h-4" /> },
              ].filter(s => s.href).map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white/50 hover:text-white hover:bg-copper hover:border-copper transition-all duration-300 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-7 xl:col-span-8 flex flex-wrap sm:grid sm:grid-cols-3 gap-12 sm:gap-8 lg:ml-12">
            {footerLinks.map((group) => (
              <div key={group.title} className="w-full sm:w-auto">
                <h4 className="text-[10px] font-semibold tracking-[0.2em] text-white uppercase mb-8">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-copper transition-colors duration-300 inline-block focus:outline-none focus-visible:text-copper"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Contact Info */}
            <div className="w-full sm:w-auto">
               <h4 className="text-[10px] font-semibold tracking-[0.2em] text-white uppercase mb-8">
                  Contact
                </h4>
                <ul className="space-y-4">
                   <li>
                     <a href={`mailto:${settings.email}`} className="text-sm text-white/50 hover:text-copper transition-colors duration-300 break-words block">
                        {settings.email}
                      </a>
                   </li>
                   <li>
                     <a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} className="text-sm text-white/50 hover:text-copper transition-colors duration-300 block">
                        {settings.phone}
                      </a>
                   </li>
                   <li>
                     <div className="text-sm text-white/50 leading-relaxed max-w-[200px]">
                        {settings.address}
                      </div>
                   </li>
                </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/40 font-light">
            &copy; {new Date().getFullYear()} {settings.companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
             <Link href="/privacy" className="text-xs text-white/40 hover:text-white transition-colors font-light tracking-wide">Privacy Policy</Link>
             <Link href="/terms" className="text-xs text-white/40 hover:text-white transition-colors font-light tracking-wide">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
