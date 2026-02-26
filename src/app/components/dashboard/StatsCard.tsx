type Props = {
  title: string;
  value: string;
  subtitle: string;
};

export default function StatsCard({ title, value, subtitle }: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/80 dark:bg-zinc-900/80 shadow-sm backdrop-blur-sm transition hover:shadow-lg">
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent" />
      <div className="p-5 md:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
          {title}
        </p>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          {value}
        </h2>
        <p className="mt-1 text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}