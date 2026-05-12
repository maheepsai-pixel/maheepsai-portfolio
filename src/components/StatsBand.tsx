"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const stats = [
  {
    value: "$11M+",
    label: "Cost Savings",
    sublabel: "Wafer scrap reduction at Intel",
    bg: "#FFFFFF",
    fg: "#0D0D0D",
    fgDim: "rgba(0,0,0,0.055)",
    border: "1px solid rgba(0,0,0,0.07)",
  },
  {
    value: "200+",
    label: "Products Launched",
    sublabel: "End-to-end NPI deliveries",
    bg: "#1A1917",
    fg: "#FFFFFF",
    fgDim: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.07)",
  },
  {
    value: "99%",
    label: "Yield Achieved",
    sublabel: "NPI to High Volume Production",
    bg: "#F0EDE8",
    fg: "#0D0D0D",
    fgDim: "rgba(0,0,0,0.055)",
    border: "1px solid rgba(0,0,0,0.07)",
  },
  {
    value: "60%",
    label: "Efficiency Gain",
    sublabel: "John Deere automation",
    bg: "#111110",
    fg: "#FFFFFF",
    fgDim: "rgba(255,255,255,0.05)",
    border: "none",
  },
];

export default function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="stats-band" aria-label="Impact statistics">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "32% 17% 17% 17% 17%",
          minHeight: "85vh",
          width: "100%",
        }}
      >

        {/* Left — editorial text panel */}
        <div
          style={{
            background: "#111110",
            padding: "clamp(40px,6vw,72px) clamp(32px,4vw,56px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRight: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: EASE }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.28)",
                marginBottom: 28,
              }}
            >
              Impact by the Numbers
            </p>
            <h2
              style={{
                fontSize: "clamp(34px,4vw,64px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.92,
                color: "#FFFFFF",
              }}
            >
              Five years.
              <br />
              Four companies.
              <br />
              Real results.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.38)",
                lineHeight: 1.75,
                marginBottom: 36,
              }}
            >
              From DRDO to Intel — every number here represents a real process
              optimised, a product shipped, or a team led.
            </p>
            <a
              href="#story"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 600,
                color: "#FFFFFF",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.22)",
                paddingBottom: 4,
              }}
            >
              View the story
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* 4 stat panels */}
        {stats.map((s, i) => (
          <motion.div
            key={s.value}
            style={{
              background: s.bg,
              padding: "clamp(28px,3.5vw,44px) clamp(20px,2.5vw,36px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              borderRight: s.border,
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 + i * 0.1 }}
          >
            {/* Giant watermark number cropped by overflow:hidden */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                bottom: -16,
                left: -8,
                fontSize: "clamp(96px,13vw,180px)",
                fontWeight: 800,
                letterSpacing: "-0.06em",
                lineHeight: 0.82,
                color: s.fgDim,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {s.value}
            </div>

            {/* Top — sublabel */}
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: s.fg,
                opacity: 0.38,
                position: "relative",
                zIndex: 1,
              }}
            >
              {s.sublabel}
            </p>

            {/* Bottom — primary stat */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  fontSize: "clamp(36px,4.5vw,68px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: s.fg,
                  marginBottom: 6,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: s.fg,
                  opacity: 0.45,
                }}
              >
                {s.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
