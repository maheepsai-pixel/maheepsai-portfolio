"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const competencies = [
  "Design of Experiments",
  "Statistical Process Control",
  "Process Engineering",
  "Project Management",
  "Materials Science",
  "Data-Driven Decisions",
  "Cross-Functional Leadership",
  "Systems Engineering",
];

export default function Education() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="education" style={{ background: "var(--bg-alt)" }} aria-label="Education">
      <div className="container section">
        <div ref={titleRef} className="mb-14">
          <div style={{ overflow: "hidden" }}>
            <motion.p
              className="section-label"
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
            >
              Education & Awards
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
              Academic <em style={{ fontStyle: "italic" }}>Foundation</em>
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Degree */}
          <motion.div
            className="card-white p-8"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            <div className="section-label mb-6">Dec 2022</div>
            <h3
              className="font-bold mb-1"
              style={{ fontSize: 22, color: "var(--black)", letterSpacing: "-0.02em" }}
            >
              Master of Engineering
            </h3>
            <p className="font-semibold mb-1" style={{ color: "var(--gray)", fontSize: 15 }}>
              Mechanical Engineering
            </p>
            <p style={{ color: "var(--gray-light)", fontSize: 13, marginBottom: 24 }}>
              University of Cincinnati, Ohio
            </p>
            <div className="divider" />
            <div className="flex items-center gap-4 mt-6">
              <span
                style={{
                  padding: "5px 14px",
                  borderRadius: 100,
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--charcoal)",
                  whiteSpace: "nowrap",
                }}
              >
                GPA 3.5 / 4.0
              </span>
              <p style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.55 }}>
                Specialisation in statistical methods, manufacturing systems, and data-driven engineering.
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
            <div className="section-label mb-6">2021 – 2022</div>
            <h3
              className="font-bold mb-1"
              style={{ fontSize: 22, color: "var(--black)", letterSpacing: "-0.02em" }}
            >
              International Outreach Scholarship
            </h3>
            <p className="font-semibold mb-1" style={{ color: "var(--gray)", fontSize: 15 }}>
              College of Engineering
            </p>
            <p style={{ color: "var(--gray-light)", fontSize: 13, marginBottom: 24 }}>
              University of Cincinnati
            </p>
            <div className="divider" />
            <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.7, marginTop: 24 }}>
              Awarded for academic excellence among top international students — this scholarship funded the move from India to the US and set the stage for everything that followed.
            </p>
          </motion.div>
        </div>

        {/* Competencies */}
        <motion.div
          className="card-white p-8"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.44 }}
        >
          <p className="section-label mb-8">Core Competencies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
            {competencies.map((c) => (
              <div
                key={c}
                className="flex items-center gap-3"
              >
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "var(--black)",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.4 }}>{c}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
