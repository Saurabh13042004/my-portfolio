"use client";
import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";

export default function Experience() {
  const experiences = [
    {
      company: "Tech Startup",
      position: "Full Stack Developer",
      duration: "2023 - Present",
      description: [
        "Developed and maintained web applications using React, Next.js, and Node.js",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive designs and optimized application performance",
        "Worked with databases including MongoDB and MySQL"
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"]
    },
    {
      company: "Freelance Projects",
      position: "Web Developer",
      duration: "2022 - 2023",
      description: [
        "Built custom websites and web applications for various clients",
        "Designed and implemented user-friendly interfaces using modern frameworks",
        "Integrated third-party APIs and payment systems",
        "Provided ongoing maintenance and support for client projects"
      ],
      technologies: ["React", "JavaScript", "CSS", "Firebase", "Tailwind CSS"]
    },
    {
      company: "Personal Projects",
      position: "Software Developer",
      duration: "2021 - 2022",
      description: [
        "Developed multiple full-stack applications to enhance programming skills",
        "Learned and implemented various technologies and frameworks",
        "Created responsive and interactive user interfaces",
        "Deployed applications using modern hosting platforms"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Git"]
    }
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Experience 💼"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <div className="mt-20 space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-indigo-500"></div>
            
            {/* Timeline dot */}
            <div className="absolute left-2 top-6 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
            
            {/* Content */}
            <div className="ml-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                  <h4 className="text-lg text-green-400">{exp.company}</h4>
                </div>
                <span className="text-sm text-gray-400 mt-2 sm:mt-0">{exp.duration}</span>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs border border-indigo-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}