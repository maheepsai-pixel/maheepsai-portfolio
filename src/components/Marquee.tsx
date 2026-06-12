const items = [
  "Intel", "DRDO", "Python", "SQL", "Tableau",
  "DOE", "ANOVA", "Amazon Redshift", "NPI Engineer", "Agile",
  "Data Analytics", "Manufacturing", "Power BI", "JMP", "ETL", "Scrum",
  "Semiconductor", "Yield", "8D Analysis", "React", "TypeScript",
  "PostgreSQL", "Supabase", "Socket.IO", "Docker",
];

export default function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div
      className="marquee-container"
      style={{
        background: "var(--bg-alt)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "16px 0",
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0,
              paddingRight: 0,
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "var(--gray)",
                letterSpacing: "0.02em",
                padding: "0 24px",
              }}
            >
              {item}
            </span>
            <span style={{ color: "var(--border)", fontSize: 18, lineHeight: 1 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
