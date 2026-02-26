"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-[#0e0a1a]">
      <div className="max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 md:p-16 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-center shadow-xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Stop Sending Boring Resumes.
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Build a recruiter-ready portfolio in minutes and stand out instantly.
          </p>

          <div className="mt-10">
            <button className="px-10 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105">
              Create My Portfolio →
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
            No coding. No design skills. Just your ambition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}