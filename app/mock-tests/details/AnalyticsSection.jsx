import AimIcon from "@/components/icons/AimIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import TrophyIcon from "@/components/icons/TrophyIcon";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import WarningIcon from "@/components/icons/WarningIcon";

const subjects = [
  { name: "Physics", pct: 82, color: "#3b82f6", bg: "#dbeafe", initial: "P" },
  { name: "Chemistry", pct: 71, color: "#f97316", bg: "#ffedd5", initial: "C" },
  { name: "Biology", pct: 88, color: "#22c55e", bg: "#dcfce7", initial: "B" },
  { name: "English", pct: 79, color: "#8b5cf6", bg: "#ede9fe", initial: "E" },
];

const stats = [
  {
    Icon: AimIcon,
    color: "#2f7d62",
    bg: "#def7ec",
    value: "76%",
    label: "Accuracy Rate",
    tag: "Good",
  },
  {
    Icon: ClockIcon,
    color: "#3b82f6",
    bg: "#dbeafe",
    value: "01:32:45",
    label: "Time Used",
    tag: null,
  },
  {
    Icon: TrophyIcon,
    color: "#ef9b2d",
    bg: "#fdf6b2",
    value: "1243",
    label: "Rank Estimate",
    tag: null,
  },
];

const strongTopics = [
  "Organic Chemistry",
  "Cell Biology",
  "Plant Physiology",
  "Reading Comprehension",
];

const weakTopics = [
  "Current Electricity",
  "Chemical Bonding",
  "Human Physiology",
  "Grammar Rules",
];

// Performance trend points (score out of 700) across 6 tests
const trend = [420, 470, 510, 560, 630, 685];
const TREND_MAX = 700;

function buildChart() {
  const W = 600;
  const H = 200;
  const padX = 40;
  const padTop = 24;
  const baseline = 168;
  const usableW = W - padX * 2;
  const usableH = baseline - padTop;

  const points = trend.map((v, i) => {
    const x = padX + (usableW / (trend.length - 1)) * i;
    const y = baseline - (v / TREND_MAX) * usableH;
    return { x, y, v };
  });

  const linePath = points.map((p) => `${p.x},${p.y}`).join(" ");
  const areaPath =
    `${padX},${baseline} ` +
    points.map((p) => `${p.x},${p.y}`).join(" ") +
    ` ${W - padX},${baseline}`;

  return { W, H, baseline, points, linePath, areaPath };
}

export default function AnalyticsSection() {
  const chart = buildChart();

  return (
    <section className="mt-analytics-section" aria-label="Performance analysis dashboard">
      <div className="mt-analytics-header">
        <p className="mt-analytics-eyebrow">Analytics Dashboard</p>
        <h2 className="mt-analytics-heading">Know Exactly Where You Stand</h2>
        <p className="mt-analytics-sub">
          Detailed analysis to help you identify strengths and weaknesses.
        </p>
      </div>

      <div className="mt-dash">
        {/* Top: subject performance + stats */}
        <div className="mt-dash-top">
          <div className="mt-dash-card mt-dash-subjects">
            <p className="mt-dash-card-title">Subject Performance</p>
            <div className="mt-subject-list">
              {subjects.map((s) => (
                <div className="mt-subject-row" key={s.name}>
                  <span
                    className="mt-subject-badge"
                    style={{ background: s.bg, color: s.color }}
                  >
                    {s.initial}
                  </span>
                  <span className="mt-subject-name">{s.name}</span>
                  <div className="mt-subject-track">
                    <div
                      className="mt-subject-fill"
                      style={{ width: `${s.pct}%`, background: s.color }}
                    />
                  </div>
                  <span className="mt-subject-pct">{s.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-dash-stats">
            {stats.map((st) => (
              <div className="mt-stat-card" key={st.label}>
                <span
                  className="mt-stat-icon"
                  style={{ background: st.bg, color: st.color }}
                >
                  <st.Icon style={{ fontSize: 18 }} />
                </span>
                <div className="mt-stat-info">
                  <strong className="mt-stat-value">{st.value}</strong>
                  <span className="mt-stat-label">{st.label}</span>
                </div>
                {st.tag && <span className="mt-stat-tag">{st.tag}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Strong / Weak topics */}
        <div className="mt-dash-topics">
          <div className="mt-topic-card mt-topic-strong">
            <p className="mt-topic-title">
              <CheckCircleIcon style={{ color: "#2f7d62" }} /> Strong Topics
            </p>
            <div className="mt-topic-tags">
              {strongTopics.map((t) => (
                <span className="mt-topic-tag mt-topic-tag-strong" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-topic-card mt-topic-weak">
            <p className="mt-topic-title">
              <WarningIcon style={{ color: "#d8422f" }} /> Weak Topics
            </p>
            <div className="mt-topic-tags">
              {weakTopics.map((t) => (
                <span className="mt-topic-tag mt-topic-tag-weak" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Performance trend */}
        <div className="mt-dash-card mt-dash-trend">
          <div className="mt-trend-head">
            <p className="mt-dash-card-title">Performance Trend</p>
            <span className="mt-trend-badge">All Tests</span>
          </div>
          <div className="mt-trend-chart">
            <svg
              viewBox={`0 0 ${chart.W} ${chart.H}`}
              preserveAspectRatio="none"
              className="mt-trend-svg"
              role="img"
              aria-label="Score improving across six tests"
            >
              <defs>
                <linearGradient id="mtTrendFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="mtTrendLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>

              {/* horizontal gridlines */}
              {[0.25, 0.5, 0.75].map((g) => (
                <line
                  key={g}
                  x1="40"
                  x2={chart.W - 40}
                  y1={24 + (chart.baseline - 24) * g}
                  y2={24 + (chart.baseline - 24) * g}
                  stroke="#eef0f4"
                  strokeWidth="1"
                />
              ))}

              <polygon points={chart.areaPath} fill="url(#mtTrendFill)" />
              <polyline
                points={chart.linePath}
                fill="none"
                stroke="url(#mtTrendLine)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {chart.points.map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r="5.5" fill="#ffffff" stroke="#8b5cf6" strokeWidth="3" />
                  <text x={p.x} y={p.y - 14} className="mt-trend-val">
                    {p.v}
                  </text>
                </g>
              ))}
            </svg>
            <div className="mt-trend-axis">
              {trend.map((_, i) => (
                <span key={i}>Test {i + 1}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
