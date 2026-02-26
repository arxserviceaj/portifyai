"use client";
import { motion } from "framer-motion";

export default function FloatingElements() {
  return (
    <>
      {/* Only 2 subtle floating elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[15%] hidden lg:block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-xs text-gray-400"
      >
        &lt;portfolio/&gt;
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-[15%] hidden lg:block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-xs text-gray-400"
      >
        {"{AI-Powered}"}
      </motion.div>
    </>
  );
}