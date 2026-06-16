import Link from "next/link";
import { buildWhatsAppLink } from "@/utils/whatsapp";

export default function GalleryPage() {
  // Editorial Gallery Data with explicit grid sizing
  const galleryItems = [
    { 
      title: "Glass morning peel", 
      category: "Waves", 
      size: "md:col-span-2 md:row-span-2",
      height: "min-h-[400px] md:min-h-[600px]"
    },
    { 
      title: "Coaching on the sand", 
      category: "Training", 
      size: "md:col-span-1 md:row-span-1",
      height: "min-h-[300px]"
    },
    { 
      title: "Olive wetsuit detail", 
      category: "Gear", 
      size: "md:col-span-1 md:row-span-1",
      height: "min-h-[300px]"
    },
    { 
      title: "Wave timing drills", 
      category: "Action", 
      size: "md:col-span-1 md:row-span-2",
      height: "min-h-[400px] md:min-h-[600px]"
    },
    { 
      title: "Pack-ready boards", 
      category: "Equipment", 
      size: "md:col-span-2 md:row-span-1",
      height: "min-h-[300px]"
    },
    { 
      title: "Sunset paddle-out", 
      category: "Lifestyle", 
      size: "md:col-span-3 md:row-span-1",
      height: "min-h-[400px] md:min-h-[500px]"
    },
  ];

  return (
    <main className="relative z-10 min-h-screen bg-black pb-24 pt-32 md:pt-40">
      
      {/* Editorial Page Header */}
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-[1px] w-8 bg-[#8a7d5b]"></span>
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-[#8a7d5b]">
            Visual Archive
          </span>
          <span className="h-[1px] w-8 bg-[#8a7d5b]"></span>
        </div>
        <h1 
          style={{ fontFamily: "var(--font-syne)" }} 
          className="mb-6 text-4xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          The Saltx <br className="md:hidden" /> Gallery.
        </h1>
        <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-zinc-400 md:text-base">
          A curated look at our sessions, equipment, and the ocean-first mindset that defines our approach to the craft. Step into the lineup.
        </p>
      </div>

      {/* Asymmetrical Editorial Grid */}
      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-min lg:gap-6">
          {galleryItems.map((item, i) => (
            <div 
              key={i} 
              className={`group relative overflow-hidden bg-[#050505] transition-all duration-700 hover:border-[#8a7d5b]/30 ${item.size} ${item.height}`}
            >
              {/* Premium Fallback Graphic (Until real images are added) */}
              <div 
                className="absolute inset-0 opacity-30 transition-transform duration-1000 ease-out group-hover:scale-105" 
                style={{ 
                  backgroundImage: "linear-gradient(45deg, #111 25%, transparent 25%, transparent 75%, #111 75%, #111), linear-gradient(45deg, #111 25%, transparent 25%, transparent 75%, #111 75%, #111)", 
                  backgroundSize: "24px 24px", 
                  backgroundPosition: "0 0, 12px 12px" 
                }} 
              />
              
              {/* Subtle Noise Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
              
              {/* Dark vignette overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
              
              {/* Animated Accent Glow on Hover */}
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#8a7d5b]/20 blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                
                {/* Top Labels */}
                <div className="flex w-full items-start justify-between">
                  <span className="translate-y-4 rounded-none border border-white/10 bg-white/5 px-4 py-1.5 text-[0.55rem] uppercase tracking-[0.25em] text-zinc-300 opacity-0 backdrop-blur-md transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    {item.category}
                  </span>
                  <span className="text-[0.6rem] font-bold text-[#8a7d5b]">0{i + 1}</span>
                </div>
                
                {/* Bottom Title */}
                <div className="translate-y-4 transition-transform duration-500 ease-out group-hover:translate-y-0">
                  <div className="mb-3 h-[1px] w-0 bg-[#8a7d5b] transition-all duration-700 ease-out group-hover:w-12"></div>
                  <h3 style={{ fontFamily: "var(--font-syne)" }} className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
                    {item.title}
                  </h3>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sweep-Fill CTA Section */}
      <div className="mx-auto mt-32 max-w-4xl px-5 text-center sm:px-6">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] p-12 transition-all duration-500 hover:border-[#8a7d5b]/30 md:p-20">
          
          {/* Ambient Glow */}
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8a7d5b]/5 blur-[100px] transition-opacity duration-700 group-hover:bg-[#8a7d5b]/10" />

          <div className="relative z-10">
            <h4 style={{ fontFamily: "var(--font-syne)" }} className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Ready to paddle out?
            </h4>
            <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-zinc-400">
              Join us in the water. We capture moments like these during our premium sessions to help you analyze your posture and accelerate your progress.
            </p>
            
            <Link
              href="/contact"
              className="group/btn relative mx-auto inline-flex overflow-hidden bg-white px-8 py-5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black transition-all hover:text-white"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#8a7d5b] transition-transform duration-500 ease-out group-hover/btn:translate-x-0" />
              <span className="relative z-10 flex items-center gap-3">
                Book A Session
                <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      
    </main>
  );
}