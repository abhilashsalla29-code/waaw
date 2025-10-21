"use client";
import { Navbar } from "../../src/components/Navbar";
import FooterSection from "../../src/components/sections/FooterSection";

export default function Blogs() {
  return (
    <main className="relative">
      <Navbar />
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Blogs</h1>
      </div>
      <FooterSection />
    </main>
  );
}
