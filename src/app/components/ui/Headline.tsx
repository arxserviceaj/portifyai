"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Headline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl mx-auto"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-gray-900 dark:text-white">
        Build Your Portfolio <br />
        <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          <TypeAnimation
            sequence={[
              "Powered by AI",
              2000,
              "Portfolio In Minutes",
              2000,
            ]}
            wrapper="span"
            speed={9}
            repeat={Infinity}
          />
        </span>
      </h1>

      <p className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        Built for students and job seekers. Create a bold,
        recruiter-ready portfolio in minutes — powered by AI.
      </p>
    </motion.div>
  );
}