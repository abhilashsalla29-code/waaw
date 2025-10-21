"use client";
import { Navbar } from "../../src/components/Navbar";
import FooterSection from "../../src/components/sections/FooterSection";
import AboutUsSection from "../../src/components/sections/AboutUsSection";

export default function About() {
  return (
    <main className="relative">
      <Navbar />
      <AboutUsSection />
      <FooterSection />
    </main>
  );
}
