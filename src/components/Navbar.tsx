"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Branch", href: "/branches" },
  { label: "Clients", href: "/clients" },
  { label: "About", href: "/about" },
];

const catalogLinks = [
  { label: "Doors", href: "/doors" },
  { label: "Windows", href: "/windows" },
  { label: "Kitchens", href: "/kitchens" },
  { label: "Wardrobes", href: "/wardrobes" },
  { label: "Wall Cladding", href: "/cladding" },
  { label: "Skylights", href: "/skylights" },
  { label: "Stair Railings", href: "/railings" },
  { label: "Shower", href: "/catalog/shower" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Determine if navbar should look "solid" (dark bg) or "transparent"
  const isSolid = isScrolled || !isHomePage;

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isSolid
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg shadow-charcoal/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
              onClick={handleLogoClick}
            >
              <span
                className={`text-2xl font-serif font-semibold tracking-tight transition-colors duration-300 ${
                  isSolid ? "text-white" : "text-charcoal"
                }`}
              >
                Grace Aluminium
              </span>
              <div className={`hidden sm:flex flex-col transition-colors duration-300`}>
                <span className="text-[9px] tracking-[0.25em] uppercase font-medium text-copper">
                  Premium & Industrial Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={link.href === "/" ? handleLogoClick : undefined}
                  className={`relative px-3 py-2 text-[12px] tracking-[0.05em] uppercase transition-colors duration-300 ${
                    isSolid
                      ? pathname === link.href
                        ? "text-copper"
                        : "text-white/70 hover:text-white"
                      : pathname === link.href
                        ? "text-copper font-medium"
                        : "text-charcoal/70 hover:text-charcoal font-medium"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-copper rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}

              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                   className={`flex items-center gap-1 px-3 py-2 text-[12px] tracking-[0.05em] uppercase transition-colors duration-300 ${
                    isSolid
                      ? catalogLinks.some(l => pathname === l.href)
                        ? "text-copper"
                        : "text-white/70 hover:text-white"
                      : catalogLinks.some(l => pathname === l.href)
                        ? "text-copper font-medium"
                        : "text-charcoal/70 hover:text-charcoal font-medium"
                  }`}
                >
                  Catalog
                  <ChevronDown className="w-3 h-3" />
                  {catalogLinks.some(l => pathname === l.href) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-copper rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-sm overflow-hidden py-2 border border-border"
                    >
                      {catalogLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block px-6 py-2.5 text-xs uppercase tracking-wider text-charcoal/80 hover:text-copper hover:bg-beige transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className={`hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-[11px] tracking-[0.15em] uppercase font-medium transition-all duration-300 rounded-sm group ${
                isSolid
                  ? pathname === "/contact"
                     ? "bg-white text-charcoal hover:bg-beige"
                     : "bg-copper text-white hover:bg-copper-light"
                  : "bg-charcoal text-white hover:bg-copper"
              }`}
            >
              Get in Touch
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 z-50 relative"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className={`w-6 h-6 ${isSolid ? "text-white" : "text-charcoal"}`} />
               )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-charcoal md:hidden overflow-y-auto"
          >
            <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none" />
            
            <div className="flex flex-col min-h-screen relative z-10 px-8 py-12">
              {/* Menu Header */}
              <div className="flex items-center justify-between mb-16">
                <span className="text-xl font-serif font-semibold text-white">Grace Aluminium</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-6 mb-12">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-3xl font-serif tracking-tight transition-colors duration-300 ${
                        pathname === link.href ? "text-copper font-semibold" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="w-full h-px bg-white/10 mb-10" />

              {/* Catalog Links */}
              <div className="mb-12">
                <span className="text-[10px] tracking-[0.4em] uppercase text-copper font-bold mb-8 block">Product Catalog</span>
                <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                  {catalogLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.03 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-xs tracking-[0.1em] uppercase transition-colors duration-300 ${
                          pathname === link.href ? "text-white font-bold" : "text-white/40 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-auto pt-8 pb-12"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-5 text-xs tracking-[0.2em] uppercase font-bold bg-copper text-white hover:bg-copper-light transition-all rounded-sm shadow-xl shadow-copper/10"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
