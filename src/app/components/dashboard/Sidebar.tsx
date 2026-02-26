"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Sparkles, LineChart, Settings, LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Create Portfolio", href: "/dashboard/create", icon: Sparkles },
  { name: "My Portfolio", href: "/dashboard/portfolio", icon: LayoutDashboard },
  { name: "Analytics", href: "/dashboard/analytics", icon: LineChart },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <aside className="h-screen w-72 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-zinc-400 flex flex-col justify-between border-r border-zinc-800/60">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/30">
            PA
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-50">PortifyAI</p>
            <p className="text-[11px] text-zinc-500">
              Creator Dashboard
            </p>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-colors ${
                  active
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "hover:bg-zinc-900 hover:text-zinc-50"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border text-zinc-300 ${
                    active
                      ? "border-indigo-400/60 bg-indigo-500/20"
                      : "border-zinc-700 group-hover:border-indigo-400/50 group-hover:bg-indigo-500/10"
                  }`}
                >
                  <Icon size={16} />
                </span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-6 border-t border-zinc-800/60">
        <button
          onClick={handleLogout}
          className="w-full inline-flex items-center justify-between gap-2 rounded-xl bg-zinc-900/80 px-3 py-2 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
        >
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-zinc-800">
              <LogOut size={14} />
            </span>
            Logout
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            Esc
          </span>
        </button>
      </div>
    </aside>
  );
}