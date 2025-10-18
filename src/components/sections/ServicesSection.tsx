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
    title: "Frontend Developement",
    points: [
      "Define requirements, scope, and user interface goals.",
      "Transform UI/UX designs into functional layouts.",
      "Build responsive, interactive, and high-performance interfaces.",
      "Conduct cross-browser, device, and usability testing.",
      "Launch polished, optimized front-end code ready for users.",
    ],
  },
  {
    title: "Backend Developement",
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
    <section className="relative w-full bg-black overflow-hidden py-20">
      <div className="absolute top-[1671px] left-[1271px] w-[290px] h-[290px] rounded-[145px] blur-[220px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />

      <div className="absolute top-[-258px] left-[-226px] w-[416px] h-[426px] rounded-[208px/213px] blur-[225px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />

      <div className="relative max-w-7xl mx-auto px-4">
        <header className="flex flex-col items-center mb-16">
          <div className="relative mb-8">
            <div className="absolute top-[25px] left-[-32px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 blur-[2px]" />
            <div className="absolute top-[25px] left-[210px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 blur-[2px]" />
            <div className="absolute top-[5px] left-[-20px] w-2 h-2 bg-white rounded rotate-180 blur-sm" />
            <div className="absolute top-[5px] left-[222px] w-2 h-2 bg-white rounded rotate-180 blur-sm" />
            <div className="absolute top-[66px] left-[-34px] w-[157px] h-1 bg-white rounded-[78.5px/2px] blur-[5px]" />
            <div className="absolute top-[-17px] left-[92px] w-[157px] h-1 bg-white rounded-[78.5px/2px] rotate-180 blur-[5px]" />
            <div className="absolute top-[48px] left-[-52px] w-[35px] h-[35px] bg-white rounded-[17.5px] rotate-90 blur-sm" />
            <div className="absolute top-[-30px] left-[232px] w-[35px] h-[35px] bg-white rounded-[17.5px] -rotate-90 blur-sm" />

            <h1 className="[font-family:'Montserrat',Helvetica] font-extrabold text-[#82b7dc] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
              SERVICES
            </h1>
          </div>

          <p className="[font-family:'Montserrat',Helvetica] font-extrabold text-white text-2xl text-center tracking-[0] leading-[58px] underline max-w-[540px]">
            Where Creativity Meets Cutting-Edge Technology.
          </p>
        </header>

        <div className="flex flex-col items-center">
          <h2 className="[font-family:'Montserrat',Helvetica] font-extrabold text-[#82b7dc] text-[34px] text-center tracking-[0] leading-[normal] mb-12">
            Our Core Pillars
          </h2>

          <div className="relative flex flex-col items-center gap-[30px]">
            {servicesData.map((service, index) => (
              <div key={index} className="relative flex items-start">
                <div className="relative flex flex-col items-center mr-4">
                  {index > 0 && (
                    <div className="absolute bottom-full mb-[-12px] w-3.5 h-[344px] rounded-[15px] [background:radial-gradient(50%_50%_at_2889%_3%,rgba(255,255,255,1)_0%,rgba(24,24,24,1)_70%)]" />
                  )}

                  <div className="relative z-10 w-8 h-8 bg-[#605f5f] rounded-2xl flex items-center justify-center">
                    <div className="w-[17px] h-[17px] rounded-[8.5px] blur-[1px] [background:radial-gradient(50%_50%_at_122%_86%,rgba(255,255,255,1)_0%,rgba(130,183,220,1)_100%)]" />
                  </div>
                </div>

                <Card className="w-[579px] h-80 rounded-[40px] overflow-hidden border-0 [background:radial-gradient(50%_50%_at_30%_-4%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.1)_100%)]">
                  <CardContent className="relative p-0 h-full">
                    <div className="absolute top-[-285px] left-[286px] w-[7px] h-[569px] rounded-[3.5px/284.5px] -rotate-90 bg-white blur-sm" />

                    <div className="absolute top-0 left-0 w-full h-[175px] bg-[#ffffff12] blur-[50px] backdrop-blur-[37px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37px)_brightness(100%)]" />

                    <div className="absolute top-0 left-0 w-full h-0.5 bg-[#d9d9d9]" />

                    <div className="absolute top-0 left-0 w-full h-[49px] bg-[#ffffff4c] blur-[50px] backdrop-blur-[37px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37px)_brightness(100%)]" />

                    <div className="absolute top-0 left-0 w-full h-[23px] bg-[#ffffff4c] blur-[50px] backdrop-blur-[37px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37px)_brightness(100%)]" />

                    <div className="relative z-10 pt-[46px] px-[62px]">
                      <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[32px] text-center tracking-[0] leading-[50px] mb-8">
                        {service.title}
                      </h3>

                      <div className="space-y-4">
                        {service.points.map((point, pointIndex) => (
                          <p
                            key={pointIndex}
                            className="[font-family:'Poppins',Helvetica] font-medium text-[#bbbbbb] text-sm tracking-[0] leading-[normal]"
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

      <img
        className="absolute w-[25.95%] h-[14.31%] top-[5.46%] left-[-9.43%]"
        alt="Tk"
        src="/tk2.png"
      />

      <img
        className="absolute w-[25.95%] h-[14.31%] top-[74.94%] left-[83.75%]"
        alt="Tk"
        src="/tk2-1.png"
      />

      <img
        className="absolute top-[-97px] right-0 h-[2803px] w-[295px]"
        alt="Wider frosted reeds"
        src="/wider-frosted-reeds-1.png"
      />

      <img
        className="absolute top-[-52px] left-0 h-[2100px] w-[295px]"
        alt="Wider frosted reeds"
        src="/wider-frosted-reeds-2.png"
      />
    </section>
  );
};

export default ServicesSection;
