"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const jobs = [
  {
    company: "Intel",
    initial: "IN",
    role: "New Product Manager",
    period: "",
    type: "Full-time",
    bg: "#0071c5",
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
    initial: "MO",
    role: "Program Manager",
    period: "Feb 2023 – Feb 2024",
    type: "Full-time",
    bg: "#c30045",
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
    initial: "JD",
    role: "Systems Engineer",
    period: "May 2022 – Dec 2022",
    type: "Full-time",
    bg: "#367c2b",
    tagline: "Automating engineering workflows with data intelligence",
    impact: "60% Efficiency Improvement",
    highlights: [
      "Built a test tool reading web API data into Pandas DataFrames for automated cleansing, analysis, and trend reporting",
      "Eliminated manual prototype machine inspection — delivered 60% engineering workflow efficiency improvement",
      "Built predictive maintenance platform using data cleaning, wrangling, and visualization frameworks",
      "Organised cross-functional Root Cause Analysis meetings and provided systems engineering technical support",
    ],
    stack: ["Python", "Pandas", "REST API", "Data Analysis", "Predictive Maintenance"],
  },
  {
    company: "DRDO",
    initial: "DR",
    role: "Process Intern",
    period: "Jan 2020 – Aug 2021",
    type: "Internship",
    bg: "#2563eb",
    tagline: "Defence research engineering at India's premier institution",
    impact: "10% Output Gain · 21% Loss Reduction",
    highlights: [
      "Increased plant production by 10% through targeted KPI setting and systematic corrective actions",
      "Employed JMP for SPC and ANOVA on intricate manufacturing process assessments",
      "Performed DOE experiments to enable 24/7 production disposition",
      "Optimised inventory management systems to decrease operational losses by 21%",
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
                padding: "10px 22px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.01em",
                border: `1.5px solid ${active === i ? j.bg : "var(--border)"}`,
                background: active === i ? `${j.bg}12` : "var(--white)",
                color: active === i ? j.bg : "var(--gray)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {j.company}
            </button>
          ))}
        </motion.div>

        {/* Job card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {(() => {
              const j = jobs[active];
              return (
                <div className="card-white" style={{ overflow: "hidden" }}>
                  <div style={{ height: 3, background: j.bg, width: "100%" }} />

                  <div className="grid md:grid-cols-12 gap-0">
                    {/* Left panel */}
                    <div
                      className="md:col-span-4 p-8 md:border-r"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {/* Company monogram */}
                      <div
                        className="flex items-center justify-center rounded-lg mb-6"
                        style={{
                          width: 48,
                          height: 48,
                          background: `${j.bg}15`,
                          border: `1px solid ${j.bg}30`,
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          color: j.bg,
                        }}
                      >
                        {j.initial}
                      </div>

                      <h3
                        className="font-bold mb-1"
                        style={{ fontSize: 22, color: "var(--black)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                      >
                        {j.role}
                      </h3>
                      <div className="font-semibold mb-1" style={{ color: j.bg, fontSize: 14 }}>
                        {j.company}
                      </div>
                      {j.period && (
                        <div className="section-label mb-6">{j.period} · {j.type}</div>
                      )}
                      {!j.period && (
                        <div className="section-label mb-6">{j.type}</div>
                      )}
                      <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.65 }}>
                        {j.tagline}
                      </p>

                      {/* Impact */}
                      <div
                        className="mt-6 p-4 rounded-lg"
                        style={{ background: `${j.bg}08`, border: `1px solid ${j.bg}25` }}
                      >
                        <div className="section-label mb-1" style={{ color: j.bg }}>Key Impact</div>
                        <div style={{ fontSize: 14, color: "var(--charcoal)", fontWeight: 600 }}>{j.impact}</div>
                      </div>

                      {/* Stack */}
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {j.stack.map((t) => (
                          <span
                            key={t}
                            className="pill"
                            style={{ fontSize: 11, padding: "3px 10px" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right panel */}
                    <div className="md:col-span-8 p-8">
                      <p className="section-label mb-6">Achievements</p>
                      <div className="flex flex-col">
                        {j.highlights.map((h, idx) => (
                          <motion.div
                            key={idx}
                            className="flex gap-4 py-5"
                            style={{
                              borderBottom: idx < j.highlights.length - 1 ? "1px solid var(--border)" : "none",
                            }}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: EASE, delay: idx * 0.07 }}
                          >
                            <div
                              className="flex-shrink-0 mt-2"
                              style={{
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                background: j.bg,
                                minWidth: 5,
                              }}
                            />
                            <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.7 }}>{h}</p>
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
