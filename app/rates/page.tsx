import { buildWhatsAppLink } from "@/utils/whatsapp";

export default function RatesPage() {
  // Categorized Standard & Specialty Lessons
  const lessonCategories = [
    {
      title: "Beginner Surf",
      description: "Master the fundamentals, ocean safety, and your first clean pop-up.",
      options: [
        { name: "Single Lesson", price: "Rs. 5,000" },
        { name: "3 Lesson Pack", price: "Rs. 13,500" },
        { name: "5 Lesson Pack", price: "Rs. 30,000" },
      ],
      defaultBooking: "Beginner Surf Package",
    },
    {
      title: "Intermediate Surf",
      description: "Improve wave reading, timing, and confident turning techniques.",
      options: [
        { name: "Single Lesson", price: "Rs. 6,000" },
        { name: "3 Lesson Pack", price: "Rs. 22,000" },
        { name: "5 Lesson Pack", price: "Rs. 37,000" },
      ],
      defaultBooking: "Intermediate Surf Package",
    },
    {
      title: "Advanced Coaching",
      description: "Precision technique, video breakdown, and advanced maneuvers.",
      options: [
        { name: "Guiding / Single", price: "Rs. 15,000" },
        { name: "3 Session Pack", price: "Rs. 40,000" },
      ],
      defaultBooking: "Advanced Coaching Package",
    },
    {
      title: "Group & Couple",
      description: "Share the stoke with friends, family, or your partner.",
      options: [
        { name: "Group (Per Pax)", price: "Rs. 4,500" },
        { name: "Private Group (4-25)", price: "Rs. 25,000+" },
        { name: "Couple Lesson", price: "Rs. 9,000" },
        { name: "Couple 3-Day", price: "Rs. 25,000" },
      ],
      defaultBooking: "Group/Couple Surf Session",
    },
    {
      title: "Longboard Clinic",
      description: "Focus on cross-stepping, nose-riding, and effortless glide.",
      options: [
        { name: "Single Lesson", price: "Rs. 10,000" },
        { name: "3 Lesson Pack", price: "Rs. 25,000" },
      ],
      defaultBooking: "Longboard Surf Lesson",
    },
    {
      title: "Specialty Sessions",
      description: "Highly focused 1-on-1 attention and visual feedback.",
      options: [
        { name: "Private 1-on-1", price: "Rs. 5,000+" },
        { name: "Video Analysis", price: "Custom Rate" },
      ],
      defaultBooking: "Specialty Surf Session",
    },
  ];

  // Premium Retreats
  const stayPackages = [
    {
      title: "3 Nights / 4 Days Retreat",
      price: "Rs. 45,000 – 60,000",
      features: [
        "Premium Accommodation",
        "3 Guided Surf Lessons",
        "Daily Breakfast included",
        "Premium Board Rental",
      ],
    },
    {
      title: "6 Nights / 7 Days Retreat",
      price: "Rs. 95,000 – 150,000+",
      features: [
        "Premium Accommodation",
        "Daily Guided Surf Lessons",
        "Daily Breakfast included",
        "Premium Board Rental",
        "Professional Video Analysis",
      ],
    },
  ];

  return (
    <main className="relative z-10 min-h-screen bg-black pb-24 pt-32 md:pt-40">
      
      {/* Editorial Page Header */}
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-[1px] w-8 bg-[#8a7d5b]"></span>
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-[#8a7d5b]">
            Investment in Progression
          </span>
          <span className="h-[1px] w-8 bg-[#8a7d5b]"></span>
        </div>
        <h1 
          style={{ fontFamily: "var(--font-syne)" }} 
          className="mb-6 text-4xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Rates & <br className="md:hidden" /> Packages.
        </h1>
        <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-zinc-400 md:text-base">
          Transparent pricing for premium coaching. From absolute beginners to advanced progression, choose the pathway that fits your journey.
        </p>
      </div>

      {/* Standard & Specialty Packages Grid */}
      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {lessonCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="group relative flex flex-col justify-between overflow-hidden border border-white/5 bg-[#050505] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#8a7d5b]/40 hover:shadow-[0_20px_40px_-15px_rgba(138,125,91,0.15)]"
            >
              {/* Subtle Top Glow on Hover */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#8a7d5b] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Large Watermark Number */}
              <div 
                className="absolute -right-4 -top-8 select-none text-[8rem] font-bold text-white/[0.02] transition-colors duration-500 group-hover:text-[#8a7d5b]/[0.05]" 
                style={{ fontFamily: "var(--font-syne)" }}
              >
                0{index + 1}
              </div>

              <div className="relative z-10">
                <h3 style={{ fontFamily: "var(--font-syne)" }} className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#8a7d5b]">
                  {category.title}
                </h3>
                <p className="mb-8 text-xs leading-relaxed text-zinc-400 md:text-sm">
                  {category.description}
                </p>

                <div className="mb-10 flex flex-col gap-4">
                  {category.options.map((opt, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <span className="text-xs uppercase tracking-widest text-zinc-400">{opt.name}</span>
                      <span className="font-mono text-sm font-medium tracking-wide text-white">{opt.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a
                href={buildWhatsAppLink(category.defaultBooking, "Please quote price based on my selection")}
                className="relative z-10 flex w-full items-center justify-between border border-white/20 bg-transparent px-6 py-4 text-[0.65rem] uppercase tracking-[0.2em] text-white transition-all duration-300 group-hover:border-[#8a7d5b] group-hover:bg-[#8a7d5b]"
              >
                <span>Inquire Now</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Surf & Stay Retreats */}
      <div className="mx-auto mt-32 max-w-7xl px-5 sm:px-6 lg:px-12">
        <div className="mb-12 text-center md:text-left">
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[#8a7d5b]">
            The Ultimate Experience
          </p>
          <h2 style={{ fontFamily: "var(--font-syne)" }} className="text-3xl font-bold text-white md:text-5xl">
            Surf & Stay Retreats.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {stayPackages.map((pkg) => (
            <div 
              key={pkg.title} 
              className="group relative overflow-hidden border border-[#8a7d5b]/20 bg-[#050505] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#8a7d5b]/50 hover:shadow-[0_20px_50px_-15px_rgba(138,125,91,0.2)] md:p-12"
            >
              {/* Subtle accent glow inside the card */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#8a7d5b]/10 blur-[80px] transition-opacity duration-500 group-hover:opacity-100 md:opacity-50" />

              <div className="relative z-10">
                <span className="mb-6 inline-block rounded-none border border-[#8a7d5b]/30 bg-[#8a7d5b]/10 px-4 py-1.5 text-[0.6rem] uppercase tracking-[0.2em] text-[#8a7d5b]">
                  Full Immersion
                </span>
                
                <h3 style={{ fontFamily: "var(--font-syne)" }} className="mb-3 text-2xl font-bold text-white md:text-4xl">
                  {pkg.title}
                </h3>
                
                <p className="mb-10 font-mono text-xl tracking-wider text-white">
                  {pkg.price}
                </p>

                <ul className="mb-12 space-y-4 border-l border-white/10 pl-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-sm text-zinc-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8a7d5b]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={buildWhatsAppLink(pkg.title, pkg.price)}
                  className="inline-flex w-full items-center justify-between bg-white px-8 py-5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black transition-transform duration-300 hover:scale-[1.02] sm:w-auto sm:gap-8"
                >
                  <span>Book Retreat</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </main>
  );
}