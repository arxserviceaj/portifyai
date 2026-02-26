"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [session, setSession] = useState<any>(null);

useEffect(() => {
  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
  };

  getSession();

  const { data: listener } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      setSession(session);
    }
  );

  return () => {
    listener.subscription.unsubscribe();
  };
}, []);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const handleLogout = async () => {
  await supabase.auth.signOut();
  setSession(null);
};

  if (!mounted) return null;

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-2xl bg-white/70 dark:bg-black/60 shadow-lg"
            : "backdrop-blur-md bg-white/40 dark:bg-black/30"
        }
        border-b border-black/10 dark:border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold tracking-tight">
            Portify<span className="text-indigo-500">AI</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-lg font-medium">
            {["Home", "Features","", "About"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-600 dark:text-gray-300 group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-lg
              bg-black/5 dark:bg-white/10 hover:scale-110 transition"
            >
              <AnimatePresence mode="wait">
                {dark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun size={22} color="orange" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon size={22} fill="white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            

            {/* Desktop CTA */}

           {
  session ? (
    <div className="hidden md:flex items-center gap-3">
      <Link
        href="/dashboard"
        className="px-5 py-2 rounded-lg 
        bg-gradient-to-r from-indigo-600 to-pink-500 
        text-white text-sm font-medium hover:opacity-90 transition"
      >
        Dashboard
      </Link>

      <button
        onClick={handleLogout}
        className="px-5 py-2 rounded-lg 
        bg-black/10 dark:bg-white/10 
        text-sm font-medium hover:opacity-80 transition"
      >
        Logout
      </button>
    </div>
  ) : (
    <Link
      href="/auth"
      className="hidden md:inline-block px-5 py-2 rounded-lg 
      bg-gradient-to-r from-indigo-600 to-pink-500 
      text-white text-sm font-medium hover:opacity-90 transition"
    >
      Get Started
    </Link>
  )
}
           

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg
              bg-black/5 dark:bg-white/10"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 w-full bg-white dark:bg-black
            border-b border-black/10 dark:border-white/10 md:hidden z-40"
          >
            <div className="flex flex-col items-center gap-6 py-6 text-lg">
              {["Features", "Pricing", "About"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {item}
                </Link>
              ))}

              <Link
                href="/auth"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-3 rounded-lg bg-gradient-to-r 
                from-indigo-600 to-pink-500 text-white"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
