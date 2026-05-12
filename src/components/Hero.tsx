"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

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
  // Subtle fade-only parallax — no y-shift so hero doesn't overlap sections below
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex flex-col justify-between"
      style={{
        minHeight: "100svh",
        background: "var(--bg)",
        paddingTop: "80px",
        overflow: "hidden",
      }}
      aria-label="Hero"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <motion.div
        className="relative z-10 container flex flex-col justify-center"
        style={{ flex: 1, paddingTop: "10vh", paddingBottom: "4vh", opacity }}
      >
        {/* Top label row */}
        <div className="flex items-center gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-label"
          >
            Product Manager · Data Analytics · Manufacturing
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            style={{ height: 1, background: "var(--border)", flex: 1, transformOrigin: "left" }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-2 section-label"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-green-500" style={{ animation: "pulse 2s infinite" }} />
            Available
          </motion.div>
        </div>

        {/* Name — giant */}
        <div>
          <ClipReveal delay={0.15}>
            <h1 className="display-xl" style={{ color: "var(--black)" }}>
              Maheepsai
            </h1>
          </ClipReveal>
          <ClipReveal delay={0.25}>
            <h1
              className="display-xl"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px var(--black)",
                letterSpacing: "-0.04em",
              }}
            >
              Jinka
            </h1>
          </ClipReveal>
        </div>

        {/* Divider */}
        <motion.div
          className="divider my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
          style={{ transformOrigin: "left" }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-md">
            <ClipReveal delay={0.4}>
              <p className="body-lg" style={{ color: "var(--gray)" }}>
                New Product Manager at Intel. Turning complex engineering
                challenges into <strong style={{ color: "var(--black)", fontWeight: 600 }}>$11M+ savings</strong> and{" "}
                <strong style={{ color: "var(--black)", fontWeight: 600 }}>200+ products</strong> launched.
              </p>
            </ClipReveal>

            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a href="#experience" className="btn-dark">
                View Work
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">Get In Touch</a>
            </motion.div>
          </div>

          {/* Quick facts */}
          <motion.div
            className="flex gap-10 md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { value: "Intel", sub: "Current Employer" },
              { value: "5+", sub: "Years of Impact" },
              { value: "4 ↑", sub: "Companies Scaled" },
            ].map((s) => (
              <div key={s.sub}>
                <div className="text-2xl font-bold tracking-tight" style={{ color: "var(--black)" }}>
                  {s.value}
                </div>
                <div className="section-label mt-1">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="container flex items-center gap-3 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ position: "relative", zIndex: 10 }}
      >
        <div
          style={{
            width: 32,
            height: 50,
            border: "1.5px solid var(--border)",
            borderRadius: 16,
            display: "flex",
            justifyContent: "center",
            paddingTop: 8,
          }}
        >
          <motion.div
            style={{ width: 4, height: 8, background: "var(--black)", borderRadius: 2 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="section-label">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
