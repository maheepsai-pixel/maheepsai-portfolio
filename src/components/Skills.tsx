"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const groups = [
  {
    icon: "📊",
    title: "Data & Analytics",
    desc: "Turning raw data into executive-ready insights",
    skills: ["SQL", "Python", "Tableau", "Power BI", "Amazon Redshift", "SPOTFIRE", "Matplotlib", "Pandas"],
  },
  {
    icon: "🔬",
    title: "Statistical Engineering",
    desc: "Rigorous methods for complex manufacturing processes",
    skills: ["JMP", "STATISTICA", "DOE", "ANOVA", "SPC", "Control Charts", "6-Sigma"],
  },
  {
    icon: "🎯",
    title: "Product Leadership",
    desc: "End-to-end ownership from NPI to high-volume production",
    skills: ["Agile / Scrum", "Jira", "PLM", "Waterfall", "8D Analysis", "FM Analysis", "Root Cause Analysis"],
  },
  {
    icon: "⚙️",
    title: "Engineering Systems",
    desc: "Building the infrastructure that makes operations hum",
    skills: ["ETL Pipelines", "NPI Management", "KPI Dashboards", "Vendor Management", "Predictive Maintenance", "REST API"],
  },
];

function SkillGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
      {groups.map((g, i) => (
        <motion.div
          key={g.title}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
          style={{
            padding: "40px 32px",
            borderRight: i < groups.length - 1 ? "1px solid var(--border)" : "none",
            borderBottom: "1px solid var(--border)",
            borderTop: "1px solid var(--border)",
            borderLeft: i === 0 ? "1px solid var(--border)" : "none",
            transition: "background 0.3s ease",
            cursor: "default",
          }}
          whileHover={{ backgroundColor: "var(--bg)" }}
        >
          <div style={{ fontSize: 32, marginBottom: 16 }}>{g.icon}</div>
          <h3 className="font-bold mb-2" style={{ fontSize: 18, color: "var(--black)", letterSpacing: "-0.01em" }}>
            {g.title}
          </h3>
          <p style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.6, marginBottom: 20 }}>{g.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {g.skills.map((s) => (
              <span key={s} className="pill" style={{ fontSize: 11, padding: "3px 10px" }}>{s}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Skills() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="skills" style={{ background: "var(--white)" }} aria-label="Skills">
      <div className="container section">
        {/* Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div style={{ overflow: "hidden" }}>
              <motion.p
                className="section-label"
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE }}
              >
                Skills & Expertise
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
                The Technical
                <br />
                <em style={{ fontStyle: "italic" }}>Toolkit</em>
              </motion.h2>
            </div>
          </div>
          <motion.p
            className="body-lg max-w-xs"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Built across Intel, Moderna, John Deere, and DRDO — refined by real-world stakes.
          </motion.p>
        </div>

        {/* Feature grid — Flyhyer style */}
        <SkillGrid />
      </div>
    </section>
  );
}
