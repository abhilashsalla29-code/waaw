"use client";
import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <header className=" inset-x-0 top-0 z-50 w-full fixed bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        {/* Left side - waaw logo */}
        <Link href="/" className="text-white text-lg font-semibold">
          waaw
        </Link>
        
        {/* Center - Navigation links */}
        <nav className="hidden gap-10 md:flex">
          <Link href="#home" className="text-[#82b7dc] font-semibold text-xl">
            Home
          </Link>
          <Link href="#about" className="text-white font-semibold text-xl hover:text-[#82b7dc] transition">
            About Us
          </Link>
          <Link href="#services" className="text-white font-semibold text-xl hover:text-[#82b7dc] transition">
            Services
          </Link>
          <Link href="#blogs" className="text-white font-semibold text-xl hover:text-[#82b7dc] transition">
            Blogs
          </Link>
        </nav>
        
        <Link
  href="#contact"
  className="relative inline-flex items-center justify-center w-[200px] h-[59px]"
>
  {/* SVG background serving as the button shape */}
  <img
    className="absolute top-0 left-0 w-[200px] h-[59px]"
    alt="Subtract"
    src="/subtract.svg"
  />
  {/* "Let's Talk" in the rectangle section (left) */}
  <span
    className="absolute left-5 top-1/2 -translate-y-1/2 [font-family:'Montserrat',Helvetica] font-semibold text-black text-xl z-10"
    style={{ width: '120px', textAlign: 'left' }}
  >
    Let's Talk
  </span>
  {/* Arrow in the circle section (right) */}
  <img
    className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 z-10"
    alt="Vector"
    src="/vector-20.svg"
  />
</Link>

      </div>
    </header>
  );
}


