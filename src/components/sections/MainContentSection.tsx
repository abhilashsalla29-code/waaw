import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

const faqItems = [
  {
    id: "item-1",
    question: "What makes Waave different from other agencies?",
    answer: "",
  },
  {
    id: "item-2",
    question: "How does the project process work?",
    answer: "",
  },
  {
    id: "item-3",
    question: "What kind of businesses do you work with?",
    answer: "",
  },
  {
    id: "item-4",
    question: "Can Waave handle both web and app development?",
    answer: "",
  },
  {
    id: "item-5",
    question: "Do you provide ongoing support after launch?",
    answer: "",
  },
  {
    id: "item-6",
    question: "How can I start a project with Waave?",
    answer: "",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full relative bg-black overflow-hidden py-[80px] md:py-[141px] px-4 md:px-[138px]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col items-center relative w-full md:w-auto">
          <div className="relative mb-[40px] md:mb-[81px]">
                <>
  <div className="w-24 h-px bg-[#82b7dc] mx-auto mb-2"></div>
  <div className="text-[#82b7dc] text-2xl font-extrabold tracking-wide text-center">
    FAQS
  </div>
  <div className="w-24 h-px bg-[#82b7dc] mx-auto mt-2"></div>
</>
{/* 
            <div className="absolute top-[25px] left-[-20px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 blur-[2px]" />

            <div className="absolute top-[25px] left-[115px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 blur-[2px]" />

            <div className="absolute top-[5px] left-0 w-2 h-2 bg-white rounded rotate-180 blur-sm" />

            <div className="absolute top-[5px] left-[127px] w-2 h-2 bg-white rounded rotate-180 blur-sm" />

            <div className="absolute top-[60px] left-[-19px] w-[157px] h-1 bg-white rounded-[78.5px/2px] blur-[5px]" />

            <div className="absolute top-[-22px] left-0 w-[157px] h-1 bg-white rounded-[78.5px/2px] rotate-180 blur-[5px]" />

            <div className="absolute top-[42px] left-[-37px] w-[35px] h-[35px] bg-white rounded-[17.5px] rotate-90 blur-sm" />

            <div className="absolute top-[-35px] left-[140px] w-[35px] h-[35px] bg-white rounded-[17.5px] -rotate-90 blur-sm" /> */}
          </div>

          <div className="w-full md:w-[462px] [font-family:'Montserrat',Helvetica] font-semibold text-[#bbbbbb] text-[24px] md:text-[32px] text-center tracking-[0] leading-[normal] mb-[40px] md:mb-[86px]">
            Get Clarity Before You Start
          </div>

          <img
            className="hidden md:block absolute w-[308px] h-[309px] top-[-6px] left-[-178px] object-cover"
            alt="Tk"
            src="/tk3.png"
          />

          <div className="hidden md:block absolute top-[246px] left-[-15px] w-[89px] h-[89px] rounded-[44.5px] blur-[55px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)]" />

          <Button className="relative w-[200px] md:w-[239px] h-[50px] md:h-[59px] bg-transparent border-0 p-0 hover:bg-transparent h-auto">
            <img
              className="absolute top-0 left-0 w-full h-full"
              alt="Subtract"
              src="/subtract-3.svg"
            />
            <span className="relative z-10 [font-family:'Montserrat',Helvetica] font-bold text-[#3466aa] text-base md:text-lg tracking-[0] leading-[normal]">
              Plan with Us
            </span>
            <img
              className="absolute w-[13.49%] h-[44.45%] top-[28.81%] left-[80.08%] z-10"
              alt="Vector"
              src="/vector-15.svg"
            />
          </Button>
        </div>

        <div className="w-full md:w-[629px] flex flex-col">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b-0"
              >
                <div className="flex flex-col">
                  <AccordionTrigger className="flex items-center justify-between py-0 hover:no-underline h-10 md:h-12 [&[data-state=open]>div>.plus-icon]:hidden [&[data-state=closed]>svg]:block [&>svg]:hidden">
                    <div className="flex items-center justify-between w-full">
                      <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-lg md:text-xl text-left tracking-[0] leading-[normal]">
                        {item.question}
                      </span>
                      <div className="relative w-[40px] md:w-[46px] h-9 md:h-11 flex-shrink-0 plus-icon">
                        <div className="absolute top-0 left-[calc(50.00%_-_20px)] md:left-[calc(50.00%_-_23px)] w-9 md:w-11 h-9 md:h-11 bg-[#00000000] rounded-[30px] shadow-[inset_0px_4px_4px_#ffffff14,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]" />
                        <div className="absolute top-[3px] md:top-[5px] left-[11px] md:left-[13px] [font-family:'Montserrat',Helvetica] font-semibold text-[#bbbbbb] text-[24px] md:text-[32px] tracking-[0] leading-[normal]">
                          +
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                  <div
                    className="h-px [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_40%,rgba(0,0,0,1)_100%)]"
                    style={{
                      marginTop:
                        index === 0
                          ? "10px"
                          : index === 1
                            ? "10px"
                            : index === 2
                              ? "10px"
                              : index === 3
                                ? "10px"
                                : index === 4
                                  ? "10px"
                                  : "9px",
                      marginBottom:
                        index === 0
                          ? "25px"
                          : index === 1
                            ? "30px"
                            : index === 2
                              ? "30px"
                              : index === 3
                                ? "30px"
                                : index === 4
                                  ? "30px"
                                  : "0",
                    }}
                  />
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default MainContentSection;
