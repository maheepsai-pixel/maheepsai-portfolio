"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const NAVY = "#0c0d18";
const CREAM = "#F0ECE4";

const groups = [
  {
    title: "Data & Analytics",
    desc: "Turning raw data into executive-ready insights",
    skills: ["SQL", "Python", "Tableau", "Power BI", "Amazon Redshift", "SPOTFIRE", "Matplotlib", "Pandas"],
    bg: NAVY,
    fg: "#FFFFFF",
    fgDim: "rgba(255,255,255,0.38)",
    border: "rgba(255,255,255,0.07)",
    pillBg: "rgba(255,255,255,0.08)",
    pillFg: "rgba(255,255,255,0.65)",
    pillBorder: "rgba(255,255,255,0.12)",
  },
  {
    title: "Statistical Engineering",
    desc: "Rigorous methods for complex manufacturing processes",
    skills: ["JMP", "STATISTICA", "DOE", "ANOVA", "SPC", "Control Charts", "6-Sigma"],
    bg: CREAM,
    fg: "#0D0D0D",
    fgDim: "rgba(0,0,0,0.45)",
    border: "rgba(0,0,0,0.08)",
    pillBg: "rgba(0,0,0,0.05)",
    pillFg: "rgba(0,0,0,0.65)",
    pillBorder: "rgba(0,0,0,0.12)",
  },
  {
    title: "Product Leadership",
    desc: "End-to-end ownership from NPI to high-volume production",
    skills: ["Agile / Scrum", "Jira", "PLM", "Waterfall", "8D Analysis", "FM Analysis", "Root Cause Analysis"],
    bg: NAVY,
    fg: "#FFFFFF",
    fgDim: "rgba(255,255,255,0.38)",
    border: "rgba(255,255,255,0.07)",
    pillBg: "rgba(255,255,255,0.08)",
    pillFg: "rgba(255,255,255,0.65)",
    pillBorder: "rgba(255,255,255,0.12)",
  },
  {
    title: "Engineering Systems",
    desc: "Building the infrastructure that makes operations hum",
    skills: ["ETL Pipelines", "NPI Management", "KPI Dashboards", "Vendor Management", "Predictive Maintenance", "REST API"],
    bg: CREAM,
    fg: "#0D0D0D",
    fgDim: "rgba(0,0,0,0.45)",
    border: "rgba(0,0,0,0.08)",
    pillBg: "rgba(0,0,0,0.05)",
    pillFg: "rgba(0,0,0,0.65)",
    pillBorder: "rgba(0,0,0,0.12)",
  },
];

function SkillGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        width: "100%",
      }}
    >
      {groups.map((g, i) => (
        <motion.div
          key={g.title}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
          style={{
            background: g.bg,
            padding: "clamp(36px,4vw,56px) clamp(24px,3vw,40px)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            borderRight: i < groups.length - 1 ? `1px solid ${g.border}` : "none",
          }}
        >
          {/* Accent line */}
          <div
            style={{
              width: 28,
              height: 2,
              background: g.fg,
              opacity: 0.35,
              borderRadius: 1,
              flexShrink: 0,
            }}
          />

          <div>
            <h3
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: g.fg,
                letterSpacing: "-0.01em",
                marginBottom: 8,
              }}
            >
              {g.title}
            </h3>
            <p style={{ fontSize: 13, color: g.fgDim, lineHeight: 1.6 }}>{g.desc}</p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", columnGap: 14, rowGap: 6 }}>
            {g.skills.map((s) => (
              <span
                key={s}
                style={{ fontSize: 12, fontWeight: 500, color: g.fgDim }}
              >
                {s}
              </span>
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
        <div
          ref={titleRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
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
            Built across Intel and DRDO — refined by real-world manufacturing
            stakes.
          </motion.p>
        </div>
      </div>

      {/* Full-bleed panel grid — no container padding */}
      <SkillGrid />
    </section>
  );
}
