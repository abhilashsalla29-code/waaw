"use client";
import React from "react";
import { CheckIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const pricingPlans = [
  {
    name: "Standard",
    price: "50,000/-",
    description: "Core web services designed to fit your budget.",
    features: [
      "Core web or app functionality",
      "Basic UI/UX design",
      "Responsive layouts",
      "Content integration",
      "Basic SEO setup",
      "Delivery within standard timeline",
    ],
    buttonText: "Find Your Plan",
    buttonVariant: "default" as const,
    highlighted: false,
  },
  {
    name: "Advanced",
    price: "80,000/-",
    description: "Core web services designed to fit your budget.",
    features: [
      "Enhanced features and integrations",
      "Scalable frontend & backend",
      "Interactive UI/UX design",
      "Moderate customization",
      "Performance optimization",
      "Priority support",
    ],
    buttonText: "Get Started",
    buttonVariant: "secondary" as const,
    highlighted: true,
  },
  {
    name: "Ultimate",
    price: "1,20,000/-",
    description: "Core web services designed to fit your budget.",
    features: [
      "Fully customized solutions",
      "Advanced backend and API",
      "Premium UI/UX design",
      "Full scalability and security",
      "Dedicated project manager",
      "Ongoing maintenance and support",
    ],
    buttonText: "Get Started",
    buttonVariant: "secondary" as const,
    highlighted: false,
  },
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black py-20 px-4">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="relative mb-20 flex flex-col items-center">
          <div className="relative mb-8">
                <>
  <div className="w-24 h-px bg-[#82b7dc] mx-auto mb-2"></div>
  <div className="text-[#82b7dc] text-2xl font-extrabold tracking-wide text-center">
    PRICING
  </div>
  <div className="w-24 h-px bg-[#82b7dc] mx-auto mt-2"></div>
</>
            {/* Decorative Elements Around PRICING Title */}
            {/* <div className="absolute top-[25px] -left-8 w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90" />
            <div className="absolute top-[25px] -right-8 w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90" />
            <div className="absolute top-[5px] -left-5 w-2 h-2 bg-white rounded rotate-180" />
            <div className="absolute top-[5px] -right-5 w-2 h-2 bg-white rounded rotate-180" />
            <div className="absolute top-[60px] -left-10 w-[157px] h-1 bg-white rounded-[78.5px/2px]" />
            <div className="absolute -top-[22px] left-[90px] w-[157px] h-1 bg-white rounded-[78.5px/2px] rotate-180" />
            <div className="absolute top-[42px] -left-[26px] w-[35px] h-[35px] bg-white rounded-[17.5px] rotate-90" />
            <div className="absolute -top-[35px] -right-[26px] w-[35px] h-[35px] bg-white rounded-[17.5px] -rotate-90" /> */}
          </div>
          <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[24px] md:text-[32px] underline mb-6 text-center">
            Invest in Your Digital Future
          </h3>
          <p className="max-w-[845px] text-[#bbbbbb] text-lg md:text-xl text-center">
            Select the plan that aligns with your business objectives. Each
            package is designed to provide reliable, scalable, and high-quality
            digital solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {pricingPlans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative w-full max-w-[386px] ${
                plan.highlighted ? "md:-mt-20" : ""
              } rounded-[30px] overflow-hidden border backdrop-blur-[2px] backdrop-brightness-[110%] bg-[rgba(255,255,255,0.05)] border-${
                plan.highlighted ? "white/20" : "white/10"
              } shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]`}
            >
              <CardContent className="relative p-0">
                {plan.highlighted && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-[175px] bg-[rgba(255,255,255,0.07)] blur-[50px]" />
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-[#d9d9d9]" />
                    <div className="absolute top-0 left-0 w-full h-[49px] bg-[rgba(255,255,255,0.3)] blur-[50px]" />
                  </>
                )}

                <div className="relative z-10 px-[30px] md:px-[46px] pt-[20px]">
                  <h4 className="text-[#a19e9e] font-semibold text-xl md:text-2xl">
                    {plan.name}
                  </h4>
                  <p className="text-[#bbbbbb] text-sm md:text-[13px] mt-2">
                    {plan.description}
                  </p>
                </div>

                <div className="px-[20px] md:px-[30px] mt-6">
                  <div className="bg-[rgba(255,255,255,0.1)] rounded-[20px] md:rounded-[30px] p-6">
                    <div className="flex items-center gap-2">
                      <span className="text-[#bbbbbb] font-semibold text-lg md:text-xl">
                        ₹
                      </span>
                      <span className="text-[#bbbbbb] font-semibold text-lg md:text-xl">
                        {plan.price}
                      </span>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <Button
                        variant={plan.buttonVariant}
                        className={`w-full max-w-[271px] h-[40px] md:h-[50px] rounded-[20px] md:rounded-[30px] backdrop-blur-[2px] backdrop-brightness-[110%] text-${
                          plan.buttonVariant === "default"
                            ? "black bg-white"
                            : "white bg-transparent"
                        }`}
                      >
                        {plan.buttonText}
                      </Button>
                    </div>

                    <h5 className="text-[#a19e9e] font-semibold text-sm md:text-[15px] mt-6">
                      Everything You Get
                    </h5>

                    <div className="mt-4 space-y-3">
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="bg-white w-4 h-4 rounded flex items-center justify-center">
                            <CheckIcon className="w-3 h-3 text-black" strokeWidth={3} />
                          </div>
                          <span className="text-[#a19e9e] text-xs md:text-sm">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
