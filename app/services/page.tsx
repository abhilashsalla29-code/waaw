"use client";
import { Navbar } from "../../src/components/Navbar";
import FooterSection from "../../src/components/sections/FooterSection";
import {ServicesSection} from "../../src/components/sections/ServicesSection";

export default function Services() {
  return (
    <main className="relative">
      <Navbar />
      {/* <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Services</h1>
      </div> */}
         <ServicesSection />
      <FooterSection />
    </main>
  );
}
