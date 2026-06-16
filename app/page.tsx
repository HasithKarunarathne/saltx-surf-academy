import Image from "next/image";
import Link from "next/link";
import { buildWhatsAppLink } from "@/utils/whatsapp";

export default function Home() {
  // Featured packages for the home page teaser
  const featuredPackages = [
    {
      title: "Beginner Foundation",
      description: "Master ocean safety, paddling basics, and your first clean pop-up.",
      price: "Rs. 5,000",
      href: "/rates",
    },
    {
      title: "Advanced Coaching",
      description: "Precision technique, video breakdown, and advanced maneuvers.",
      price: "Rs. 15,000",
      href: "/rates",
    },
    {
      title: "Surf & Stay Retreat",
      description: "Premium accommodation combined with daily guided surf coaching.",
      price: "Rs. 45,000+",
      href: "/rates",
    },
  ];

  return (
    <main className="relative z-10 bg-black">
      
      {/* 
        WORLD-CLASS HERO SECTION 
        Edge-to-Edge / Cinematic Layout
      */}
      <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
        
        {/* Absolute Full-Bleed Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-surf.jpg" 
            alt="Saltx Surf Academy" 
            fill 
            className="object-cover grayscale transition-transform duration-[15000ms] ease-out hover:scale-105" 
            priority 
          />
          {/* Complex Overlays for perfect text readability */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_120%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mt-16 flex w-full max-w-7xl flex-col items-center px-5 text-center sm:px-6 lg:px-12">
          
          <div className="mb-8 flex items-center gap-4">
            <span className="h-[1px] w-8 bg-[#8a7d5b] md:w-12"></span>
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-[#8a7d5b] md:text-xs">
              Pacific Cove, CA
            </span>
            <span className="h-[1px] w-8 bg-[#8a7d5b] md:w-12"></span>
          </div>
          
          <h1 
            style={{ fontFamily: "var(--font-syne)" }} 
            className="mb-8 text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[8rem]"
          >
            Chase The <br /> 
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.9)" }}>
              Swell.
            </span>
          </h1>
          
          <p className="mx-auto mb-12 max-w-lg text-sm font-light leading-relaxed text-zinc-300 md:max-w-2xl md:text-base">
            An immersive surf academy built on precision technique and an ocean-first mindset. Redefining your ride.
          </p>
          
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Link 
              href="/rates" 
              className="group flex w-full items-center justify-center bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-[#8a7d5b] hover:text-white sm:w-auto"
            >
              Explore Rates
            </Link>
            <a 
              href={buildWhatsAppLink("General Inquiry", "N/A")} 
              className="flex w-full items-center justify-center border border-white/30 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors hover:border-[#8a7d5b] hover:bg-[#8a7d5b] sm:w-auto"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-3">
          <span className="text-[0.5rem] uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-zinc-500 to-transparent"></div>
        </div>

      </section>
{/* PHILOSOPHY SECTION */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-12">
        {/* Section Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-4 text-[0.65rem] uppercase tracking-[0.3em] text-[#8a7d5b]">
            Our Core Approach
          </span>
          <h2 style={{ fontFamily: "var(--font-syne)" }} className="text-3xl font-bold text-white md:text-5xl">
            The Philosophy.
          </h2>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {[
            { 
              title: "Technique First", 
              desc: "We break down the mechanics of surfing. No bad habits, just clean, efficient movements." 
            },
            { 
              title: "Ocean Intelligence", 
              desc: "Learn to read the lineup, understand swells, and position yourself perfectly every time." 
            },
            { 
              title: "Measured Progress", 
              desc: "Structured feedback loops and expert guidance ensure you improve with every session." 
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden border border-white/5 bg-[#050505] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#8a7d5b]/50 hover:bg-[#0a0a0a] md:p-10"
            >
              {/* Large Watermark Number in Background */}
              <div 
                className="absolute -right-4 -top-8 select-none text-[8rem] font-bold text-white/[0.02] transition-colors duration-500 group-hover:text-[#8a7d5b]/[0.05]" 
                style={{ fontFamily: "var(--font-syne)" }}
              >
                0{i + 1}
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-4">
                  <span className="text-sm font-bold text-[#8a7d5b]">0{i + 1}</span>
                  <div className="h-px w-12 bg-white/10 transition-colors duration-500 group-hover:bg-[#8a7d5b]/50"></div>
                </div>
                
                <h3 style={{ fontFamily: "var(--font-syne)" }} className="mb-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

     {/* FEATURED PACKAGES TEASER */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[#8a7d5b]">
              Curated Experiences
            </p>
            <h2 style={{ fontFamily: "var(--font-syne)" }} className="text-3xl font-bold text-white md:text-5xl">
              Featured Pathways.
            </h2>
          </div>
          <Link 
            href="/rates" 
            className="group flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-white transition-colors hover:text-[#8a7d5b]"
          >
            View All Packages 
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#8a7d5b] group-hover:bg-[#8a7d5b]/10">
              <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredPackages.map((pkg) => (
            <div 
              key={pkg.title} 
              className="group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-[#050505] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#8a7d5b]/40 hover:shadow-[0_20px_40px_-15px_rgba(138,125,91,0.15)]"
            >
              {/* Subtle Top Glow on Hover */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#8a7d5b] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 style={{ fontFamily: "var(--font-syne)" }} className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#8a7d5b]">
                  {pkg.title}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-zinc-400">
                  {pkg.description}
                </p>
                <div className="mb-10 font-mono text-lg font-medium tracking-wide text-white">
                  {pkg.price}
                </div>
              </div>
              
              <Link 
                href={pkg.href} 
                className="relative z-10 flex w-full items-center justify-between border border-white/20 bg-transparent px-6 py-4 text-[0.65rem] uppercase tracking-[0.2em] text-white transition-all duration-300 group-hover:border-[#8a7d5b] group-hover:bg-[#8a7d5b]"
              >
                <span>View Details</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>



 {/* GALLERY TEASER (PREMIUM REDESIGN) */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-6 lg:px-12">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] transition-all duration-700 hover:border-[#8a7d5b]/30">

          {/* Ambient Glows (Lighting) */}
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#8a7d5b]/10 blur-[100px] transition-opacity duration-700 group-hover:bg-[#8a7d5b]/20" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#8a7d5b]/10 blur-[100px] transition-opacity duration-700 group-hover:bg-[#8a7d5b]/20" />

          {/* Subtle Background Pattern / Noise Texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>

          {/* Abstract Grid Graphic */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)),linear-gradient(45deg,rgba(255,255,255,0.02)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02))] bg-[length:40px_40px] bg-[position:0_0,20px_20px] opacity-20 transition-transform duration-1000 group-hover:scale-105" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center md:px-12 md:py-32">
            
            <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[0.6rem] uppercase tracking-[0.3em] text-[#8a7d5b] backdrop-blur-md">
              Visual Archive
            </span>

            <h2 style={{ fontFamily: "var(--font-syne)" }} className="mb-6 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
              The Saltx Standard.
            </h2>

            <p className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
              Step into our visual archive. Explore our coaching sessions, equipment, and the vibrant surf community we are building at Pacific Cove.
            </p>

            {/* Sweep Fill Button */}
            <Link
              href="/gallery"
              className="group/btn relative overflow-hidden bg-white px-8 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black transition-all hover:text-white"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#8a7d5b] transition-transform duration-500 ease-out group-hover/btn:translate-x-0" />
              <span className="relative z-10 flex items-center gap-3">
                Explore Gallery
                <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}