"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const jobs = [
  {
    company: "Intel",
    role: "New Product Manager",
    period: "",
    type: "Full-time",
    accent: "#0071c5",
    tagline: "Driving semiconductor NPI excellence at scale",
    impact: "$11M+ cost savings · 200+ products launched · 99% yield achieved",
    highlights: [
      "Managed team of module engineers to transfer manufacturing process, achieving 99% yield from NPI to HVM",
      "Estimated $11M savings on wafer scraps via vendor management, DOE root cause analysis and 8D/FM Analysis",
      "Owned end-to-end delivery of 200+ new products with continuous yield improvement and cost reduction",
      "Built Tableau and Matplotlib dashboards for inline project monitoring; optimised SQL/ETL pipelines",
      "Led daily Scrum standups; managed full PLM lifecycle using Agile and Waterfall methodologies",
    ],
    stack: ["Tableau", "SQL", "Python", "DOE", "8D Analysis", "Agile", "ETL", "PLM"],
  },
  {
    company: "Moderna",
    role: "Program Manager",
    period: "Feb 2023 – Feb 2024",
    type: "Full-time",
    accent: "#c30045",
    tagline: "Enabling the future of medicine through process scale-up",
    impact: "$322M facility transition · Clinical Phase 3 to commercial production",
    highlights: [
      "Led transfer of upstream DNA processes enabling transition from Clinical Phase 3 to $322M commercial facility",
      "Supported manufacturing investigations via STATISTICA, Amazon Redshift, JMP, and SQL data analysis",
      "Implemented control charts for all critical process parameters using JMP, minimising deviations",
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
    accent: "#367c2b",
    tagline: "Automating engineering workflows with data intelligence",
    impact: "60% engineering efficiency improvement",
    highlights: [
      "Built a test tool reading web API data into Pandas DataFrames for automated cleansing, analysis, and trend reporting",
      "Eliminated manual prototype machine inspection, delivering 60% engineering workflow efficiency improvement",
      "Built predictive maintenance platform using data cleaning, wrangling, and visualisation frameworks",
      "Organised cross-functional Root Cause Analysis meetings and provided systems engineering technical support",
    ],
    stack: ["Python", "Pandas", "REST API", "Data Analysis", "Predictive Maintenance"],
  },
  {
    company: "DRDO",
    role: "Process Intern",
    period: "Jan 2020 – Aug 2021",
    type: "Internship",
    accent: "#2563eb",
    tagline: "Defence research engineering at India's premier institution",
    impact: "10% production increase · 21% inventory loss reduction",
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
  const j = jobs[active];

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

        {/* Company tabs — minimal underline style */}
        <motion.div
          className="flex gap-8 mb-12"
          style={{ borderBottom: "1px solid var(--border)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
        >
          {jobs.map((job, i) => (
            <button
              key={job.company}
              onClick={() => setActive(i)}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: active === i ? "var(--black)" : "var(--gray)",
                background: "none",
                border: "none",
                borderBottom: `2px solid ${active === i ? "var(--black)" : "transparent"}`,
                paddingBottom: 14,
                marginBottom: -1,
                cursor: "pointer",
                transition: "color 0.2s, border-color 0.2s",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
              }}
            >
              {job.company}
            </button>
          ))}
        </motion.div>

        {/* Job detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="grid md:grid-cols-12 gap-12">
              {/* Left */}
              <div className="md:col-span-4">
                <h3
                  className="font-bold mb-2"
                  style={{ fontSize: "clamp(20px, 2.5vw, 26px)", color: "var(--black)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                >
                  {j.role}
                </h3>
                <div style={{ fontSize: 15, fontWeight: 600, color: j.accent, marginBottom: 4 }}>
                  {j.company}
                </div>
                <div className="section-label mb-6">
                  {j.period ? `${j.period} · ${j.type}` : j.type}
                </div>
                <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.65, marginBottom: 20 }}>
                  {j.tagline}
                </p>
                <div
                  style={{
                    padding: "12px 16px",
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 13,
                    color: "var(--charcoal)",
                    lineHeight: 1.6,
                    fontWeight: 500,
                    marginBottom: 24,
                  }}
                >
                  {j.impact}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {j.stack.map((t) => (
                    <span key={t} className="pill" style={{ fontSize: 11, padding: "3px 10px" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="md:col-span-8">
                <p className="section-label mb-6">Achievements</p>
                <div className="flex flex-col">
                  {j.highlights.map((h, idx) => (
                    <motion.div
                      key={idx}
                      className="flex gap-4 py-5"
                      style={{
                        borderBottom: idx < j.highlights.length - 1 ? "1px solid var(--border)" : "none",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.06 }}
                    >
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: "var(--gray-light)",
                          flexShrink: 0,
                          marginTop: 10,
                        }}
                      />
                      <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.7 }}>{h}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
