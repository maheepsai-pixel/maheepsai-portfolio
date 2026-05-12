"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

export default function Contact() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Hi Maheepsai,\n\nFrom: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.open(`mailto:maheepsaij@gmail.com?subject=${encodeURIComponent("Portfolio Inquiry")}&body=${body}`, "_blank");
  };

  return (
    <section
      id="contact"
      style={{ background: "var(--dark-bg)" }}
      aria-label="Contact"
    >
      <div className="container section">
        {/* Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div style={{ overflow: "hidden" }}>
              <motion.p
                className="section-label"
                style={{ color: "rgba(255,255,255,0.35)" }}
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE }}
              >
                Get In Touch
              </motion.p>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                className="display-md mt-2"
                style={{ color: "var(--white)" }}
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
              >
                Let&apos;s Build
                <br />
                <em style={{ fontStyle: "italic" }}>Something Great</em>
              </motion.h2>
            </div>
          </div>
          <motion.p
            className="body-lg max-w-xs"
            style={{ color: "rgba(255,255,255,0.45)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Open to product management, data analytics, and engineering leadership opportunities.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          >
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "maheepsaij@gmail.com",
                  href: "mailto:maheepsaij@gmail.com",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                  label: "LinkedIn",
                  value: "maheep-j-1b3406185",
                  href: "https://www.linkedin.com/in/maheep-j-1b3406185/",
                },
                {
                  icon: (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "513-954-3525",
                  href: "tel:+15139543525",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.6)",
                      transition: "background 0.2s, color 0.2s",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>
                      {item.label}
                    </div>
                    <div
                      style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", fontWeight: 500, transition: "color 0.2s" }}
                      className="group-hover:text-white"
                    >
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="divider-dark" />
            <div className="flex items-center gap-3 mt-6">
              <div style={{ fontSize: 20 }}>📍</div>
              <div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em" }}>Location</div>
                <div style={{ fontSize: 15, color: "rgba(255,255,255,0.7)" }}>Cincinnati, Ohio, USA</div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {[
              { key: "name", label: "Full Name", placeholder: "Your full name", type: "text" },
              { key: "email", label: "Email", placeholder: "your@email.com", type: "email" },
              { key: "company", label: "Company (optional)", placeholder: "Where do you work?", type: "text" },
            ].map((f) => (
              <div key={f.key}>
                <label style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  required={f.key !== "company"}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 8,
                    color: "white",
                    fontSize: 14,
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                />
              </div>
            ))}
            <div>
              <label style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about the opportunity..."
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                  color: "white",
                  fontSize: 14,
                  outline: "none",
                  resize: "none",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                background: "var(--white)",
                color: "var(--black)",
                fontWeight: 700,
                fontSize: 14,
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                transition: "opacity 0.2s, transform 0.2s",
                letterSpacing: "0.02em",
              }}
            >
              Send Message →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
