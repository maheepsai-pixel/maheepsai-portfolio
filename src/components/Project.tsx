"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const TERRA = "#c4644a";
const CREAM = "#F0ECE4";
const NAVY = "#1a1208";

const stages = [
  {
    num: "01",
    label: "Ingest",
    title: "REST API",
    sub: "Sensor telemetry · backpressure · retries",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
        <path d="M16 8v16" />
        <path d="M9 14c2 0 3-1 3-3s-1-3-3-3" opacity={0.7} />
        <path d="M23 14c-2 0-3-1-3-3s1-3 3-3" opacity={0.7} />
        <path d="M6 18c4 0 6-2 6-6" opacity={0.4} />
        <path d="M26 18c-4 0-6-2-6-6" opacity={0.4} />
        <circle cx="16" cy="26" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "Transform",
    title: "Python ETL",
    sub: "Pandas pipelines · type checks · validation",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="8" height="8" rx="1" />
        <rect x="18" y="6" width="8" height="8" rx="1" />
        <rect x="6" y="18" width="8" height="8" rx="1" />
        <rect x="18" y="18" width="8" height="8" rx="1" />
        <path d="M14 10h4" />
        <path d="M22 14v4" />
        <path d="M14 22h4" opacity={0.5} />
        <path d="M10 14v4" opacity={0.5} />
      </svg>
    ),
  },
  {
    num: "03",
    label: "Compute",
    title: "SPC Engine",
    sub: "Control charts · Cp/Cpk · Western Electric",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22l5-7 5 4 6-9 4 6 4-3" />
        <line x1="4" y1="6" x2="28" y2="6" opacity={0.3} strokeDasharray="2 2" />
        <line x1="4" y1="26" x2="28" y2="26" opacity={0.3} strokeDasharray="2 2" />
        <circle cx="9" cy="15" r="1.5" fill="currentColor" />
        <circle cx="14" cy="19" r="1.5" fill="currentColor" />
        <circle cx="20" cy="10" r="1.5" fill={TERRA} stroke={TERRA} />
        <circle cx="24" cy="16" r="1.5" fill="currentColor" />
        <circle cx="28" cy="13" r="1.5" fill="currentColor" />
      </svg>
    ),
    highlight: true,
  },
  {
    num: "04",
    label: "Store",
    title: "PostgreSQL",
    sub: "Time-series tables · analytical queries",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
        <ellipse cx="16" cy="8" rx="10" ry="3" />
        <path d="M6 8v8c0 1.7 4.5 3 10 3s10-1.3 10-3V8" />
        <path d="M6 16v8c0 1.7 4.5 3 10 3s10-1.3 10-3v-8" />
      </svg>
    ),
  },
  {
    num: "05",
    label: "Surface",
    title: "Live Dashboard",
    sub: "Yield · scrap drilldowns · alerts",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="18" rx="1.5" />
        <path d="M4 11h24" />
        <rect x="8" y="14" width="3" height="7" fill="currentColor" opacity={0.7} />
        <rect x="13" y="16" width="3" height="5" fill="currentColor" opacity={0.7} />
        <rect x="18" y="13" width="3" height="8" fill="currentColor" opacity={0.7} />
        <rect x="23" y="15" width="3" height="6" fill="currentColor" opacity={0.7} />
        <circle cx="6.5" cy="8.5" r="0.7" fill="currentColor" />
        <circle cx="9" cy="8.5" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
];

const features = [
  {
    label: "Realtime",
    title: "Event-driven ingestion",
    body: "REST producers stream sensor telemetry with retry and backpressure.",
  },
  {
    label: "Statistics",
    title: "On-the-fly SPC",
    body: "Cp, Cpk, and Western Electric rules computed as events land.",
  },
  {
    label: "Insight",
    title: "Yield & scrap drilldowns",
    body: "Slice metrics by lot, material, machine, and shift in seconds.",
  },
];

const stack = ["Python", "Pandas", "PostgreSQL", "REST API", "Docker", "Tableau", "SPC", "8D Analysis"];

