"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

function Counter({ to, prefix = "", suffix = "", duration = 2 }: { to: number; prefix?: string; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="stat-number number-highlight">
      {prefix}{val.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { prefix: "$", value: 11, suffix: "M+", label: "Cost Savings", sublabel: "at Intel via yield optimization" },
  { prefix: "", value: 200, suffix: "+", label: "NPI Launches", sublabel: "end-to-end product deliveries" },
  { prefix: "", value: 99, suffix: "%", label: "Yield Achieved", sublabel: "NPI → High Volume Production" },
  { prefix: "", value: 60, suffix: "%", label: "Efficiency Gain", sublabel: "at John Deere via automation" },
];

export default function StatsBand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section
      style={{ background: "var(--dark-bg)" }}
      aria-label="Key metrics"
    >
      <div className="container section-sm" ref={containerRef}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div style={{ overflow: "hidden" }}>
            <motion.div
              className="section-label"
              style={{ color: "rgba(255,255,255,0.35)" }}
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
            >
              Impact by the numbers
            </motion.div>
          </div>
          <motion.div
            style={{
              height: 1,
              flex: 1,
              background: "rgba(255,255,255,0.08)",
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 + 0.2 }}
              className="py-4 md:border-r"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                paddingRight: i < stats.length - 1 ? "40px" : "0",
                paddingLeft: i > 0 ? "40px" : "0",
              }}
            >
              <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              <div
                className="mt-3 font-semibold"
                style={{ color: "var(--white)", fontSize: 16 }}
              >
                {s.label}
              </div>
              <div
                className="mt-1"
                style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, lineHeight: 1.5 }}
              >
                {s.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
