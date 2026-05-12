"use client";

import { useState } from "react";

const jobs = [
  {
    company: "Intel",
    role: "New Product Manager",
    period: "Feb 2024 – Present",
    location: "On-site",
    color: "#0071c5",
    logo: "🔷",
    highlights: [
      "Managed a team of module engineers to transfer manufacturing processes, achieving 99% yield transitioning from NPI to High Volume Production",
      "Estimated $11M in savings on wafer scraps and misprocessing through vendor management and data analysis",
      "Owned end-to-end delivery of 200+ new products, overseeing continuous yield improvement and cost reduction",
      "Created Tableau and Matplotlib dashboards to monitor inline projects and drive data-based decisions",
      "Collaborated with data engineers to implement ETL processes; optimized SQL queries for analytical requirements",
      "Performed DOE to address root causes for yield issues; used 8D and FM Analysis to eliminate wafer scrap",
      "Led weekly/daily Scrum meetings; managed Product Life Cycle (PLM) using Agile and Waterfall methodologies",
    ],
    tags: ["Tableau", "SQL", "Python", "DOE", "Agile", "Scrum", "ETL", "Matplotlib", "PLM"],
    impact: "$11M+ savings · 200+ products · 99% yield",
  },
  {
    company: "Moderna",
    role: "Program Manager",
    period: "Feb 2023 – Feb 2024",
    location: "Hybrid",
    color: "#c30045",
    logo: "🧬",
    highlights: [
      "Led transfer of technology-critical upstream DNA processes enabling commercial production transition from Clinical Phase 3 to a new $322M Moderna facility",
      "Supported MFG investigations and ad hoc data needs through STATISTICA, Amazon Redshift, JMP, and SQL",
      "Collaborated across departments to conduct DOE/ANOVA process investigations for raw materials approval",
      "Implemented control charts for all critical process parameters (CPPs) using JMP, minimizing deviations",
      "Developed turnaround dashboards on SPOTFIRE and Tableau for DNA processing analytics",
    ],
    tags: ["STATISTICA", "Amazon Redshift", "JMP", "SQL", "DOE", "ANOVA", "Tableau", "SPOTFIRE"],
    impact: "$322M facility transition · Clinical → Commercial",
  },
  {
    company: "John Deere",
    role: "Systems Engineer",
    period: "May 2022 – Dec 2022",
    location: "On-site",
    color: "#367c2b",
    logo: "🚜",
    highlights: [
      "Built a test tool that reads source data from web APIs into a Pandas DataFrame, performs cleansing, data analysis, and reports data trends per Benchmark Values",
      "Improved engineering work efficiency by 60%, eliminating manual inspection of prototype machines",
      "Built a predictive maintenance platform leveraging data cleaning, wrangling, and visualization frameworks",
      "Organized cross-functional RCA meetings and provided technical support as a Systems Engineer",
    ],
    tags: ["Python", "Pandas", "REST API", "Data Analysis", "Predictive Maintenance"],
    impact: "60% efficiency improvement",
  },
  {
    company: "DRDO",
    role: "Process Intern",
    period: "Jan 2020 – Aug 2021",
    location: "On-site",
    color: "#7c3aed",
    logo: "🛡️",
    highlights: [
      "Increased plant production by 10% through efficient KPI target setting and corrective actions",
      "Employed JMP to perform SPC and ANOVA for intricate manufacturing process assessment",
      "Performed DOE experiments to enable 24/7 disposition",
      "Optimized inventory management to decrease losses by 21%",
    ],
    tags: ["JMP", "SPC", "ANOVA", "DOE", "KPI", "Inventory Management"],
    impact: "10% production increase · 21% loss reduction",
  },
];

export default function Experience() {
  const [activeJob, setActiveJob] = useState(0);
  const job = jobs[activeJob];

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto" aria-label="Work Experience">
      <p className="section-label">Work Experience</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Where I&apos;ve <span className="gradient-text">Made an Impact</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar tabs */}
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible md:min-w-[200px]">
          {jobs.map((j, i) => (
            <button
              key={j.company}
              onClick={() => setActiveJob(i)}
              className={`px-4 py-3 text-left rounded-xl border transition-all whitespace-nowrap md:whitespace-normal ${
                activeJob === i
                  ? "bg-[rgba(99,102,241,0.15)] border-[rgba(99,102,241,0.5)] text-white"
                  : "bg-transparent border-transparent text-[#8888a8] hover:text-white hover:bg-[rgba(99,102,241,0.06)]"
              }`}
            >
              <span className="mr-2">{j.logo}</span>
              <span className="font-medium text-sm">{j.company}</span>
            </button>
          ))}
        </div>

        {/* Job details */}
        <div className="flex-1 card p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">{job.role}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-lg">{job.logo}</span>
                <span className="text-[#a5b4fc] font-semibold">{job.company}</span>
                <span className="text-[#8888a8] text-sm">· {job.location}</span>
              </div>
            </div>
            <div className="text-right">
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: `${job.color}20`,
                  border: `1px solid ${job.color}40`,
                  color: job.color,
                }}
              >
                {job.period}
              </span>
            </div>
          </div>

          {/* Impact badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium mb-6"
            style={{ background: "rgba(99,102,241,0.1)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.2)" }}
          >
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {job.impact}
          </div>

          {/* Highlights */}
          <ul className="space-y-3 mb-8">
            {job.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-[#8888a8] text-sm leading-relaxed">
                <div className="timeline-dot mt-1.5" style={{ width: 8, height: 8, minWidth: 8 }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {job.tags.map((t) => (
              <span key={t} className="skill-pill text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
