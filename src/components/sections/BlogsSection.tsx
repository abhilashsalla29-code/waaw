import React from "react";
import { Card, CardContent } from "../ui/card";

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

type BlogsProps = { topOffset?: boolean };

export const BlogsSection = ({ topOffset = false }: BlogsProps): JSX.Element => {
  return (
    <section className={`relative w-full min-h-[960px] bg-black overflow-hidden py-[20px] px-4 ${topOffset ? "pt-32" : ""} mt-0`}>
      <div className="absolute top-[-145px] left-[-145px] w-[290px] h-[290px] rounded-[145px] blur-[250px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />

      <div className="absolute top-[777px] left-[1363px] w-[290px] h-[290px] rounded-[145px] blur-[250px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />

      <div className="relative max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center">
          <div className="relative mb-[20px] md:mb-[20px]">
              <>
  <div className="w-24 h-px bg-[#82b7dc] mx-auto  "></div>
  <div className="text-[#82b7dc] text-2xl font-extrabold tracking-wide text-center ">
    BLOGS
  </div>
  <div className="w-24 h-px bg-[#82b7dc] mx-auto "></div>
</>
            {/* Decorative Elements Around BLOGS Title */}
            {/* <div className="absolute top-[36px] left-[-26px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90" />
            <div className="absolute top-[36px] right-[-26px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90" />
            <div className="absolute top-[16px] left-[-14px] w-2 h-2 bg-white rounded rotate-180" />
            <div className="absolute top-[16px] right-[-14px] w-2 h-2 bg-white rounded rotate-180" />
            <div className="absolute top-[-6px] left-[14px] w-[157px] h-1 bg-white rounded-[78.5px/2px] rotate-180" />
            <div className="absolute top-[71px] left-[-1px] w-[157px] h-1 bg-white rounded-[78.5px/2px]" />
            <div className="absolute top-[-19px] right-[-4px] w-[35px] h-[35px] bg-white rounded-[17.5px] -rotate-90" />
            <div className="absolute top-[53px] left-[-19px] w-[35px] h-[35px] bg-white rounded-[17.5px] rotate-90" /> */}
          </div>

          <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#bbbbbb] text-[24px] md:text-[32px] text-center tracking-[0] leading-[normal] mb-[2px] md:mb-[28px] max-w-[529px]">
            Insights That Inspire Innovation
          </h3>

          <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-lg md:text-xl text-center tracking-[0] leading-[normal] mb-[80px] md:mb-[30px] max-w-[814px]">
            Explore the latest in design, development, and digital strategy. At
            WAAW, we share ideas, trends, and expert perspectives that help
            businesses stay ahead in the ever-evolving digital world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[89px] w-full max-w-[1216px]">
            {blogCards.map((card, index) => (
              <div
                key={index}
                className="relative w-full md:w-[350px] h-[350px] md:h-[400px] cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto"
              >
                {/* Use frame-17-1.svg as the card background */}
                <img
                  src="/blog1.png"
                  alt="Blog card"
                  className="absolute inset-0 w-full h-full object-cover object-bottom"
                />

                {/* Content overlay */}
                <div className="relative z-10 h-full p-6 md:p-6">
                  {/* Title at top */}
                  <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#bbbbbb] text-[20px] md:text-[24px] text-center tracking-[0] leading-tight mt-2">
                    {card.title}
                  </h4>

                  {/* Description centered vertically */}
                  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [font-family:'Poppins',Helvetica] font-medium text-[#bbbbbb] text-xs md:text-sm text-center tracking-[0] leading-relaxed max-w-[85%]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
