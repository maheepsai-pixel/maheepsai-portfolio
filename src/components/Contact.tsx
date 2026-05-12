"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = encodeURIComponent(
      `Hi Maheepsai,\n\nName: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.open(
      `mailto:maheepsaij@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Inquiry")}&body=${body}`,
      "_blank"
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto" aria-label="Contact">
      <div className="text-center mb-12">
        <p className="section-label">Get In Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-[#8888a8] max-w-md mx-auto">
          Open to product management, data analytics, and engineering leadership roles. Let&apos;s
          talk about how I can add value to your team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Contact info */}
        <div className="space-y-6">
          {[
            {
              icon: (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              label: "Email",
              value: "maheepsaij@gmail.com",
              href: "mailto:maheepsaij@gmail.com",
            },
            {
              icon: (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
              label: "Phone",
              value: "513-954-3525",
              href: "tel:+15139543525",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              label: "Location",
              value: "Cincinnati, Ohio, USA",
              href: "#",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-4 card group"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-[#6366f1] group-hover:bg-[rgba(99,102,241,0.2)] transition-colors"
                style={{ background: "rgba(99,102,241,0.1)" }}
              >
                {item.icon}
              </div>
              <div>
                <div className="text-xs text-[#8888a8] mb-0.5">{item.label}</div>
                <div className="text-sm text-white font-medium">{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="card p-8 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {(["name", "email"] as const).map((field) => (
              <div key={field}>
                <label className="block text-xs text-[#8888a8] mb-1.5 capitalize">{field}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  required
                  placeholder={field === "name" ? "Your name" : "your@email.com"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none transition-colors"
                  style={{
                    background: "rgba(99,102,241,0.06)",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}
                />
              </div>
            ))}
          </div>
          <div>
            <label className="block text-xs text-[#8888a8] mb-1.5">Subject</label>
            <input
              type="text"
              placeholder="Portfolio Inquiry"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none"
              style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)" }}
            />
          </div>
          <div>
            <label className="block text-xs text-[#8888a8] mb-1.5">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about the opportunity or say hello..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none resize-none"
              style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)" }}
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            {sent ? "✓ Opening your email client..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
