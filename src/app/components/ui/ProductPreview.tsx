"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import preview from "../../../public/ChatGPT Image Feb 22, 2026, 04_52_02 PM.png";

export default function ProductPreview() {
  return (
    <motion.div
      id="demo"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mt-20 w-full max-w-4xl mx-auto px-4"
    >
      {/* Glow Background */}
      <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl opacity-60 rounded-full" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        whileHover={{
          rotateX: 4,
          rotateY: -4,
          scale: 1.03,
        }}
        className="relative rounded-3xl overflow-hidden backdrop-blur-xl
          bg-white/70 dark:bg-white/5
          border border-white/20
          shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Browser Top Bar */}
        <div className="flex gap-2 p-4 bg-gray-100/70 dark:bg-white/5 backdrop-blur">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        {/* Screenshot */}
       <div className="relative group perspective-1000">
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.4 }}
    className="relative"
  >
    <Image
      src={preview}
      alt="Portfolio preview"
      className="w-full object-cover object-top transition duration-500 group-hover:brightness-110"
      priority
    />

    {/* Soft Light Overlay */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

    {/* Luxury Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{}}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <button
        className="
        opacity-0 group-hover:opacity-100
        translate-y-4 group-hover:translate-y-0
        transition-all duration-500
        px-8 py-3
        rounded-full
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        text-white
        text-sm
        tracking-wider
        hover:bg-white/20
        shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      "
      >
        Watch Demo →
      </button>
    </motion.div>
  </motion.div>
</div>
      </motion.div>
    </motion.div>
  );
}