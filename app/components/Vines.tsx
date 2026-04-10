"use client";
import { useEffect, useState } from "react";

export default function Vines() {
  const [progress, setProgress] = useState(0.45);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const raw = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(Math.max(raw, 0.45));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stem draws as you scroll: dashoffset goes from 1 → 0
  const stemOffset = 1 - progress;

  // Each leaf fades in when scroll passes its Y threshold (leaf_y / 900)
  function leafAlpha(y: number) {
    const threshold = y / 900;
    return Math.min(Math.max((progress - threshold) / 0.06, 0), 1);
  }

  const leftLeaves = [
    { cx: 24, cy: 90,  rx: 22, ry: 10, fill: "#527248", rot: -35 },
    { cx: 72, cy: 150, rx: 22, ry: 10, fill: "#87AC75", rot:  30 },
    { cx: 30, cy: 130, rx: 13, ry:  6, fill: "#A8C49A", rot: -20 },
    { cx: 20, cy: 210, rx: 24, ry: 11, fill: "#6B8F5E", rot: -25 },
    { cx: 76, cy: 275, rx: 24, ry: 11, fill: "#527248", rot:  35 },
    { cx: 66, cy: 240, rx: 13, ry:  6, fill: "#A8C49A", rot:  22 },
    { cx: 22, cy: 330, rx: 20, ry: 10, fill: "#527248", rot: -40 },
    { cx: 70, cy: 400, rx: 20, ry: 10, fill: "#6B8F5E", rot:  25 },
    { cx: 28, cy: 370, rx: 13, ry:  6, fill: "#A8C49A", rot: -18 },
    { cx: 18, cy: 460, rx: 23, ry: 11, fill: "#6B8F5E", rot: -30 },
    { cx: 74, cy: 525, rx: 23, ry: 11, fill: "#87AC75", rot:  32 },
    { cx: 68, cy: 500, rx: 13, ry:  6, fill: "#A8C49A", rot:  20 },
    { cx: 24, cy: 580, rx: 21, ry: 10, fill: "#527248", rot: -35 },
    { cx: 72, cy: 640, rx: 21, ry: 10, fill: "#527248", rot:  30 },
    { cx: 30, cy: 620, rx: 13, ry:  6, fill: "#A8C49A", rot: -22 },
    { cx: 20, cy: 690, rx: 24, ry: 11, fill: "#6B8F5E", rot: -25 },
    { cx: 76, cy: 755, rx: 24, ry: 11, fill: "#6B8F5E", rot:  35 },
    { cx: 66, cy: 740, rx: 13, ry:  6, fill: "#A8C49A", rot:  18 },
    { cx: 22, cy: 810, rx: 20, ry: 10, fill: "#527248", rot: -38 },
    { cx: 70, cy: 870, rx: 20, ry: 10, fill: "#87AC75", rot:  25 },
  ];

  const rightLeaves = [
    { cx: 76, cy: 90,  rx: 22, ry: 10, fill: "#527248", rot:  35 },
    { cx: 28, cy: 150, rx: 22, ry: 10, fill: "#87AC75", rot: -30 },
    { cx: 70, cy: 130, rx: 13, ry:  6, fill: "#A8C49A", rot:  20 },
    { cx: 80, cy: 210, rx: 24, ry: 11, fill: "#6B8F5E", rot:  25 },
    { cx: 24, cy: 275, rx: 24, ry: 11, fill: "#527248", rot: -35 },
    { cx: 34, cy: 240, rx: 13, ry:  6, fill: "#A8C49A", rot: -22 },
    { cx: 78, cy: 330, rx: 20, ry: 10, fill: "#527248", rot:  40 },
    { cx: 30, cy: 400, rx: 20, ry: 10, fill: "#6B8F5E", rot: -25 },
    { cx: 72, cy: 370, rx: 13, ry:  6, fill: "#A8C49A", rot:  18 },
    { cx: 82, cy: 460, rx: 23, ry: 11, fill: "#6B8F5E", rot:  30 },
    { cx: 26, cy: 525, rx: 23, ry: 11, fill: "#87AC75", rot: -32 },
    { cx: 32, cy: 500, rx: 13, ry:  6, fill: "#A8C49A", rot: -20 },
    { cx: 76, cy: 580, rx: 21, ry: 10, fill: "#527248", rot:  35 },
    { cx: 28, cy: 640, rx: 21, ry: 10, fill: "#527248", rot: -30 },
    { cx: 70, cy: 620, rx: 13, ry:  6, fill: "#A8C49A", rot:  22 },
    { cx: 80, cy: 690, rx: 24, ry: 11, fill: "#6B8F5E", rot:  25 },
    { cx: 24, cy: 755, rx: 24, ry: 11, fill: "#6B8F5E", rot: -35 },
    { cx: 34, cy: 740, rx: 13, ry:  6, fill: "#A8C49A", rot: -18 },
    { cx: 78, cy: 810, rx: 20, ry: 10, fill: "#527248", rot:  38 },
    { cx: 30, cy: 870, rx: 20, ry: 10, fill: "#87AC75", rot: -25 },
  ];

  const leftTendrils = [
    { d: "M46 190 Q22 178 14 162" },
    { d: "M48 390 Q72 374 80 356" },
    { d: "M46 590 Q20 575 12 558" },
    { d: "M48 790 Q74 775 82 758" },
  ];

  const rightTendrils = [
    { d: "M54 190 Q78 178 86 162" },
    { d: "M52 390 Q28 374 20 356" },
    { d: "M54 590 Q80 575 88 558" },
    { d: "M52 790 Q26 775 18 758" },
  ];

  function VineSVG({ stem, leaves, tendrils }: {
    stem: string;
    leaves: typeof leftLeaves;
    tendrils: { d: string }[];
  }) {
    return (
      <svg
        viewBox="0 0 100 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        style={{ opacity: 0.75 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Growing stem */}
        <path
          d={stem}
          stroke="#3D5535"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={stemOffset}
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
        {/* Leaves fade in as stem grows */}
        {leaves.map((l, i) => (
          <ellipse
            key={i}
            cx={l.cx} cy={l.cy} rx={l.rx} ry={l.ry}
            fill={l.fill}
            transform={`rotate(${l.rot} ${l.cx} ${l.cy})`}
            style={{
              opacity: leafAlpha(l.cy),
              transition: "opacity 0.3s ease",
            }}
          />
        ))}
        {/* Tendrils */}
        {tendrils.map((t, i) => {
          const y = parseFloat(t.d.split(" ")[1]);
          return (
            <path
              key={i}
              d={t.d}
              stroke="#6B8F5E"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              style={{
                opacity: leafAlpha(y),
                transition: "opacity 0.3s ease",
              }}
            />
          );
        })}
      </svg>
    );
  }

  return (
    <>
      <div className="fixed left-0 top-0 h-full w-36 pointer-events-none z-10 overflow-hidden hidden lg:block">
        <VineSVG
          stem="M50 0 C44 70 62 120 46 190 C32 255 60 310 48 390 C36 460 64 510 46 590 C30 660 58 710 48 790 C36 850 54 880 50 900"
          leaves={leftLeaves}
          tendrils={leftTendrils}
        />
      </div>
      <div className="fixed right-0 top-0 h-full w-36 pointer-events-none z-10 overflow-hidden hidden lg:block">
        <VineSVG
          stem="M50 0 C56 70 38 120 54 190 C68 255 40 310 52 390 C64 460 36 510 54 590 C70 660 42 710 52 790 C64 850 46 880 50 900"
          leaves={rightLeaves}
          tendrils={rightTendrils}
        />
      </div>
    </>
  );
}
