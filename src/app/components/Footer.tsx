"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Heart
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDark(true);
    } else {
      setDark(false);
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setDark(isDark);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return null;
  }

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "About", href: "#about" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Articles", href: "/articles" },
    ],
    company: [
      { name: "Careers", href: "/careers" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  };

  return (
    <footer className={`w-full transition-colors duration-300 ${
      dark ? 'bg-black' : 'bg-gray-50'
    }`}>
      <div className={`w-full h-px ${
        dark ? 'bg-white/10' : 'bg-gray-200'
      }`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-10 lg:py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 mb-6 xs:mb-8 sm:mb-10">
          
          {/* Brand Column */}
          <div className="col-span-2 xs:col-span-2 lg:col-span-2">
            <div className="space-y-2 xs:space-y-3 sm:space-y-4">
              <Link href="/" className="inline-block">
                <div className="flex items-center space-x-1.5 xs:space-x-2">
                  <Sparkles className={`w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 ${
                    dark ? 'text-indigo-400' : 'text-indigo-600'
                  }`} />
                  <span className="text-base xs:text-lg sm:text-xl font-bold">
                    Portify<span className={dark ? 'text-indigo-400' : 'text-indigo-600'}>AI</span>
                  </span>
                </div>
              </Link>

              <p className={`text-xs xs:text-xs sm:text-sm max-w-full xs:max-w-xs sm:max-w-sm ${
                dark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <span className="hidden xs:inline">Build your professional portfolio in minutes with AI. No coding required, just pure magic.</span>
                <span className="inline xs:hidden">AI-powered portfolio builder. No coding needed.</span>
              </p>

              <div className="flex items-center space-x-1.5 xs:space-x-2">
                <div className="flex -space-x-1 xs:-space-x-1.5 sm:-space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 border-2 ${
                        dark ? 'border-black' : 'border-gray-50'
                      }`}
                    />
                  ))}
                </div>
                <span className={`text-xs xs:text-xs sm:text-sm font-medium ${
                  dark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  10k+
                </span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="col-span-1">
            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-2 xs:mb-3 sm:mb-4 ${
              dark ? 'text-gray-500' : 'text-gray-500'
            }`}>
              PRODUCT
            </h3>
            <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-xs xs:text-xs sm:text-sm transition-colors ${
                      dark 
                        ? 'text-gray-400 hover:text-indigo-400' 
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-2 xs:mb-3 sm:mb-4 ${
              dark ? 'text-gray-500' : 'text-gray-500'
            }`}>
              RESOURCES
            </h3>
            <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-xs xs:text-xs sm:text-sm transition-colors ${
                      dark 
                        ? 'text-gray-400 hover:text-indigo-400' 
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-2 xs:mb-3 sm:mb-4 ${
              dark ? 'text-gray-500' : 'text-gray-500'
            }`}>
              COMPANY
            </h3>
            <ul className="flex flex-col space-y-1 xs:space-y-1.5 sm:space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-xs xs:text-xs sm:text-sm transition-colors ${
                      dark 
                        ? 'text-gray-400 hover:text-indigo-400' 
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={`mb-6 xs:mb-8 sm:mb-10 p-3 xs:p-4 sm:p-6 rounded-xl ${
          dark 
            ? 'bg-white/5 border border-white/10' 
            : 'bg-white border border-gray-200 shadow-sm'
        }`}>
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center justify-between gap-3 xs:gap-4">
            <div className="w-full sm:w-auto">
              <h4 className={`text-sm xs:text-sm sm:text-base font-semibold mb-0.5 xs:mb-1 ${
                dark ? 'text-white' : 'text-gray-900'
              }`}>
                Stay updated!
              </h4>
              <p className={`text-xs xs:text-xs sm:text-sm ${
                dark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <span className="hidden xs:inline">Get the latest features and updates delivered to your inbox.</span>
                <span className="inline xs:hidden">Get updates in your inbox.</span>
              </p>
            </div>
            
            <div className="flex w-full sm:w-auto flex-col xs:flex-row gap-2 xs:gap-0">
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className={`flex-1 min-w-0 px-2 xs:px-3 sm:px-6 py-2 xs:py-2 text-xs rounded-l-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                    dark 
                      ? 'bg-white/10 border-white/20 text-white placeholder-gray-500' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  } border`}
                />
                <button
                  className="px-2 xs:px-3 sm:px-6 py-2 xs:py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-xs font-medium rounded-r-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-3 xs:pt-4 sm:pt-6 border-t ${
          dark ? 'border-white/10' : 'border-gray-200'
        }`}>
          <div className="flex flex-col items-center gap-2 xs:gap-3 sm:flex-row sm:justify-between">
            <p className={`text-xs text-center sm:text-left ${
              dark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span className="inline xs:hidden">© {currentYear} PortifyAI</span>
              <span className="hidden xs:inline">© {currentYear} PortifyAI. All rights reserved.</span>
              <span className="hidden sm:inline"> Made with <Heart className="w-3 h-3 text-red-500 inline mx-1" /> by Arhant Jain</span>
            </p>

            <div className="flex items-center space-x-3 xs:space-x-3 sm:space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className={`transition-colors p-1 ${
                  dark ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'
                }`}>
                <Github className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className={`transition-colors p-1 ${
                  dark ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'
                }`}>
                <Twitter className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className={`transition-colors p-1 ${
                  dark ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'
                }`}>
                <Linkedin className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:hello@portify.ai"
                className={`transition-colors p-1 ${
                  dark ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'
                }`}>
                <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center xs:justify-center sm:justify-start gap-x-3 gap-y-2 mt-3 xs:mt-3 sm:mt-4 text-xs">
            <Link href="/privacy" className={`transition-colors ${
              dark ? 'text-gray-500 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'
            }`}>
              Privacy Policy
            </Link>
            <span className={dark ? 'text-gray-700' : 'text-gray-300'}>•</span>
            <Link href="/terms" className={`transition-colors ${
              dark ? 'text-gray-500 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'
            }`}>
              Terms
            </Link>
            <span className={dark ? 'text-gray-700' : 'text-gray-300'}>•</span>
            <Link href="/cookies" className={`transition-colors ${
              dark ? 'text-gray-500 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'
            }`}>
              Cookies
            </Link>
            <span className={dark ? 'text-gray-700' : 'text-gray-300'}>•</span>
            <Link href="/sitemap" className={`transition-colors ${
              dark ? 'text-gray-500 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'
            }`}>
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}