"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { number: 1200, label: "Portfolios Created", suffix: "+" },
    { number: 350, label: "Students Hired", suffix: "+" },
    { number: 4.9, label: "Average Rating", suffix: "★" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-3xl mx-auto mt-16"
    >
      <div className="grid grid-cols-3 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {typeof stat.number === "number" ? (
                <>
                  <CountUp end={stat.number} duration={2} decimals={stat.number % 1 === 0 ? 0 : 1} />
                  {stat.suffix}
                </>
              ) : (
                stat.number
              )}
            </p>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}