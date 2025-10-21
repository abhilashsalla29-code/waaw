import React from "react";
import { Card, CardContent } from "../ui/card";

const servicesData = [
  {
    title: "UI/UX Design",
    points: [
      "Understand business goals, user needs, and project scope.",
      "Define user journeys, information architecture, and key interactions.",
      "Develop clean, functional, and brand-aligned interfaces.",
      "Conduct usability testing and refine based on insights.",
      "Provide final designs, guidelines, and handoff to development.",
    ],
  },
  {
    title: "Frontend Development",
    points: [
      "Define requirements, scope, and user interface goals.",
      "Transform UI/UX designs into functional layouts.",
      "Build responsive, interactive, and high-performance interfaces.",
      "Conduct cross-browser, device, and usability testing.",
      "Launch polished, optimized front-end code ready for users.",
    ],
  },
  {
    title: "Backend Development",
    points: [
      "Understand business logic, data flow, and system needs.",
      "Plan scalable, secure, and maintainable system structures.",
      "Implement APIs, databases, and server-side logic.",
      "Ensure performance, security, and reliability.",
      "Launch the backend and provide ongoing support and updates.",
    ],
  },
  {
    title: "Deployment",
    points: [
      "Prepare production environment and finalize release strategy.",
      "Configure servers, hosting, and CI/CD pipelines for smooth delivery.",
      "Deploy stable, secure, and optimized applications.",
      "Monitor performance and ensure smooth user experience.",
      "Provide maintenance, updates, and continuous improvements.",
    ],
  },
  {
    title: "Project Management",
    points: [
      "Define project scope, objectives, and timelines.",
      "Coordinate teams, resources, and stakeholder communication.",
      "Track progress, manage risks, and resolve issues efficiently.",
      "Ensure quality, budget adherence, and timely delivery.",
      "Provide reports, documentation, and process improvements.",
    ],
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black overflow-hidden py-12 md:py-20 min-h-screen">
      {/* Background Glow Effects */}
      <div className="absolute top-[1671px] left-[1271px] w-[290px] h-[290px] rounded-[145px] blur-[220px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)] hidden lg:block" />
      <div className="absolute top-[-258px] left-[-226px] w-[416px] h-[426px] rounded-[208px/213px] blur-[225px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)] hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-12 md:mb-16">
          <div className="relative mb-6 md:mb-8">
            {/* Decorative Elements Around Title */}
            <div className="absolute top-[25px] left-[-32px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 blur-[2px] hidden md:block" />
            <div className="absolute top-[25px] left-[210px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 blur-[2px] hidden md:block" />
            <div className="absolute top-[5px] left-[-20px] w-2 h-2 bg-white rounded rotate-180 blur-sm hidden md:block" />
            <div className="absolute top-[5px] left-[222px] w-2 h-2 bg-white rounded rotate-180 blur-sm hidden md:block" />
            <div className="absolute top-[66px] left-[-34px] w-[157px] h-1 bg-white rounded-[78.5px/2px] blur-[5px] hidden md:block" />
            <div className="absolute top-[-17px] left-[92px] w-[157px] h-1 bg-white rounded-[78.5px/2px] rotate-180 blur-[5px] hidden md:block" />
            <div className="absolute top-[48px] left-[-52px] w-[35px] h-[35px] bg-white rounded-[17.5px] rotate-90 blur-sm hidden md:block" />
            <div className="absolute top-[-30px] left-[232px] w-[35px] h-[35px] bg-white rounded-[17.5px] -rotate-90 blur-sm hidden md:block" />

            <h1 className="[font-family:'Montserrat',Helvetica] font-extrabold text-[#82b7dc] text-[28px] md:text-[32px] lg:text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
              SERVICES
            </h1>
          </div>

          <p className="[font-family:'Montserrat',Helvetica] font-extrabold text-white text-lg md:text-xl lg:text-2xl text-center tracking-[0] leading-[32px] md:leading-[40px] lg:leading-[58px] underline max-w-[90%] md:max-w-[540px] px-4">
            Where Creativity Meets Cutting-Edge Technology.
          </p>
        </header>

        {/* Core Pillars Section */}
        <div className="flex flex-col items-center">
          <h2 className="[font-family:'Montserrat',Helvetica] font-extrabold text-[#82b7dc] text-[24px] md:text-[28px] lg:text-[34px] text-center tracking-[0] leading-[normal] mb-8 md:mb-12">
            Our Core Pillars
          </h2>

          {/* Services Cards with Connectors */}
          <div className="relative flex flex-col items-center gap-[24px] md:gap-[30px] w-full">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center md:items-start w-full max-w-[650px]"
              >
                {/* Vertical Connector Line + Circle */}
                <div className="relative flex flex-col items-center mb-4 md:mb-0 md:mr-6 lg:mr-8 shrink-0">
                  {/* Connector Line (shown from 2nd card onwards on desktop) */}
                  {index > 0 && (
                    <div className="hidden md:block absolute bottom-full mb-[-12px] w-3.5 h-[320px] lg:h-[344px] rounded-[15px] [background:radial-gradient(50%_50%_at_2889%_3%,rgba(255,255,255,1)_0%,rgba(24,24,24,1)_70%)]" />
                  )}

                  {/* Circle Indicator */}
                  <div className="relative z-10 w-7 h-7 md:w-8 md:h-8 bg-[#605f5f] rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] rounded-[8.5px] blur-[1px] [background:radial-gradient(50%_50%_at_122%_86%,rgba(255,255,255,1)_0%,rgba(130,183,220,1)_100%)]" />
                  </div>
                </div>

                {/* Service Card */}
                <Card className="w-full md:w-[579px] min-h-[280px] md:h-[300px] lg:h-80 rounded-[24px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden border-0 [background:radial-gradient(50%_50%_at_30%_-4%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.1)_100%)] shadow-xl backdrop-blur-sm">
                  <CardContent className="relative p-0 h-full">
                    {/* Horizontal Light Bar Effect */}
                    <div className="absolute top-[-285px] left-[50%] -translate-x-1/2 w-[7px] h-[569px] rounded-[3.5px/284.5px] -rotate-90 bg-white blur-sm" />

                    {/* Top Glow Layers */}
                    <div className="absolute top-0 left-0 w-full h-[175px] bg-[#ffffff12] blur-[50px] backdrop-blur-[37px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37px)_brightness(100%)]" />
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-[#d9d9d9]" />
                    <div className="absolute top-0 left-0 w-full h-[49px] bg-[#ffffff4c] blur-[50px] backdrop-blur-[37px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37px)_brightness(100%)]" />
                    <div className="absolute top-0 left-0 w-full h-[23px] bg-[#ffffff4c] blur-[50px] backdrop-blur-[37px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37px)_brightness(100%)]" />

                    {/* Content */}
                    <div className="relative z-10 pt-[24px] md:pt-[36px] lg:pt-[46px] px-[24px] md:px-[40px] lg:px-[62px] pb-6">
                      <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[20px] md:text-[26px] lg:text-[32px] text-center tracking-[0] leading-[32px] md:leading-[40px] lg:leading-[50px] mb-4 md:mb-6 lg:mb-8">
                        {service.title}
                      </h3>

                      <div className="space-y-2 md:space-y-3 lg:space-y-4">
                        {service.points.map((point, pointIndex) => (
                          <p
                            key={pointIndex}
                            className="[font-family:'Poppins',Helvetica] font-medium text-[#bbbbbb] text-[13px] md:text-[14px] lg:text-base tracking-[0] leading-[1.4] md:leading-[1.5]"
                          >
                            {point}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Corner Images - Desktop Only */}
      <img
        className="hidden lg:block absolute w-[20%] xl:w-[25.95%] h-auto top-[5.46%] left-[-9.43%] opacity-80"
        alt="Decorative"
        src="/servicesm.png"
      />
      <img
        className="hidden lg:block absolute w-[20%] xl:w-[25.95%] h-auto top-[74.94%] left-[83.75%] opacity-80"
        alt="Decorative"
        src="/servicesm.png"
      />

      {/* Side Reed Decorations - Desktop Only */}
      <img
        className="hidden lg:block absolute top-[-97px] right-0 h-[2803px] w-[200px] xl:w-[295px] opacity-60"
        alt="Decorative reeds"
        src="/wider-frosted-reeds.png"
      />
      <img
        className="hidden lg:block absolute top-[-52px] left-0 h-[2100px] w-[200px] xl:w-[295px] opacity-60"
        alt="Decorative reeds"
        src="/wider-frosted-reeds.png"
      />
    </section>
  );
};

export default ServicesSection;
