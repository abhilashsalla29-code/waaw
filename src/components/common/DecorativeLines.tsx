"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  lineOffset?: number; // px distance from content
  dotSize?: number; // px
};

/**
 * DecorativeLines wraps content and renders a top and bottom gradient line
 * with a glowing dot (top-left and bottom-right). The lines automatically
 * match the width of the wrapped content.
 */
export default function DecorativeLines({
  children,
  className,
  lineOffset = 20,
  dotSize = 14,
}: Props) {
  const topOffset = `-${lineOffset}px`;
  const bottomOffset = `-${lineOffset}px`;
  const dotStyle: React.CSSProperties = {
    width: `${dotSize}px`,
    height: `${dotSize}px`,
  };

  return (
    <div className={`relative inline-block ${className || ""}`}>
      {/* Top line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent blur-[1px] hidden md:block"
        style={{ top: topOffset, width: "100%" }}
      />
      {/* Top dot (left side) */}
      <div
        className="absolute rounded-full bg-white blur-[2px] shadow-[0_0_20px_rgba(255,255,255,0.8)] hidden md:block"
        style={{ top: `calc(${topOffset} - 5px)`, left: 0, ...dotStyle }}
      />

      {/* Content */}
      <div className="w-full">{children}</div>

      {/* Bottom line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent blur-[1px] hidden md:block"
        style={{ bottom: bottomOffset, width: "100%" }}
      />
      {/* Bottom dot (right side) */}
      <div
        className="absolute rounded-full bg-white blur-[2px] shadow-[0_0_20px_rgba(255,255,255,0.8)] hidden md:block"
        style={{ bottom: `calc(${bottomOffset} - 5px)`, right: 0, ...dotStyle }}
      />
    </div>
  );
}


