"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const TERRA = "#c4644a";
const CREAM = "#F0ECE4";
const NAVY = "#0c0d18";

const modules = [
  {
    num: "01",
    label: "Operations",
    title: "WIP Board",
    sub: "Live Kanban tracking across stations",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="7" height="10" rx="1" />
        <rect x="13" y="4" width="7" height="14" rx="1" />
        <rect x="22" y="4" width="7" height="8" rx="1" />
        <rect x="4" y="16" width="7" height="6" rx="1" opacity={0.5} />
        <rect x="22" y="14" width="7" height="10" rx="1" opacity={0.5} />
      </svg>
    ),
  },
  {
    num: "02",
    label: "Assembly",
    title: "Build Stations",
    sub: "Operator login, variant selection, sign-off",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 26V14l10-8 10 8v12" />
        <path d="M6 26h20" />
        <rect x="12" y="18" width="8" height="8" rx="0.5" />
        <path d="M16 18v8" opacity={0.5} />
        <path d="M12 22h8" opacity={0.5} />
      </svg>
    ),
  },
  {
    num: "03",
    label: "Quality",
    title: "Inspection",
    sub: "Checklists, defect logging, rework queue",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="20" height="24" rx="1.5" />
        <path d="M11 12l2 2 5-5" />
        <path d="M11 20h10" opacity={0.5} />
        <path d="M11 24h6" opacity={0.5} />
      </svg>
    ),
    highlight: true,
  },
  {
    num: "04",
    label: "Analytics",
    title: "TAT Dashboard",
    sub: "Turn-around time, heatmaps, Pareto charts",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="10" />
        <path d="M16 10v6l4 3" />
        <path d="M22 6l2-2" opacity={0.4} />
        <path d="M10 6L8 4" opacity={0.4} />
      </svg>
    ),
  },
  {
    num: "05",
    label: "Traceability",
    title: "Serial & Labels",
    sub: "SerialForge, build sheets, shipping labels",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
        <rect x="5" y="8" width="22" height="16" rx="1.5" />
        <path d="M9 14v6" strokeWidth={2} />
        <path d="M12 14v6" strokeWidth={1} />
        <path d="M15 14v6" strokeWidth={2.5} />
        <path d="M18 14v6" strokeWidth={1} />
        <path d="M21 14v6" strokeWidth={1.5} />
        <path d="M24 14v6" strokeWidth={2} />
      </svg>
    ),
  },
];

const features = [
  {
    label: "Realtime",
    title: "Live WIP tracking",
    body: "Kanban board with Andon indicators, hold/release flows, and station-level visibility.",
  },
  {
    label: "Quality",
    title: "Full inspection loop",
    body: "Defect Pareto, rework queues, SOP management, and checklist builder for inspectors.",
  },
  {
    label: "Intelligence",
    title: "Factory analytics",
    body: "Operator performance scoring, queue health, heatmaps, and cumulative TAT trends.",
  },
];

const stack = ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "Playwright", "Vite"];

