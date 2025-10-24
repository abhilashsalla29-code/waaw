import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const statsMobile = [
  { value: "1.5x", description: "Launch Smarter Faster" },
  { value: "30%", description: "Years of Skill One Vision" },
  { value: "20+", description: "Uniquely Coded Foundations" },
];

const pillMobile = [
  "Digital Innovation",
  "Experience Design",
  "Strategic Development",
];

const AboutUsSectionMobile = () => (
  <section className="bg-black px-3 py-8 flex flex-col items-center gap-7 min-h-screen w-full md:hidden">
    {/* Title */}
    <div className="text-[#82b7dc] text-2xl font-extrabold  mt-2 tracking-wide text-center border border-white">
      ABOUT
    </div>
    {/* Mesh */}
    {/* <img src="/mesh1.png" alt="Mesh" className="mx-auto w-[220px] mb-3" /> */}
    {/* Main Heading */}
    <h2 className="text-white text-xl font-semibold underline text-center max-w-[95vw] mx-auto mb-2">
      We build more than apps and websites
    </h2>
    {/* Description */}
    <p className="text-[#bbbbbb] text-[16px] text-center mb-3">
      We create digital experiences that inspire, engage, and grow businesses.
    </p>
    {/* CTA */}
    <Button variant="ghost" className="relative mb-2 px-0">
      <img alt="bg" src="/subtract.svg" className="w-[160px] absolute left-0 top-0" />
      <span className="relative font-bold text-[#3466aa] text-sm px-6">Explore Now</span>
      <img alt="Vector" src="/vector-15.svg" className="absolute w-4 right-2 top-[14px]" />
    </Button>
    {/* Mesh 2 Optional: */}
    <img src="/MESH.png" alt="Mesh2" className="mx-auto w-[130px] my-24" />
    <div className="flex flex-col items-center gap-4 w-full">
      {statsMobile.map((card, idx) => (
        <Card key={idx} className="w-full max-w-[320px] mx-auto rounded-xl p-0 bg-[rgba(52,102,170,.12)] border-0 backdrop-blur-sm shadow-md">
          <CardContent className="flex flex-col items-center justify-center py-3 px-2">
            <div className="text-white font-bold text-[1.7rem]">{card.value}</div>
            <div className="text-[#bbbbbb] text-base font-medium text-center">{card.description}</div>
          </CardContent>
        </Card>
      ))}
    </div>
    {/* Slogan */}
    <div className="text-white text-base font-bold text-center my-2">
      Strategize Design Launch
    </div>
    {/* Pills */}
    <div className="flex flex-wrap justify-center w-full gap-3">
      {pillMobile.map((label, idx) => (
        <Button key={idx} variant="ghost" className="bg-[rgba(130,183,220,0.05)] rounded-xl px-5 text-[#bbbbbb] font-semibold shadow-sm py-2">
          {label}
        </Button>
      ))}
    </div>
  </section>
);

const decorativeElements = [
  {
    type: "line",
    className:
      "absolute top-[131px] left-[610px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 blur-[2px] md:top-[100px] md:left-[45%]",
  },
  {
    type: "line",
    className:
      "absolute top-[131px] left-[797px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 blur-[2px] md:top-[100px] md:left-[55%]",
  },
  {
    type: "dot",
    className:
      "absolute top-[111px] left-[622px] w-2 h-2 bg-white rounded rotate-180 blur-sm md:top-[85px] md:left-[45%]",
  },
  {
    type: "dot",
    className:
      "absolute top-[111px] left-[809px] w-2 h-2 bg-white rounded rotate-180 blur-sm md:top-[85px] md:left-[55%]",
  },
  {
    type: "glow",
    className:
      "top-[172px] left-[603px] absolute w-[157px] h-1 bg-white rounded-[78.5px/2px] blur-[5px] md:top-[130px] md:left-[42%]",
  },
  {
    type: "glow",
    className:
      "absolute top-[84px] left-[681px] w-[157px] h-1 bg-white rounded-[78.5px/2px] rotate-180 blur-[5px] md:top-[65px] md:left-[46%]",
  },
  {
    type: "circle",
    className:
      "top-[154px] left-[585px] absolute w-[35px] h-[35px] bg-white rounded-[17.5px] rotate-90 blur-sm md:top-[120px] md:left-[40%]",
  },
  {
    type: "circle",
    className:
      "absolute top-[71px] left-[821px] w-[35px] h-[35px] bg-white rounded-[17.5px] -rotate-90 blur-sm md:top-[55px] md:left-[57%]",
  },
];

const glowOrbs = [
  {
    className:
      "absolute top-[677px] left-[870px] w-[34px] h-[34px] rounded-[17px] blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)] md:top-[550px] md:left-[70%]",
  },
  {
    className:
      "absolute top-[694px] left-[608px] w-[18px] h-[18px] rounded-[9px] blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)] md:top-[565px] md:left-[42%]",
  },
  // {
  //   className:
  //     "absolute top-[369px] left-[522px] w-[77px] h-[77px] rounded-[38.5px] blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)] md:top-[300px] md:left-[35%]",
  // },
  {
    className:
      "absolute top-[696px] left-[603px] w-[31px] h-[31px] rounded-[15.5px] blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)] md:top-[567px] md:left-[41%]",
  },
];

