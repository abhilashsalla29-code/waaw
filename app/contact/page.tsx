"use client";
import { Navbar } from "../../src/components/Navbar";
import FooterSection from "../../src/components/sections/FooterSection";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="relative bg-black text-white">
      <Navbar />

      {/* Section Header */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-sm tracking-widest text-gray-400 uppercase">
          Let's Talk
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
          Turning Your Vision Into Seamless Digital Solutions
        </h1>
        <p className="max-w-2xl mt-4 text-gray-400 text-sm sm:text-base">
          We're here to connect, collaborate, and create solutions together.
          Whether you have a project in mind, a question to ask, or simply want
          to say hello — our team is just a message away.
        </p>
      </section>

      {/* Flow Circles Section */}
      <section className="flex flex-col items-center space-y-6 mb-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-gray-700">
              <Send className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold">Quick Support</h3>
            <p className="text-gray-400 text-sm max-w-[200px]">
              Get a timely response from our team.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-gray-700">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold">Collaborate Hub</h3>
            <p className="text-gray-400 text-sm max-w-[200px]">
              Share your ideas, tasks, and let's explore together.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-gray-700">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold">Project Inquiry</h3>
            <p className="text-gray-400 text-sm max-w-[200px]">
              Discuss your business goals and how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#0a0a0a] rounded-2xl mx-auto max-w-3xl p-10 shadow-xl border border-gray-800 mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6">
          Together, we'll build what's next.
        </h2>

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          ></textarea>
          <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-6 py-2 font-semibold transition">
            Submit Inquiry
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> <span>0948764323</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> <span>support@wavez.com</span>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
