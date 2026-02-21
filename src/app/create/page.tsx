"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    skills: "",
    projectTitle: "",
    projectDesc: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/${formData.name.toLowerCase().replace(/\s+/g, "")}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">
          Create Your Portfolio
        </h2>

        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        <input
          name="role"
          placeholder="Your Role (e.g. Frontend Developer)"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        <textarea
          name="bio"
          placeholder="Short Bio"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        <input
          name="skills"
          placeholder="Skills (comma separated)"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <input
          name="projectTitle"
          placeholder="Project Title"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="projectDesc"
          placeholder="Project Description"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Generate Portfolio
        </button>
      </form>
    </main>
  );
}