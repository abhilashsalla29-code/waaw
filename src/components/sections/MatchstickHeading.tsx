import React, { useRef, useEffect, useState } from "react";

type Align = 'left' | 'center' | 'right';

/**
 * MatchstickBoxHeading - Dynamic matchstick heading!
 * - Top: straight line with dot on right (stretches with text)
 * - Bottom: mirrored straight line with dot on left (stretches with text)
 * - All white color (works on dark backgrounds)
 *
 * Props:
 *   children (string|ReactNode): The heading text.
 *   align (string): "left" | "center" | "right" (default: center)
 *   className (string): Additional wrapper classes.
 */

export const MatchstickBoxHeading = ({
  children,
  align = "center",
  className = "",
}: {
  children: React.ReactNode;
  align?: Align;
  className?: string;
}) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [children]);

  const alignments = {
    left: "justify-start text-left",
    center: "justify-center text-center",
    right: "justify-end text-right",
  };

  // Calculate SVG dimensions based on text width
  const svgWidth = textWidth + 40; // Add padding
  const lineStartX = 10;
  const lineEndX = svgWidth - 10;

  return (
    <div className={`w-full flex ${alignments[align]} ${className}`}>
      <div className="relative inline-block">
        {/* Central Decorative Heading */}
        <div className="relative inline-block">
          {/* Top matchstick line and dot (straight) - Dynamic width */}
          <svg
            width={svgWidth}
            height="18"
            viewBox={`0 0 ${svgWidth} 18`}
            className="absolute left-1/2 -translate-x-1/2 -top-5  "
            fill="none"
          >
            {/* Straight line from start to end */}
            <line
              x1={lineStartX}
              y1="9"
              x2={lineEndX}
              y2="9"
              stroke="#bbbbbb"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Dot at the right end */}
            <circle cx={lineEndX} cy="9" r="5" fill="white" />
          </svg>

          {/* Bottom matchstick line and dot (mirrored) - Dynamic width */}
          <svg
            width={svgWidth}
            height="18"
            viewBox={`0 0 ${svgWidth} 18`}
            className="absolute left-1/2 -translate-x-1/2 -bottom-5"
            fill="none"
          >
            {/* Straight line from end to start */}
            <line
              x1={lineEndX}
              y1="9"
              x2={lineStartX}
              y2="9"
              stroke="#bbbbbb"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Dot at the left end */}
            <circle cx={lineStartX} cy="9" r="5" fill="white" />
          </svg>

          {/* Heading text, centered */}
          <h2
            ref={textRef}
            className="
              font-bold uppercase tracking-wide text-[#bbbbbb]
              text-2xl md:text-3xl relative px-2 
              bg-transparent whitespace-nowrap
            "
            style={{ letterSpacing: "0.08em" }}
          >
            {children}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MatchstickBoxHeading;
