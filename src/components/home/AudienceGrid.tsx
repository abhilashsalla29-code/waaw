"use client";
import React from "react";
import { Card, CardContent } from "../ui/card";

const cardData = [
  { title: "Businesses Going Digital", description: "Small and medium enterprises benefit from Waaw's tools to automate operations, create online presence, and deliver seamless customer experiences across platforms.", position: "top-[616px] left-[711px]", titlePosition: "top-[35px] left-[82px] w-[215px]", descriptionPosition: "top-[131px] left-[37px] w-[306px]" },
  { title: "Innovators & Startups", description: "Waaw empowers new ventures to turn ideas into fully functional digital products helping founders build, test, and scale faster with modern web and app solutions.", position: "top-[357px] left-[349px]", titlePosition: "top-[41px] left-[88px] w-[203px]", descriptionPosition: "top-[127px] left-[30px] w-[319px]" },
  { title: "Enterprises Seeking Efficiency", description: "Large organizations leverage Waaw's advanced technologies, integrations, and scalable architectures to improve productivity, data flow, and system performance.", position: "top-[357px] left-[711px]", titlePosition: "top-[41px] left-[52px] w-[274px]", descriptionPosition: "top-[129px] left-[71px] w-[274px] text-sm" },
  { title: "Creators & Tech Collaborators", description: "Designers, developers, and agencies collaborate with Waaw to transform creative visions into robust, high-performing digital experiences backed by strong technical expertise.", position: "top-[616px] left-[349px]", titlePosition: "top-[44px] left-[52px] w-[274px]", descriptionPosition: "top-[131px] left-[58px] w-[261px] text-sm" },
];

export const AudienceGrid = (): JSX.Element => {
  return (
    <section className="w-full min-h-[900px] relative bg-black overflow-hidden pt-10">
      <h1 className="absolute top-[113px] left-[420px] w-[632px] [font-family:'Montserrat',Helvetica] font-extrabold text-transparent text-[40px] text-center tracking-[0] leading-[70px]">
        <span className="text-white">THE MINDS AND BUSINESSES </span>
        <span className="text-[#82b7dc]">BEHIND THE WAAW</span>
      </h1>

      {cardData.map((card, index) => (
        <Card key={index} className={`absolute ${card.position} w-[379px] h-[275px] rounded-[30px] overflow-hidden backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] bg-[linear-gradient(316deg,rgba(255,255,255,0.01)_0%,rgba(130,183,220,0.01)_100%)] border-0`}>
          <CardContent className="relative w-full h-full p-0">
            <div className="absolute top-[-202px] left-[183px] w-[7px] h-[397px] rounded-[3.5px/198.5px] -rotate-90 bg-white blur-sm" />
            <div className="absolute -top-1 left-[-7px] w-[7px] h-[397px] bg-white rounded-[3.5px/198.5px] blur-sm" />
            <div className="absolute top-[78px] left-[13px] w-[442px] h-[118px] bg-[#82b7dc] rounded-[221px/59px] blur-[110px]" />
            <div className="absolute top-[35px] left-0 w-[5px] h-[5px] bg-white rounded-[2.5px] blur-[1px]" />
            <h3 className={`absolute ${card.titlePosition} [font-family:'Montserrat',Helvetica] font-bold text-white ${index === 2 || index === 3 ? "text-[28px]" : "text-3xl"} text-center tracking-[0] leading-[normal]`}>{card.title}</h3>
            <p className={`absolute ${card.descriptionPosition} [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] ${index === 0 ? "text-[15px]" : ""} text-center tracking-[0] leading-[normal]`}>{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};


