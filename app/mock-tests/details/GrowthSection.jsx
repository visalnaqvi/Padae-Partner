import TrophyIcon from "@/components/icons/TrophyIcon";
import RiseIcon from "@/components/icons/RiseIcon";
import LineChartIcon from "@/components/icons/LineChartIcon";
import AimIcon from "@/components/icons/AimIcon";

const attempts = [320, 402, 518, 612];
const MAX_SCORE = 800;

const growthStats = [
  {
    Icon: TrophyIcon,
    color: "#8b5cf6",
    bg: "#ede9fe",
    value: "612",
    suffix: "/800",
    label: "Highest Score",
  },
  {
    Icon: RiseIcon,
    color: "#2f7d62",
    bg: "#def7ec",
    value: "+292",
    suffix: null,
    label: "Score Improvement",
  },
  {
    Icon: LineChartIcon,
    color: "#f97316",
    bg: "#ffedd5",
    value: "463",
    suffix: "/800",
    label: "Average Score",
  },
  {
    Icon: AimIcon,
    color: "#3b82f6",
    bg: "#dbeafe",
    value: "4",
    suffix: null,
    label: "Tests Attempted",
  },
];

function buildChart() {
  const W = 540;
  const H = 230;
  const padLeft = 46;
  const padRight = 24;
  const padTop = 28;
  const baseline = 184;
  const usableW = W - padLeft - padRight;
  const usableH = baseline - padTop;
  const step = usableW / (attempts.length - 1);

  const points = attempts.map((v, i) => ({
    x: padLeft + step * i,
    y: baseline - (v / MAX_SCORE) * usableH,
    v,
  }));

  const linePath = points.map((p) => `${p.x},${p.y}`).join(" ");
  const areaPath =
    `${points[0].x},${baseline} ` +
    points.map((p) => `${p.x},${p.y}`).join(" ") +
    ` ${points[points.length - 1].x},${baseline}`;

  const yTicks = [800, 600, 400, 200, 0].map((val) => ({
    val,
    y: baseline - (val / MAX_SCORE) * usableH,
  }));

  return { W, H, padLeft, padRight, baseline, points, linePath, areaPath, yTicks };
}

export default function GrowthSection() {
  const chart = buildChart();

  return (
    <section className="mt-growth-section" aria-label="Performance comparison">
      <div className="mt-growth-header">
        <p className="mt-growth-eyebrow">Performance Comparison</p>
        <h2 className="mt-growth-heading">Track Your Growth Over Time</h2>
        <p className="mt-growth-sub">
          See measurable improvement with every mock test.
        </p>
      </div>

      <div className="mt-growth-grid">
        <div className="mt-growth-chart-card">
          <span className="mt-growth-chart-axis-label">Score</span>
          <svg
            viewBox={`0 0 ${chart.W} ${chart.H}`}
            className="mt-growth-svg"
            role="img"
            aria-label="Score improving across four attempts"
          >
            <defs>
              <linearGradient id="mtGrowthFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.26" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="mtGrowthLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>

            {chart.yTicks.map((t) => (
              <g key={t.val}>
                <line
                  x1={chart.padLeft}
                  x2={chart.W - chart.padRight}
                  y1={t.y}
                  y2={t.y}
                  stroke="#eef0f4"
                  strokeWidth="1"
                />
                <text x={chart.padLeft - 10} y={t.y + 4} className="mt-growth-ytick">
                  {t.val}
                </text>
              </g>
            ))}

            <polygon points={chart.areaPath} fill="url(#mtGrowthFill)" />
            <polyline
              points={chart.linePath}
              fill="none"
              stroke="url(#mtGrowthLine)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {chart.points.map((p, i) => (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r="5.5" fill="#ffffff" stroke="#8b5cf6" strokeWidth="3" />
                <text x={p.x} y={p.y - 14} className="mt-growth-val">
                  {p.v}
                </text>
              </g>
            ))}
          </svg>
          <div className="mt-growth-axis">
            {attempts.map((_, i) => (
              <span key={i}>Attempt {i + 1}</span>
            ))}
          </div>
        </div>

        <div className="mt-growth-stats">
          {growthStats.map((s) => (
            <div className="mt-growth-stat" key={s.label}>
              <span className="mt-growth-stat-icon" style={{ background: s.bg, color: s.color }}>
                <s.Icon style={{ fontSize: 18 }} />
              </span>
              <span className="mt-growth-stat-label">{s.label}</span>
              <strong className="mt-growth-stat-value" style={{ color: s.color }}>
                {s.value}
                {s.suffix && <span className="mt-growth-stat-suffix">{s.suffix}</span>}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
