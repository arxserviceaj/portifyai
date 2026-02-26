import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTheme } from "next-themes";

const data = [
  { name: "Mon", views: 12 },
  { name: "Tue", views: 22 },
  { name: "Wed", views: 18 },
  { name: "Thu", views: 30 },
  { name: "Fri", views: 44 },
  { name: "Sat", views: 28 },
  { name: "Sun", views: 36 },
];

export default function AnalyticsChart() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const axisColor = isDark ? "#9ca3af" : "#6b7280";
  const gridColor = isDark ? "#27272a" : "#e5e7eb";
  const lineColor = "#6366f1";
  const tooltipBg = isDark ? "#020617" : "#ffffff";
  const tooltipBorder = isDark ? "#27272a" : "#e5e7eb";

  return (
    <section className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/80 dark:bg-zinc-900/80 p-6 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Weekly profile views
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Lightweight preview of your traffic
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-emerald-50 dark:bg-emerald-900/40 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
          +18% vs last week
        </span>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: axisColor }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: axisColor }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: tooltipBg,
                borderRadius: "0.75rem",
                border: `1px solid ${tooltipBorder}`,
                fontSize: 12,
                color: isDark ? "#e5e7eb" : "#111827",
              }}
            />
            <Line
              type="monotone"
              dataKey="views"
              stroke={lineColor}
              strokeWidth={2.4}
              dot={{ r: 4, strokeWidth: 1.5, fill: isDark ? "#020617" : "#ffffff" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}