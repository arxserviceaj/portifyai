"use client";

export default function CTA() {
  return (
    <div className="mt-12 flex justify-center gap-8 items-center">
      <a
        href="/create"
        className="px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.04]"
      >
        Create Portfolio
      </a>

      <a
        href="#demo"
        className="relative px-6 py-3 rounded-xl text-lg font-semibold bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5"
      >
        <span className="flex items-center gap-2">
          View Demo
          <span className="transition-transform duration-300 hover:translate-x-1">
            →
          </span>
        </span>
      </a>
    </div>
  );
}