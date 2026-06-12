"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const NAVY = "#1a1208";
const CREAM = "#F0ECE4";
const TERRA = "#c4644a";

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
              <p style={{ fontSize: 13, fontWeight: 700, color: TERRA, letterSpacing: "0.01em", marginBottom: 8 }}>
                New Product Introduction Engineer
              </p>
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
              Semiconductor manufacturing · NPI to HVM · Dallas, Texas
            </p>
          </motion.div>
        </motion.div>

        {/* Panel 2 — narrative (cream) */}
        <motion.div
          style={{
            background: CREAM,
            padding: "clamp(56px,7vw,88px) clamp(32px,4vw,56px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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
                color: "rgba(12,13,24,0.45)",
                marginBottom: 28,
              }}
            >
              The Work
            </p>

            <p
              style={{
                fontSize: "clamp(16px,1.7vw,19px)",
                color: "rgba(12,13,24,0.88)",
                lineHeight: 1.7,
                marginBottom: 28,
              }}
            >
              End-to-end owner of semiconductor products through the complete
              NPI lifecycle — planning to High Volume Production.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { k: "$11M+ saved", v: "Wafer scrap reduction via 8D root cause analysis & DOE" },
                { k: "200+ products", v: "Delivered from NPI through High Volume Production" },
                { k: "99% yield", v: "Sustained from ramp to high volume" },
                { k: "Data-driven", v: "SQL pipelines & Tableau dashboards for factory KPIs" },
                { k: "Leadership", v: "Daily Scrum, cross-functional alignment, vendor management" },
              ].map((b) => (
                <div
                  key={b.k}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "130px 1fr",
                    gap: 16,
                    padding: "14px 0",
                    borderTop: "1px solid rgba(12,13,24,0.1)",
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#c4644a", letterSpacing: "-0.01em" }}>
                    {b.k}
                  </span>
                  <span style={{ fontSize: 13.5, color: "rgba(12,13,24,0.65)", lineHeight: 1.55 }}>
                    {b.v}
                  </span>
                </div>
              ))}
            </div>
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
                color: "rgba(12,13,24,0.4)",
                marginBottom: 14,
              }}
            >
              Tools & Methods
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {stack.map((s, i) => (
                <span key={s} style={{ fontSize: 12, fontWeight: 500, color: "rgba(12,13,24,0.55)" }}>
                  {s}
                  {i < stack.length - 1 ? (
                    <span style={{ margin: "0 6px", opacity: 0.4 }}>·</span>
                  ) : null}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Panel 3 — metrics (terracotta) */}
        <motion.div
          style={{
            background: TERRA,
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
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Key Results
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {metrics.map((m) => (
              <div
                key={m.value}
                style={{
                  padding: "28px 0",
                  borderTop: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(32px,3.5vw,52px)",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    color: "#FFFFFF",
                    marginBottom: 8,
                  }}
                >
                  {m.value}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.75)",
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
            href="#project-qp"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              fontWeight: 700,
              color: "#FFFFFF",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.4)",
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
