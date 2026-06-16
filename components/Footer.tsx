import Image from "next/image";
import Link from "next/link";
import { buildWhatsAppLink } from "@/utils/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050505] pt-16 sm:pt-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-8">
          
          {/* Brand Section */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-6 flex items-center gap-3">
              <Image 
                src="/saltx.png" 
                alt="Saltx Surf Academy" 
                width={32} 
                height={32} 
                className="h-8 w-8 grayscale" 
              />
              <span style={{ fontFamily: "var(--font-syne)" }} className="text-lg font-bold tracking-[0.3em] text-white">
                SALTX
              </span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-zinc-400">
              Elevated surf coaching built on precision technique and an ocean-first mindset.
            </p>
          </div>

          {/* Quick Links Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 style={{ fontFamily: "var(--font-syne)" }} className="mb-6 text-sm font-bold tracking-widest text-white">
              NAVIGATION
            </h4>
            <nav className="flex flex-col gap-4 text-center md:text-left">
              {[
                { label: 'Home', href: '/' },
                { label: 'Rates & Packages', href: '/rates' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact', href: '/contact' }
              ].map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  className="text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-[#8a7d5b]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h4 style={{ fontFamily: "var(--font-syne)" }} className="mb-6 text-sm font-bold tracking-widest text-white">
              CONNECT
            </h4>
            <div className="flex flex-col gap-4 text-center text-xs text-zinc-500 md:text-left">
              <p className="uppercase tracking-[0.2em]">Pacific Cove, CA</p>
              <a 
                href="mailto:hello@saltxsurf.com" 
                className="uppercase tracking-[0.2em] transition-colors hover:text-[#8a7d5b]"
              >
                hello@saltxsurf.com
              </a>
              <a 
                href={buildWhatsAppLink("Website Footer Inquiry", "N/A")} 
                className="uppercase tracking-[0.2em] transition-colors hover:text-[#8a7d5b]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 py-8 text-[0.6rem] uppercase tracking-[0.2em] text-zinc-600 md:mt-24 md:flex-row">
          <p>© {currentYear} Saltx Surf Academy. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">
            Engineered by <span className="font-semibold text-zinc-400">Nexalyth Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}