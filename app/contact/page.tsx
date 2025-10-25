"use client";
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
          {/* <h2 className="text-xs sm:text-sm tracking-[0.3em] text-gray-400 uppercase font-light">
            Let's Talk
          </h2> */}
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

      {/* Flow Diagram Section */}
      <section className="flex items-center justify-center px-6 py-16 relative">
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 max-w-6xl w-full">
          {/* Central Hub Circle */}
          <div className="relative z-10 flex items-center justify-center">
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

          {/* Connecting Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            {/* Top Line */}
            <div className="absolute top-[15%] left-[35%] w-[15%] h-[1px] border-t border-dashed border-gray-700"></div>
            {/* Middle Line */}
            <div className="absolute top-1/2 left-[35%] w-[15%] h-[1px] border-t border-dashed border-gray-700"></div>
            {/* Bottom Line */}
            <div className="absolute top-[85%] left-[35%] w-[15%] h-[1px] border-t border-dashed border-gray-700"></div>
          </div>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-6 lg:ml-auto lg:pl-24 w-full lg:w-auto">
            {/* Quick Support */}
            <div className="relative group">
              <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 w-full lg:w-80">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 border border-blue-500/30">
                    <MessageCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Quick Support</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Get timely response from our team.
                    </p>
                  </div>
                </div>
                {/* Dot indicator */}
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 border-2 border-black"></div>
              </div>
            </div>

            {/* Collaborate Hub */}
            <div className="relative group">
              <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 w-full lg:w-80">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 border border-blue-500/30">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Collaborate Hub</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Share ideas, vision, and knowledge together.
                    </p>
                  </div>
                </div>
                {/* Dot indicator */}
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 border-2 border-black"></div>
              </div>
            </div>

            {/* Project Inquiry */}
            <div className="relative group">
              <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 w-full lg:w-80">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 border border-blue-500/30">
                    <Send className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Project Inquiry</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Discuss new ventures, goals and how we can help.
                    </p>
                  </div>
                </div>
                {/* Dot indicator */}
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 border-2 border-black"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 py-20">
        <div className="bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] rounded-3xl mx-auto max-w-4xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-gray-800 relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-8 uppercase tracking-wide">
              Together,
              <br />
              We'll Build
              <br />
              What's Next.
            </h2>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full bg-black/40 border border-gray-700 rounded-xl px-5 py-3.5 text-[#bbbbbb] placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full bg-black/40 border border-gray-700 rounded-xl px-5 py-3.5 text-[#bbbbbb] placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Message"
                  className="w-full bg-black/40 border border-gray-700 rounded-xl px-5 py-3.5 text-[#bbbbbb] placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-white hover:bg-gray-100 text-black rounded-full px-8 py-3 font-semibold transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mt-10 pt-8 border-t border-gray-800">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-5 h-5 flex items-center justify-center">
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

              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-5 h-5 flex items-center justify-center">
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
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
