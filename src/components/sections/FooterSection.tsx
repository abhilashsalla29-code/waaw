import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const socialIcons = [
  { src: "/frame-14.svg", alt: "Social icon 1" },
  { src: "/frame-15.svg", alt: "Social icon 2" },
  { src: "/frame-16.svg", alt: "Social icon 3" },
];

const contactIcons = [
  { src: "/frame-17-3.svg", alt: "Phone icon" },
  { src: "/frame-18.svg", alt: "Email icon" },
];

const companyLinks = [
  { label: "Home" },
  { label: "About Us" },
  { label: "Services" },
  { label: "Blogs" },
  { label: "Let's Talk" },
];

const resourceLinks = [
  { label: "Features" },
  { label: "Pricing" },
  { label: "Industry" },
  { label: "Roadmap" },
  { label: "FAQ" },
];

const legalLinks = [
  { label: "Privacy Policy" },
  { label: "Refund Policy" },
  { label: "Terms and Condition" },
];

const verticalBars = [
  { left: "left-0" },
  { left: "left-[2.89%]" },
  { left: "left-[5.70%]" },
  { left: "left-[8.59%]" },
  { left: "left-[11.39%]" },
  { left: "left-[14.29%]" },
  { left: "left-[17.18%]" },
  { left: "left-[19.98%]" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full relative bg-black overflow-hidden py-[84px] px-[167px]">
      <div className="absolute top-[-145px] left-[-145px] w-[290px] h-[290px] rounded-[145px] blur-[250px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />

      <div className="absolute top-[777px] left-[1363px] w-[290px] h-[290px] rounded-[145px] blur-[250px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />

      <div className="relative w-full max-w-[1106px] mx-auto h-[358px] rounded-[30px] overflow-hidden border border-solid border-[#ffffff33] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] bg-[linear-gradient(11deg,rgba(0,0,0,0.1)_100%)]">
        <img
          className="absolute top-[263px] left-28 w-[920px] h-[190px]"
          alt="Ellipse"
          src="/ellipse-3-1.svg"
        />

        <div className="absolute top-[53px] left-[515px] w-[517px] [font-family:'Montserrat',Helvetica] font-extrabold text-[#82b7dc] text-4xl tracking-[0] leading-[normal]">
          WHERE IDEAS FLOW AND BRANDS GROW.
        </div>

        <img
          className="absolute w-[41.95%] h-[98.32%] top-0 left-0"
          alt="Tknot alum"
          src="/tknot-alum-1-1.png"
        />

        <div className="absolute top-[-15px] left-[322px] w-[53px] h-[53px] rounded-[26.5px] blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)]" />

        {verticalBars.map((bar, index) => (
          <div
            key={`bar-${index}`}
            className={`absolute w-[2.89%] top-[calc(50.00%_-_478px)] ${bar.left} h-[1041px] shadow-[inset_-2.5px_0px_2.5px_#bababa,inset_2.5px_0px_2.5px_#00000069] bg-[linear-gradient(90deg,rgba(103,103,103,1)_0%,rgba(255,255,255,0.54)_46%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(24,24,24,0.49)_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0)_100%)]`}
          />
        ))}

        <Button className="absolute top-[222px] left-[515px] w-[198px] h-[50px] bg-gradient-to-r from-[#3466aa] to-[#3466aa] hover:from-[#2a5590] hover:to-[#2a5590] rounded-[25px] h-auto">
          <span className="[font-family:'Montserrat',Helvetica] font-bold text-white text-base">
            Get Started
          </span>
          <ArrowRightIcon className="ml-2 w-[14.43%] h-[44.45%]" />
        </Button>

        <div className="absolute top-[162px] left-[calc(50.00%_-_38px)] w-[472px] [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-sm tracking-[0] leading-[normal]">
          Ideas begin as ripples and rise into powerful waves of creation. At
          Waave, we shape digital experiences that move brands forward.
        </div>
      </div>

      <div className="relative mt-[94px] w-full max-w-[1258px] mx-auto h-px [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_40%,rgba(0,0,0,1)_100%)]" />

      <div className="relative mt-[67px] w-full max-w-[1258px] mx-auto grid grid-cols-4 gap-8">
        <div className="flex flex-col">
          <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#bbbbbb] text-[32px] tracking-[0] leading-[normal] mb-[27px]">
            Waave
          </h3>
          <div className="flex gap-[14px]">
            {socialIcons.map((icon, index) => (
              <img
                key={`social-${index}`}
                className="w-[51px] h-[51px] cursor-pointer hover:opacity-80 transition-opacity"
                alt={icon.alt}
                src={icon.src}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xl text-center tracking-[0] leading-[normal] mb-[42px]">
            Company
          </h4>
          <nav className="flex flex-col gap-[28px]">
            {companyLinks.map((link, index) => (
              <a
                key={`company-${index}`}
                href="#"
                className="[font-family:'Montserrat',Helvetica] font-normal text-[#bbbbbb] text-base text-center tracking-[0] leading-[normal] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col">
          <h4 className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xl text-center tracking-[0] leading-[normal] mb-[42px]">
            Resources
          </h4>
          <nav className="flex flex-col gap-[28px]">
            {resourceLinks.map((link, index) => (
              <a
                key={`resource-${index}`}
                href="#"
                className="[font-family:'Montserrat',Helvetica] font-normal text-[#bbbbbb] text-base text-center tracking-[0] leading-[normal] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col">
          <h4 className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xl text-center tracking-[0] leading-[normal] mb-[54px]">
            Let&apos;s Talk
          </h4>
          <div className="flex flex-col gap-[13px] items-center">
            <div className="flex items-center gap-3">
              <img
                className="w-[51px] h-[51px]"
                alt={contactIcons[0].alt}
                src={contactIcons[0].src}
              />
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#bbbbbb] text-base tracking-[0] leading-[normal]">
                0986753423
              </span>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="w-[51px] h-[51px]"
                alt={contactIcons[1].alt}
                src={contactIcons[1].src}
              />
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#bbbbbb] text-base tracking-[0] leading-[normal]">
                support@waave.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-[50px] w-full max-w-[921px] ml-auto h-px [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_40%,rgba(0,0,0,1)_100%)]" />

      <div className="relative mt-[47px] w-full max-w-[1258px] mx-auto flex items-center justify-center gap-[105px]">
        <p className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[normal]">
          Copyright © 2025 Waave. All rights reserved
        </p>
        {legalLinks.map((link, index) => (
          <a
            key={`legal-${index}`}
            href="#"
            className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[normal] hover:text-[#82b7dc] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default FooterSection;
