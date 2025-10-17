import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const decorativeElements = [
  {
    type: "line",
    className:
      "absolute top-[131px] left-[610px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 blur-[2px]",
  },
  {
    type: "line",
    className:
      "absolute top-[131px] left-[797px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 blur-[2px]",
  },
  {
    type: "dot",
    className:
      "absolute top-[111px] left-[622px] w-2 h-2 bg-white rounded rotate-180 blur-sm",
  },
  {
    type: "dot",
    className:
      "absolute top-[111px] left-[809px] w-2 h-2 bg-white rounded rotate-180 blur-sm",
  },
  {
    type: "glow",
    className:
      "top-[172px] left-[603px] absolute w-[157px] h-1 bg-white rounded-[78.5px/2px] blur-[5px]",
  },
  {
    type: "glow",
    className:
      "absolute top-[84px] left-[681px] w-[157px] h-1 bg-white rounded-[78.5px/2px] rotate-180 blur-[5px]",
  },
  {
    type: "circle",
    className:
      "top-[154px] left-[585px] absolute w-[35px] h-[35px] bg-white rounded-[17.5px] rotate-90 blur-sm",
  },
  {
    type: "circle",
    className:
      "absolute top-[71px] left-[821px] w-[35px] h-[35px] bg-white rounded-[17.5px] -rotate-90 blur-sm",
  },
];

const glowOrbs = [
  {
    className:
      "absolute top-[677px] left-[870px] w-[34px] h-[34px] rounded-[17px] blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)]",
  },
  {
    className:
      "absolute top-[694px] left-[608px] w-[18px] h-[18px] rounded-[9px] blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)]",
  },
  {
    className:
      "absolute top-[369px] left-[522px] w-[77px] h-[77px] rounded-[38.5px] blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)]",
  },
  {
    className:
      "absolute top-[696px] left-[603px] w-[31px] h-[31px] rounded-[15.5px] blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)]",
  },
];

const statsCards = [
  {
    value: "1.5x",
    description: "Launch Smarter Faster",
    className: "top-[405px] left-[1006px]",
    rotated: false,
    valueLeft: "left-[34px]",
    descLeft: "left-[119px]",
  },
  {
    value: "30%",
    description: "Years of Skill One Vision",
    className: "top-[602px] left-[1072px]",
    rotated: true,
    valueLeft: "left-[193px]",
    descLeft: "left-[29px]",
  },
  {
    value: "20+",
    description: "Uniquely Coded Foundations",
    className: "top-[799px] left-[1006px]",
    rotated: false,
    valueLeft: "left-7",
    descLeft: "left-[113px]",
  },
];

