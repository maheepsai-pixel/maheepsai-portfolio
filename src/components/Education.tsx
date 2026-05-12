"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

export default function Education() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="education" style={{ background: "var(--bg-alt)" }} aria-label="Education">
      <div className="container section">
        <div ref={titleRef} className="mb-14">
          <div style={{ overflow: "hidden" }}>
            <motion.p className="section-label" initial={{ y: "110%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.6, ease: EASE }}>
              Education & Awards
            </motion.p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2 className="display-md mt-2" style={{ color: "var(--black)" }} initial={{ y: "110%" }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}>
              Academic <em style={{ fontStyle: "italic" }}>Foundation</em>
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Degree */}
          <motion.div
            className="card-white p-8"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            <div className="flex items-start gap-5">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "var(--bg)" }}
              >
                🎓
              </div>
              <div>
                <div className="section-label mb-2">Dec 2022</div>
                <h3 className="font-bold mb-1" style={{ fontSize: 22, color: "var(--black)", letterSpacing: "-0.02em" }}>
                  Master of Engineering
                </h3>
                <p className="font-semibold mb-1" style={{ color: "var(--gray)", fontSize: 16 }}>
                  Mechanical Engineering
                </p>
                <p style={{ color: "var(--gray-light)", fontSize: 14 }}>
                  University of Cincinnati, Ohio
                </p>
              </div>
            </div>
            <div className="divider my-6" />
            <div className="flex items-center gap-4">
              <span
                className="px-3 py-1.5 rounded-full font-semibold"
                style={{ background: "var(--bg)", border: "1px solid var(--border)", fontSize: 13, color: "var(--charcoal)" }}
              >
                GPA: 3.5 / 4.0
              </span>
              <p style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.5 }}>
                Specialization in statistical methods, manufacturing systems, and data-driven engineering.
              </p>
            </div>
          </motion.div>

          {/* Scholarship */}
          <motion.div
            className="card-white p-8"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.32 }}
          >
            <div className="flex items-start gap-5">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "var(--bg)" }}
              >
                🏆
              </div>
              <div>
                <div className="section-label mb-2">2021 – 2022</div>
                <h3 className="font-bold mb-1" style={{ fontSize: 22, color: "var(--black)", letterSpacing: "-0.02em" }}>
                  International Outreach Scholarship
                </h3>
                <p className="font-semibold mb-1" style={{ color: "var(--gray)", fontSize: 16 }}>
                  College of Engineering
                </p>
                <p style={{ color: "var(--gray-light)", fontSize: 14 }}>
                  University of Cincinnati
                </p>
              </div>
            </div>
            <div className="divider my-6" />
            <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.65 }}>
              Awarded for academic excellence and contributions to the engineering community. Recognised among top international students — this scholarship funded the leap from India to the US and set the stage for everything that followed.
            </p>
          </motion.div>

          {/* Competencies band */}
          <motion.div
            className="card-white p-8 md:col-span-2"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.44 }}
          >
            <p className="section-label mb-6">Core Competencies Developed</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "📐", label: "Design of Experiments" },
                { icon: "📉", label: "Statistical Process Control" },
                { icon: "🔄", label: "Process Engineering" },
                { icon: "📋", label: "Project Management" },
                { icon: "🧪", label: "Materials Science" },
                { icon: "📊", label: "Data-Driven Decisions" },
                { icon: "🤝", label: "Cross-Functional Leadership" },
                { icon: "⚙️", label: "Systems Engineering" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span style={{ fontSize: 20 }}>{c.icon}</span>
                  <span style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.4 }}>{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