export default function Project() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="project" ref={ref} aria-label="Featured Project">
      {/* Header — cream */}
      <div style={{ background: CREAM }}>
        <div className="container" style={{ paddingTop: "clamp(64px,8vw,120px)", paddingBottom: 56 }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div style={{ overflow: "hidden" }}>
                <motion.p
                  className="section-label"
                  initial={{ y: "110%" }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  Featured Build · Open Source
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
                  Manufacturing
                  <br />
                  Execution <em style={{ fontStyle: "italic" }}>System</em>
                </motion.h2>
              </div>
            </div>
            <motion.a
              href="https://github.com/maheepsai-pixel/MES"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              View on GitHub
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.4-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55C20.21 21.4 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>

      {/* About — dark navy strip */}
      <div style={{ background: NAVY, paddingTop: "clamp(48px,5vw,72px)", paddingBottom: "clamp(48px,5vw,72px)" }}>
        <div className="container">
          <motion.div
            style={{ maxWidth: 820 }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          >
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", marginBottom: 20 }}>
              About the build
            </p>
            <p
              style={{
                fontSize: "clamp(20px,1.9vw,26px)",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: 1.45,
                letterSpacing: "-0.015em",
                marginBottom: 20,
              }}
            >
              An open-source Manufacturing Execution System for tracking
              production lines, computing SPC metrics, and surfacing yield and
              scrap analytics in real time.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Production data lands via REST, flows through a Python/Pandas
              pipeline, persists in PostgreSQL, and surfaces in a live dashboard.
              Containerised with Docker and instrumented end to end.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Architecture — dark navy */}
      <div style={{ background: "#120c06", paddingTop: "clamp(56px,6vw,88px)", paddingBottom: "clamp(56px,6vw,88px)" }}>
        <div className="container">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
              Data Flow Architecture
            </p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "ui-monospace, SFMono-Regular, monospace" }}>
              sensor → api → etl → db → ui
            </p>
          </div>

          {/* Stages grid */}
          <div className="arch-grid">
            {stages.map((s, i) => (
              <motion.div
                key={s.num}
                className="arch-cell"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE, delay: 0.25 + i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span style={{ fontSize: 10, fontWeight: 700, color: s.highlight ? TERRA : "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>
                    {s.num}
                  </span>
                  <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: s.highlight ? TERRA : "rgba(255,255,255,0.35)" }}>
                    {s.label}
                  </span>
                </div>

                <div
                  style={{
                    width: 56,
                    height: 56,
                    color: s.highlight ? TERRA : "#FFFFFF",
                    opacity: s.highlight ? 1 : 0.92,
                    marginBottom: 20,
                  }}
                >
                  {s.icon}
                </div>

                <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.01em", marginBottom: 6 }}>
                  {s.title}
                </div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                  {s.sub}
                </p>

                {/* Connector arrow */}
                {i < stages.length - 1 && (
                  <motion.div
                    className="arch-arrow"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.35 + i * 0.1 }}
                  >
                    <svg width="100%" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="92" y2="5" stroke={TERRA} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                      <polyline points="88,2 94,5 88,8" stroke={TERRA} strokeWidth="1" fill="none" opacity="0.8" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Features row */}
          <div className="feat-grid" style={{ marginTop: 64 }}>
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                className="feat-cell"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
              >
                <p style={{ fontSize: 10, fontWeight: 600, color: TERRA, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>
                  {f.label}
                </p>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", marginBottom: 10, letterSpacing: "-0.01em" }}>
                  {f.title}
                </div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                  {f.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stack list */}
          <motion.div
            style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <div className="flex items-baseline gap-8 flex-wrap">
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
                Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", columnGap: 18, rowGap: 8 }}>
                {stack.map((s) => (
                  <span key={s} style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .arch-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
        }
        .arch-cell {
          position: relative;
          padding: 32px 28px;
          border: 1px solid rgba(255,255,255,0.08);
          margin-left: -1px;
          margin-top: -1px;
        }
        .arch-arrow {
          position: absolute;
          right: -12px;
          top: 60px;
          width: 24px;
          height: 10px;
          z-index: 2;
          transform-origin: left;
        }
        .feat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .feat-cell {
          padding: 28px 0 0 24px;
          border-left: 1px solid rgba(255,255,255,0.1);
        }
        @media (max-width: 900px) {
          .arch-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .arch-arrow { display: none !important; }
          .feat-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 560px) {
          .arch-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
