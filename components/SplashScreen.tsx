"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Splash screen එක තියෙනකම් Scroll කරන එක නවත්වන්න
    document.body.style.overflow = "hidden";

    // 0% සිට 100% දක්වා Loading Bar එක පිරවීමේ ගණනය කිරීම
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.5; // මිලි තත්පර 20කට වරක් 1.5% කින් වැඩි වේ
      });
    }, 20);

    // තත්පර 2කට පස්සේ Fade out animation එක පටන් ගන්න
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    // තත්පර 2.8කට පස්සේ Component එක සම්පූර්ණයෙන්ම අයින් කරලා scroll කරන්න දෙන්න
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#050505] transition-all duration-700 ease-in-out ${
        isFadingOut ? "pointer-events-none opacity-0 blur-md translate-y-4" : "opacity-100 blur-0 translate-y-0"
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-[#8a7d5b]/5 blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Zooming Logo */}
        <div className="mb-6 overflow-hidden">
          <Image
            src="/logosurf.png"
            alt="Saltx Surf Academy"
            width={80}
            height={80}
            className="h-16 w-16 object-contain grayscale transition-transform duration-75 ease-linear md:h-20 md:w-20"
            // Loading ප්‍රතිශතය අනුව Logo එක ටිකෙන් ටික ලොකු වේ
            style={{ transform: `scale(${1 + progress / 500})` }} 
            priority
          />
        </div>

        {/* Brand Name */}
        <h2 style={{ fontFamily: "var(--font-syne)" }} className="mb-12 text-2xl font-bold uppercase tracking-[0.4em] text-white md:text-3xl">
          SALTX
        </h2>

        {/* Dynamic Loading Bar Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex w-48 justify-between text-[0.55rem] uppercase tracking-[0.3em] text-[#8a7d5b] md:w-64">
            <span>{progress < 100 ? "Curating Experience" : "Ready"}</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          
          {/* Progress Track */}
          <div className="h-[2px] w-48 overflow-hidden bg-white/10 md:w-64">
            {/* Progress Fill */}
            <div
              className="h-full bg-[#8a7d5b] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}