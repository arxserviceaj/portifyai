import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

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
  return (
    <section className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-zinc-900">
            Weekly profile views
          </h3>
          <p className="text-xs text-zinc-500">
            Lightweight preview of your traffic
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
          +18% vs last week
        </span>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "0.75rem",
                border: "1px solid #e5e7eb",
                fontSize: 12,
              }}
            />
            <Line
              type="monotone"
              dataKey="views"
              stroke="#4f46e5"
              strokeWidth={2.4}
              dot={{ r: 4, strokeWidth: 1.5, fill: "white" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}