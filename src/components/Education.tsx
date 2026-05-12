"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const NAVY = "#0c0d18";
const TERRA = "#c4644a";

const competencies = [
  "Design of Experiments",
  "Statistical Process Control",
  "Process Engineering",
  "Project Management",
  "Materials Science",
  "Data-Driven Decisions",
  "Cross-Functional Leadership",
  "Systems Engineering",
];

export default function Education() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="education" aria-label="Education">
      {/* Header — light background */}
      <div style={{ background: "var(--bg-alt)" }}>
        <div className="container" style={{ paddingTop: "clamp(64px,8vw,120px)", paddingBottom: 56 }}>
          <div ref={titleRef}>
            <div style={{ overflow: "hidden" }}>
              <motion.p
                className="section-label"
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE }}
              >
                Education & Awards
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
                Academic <em style={{ fontStyle: "italic" }}>Foundation</em>
              </motion.h2>
            </div>
          </div>
        </div>
      </div>

      {/* Two-panel dark row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "100%",
        }}
      >
        {/* Degree */}
        <motion.div
          style={{
            background: NAVY,
            padding: "clamp(48px,6vw,80px) clamp(36px,5vw,72px)",
            borderRight: "1px solid rgba(255,255,255,0.07)",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE, delay: 0.2 }}
        >
          <p
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.28)",
              marginBottom: 28,
            }}
          >
            Dec 2022
          </p>
          <h3
            style={{
              fontSize: "clamp(22px,2.8vw,36px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#FFFFFF",
              marginBottom: 10,
            }}
          >
            Master of Engineering
          </h3>
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "rgba(255,255,255,0.55)",
              marginBottom: 4,
            }}
          >
            Mechanical Engineering
          </p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.28)", marginBottom: 32 }}>
            University of Cincinnati, Ohio
          </p>

          <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 28 }} />

          <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
            <span
              style={{
                padding: "6px 16px",
                borderRadius: 100,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                fontSize: 13,
                fontWeight: 700,
                color: "#FFFFFF",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              GPA 3.5 / 4.0
            </span>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.65 }}>
              Specialisation in statistical methods, manufacturing systems, and
              data-driven engineering.
            </p>
          </div>
        </motion.div>

        {/* Scholarship */}
        <motion.div
          style={{
            background: "#100e0c",
            padding: "clamp(48px,6vw,80px) clamp(36px,5vw,72px)",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE, delay: 0.32 }}
        >
          <p
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.28)",
              marginBottom: 28,
            }}
          >
            2021 – 2022
          </p>
          <h3
            style={{
              fontSize: "clamp(22px,2.8vw,36px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#FFFFFF",
              marginBottom: 10,
            }}
          >
            International Outreach Scholarship
          </h3>
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "rgba(255,255,255,0.55)",
              marginBottom: 4,
            }}
          >
            College of Engineering
          </p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.28)", marginBottom: 32 }}>
            University of Cincinnati
          </p>

          <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 28 }} />

          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.75 }}>
            Awarded for academic excellence among top international students —
            this scholarship funded the move from India to the US and set the
            stage for everything that followed.
          </p>
        </motion.div>
      </div>

      {/* Competencies — cream strip */}
      <motion.div
        style={{
          background: "#F0ECE4",
          padding: "clamp(48px,5vw,72px) clamp(36px,5vw,72px)",
        }}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: EASE, delay: 0.44 }}
      >
        <p
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.35)",
            marginBottom: 28,
          }}
        >
          Core Competencies
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px 40px",
          }}
        >
          {competencies.map((c) => (
            <div key={c} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.35)",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 13, color: "rgba(0,0,0,0.6)", lineHeight: 1.4 }}>
                {c}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #education > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #education > div:last-child > div:last-child { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
