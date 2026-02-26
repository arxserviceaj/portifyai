"use client";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
    >
      <div className="flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-4 h-7 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-1.5 bg-gray-400 rounded-full mt-1.5" />
        </motion.div>
      </div>
    </motion.div>
  );
}