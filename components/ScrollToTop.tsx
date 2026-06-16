"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event එක අඳුරගන්න
  useEffect(() => {
    const toggleVisibility = () => {
      // පිටුවේ පික්සල් 300ක් පල්ලෙහාට ගියාම button එක පෙන්වන්න
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth විදිහට උඩටම යන්න
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-none border border-[#8a7d5b]/50 bg-[#050505]/80 text-[#8a7d5b] backdrop-blur-md transition-all duration-500 hover:border-[#8a7d5b] hover:bg-[#8a7d5b] hover:text-white md:bottom-10 md:right-10 ${
        isVisible
          ? "translate-y-0 opacity-100 shadow-[0_0_20px_rgba(138,125,91,0.2)]"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}