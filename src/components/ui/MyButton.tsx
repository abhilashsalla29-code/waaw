import React, { forwardRef, useId } from "react";
import Link from "next/link";

export interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  isLink?: boolean;
  href?: string;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  ariaLabel?: string;
}

// Robust TwistedSvg: generates a unique gradient id using React's useId to avoid
// collisions that can cause runtime errors when multiple instances render.
function TwistedSvg({ className = "w-full h-full" }: { className?: string }) {
  // useId returns a stable id string (for SSR + hydration safe usage)
  const uid = useId();
  // sanitize id (remove ':' which can appear in React id on some builds)
  const gradId = `paint0_linear_${uid.replace(/[:.]/g, "_")}`;

  return (
    <svg
      viewBox="0 0 269 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M239.5 0C255.792 3.76892e-06 269 13.2076 269 29.5C269 45.7924 255.792 59 239.5 59C226.953 59 216.704 48.0782 206.199 41.2164C202.117 38.55 197.24 37 192 37C191.148 37 190.305 37.041 189.473 37.1212C169.83 39.0155 151.744 59 132.009 59H29.5C13.2076 59 0 45.7924 0 29.5C0 13.2076 13.2076 0 29.5 0H128.523C147.665 0 165.123 18.7728 184.152 20.8458C185.088 20.9477 186.038 21 187 21C190.037 21 192.981 20.4793 195.819 19.5367C202.707 17.244 210.305 14.5519 218.366 12.8412C225.924 11.2308 233.099 10.808 239.5 10.808C239.5 7.20533 239.5 3.60267 239.5 0Z"
        fill={`url(#${gradId})`}
      />
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="269" y2="59" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const sizeMap = {
  sm: "py-1 px-3 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-6 text-lg",
};

const MyButton = forwardRef<HTMLButtonElement, MyButtonProps>(
  (
    {
      title,
      isLink = false,
      href = "#",
      size = "md",
      icon,
      rightIcon,
      ariaLabel,
      disabled,
      children,
      className = "",
      ...rest
    },
    ref
  ) => {
    const content = (
      <span
        className={`relative inline-flex items-center justify-center gap-3 min-w-[120px] ${sizeMap[size]} text-white font-semibold bg-opacity-100`}
      >
        {/* background SVG - absolute so it doesn't affect layout */}
        <span className="absolute inset-0 z-0 pointer-events-none opacity-100">
          <TwistedSvg />
        </span>

        {/* left icon */}
        {icon && <span className="relative z-10">{icon}</span>}

        {/* label */}
        <span className="relative z-10 select-none">{title ?? children}</span>

        {/* right icon */}
        {rightIcon && <span className="relative z-10">{rightIcon}</span>}
      </span>
    );

    const baseClasses = `inline-block relative rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-500/40 transition-transform active:translate-y-0.5 disabled:opacity-50 ${className}`;

    if (isLink) {
      // Next.js Link supports className; keep semantics consistent with a clickable element.
      return (
        <Link href={href} aria-label={ariaLabel ?? title} className={baseClasses} {...(rest as any)}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        aria-label={ariaLabel ?? title}
        disabled={disabled}
        className={baseClasses}
        {...rest}
      >
        {content}
      </button>
    );
  }
);

MyButton.displayName = "MyButton";

export default MyButton;

/* ----------------- Notes & Debugging info -----------------
Fix implemented:
- The runtime error came from id collisions / missing gradient elements when multiple
  instances of the component render. To prevent "null" lookups for gradient references,
  the SVG now generates a unique id via React.useId and references that id in the
  path fill (e.g. fill={`url(#${gradId})`}). This prevents runtime DOM reference issues
  during SSR/hydration or when multiple buttons are present.

- Added aria-hidden and focusable attributes to the SVG so assistive tech ignores
  decorative SVG markup; button text remains accessible.

- The rest of the component preserves the original API: title, isLink, href, size,
  icon, rightIcon, ariaLabel, and spreads other button props.

If you still see the error, please tell me:
1) Are you rendering multiple <MyButton /> instances on the same page? (yes/no)
2) Do you server-render the page (Next.js SSR) or purely client-side?
3) Share the exact stack trace and the line number if available.

Example usages to verify locally:
<MyButton title="Explore Now" size="lg" />
<MyButton isLink href="/about" title="Learn More" />
<MyButton title="With Icon" icon={<svg width={16} height={16}><circle cx={8} cy={8} r={6} /></svg>} />

*/
