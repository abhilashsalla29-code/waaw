"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// Button removed in favor of SVG-wrapped CTA matching navbar

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
          <Link
       href="/contact"
  className="relative block w-[200px] h-[59px] z-[9999] hover:scale-105 hover:shadow-lg transition-all duration-300" > 
      <img
        src="/subtract-4.svg"
        alt="Button background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex items-center justify-between px-5 h-full">
        <span className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-xl">
          Get Started
        </span>
        <img src="/vector-20.svg" alt="Arrow" className="w-6 h-6" />
      </div>
    </Link>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex-1 flex items-center justify-center mb-28 sm:mb-20 md:mb-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <Image
              src="/homepb.png"
              alt="3D metallic knot"
              fill
              className="object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.3)] animate-pulse" style={{ animationDuration: '5s' }}
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
  <div className="container mx-auto px-4 flex justify-center relative h-[150px] md:h-[180px] mt-2">
    {/* Remove lines/dots below md */}
    {/* <div className="hidden md:block absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent" /> */}
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
    <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-12 items-center lg:hidden -mt-8 ">
      <Stat number="150+" label="Relied on by Leaders" />
      <Stat number="300+" label="Real-Time User" className="-mt-6" />
      <Stat number="15+" label="Industry Expertise" className="-mt-6" />
    </div>

    {/* Desktop stats */}
    <div className="hidden lg:block relative z-10 w-full h-[180px]">
      {/* Top beam */}
      {/* <div className="absolute left-[6%] right-[6%] top-[14%] h-px bg-white/60 blur-[2px] opacity-70" />
      {/* Bottom beam */}
      {/* <div className="absolute left-[6%] right-[6%] bottom-[14%] h-px bg-white/60 blur-[2px] opacity-70" /> */}
      {/* Left posts + glow dots */}
      {/* <div className="absolute left-[6%] top-[12%] h-[76%] w-px bg-white/20" /> */}
      {/* <div className="absolute left-[6%] top-[12%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.7)]" /> */}
      {/* <div className="absolute left-[6%] bottom-[12%] -translate-x-1/2 translate-y-1/2 w-6 h-6 rounded-full bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.7)]" /> */}
      {/* Right posts + glow dots */}
      {/* <div className="absolute right-[6%] top-[12%] h-[76%] w-px bg-white/20" /> */}
      {/* <div className="absolute right-[6%] top-[12%] translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.7)]" /> */}
      {/* <div className="absolute right-[6%] bottom-[12%] translate-x-1/2 translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.7)]" /> */} 

      {/* Cards */}
      <div className="relative z-10 h-full flex items-center justify-center gap-10">
        <div className="w-[260px] h-[120px] rounded-2xl bg-[radial-gradient(120%_120%_at_50%_-20%,rgba(255,255,255,0.18)_0%,rgba(52,102,170,0.18)_40%,rgba(0,0,0,0.2)_100%)] border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md flex flex-col items-center justify-center">
          <span className="text-4xl font-extrabold text-white">150+</span>
          <span className="mt-2 text-sm text-[#c7d0d9]">Relied on by Leaders</span>
        </div>
        <div className="w-[260px] h-[120px] rounded-2xl bg-[radial-gradient(120%_120%_at_50%_-20%,rgba(255,255,255,0.18)_0%,rgba(52,102,170,0.18)_40%,rgba(0,0,0,0.2)_100%)] border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md flex flex-col items-center justify-center">
          <span className="text-4xl font-extrabold text-white">300+</span>
          <span className="mt-2 text-sm text-[#c7d0d9]">Real-Time User</span>
        </div>
        <div className="w-[260px] h-[120px] rounded-2xl bg-[radial-gradient(120%_120%_at_50%_-20%,rgba(255,255,255,0.18)_0%,rgba(52,102,170,0.18)_40%,rgba(0,0,0,0.2)_100%)] border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md flex flex-col items-center justify-center">
          <span className="text-4xl font-extrabold text-white">15+</span>
          <span className="mt-2 text-sm text-[#c7d0d9]">Industry Expertise</span>
        </div>
      </div>
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
