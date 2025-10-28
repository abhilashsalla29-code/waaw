"use client";
import Link from "next/link";
import React, { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="inset-x-0 top-0 z-50 w-full fixed bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        {/* Left side - waaw logo */}
        <Link href="/" className="text-[#bbbbbb] text-lg font-semibold">
          waaw
        </Link>

        {/* Center - Navigation links - Desktop */}
        <nav className="hidden md:flex gap-10">
          <Link href="/" className="text-[#82b7dc] font-semibold text-xl">
            Home
          </Link>
          <Link href="/about" className="text-[#bbbbbb] font-semibold text-xl hover:text-[#82b7dc] transition">
            About Us
          </Link>
          <Link href="/services" className="text-[#bbbbbb] font-semibold text-xl hover:text-[#82b7dc] transition">
            Services
          </Link>
          <Link href="/blogs" className="text-[#bbbbbb] font-semibold text-xl hover:text-[#82b7dc] transition">
            Blogs
          </Link>
        </nav>

        {/* Desktop Contact Button */}
        <Link
          href="/contact"
          className="hidden md:relative md:inline-flex md:items-center md:justify-center md:w-[200px] md:h-[59px]  hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          {/* SVG background serving as the button shape */}
          <img
            className="absolute top-0 left-0 w-[200px] h-[59px]"
            alt="Subtract"
            src="/subtract.svg"
          />
          {/* "Let's Talk" in the rectangle section (left) */}
          <span
            className="absolute left-5 top-1/2 -translate-y-1/2 [font-family:'Montserrat',Helvetica] font-semibold text-black text-xl z-10 "
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#bbbbbb] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-[#82b7dc] font-semibold text-xl" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block text-[#bbbbbb] font-semibold text-xl hover:text-[#82b7dc] transition" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/services" className="block text-[#bbbbbb] font-semibold text-xl hover:text-[#82b7dc] transition" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/blogs" className="block text-[#bbbbbb] font-semibold text-xl hover:text-[#82b7dc] transition" onClick={() => setIsOpen(false)}>
              Blogs
            </Link>
            <Link href="/contact" className="block mt-6" onClick={() => setIsOpen(false)}>
              <div className="relative inline-flex items-center justify-center w-[200px] h-[59px]">
                <img
                  className="absolute top-0 left-0 w-[200px] h-[59px]"
                  alt="Subtract"
                  src="/subtract.svg"
                />
                <span
                  className="absolute left-5 top-1/2 -translate-y-1/2 [font-family:'Montserrat',Helvetica] font-semibold text-black text-xl z-10"
                  style={{ width: '120px', textAlign: 'left' }}
                >
                  Let's Talk
                </span>
                <img
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 z-10"
                  alt="Vector"
                  src="/vector-20.svg"
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


