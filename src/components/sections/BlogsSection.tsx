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

export const BlogsSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[960px] bg-black overflow-hidden py-[50px] px-4 ">
      <div className="absolute top-[-145px] left-[-145px] w-[290px] h-[290px] rounded-[145px] blur-[250px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />

      <div className="absolute top-[777px] left-[1363px] w-[290px] h-[290px] rounded-[145px] blur-[250px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />

      <div className="relative max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center">
          <div className="relative mb-[30px] md:mb-[111px]">
              <>
  <div className="w-24 h-px bg-[#82b7dc] mx-auto  mt-10"></div>
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

          <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#bbbbbb] text-[24px] md:text-[32px] text-center tracking-[0] leading-[normal] underline mb-[2px] md:mb-[38px] max-w-[529px]">
            Insights That Inspire Innovation
          </h3>

          <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-lg md:text-xl text-center tracking-[0] leading-[normal] mb-[80px] md:mb-[43px] max-w-[814px]">
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
                  src="/frame-17-1.svg"
                  alt="Blog card"
                  className="absolute inset-0 w-full h-full object-cover object-bottom"
                />

                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <h4 className="[font-family:'Montserrat',Helvetica] font-bold text-[#bbbbbb] text-[20px] md:text-[24px] text-center tracking-[0] leading-tight mb-3 md:mb-4">
                      {card.title}
                    </h4>

                    <p className="[font-family:'Poppins',Helvetica] font-medium text-[#bbbbbb] text-xs md:text-sm text-center tracking-[0] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom icon area - you can add another icon here if needed */}
                  <div className="flex justify-center">
                    {/* <div className="w-6 h-6 md:w-8 md:h-8 bg-[#82b7dc] rounded-full flex items-center justify-center"> */}
                      {/* <svg className="w-3 h-3 md:w-4 md:h-4 text-[#bbbbbb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg> */}
                    </div>
                  {/* </div> */}
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
