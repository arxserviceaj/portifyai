"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Enter Your Details",
    description:
      "Add your projects, skills, and experience in a simple guided form.",
  },
  {
    title: "AI Enhances & Structures",
    description:
      "PortifyAI rewrites, formats, and structures everything professionally.",
  },
  {
    title: "Publish Instantly",
    description:
      "Get a recruiter-ready portfolio link you can share immediately.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-[#0e0a1a]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          How PortifyAI Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          From idea to recruiter-ready portfolio — in minutes.
        </motion.p>

        {/* Steps Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-indigo-600 dark:text-purple-400 mb-4">
                0{index + 1}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}