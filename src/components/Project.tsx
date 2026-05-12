"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const TERRA = "#c4644a";
const CREAM = "#F0ECE4";
const NAVY = "#1a1208";

const nodes = [
  { label: "Sensors", sub: "Floor IoT", x: 5, y: 50 },
  { label: "Ingestion", sub: "REST API", x: 25, y: 50 },
  { label: "ETL", sub: "Python · Pandas", x: 47, y: 50 },
  { label: "Database", sub: "PostgreSQL", x: 70, y: 50 },
  { label: "Dashboard", sub: "Tableau · Web", x: 92, y: 50 },
];

const stack = [
  "Python", "Pandas", "PostgreSQL", "REST API", "Docker",
  "Tableau", "SPC", "8D Analysis", "CI/CD",
];

const features = [
  {
    num: "01",
    title: "Real-time data ingestion",
    body: "REST endpoints accept sensor telemetry; producers stream events into the ETL pipeline with backpressure and retries.",
  },
  {
    num: "02",
    title: "Statistical Process Control",
    body: "Control charts compute Cp, Cpk, and Western Electric rules on the fly, flagging deviations the moment they appear.",
  },
  {
    num: "03",
    title: "Yield & scrap analytics",
    body: "DOE/ANOVA-style queries surface root causes across lots, materials, and machines — the same patterns that saved $11M+ at Intel.",
  },
];

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

      {/* Visualization — dark navy */}
      <div style={{ background: NAVY, position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ paddingTop: "clamp(56px,7vw,96px)", paddingBottom: "clamp(56px,7vw,96px)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(0,1.3fr)",
              gap: 56,
              alignItems: "start",
            }}
            className="project-grid"
          >
            {/* Left — about */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            >
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}>
                About the build
              </p>
              <h3
                style={{
                  fontSize: "clamp(20px,2vw,26px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.3,
                  color: "#FFFFFF",
                  marginBottom: 20,
                }}
              >
                A scaled-down MES mirroring the patterns I run at Intel.
              </h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 28 }}>
                Production data flows from simulated sensors through a Python/Pandas
                ETL pipeline into PostgreSQL, then surfaces as live SPC charts,
                yield breakdowns, and scrap-cause drilldowns in a Tableau-style
                dashboard.
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, marginBottom: 32 }}>
                Built to demonstrate the same end-to-end thinking — sensors to
                dashboards — that drove $11M+ in savings on real wafer lines.
              </p>

              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 12 }}>
                Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", columnGap: 16, rowGap: 8 }}>
                {stack.map((s, i) => (
                  <span key={s} style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.55)" }}>
                    {s}
                    {i < stack.length - 1 ? <span style={{ marginLeft: 16, opacity: 0.3 }}>·</span> : null}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right — architecture viz */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            >
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}>
                Data Flow Architecture
              </p>

              <div
                style={{
                  position: "relative",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "48px 32px",
                  minHeight: 280,
                }}
              >
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
                  {nodes.slice(0, -1).map((n, i) => {
                    const next = nodes[i + 1];
                    return (
                      <motion.line
                        key={i}
                        x1={n.x + 4}
                        y1={n.y}
                        x2={next.x - 4}
                        y2={next.y}
                        stroke={TERRA}
                        strokeWidth={0.3}
                        strokeDasharray="1 1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={inView ? { pathLength: 1, opacity: 0.6 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.15, ease: EASE }}
                      />
                    );
                  })}
                </svg>

                {nodes.map((n, i) => (
                  <motion.div
                    key={n.label}
                    style={{
                      position: "absolute",
                      left: `${n.x}%`,
                      top: `${n.y}%`,
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                    }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.12, ease: EASE }}
                  >
                    <div
                      style={{
                        width: 14,
                        height: 14,
                        background: i === 2 ? TERRA : "rgba(255,255,255,0.85)",
                        margin: "0 auto 12px",
                      }}
                    />
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#FFFFFF", marginBottom: 2 }}>
                      {n.label}
                    </div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.03em" }}>
                      {n.sub}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Feature blocks */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, marginTop: 32 }}>
                {features.map((f, i) => (
                  <motion.div
                    key={f.num}
                    style={{
                      padding: "20px 18px",
                      borderLeft: i === 0 ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.1)",
                      borderRight: i === features.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                      borderTop: "1px solid rgba(255,255,255,0.1)",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                  >
                    <div style={{ fontSize: 10, fontWeight: 700, color: TERRA, letterSpacing: "0.1em", marginBottom: 10 }}>
                      {f.num}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF", marginBottom: 8, lineHeight: 1.3 }}>
                      {f.title}
                    </div>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
                      {f.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #project .project-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #project [style*="grid-template-columns: 1fr 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
