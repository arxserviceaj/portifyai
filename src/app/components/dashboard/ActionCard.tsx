import Link from "next/link";
import GradientButton from "../ui/GradientButton";

export default function ActionCard() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-gradient-to-r from-zinc-900 via-zinc-900 to-indigo-900 text-zinc-50 shadow-sm">
      <div className="absolute inset-y-[-40%] right-[-20%] w-64 rounded-full bg-gradient-to-tr from-indigo-400/40 via-fuchsia-400/40 to-emerald-300/40 blur-3xl opacity-50" />

      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 p-6 md:p-7">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">
            Create your AI-powered portfolio
          </h2>
          <p className="mt-2 text-sm text-zinc-300 max-w-md">
            Turn your experience into a polished personal site in under a minute. No design or code required.
          </p>
        </div>

        <Link href="/dashboard/create" className="inline-flex">
          <GradientButton>
            Generate Portfolio →
          </GradientButton>
        </Link>
      </div>
    </section>
  );
}