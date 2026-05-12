"use client";

import { useEffect, useState } from "react";

const roles = [
  "New Product Manager @ Intel",
  "Data Analytics Expert",
  "Manufacturing Engineer",
  "Program Manager",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient noise"
      aria-label="Hero"
    >
      {/* Background orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse-slow"
        style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 animate-pulse-slow"
        style={{ background: "radial-gradient(circle, #38bdf8, transparent)", animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(99,102,241,0.06)] animate-spin-slow"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[rgba(167,139,250,0.08)] animate-spin-slow"
        style={{ animationDirection: "reverse", animationDuration: "15s" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8 animate-fade-up"
          style={{
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.3)",
            color: "#a5b4fc",
            animationDelay: "0.1s",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to new opportunities
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 animate-fade-up"
          style={{ animationDelay: "0.2s", lineHeight: 1.1 }}
        >
          <span className="text-white">Maheepsai</span>{" "}
          <span className="gradient-text">Jinka</span>
        </h1>

        {/* Typewriter */}
        <div
          className="text-xl md:text-2xl font-medium text-[#8888a8] mb-6 h-8 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-[#a5b4fc]">{displayed}</span>
          <span className="animate-pulse text-[#6366f1]">|</span>
        </div>

        {/* Tagline */}
        <p
          className="text-lg text-[#8888a8] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Driving <span className="text-white font-semibold">$11M+ in cost savings</span> and launching{" "}
          <span className="text-white font-semibold">200+ new products</span> at Intel. Bridging
          data analytics, manufacturing engineering, and product strategy to deliver measurable impact.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a href="#experience" className="btn-primary">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </a>
        </div>

        {/* Quick stats */}
        <div
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { value: "$11M+", label: "Cost Savings" },
            { value: "200+", label: "NPI Launches" },
            { value: "99%", label: "Yield Achieved" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-[#8888a8] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8888a8] text-xs animate-fade-up">
        <span>Scroll</span>
        <div className="w-5 h-8 border border-[rgba(99,102,241,0.3)] rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-[#6366f1] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
