"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type FormState = {
  username: string;
  name: string;
  role: string;
  bio: string;
  skills: string;
  projectIdea: string;
};

const initialState: FormState = {
  username: "",
  name: "",
  role: "",
  bio: "",
  skills: "",
  projectIdea: "",
};

export default function CreatePortfolioPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExisting = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/auth");
        return;
      }

      const { data } = await supabase
        .from("portfolios")
        .select("username, name, role, bio, skills, project_title, project_desc")
        .eq("user_id", session.user.id)
        .single();

      if (data) {
        setForm((prev) => ({
          ...prev,
          username: data.username ?? "",
          name: data.name ?? "",
          role: data.role ?? "",
          bio: data.bio ?? "",
          skills: data.skills ?? "",
          projectIdea: data.project_desc ?? "",
        }));
      }
    };

    loadExisting();
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const generateWithAI = (state: FormState) => {
    const name = state.name || "Your Name";
    const role = state.role || "Product Designer";
    const skills = state.skills || "React, TypeScript, UX";
    const projectIdea = state.projectIdea || "AI-powered portfolio builder";

    const bio =
      state.bio ||
      `${name} is a ${role} who loves shipping clean, user-first experiences. They focus on ${skills} and enjoy turning fuzzy ideas into polished digital products.`;

    const projectTitle = `Showcase: ${projectIdea
      .charAt(0)
      .toUpperCase()}${projectIdea.slice(1)}`;

    const projectDesc = `An end-to-end project where ${
      name.split(" ")[0]
    } designed and built a ${projectIdea}. The focus was on fast iteration, clear storytelling, and a modern visual system that feels like a premium SaaS product.`;

    return { bio, projectTitle, projectDesc };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.push("/auth");
      return;
    }

    const { bio, projectTitle, projectDesc } = generateWithAI(form);

    const { error: upsertError } = await supabase.from("portfolios").upsert(
      {
        user_id: session.user.id,
        username: form.username.trim(),
        name: form.name.trim(),
        role: form.role.trim(),
        bio,
        skills: form.skills.trim(),
        project_title: projectTitle,
        project_desc: projectDesc,
      },
      { onConflict: "user_id" },
    );

    if (upsertError) {
      setError(upsertError.message);
      setLoading(false);
      return;
    }

    await supabase
      .from("profiles")
      .update({ portfolio_created: true })
      .eq("id", session.user.id);

    setLoading(false);
    router.push(`/${form.username.trim()}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-950 to-indigo-950 text-zinc-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 md:px-6">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Create portfolio
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Describe yourself and let AI assemble your portfolio.
          </h1>
          <p className="text-sm text-zinc-400 max-w-xl">
            Fill in a few details. We’ll generate a polished bio and project section
            automatically, which you can always refine later.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 shadow-xl shadow-black/40 md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm text-zinc-300" htmlFor="username">
                Portfolio URL handle
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm focus-within:border-indigo-500">
                <span className="text-zinc-500">portify.ai/</span>
                <input
                  id="username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                  className="flex-1 bg-transparent outline-none placeholder:text-zinc-600"
                  placeholder="aj-portfolio"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-zinc-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                placeholder="Alex Johnson"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-300" htmlFor="role">
              Your role
            </label>
            <input
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-indigo-500"
              placeholder="Full-stack engineer, AI freelancer, product designer..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-300" htmlFor="skills">
              Skills (comma separated)
            </label>
            <input
              id="skills"
              name="skills"
              value={form.skills}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-indigo-500"
              placeholder="React, Next.js, Tailwind, Supabase, UI/UX"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-300" htmlFor="bio">
              About you (optional)
            </label>
            <textarea
              id="bio"
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-indigo-500 placeholder:text-zinc-600"
              placeholder="Tell us about what you enjoy building, the kind of work you do, or who you like collaborating with. If you leave this empty, we’ll generate it for you."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-300" htmlFor="projectIdea">
              Signature project / focus area
            </label>
            <textarea
              id="projectIdea"
              name="projectIdea"
              value={form.projectIdea}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-indigo-500 placeholder:text-zinc-600"
              placeholder="Describe a project or niche (e.g. 'AI agent that builds portfolios from your LinkedIn'). We’ll turn this into a case study."
            />
          </div>

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-zinc-500">
              AI will generate your bio and project write-up from the details above. You can
              regenerate later.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Generating..." : "Generate my portfolio"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

