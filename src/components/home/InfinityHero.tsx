"use client";

import React from "react";

type Props = {
  strokeWidth?: number;
  color?: string; // stroke color
  duration?: number; // seconds for one loop of the traveling dot / draw
  draw?: boolean; // animate draw-on-mount
  glow?: boolean; // neon glow
  showDot?: boolean; // moving dot along path
};

export default function InfinityHero({
  strokeWidth = 16,
  color = "#E8E8E8", // silver/white for glassy effect
  duration = 8,
  draw = true,
  glow = true,
  showDot = true,
}: Props) {
  // Properly closed infinity symbol path - continuous loop
  // Creates a complete infinity symbol that crosses over itself
  // Centered in larger viewBox (0 0 480 220) to accommodate glows
  // Adjusted coordinates: center around x=240, y=110
  const pathD =
    "M 120 110 C 120 50, 180 50, 240 110 C 300 50, 360 50, 360 110 C 360 170, 300 170, 240 110 C 180 170, 120 170, 120 110";

  const cssVar = {
    // expose duration and color to CSS via inline style
    ["--inf-duration" as any]: `${duration}s`,
    ["--inf-color" as any]: color,
    ["--inf-stroke" as any]: `${strokeWidth}px`,
  } as React.CSSProperties;

  return (
    <div
      className="flex items-center justify-center w-full h-full"
    >
      <svg
        viewBox="0 0 480 220"
        width="100%"
        height="100%"
        style={cssVar}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Animated infinity symbol"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Glassy metallic gradient */}
          <linearGradient id="metallicGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#E8E8E8" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#C0C0C0" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#E8E8E8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
          </linearGradient>

          {/* Highlight gradient for shiny effect */}
          <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>

          {/* Strong glow filter for glassy light effect */}
          <filter id="glow-infinity" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feOffset in="coloredBlur" dx="0" dy="0" result="offsetBlur" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
            {/* Additional glow layer */}
            <feGaussianBlur stdDeviation="4" result="coloredBlur2" />
            <feMerge>
              <feMergeNode in="coloredBlur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Outer glow for depth */}
          <filter id="outer-glow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="12" result="outerBlur" />
            <feMerge>
              <feMergeNode in="outerBlur" />
            </feMerge>
          </filter>

          {/* make the path available for animateMotion */}
          <path id="infPath" d={pathD} fill="none" />
        </defs>

        {/* Outer glow layer for depth */}
        <use
          href="#infPath"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth={strokeWidth + 9}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#outer-glow)"
        />

        {/* Background depth layer */}
        <use
          href="#infPath"
          stroke="rgba(200,200,200,0.2)"
          strokeWidth={strokeWidth + 2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Main metallic stroke with gradient */}
        <path
          id="infStroke"
          d={pathD}
          fill="none"
          stroke="url(#metallicGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: glow ? "url(#glow-infinity)" : undefined,
          }}
          className={draw ? "inf-draw" : undefined}
        />

        {/* Highlight overlay for shiny glassy effect */}
        <path
          d={pathD}
          fill="none"
          stroke="url(#highlightGradient)"
          strokeWidth={strokeWidth * 0.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
          className={draw ? "inf-draw" : undefined}
        />

        {/* Bright white core for maximum shine */}
        <path
          d={pathD}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={strokeWidth * 0.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
          className={draw ? "inf-draw" : undefined}
        />

        {/* moving dot with glassy shine */}
        {showDot && (
          <g>
            {/* Main bright dot */}
            <circle r={strokeWidth * 1.2} fill="#FFFFFF" opacity="1">
              <animateMotion
                dur={`${duration}s`}
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#infPath" />
              </animateMotion>
            </circle>
            
            {/* Inner glow */}
            <circle r={strokeWidth * 0.8} fill="#E8E8E8" opacity="0.9">
              <animateMotion
                dur={`${duration}s`}
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#infPath" />
              </animateMotion>
            </circle>

            {/* Outer glow pulse */}
            <circle r={strokeWidth * 2.5} fill="#FFFFFF" opacity="0.3">
              <animateMotion
                dur={`${duration}s`}
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#infPath" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0.3;0.1;0.3"
                dur={`${duration / 2}s`}
                repeatCount="indefinite"
              />
            </circle>

            {/* Large outer glow */}
            <circle r={strokeWidth * 4} fill="#FFFFFF" opacity="0.15">
              <animateMotion
                dur={`${duration}s`}
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#infPath" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0.15;0.05;0.15"
                dur={`${duration / 3}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        )}
      </svg>

      {/* Styles: add to global CSS if you prefer; we inline here for copy/paste simplicity */}
      <style jsx>{`
        :global(.inf-draw) {
          stroke-dasharray: 1000; /* large enough for complete path length */
          stroke-dashoffset: 1000;
          animation: inf-draw var(--inf-duration) ease-in-out forwards;
        }

        @keyframes inf-draw {
          0% {
            stroke-dashoffset: 1000;
            opacity: 0.4;
          }
          60% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

