"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

import ActionCard from "../components/dashboard/ActionCard";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import RecentActivity from "../components/dashboard/RecentActivity";
import Sidebar from "../components/dashboard/Sidebar";
import StatsCard from "../components/dashboard/StatsCard";
import Topbar from "../components/dashboard/Topbar";

type UserStats = {
  email: string;
  credits: number;
  portfolioCreated: boolean;
  views: number;
};

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserStats | null>(null);

  useEffect(() => {
    const loadDashboard = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error || !session) {
        router.push("/auth");
        return;
      }

      const base: UserStats = {
        email: session.user.email ?? "",
        credits: 0,
        portfolioCreated: false,
        views: 0,
      };

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("credits, portfolio_created, views")
        .eq("id", session.user.id)
        .single();

      if (profileError && !profile) {
        const { data: insertedProfile } = await supabase
          .from("profiles")
          .insert({
            id: session.user.id,
            credits: 10,
            portfolio_created: false,
            views: 0,
          })
          .select("credits, portfolio_created, views")
          .single();

        setUser({
          ...base,
          credits: insertedProfile?.credits ?? 10,
          portfolioCreated: insertedProfile?.portfolio_created ?? false,
          views: insertedProfile?.views ?? 0,
        });
      } else {
        setUser({
          ...base,
          credits: profile?.credits ?? 0,
          portfolioCreated: profile?.portfolio_created ?? false,
          views: profile?.views ?? 0,
        });
      }

      setLoading(false);
    };

    loadDashboard();
  }, [router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <p className="text-zinc-500">Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar credits={user.credits} />

        <main className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard
              title="Portfolio Status"
              value={user.portfolioCreated ? "Created" : "Not Created"}
              subtitle="Create your first AI portfolio"
            />
            <StatsCard
              title="AI Credits"
              value={user.credits.toString()}
              subtitle="Remaining balance"
            />
            <StatsCard
              title="Profile Views"
              value={user.views.toString()}
              subtitle="Last 30 days"
            />
          </div>

          {!user.portfolioCreated && <ActionCard />}

          <RecentActivity />
          <AnalyticsChart />
        </main>
      </div>
    </div>
  );
}