const pillButtons = [
  {
    text: "Digital Innovation",
    className: "top-[804px] left-[138px]",
  },
  {
    text: "Experience Design",
    className: "top-[804px] left-[532px]",
  },
  {
    text: "Strategic Development",
    className: "top-[917px] left-[339px]",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full relative bg-black overflow-hidden">
      <div className="relative w-full h-[1024px]">
        <img
          className="absolute w-[25.49%] h-[35.84%] top-[68.16%] left-[39.93%]"
          alt="Mesh"
          src="/mesh1.png"
        />

        <div className="absolute top-[106px] left-[642px] w-[155px] [font-family:'Montserrat',Helvetica] font-extrabold text-[#82b7dc] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          ABOUT
        </div>

        {decorativeElements.map((element, index) => (
          <div key={`decorative-${index}`} className={element.className} />
        ))}

        <img
          className="absolute w-[25.49%] h-[35.84%] top-[34.86%] left-[38.19%]"
          alt="Mesh"
          src="/mesh1-1.png"
        />

        {glowOrbs.map((orb, index) => (
          <div key={`glow-orb-${index}`} className={orb.className} />
        ))}

        <h2 className="absolute top-[198px] left-[371px] w-[698px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[32px] text-center tracking-[0] leading-[normal] underline">
          We build more than apps and websites
        </h2>

        <p className="absolute top-[379px] left-[77px] w-[353px] [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xl text-center tracking-[0] leading-[normal]">
          We create digital experiences that inspire, engage, and grow
          businesses.
        </p>

        <img
          className="absolute top-[512px] left-[172px] w-[366px] h-[74px]"
          alt="Vector"
          src="/vector-1.svg"
        />

        <Button
          variant="ghost"
          className="absolute top-[486px] left-[138px] w-[194px] h-[52px] p-0 h-auto hover:bg-transparent"
        >
          <img
            className="absolute top-0 w-48 h-[52px] left-0"
            alt="Subtract"
            src="/subtract.svg"
          />
          <span className="absolute top-[18px] left-[9px] w-[100px] [font-family:'Montserrat',Helvetica] font-bold text-[#3466aa] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
            Explore Now
          </span>
          <img
            className="absolute w-[15.35%] h-[46.22%] top-[26.92%] left-[78.35%]"
            alt="Vector"
            src="/vector-15.svg"
          />
        </Button>

        {statsCards.map((card, index) => (
          <Card
            key={`stat-card-${index}`}
            className={`${card.className} w-[305px] h-[136px] absolute rounded-[20px] overflow-hidden backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(153,178,213,0.06)_50%,rgba(52,102,170,0.08)_100%)] border-0 ${card.rotated ? "rotate-180" : ""}`}
          >
            <CardContent className="relative w-full h-full p-0">
              <div
                className={`absolute ${card.rotated ? "-top-12" : "top-8"} left-[67px] w-[152px] h-[152px] bg-[#82b7dc] rounded-[76px] blur-[80px]`}
              />
              <div
                className={`absolute ${card.rotated ? "top-[-61px]" : "top-[-84px]"} -left-1 w-1 h-[281px] rounded-[2px/140.5px] bg-white blur-sm`}
              />
              <div
                className={`absolute top-[46px] ${card.valueLeft} ${card.rotated ? "rotate-180" : ""} [font-family:'Montserrat',Helvetica] font-bold text-white text-4xl tracking-[0] leading-[normal]`}
              >
                {card.value}
              </div>
              <div
                className={`absolute ${card.rotated ? "top-[46px]" : "top-[49px]"} ${card.descLeft} ${card.rotated ? "w-[146px] rotate-180" : "w-[166px]"} [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xl text-center tracking-[0] leading-[normal]`}
              >
                {card.description}
              </div>
            </CardContent>
          </Card>
        ))}

        <h3 className="absolute top-[662px] left-[281px] w-[304px] [font-family:'Montserrat',Helvetica] font-bold text-white text-[32px] text-center tracking-[0] leading-[50px]">
          Strategize Design Launch
        </h3>

        {pillButtons.map((button, index) => (
          <Button
            key={`pill-button-${index}`}
            variant="ghost"
            className={`${button.className} ${index === 0 ? "flex" : ""} w-[295px] h-[71px] absolute rounded-[30px] overflow-hidden backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] bg-[linear-gradient(316deg,rgba(255,255,255,0.01)_0%,rgba(130,183,220,0.01)_100%)] hover:bg-[linear-gradient(316deg,rgba(255,255,255,0.05)_0%,rgba(130,183,220,0.05)_100%)] h-auto p-0`}
          >
            <div
              className={`${index === 0 ? "mt-[-202px] ml-[183px]" : "absolute top-[-202px] left-[183px]"} w-[7px] h-[397px] rounded-[3.5px/198.5px] -rotate-90 bg-white blur-sm`}
            />
            <span
              className={`${
                index === 0
                  ? "absolute top-[22px] left-[41px]"
                  : index === 1
                    ? "absolute top-[22px] left-[41px]"
                    : "absolute top-[9px] left-[62px] w-[171px] text-center"
              } [font-family:'Montserrat',Helvetica] font-semibold text-[#bbbbbb] text-[22px] tracking-[0] leading-[normal]`}
            >
              {button.text}
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
};
