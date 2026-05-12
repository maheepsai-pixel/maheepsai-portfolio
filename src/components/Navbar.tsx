"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Story", href: "#story" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: scrolled ? "rgba(247,246,242,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid #E0DDD7" : "1px solid transparent",
          transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div className="container flex items-center justify-between h-16">
          <a
            href="#hero"
            className="font-extrabold text-lg tracking-tight"
            style={{ color: "var(--black)", letterSpacing: "-0.03em", textDecoration: "none" }}
          >
            MJ<span style={{ color: "var(--gray-light)" }}>.</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-item">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/maheep-j-1b3406185/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: "9px 20px", fontSize: "13px" }}
            >
              LinkedIn
            </a>
            <a
              href="#contact"
              className="btn-dark"
              style={{ padding: "9px 20px", fontSize: "13px" }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-px bg-black"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-px bg-black"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-px bg-black"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 border-b"
            style={{
              background: "rgba(247,246,242,0.97)",
              backdropFilter: "blur(20px)",
              borderColor: "var(--border)",
            }}
          >
            <div className="container py-6 flex flex-col gap-5">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className="nav-item text-lg font-semibold"
                  style={{ color: "var(--black)" }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="flex gap-3 pt-2">
                <a href="https://www.linkedin.com/in/maheep-j-1b3406185/" target="_blank" rel="noopener noreferrer" className="btn-outline">LinkedIn</a>
                <a href="#contact" className="btn-dark" onClick={() => setMenuOpen(false)}>Hire Me</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
