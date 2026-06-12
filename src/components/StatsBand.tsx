"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;
const TERRA = "#c4644a";

const stats = [
  { value: "$11M+", label: "Cost Savings", detail: "Wafer scrap reduction" },
  { value: "200+", label: "Products Launched", detail: "NPI to HVM pipeline" },
  { value: "99%", label: "Yield Achieved", detail: "High volume production" },
  { value: "5+", label: "Years of Impact", detail: "Semiconductor manufacturing" },
];

export default function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} id="stats-band" aria-label="Impact statistics">
      <div className="stats-strip">
        {stats.map((s, i) => (
          <motion.div
            key={s.value}
            className="stats-strip-cell"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 + i * 0.08 }}
          >
            <div className="stats-strip-value">{s.value}</div>
            <div className="stats-strip-label">{s.label}</div>
            <div className="stats-strip-detail">{s.detail}</div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #111110;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .stats-strip-cell {
          padding: clamp(32px,4vw,56px) clamp(20px,2.5vw,40px);
          border-right: 1px solid rgba(255,255,255,0.06);
          position: relative;
        }
        .stats-strip-cell:last-child {
          border-right: none;
        }
        .stats-strip-value {
          font-size: clamp(32px, 4vw, 56px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #FFFFFF;
          margin-bottom: 12px;
        }
        .stats-strip-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${TERRA};
          margin-bottom: 6px;
        }
        .stats-strip-detail {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .stats-strip {
            grid-template-columns: repeat(2, 1fr);
          }
          .stats-strip-cell:nth-child(2) {
            border-right: none;
          }
          .stats-strip-cell:nth-child(1),
          .stats-strip-cell:nth-child(2) {
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
        }
      `}</style>
    </section>
  );
}
