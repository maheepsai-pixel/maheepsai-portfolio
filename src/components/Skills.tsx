"use client";

const skillGroups = [
  {
    category: "Data & Analytics",
    icon: "📊",
    skills: [
      { name: "SQL", level: 95 },
      { name: "Python", level: 90 },
      { name: "Tableau", level: 92 },
      { name: "Power BI", level: 85 },
      { name: "Amazon Redshift", level: 88 },
      { name: "SPOTFIRE", level: 82 },
    ],
  },
  {
    category: "Statistical Tools",
    icon: "🔬",
    skills: [
      { name: "JMP", level: 90 },
      { name: "STATISTICA", level: 85 },
      { name: "DOE", level: 92 },
      { name: "ANOVA", level: 90 },
      { name: "SPC", level: 88 },
      { name: "Matplotlib", level: 85 },
    ],
  },
  {
    category: "Project Management",
    icon: "🎯",
    skills: [
      { name: "Agile / Scrum", level: 95 },
      { name: "Jira", level: 90 },
      { name: "PLM", level: 85 },
      { name: "Waterfall", level: 88 },
      { name: "8D Analysis", level: 85 },
      { name: "FM Analysis", level: 80 },
    ],
  },
  {
    category: "Engineering",
    icon: "⚙️",
    skills: [
      { name: "ETL", level: 85 },
      { name: "Pandas", level: 88 },
      { name: "NPI", level: 92 },
      { name: "KPI Management", level: 90 },
      { name: "Root Cause Analysis", level: 92 },
      { name: "Predictive Maintenance", level: 82 },
    ],
  },
];

const allSkills = [
  "Python", "SQL", "Tableau", "Power BI", "Amazon Redshift", "JMP", "STATISTICA",
  "SPOTFIRE", "Matplotlib", "Pandas", "DOE", "ANOVA", "SPC", "Agile", "Scrum",
  "Jira", "PLM", "ETL", "8D Analysis", "NPI", "Vendor Management", "KPI",
  "Root Cause Analysis", "Data Wrangling", "Data Visualization", "Waterfall",
  "Control Charts", "Yield Improvement", "Predictive Maintenance", "FM Analysis",
];

function Bar({ level, delay = 0 }: { level: number; delay?: number }) {
  return (
    <div className="w-full bg-[rgba(99,102,241,0.1)] rounded-full h-1.5 overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000"
        style={{
          width: `${level}%`,
          background: "linear-gradient(90deg, #6366f1, #a78bfa)",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto" aria-label="Skills">
      <p className="section-label">Skills & Expertise</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        My Technical <span className="gradient-text">Toolkit</span>
      </h2>
      <p className="text-[#8888a8] mb-12 max-w-xl">
        A blend of data engineering, statistical analysis, and product management skills refined
        across Intel, Moderna, and John Deere.
      </p>

      {/* Skill group cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {skillGroups.map((group, gi) => (
          <div key={group.category} className="card p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{group.icon}</span>
              <h3 className="font-semibold text-white">{group.category}</h3>
            </div>
            <div className="space-y-4">
              {group.skills.map((s, si) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#c4c4e0]">{s.name}</span>
                    <span className="text-[#6366f1] font-medium">{s.level}%</span>
                  </div>
                  <Bar level={s.level} delay={gi * 100 + si * 50} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* All skills pills */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">All Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {allSkills.map((s) => (
            <span key={s} className="skill-pill">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
