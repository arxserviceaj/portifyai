import Sidebar from "../components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-slate-50 to-indigo-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-indigo-950">
      <div className="mx-auto flex max-w-7xl">
        <aside className="hidden md:block">
          <Sidebar />
        </aside>

        <div className="flex-1 flex flex-col min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}