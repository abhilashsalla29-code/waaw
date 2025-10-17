import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { BlogsSection } from "./sections/BlogsSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { FooterSection } from "./sections/FooterSection";
import { HomePageSection } from "./sections/HomePageSection";
import { HomePageWrapperSection } from "./sections/HomePageWrapperSection";
import { MainContentSection } from "./sections/MainContentSection";
import { PricingSection } from "./sections/PricingSection";
import { ServicesSection } from "./sections/ServicesSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] flex flex-col">
      <HomePageSection />
      <HomePageWrapperSection />
      <AboutUsSection />
      <ServicesSection />
      <PricingSection />
      <BlogsSection />
      <MainContentSection />
      <ContentWrapperSection />
      <FooterSection />
    </div>
  );
};
