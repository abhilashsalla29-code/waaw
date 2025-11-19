"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import InfinityHero from "./InfinityHero";
import ParallaxCard from "../ui/ParallaxCard";
import Galaxy from "../Galaxy";

// -------------------- ORBIT CARD (FIXED PATH) --------------------
function OrbitCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="relative w-[260px] h-[120px] overflow-visible">
      
      {/* Card */}
      <div
        className="absolute inset-0 rounded-2xl z-10 overflow-visible
        bg-[radial-gradient(120%_120%_at_50%_-20%,rgba(255,255,255,0.18)_0%,rgba(52,102,170,0.18)_40%,rgba(0,0,0,0.2)_100%)]
        border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        backdrop-blur-md flex flex-col items-center justify-center"
      >
        <span className="text-4xl font-extrabold text-white">{number}</span>
        <span className="mt-2 text-sm text-[#c7d0d9]">{label}</span>
      </div>

      {/* Orbiting ball */}
      <svg
        className="absolute inset-0 w-full h-full z-20 overflow-visible pointer-events-none"
        viewBox="0 0 260 120"
        fill="none"
      >
        <motion.circle
          r="4"                 // smaller ball
          cx="0"
          cy="0"
          fill="white"
          style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))" }}
          animate={{
            opacity: [0.6, 0.2, 1], // top = visible, sides = dim, bottom = visible
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M 20 0 H 240 Q 260 0 260 20 V 100 Q 260 120 240 120 H 20 Q 0 120 0 100 V 20 Q 0 0 20 0 Z"
          />
        </motion.circle>
      </svg>

    </div>
  );
}


// -------------------- MAIN HERO --------------------
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black text-[#bbbbbb] overflow-hidden">
      <div className="absolute inset-0 hidden lg:block z-0">
        <Galaxy
          className="absolute inset-0"
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.2}
          glowIntensity={0.55}
          saturation={0}
          hueShift={0}
          twinkleIntensity={0.5}
          rotationSpeed={0.04}
          monochrome
          style={{ opacity: 0.85 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black pointer-events-none z-10" />
      </div>
      <div className="relative z-10">
        {/* MOBILE VERSION */}
        <div className="lg:hidden pt-20">
          <div className="container mx-auto px-4 py-2 flex flex-col items-center gap-6">

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
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#82b7dc] to-[#5D3ACD] bg-clip-text text-transparent"
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
                <motion.div
                  animate={{ rotate: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="origin-center"
                >
                  <Link
                    href="/contact"
                    className="relative block w-[200px] h-[59px] z-40 hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <img src="/subtract-4.svg" alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative z-10 flex items-center justify-between px-5 h-full">
                      <span className="font-semibold text-black text-xl">Get Started</span>
                      <img src="/vector-20.svg" className="w-6 h-6" />
                    </div>
                  </Link>
                </motion.div>
              </motion.div>

            </div>

            <div className="relative flex items-center justify-center mb-2 ">
              <motion.img
                src="/land1.png"
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="w-full max-w-[240px] sm:max-w-[320px] object-cover rounded-lg"
                style={{ aspectRatio: "480/220" }}
              />
            </div>

            <div className="relative z-10 flex flex-col gap-4 items-center pb-8">
              <Stat number="150+" label="Relied on by Leaders" />
              <Stat number="300+" label="Real-Time User" className="-mt-6" />
              <Stat number="15+" label="Industry Expertise" className="-mt-6" />
            </div>
          </div>
        </div>

        {/* DESKTOP VERSION */}
        <div className="relative hidden flex flex-col mt-40  h-full lg:block">
          <div className="container mx-auto px-4  flex flex-row items-center justify-between gap-8 ">

            <div className="flex-1 max-w-2xl text-left space-y-4 mt-2 ">
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
                className="text-5xl font-bold bg-gradient-to-r from-[#5D3ACD] to-[#82b7dc] bg-clip-text text-transparent"
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
                <motion.div
                  animate={{ rotate: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="origin-center"
                >
                  <Link
                    href="/contact"
                    className="relative block w-[200px] h-[59px] hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <img src="/subtract-4.svg" alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative z-10 flex items-center justify-between px-5 h-full">
                      <span className="font-semibold text-black text-xl">Get Started</span>
                      <img src="/vector-20.svg" className="w-6 h-6" />
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <div className="relative flex-1 flex items-center justify-center animate-pulse hover:scale-105 transition-transform duration-300 ">
              <motion.img
                src="/land.png"
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="w-full max-w-[560px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP STATS WITH ORBITING ANIMATION */}
      <div className="hidden lg:block absolute bottom-16 left-0 right-0 z-20">
        <div className="container mx-auto px-4 flex justify-center relative h-[180px]">
          <div className="w-full h-full flex items-center justify-center gap-10 hover:gap-12 transition-all duration-300">
            <ParallaxCard intensity={8}>
              <OrbitCard number="150+" label="Relied on by Leaders" />
            </ParallaxCard>
            <ParallaxCard intensity={8}>
              <OrbitCard number="300+" label="Real-Time User" />
            </ParallaxCard>
            <ParallaxCard intensity={8}>
              <OrbitCard number="15+" label="Industry Expertise" />
            </ParallaxCard>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------- MOBILE STAT CARD --------------------
function Stat({ number, label, className }: { number: string; label: string; className?: string }) {
  return (
    <div
      className={`w-[180px] h-[100px] flex flex-col items-center justify-center bg-gradient-to-b from-white/10 to-[#3466aa]/20 border border-white/20 backdrop-blur-lg rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] ${className}`}
    >
      <span className="text-2xl sm:text-3xl font-bold">{number}</span>
      <p className="mt-1 text-xs sm:text-sm text-gray-300">{label}</p>
    </div>
  );
}
