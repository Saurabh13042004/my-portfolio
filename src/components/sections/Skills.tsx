"use client";

import React from 'react';

const skillCategories = [
  {
    title: "Languages",
    number: "01",
    skills: ["Python", "Java", "JavaScript / TypeScript", "SQL", "C++", "Dart"]
  },
  {
    title: "Frontend",
    number: "02",
    skills: ["React.js", "Vue.js", "Next.js", "Tailwind CSS", "Redux", "Socket.io"]
  },
  {
    title: "Backend",
    number: "03",
    skills: ["FastAPI", "Django", "Node.js", "Express", "Play", "Celery", "Prisma", "HikariCP"]
  },
  {
    title: "Data & Distributed",
    number: "04",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Kafka", "RabbitMQ", "Pub/Sub"]
  },
  {
    title: "Cloud & DevOps",
    number: "05",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "GitHub Actions", "Argo CD", "Maven"]
  },
  {
    title: "AI / Automation",
    number: "06",
    skills: ["LangChain", "LangGraph", "RAG", "MCP", "LLM Workflows", "AI Agents"]
  },
  {
    title: "Testing",
    number: "07",
    skills: ["Pytest", "JUnit", "Mockito"]
  }
];

const allSkills = skillCategories.flatMap(cat => cat.skills);

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <span className="font-mono text-blue-400 text-sm">04.</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">toolkit</h2>
          <div className="flex-1 h-px bg-neutral-800"></div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-5 hover:border-neutral-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-xs uppercase tracking-widest text-blue-400">{category.title}</h3>
                <span className="font-mono text-[10px] text-neutral-600">{category.number}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map(skill => (
                  <span key={skill} className="font-mono text-xs px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-20 overflow-hidden border-y border-neutral-900 py-6">
        <div className="flex marquee gap-10 whitespace-nowrap">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <span key={index} className="font-display text-3xl sm:text-4xl text-neutral-700 hover:text-blue-400 transition-colors">
              {skill} <span className="text-blue-400/60 ml-10">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
