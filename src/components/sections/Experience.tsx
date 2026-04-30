import React from 'react';

export default function Experience() {
  return (
    <section id="work" className="relative py-28 px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <span className="font-mono text-blue-400 text-sm">02.</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">experience</h2>
          <div className="flex-1 h-px bg-neutral-800"></div>
        </div>

        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-blue-400/40 via-neutral-800 to-transparent"></div>
          
          <div className="space-y-14">
            {/* Zeotap */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-0 sm:left-2 top-2 flex items-center justify-center w-9 h-9 rounded-full border border-neutral-800 bg-neutral-950 group-hover:border-blue-400/50 transition-colors overflow-hidden">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D0BAQFtgBMyrBBJxQ/company-logo_200_200/B4DZalpxleG0AI-/0/1746535914440/zeotap_logo?e=2147483647&v=beta&t=q7Xn_GJgx8OcExk9VyOR9aeoMXSUstUiqJzmqGhyD-8" 
                  alt="Zeotap Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-2xl text-white font-semibold tracking-tight">Zeotap</h3>
                <span className="text-neutral-500">·</span>
                <span className="text-neutral-300">Software Engineer</span>
                <span className="text-neutral-500 text-sm hidden sm:inline">(Prev: SDE Intern)</span>
              </div>
              
              <div className="mt-1 flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-500">
                <span>May 2025 — Present</span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg> Bengaluru, IN
                </span>
              </div>
              
              <ul className="mt-5 space-y-2.5">
                {[
                  "Implemented scalable request-response logging and observability for distributed streaming and batch pipelines using Pub/Sub and BigQuery.",
                  "Delivered 20+ partner integrations (Amazon DSP/AMC, StackAdapt, Zoho, Talon.One, YieldLabs) across ingestion and real-time pipelines for Zeotap's CDP.",
                  "Developed the Policy Lifecycle Engine enabling rule-based data routing — clients configure rules and prioritize delivery across downstream systems.",
                  "Built Integr8, an AI integration agent that scans developer documentation and auto-generates database configurations and test scripts — reducing setup time by 90%.",
                  "Built Doctor-Integr8 (internal AI tool / MCP + Slack bot) that converts natural language queries into complex SQL and returns insights on ingestion lifecycle and historical estimations.",
                  "Created automated Slack alerting pipelines detecting ingestion failures and RabbitMQ lag using Python and SQL."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-neutral-300 leading-relaxed">
                    <span className="text-blue-400 font-mono select-none">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-5 flex flex-wrap gap-1.5">
                {[
                  "Java", "Maven", "Distributed Systems", "RabbitMQ", "GCP", 
                  "BigQuery", "GCS", "Pub/Sub", "Python", "LangGraph", 
                  "LangChain", "FastAPI", "PostgreSQL", "AngularJS", "TypeScript"
                ].map(tech => (
                  <span key={tech} className="font-mono text-[11px] px-2 py-1 rounded bg-neutral-900/80 border border-neutral-800 text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Summit Technology Group India */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-0 sm:left-2 top-2 flex items-center justify-center w-9 h-9 rounded-full border border-neutral-800 bg-neutral-950 group-hover:border-blue-400/50 transition-colors overflow-hidden">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D560BAQFJZ8bVHMdJng/company-logo_200_200/B56ZwtFUAoGQAI-/0/1770282893885/stgi_tech_logo?e=2147483647&v=beta&t=W1Tiv94g8Li46CVs-un4k_xtYeM2-FM85n0D7xVs5hI" 
                  alt="STGI Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-2xl text-white font-semibold tracking-tight">Summit Technology Group India</h3>
                <span className="text-neutral-500">·</span>
                <span className="text-neutral-300">Software Engineer Intern</span>
              </div>
              
              <div className="mt-1 flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-500">
                <span>Jun 2024 — May 2025</span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg> Chandigarh, IN
                </span>
              </div>
              
              <ul className="mt-5 space-y-2.5">
                {[
                  "Designed and developed the loan servicing and payment backend system from the ground up, with bank account onboarding/disconnection flows, recurring billing, and scheduled payment processing.",
                  "Developed a cache layer using Django, increasing tenant database performance by up to 40% and reducing database load during peak hours which improved database scalability.",
                  "Enhanced backend services by integrating third-party government APIs and orchestrating asynchronous workflows with Celery task queues and workers.",
                  "Optimized CI/CD pipelines (GitHub Actions, CircleCI) by trimming log output and enabling parallel pytest execution, resulting in 50–60% faster pipelines."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-neutral-300 leading-relaxed">
                    <span className="text-blue-400 font-mono select-none">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-5 flex flex-wrap gap-1.5">
                {[
                  "Django", "Pytest", "SQL", "Docker", "GitHub Actions", 
                  "CircleCI", "Javascript", "Vue.js", "jq"
                ].map(tech => (
                  <span key={tech} className="font-mono text-[11px] px-2 py-1 rounded bg-neutral-900/80 border border-neutral-800 text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