/* Real product screenshot — SPC process control */
function QPMockup({ inView }: { inView: boolean }) {
  return (
    <motion.div
      className="glossy"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
      style={{
        border: "1px solid rgba(12,13,24,0.14)",
        background: "#FFFFFF",
        boxShadow: "0 32px 80px rgba(12,13,24,0.18), 0 8px 28px rgba(196,100,74,0.12)",
      }}
    >
      {/* Caption bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", borderBottom: "1px solid rgba(12,13,24,0.08)" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(12,13,24,0.12)" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(12,13,24,0.12)" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(12,13,24,0.12)" }} />
        <span style={{ marginLeft: 12, fontSize: 10, color: "rgba(12,13,24,0.35)", fontFamily: "ui-monospace, SFMono-Regular, monospace" }}>
          quality-pilot — process control
        </span>
        <span style={{ marginLeft: "auto", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", color: TERRA }}>
          SPC · I-MR
        </span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/projects/mes-spc.png"
        alt="Quality Pilot process control — SPC I-MR control charts with Cpk, control limits, and out-of-spec tracking by operator"
        style={{ display: "block", width: "100%", height: "auto" }}
        loading="lazy"
      />
    </motion.div>
  );
}

/* Real product screenshot — efficiency analytics */
function QPEfficiency({ inView }: { inView: boolean }) {
  return (
    <motion.div
      className="glossy"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
      style={{
        border: "1px solid rgba(255,255,255,0.16)",
        background: "#FFFFFF",
        boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 12px 40px rgba(196,100,74,0.15)",
        maxWidth: 980,
        margin: "0 auto",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", borderBottom: "1px solid rgba(12,13,24,0.08)", background: "#FFFFFF" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(12,13,24,0.12)" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(12,13,24,0.12)" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(12,13,24,0.12)" }} />
        <span style={{ marginLeft: 12, fontSize: 10, color: "rgba(12,13,24,0.35)", fontFamily: "ui-monospace, SFMono-Regular, monospace" }}>
          quality-pilot — efficiency analytics
        </span>
        <span style={{ marginLeft: "auto", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", color: TERRA }}>
          LIVE · 5 MIN
        </span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/projects/mes-efficiency.png"
        alt="Quality Pilot efficiency analytics — daily efficiency trend, units completed, labor hours per unit, and performance targets"
        style={{ display: "block", width: "100%", height: "auto" }}
        loading="lazy"
      />
    </motion.div>
  );
}

export default function ProjectQP() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="project-qp" ref={ref} aria-label="Quality Pilot Project">
      {/* Header — terracotta */}
      <div style={{ background: TERRA }}>
        <div className="container" style={{ paddingTop: "clamp(64px,8vw,120px)", paddingBottom: 56 }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div style={{ overflow: "hidden" }}>
                <motion.p
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                  }}
                  initial={{ y: "110%" }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  Featured Build · Full-Stack App
                </motion.p>
              </div>
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  className="display-md mt-2"
                  style={{ color: "#FFFFFF" }}
                  initial={{ y: "110%" }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
                >
                  Quality
                  <br />
                  <em style={{ fontStyle: "italic" }}>Pilot</em>
                </motion.h2>
              </div>
            </div>
            <motion.a
              href="https://github.com/maheepsai-pixel/quality-pilot"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 22px",
                background: "#FFFFFF",
                color: TERRA,
                fontWeight: 700,
                fontSize: 13,
                border: "none",
                borderRadius: 2,
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
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

      {/* About — cream strip */}
      <div style={{ background: CREAM, paddingTop: "clamp(48px,5vw,72px)", paddingBottom: "clamp(48px,5vw,72px)" }}>
        <div className="container qp-about-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          >
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(12,13,24,0.4)", marginBottom: 20 }}>
              About the build
            </p>
            <p
              style={{
                fontSize: "clamp(20px,1.9vw,26px)",
                fontWeight: 600,
                color: "var(--black)",
                lineHeight: 1.45,
                letterSpacing: "-0.015em",
                marginBottom: 20,
              }}
            >
              A full-stack Quality Management System for assembly line
              operations — from operator workstations to factory-wide
              analytics.
            </p>
            <p style={{ fontSize: 15, color: "rgba(12,13,24,0.55)", lineHeight: 1.8 }}>
              Operators log into stations, build units with variant selection
              and sign-off workflows, while inspectors run checklists and
              route defects to rework queues. Managers monitor WIP boards,
              production orders, and TAT dashboards — all backed by
              Supabase with row-level security.
            </p>
          </motion.div>

          <QPMockup inView={inView} />
        </div>
      </div>

      {/* Modules — dark navy */}
      <div style={{ background: NAVY, paddingTop: "clamp(56px,6vw,88px)", paddingBottom: "clamp(56px,6vw,88px)" }}>
        <div className="container">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
              System Modules
            </p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "ui-monospace, SFMono-Regular, monospace" }}>
              wip → build → inspect → analyze → trace
            </p>
          </div>

          {/* Modules grid */}
          <div className="arch-grid">
            {modules.map((s, i) => (
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
                {i < modules.length - 1 && (
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

          {/* Efficiency analytics screenshot */}
          <div style={{ marginTop: 64 }}>
            <QPEfficiency inView={inView} />
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

          {/* Press mention — iMessage-style rich link */}
          <motion.div
            className="qp-press"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 1.2 }}
          >
            <div style={{ maxWidth: 420 }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: TERRA, marginBottom: 16 }}>
                In the Press
              </p>
              <p style={{ fontSize: "clamp(15px,1.4vw,17px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>
                Featured in Grit Daily — on why modern Manufacturing
                Execution Systems are the missing backbone of American
                manufacturing&rsquo;s comeback, and the engineering behind
                this build.
              </p>
            </div>

            <a
              href="https://gritdaily.com/missing-operating-system-behind-america-manufacturing/"
              target="_blank"
              rel="noopener noreferrer"
              className="press-card"
            >
              {/* Hero — article masthead + author photo */}
              <div className="press-card-hero" style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.24em", textTransform: "uppercase", color: TERRA, marginBottom: 14 }}>
                    Grit Daily
                  </p>
                  <p
                    style={{
                      fontSize: "clamp(16px,1.5vw,20px)",
                      fontWeight: 700,
                      fontStyle: "italic",
                      color: "#FFFFFF",
                      lineHeight: 1.35,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    The Missing Operating System Behind America&rsquo;s
                    Manufacturing
                  </p>
                  <div style={{ width: 36, height: 2, background: TERRA, marginTop: 16 }} />
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/projects/grit-feature.jpg"
                  alt="Maheepsai Jinka featured in Grit Daily"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                  style={{
                    width: 92,
                    height: 110,
                    objectFit: "cover",
                    objectPosition: "50% 12%",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.18)",
                    flexShrink: 0,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  }}
                  loading="lazy"
                />
              </div>
              {/* Meta strip — like iMessage */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "12px 16px",
                  background: "#f5f5f7",
                }}
              >
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#1d1d1f", marginBottom: 2 }}>
                    The Missing Operating System Behind America&rsquo;s Manufacturing
                  </div>
                  <div style={{ fontSize: 11, color: "#86868b" }}>gritdaily.com</div>
                </div>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#86868b" strokeWidth={2} style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .qp-about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px,4vw,64px);
          align-items: center;
        }
        .qp-press {
          margin-top: 64px;
          padding-top: 48px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(32px,5vw,72px);
        }
        @media (max-width: 900px) {
          .qp-about-grid { grid-template-columns: 1fr !important; }
          .qp-press { flex-direction: column; align-items: flex-start; gap: 28px; }
        }
      `}</style>
    </section>
  );
}
