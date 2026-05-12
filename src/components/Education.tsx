export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto" aria-label="Education and Awards">
      <p className="section-label">Education & Achievements</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Academic <span className="gradient-text">Foundation</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Degree */}
        <div className="card p-8">
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: "rgba(99,102,241,0.15)" }}
            >
              🎓
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Master of Engineering
              </h3>
              <p className="text-[#a5b4fc] font-medium mb-2">Mechanical Engineering</p>
              <p className="text-[#8888a8] text-sm mb-4">
                University of Cincinnati, Cincinnati, Ohio
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-[rgba(99,102,241,0.1)] text-[#a5b4fc] border border-[rgba(99,102,241,0.2)]">
                  GPA: 3.5 / 4.0
                </span>
                <span className="px-3 py-1 rounded-full bg-[rgba(99,102,241,0.1)] text-[#a5b4fc] border border-[rgba(99,102,241,0.2)]">
                  Dec 2022
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[rgba(99,102,241,0.15)]">
            <p className="text-sm text-[#8888a8] leading-relaxed">
              Specialization in data-driven manufacturing, statistical process control, and
              engineering management. Coursework included DOE, ANOVA, Six Sigma, and advanced
              data analysis methodologies.
            </p>
          </div>
        </div>

        {/* Award */}
        <div className="card p-8">
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: "rgba(167,139,250,0.15)" }}
            >
              🏆
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">International Outreach Scholarship</h3>
              <p className="text-[#a5b4fc] font-medium text-sm mb-2">2021–2022 Academic Year</p>
              <p className="text-[#8888a8] text-sm">
                University of Cincinnati College of Engineering
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[rgba(99,102,241,0.15)]">
            <p className="text-sm text-[#8888a8] leading-relaxed">
              Awarded for academic excellence and contributions to the engineering community.
              Recognized among top international students at the College of Engineering.
            </p>
          </div>
        </div>

        {/* Key skills learned */}
        <div className="card p-8 md:col-span-2">
          <h3 className="text-base font-semibold text-white mb-4">Core Competencies Developed</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📐", label: "Design of Experiments" },
              { icon: "📉", label: "Statistical Process Control" },
              { icon: "🔄", label: "Process Engineering" },
              { icon: "📋", label: "Project Management" },
              { icon: "🧪", label: "Materials Science" },
              { icon: "📊", label: "Data-Driven Decision Making" },
              { icon: "🤝", label: "Cross-Functional Leadership" },
              { icon: "⚙️", label: "Systems Engineering" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2 text-sm text-[#8888a8]"
              >
                <span className="text-lg">{c.icon}</span>
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
