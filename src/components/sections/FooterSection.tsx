"use client";
import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";

const socialIcons = [
  { src: "/frame-14.svg", alt: "LinkedIn" },
  { src: "/frame-15.svg", alt: "Instagram" },
  { src: "/frame-16.svg", alt: "YouTube" },
];

const contactIcons = [
  { src: "/frame-17-3.svg", alt: "Phone icon" },
  { src: "/frame-18.svg", alt: "Email icon" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Let's Talk", href: "/contact" },
];
const resourceLinks = [
  { label: "Features", href: "#home" },
  { label: "Pricing", href: "#pricing" },
  { label: "Industry", href: "#industries" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];
const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Terms and Condition", href: "#" },
];

const verticalBars = [
  "left-0",
  "left-[2.89%]",
  "left-[5.70%]",
  "left-[8.59%]",
  "left-[11.39%]",
  "left-[14.29%]",
  "left-[17.18%]",
  "left-[19.98%]",
];

export const FooterSection = (): JSX.Element => (
  <footer className="w-full relative bg-black overflow-hidden py-[40px] sm:py-[60px] md:py-[84px] px-4 sm:px-8 md:px-[167px]">
    {/* Top-left glow */}
    <div className="absolute top-[-145px] left-[-145px] w-[290px] h-[290px] rounded-full blur-[250px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />
    {/* Bottom-right glow */}
    <div className="absolute bottom-[-145px] right-[-145px] w-[290px] h-[290px] rounded-full blur-[250px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />

    {/* Hero card */}
    <div className="relative mx-auto max-w-[1106px] min-h-[400px] md:h-[358px] rounded-[30px] overflow-hidden border border-white/20 backdrop-blur-[2px] backdrop-brightness-[110%] bg-[linear-gradient(11deg,rgba(0,0,0,0.1)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] flex flex-col md:flex-row">
      {/* Left image */}
      <img
        className="w-full md:w-[41.95%] h-[120px] md:h-full object-cover"
        src="/audiencegridm.png"
        alt="Decor"
      />

      {/* Text content */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start p-4 md:p-8 relative">
        {/* Decorative ellipse - hidden on mobile, shown on md+ */}
        <img
          className="hidden md:block absolute top-[180px] left-[-50px] w-[920px] h-[190px]"
          src="/ellipse-3-1.svg"
          alt="Ellipse"
        />

        {/* Small glow circle - adjusted for mobile */}
        <div className="absolute top-[-15px] right-[50px] md:left-[200px] w-[30px] md:w-[53px] h-[30px] md:h-[53px] rounded-full blur-[6px] md:blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)]" />

        {/* Title */}
        <h2 className="w-full md:w-[517px] [font-family:'Montserrat',Helvetica] font-extrabold text-2xl md:text-4xl text-[#82b7dc] text-center md:text-left mb-4">
          WHERE IDEAS FLOW AND BRANDS GROW.
        </h2>

        {/* Subtitle */}
        <p className="w-full md:w-[472px] [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xs md:text-sm text-center md:text-left mb-6">
          Ideas begin as ripples and rise into powerful waves of creation. At
          WAAW, we shape digital experiences that move brands forward.
        </p>

        {/* Button */}
        <Link href="/contact">
          <Button className="flex items-center gap-2 w-[150px] md:w-[198px] h-[40px] md:h-[50px] bg-gradient-to-r from-[#3466aa] to-[#3466aa] hover:from-[#2a5590] hover:to-[#2a5590] rounded-[20px] md:rounded-[25px] hover:scale-105 transition-all duration-300">
            <span className="[font-family:'Montserrat',Helvetica] font-bold text-[#bbbbbb] text-sm md:text-base hover:scale-105 duration-200 transition-all ">
              Get Started
            </span>
            <ArrowRightIcon className="w-4 md:w-6 h-4 md:h-6 text-[#bbbbbb]" />
          </Button>
        </Link>
      </div>
    </div>

    {/* Divider */}
    <div className="mt-10 md:mt-20 w-full max-w-[1258px] mx-auto h-px [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_40%,rgba(0,0,0,1)_100%)]" />

    {/* Footer grid */}
    <div className="mt-8 sm:mt-12 md:mt-16 max-w-[1258px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
      {/* Brand + Social */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#bbbbbb] text-2xl mb-4">
          WAAW
        </h3>
        <div className="flex gap-4">
          {socialIcons.map((icon, i) => (
            <img
              key={i}
              src={icon.src}
              alt={icon.alt}
              className="w-10 h-10 md:w-12 md:h-12 hover:opacity-80 transition-opacity"
            />
          ))}
        </div>
      </div>

      {/* Company Links */}
      <div className="flex flex-col items-center md:items-start">
        <h4 className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xl mb-4">
          Company
        </h4>
        {companyLinks.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="[font-family:'Montserrat',Helvetica] font-normal text-[#bbbbbb] text-base mb-3 hover:text-[#bbbbbb] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Resources */}
      <div className="flex flex-col items-center md:items-start">
        <h4 className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xl mb-4">
          Resources
        </h4>
        {resourceLinks.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="[font-family:'Montserrat',Helvetica] font-normal text-[#bbbbbb] text-base mb-3 hover:text-[#bbbbbb] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Contact */}
      <div className="flex flex-col items-center md:items-start">
        <h4 className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xl mb-4">
          Let&apos;s Talk
        </h4>
        <div className="flex items-center gap-3 mb-3">
          <img src={contactIcons[0].src} alt={contactIcons[0].alt} className="w-8 h-8 md:w-10 md:h-10" />
          <span className="[font-family:'Montserrat',Helvetica] text-[#bbbbbb] text-base">
            0986753423
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img src={contactIcons[1].src} alt={contactIcons[1].alt} className="w-8 h-8 md:w-10 md:h-10" />
          <a
            href="mailto:support@WAAW.com"
            className="[font-family:'Montserrat',Helvetica] text-[#bbbbbb] text-base hover:text-[#bbbbbb] transition-colors"
          >
            support@WAAW.com
          </a>
        </div>
      </div>
    </div>

    {/* Bottom legal */}
    <div className="mt-8 sm:mt-10 md:mt-12 max-w-[1258px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12">
      <p className="[font-family:'Montserrat',Helvetica] font-normal text-[#bbbbbb] text-xs">
        Copyright © 2025 WAAW. All rights reserved
      </p>
      <div className="flex gap-6">
        {legalLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="[font-family:'Montserrat',Helvetica] font-normal text-[#bbbbbb] text-xs hover:text-[#82b7dc] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default FooterSection;
