"use client";
import { motion } from "framer-motion";

export default function Badge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <span className="lg:block md:block hidden px-4 py-2 text-sm rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-md text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200/40 dark:border-white/10">
        ✨ Trusted by 1,200+ Students
      </span>
    </motion.div>
  );
}
