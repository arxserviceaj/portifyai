"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignIn = async () => {
    setLoading(true);
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    router.push("/dashboard");
  };

  const handleSignUp = async () => {
    setLoading(true);
    setErrorMsg("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    setErrorMsg("Check your email to confirm your account.");
  };

  const handleGoogle = async () => {
    setLoading(true);

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
  };

  useEffect(() => {
  const checkUser = async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) {
      router.push("/dashboard");
    }
  };
  checkUser();
}, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50 dark:bg-[#0e0a1a]">
      <div className="w-full max-w-md p-10 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-2xl">
        
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Welcome Back
        </h2>

        <p className="mt-2 text-center text-gray-500 dark:text-gray-400">
          Sign in to build your AI portfolio.
        </p>

        {errorMsg && (
          <div className="mt-4 text-sm text-center text-red-500">
            {errorMsg}
          </div>
        )}

        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-black/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-black/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleSignIn}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "Sign In"}
          </button>

          <button
            onClick={handleSignUp}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white font-semibold transition disabled:opacity-50"
          >
            Create Account
          </button>

          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-px bg-gray-300 dark:bg-white/20"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-white/20"></div>
          </div>

          <button
            onClick={handleGoogle}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}