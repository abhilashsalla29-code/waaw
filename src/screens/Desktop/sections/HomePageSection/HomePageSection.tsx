import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const navigationLinks = [
  { label: "Home", active: true },
  { label: "About Us", active: false },
  { label: "Services", active: false },
  { label: "Blogs", active: false },
];

const statsCards = [
  {
    number: "150+",
    description: "Relied on by Leaders",
  },
  {
    number: "300+",
    description: "Real-Time User",
  },
  {
    number: "15+",
    description: "Industry Expertise",
  },
];

const decorativeCircles = [
  {
    top: "top-[598px]",
    left: "left-[1077px]",
    size: "w-[77px] h-[77px]",
    rounded: "rounded-[38.5px]",
  },
  {
    top: "top-[243px]",
    left: "left-[1237px]",
    size: "w-[53px] h-[53px]",
    rounded: "rounded-[26.5px]",
  },
  {
    top: "top-[708px]",
    left: "left-[1237px]",
    size: "w-8 h-8",
    rounded: "rounded-2xl",
  },
  {
    top: "top-[443px]",
    left: "left-[861px]",
    size: "w-[25px] h-[25px]",
    rounded: "rounded-[12.5px]",
  },
  {
    top: "top-[662px]",
    left: "left-[966px]",
    size: "w-[25px] h-[25px]",
    rounded: "rounded-[12.5px]",
  },
];

const decorativeLines = [
  {
    top: "top-[837px]",
    left: "left-[1319px]",
    width: "w-[43px]",
    height: "h-px",
    rounded: "rounded-[21.5px/0.5px]",
    rotate: "rotate-90",
    blur: "blur-[2px]",
  },
  {
    top: "top-[434px]",
    left: "left-[789px]",
    width: "w-[43px]",
    height: "h-px",
    rounded: "rounded-[21.5px/0.5px]",
    rotate: "rotate-90",
    blur: "blur-[2px]",
  },
  {
    top: "top-[274px]",
    left: "left-[59px]",
    width: "w-[43px]",
    height: "h-px",
    rounded: "rounded-[21.5px/0.5px]",
    rotate: "rotate-90",
    blur: "blur-[2px]",
  },
];

const decorativeDots = [
  {
    top: "top-[811px]",
    left: "left-[1335px]",
    size: "w-[11px] h-[11px]",
    rounded: "rounded-[5.5px]",
    rotate: "rotate-180",
  },
  {
    top: "top-[408px]",
    left: "left-[805px]",
    size: "w-[11px] h-[11px]",
    rounded: "rounded-[5.5px]",
    rotate: "rotate-180",
  },
  {
    top: "top-[248px]",
    left: "left-[75px]",
    size: "w-[11px] h-[11px]",
    rounded: "rounded-[5.5px]",
    rotate: "rotate-180",
  },
];

const horizontalLines = [
  {
    top: "top-[743px]",
    left: "left-[198px]",
    width: "w-[467px]",
    rotate: "rotate-180",
  },
  { top: "top-[743px]", left: "left-[737px]", width: "w-[467px]", rotate: "" },
  { top: "top-[962px]", left: "left-[198px]", width: "w-[467px]", rotate: "" },
  {
    top: "top-[962px]",
    left: "left-[739px]",
    width: "w-[467px]",
    rotate: "rotate-180",
  },
];

const largeCircles = [
  { top: "top-[761px]", left: "left-[185px]", rotate: "rotate-180" },
  { top: "top-[728px]", left: "left-[639px]", rotate: "-rotate-90" },
  { top: "top-[728px]", left: "left-[728px]", rotate: "-rotate-90" },
  { top: "top-[946px]", left: "left-[185px]", rotate: "rotate-90" },
  { top: "top-[946px]", left: "left-[1182px]", rotate: "-rotate-90" },
];

