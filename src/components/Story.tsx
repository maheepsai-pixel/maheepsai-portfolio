"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const NAVY = "#0c0d18";
const NAVY2 = "#10111f";
const TERRA = "#c4644a";
const TERRA_DIM = "rgba(196,100,74,0.15)";
const TERRA_BORDER = "rgba(196,100,74,0.3)";

const metrics = [
  { value: "$11M+", label: "Cost savings via wafer scrap reduction" },
  { value: "200+", label: "New products from NPI through HVM" },
  { value: "99%", label: "Yield achieved NPI to High Volume Production" },
];

const stack = [
  "SQL", "Tableau", "Python", "ETL", "DOE",
  "8D Analysis", "Agile", "PLM", "ANOVA", "Root Cause Analysis",
];

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="story" ref={ref} aria-label="Intel Role">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "30% 42% 28%",
          minHeight: "100vh",
          width: "100%",
        }}
        className="flex-none"
      >
        {/* Panel 1 — heading */}
        <motion.div
          style={{
            background: NAVY,
            padding: "clamp(56px,7vw,88px) clamp(32px,4vw,56px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRight: "1px solid rgba(255,255,255,0.07)",
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.28)",
                marginBottom: 28,
              }}
            >
              Current Role
            </p>

            <div style={{ overflow: "hidden", marginBottom: 6 }}>
              <motion.h2
                style={{
                  fontSize: "clamp(48px,6vw,96px)",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  lineHeight: 0.88,
                  color: "#FFFFFF",
                }}
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
              >
                At
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                style={{
                  fontSize: "clamp(48px,6vw,96px)",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  lineHeight: 0.88,
                  color: TERRA,
                  fontStyle: "italic",
                  marginBottom: 32,
                }}
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.85, ease: EASE, delay: 0.18 }}
              >
                Intel
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "5px 14px",
                  background: TERRA_DIM,
                  border: `1px solid ${TERRA_BORDER}`,
                  borderRadius: 100,
                  fontSize: 11,
                  fontWeight: 600,
                  color: TERRA,
                  letterSpacing: "0.03em",
                  marginBottom: 16,
                }}
              >
                New Product Manager
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
                2024 – Present · Full-time
              </p>
            </motion.div>
          </div>

          {/* Location tag at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 24 }} />
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", lineHeight: 1.6 }}>
              Semiconductor manufacturing · NPI to HVM · Arizona, USA
            </p>
          </motion.div>
        </motion.div>

        {/* Panel 2 — narrative */}
        <motion.div
          style={{
            background: NAVY2,
            padding: "clamp(56px,7vw,88px) clamp(32px,4vw,56px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRight: "1px solid rgba(255,255,255,0.07)",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: EASE, delay: 0.2 }}
        >
          <div>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.28)",
                marginBottom: 28,
              }}
            >
              The Work
            </p>

            <p
              style={{
                fontSize: "clamp(16px,1.7vw,19px)",
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              At Intel, everything converged. As New Product Manager, I own the
              end-to-end delivery of 200+ semiconductor products through the
              complete NPI lifecycle — from initial planning and cross-functional
              alignment through High Volume Production.
            </p>
            <p
              style={{
                fontSize: "clamp(14px,1.5vw,17px)",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.85,
                marginBottom: 24,
              }}
            >
              The role demands a rare combination: engineering precision for
              process analysis, data fluency for SQL pipelines and Tableau
              dashboards, and leadership for daily Scrum standups and complex
              vendor negotiations — all in the same week.
            </p>
            <p
              style={{
                fontSize: "clamp(14px,1.5vw,17px)",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.85,
              }}
            >
              The headline result: $11M+ in estimated savings from wafer scrap
              reduction alone — achieved through systematic 8D root cause
              analysis, DOE experiments, and vendor management programs that
              eliminated failure modes at semiconductor scale.
            </p>
          </div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                marginBottom: 14,
              }}
            >
              Tools & Methods
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {stack.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: "4px 12px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 100,
                    fontSize: 11,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Panel 3 — metrics */}
        <motion.div
          style={{
            background: "#0e0a08",
            padding: "clamp(56px,7vw,88px) clamp(28px,3.5vw,48px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
        >
          <p
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.28)",
            }}
          >
            Key Results
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {metrics.map((m, i) => (
              <div
                key={m.value}
                style={{
                  padding: "28px 0",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(32px,3.5vw,52px)",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    color: i === 0 ? TERRA : "#FFFFFF",
                    marginBottom: 8,
                  }}
                >
                  {m.value}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.35)",
                    lineHeight: 1.55,
                    letterSpacing: "0.01em",
                  }}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <motion.a
            href="#experience"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              fontWeight: 600,
              color: TERRA,
              textDecoration: "none",
              borderBottom: `1px solid ${TERRA_BORDER}`,
              paddingBottom: 4,
              alignSelf: "flex-start",
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Full experience
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Mobile fallback — stacked panels */}
      <style>{`
        @media (max-width: 768px) {
          #story > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
