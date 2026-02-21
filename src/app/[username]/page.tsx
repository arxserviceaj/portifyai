"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Portfolio() {
  const params = useParams();
  const username = params.username as string;
  const [notFound, setNotFound] = useState(false);

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const savedData = localStorage.getItem(username);
    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
       setNotFound(true);
     }
  }, [username]);

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Portfolio not found. <a href="/create" className="underline text-indigo-400">Create one?</a></p>
      </div>
    );
  }

  const skillsArray = data.skills
    ? data.skills.split(",").map((s: string) => s.trim()).filter(Boolean)
    : [];

  return (
  <main className="bg-gray-950 text-white min-h-screen">

    {/* HERO */}
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <h1 className="text-6xl md:text-7xl font-bold mb-6">
        {data.name}
      </h1>
      <p className="text-2xl opacity-90">
        {data.role}
      </p>
    </section>

    {/* ABOUT */}
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">
        About Me
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        {data.bio}
      </p>
    </section>

    {/* SKILLS */}
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>
        <div className="flex flex-wrap gap-4">
          {skillsArray.map((skill: string, index: number) => (
            <div
              key={index}
              className="px-6 py-3 bg-indigo-600 rounded-full text-sm font-medium hover:scale-105 transition"
            >
              {skill.trim()}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROJECTS */}
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
        <h3 className="text-2xl font-semibold mb-4">
          {data.projectTitle}
        </h3>
        <p className="text-gray-300">
          {data.projectDesc}
        </p>
      </div>
    </section>

  </main>
  );
}