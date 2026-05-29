import Image from "next/image";

function svgData(label, tone = "teal") {
  const palettes = {
    teal: ["#0b3f46", "#2f7d62", "#f7faf8"],
    coral: ["#10212b", "#d8422f", "#fff7ea"],
    gold: ["#15343d", "#ef9b2d", "#ffffff"],
  };
  const [dark, accent, light] = palettes[tone] || palettes.teal;
  const svg = `
    <svg width="640" height="420" viewBox="0 0 640 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="420" rx="20" fill="${light}"/>
      <rect x="34" y="34" width="572" height="352" rx="18" fill="${dark}"/>
      <circle cx="500" cy="118" r="62" fill="${accent}" opacity=".88"/>
      <rect x="76" y="96" width="268" height="24" rx="12" fill="#fff" opacity=".9"/>
      <rect x="76" y="144" width="412" height="18" rx="9" fill="#fff" opacity=".48"/>
      <rect x="76" y="184" width="356" height="18" rx="9" fill="#fff" opacity=".35"/>
      <rect x="76" y="250" width="112" height="70" rx="12" fill="${accent}"/>
      <rect x="212" y="226" width="112" height="94" rx="12" fill="#fff" opacity=".82"/>
      <rect x="348" y="202" width="112" height="118" rx="12" fill="#fff" opacity=".62"/>
      <text x="76" y="365" fill="#fff" font-family="Arial" font-size="28" font-weight="700">${label}</text>
    </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function PlaceholderImage({ label, tone = "teal", className = "" }) {
  return (
    <Image
      className={className}
      src={svgData(label, tone)}
      alt={label}
      width={640}
      height={420}
      loading="lazy"
    />
  );
}
