"use client";
import React from "react";
import { Navbar } from "../../src/components/Navbar";
import FooterSection from "../../src/components/sections/FooterSection";
import { MessageCircle, Users, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="relative bg-black text-[#bbbbbb] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-24 pb-16 px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 max-w-4xl leading-tight">
          Turning Your Vision Into Seamless Digital Solutions.
        </h1>
        <p className="max-w-2xl mt-6 text-gray-400 text-sm sm:text-base leading-relaxed">
          We're here to connect, collaborate, and create amazing together.
          Whether you have a project in mind, a question to ask, or you just
          want to say hello - just a message away.
        </p>
      </section>

      {/* Flow Diagram Section (Let's Talk) */}
      <section className="flex items-center justify-center px-6 py-16 relative">
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 max-w-6xl w-full">
          {/* Central Hub Circle */}
          <div className="relative z-20 flex items-center justify-center lg:pl-36">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center">
              <div className="text-center px-8">
                <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                  Connect.
                  <br />
                  Collaborate.
                  <br />
                  Create
                </h3>
              </div>
            </div>
          </div>

          {/* Straight connectors removed */}

          {/* Curved dotted connectors (desktop only) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
            <svg viewBox="0 0 1200 700" className="w-full h-full">
              {/* top connector */}
              <path d="M420 170 C 520 140, 640 120, 760 120" fill="none" stroke="#9aa3b2" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round"/>
              <circle cx="410" cy="175" r="6" fill="#e6eef7" />
              {/* middle connector */}
              <path 
  d="M410 350 L760 350" 
  fill="none" 
  stroke="#9aa3b2" 
  stroke-width="2" 
  stroke-dasharray="6 8" 
  stroke-linecap="round" 
/>
<circle cx="410" cy="350" r="6" fill="#e6eef7" />

              {/* bottom connector */}
              <path d="M420 530 C 520 560, 640 580, 760 580" fill="none" stroke="#9aa3b2" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round"/>
              <circle cx="410" cy="530" r="6" fill="#e6eef7" />
            </svg>
          </div>

          {/* Right Side Pills */}
          <div className="relative z-20 flex flex-col gap-6 lg:ml-auto lg:pl-20 w-full lg:w-auto">
            {/* Quick Support */}
            <div className="relative group">
              <div className="bg-[#0a0a0a] border border-white/20 border-dashed rounded-full pl-4 pr-6 py-4 hover:border-white/30 transition-all duration-300 w-full lg:w-[460px]">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/0 border border-white/20">
                    <div className="absolute left-0 top-0 h-full w-1/2 rounded-l-full bg-[#82b7dc]/20" />
                    <MessageCircle className="w-6 h-6 text-[#82b7dc]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base md:text-lg">
                      Quick Support
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      Get timely responses from our team.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#82b7dc] border-2 border-black"></div>
              </div>
            </div>

            {/* Collaborate Hub */}
            <div className="relative group">
              <div className="bg-[#0a0a0a] border border-white/20 border-dashed rounded-full pl-4 pr-6 py-4 hover:border-white/30 transition-all duration-300 w-full lg:w-[460px]">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/0 border border-white/20">
                    <div className="absolute left-0 top-0 h-full w-1/2 rounded-l-full bg-[#82b7dc]/20" />
                    <Users className="w-6 h-6 text-[#82b7dc]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base md:text-lg">
                      Collaborate Hub
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      Share your ideas, and let's explore possibilities.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#82b7dc] border-2 border-black"></div>
              </div>
            </div>

            {/* Project Inquiry */}
            <div className="relative group">
              <div className="bg-[#0a0a0a] border border-white/20 border-dashed rounded-full pl-4 pr-6 py-4 hover:border-white/30 transition-all duration-300 w-full lg:w-[460px]">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/0 border border-white/20">
                    <div className="absolute left-0 top-0 h-full w-1/2 rounded-l-full bg-[#82b7dc]/20" />
                    <Send className="w-6 h-6 text-[#82b7dc]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base md:text-lg">
                      Project Inquiry
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      Discuss your business goals and how we can help.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#82b7dc] border-2 border-black"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 py-20">
        <div className="bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] rounded-[28px] mx-auto max-w-6xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
            {/* Left info */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#82b7dc] mb-6 uppercase tracking-wide leading-tight">
                Together,
                <br />
                We'll Build
                <br />
                What's Next.
              </h2>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span>0948764323</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span>support@wavez.com</span>
                </div>
              </div>
            </div>

            {/* Right form */}
            <form className="space-y-5">
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-[#bbbbbb] placeholder-gray-500 focus:outline-none focus:border-[#82b7dc] focus:ring-1 focus:ring-[#82b7dc]/60 transition-all"
                />
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-[#bbbbbb] placeholder-gray-500 focus:outline-none focus:border-[#82b7dc] focus:ring-1 focus:ring-[#82b7dc]/60 transition-all"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Message"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[#bbbbbb] placeholder-gray-500 focus:outline-none focus:border-[#82b7dc] focus:ring-1 focus:ring-[#82b7dc]/60 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="relative inline-flex items-center gap-3 bg-white/90 text-black rounded-full pl-5 pr-14 py-3 font-semibold transition-all duration-300 hover:bg-white"
              >
                <span>Submit Inquiry</span>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
