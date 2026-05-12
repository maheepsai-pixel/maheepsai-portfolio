"use client";

export default function Footer() {
  const links = {
    Navigation: [
      { label: "Story", href: "#story" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    Connect: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/maheep-j-1b3406185/" },
      { label: "Email", href: "mailto:maheepsai@gmail.com" },
      { label: "GitHub", href: "https://github.com/maheepsai-pixel" },
    ],
    Companies: [
      { label: "Intel", href: "https://www.intel.com" },
      { label: "DRDO", href: "https://www.drdo.gov.in" },
    ],
  };

  return (
    <footer style={{ background: "var(--dark-alt)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.04em",
                marginBottom: 12,
              }}
            >
              MJ<span style={{ color: "rgba(255,255,255,0.2)" }}>.</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>
              NPI Engineer & Data Analytics Expert.
              <br />
              Dallas, Texas — Open to opportunities.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  marginBottom: 16,
                }}
              >
                {cat}
              </div>
              <div className="flex flex-col gap-3">
                {items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="footer-link"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 py-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} Maheepsai Jinka. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
            Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
