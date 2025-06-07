"use client"
import React, { useState } from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import { SiFirebase, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiPython, SiPostgresql, SiMysql, SiAmazonaws, SiTypescript, SiGit, SiDocker, SiExpress, SiHtml5, SiCss3 } from "react-icons/si";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: [
      { title: "React", Icon: SiReact },
      { title: "Next.js", Icon: SiNextdotjs },
      { title: "TypeScript", Icon: SiTypescript },
      { title: "JavaScript", Icon: SiJavascript },
      { title: "HTML5", Icon: SiHtml5 },
      { title: "CSS3", Icon: SiCss3 },
      { title: "Tailwind CSS", Icon: SiTailwindcss },
    ],
    backend: [
      { title: "Node.js", Icon: SiNodedotjs },
      { title: "Express.js", Icon: SiExpress },
      { title: "Python", Icon: SiPython },
      { title: "MongoDB", Icon: SiMongodb },
      { title: "MySQL", Icon: SiMysql },
      { title: "PostgreSQL", Icon: SiPostgresql },
    ],
    tools: [
      { title: "Git", Icon: SiGit },
      { title: "Docker", Icon: SiDocker },
      { title: "AWS", Icon: SiAmazonaws },
      { title: "Firebase", Icon: SiFirebase },
    ]
  };

  const categories = [
    { key: "frontend", label: "Frontend", icon: "🎨" },
    { key: "backend", label: "Backend", icon: "⚙️" },
    { key: "tools", label: "Tools & Cloud", icon: "🛠️" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 py-10">
      <Title text="Skills 🔪" className="flex flex-col items-center justify-center -rotate-6"/>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 mb-8">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              activeCategory === category.key
                ? "bg-green-500 text-black shadow-lg transform scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span>{category.icon}</span>
            <span className="hidden sm:inline">{category.label}</span>
            <span className="sm:hidden">{category.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="min-h-[400px]">
        <HoverEffect 
          items={skillCategories[activeCategory as keyof typeof skillCategories]} 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        />
      </div>

      {/* Skills Summary */}
      <div className="mt-12 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg">
        <h3 className="text-xl font-bold text-center mb-4 text-green-400">What I Bring to the Table</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-2xl">🚀</div>
            <h4 className="font-semibold text-white">Modern Development</h4>
            <p className="text-sm text-gray-400">Latest frameworks and best practices for scalable applications</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl">📱</div>
            <h4 className="font-semibold text-white">Responsive Design</h4>
            <p className="text-sm text-gray-400">Mobile-first approach ensuring great UX across all devices</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl">⚡</div>
            <h4 className="font-semibold text-white">Performance Focus</h4>
            <p className="text-sm text-gray-400">Optimized code and efficient solutions for fast loading times</p>
          </div>
        </div>
      </div>
    </div>
  );
}