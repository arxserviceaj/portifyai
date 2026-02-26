"use client";

import { motion } from "framer-motion";

export default function PortfolioPreview() {
  return (
    <section className="py-28 px-6 bg-white dark:bg-[#0a0614]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          See What You’ll Get
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          A clean, recruiter-ready portfolio designed to showcase your work clearly.
        </motion.p>

        {/* Preview Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden bg-white dark:bg-white/5"
        >
          <div className="p-8 text-left">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Ananya Sharma
            </h3>
            <p className="text-indigo-600 dark:text-purple-400 mt-2">
              Frontend Developer | React • Next.js • TypeScript
            </p>

            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/10">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  AI Resume Analyzer
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  Built an AI-powered resume feedback system that analyzes structure,
                  keywords, and formatting to improve hiring chances.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/10">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Portfolio Builder SaaS
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  Developed a full-stack portfolio generator using Next.js and
                  AI-driven content enhancement.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-gray-500 dark:text-gray-400"
        >
          Built automatically. Structured professionally. Ready to share.
        </motion.p>
      </div>
    </section>
  );
}