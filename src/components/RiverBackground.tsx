import React from 'react';

export const RiverBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Base tranquil water and sky gradient in white, sky blue, and soft gold */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fbff] via-[#e7f1fb] to-[#d2e4f6]" />

      {/* Warm golden sunlit reflection across the upper water */}
      <div className="animate-river-slow absolute -top-28 left-1/2 -translate-x-1/2 w-[145%] h-[44vh] rounded-full blur-3xl bg-gradient-to-r from-[#dbeafe]/65 via-[#f6e3b4]/45 to-[#bfdbfe]/65" />

      {/* Animated River Current Layer 1 (Deep Royal Blue Stream) */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="animate-river-slow absolute -left-[6%] top-0 h-full w-[112%]"
      >
        <defs>
          <linearGradient id="portalRiverWave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0b4f8a" stopOpacity="0.11" />
            <stop offset="48%" stopColor="#1d74b8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#c9932c" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path
          d="M0,410 C240,350 470,485 730,425 C990,365 1210,470 1440,405 L1440,900 L0,900 Z"
          fill="url(#portalRiverWave1)"
        />
      </svg>

      {/* Animated River Current Layer 2 (Gentle Counter Stream) */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="animate-river-reverse absolute -left-[6%] top-0 h-full w-[112%]"
      >
        <defs>
          <linearGradient id="portalRiverWave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e6ba8" stopOpacity="0.09" />
            <stop offset="50%" stopColor="#d4a24c" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#0f5c99" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <path
          d="M0,555 C280,495 550,625 830,550 C1100,480 1280,590 1440,540 L1440,900 L0,900 Z"
          fill="url(#portalRiverWave2)"
        />
      </svg>

      {/* Animated Surface Ripples (White & Pale Gold Water Glint) */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="animate-river-shimmer absolute -left-[8%] top-0 h-full w-[116%]"
      >
        <path
          d="M-60,305 Q320,270 680,310 T1480,300"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.65"
          strokeWidth="2.5"
        />
        <path
          d="M-40,495 Q380,455 760,505 T1500,485"
          fill="none"
          stroke="#e8c77b"
          strokeOpacity="0.45"
          strokeWidth="2"
        />
        <path
          d="M-80,680 Q340,640 740,690 T1490,670"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.6"
          strokeWidth="2.5"
        />
      </svg>

      {/* Soft readability veil */}
      <div className="absolute inset-0 bg-white/30" />
    </div>
  );
};
