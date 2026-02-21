export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold mb-6">
        PortifyAI 🚀
      </h1>
      <p className="text-lg mb-6 text-gray-600">
        Build your professional portfolio in minutes.
      </p>
      <a 
        href="/create" 
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        Create Portfolio
      </a>
    </main>
  );
}