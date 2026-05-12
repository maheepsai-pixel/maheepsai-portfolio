"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function ClipText({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div style={{ overflow: "hidden" }} ref={ref}>
      <motion.div
        initial={{ y: "110%" }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.75, ease: EASE, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

const chapters = [
  {
    num: "01",
    title: "The Foundation",
    location: "Hyderabad, India",
    period: "2020 – 2021",
    body: "My engineering journey began at the Defence Research and Development Organisation in India — one of the country's most prestigious research institutions. Here, I learned the fundamentals of precision: how small process improvements compound into massive outcomes. I increased plant production by 10% and cut inventory losses by 21% before I'd even completed my undergraduate degree. India taught me to solve complex problems with limited resources.",
    highlight: "10% production increase · 21% loss reduction",
    tags: ["DOE", "SPC", "ANOVA", "KPI Management"],
  },
  {
    num: "02",
    title: "Crossing Oceans",
    location: "Cincinnati, Ohio",
    period: "2021 – 2022",
    body: "Winning the International Outreach Scholarship at the University of Cincinnati's College of Engineering was a defining moment. I moved across the world with one bag and a clear mission: to become the kind of engineer who bridges data and decision-making. My Master's in Mechanical Engineering gave me the analytical vocabulary I needed — DOE, ANOVA, Six Sigma, statistical process control — to speak the language of manufacturing at scale.",
    highlight: "International Outreach Scholar · GPA 3.5/4.0",
    tags: ["Statistical Analysis", "DOE", "Systems Thinking"],
  },
  {
    num: "03",
    title: "First US Impact",
    location: "John Deere",
    period: "2022",
    body: "My first US role at John Deere put me in the driver's seat of automation. I built a test tool from scratch — pulling live data from web APIs into Python/Pandas pipelines, cleaning and analyzing it against benchmark values — that eliminated manual prototype inspection entirely. Engineers got 60% of their time back. That tool became a predictive maintenance platform. I learned that the best engineering is invisible: it just makes everyone else faster.",
    highlight: "60% efficiency improvement",
    tags: ["Python", "Pandas", "REST API", "Data Engineering"],
  },
  {
    num: "04",
    title: "Research at Scale",
    location: "Moderna",
    period: "2023 – 2024",
    body: "At Moderna, I operated inside a $322M facility transition — moving critical DNA manufacturing processes from Clinical Phase 3 to full commercial production. The stakes were immense. I implemented statistical control charts for every critical process parameter, ran DOE/ANOVA investigations, and built real-time turnaround dashboards in Tableau and Spotfire. This wasn't just engineering; it was enabling the future of medicine. I learned what it means to build processes that can't fail.",
    highlight: "$322M facility transition enabled",
    tags: ["Amazon Redshift", "JMP", "STATISTICA", "DOE", "Tableau"],
  },
  {
    num: "05",
    title: "Engineering at Intel Scale",
    location: "Intel Corporation",
    period: "2024 – Present",
    body: "Intel is where everything converged. Managing a team of module engineers, I now own the end-to-end delivery of 200+ new products — from NPI planning through High Volume Production. I estimated $11M in savings from wafer scrap reduction alone. I write SQL pipelines, build Tableau dashboards, run 8D failure analyses, lead daily Scrum standups, and navigate complex vendor relationships — all in the same week. Engineering, data, and leadership: finally unified.",
    highlight: "$11M+ savings · 200+ NPI · 99% yield",
    tags: ["SQL", "Tableau", "ETL", "Agile", "PLM", "8D Analysis"],
  },
];

type Chapter = typeof chapters[0];

function ChapterRow({ ch }: { ch: Chapter }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref}>
      <div
        className="grid md:grid-cols-12 gap-8 md:gap-12 py-12"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="md:col-span-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-label"
            style={{ color: "var(--gray-light)" }}
          >
            {ch.num}
          </motion.div>
        </div>

        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        >
          <div className="section-label mb-2" style={{ color: "var(--gray)" }}>
            {ch.location} · {ch.period}
          </div>
          <h3
            className="font-bold"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--black)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            {ch.title}
          </h3>
          <div
            className="mt-4 px-3 py-2 rounded-lg font-medium"
            style={{ background: "var(--bg)", border: "1px solid var(--border)", fontSize: 12, color: "var(--charcoal)", lineHeight: 1.5 }}
          >
            {ch.highlight}
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
        >
          <p className="body-lg mb-6" style={{ color: "var(--gray)" }}>{ch.body}</p>
          <div className="flex flex-wrap gap-2">
            {ch.tags.map((t) => <span key={t} className="pill">{t}</span>)}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Story() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="story" style={{ background: "var(--white)" }} aria-label="My Story">
      <div className="container section">
        {/* Section header */}
        <div ref={titleRef} className="flex items-end justify-between mb-20 flex-wrap gap-6">
          <div>
            <div style={{ overflow: "hidden" }}>
              <motion.p
                className="section-label"
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE }}
              >
                The Journey
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
                From Hyderabad
                <br />
                to <em style={{ fontStyle: "italic", fontWeight: 800 }}>Intel</em>
              </motion.h2>
            </div>
          </div>
          <motion.p
            className="body-lg max-w-sm"
            style={{ color: "var(--gray)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          >
            Five chapters. Four companies. One through-line: turning engineering precision into measurable human impact.
          </motion.p>
        </div>

        {/* Chapters */}
        <div className="flex flex-col gap-0">
          {chapters.map((ch) => (
            <ChapterRow key={ch.num} ch={ch} />
          ))}
        </div>
      </div>
    </section>
  );
}
