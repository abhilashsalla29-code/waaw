"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Main container with two-column layout */}
      <div className="container mx-auto px-6 py-20 flex items-center justify-between">
        
        {/* LEFT SIDE - Content */}
        <div className="flex-1 max-w-2xl">
          <motion.h1
            className="text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TURNING YOUR IDEAS<br />INTO HIGH IMPACT
          </motion.h1>

          <motion.h2
            className="text-6xl font-bold text-[#82b7dc] mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            DIGITAL PRODUCTS
          </motion.h2>

          <motion.p
            className="text-base text-gray-300 mt-6 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            From mobile apps to web platforms, we design and develop tailored solutions that elevate your business.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button className="bg-white text-[#3466aa] font-semibold rounded-full px-8 py-3 text-base flex items-center gap-2 hover:bg-[#f0f4ff]">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.497.497 0 0 1 .146.35v.008a.498.498 0 0 1-.146.35l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Button>
          </motion.div>
        </div>

        {/* RIGHT SIDE - 3D Images */}
        <div className="relative flex-1 flex items-center justify-end">
          <div className="relative w-[500px] h-[500px]">
            <Image
              src="/homepb.png"
              alt="3D metallic knot"
              width={500}
              height={500}
              className="object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.3)]"
            />
          </div>
        </div>
      </div>

      {/* Frosted image - attached to the right edge of screen */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] pointer-events-none">
        <Image
          src="/wider-frosted-reeds.png"
          alt="Frosted overlay effect"
          
          fill
          className="object-cover  opacity-40 object-left drop-shadow-[0_0_60px_rgba(255,255,255,0.2)]"
        />
      </div>

      {/* Bottom Stats Section */}
      <div className="absolute bottom-16 left-0 right-0">
        <div className="container mx-auto px-6 flex justify-center relative">
          {/* Divider Line */}
          <div className="absolute inset-x-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-sm" />
          
          {/* Stats Cards */}
          <div className="flex gap-16 relative z-10">
            <Stat number="150+" label="Relied on by Leaders" />
            <Stat number="300+" label="Real-Time User" />
            <Stat number="15+" label="Industry Expertise" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="relative w-[200px] h-[110px] flex flex-col items-center justify-center bg-gradient-to-b from-white/10 to-[#3466aa]/20 border border-white/20 backdrop-blur-lg rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.1)]">
      <span className="text-4xl font-bold text-white">{number}</span>
      <p className="mt-2 text-xs text-gray-300">{label}</p>
    </div>
  );
}
