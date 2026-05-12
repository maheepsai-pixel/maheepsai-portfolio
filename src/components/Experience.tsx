"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const jobs = [
  {
    company: "Intel",
    role: "New Product Introduction Engineer",
    period: "",
    type: "Full-time",
    accent: "#c4644a",
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
            <div className="grid md:grid-cols-12 gap-x-12 gap-y-8">
              {/* Left — meta */}
              <div className="md:col-span-5">
                <div style={{ fontSize: 13, fontWeight: 700, color: j.accent, letterSpacing: "0.02em", marginBottom: 8 }}>
                  {j.company}
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: "clamp(22px, 2.4vw, 30px)", color: "var(--black)", letterSpacing: "-0.025em", lineHeight: 1.15 }}
                >
                  {j.role}
                </h3>
                <div className="section-label mb-6">
                  {j.period ? `${j.period} · ${j.type}` : j.type}
                </div>
                <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.7, marginBottom: 24 }}>
                  {j.tagline}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--black)",
                    fontWeight: 600,
                    lineHeight: 1.7,
                    marginBottom: 28,
                    borderLeft: `2px solid ${j.accent}`,
                    paddingLeft: 14,
                  }}
                >
                  {j.impact}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", columnGap: 18, rowGap: 8 }}>
                  {j.stack.map((t) => (
                    <span key={t} style={{ fontSize: 12, fontWeight: 500, color: "var(--gray)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — achievements */}
              <div className="md:col-span-7">
                <p className="section-label mb-6">Achievements</p>
                <div className="flex flex-col">
                  {j.highlights.map((h, idx) => (
                    <motion.div
                      key={idx}
                      className="flex gap-5 py-5"
                      style={{
                        borderBottom: idx < j.highlights.length - 1 ? "1px solid var(--border)" : "none",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.06 }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: j.accent,
                          flexShrink: 0,
                          minWidth: 24,
                          letterSpacing: "0.05em",
                          paddingTop: 4,
                        }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <p style={{ fontSize: 15, color: "var(--charcoal)", lineHeight: 1.7 }}>{h}</p>
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
