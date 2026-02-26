"use client";

import { motion } from "framer-motion";

const problems = [
  "Generic templates that look like everyone else’s",
  "Weak project descriptions with no real impact",
  "No clear structure recruiters expect",
  "Hours wasted formatting instead of improving skills",
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 px-6 bg-white dark:bg-[#0a0614]" id="features">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          Most Student Portfolios Don’t Get Noticed.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Not because students lack talent —
          but because they don’t know how to present it.
        </motion.p>

        {/* Problems Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm"
            >
              <p className="text-gray-800 dark:text-gray-300 text-lg">
                ❌ {problem}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Strong Closing Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Talent isn’t the problem. Presentation is.
        </motion.p>
      </div>
    </section>
  );
}