"use client";

import { useEffect } from "react";

// Module-level cache: fresh on browser refresh, stable across SPA navigation
let cachedHue: number | null = null;

// Allowed hue ranges — explicitly excludes purple/violet (242–315)
const HUE_RANGES: [number, number][] = [
  [0, 42],    // reds → oranges
  [42, 80],   // yellows (limited)
  [80, 175],  // greens → teals
  [175, 242], // cyans → blues
  [315, 360], // magentas → pinks
];

function randomHue(): number {
  const weights = HUE_RANGES.map(([lo, hi]) => hi - lo);
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < HUE_RANGES.length; i++) {
    if (r < weights[i]) {
      const [lo, hi] = HUE_RANGES[i];
      return Math.floor(lo + (r / weights[i]) * (hi - lo));
    }
    r -= weights[i];
  }
  return 200;
}

export function DynamicTheme() {
  useEffect(() => {
    if (cachedHue === null) cachedHue = randomHue();
    const h = cachedHue;
    const comp = (h + 180) % 360; // complementary hue for dark mode

    const existing = document.getElementById("dynamic-theme");
    if (existing) existing.remove();

    const style = document.createElement("style");
    style.id = "dynamic-theme";
    style.textContent = `
      :root {
        --primary: ${h} 78% 50%;
        --primary-foreground: 0 0% 100%;
        --secondary: ${h} 18% 93%;
        --secondary-foreground: ${h} 38% 28%;
        --accent: ${h} 18% 93%;
        --accent-foreground: ${h} 38% 28%;
        --ring: ${h} 78% 50%;
        --glow: ${h} 78% 50%;
      }
      .dark {
        --primary: ${comp} 65% 62%;
        --primary-foreground: 220 20% 6%;
        --secondary: ${comp} 22% 14%;
        --secondary-foreground: 240 15% 78%;
        --accent: ${comp} 22% 14%;
        --accent-foreground: 240 15% 78%;
        --ring: ${comp} 65% 62%;
        --glow: ${comp} 65% 62%;
      }
      .gradient-text {
        background: linear-gradient(
          135deg,
          hsl(${h} 78% 52%),
          hsl(${(h + 40) % 360} 72% 50%),
          hsl(${(h + 80) % 360} 65% 46%)
        ) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-size: 200% 200% !important;
        animation: gradient-shift 5s ease infinite;
      }
      .dark .gradient-text {
        background: linear-gradient(
          135deg,
          hsl(${comp} 65% 65%),
          hsl(${(comp + 40) % 360} 60% 60%),
          hsl(${(comp + 80) % 360} 55% 56%)
        ) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-size: 200% 200% !important;
        animation: gradient-shift 5s ease infinite;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return null;
}
