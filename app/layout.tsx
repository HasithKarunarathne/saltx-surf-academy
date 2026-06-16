import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const syne = Syne({ subsets: ["latin"], display: "swap", variable: "--font-syne" });
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Saltx Surf Academy",
  description: "Minimalist Surf Training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${syne.variable} font-sans relative min-h-screen overflow-x-hidden bg-black text-zinc-200 selection:bg-[#8a7d5b] selection:text-white`}>
        {/* Global Background Gradients */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(138,125,91,0.15),_transparent_70%)] md:bg-[radial-gradient(circle_at_top,_rgba(138,125,91,0.15),_transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
        </div>

        <Header />
        <div className="relative z-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}