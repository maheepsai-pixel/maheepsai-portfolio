"use client";

const metrics = [
  { value: "$11M+", label: "Cost Savings at Intel", icon: "💰" },
  { value: "200+", label: "New Products Launched", icon: "🚀" },
  { value: "99%", label: "Yield Rate Achieved", icon: "📈" },
  { value: "60%", label: "Efficiency Improvement", icon: "⚡" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto" aria-label="About Maheepsai Jinka">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <p className="section-label">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Engineering + Data +{" "}
            <span className="gradient-text">Leadership</span>
          </h2>
          <div className="space-y-4 text-[#8888a8] leading-relaxed">
            <p>
              I&apos;m a results-driven{" "}
              <strong className="text-white">New Product Manager at Intel</strong> with a Master&apos;s
              in Mechanical Engineering from the University of Cincinnati. I specialize in bridging
              the gap between complex manufacturing processes and data-driven decision making.
            </p>
            <p>
              With experience across{" "}
              <strong className="text-white">Intel, Moderna, John Deere, and DRDO</strong>, I&apos;ve
              consistently delivered measurable impact — from driving $11M in cost savings on wafer
              scraps to enabling a $322M facility transition at Moderna.
            </p>
            <p>
              My toolkit spans Python, SQL, Tableau, Amazon Redshift, JMP, Statistica, and Agile
              methodologies. I thrive at the intersection of engineering rigor and product strategy,
              turning complex data into actionable insights that move the needle.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="https://www.linkedin.com/in/maheep-j-1b3406185/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a href="mailto:maheepsaij@gmail.com" className="btn-secondary">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
          </div>
        </div>

        {/* Right: metrics grid */}
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="metric-card card-hover" style={{ transition: "transform 0.3s, box-shadow 0.3s" }}>
              <div className="text-3xl mb-2">{m.icon}</div>
              <div className="text-2xl font-bold gradient-text mb-1">{m.value}</div>
              <div className="text-sm text-[#8888a8]">{m.label}</div>
            </div>
          ))}
          {/* Extra card spanning full width */}
          <div
            className="col-span-2 metric-card"
            style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(56,189,248,0.08))" }}
          >
            <div className="text-3xl mb-2">🎓</div>
            <div className="text-base font-semibold text-white mb-1">
              M.Eng. Mechanical Engineering
            </div>
            <div className="text-sm text-[#8888a8]">University of Cincinnati · GPA 3.5/4.0 · 2022</div>
          </div>
        </div>
      </div>
    </section>
  );
}
