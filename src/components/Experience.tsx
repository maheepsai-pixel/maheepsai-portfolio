"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const jobs = [
  {
    company: "Intel",
    role: "New Product Manager",
    period: "Feb 2024 – Present",
    type: "Full-time",
    bg: "#0071c5",
    logo: "🔷",
    tagline: "Driving semiconductor NPI excellence at scale",
    impact: "$11M+ · 200+ Products · 99% Yield",
    highlights: [
      "Managed team of module engineers to transfer manufacturing process, achieving 99% yield from NPI → HVM",
      "Estimated $11M savings on wafer scraps via vendor management, DOE root cause analysis & 8D/FM Analysis",
      "Owned end-to-end delivery of 200+ new products with continuous yield improvement and cost reduction",
      "Built Tableau + Matplotlib dashboards for inline project monitoring; optimized SQL/ETL pipelines",
      "Led daily Scrum standups; managed full PLM lifecycle using Agile and Waterfall methodologies",
    ],
    stack: ["Tableau", "SQL", "Python", "DOE", "8D", "Agile", "ETL", "PLM"],
  },
  {
    company: "Moderna",
    role: "Program Manager",
    period: "Feb 2023 – Feb 2024",
    type: "Full-time",
    bg: "#c30045",
    logo: "🧬",
    tagline: "Enabling the future of medicine through process scale-up",
    impact: "$322M Facility · Clinical → Commercial",
    highlights: [
      "Led transfer of upstream DNA processes enabling transition from Clinical Phase 3 to $322M commercial facility",
      "Supported MFG investigations via STATISTICA, Amazon Redshift, JMP, and SQL data analysis",
      "Implemented control charts for all critical process parameters (CPPs) using JMP, minimizing deviations",
      "Conducted DOE/ANOVA investigations for raw material approvals across cross-functional teams",
      "Developed real-time turnaround dashboards on SPOTFIRE and Tableau for DNA processing analytics",
    ],
    stack: ["Amazon Redshift", "JMP", "STATISTICA", "SQL", "Tableau", "SPOTFIRE", "DOE", "ANOVA"],
  },
  {
    company: "John Deere",
    role: "Systems Engineer",
    period: "May 2022 – Dec 2022",
    type: "Full-time",
    bg: "#367c2b",
    logo: "🚜",
    tagline: "Automating engineering workflows with data intelligence",
    impact: "60% Efficiency Improvement",
    highlights: [
      "Built a test tool reading web API data into Pandas DataFrames for automated cleansing, analysis, and trend reporting",
      "Eliminated manual prototype machine inspection — delivered 60% engineering workflow efficiency improvement",
      "Built predictive maintenance platform using data cleaning, wrangling, and visualization frameworks",
      "Organized cross-functional Root Cause Analysis meetings and provided systems engineering technical support",
    ],
    stack: ["Python", "Pandas", "REST API", "Data Analysis", "Predictive Maintenance"],
  },
  {
    company: "DRDO",
    role: "Process Intern",
    period: "Jan 2020 – Aug 2021",
    type: "Internship",
    bg: "#7c3aed",
    logo: "🛡️",
    tagline: "Defence research engineering in India's premier lab",
    impact: "10% Output Gain · 21% Loss Reduction",
    highlights: [
      "Increased plant production by 10% through targeted KPI setting and systematic corrective actions",
      "Employed JMP for SPC and ANOVA on intricate manufacturing process assessments",
      "Performed DOE experiments to enable 24/7 production disposition",
      "Optimized inventory management systems to decrease operational losses by 21%",
    ],
    stack: ["JMP", "SPC", "ANOVA", "DOE", "KPI Management"],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="experience" style={{ background: "var(--bg)" }} aria-label="Work Experience">
      <div className="container section">
        {/* Header */}
        <div ref={titleRef} className="mb-14">
          <div style={{ overflow: "hidden" }}>
            <motion.p
              className="section-label"
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
            >
              Work Experience
            </motion.p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              className="display-md mt-2"
              style={{ color: "var(--black)" }}
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
            >
              Where I Made
              <br />
              an <em style={{ fontStyle: "italic" }}>Impact</em>
            </motion.h2>
          </div>
        </div>

        {/* Company selector */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
        >
          {jobs.map((j, i) => (
            <button
              key={j.company}
              onClick={() => setActive(i)}
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                border: `1.5px solid ${active === i ? j.bg : "var(--border)"}`,
                background: active === i ? `${j.bg}12` : "var(--white)",
                color: active === i ? j.bg : "var(--gray)",
                cursor: "pointer",
                transition: "all 0.25s ease",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>{j.logo}</span>
              {j.company}
            </button>
          ))}
        </motion.div>

        {/* Job card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {(() => {
              const j = jobs[active];
              return (
                <div className="card-white" style={{ overflow: "hidden" }}>
                  {/* Top accent stripe */}
                  <div style={{ height: 4, background: j.bg, width: "100%" }} />

                  <div className="grid md:grid-cols-12 gap-0">
                    {/* Left panel */}
                    <div
                      className="md:col-span-4 p-8 md:border-r"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6"
                        style={{ background: `${j.bg}15` }}
                      >
                        {j.logo}
                      </div>
                      <h3
                        className="font-bold mb-1"
                        style={{ fontSize: 24, color: "var(--black)", letterSpacing: "-0.02em" }}
                      >
                        {j.role}
                      </h3>
                      <div className="font-semibold mb-1" style={{ color: j.bg, fontSize: 15 }}>
                        {j.company}
                      </div>
                      <div className="section-label mb-6">{j.period} · {j.type}</div>
                      <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.65 }}>
                        {j.tagline}
                      </p>
                      {/* Impact */}
                      <div
                        className="mt-6 p-4 rounded-lg"
                        style={{ background: `${j.bg}10`, border: `1px solid ${j.bg}30` }}
                      >
                        <div className="section-label mb-1" style={{ color: j.bg }}>Key Impact</div>
                        <div style={{ fontSize: 14, color: "var(--charcoal)", fontWeight: 600 }}>{j.impact}</div>
                      </div>
                      {/* Stack */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {j.stack.map((t) => (
                          <span
                            key={t}
                            className="pill"
                            style={{ fontSize: 11, padding: "4px 10px" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right panel: highlights */}
                    <div className="md:col-span-8 p-8">
                      <p className="section-label mb-6">Achievements</p>
                      <div className="flex flex-col gap-0">
                        {j.highlights.map((h, i) => (
                          <motion.div
                            key={i}
                            className="flex gap-4 py-4"
                            style={{ borderBottom: i < j.highlights.length - 1 ? "1px solid var(--border)" : "none" }}
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.45, ease: EASE, delay: i * 0.08 }}
                          >
                            <div
                              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                              style={{ background: `${j.bg}15`, minWidth: 20 }}
                            >
                              <div
                                style={{ width: 6, height: 6, borderRadius: "50%", background: j.bg }}
                              />
                            </div>
                            <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.65 }}>{h}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