const statsCards = [
  {
    value: "1.5x",
    description: "Launch Smarter Faster",
    className: "top-[405px] left-[1006px] md:top-[320px] md:left-[calc(100%-340px)] lg:top-[405px] lg:left-[1006px]",
    rotated: false,
    valueLeft: "left-[34px]",
    descLeft: "left-[119px]",
  },
  {
    value: "30%",
    description: "Years of Skill One Vision",
    className: "top-[602px] left-[1072px] md:top-[480px] md:left-[calc(100%-280px)] lg:top-[602px] lg:left-[1072px]",
    rotated: true,
    valueLeft: "left-[193px]",
    descLeft: "left-[29px]",
  },
  {
    value: "20+",
    description: "Uniquely Coded Foundations",
    className: "top-[799px] left-[1006px] md:top-[640px] md:left-[calc(100%-340px)] lg:top-[799px] lg:left-[1006px]",
    rotated: false,
    valueLeft: "left-7",
    descLeft: "left-[113px]",
  },
];

const pillButtons = [
  {
    text: "Digital Innovation",
    className: "top-[804px] left-[138px] md:top-[700px] md:left-[5%] lg:top-[804px] lg:left-[138px]",
  },
  {
    text: "Experience Design",
    className: "top-[804px] left-[532px] md:top-[700px] md:left-[calc(50%-147px)] lg:top-[804px] lg:left-[532px]",
  },
  {
    text: "Strategic Development",
    className: "top-[804px] left-[339px] md:top-[800px] md:left-[calc(50%-147px)] lg:top-[917px] lg:left-[339px]",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <>
      <div className="hidden md:block">
        <section className="w-full relative bg-black overflow-hidden">
          <div className="relative w-full h-[1024px] md:h-[900px] lg:h-[1024px]">
        {/* Background Mesh Image 1 */}
        {/* <img
          className="absolute w-[25.49%] h-[35.84%] top-[68.16%] left-[39.93%] md:w-[30%] md:h-[40%] md:top-[60%] md:left-[35%]"
          alt="Mesh"
          src="/mesh1.png"
        /> */}

        {/* ABOUT Title */}
       <>
  <div className="w-24 h-px bg-[#82b7dc] mx-auto mb-2"></div>
  <div className="text-[#82b7dc] text-2xl font-extrabold tracking-wide text-center">
    ABOUT
  </div>
  <div className="w-24 h-px bg-[#82b7dc] mx-auto mt-2"></div>
</>
        {/* Decorative Elements Around ABOUT Title
        <div className="absolute top-[131px] left-[610px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 md:top-[100px] md:left-[45%]" />
        <div className="absolute top-[131px] left-[797px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 md:top-[100px] md:left-[55%]" />
        <div className="absolute top-[111px] left-[622px] w-2 h-2 bg-white rounded rotate-180 md:top-[85px] md:left-[45%]" />
        <div className="absolute top-[111px] left-[809px] w-2 h-2 bg-white rounded rotate-180 md:top-[85px] md:left-[55%]" />
        <div className="absolute top-[172px] left-[603px] w-[157px] h-1 bg-white rounded-[78.5px/2px] md:top-[130px] md:left-[42%]" />
        <div className="absolute top-[84px] left-[681px] w-[157px] h-1 bg-white rounded-[78.5px/2px] rotate-180 md:top-[65px] md:left-[46%]" />
        <div className="absolute top-[154px] left-[585px] w-[35px] h-[35px] bg-white rounded-[17.5px] rotate-90 md:top-[120px] md:left-[40%]" />
        <div className="absolute top-[71px] left-[821px] w-[35px] h-[35px] bg-white rounded-[17.5px] -rotate-90 md:top-[55px] md:left-[57%]" /> */}

        {/* Decorative Elements */}
        {/* {decorativeElements.map((element, index) => (
          // <div key={`decorative-${index}`} className={element.className} />
        ))} */}

        Background Mesh Image 2
        <img
          className="absolute w-[25.49%] h-[35.84%] top-[34.86%] left-[38.19%] md:w-[30%] md:h-[40%] md:top-[28%] md:left-[35%]"
          alt="Mesh"
          src="/MESH.png"
        /> 

        {/* Glow Orbs */}
        {glowOrbs.map((orb, index) => (
          <div key={`glow-orb-${index}`} className={orb.className} />
        ))}

        {/* Main Heading */}
        <h2 className="absolute top-[198px] left-[50%] -translate-x-1/2 w-[90%] max-w-[698px] md:top-[160px] lg:top-[198px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[20px] md:text-[28px] lg:text-[32px] text-center tracking-[0] leading-[normal] underline px-4">
          We build more than apps and websites
        </h2>

        {/* Description Text */}
        <p className="absolute top-[379px] left-[77px] w-[353px] md:top-[310px] md:left-[5%] md:w-[40%] lg:top-[379px] lg:left-[77px] lg:w-[353px] [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-base md:text-lg lg:text-xl text-center tracking-[0] leading-[normal] px-4">
          We create digital experiences that inspire, engage, and grow
          businesses.
        </p>

        {/* Vector Line */}
        <img
          className="absolute top-[512px] left-[172px] w-[366px] h-[74px] md:top-[420px] md:left-[5%] md:w-[300px] lg:top-[512px] lg:left-[172px] lg:w-[366px]"
          alt="Vector"
          src="/vector-1.svg"
        />

        {/* Explore Now Button */}
        <Button
          variant="ghost"
          className="absolute top-[486px] left-[138px] w-[194px] h-[52px] md:top-[395px] md:left-[5%] lg:top-[486px] lg:left-[138px] p-0 h-auto hover:bg-transparent group"
        >
          <img
            className="absolute top-0 w-48 h-[52px] left-0"
            alt="Subtract"
            src="/subtract.svg"
          />
          <span className="absolute top-[18px] left-[9px] w-[100px] [font-family:'Montserrat',Helvetica] font-bold text-[#3466aa] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap group-hover:text-[#4a7bc8] transition-colors">
            Explore Now
          </span>
          <img
            className="absolute w-[15.35%] h-[46.22%] top-[26.92%] left-[78.35%] group-hover:translate-x-1 transition-transform"
            alt="Vector"
            src="/vector-15.svg"
          />
        </Button>

        {/* Stats Cards */}
        {statsCards.map((card, index) => (
          <Card
            key={`stat-card-${index}`}
            className={`${card.className} w-[305px] h-[136px] md:w-[280px] md:h-[120px] lg:w-[305px] lg:h-[136px] absolute rounded-[20px] overflow-hidden backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(153,178,213,0.06)_50%,rgba(52,102,170,0.08)_100%)] border-0 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.50),inset_1px_0_0_rgba(255,255,255,0.42),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] transition-shadow ${card.rotated ? "rotate-180" : ""}`}
          >
            <CardContent className="relative w-full h-full p-0">
              <div
                className={`absolute ${card.rotated ? "-top-12" : "top-8"} left-[67px] w-[152px] h-[152px] bg-[#82b7dc] rounded-[76px] blur-[80px]`}
              />
              <div
                className={`absolute ${card.rotated ? "top-[-61px]" : "top-[-84px]"} -left-1 w-1 h-[281px] rounded-[2px/140.5px] bg-white blur-sm`}
              />
              <div
                className={`absolute top-[46px] ${card.valueLeft} ${card.rotated ? "rotate-180" : ""} [font-family:'Montserrat',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[0] leading-[normal]`}
              >
                {card.value}
              </div>
              <div
                className={`absolute ${card.rotated ? "top-[46px]" : "top-[49px]"} ${card.descLeft} ${card.rotated ? "w-[146px] rotate-180" : "w-[166px]"} [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-lg md:text-xl text-center tracking-[0] leading-[normal]`}
              >
                {card.description}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Strategize Design Launch Title */}
        <h3 className="absolute top-[662px] left-[281px] w-[304px] md:top-[550px] md:left-[50%] md:-translate-x-1/2 md:w-[350px] lg:top-[662px] lg:left-[281px] lg:w-[304px] [font-family:'Montserrat',Helvetica] font-bold text-white text-[24px] md:text-[28px] lg:text-[32px] text-center tracking-[0] leading-[50px] md:leading-[40px] lg:leading-[50px]">
          Strategize Design Launch
        </h3>

        {/* Pill Buttons */}
        {pillButtons.map((button, index) => (
          <Button
            key={`pill-button-${index}`}
            variant="ghost"
            className={`${button.className} ${index === 0 ? "flex" : ""} w-[295px] h-[71px] md:w-[260px] md:h-[65px] lg:w-[295px] lg:h-[71px] absolute rounded-[30px] overflow-hidden backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] bg-[linear-gradient(316deg,rgba(255,255,255,0.01)_0%,rgba(130,183,220,0.01)_100%)] hover:bg-[linear-gradient(316deg,rgba(255,255,255,0.08)_0%,rgba(130,183,220,0.08)_100%)] transition-all h-auto p-0 group`}
          >
            <div
              className={`${index === 0 ? "mt-[-202px] ml-[183px]" : "absolute top-[-202px] left-[183px]"} w-[7px] h-[397px] rounded-[3.5px/198.5px] -rotate-90 bg-black blur-sm`}
            />
            <span
              className={`${
                index === 0
                  ? "absolute top-[22px] left-[41px]"
                  : index === 1
                    ? "absolute top-[22px] left-[41px]"
                    : "absolute top-[22px] left-[42px] w-[171px] text-center"
              } [font-family:'Montserrat',Helvetica] font-semibold text-[#bbbbbb] text-[16px] md:text-[20px] lg:text-[22px] tracking-[0] leading-[normal]  transition-colors`}
            >
              {button.text}
            </span>
          </Button>
        ))}
          </div>
        </section>
      </div>
      <div className="block md:hidden">
        <AboutUsSectionMobile />
      </div>
    </>
  );
};

export default AboutUsSection;
