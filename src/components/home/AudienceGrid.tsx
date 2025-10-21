"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const cardData = [
  {
    title: "Innovators & Startups",
    description:
      "Waaw empowers new ventures to turn ideas into fully functional digital products helping founders build, test, and scale faster with modern web and app solutions.",
    hasGlass: true,
    position: "desktop",
  },
  {
    title: "Enterprises Seeking Efficiency",
    description:
      "Large organizations leverage Waaw's advanced technologies, integrations, and scalable architectures to improve productivity, data flow, and system performance.",
    hasGlass: false,
    position: "desktop",
  },
  {
    title: "Creators & Tech Collaborators",
    description:
      "Designers, developers, and agencies collaborate with Waaw to transform creative visions into robust, high-performing digital experiences backed by strong technical expertise.",
    hasGlass: false,
    position: "desktop",
  },
  {
    title: "Businesses Going Digital",
    description:
      "Small and medium enterprises benefit from Waaw's tools to automate operations, create online presence, and deliver seamless customer experiences across platforms.",
    hasGlass: true,
    position: "desktop",
  },
];

export const AudienceGrid = (): JSX.Element => {
  return (
    <section className="w-full min-h-[950px] lg:min-h-[1100px] relative bg-gradient-to-b from-[#0a0f14] via-black to-[#0d1217] overflow-hidden py-12 lg:py-20">
      {/* Background Gradient Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#82b7dc]/10 rounded-full blur-[120px] hidden lg:block" />
      <div className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] bg-[#3466aa]/10 rounded-full blur-[100px] hidden lg:block" />

      {/* Title Section */}
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="relative mb-16 lg:mb-24">
          {/* Decorative Line Top Left */}
          <div className="absolute top-[-30px] left-[20%] lg:left-[30%] w-[200px] lg:w-[300px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent blur-[1px] hidden md:block" />
          <div className="absolute top-[-35px] left-[22%] lg:left-[31%] w-[12px] h-[12px] bg-white rounded-full blur-[2px] hidden md:block" />

          <h1 className="text-center [font-family:'Montserrat',Helvetica] font-extrabold text-[28px] md:text-[36px] lg:text-[40px] leading-[40px] md:leading-[55px] lg:leading-[70px] tracking-[0] px-4">
            <span className="text-white block mb-2">THE MINDS AND BUSINESSES</span>
            <span className="text-[#82b7dc]">BEHIND THE WAAW</span>
          </h1>

          {/* Decorative Line Bottom Right */}
          <div className="absolute bottom-[-35px] right-[20%] lg:right-[30%] w-[200px] lg:w-[300px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent blur-[1px] hidden md:block" />
          <div className="absolute bottom-[-40px] right-[22%] lg:right-[31%] w-[12px] h-[12px] bg-white rounded-full blur-[2px] hidden md:block" />
        </div>

        {/* Desktop Layout - Asymmetric 2x2 Grid with Center Icon */}
        <div className="hidden lg:block relative">
          <div className="relative w-full max-w-[1200px] mx-auto h-[700px]">
            {/* Top Row */}
            <div className="absolute top-0 left-0 right-0 flex justify-center gap-8">
              {/* Card 1 - Top Left (Glass Effect) */}
              <Card className="w-[380px] h-[275px] rounded-[30px] overflow-hidden backdrop-blur-[8px] backdrop-brightness-[110%] shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.15),0_8px_32px_rgba(130,183,220,0.15)] bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(130,183,220,0.05)_100%)] border border-white/20 hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.35),0_12px_40px_rgba(130,183,220,0.25)] transition-all duration-300">
                <CardContent className="relative w-full h-full p-0">
                  {/* Decorative Light Bars */}
                  <div className="absolute top-[-202px] left-[183px] w-[7px] h-[397px] rounded-[3.5px/198.5px] -rotate-90 bg-white/80 blur-sm" />
                  <div className="absolute -top-1 left-[-7px] w-[7px] h-[397px] bg-white/70 rounded-[3.5px/198.5px] blur-sm" />
                  
                  {/* Glow Effect */}
                  <div className="absolute top-[78px] left-[13px] w-[442px] h-[118px] bg-[#82b7dc] rounded-[221px/59px] blur-[110px] opacity-30" />

                  <div className="relative z-10 pt-10 px-8">
                    <h3 className="text-white [font-family:'Montserrat',Helvetica] font-bold text-[26px] text-center mb-6 leading-[34px]">
                      {cardData[0].title}
                    </h3>
                    <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-center text-[14px] leading-[22px]">
                      {cardData[0].description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 - Top Right (No Glass, Darker) */}
              <Card className="w-[380px] h-[275px] rounded-[30px] overflow-hidden backdrop-blur-[2px] backdrop-brightness-[95%] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(0,0,0,0.25),0_4px_20px_rgba(0,0,0,0.4)] bg-[linear-gradient(316deg,rgba(15,20,28,0.9)_0%,rgba(25,35,50,0.8)_100%)] border border-white/10 hover:border-[#82b7dc]/30 transition-all duration-300">
                <CardContent className="relative w-full h-full p-0">
                  <div className="absolute top-[-202px] left-[183px] w-[7px] h-[397px] rounded-[3.5px/198.5px] -rotate-90 bg-white/50 blur-[1.5px]" />
                  
                  <div className="relative z-10 pt-10 px-8">
                    <h3 className="text-white [font-family:'Montserrat',Helvetica] font-bold text-[26px] text-center mb-6 leading-[34px]">
                      {cardData[1].title}
                    </h3>
                    <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-center text-[14px] leading-[22px]">
                      {cardData[1].description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Center Rotating Icon */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
              {/* Outer Rotating Ring */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border-2 border-[#82b7dc]/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                style={{
                  boxShadow: "0 0 40px 8px rgba(130,183,220,0.2)",
                }}
              />

              {/* Pulsing Glow */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full bg-[#82b7dc]/30 blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1], 
                  opacity: [0.6, 0.9, 0.6] 
                }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              />

              {/* Center Icon Container */}
              <div className="relative w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#82b7dc] to-[#4a7bc8] shadow-[0_0_35px_rgba(130,183,220,0.7),inset_0_2px_8px_rgba(255,255,255,0.3)] flex items-center justify-center border-4 border-white/20">
                {/* Rotating Icon/Image */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                >
                  <Image
                    src="/audiencegridm.png"
                    alt="center"
                    width={40}
                    height={40}
                    className="object-contain drop-shadow-lg"
                  />
                </motion.div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8">
              {/* Card 3 - Bottom Left (No Glass, Darker) */}
              <Card className="w-[380px] h-[275px] rounded-[30px] overflow-hidden backdrop-blur-[2px] backdrop-brightness-[95%] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(0,0,0,0.25),0_4px_20px_rgba(0,0,0,0.4)] bg-[linear-gradient(316deg,rgba(15,20,28,0.9)_0%,rgba(25,35,50,0.8)_100%)] border border-white/10 hover:border-[#82b7dc]/30 transition-all duration-300">
                <CardContent className="relative w-full h-full p-0">
                  <div className="absolute top-[-202px] left-[183px] w-[7px] h-[397px] rounded-[3.5px/198.5px] -rotate-90 bg-white/50 blur-[1.5px]" />
                  
                  <div className="relative z-10 pt-10 px-8">
                    <h3 className="text-white [font-family:'Montserrat',Helvetica] font-bold text-[26px] text-center mb-6 leading-[34px]">
                      {cardData[2].title}
                    </h3>
                    <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-center text-[14px] leading-[22px]">
                      {cardData[2].description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Card 4 - Bottom Right (Glass Effect) */}
              <Card className="w-[380px] h-[275px] rounded-[30px] overflow-hidden backdrop-blur-[8px] backdrop-brightness-[110%] shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.15),0_8px_32px_rgba(130,183,220,0.15)] bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(130,183,220,0.05)_100%)] border border-white/20 hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.35),0_12px_40px_rgba(130,183,220,0.25)] transition-all duration-300">
                <CardContent className="relative w-full h-full p-0">
                  <div className="absolute top-[-202px] left-[183px] w-[7px] h-[397px] rounded-[3.5px/198.5px] -rotate-90 bg-white/80 blur-sm" />
                  <div className="absolute -top-1 left-[-7px] w-[7px] h-[397px] bg-white/70 rounded-[3.5px/198.5px] blur-sm" />
                  
                  <div className="absolute top-[78px] left-[13px] w-[442px] h-[118px] bg-[#82b7dc] rounded-[221px/59px] blur-[110px] opacity-30" />

                  <div className="relative z-10 pt-10 px-8">
                    <h3 className="text-white [font-family:'Montserrat',Helvetica] font-bold text-[26px] text-center mb-6 leading-[34px]">
                      {cardData[3].title}
                    </h3>
                    <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-center text-[14px] leading-[22px]">
                      {cardData[3].description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Stacked Cards */}
        <div className="lg:hidden flex flex-col gap-6 px-4 max-w-[500px] mx-auto">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className={`w-full h-auto min-h-[260px] rounded-[24px] overflow-hidden ${
                card.hasGlass
                  ? "backdrop-blur-[8px] backdrop-brightness-[110%] shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),0_8px_32px_rgba(130,183,220,0.15)] bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(130,183,220,0.05)_100%)] border border-white/20"
                  : "backdrop-blur-[2px] shadow-[0_4px_20px_rgba(0,0,0,0.4)] bg-[linear-gradient(316deg,rgba(15,20,28,0.9)_0%,rgba(25,35,50,0.8)_100%)] border border-white/10"
              }`}
            >
              <CardContent className="relative w-full h-full p-6">
                {card.hasGlass && (
                  <>
                    <div className="absolute top-[-100px] left-[50%] w-[5px] h-[250px] -rotate-90 bg-white/60 blur-sm" />
                    <div className="absolute top-[50px] left-0 w-[300px] h-[80px] bg-[#82b7dc] rounded-full blur-[80px] opacity-20" />
                  </>
                )}
                
                <h3 className="text-white [font-family:'Montserrat',Helvetica] font-bold text-[22px] md:text-[24px] text-center mb-4 leading-[32px]">
                  {card.title}
                </h3>
                <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-center text-[14px] leading-[22px]">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceGrid;
