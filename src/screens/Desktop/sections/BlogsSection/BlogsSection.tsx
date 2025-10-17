import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const blogCards = [
  {
    title: "Design That Drives Engagement",
    description:
      "Explore how thoughtful UI/UX design shapes user behavior and builds lasting digital experiences.",
  },
  {
    title: "Smarter Apps for Modern Business",
    description:
      "Explore the strategies and tech behind scalable, high-performing apps.",
  },
  {
    title: "The Future of Digital Innovation",
    description:
      "Discover how AI, automation, and new tools are transforming brand growth online.",
  },
];

export const BlogsSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[960px] bg-black overflow-hidden py-[110px] px-4">
      <div className="absolute top-[-145px] left-[-145px] w-[290px] h-[290px] rounded-[145px] blur-[250px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />

      <div className="absolute top-[777px] left-[1363px] w-[290px] h-[290px] rounded-[145px] blur-[250px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />

      <div className="relative max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center">
          <div className="relative mb-[111px]">
            <div className="absolute top-[36px] left-[-26px] w-[33px] h-px rounded-[16.5px/0.5px] rotate-90 blur-[2px] bg-white" />

            <div className="absolute top-[36px] right-[-26px] w-[33px] h-px rounded-[16.5px/0.5px] rotate-90 blur-[2px] bg-white" />

            <div className="absolute top-[16px] left-[-14px] w-2 h-2 rounded rotate-180 blur-sm bg-white" />

            <div className="absolute top-[16px] right-[-14px] w-2 h-2 rounded rotate-180 blur-sm bg-white" />

            <div className="absolute top-[-6px] left-[14px] w-[157px] h-1 bg-white rounded-[78.5px/2px] rotate-180 blur-[5px]" />

            <div className="absolute top-[71px] left-[-1px] w-[157px] h-1 bg-white rounded-[78.5px/2px] blur-[5px]" />

            <div className="absolute top-[-19px] right-[-4px] w-[35px] h-[35px] bg-white rounded-[17.5px] -rotate-90 blur-sm" />

            <div className="absolute top-[53px] left-[-19px] w-[35px] h-[35px] bg-white rounded-[17.5px] rotate-90 blur-sm" />

            <h2 className="[font-family:'Montserrat',Helvetica] font-extrabold text-[#82b7dc] text-[40px] text-center tracking-[0] leading-[70px]">
              BLOGS
            </h2>
          </div>

          <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[32px] text-center tracking-[0] leading-[normal] underline mb-[68px] max-w-[529px]">
            Insights That Inspire Innovation
          </h3>

          <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xl text-center tracking-[0] leading-[normal] mb-[163px] max-w-[814px]">
            Explore the latest in design, development, and digital strategy. At
            Waave, we share ideas, trends, and expert perspectives that help
            businesses stay ahead in the ever-evolving digital world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[89px] w-full max-w-[1216px]">
            {blogCards.map((card, index) => (
              <Card
                key={index}
                className="relative w-full h-[400px] bg-transparent border-0 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[286px] h-0.5 bg-[#82b7dc]" />

                <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-[286px] h-[271px] bg-[#99b2d417] blur-[50px] backdrop-blur-[37px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37px)_brightness(100%)]" />

                <div className="absolute top-px left-1/2 -translate-x-1/2 w-[286px] h-[23px] bg-[#99b2d44c] blur-[50px] backdrop-blur-[37px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37px)_brightness(100%)]" />

                <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-[286px] h-[49px] bg-[#99b2d44c] blur-[50px] backdrop-blur-[37px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37px)_brightness(100%)]" />

                <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-[286px] h-[49px] bg-[#99b2d44c] blur-[50px] backdrop-blur-[37px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37px)_brightness(100%)]" />

                <CardContent className="relative pt-[51px] px-[34px] flex flex-col items-center">
                  <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#d9d9d9] text-[28px] text-center tracking-[0] leading-10 mb-[113px] w-[278px]">
                    {card.title}
                  </h4>

                  <p className="[font-family:'Poppins',Helvetica] font-medium text-[#bbbbbb] text-sm text-center tracking-[0] leading-[normal] w-[262px]">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
