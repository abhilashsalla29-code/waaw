"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import InfinityHero from "./InfinityHero";
// Button removed in favor of SVG-wrapped CTA matching navbar

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black text-[#bbbbbb] overflow-hidden">
      {/* MOBILE VERSION - Hidden on lg+ */}
      <div className="lg:hidden">
        <div className="container mx-auto px-4 py-12 flex flex-col items-center gap-6">
          {/* Content */}
          <div className="flex-1 max-w-2xl text-center space-y-4">
            <motion.h1
              className="text-2xl sm:text-3xl font-bold leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              TURNING YOUR IDEAS<br />
              INTO HIGH IMPACT
            </motion.h1>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-[#82b7dc]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              DIGITAL PRODUCTS
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              From mobile apps to web platforms, we design and develop tailored solutions that elevate your business.
            </motion.p>
            <motion.div
              className="mt-6 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="relative block w-[200px] h-[59px] z-[60] hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
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

          {/* Landing Image - Mobile */}
          <div className="relative flex items-center justify-center mb-2">
            <motion.img
              src="/land1.png"
              alt="Landing Page Image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="w-full max-w-[240px] sm:max-w-[320px] object-cover rounded-lg"
              style={{ aspectRatio: '480/220' }}
            />
          </div>

          {/* Stats Cards - Mobile */}
          <div className="relative z-10 flex flex-col gap-4 items-center pb-8">
            <Stat number="150+" label="Relied on by Leaders" />
            <Stat number="300+" label="Real-Time User" className="-mt-6" />
            <Stat number="15+" label="Industry Expertise" className="-mt-6" />
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION - Hidden below lg */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4 py-24 flex flex-row items-center justify-between gap-8">
          {/* LEFT SIDE */}
          <div className="flex-1 max-w-2xl text-left space-y-4 mt-2">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              TURNING YOUR IDEAS<br />
              INTO HIGH IMPACT
            </motion.h1>
            <motion.h2
              className="text-5xl font-bold text-[#82b7dc]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              DIGITAL PRODUCTS
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              From mobile apps to web platforms, we design and develop tailored solutions that elevate your business.
            </motion.p>
            <motion.div
              className="mt-6 flex justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="relative block w-[200px] h-[59px]  hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
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

          {/* RIGHT SIDE - Landing Image */}
          <div className="relative flex-1 flex items-center justify-center animate-pulse hover:scale-105  transition-transform duration-300">
            <motion.img
              src="/land.png"
              alt="Landing Page Image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="w-full max-w-[560px] object-cover rounded-lg"
              style={{ aspectRatio: '480/220' }}
            />
          </div>
        </div>
 
        {/* Desktop Stats */}
        <div className="absolute bottom-16 left-0 right-0 ">
          <div className="container mx-auto px-4 flex justify-center relative h-[180px]">
            <div className="relative z-10 w-full h-full flex items-center justify-center gap-10 hover:gap-12 transition-all duration-300">
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
