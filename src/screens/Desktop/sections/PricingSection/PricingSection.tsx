import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

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
    topPosition: "top-[531px]",
    leftPosition: "left-[90px]",
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
    topPosition: "top-[447px]",
    leftPosition: "left-[527px]",
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
    topPosition: "top-[533px]",
    leftPosition: "left-[964px]",
  },
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black py-20">
      <div className="relative mx-auto max-w-[1440px] px-4">
        <div className="relative mb-20 flex flex-col items-center">
          <div className="relative mb-8">
            <h2 className="relative z-10 [font-family:'Montserrat',Helvetica] text-[40px] font-extrabold tracking-[0] leading-normal text-[#82b7dc] whitespace-nowrap">
              PRICING
            </h2>

            <div className="absolute top-[25px] -left-8 w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 blur-[2px]" />
            <div className="absolute top-[25px] -right-8 w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 blur-[2px]" />
            <div className="absolute top-[5px] -left-5 w-2 h-2 bg-white rounded rotate-180 blur-sm" />
            <div className="absolute top-[5px] -right-5 w-2 h-2 bg-white rounded rotate-180 blur-sm" />
            <div className="absolute top-[60px] -left-10 w-[157px] h-1 bg-white rounded-[78.5px/2px] blur-[5px]" />
            <div className="absolute -top-[22px] left-[90px] w-[157px] h-1 bg-white rounded-[78.5px/2px] rotate-180 blur-[5px]" />
            <div className="absolute top-[42px] -left-[26px] w-[35px] h-[35px] bg-white rounded-[17.5px] rotate-90 blur-sm" />
            <div className="absolute -top-[35px] -right-[26px] w-[35px] h-[35px] bg-white rounded-[17.5px] -rotate-90 blur-sm" />
          </div>

          <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[32px] text-center tracking-[0] leading-normal underline mb-6">
            Invest in Your Digital Future
          </h3>

          <p className="max-w-[845px] [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xl text-center tracking-[0] leading-normal">
            Select the plan that aligns with your business objectives. Each
            package is designed to provide reliable, scalable, and high-quality
            digital solutions.
          </p>
        </div>

        <div className="relative flex justify-center gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative w-[386px] ${
                plan.highlighted ? "h-[609px]" : "h-[608px]"
              } rounded-[${plan.highlighted ? "30px" : "40px"}] overflow-hidden border ${
                plan.highlighted ? "border-[#82b7dc26]" : "border-[#ffffff26]"
              } backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] [background:radial-gradient(50%_50%_at_30%_-4%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.1)_100%)] ${
                plan.highlighted ? "-mt-[84px]" : ""
              }`}
            >
              <CardContent className="relative p-0 h-full">
                {plan.highlighted && (
                  <>
                    <img
                      className="absolute top-[562px] left-[133px] w-[93px] h-[93px]"
                      alt="Ellipse"
                      src="/ellipse-3.svg"
                    />
                    <div className="absolute top-0 left-0 w-full h-[175px] bg-[#ffffff12] blur-[50px] backdrop-blur-[37px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37px)_brightness(100%)]" />
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-[#d9d9d9]" />
                    <div className="absolute top-0 left-0 w-full h-[49px] bg-[#ffffff4c] blur-[50px] backdrop-blur-[37px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37px)_brightness(100%)]" />
                  </>
                )}

                <div className="relative z-10">
                  <div
                    className={`${plan.highlighted ? "pt-[19px]" : "pt-[21px]"} px-[46px]`}
                  >
                    <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#a19e9e] text-2xl tracking-[0] leading-normal">
                      {plan.name}
                    </h4>
                  </div>

                  <div
                    className={`${plan.highlighted ? "mt-[43px]" : "mt-[42px]"} px-[46px]`}
                  >
                    <p className="w-[304px] [font-family:'Montserrat',Helvetica] font-normal text-[#bbbbbb] text-[13px] tracking-[0] leading-normal">
                      {plan.description}
                    </p>
                  </div>

                  <div
                    className={`${plan.highlighted ? "mt-[46px]" : "mt-[45px]"} px-[30px]`}
                  >
                    <div className="w-[327px] h-[481px] bg-[#ffffff14] rounded-[30px] relative">
                      <div className="pt-[30px] px-[27px] flex items-center">
                        <img
                          className="w-6 h-6"
                          alt="Bx rupee"
                          src="/bx-rupee.svg"
                        />
                        <span className="ml-[7px] [font-family:'Montserrat',Helvetica] font-semibold text-[#bbbbbb] text-xl text-center tracking-[0] leading-normal">
                          {plan.price}
                        </span>
                      </div>

                      <div className="mt-[52px] flex justify-center">
                        <Button
                          className={`w-[271px] h-[50px] rounded-[30px] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] ${
                            plan.buttonVariant === "default"
                              ? "bg-[#ffffffd9] text-black hover:bg-[#ffffffd9]/90"
                              : "bg-[#00000000] text-white hover:bg-[#ffffff1a]"
                          } [font-family:'Montserrat',Helvetica] font-medium text-xl tracking-[0] leading-normal`}
                        >
                          {plan.buttonText}
                        </Button>
                      </div>

                      <div className="mt-[21px] px-[23px]">
                        <h5 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#a19e9e] text-[15px] tracking-[0] leading-normal whitespace-nowrap">
                          Everything You Get
                        </h5>

                        <div className="mt-[17px] space-y-[11px]">
                          {plan.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start gap-[13px]"
                            >
                              <div className="mt-0.5 w-4 h-4 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                                <CheckIcon
                                  className="w-3 h-3 text-black"
                                  strokeWidth={3}
                                />
                              </div>
                              <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#a19e9e] text-sm tracking-[0] leading-normal">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
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
