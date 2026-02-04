"use client";
import React, { useState } from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiDart,
  SiFastapi, SiDjango, SiNodedotjs, SiExpress, SiRabbitmq, SiDocker, SiKubernetes,
  SiAmazonaws, SiGooglecloud, SiGithubactions, SiCircleci, SiArgo,
  SiReact, SiVuedotjs, SiNextdotjs, SiTailwindcss, SiRedux, SiSocketdotio,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiPrisma, SiCelery
} from "react-icons/si";
import { FaJava, FaDatabase, FaLink } from "react-icons/fa";

const skillCategories = {
  languages: [
    { title: "Python", Icon: SiPython },
    { title: "Java", Icon: FaJava },
    { title: "JavaScript", Icon: SiJavascript },
    { title: "TypeScript", Icon: SiTypescript },
    { title: "SQL", Icon: FaDatabase },
    { title: "C++", Icon: SiCplusplus },
    { title: "Dart", Icon: SiDart },
  ],
  backend: [
    { title: "FastAPI", Icon: SiFastapi },
    { title: "Django", Icon: SiDjango },
    { title: "Node.js", Icon: SiNodedotjs },
    { title: "Express", Icon: SiExpress },
    { title: "Celery", Icon: SiCelery },
    { title: "LangChain", Icon: FaLink },
    { title: "RabbitMQ", Icon: SiRabbitmq },
    { title: "Docker", Icon: SiDocker },
    { title: "Kubernetes", Icon: SiKubernetes },
    { title: "AWS", Icon: SiAmazonaws },
    { title: "GCP", Icon: SiGooglecloud },
    { title: "GitHub Actions", Icon: SiGithubactions },
    { title: "CircleCI", Icon: SiCircleci },
    { title: "Argo CD", Icon: SiArgo },
  ],
  frontend: [
    { title: "React.js", Icon: SiReact },
    { title: "Vue.js", Icon: SiVuedotjs },
    { title: "Next.js", Icon: SiNextdotjs },
    { title: "Tailwind", Icon: SiTailwindcss },
    { title: "Redux", Icon: SiRedux },
    { title: "Socket.io", Icon: SiSocketdotio },
    { title: "PostgreSQL", Icon: SiPostgresql },
    { title: "MySQL", Icon: SiMysql },
    { title: "MongoDB", Icon: SiMongodb },
    { title: "Redis", Icon: SiRedis },
    { title: "Prisma", Icon: SiPrisma },
  ],
};

const categories = [
  { key: "languages", label: "Languages", icon: "💻" },
  { key: "backend", label: "Backend & Infra", icon: "⚙️" },
  { key: "frontend", label: "Frontend & Data", icon: "🎨" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("languages");

  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      <Title text="Skills 🛠️" className="flex flex-col items-center justify-center -rotate-6 mb-8" />

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 border ${activeCategory === category.key
                ? "bg-green-500/20 text-green-400 border-green-500/50 shadow-lg shadow-green-500/20"
                : "bg-gray-900/50 text-gray-400 border-gray-700/50 hover:bg-gray-800/50 hover:text-gray-300"
              }`}
          >
            <span className="text-lg">{category.icon}</span>
            <span className="hidden sm:inline">{category.label}</span>
            <span className="sm:hidden text-sm">{category.label.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <HoverEffect
        key={activeCategory}
        items={skillCategories[activeCategory as keyof typeof skillCategories]}
      />
    </div>
  );
}
