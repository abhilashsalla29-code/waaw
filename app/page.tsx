"use client";
import { Navbar } from "../src/components/Navbar";
import Hero from "../src/components/home/Hero";
import { AudienceGrid } from "../src/components/home/AudienceGrid";
import AboutUsSection from "../src/components/sections/AboutUsSection";
import { ServicesSection } from "../src/components/sections/ServicesSection";
import PricingSection from "../src/components/sections/PricingSection";
import BlogsSection from "../src/components/sections/BlogsSection";
import MainContentSection from "../src/components/sections/MainContentSection";
import ContentWrapperSection from "../src/components/sections/ContentWrapperSection";
import FooterSection from "../src/components/sections/FooterSection";

export default function Page() {
  return (
    <main id="home" className="relative">
      <Navbar />
      <Hero />
      <AudienceGrid />
      <section id="about">
        <AboutUsSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section className="mt-0" id="blogs">
        <BlogsSection />
      </section>
      <MainContentSection />
      <ContentWrapperSection />
      <FooterSection />
    </main>
  );
}


