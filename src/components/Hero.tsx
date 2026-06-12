"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;
const TERRA = "#c4644a";

function ClipReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`clip-wrap ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative"
      style={{ minHeight: "100svh", overflow: "hidden" }}
      aria-label="Hero"
    >
      <div className="hero-split">
        {/* Left — Main content */}
        <motion.div
          className="hero-left"
          style={{ opacity }}
        >
          {/* Nav spacer */}
          <div style={{ height: 80 }} />

          {/* Top bar */}
          <div className="hero-top-bar">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gray)",
              }}
            >
              Portfolio 2025
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: EASE }}
              style={{ height: 1, background: "var(--border)", flex: 1, transformOrigin: "left" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2"
              style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gray)" }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "pulse 2s infinite" }} />
              Open to Work
            </motion.div>
          </div>

          {/* Name block */}
          <div className="hero-name-block">
            <ClipReveal delay={0.15}>
              <div className="hero-firstname">Maheepsai</div>
            </ClipReveal>
            <ClipReveal delay={0.25}>
              <div className="hero-lastname">Jinka</div>
            </ClipReveal>
          </div>

          {/* Role + description */}
          <div className="hero-info-row">
            <motion.div
              className="hero-role-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <div style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: TERRA,
                marginBottom: 12,
              }}>
                Current Role
              </div>
              <div style={{
                fontSize: "clamp(16px,1.4vw,20px)",
                fontWeight: 600,
                color: "var(--black)",
                lineHeight: 1.4,
                marginBottom: 8,
              }}>
                New Product Introduction Engineer
              </div>
              <div style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.6 }}>
                at Intel Corporation · Dallas, Texas
              </div>
            </motion.div>

            <motion.div
              className="hero-desc-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.75, marginBottom: 24 }}>
                Turning complex semiconductor manufacturing challenges into{" "}
                <strong style={{ color: "var(--black)", fontWeight: 600 }}>$11M+ in cost savings</strong> and{" "}
                <strong style={{ color: "var(--black)", fontWeight: 600 }}>200+ products</strong> launched
                from NPI through High Volume Production.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#story" className="btn-dark">
                  View Work
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#contact" className="btn-outline">Get In Touch</a>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="hero-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div style={{
              width: 22, height: 36,
              border: "1.5px solid var(--border)",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              paddingTop: 7,
            }}>
              <motion.div
                style={{ width: 2.5, height: 5, background: "var(--black)", borderRadius: 1 }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gray-light)" }}>
              Scroll
            </span>
          </motion.div>
        </motion.div>

        {/* Right — Accent panel */}
        <motion.div
          className="hero-right"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
        >
          {/* Decorative grid */}
          <div className="hero-right-grid" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                style={{
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.03 }}
              />
            ))}
          </div>

          <div className="hero-right-content">
            {/* Top label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Impact at Scale
            </motion.div>

            {/* Big number */}
            <div>
              <ClipReveal delay={0.7}>
                <div style={{
                  fontSize: "clamp(72px,10vw,140px)",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  lineHeight: 0.85,
                  color: "#FFFFFF",
                }}>
                  $11M
                </div>
              </ClipReveal>
              <ClipReveal delay={0.8}>
                <div style={{
                  fontSize: "clamp(14px,1.2vw,18px)",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.55)",
                  marginTop: 16,
                  lineHeight: 1.6,
                }}>
                  in cost savings from wafer scrap
                  <br />
                  reduction at semiconductor scale
                </div>
              </ClipReveal>
            </div>

            {/* Bottom stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              style={{ display: "flex", gap: "clamp(24px,3vw,48px)" }}
            >
              {[
                { value: "200+", label: "Products" },
                { value: "99%", label: "Yield" },
                { value: "5+", label: "Years" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{
                    fontSize: "clamp(24px,2.5vw,36px)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "#FFFFFF",
                    lineHeight: 1,
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: 6,
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-split {
          display: grid;
          grid-template-columns: 58% 42%;
          min-height: 100svh;
        }
        .hero-left {
          background: var(--bg);
          padding: 0 clamp(32px,4vw,64px);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .hero-top-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 28px 0;
        }
        .hero-name-block {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2vh 0;
        }
        .hero-firstname {
          font-size: clamp(52px, 8.5vw, 130px);
          font-weight: 800;
          letter-spacing: -0.045em;
          line-height: 0.88;
          color: var(--black);
        }
        .hero-lastname {
          font-size: clamp(52px, 8.5vw, 130px);
          font-weight: 800;
          letter-spacing: -0.045em;
          line-height: 0.88;
          color: transparent;
          -webkit-text-stroke: 2px var(--black);
        }
        .hero-info-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(24px,3vw,48px);
          padding-bottom: clamp(24px,3vh,40px);
          border-top: 1px solid var(--border);
          padding-top: clamp(20px,2.5vh,32px);
        }
        .hero-scroll {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: clamp(20px,3vh,36px);
        }
        .hero-right {
          background: #1a1208;
          position: relative;
          overflow: hidden;
        }
        .hero-right-grid {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(4, 1fr);
          pointer-events: none;
        }
        .hero-right-content {
          position: relative;
          z-index: 1;
          height: 100%;
          padding: clamp(40px,5vw,80px) clamp(32px,4vw,56px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (max-width: 900px) {
          .hero-split {
            grid-template-columns: 1fr;
          }
          .hero-right {
            min-height: 50vh;
          }
          .hero-info-row {
            grid-template-columns: 1fr;
          }
          .hero-name-block {
            padding: 4vh 0;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
