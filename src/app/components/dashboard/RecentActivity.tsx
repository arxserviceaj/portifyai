export default function RecentActivity() {
  const activities = [
    "Signed in",
    "10 Credits added",
    "Portfolio not yet created",
  ];

  return (
    <section className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/80 dark:bg-zinc-900/80 shadow-sm backdrop-blur-sm p-6">
      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
        Recent Activity
      </h3>

      <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="border-b border-zinc-100 dark:border-zinc-800 pb-2 last:border-b-0 last:pb-0"
          >
            {activity}
          </li>
        ))}
      </ul>
    </section>
  );
}