"use client";
import React from "react";
import { motion } from "motion/react";
import Title from "./Title";

export default function Experience() {
  const experiences = [
    {
      company: "Zeotap",
      position: "Software Engineer Intern",
      duration: "May 2025 – Present",
      description: [
        "Implemented scalable request–response logging and observability for real-time streaming and batch pipelines, processing high-volume data flows using Pub/Sub and BigQuery to ensure reliability and traceability at scale.",
        "Delivered 20+ partner integrations (Amazon DSP/AMC, StackAdapt, Zoho, Talon.One, YieldLabs) across Ingress, Egress, and Real-time pipelines, improving partner connectivity and delivery reliability.",
        "Developed the Policy Lifecycle Engine enabling granular caps, filters, and channel-level delivery governance.",
        "Built an AI-driven integration agent leveraging semantic search over API documentation, automated schema mapping, and intelligent payload generation to compress integration development cycles from weeks to 10 minutes.",
        "Created Slack alerting pipelines for ingestion failures, RMQ lag, and metadata issues using Python and SQL."
      ],
      technologies: ["Python", "Pub/Sub", "BigQuery", "LangChain", "RabbitMQ", "SQL"]
    },
    {
      company: "Summit Technology Group India",
      position: "Software Engineer Intern",
      duration: "Jun 2024 – May 2025",
      description: [
        "Built core modules for the Loan Servicing System, including bank onboarding/disconnection, recurring billing, and scheduled payment workflows using Stripe APIs, webhooks, and Celery.",
        "Engineered a high-performance Django CacheOps + Dragon Cache Manager layer, improving public and tenant database throughput by 40%.",
        "Integrated multiple government APIs and orchestrated asynchronous distributed workflows using Celery task queues and workers.",
        "Accelerated CI/CD pipelines (GitHub Actions, CircleCI) by reducing log overhead and enabling parallel test execution, cutting runtime by 50–60%."
      ],
      technologies: ["Django", "Celery", "Stripe", "GitHub Actions", "CircleCI", "PostgreSQL"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 px-5 sm:px-0">
      <Title
        text="Experience 💼"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <div className="mt-16 space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-indigo-500"></div>
            )}

            {/* Timeline dot */}
            <div className="absolute left-2 top-6 w-4 h-4 bg-green-500 rounded-full border-4 border-black shadow-lg shadow-green-500/50"></div>

            {/* Content */}
            <div className="ml-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                  <h4 className="text-lg text-green-400">{exp.company}</h4>
                </div>
                <span className="text-sm text-gray-400 mt-2 sm:mt-0 bg-gray-800/50 px-3 py-1 rounded-full">{exp.duration}</span>
              </div>

              <ul className="space-y-3 mb-5">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start">
                    <span className="text-green-500 mr-3 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs border border-green-500/20"
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