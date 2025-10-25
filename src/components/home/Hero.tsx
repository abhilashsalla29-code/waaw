"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black text-[#bbbbbb] overflow-hidden">
      {/* Main container */}
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* LEFT SIDE */}
        <div className="flex-1 max-w-2xl text-center lg:text-left space-y-4 mt-2">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TURNING YOUR IDEAS<br />
            INTO HIGH IMPACT
          </motion.h1>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#82b7dc]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            DIGITAL PRODUCTS
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            From mobile apps to web platforms, we design and develop tailored solutions that elevate your business.
          </motion.p>
          <motion.div
            className="mt-6 flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/contact">
              <Button className="bg-white text-[#3466aa] font-semibold rounded-full px-6 py-2 md:px-8 md:py-3 text-base flex items-center gap-2 hover:bg-[#f0f4ff] hover:scale-105 hover:shadow-lg transition-all duration-300">
                Get Started
                <svg width="20" height="20" viewBox="0 0 239 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M209.918 0.0853882C225.521 -1.1476 239 11.1283 239 26.7797C239 42.6479 225.159 55.0019 209.363 53.4907C183.959 51.0603 147.189 48.0834 119.5 48.0834C91.8114 48.0834 55.0412 51.0603 29.6367 53.4907C13.8406 55.0019 0 42.6479 0 26.7797C0.000181538 11.1283 13.4792 -1.1476 29.082 0.0853882C54.5113 2.09489 91.6278 4.58344 119.5 4.58344C147.372 4.58344 184.489 2.09489 209.918 0.0853882Z"/>
                </svg>
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex-1 flex items-center justify-center mb-36 md:mb-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <Image
              src="/homepb.png"
              alt="3D metallic knot"
              fill
              className="object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.3)]"
            />
          </div>
        </div>
      </div>

      {/* Frosted overlay - hidden on mobile */}
      {/* <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[200px] md:w-[300px] lg:w-[400px] h-[400px] md:h-[500px] lg:h-[600px] pointer-events-none">
        <Image
          src="/wider-frosted-reeds.png"
          alt="Frosted overlay effect"
          fill
          className="object-cover opacity-60 object-left drop-shadow-[0_0_60px_rgba(255,255,255,0.2)]"
        />
      </div> */}


<div className="absolute bottom-8 md:bottom-16 left-0 right-0">
  <div className="container mx-auto px-4 flex justify-center relative h-[150px]  mt-2">
    {/* Remove lines/dots below md */}
    <div className="hidden md:block absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    {/* {[
      { left: "left-[10%]", h: "h-[60px]" },
      { left: "left-[25%]", h: "h-[40px]" },
      { left: "left-[33%]", h: "h-[30px]" },
      { right: "right-[10%]", h: "h-[60px]" },
      { right: "right-[25%]", h: "h-[40px]" },
      { right: "right-[33%]", h: "h-[30px]" },
    ].map((m, i) => (
      <div
        key={i}
        className={`hidden md:block absolute ${m.left || m.right} bottom-1/2 w-[2px] ${m.h} bg-gradient-to-t from-white/70 to-transparent`}
      />
    ))}
    {[
      { left: "left-[10%]", top: "top-[calc(50%-60px)]", size: "w-4 h-4" },
      { left: "left-[25%]", top: "top-[calc(50%-40px)]", size: "w-3 h-3" },
      { left: "left-[33%]", top: "top-[calc(50%-30px)]", size: "w-3 h-3" },
      { right: "right-[10%]", top: "top-[calc(50%-60px)]", size: "w-4 h-4" },
      { right: "right-[25%]", top: "top-[calc(50%-40px)]", size: "w-3 h-3" },
      { right: "right-[33%]", top: "top-[calc(50%-30px)]", size: "w-3 h-3" },
      { left: "left-[10%]", top: "top-1/2", size: "w-4 h-4", translate: "-translate-y-1/2" },
      { right: "right-[10%]", top: "top-1/2", size: "w-4 h-4", translate: "-translate-y-1/2" },
    ].map((d, i) => (
      <div
        key={i}
        className={`hidden md:block absolute ${d.left || d.right} ${d.top} ${d.size} ${d.translate || ""} bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.5)]`}
      />
    ))} */}

    {/* Stats cards - overlap on mobile */}
    <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-12 items-center lg:hidden -mt-8">
      <Stat number="150+" label="Relied on by Leaders" />
      <Stat number="300+" label="Real-Time User" className="-mt-6" />
      <Stat number="15+" label="Industry Expertise" className="-mt-6" />
    </div>

    {/* Desktop stats */}
    <div className="hidden lg:flex relative z-10 flex-row gap-16 items-center">
      <Stat number="150+" label="Relied on by Leaders" />
      <Stat number="300+" label="Real-Time User" />
      <Stat number="15+" label="Industry Expertise" />
    </div>
  </div>
</div>

    </section>
  );
}

function Stat({ number, label, className }: { number: string; label: string; className?: string }) {
  return (
    <div className={`w-[180px] h-[100px] flex flex-col items-center justify-center bg-gradient-to-b from-white/10 to-[#3466aa]/20 border border-white/20 backdrop-blur-lg rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] ${className || ""}`}>
      <span className="text-2xl sm:text-3xl font-bold">{number}</span>
      <p className="mt-1 text-xs sm:text-sm text-gray-300">{label}</p>
    </div>
  );
}
