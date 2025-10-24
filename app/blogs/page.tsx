"use client";
import { Navbar } from "../../src/components/Navbar";
import FooterSection from "../../src/components/sections/FooterSection";
import BlogsSection from "../../src/components/sections/BlogsSection";

export default function Blogs() {
  return (
    <main className="relative">
      <Navbar />
      {/* <div className="min-h-screen bg-black text-[#bbbbbb] flex items-center justify-center">
        <h1 className="text-4xl font-bold">Blogs</h1>
      </div> */}
      <div className=" bg-black text-[#bbbbbb] top-6  ">
      <BlogsSection  />
      </div>
      <FooterSection />
    </main>
  );
}
