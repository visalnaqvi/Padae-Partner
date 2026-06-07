import FileTextIcon from "@/components/icons/FileTextIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import AimIcon from "@/components/icons/AimIcon";
import SmileIcon from "@/components/icons/SmileIcon";
import DashboardIcon from "@/components/icons/DashboardIcon";
import RiseIcon from "@/components/icons/RiseIcon";

const cards = [
  {
    Icon: FileTextIcon,
    color: "#f05252",
    bg: "#fde8e8",
    title: "Understand Exam Pattern",
    desc: "Experience the actual CUET environment.",
  },
  {
    Icon: ClockIcon,
    color: "#0e9f6e",
    bg: "#def7ec",
    title: "Improve Time Management",
    desc: "Learn to complete the paper within time.",
  },
  {
    Icon: AimIcon,
    color: "#9061f9",
    bg: "#edebfe",
    title: "Identify Weak Topics",
    desc: "Find subjects & chapters that need improvement.",
  },
  {
    Icon: SmileIcon,
    color: "#e3a008",
    bg: "#fdf6b2",
    title: "Reduce Exam Anxiety",
    desc: "Build confidence through regular practice.",
  },
  {
    Icon: DashboardIcon,
    color: "#ff8a4c",
    bg: "#feecdc",
    title: "Increase Accuracy",
    desc: "Learn from mistakes and improve score.",
  },
  {
    Icon: RiseIcon,
    color: "#f43f5e",
    bg: "#fce7ec",
    title: "Track Progress",
    desc: "Measure improvement after every test.",
  },
];

export default function WhySection() {
  return (
    <section className="mt-why-section">
      <div className="mt-why-header">
        <h2 className="mt-why-heading">
          Why Every CUET Topper Takes Mock Tests
        </h2>
      </div>

      <div className="mt-why-grid">
        {cards.map(({ Icon, color, bg, title, desc }) => (
          <div className="mt-why-card" key={title}>
            <div className="mt-why-icon-circle" style={{ background: bg }}>
              <Icon style={{ fontSize: 26, color }} />
            </div>
            <h3 className="mt-why-card-title">{title}</h3>
            <p className="mt-why-card-desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
