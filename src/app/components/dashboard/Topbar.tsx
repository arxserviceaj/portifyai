"use client";

import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { supabase } from "@/lib/supabase";

type TopbarProps = {
  credits: number;
  email?: string | null;
};

export default function Topbar({ credits, email }: TopbarProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <header className="flex items-center justify-between gap-4 px-6 py-4 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div>
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
          Dashboard
        </p>
        <h1 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Welcome back{email ? `, ${email.split("@")[0]}` : ""} 👋
        </h1>
      </div>
        <ThemeToggle />
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-xs font-medium text-white shadow-sm">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
          <span>{credits} AI credits</span>
        </div>

        {email && (
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800/70">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white flex items-center justify-center text-sm font-semibold">
              {email.charAt(0).toUpperCase()}
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                Logged in as
              </span>
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50 max-w-[160px] truncate">
                {email}
              </span>
            </div>
          </div>
        )}

        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-500 hover:text-white transition-colors"
        >
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}