export const HomePageSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[1024px] overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)]">
      <img
        className="absolute w-[36.18%] h-[38.57%] top-[26.37%] left-[58.75%]"
        alt="Tknot alum"
        src="/tknot-alum-1.png"
      />

      {decorativeCircles.map((circle, index) => (
        <div
          key={`circle-${index}`}
          className={`absolute ${circle.top} ${circle.left} ${circle.size} ${circle.rounded} blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)]`}
        />
      ))}

      {decorativeLines.map((line, index) => (
        <div
          key={`line-${index}`}
          className={`${line.top} ${line.left} ${line.width} ${line.height} ${line.rounded} ${line.rotate} ${line.blur} absolute bg-white`}
        />
      ))}

      {decorativeDots.map((dot, index) => (
        <div
          key={`dot-${index}`}
          className={`${dot.top} ${dot.left} ${dot.size} ${dot.rounded} ${dot.rotate} blur-sm absolute bg-white`}
        />
      ))}

      <img
        className="absolute top-0 left-[calc(50.00%_+_480px)] w-[301px] h-[1041px]"
        alt="Wider frosted reeds"
        src="/wider-frosted-reeds.png"
      />

      <nav className="absolute top-[47px] left-[1025px] w-[271px] h-[59px]">
        <Button className="relative w-full h-full bg-transparent hover:bg-transparent p-0 h-auto">
          <img
            className="absolute top-0 left-0 w-[269px] h-[59px]"
            alt="Subtract"
            src="/subtract-2.svg"
          />
          <span className="relative z-10 [font-family:'Montserrat',Helvetica] font-semibold text-black text-2xl">
            Let&apos;s Talk
          </span>
          <img
            className="absolute w-[11.73%] h-[43.48%] top-[27.94%] left-[81.55%] z-10"
            alt="Vector"
            src="/vector-20.svg"
          />
        </Button>
      </nav>

      <nav className="absolute top-[62px] left-[417px] flex gap-[50px]">
        {navigationLinks.map((link, index) => (
          <button
            key={`nav-${index}`}
            className={`[font-family:'Montserrat',Helvetica] font-semibold text-2xl tracking-[0] leading-[normal] ${
              link.active ? "text-[#82b7dc]" : "text-white"
            } hover:text-[#82b7dc] transition-colors`}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <div className="absolute top-[608px] left-[100px] w-[241px] h-[54px]">
        <Button className="relative w-full h-full bg-transparent hover:bg-transparent p-0 h-auto">
          <img
            className="absolute top-px left-0 w-[239px] h-[54px]"
            alt="Subtract"
            src="/subtract-4.svg"
          />
          <span className="relative z-10 [font-family:'Montserrat',Helvetica] font-bold text-[#3466aa] text-xl">
            Get Started
          </span>
          <img
            className="absolute w-[13.49%] h-[48.92%] top-[27.20%] left-[75.52%] z-10"
            alt="Vector"
            src="/vector-15.svg"
          />
        </Button>
      </div>

      <h1 className="absolute top-[243px] left-[100px] w-[600px] [font-family:'Montserrat',Helvetica] font-extrabold text-white text-[50px] tracking-[0] leading-[70px]">
        TURNING YOUR IDEAS <br />
        INTO HIGH IMPACT
      </h1>

      <h2 className="absolute top-[388px] left-[100px] w-[696px] font-extrabold text-[#82b7dc] text-[66px] [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
        DIGITAL PRODUCTS
      </h2>

      <p className="absolute top-[521px] left-[calc(50.00%_-_620px)] w-[585px] [font-family:'Inter',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
        From mobile apps to web platforms, we design and develop tailored
        solutions that elevate your business.
      </p>

      <div className="absolute top-[856px] left-[122px] w-[157px] h-1 bg-white rounded-[78.5px/2px] rotate-90 blur-[5px]" />

      {horizontalLines.map((line, index) => (
        <div
          key={`hline-${index}`}
          className={`absolute ${line.top} ${line.left} ${line.width} h-1 bg-white rounded-[233.5px/2px] ${line.rotate} blur-[12.5px]`}
        />
      ))}

      {largeCircles.map((circle, index) => (
        <div
          key={`large-circle-${index}`}
          className={`absolute ${circle.top} ${circle.left} w-[35px] h-[35px] bg-white rounded-[17.5px] ${circle.rotate} blur-sm`}
        />
      ))}

      <div className="absolute top-[761px] left-[1185px] w-[35px] h-[175px] flex flex-col gap-[59.5px]">
        <div className="h-[35px] rounded-[17.5px] rotate-180 bg-white blur-sm" />
        <div className="ml-[-63.5px] w-[157px] h-1 bg-white rounded-[78.5px/2px] rotate-90 blur-[5px]" />
      </div>

      <div className="absolute top-[782px] left-[253px] flex gap-[61px]">
        {statsCards.map((stat, index) => (
          <Card
            key={`stat-${index}`}
            className="w-[259px] h-[150px] rounded-[20px] overflow-hidden border-[0.2px] border-solid border-white backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(153,178,213,0.06)_50%,rgba(52,102,170,0.08)_100%)]"
          >
            <CardContent className="relative w-full h-full p-0">
              <div className="absolute top-8 left-[67px] w-[152px] h-[118px] bg-[#82b7dc] rounded-[76px/59px] blur-[80px]" />
              <div className="absolute top-[-140px] left-[146px] w-1 h-[281px] bg-white rounded-[2px/140.5px] -rotate-90 blur-sm" />
              <div className="absolute top-8 left-1/2 -translate-x-1/2 font-bold text-white text-4xl [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
                {stat.number}
              </div>
              <div className="absolute top-[91px] left-1/2 -translate-x-1/2 whitespace-nowrap [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-base tracking-[0] leading-[normal]">
                {stat.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
