"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight">
        Portify<span className="text-indigo-600">AI</span>
      </h1>

      <div className="flex items-center gap-6">
        <button
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <a
          href="/create"
          className="bg-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-500 transition text-white"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
