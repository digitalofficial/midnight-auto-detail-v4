"use client";

export default function Logo({ size = 40 }: { size?: number }) {
  const w = size * 3.2;
  const h = size * 1.6;
  return (
    <svg
      viewBox="0 0 320 160"
      width={w}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Midnight Auto Detail logo"
    >
      <defs>
        <linearGradient id="chrome-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#C0C0C0" />
          <stop offset="60%" stopColor="#888888" />
          <stop offset="100%" stopColor="#C0C0C0" />
        </linearGradient>
        <linearGradient id="blue-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E3A5F" />
          <stop offset="100%" stopColor="#2a5a8f" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Car silhouette */}
      <g transform="translate(160, 52)" filter="url(#glow)">
        {/* Car body */}
        <path
          d="M-65,12 C-65,12 -55,-8 -35,-15 C-20,-20 -10,-22 0,-22 C10,-22 20,-20 35,-15 C55,-8 65,12 65,12 L68,16 C68,20 65,22 60,22 L-60,22 C-65,22 -68,20 -68,16 Z"
          fill="url(#chrome-fill)"
          opacity="0.95"
        />
        {/* Windshield */}
        <path
          d="M-28,-12 C-18,-20 -8,-22 0,-22 C8,-22 18,-20 28,-12 L20,-2 L-20,-2 Z"
          fill="url(#blue-accent)"
          opacity="0.7"
        />
        {/* Wheels */}
        <circle cx="-40" cy="22" r="10" fill="#222" stroke="#C0C0C0" strokeWidth="1.5" />
        <circle cx="-40" cy="22" r="5" fill="none" stroke="#555" strokeWidth="0.5" />
        <circle cx="40" cy="22" r="10" fill="#222" stroke="#C0C0C0" strokeWidth="1.5" />
        <circle cx="40" cy="22" r="5" fill="none" stroke="#555" strokeWidth="0.5" />
        {/* Shine sparkle */}
        <g transform="translate(20, -18)">
          <line x1="0" y1="-8" x2="0" y2="8" stroke="#fff" strokeWidth="1.2" opacity="0.9" />
          <line x1="-8" y1="0" x2="8" y2="0" stroke="#fff" strokeWidth="1.2" opacity="0.9" />
          <line x1="-5" y1="-5" x2="5" y2="5" stroke="#fff" strokeWidth="0.8" opacity="0.6" />
          <line x1="5" y1="-5" x2="-5" y2="5" stroke="#fff" strokeWidth="0.8" opacity="0.6" />
        </g>
        {/* Second sparkle */}
        <g transform="translate(-30, -10)" opacity="0.5">
          <line x1="0" y1="-5" x2="0" y2="5" stroke="#fff" strokeWidth="0.8" />
          <line x1="-5" y1="0" x2="5" y2="0" stroke="#fff" strokeWidth="0.8" />
        </g>
      </g>

      {/* MIDNIGHT text */}
      <text
        x="160"
        y="110"
        textAnchor="middle"
        fontFamily="'Montserrat', sans-serif"
        fontWeight="800"
        fontSize="32"
        fill="url(#chrome-fill)"
        letterSpacing="6"
      >
        MIDNIGHT
      </text>

      {/* AUTO DETAIL text */}
      <text
        x="160"
        y="135"
        textAnchor="middle"
        fontFamily="'Montserrat', sans-serif"
        fontWeight="300"
        fontSize="16"
        fill="#C0C0C0"
        letterSpacing="8"
        opacity="0.8"
      >
        AUTO DETAIL
      </text>
    </svg>
  );
}
