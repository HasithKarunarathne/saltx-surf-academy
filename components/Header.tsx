"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildWhatsAppLink } from "@/utils/whatsapp";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll event listener for dynamic glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Rates", href: "/rates" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "border-b border-white/5 bg-[#050505]/90 py-3 shadow-2xl backdrop-blur-xl" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 md:px-6 lg:px-12">
        
        {/* Logo */}
        <Link href="/" className="group relative z-50 flex items-center gap-3 md:gap-4">
          <Image
            src="/logosurf.png"
            alt="Saltx Logo"
            width={36}
            height={36}
            className="h-7 w-7 object-contain opacity-90 transition-transform duration-500 group-hover:scale-110 md:h-9 md:w-9 grayscale"
            priority
          />
          <span style={{ fontFamily: "var(--font-syne)" }} className="text-lg font-bold tracking-[0.3em] text-white md:text-xl">
            SALTX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative text-[0.65rem] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive ? "font-bold text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
                {/* Minimalist animated underline for active/hover states */}
                <span 
                  className={`absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 bg-[#8a7d5b] transition-all duration-300 ease-out ${
                    isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <a
          href={buildWhatsAppLink("Intro Session", "$120")}
          className="hidden items-center justify-center border border-white/20 bg-transparent px-6 py-3 text-[0.65rem] uppercase tracking-[0.2em] text-white transition-all hover:border-[#8a7d5b] hover:bg-[#8a7d5b] md:inline-flex"
        >
          Book Now
        </a>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="relative z-50 p-2 text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`absolute left-0 top-0 -z-10 flex w-full flex-col items-center justify-center bg-[#050505] transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen 
            ? "h-screen opacity-100" 
            : "h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm uppercase tracking-[0.3em] transition-colors duration-300 ${
                  isActive ? "font-bold text-[#8a7d5b]" : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="my-4 h-px w-12 bg-white/10" />
          <a
            href={buildWhatsAppLink("Intro Session", "$120")}
            onClick={() => setIsMobileMenuOpen(false)}
            className="border border-[#8a7d5b] bg-[#8a7d5b]/10 px-8 py-4 text-xs uppercase tracking-[0.2em] text-[#8a7d5b] transition-all hover:bg-[#8a7d5b] hover:text-white"
          >
            Book Session Now
          </a>
        </nav>
      </div>
    </header>
  );
}