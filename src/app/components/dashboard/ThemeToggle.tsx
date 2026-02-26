"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/80 bg-zinc-100/80 shadow-sm ring-0 transition-all duration-300 hover:border-indigo-400/80 hover:shadow-md dark:border-zinc-700/80 dark:bg-zinc-900/80"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/60 via-violet-500/40 to-fuchsia-500/40 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />

      <span
        className={`relative flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-amber-300 transition-transform duration-300 dark:bg-zinc-50 dark:text-indigo-500 ${
          isDark ? "rotate-180" : "rotate-0"
        }`}
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
    </button>
  );
}