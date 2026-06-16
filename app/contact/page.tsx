import { buildWhatsAppLink } from "@/utils/whatsapp";

export default function ContactPage() {
  return (
    <main className="relative z-10 min-h-screen bg-black pb-24 pt-32 md:pt-40">
      
      {/* Editorial Page Header */}
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-[1px] w-8 bg-[#8a7d5b]"></span>
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-[#8a7d5b]">
            Get In Touch
          </span>
          <span className="h-[1px] w-8 bg-[#8a7d5b]"></span>
        </div>
        <h1 
          style={{ fontFamily: "var(--font-syne)" }} 
          className="mb-6 text-4xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Let's Talk <br className="md:hidden" /> Progression.
        </h1>
        <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-zinc-400 md:text-base">
          Whether you are looking to book a private session, inquire about custom group rates, or simply need advice on board selection, we are here to help.
        </p>
      </div>

      {/* Contact Bento Grid */}
      <div className="mx-auto mt-20 max-w-5xl px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          
          {/* Primary Action Card: WhatsApp (Spans 2 columns on mobile, 1 on desktop) */}
          <div className="group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-[#050505] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#8a7d5b]/40 md:col-span-2 md:p-12 lg:col-span-1">
            {/* Ambient Glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#8a7d5b]/10 blur-[80px] transition-opacity duration-700 group-hover:bg-[#8a7d5b]/20" />
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>

            <div className="relative z-10 mb-12">
              <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#8a7d5b] backdrop-blur-md transition-colors duration-500 group-hover:border-[#8a7d5b]/50 group-hover:bg-[#8a7d5b]/10">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              <h3 style={{ fontFamily: "var(--font-syne)" }} className="mb-3 text-2xl font-bold text-white md:text-3xl">
                Direct Inquiry
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                The fastest way to reach us. Message our team directly on WhatsApp for bookings, conditions updates, or gear advice.
              </p>
            </div>

            {/* Sweep Fill Button */}
            <a
              href={buildWhatsAppLink("General Inquiry", "N/A")}
              className="group/btn relative inline-flex w-full overflow-hidden bg-white px-8 py-5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black transition-all hover:text-white sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#8a7d5b] transition-transform duration-500 ease-out group-hover/btn:translate-x-0" />
              <span className="relative z-10 flex w-full items-center justify-between gap-4 sm:justify-start">
                Chat on WhatsApp
                <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-1 lg:gap-6">
            {/* Secondary Card: Location */}
            <div className="group relative flex flex-1 flex-col justify-center overflow-hidden border border-white/10 bg-[#050505] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#8a7d5b]/40">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#8a7d5b] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="mb-2 text-[0.6rem] uppercase tracking-[0.3em] text-zinc-500">
                Location
              </span>
              <h4 style={{ fontFamily: "var(--font-syne)" }} className="mb-2 text-xl font-bold text-white">
                Pacific Cove, CA
              </h4>
              <p className="text-xs text-zinc-400">
                Operating primarily at the main point break. Look for the Saltx black canopy on the sand.
              </p>
            </div>

            {/* Grid for Email and Hours */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
              {/* Email */}
              <div className="group relative flex flex-col justify-center overflow-hidden border border-white/10 bg-[#050505] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#8a7d5b]/40">
                <span className="mb-2 text-[0.6rem] uppercase tracking-[0.3em] text-zinc-500">
                  Email
                </span>
                <a href="mailto:hello@saltxsurf.com" className="text-sm font-medium text-white transition-colors hover:text-[#8a7d5b]">
                  hello@saltxsurf.com
                </a>
              </div>

              {/* Hours */}
              <div className="group relative flex flex-col justify-center overflow-hidden border border-white/10 bg-[#050505] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#8a7d5b]/40">
                <span className="mb-2 text-[0.6rem] uppercase tracking-[0.3em] text-zinc-500">
                  Hours
                </span>
                <span className="text-sm font-medium text-white">
                  Sunrise – Sunset
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative / Cinematic Bottom Section */}
      <div className="mx-auto mt-24 max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]">
           {/* Fallback pattern until image is added */}
           <div 
            className="absolute inset-0 opacity-20" 
            style={{ 
              backgroundImage: "linear-gradient(45deg, #050505 25%, transparent 25%, transparent 75%, #050505 75%, #050505), linear-gradient(45deg, #050505 25%, transparent 25%, transparent 75%, #050505 75%, #050505)", 
              backgroundSize: "20px 20px", 
              backgroundPosition: "0 0, 10px 10px" 
            }} 
          />
          <div className="absolute inset-0 bg-black/60" />
          <h2 style={{ fontFamily: "var(--font-syne)" }} className="relative z-10 text-center text-3xl font-bold uppercase tracking-widest text-white/20 md:text-5xl">
            See You In The Water.
          </h2>
        </div>
      </div>
      
    </main>
  );
}