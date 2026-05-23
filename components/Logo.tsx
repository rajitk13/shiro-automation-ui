export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Shiro Automation Logo"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Node A - top left */}
      <circle cx="12" cy="12" r="7" fill="url(#logoGrad)" filter="url(#glow)" opacity="0.95" />
      {/* Node B - middle right */}
      <circle cx="36" cy="24" r="7" fill="url(#logoGrad)" filter="url(#glow)" opacity="0.95" />
      {/* Node C - bottom left */}
      <circle cx="12" cy="36" r="7" fill="url(#logoGrad)" filter="url(#glow)" opacity="0.95" />
      {/* Edge A → B */}
      <line x1="18" y1="15" x2="30" y2="21" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      {/* Edge B → C */}
      <line x1="30" y1="27" x2="18" y2="33" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      {/* Arrowhead A→B */}
      <polygon points="30,21 25,19 27,24" fill="url(#logoGrad)" opacity="0.8" />
      {/* Arrowhead B→C */}
      <polygon points="18,33 21,28 24,32" fill="url(#logoGrad)" opacity="0.8" />
    </svg>
  );
}
