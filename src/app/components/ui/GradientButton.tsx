export default function GradientButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition">
      {children}
    </button>
  );
}