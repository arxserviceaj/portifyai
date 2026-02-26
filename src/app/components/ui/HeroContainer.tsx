"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroContainer({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -80]);
  
  return (
      <section className="relative flex flex-col items-center justify-center px-6 text-center overflow-hidden min-h-screen pt-18 md:pt-22 bg-white dark:bg-[#0a0614]">

          {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 dark:opacity-10" />


        {/* Purple Spotlight Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.45),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.55),transparent_65%)]" />
        </div>
        
        {children}
      </section>
  );
}