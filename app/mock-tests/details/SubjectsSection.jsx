const subjects = [
  {
    icon: "📖",
    color: "#2f7d62",
    bg: "#def7ec",
    name: "English",
    desc: "Language, Comprehension, Vocabulary & more",
  },
  {
    icon: "⚛️",
    color: "#8b5cf6",
    bg: "#ede9fe",
    name: "Physics",
    desc: "Mechanics, Thermodynamics, Optics & more",
  },
  {
    icon: "🧪",
    color: "#f97316",
    bg: "#ffedd5",
    name: "Chemistry",
    desc: "Physical, Organic, Inorganic Chemistry & more",
  },
  {
    icon: "🌿",
    color: "#22c55e",
    bg: "#dcfce7",
    name: "Biology",
    desc: "Botany, Zoology, Biotechnology & more",
  },
  {
    icon: "📐",
    color: "#3b82f6",
    bg: "#dbeafe",
    name: "Mathematics",
    desc: "Algebra, Calculus, Geometry, Statistics & more",
  },
  {
    icon: "🧾",
    color: "#f05252",
    bg: "#fde8e8",
    name: "Accountancy",
    desc: "Financial Accounting, Analysis & more",
  },
  {
    icon: "📊",
    color: "#e3a008",
    bg: "#fdf6b2",
    name: "Economics",
    desc: "Microeconomics, Macroeconomics & more",
  },
  {
    icon: "💼",
    color: "#0ea5e9",
    bg: "#e0f2fe",
    name: "Business Studies",
    desc: "Management, Marketing, Finance & more",
  },
  {
    icon: "📋",
    color: "#9061f9",
    bg: "#edebfe",
    name: "General Test",
    desc: "Quantitative Aptitude, Reasoning, GK & more",
  },
];

export default function SubjectsSection() {
  return (
    <section className="mt-subjects-section" aria-label="Subjects covered">
      <div className="mt-subjects-header">
        <p className="mt-subjects-eyebrow">Subjects Covered</p>
        <h2 className="mt-subjects-heading">Mock Tests Available For</h2>
      </div>

      <div className="mt-subjects-grid">
        {subjects.map((s) => (
          <div className="mt-subject-card" key={s.name}>
            <span className="mt-subject-card-icon" style={{ background: s.bg }}>
              {s.icon}
            </span>
            <h3 className="mt-subject-card-name">{s.name}</h3>
            <p className="mt-subject-card-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
