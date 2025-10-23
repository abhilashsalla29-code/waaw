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
    <section className="relative w-full bg-black overflow-hidden py-14 md:py-24 min-h-screen">
      {/* Background Glows */}
      <div className="absolute top-[1671px] left-[1271px] w-[290px] h-[290px] rounded-full blur-[220px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)] hidden lg:block" />
      <div className="absolute top-[-258px] left-[-226px] w-[416px] h-[426px] rounded-full blur-[225px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)] hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <header className="flex flex-col items-center mb-14 md:mb-20 relative">
          <h1 className="font-extrabold text-[#82b7dc] text-[30px] md:text-[38px] lg:text-[48px] tracking-widest leading-tight uppercase underline underline-offset-8 decoration-[2.5px] decoration-[#fff8] [font-family:'Montserrat',Helvetica] shadow-lg drop-shadow-blue-200">
            SERVICES
          </h1>
          <p className="font-extrabold text-white text-xl md:text-2xl lg:text-3xl text-center leading-snug max-w-[90%] md:max-w-[600px] mt-2 [font-family:'Montserrat',Helvetica] tracking-wide underline decoration-[#82b7dc]/50 decoration-2 underline-offset-4">
            Where Creativity Meets Cutting-Edge Technology.
          </p>
        </header>

        {/* Core Pillars with connectors */}
        <div className="flex flex-col items-center">
          <h2 className="font-extrabold text-[#82b7dc] text-[26px] md:text-[32px] lg:text-[40px] text-center tracking-wider leading-normal mb-10 md:mb-16 [font-family:'Montserrat',Helvetica] uppercase">
            Our Core Pillars
          </h2>
          {/* Decorated sides on large screens */}
          <img src="/servicesm.png" className="hidden lg:block absolute w-[20%] xl:w-[25.95%] top-[5.46%] left-[-9.43%] opacity-80" alt="Side Decor" />
          <img src="/servicesm.png" className="hidden lg:block absolute w-[20%] xl:w-[25.95%] top-[74.94%] left-[83.75%] opacity-80" alt="Side Decor" />

          {/* Service cards with vertical connector lines */}
          <div className="relative flex flex-col items-center gap-8 md:gap-12 w-full px-4 md:px-0">
            {servicesData.map((service, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center md:items-start w-full max-w-[700px] transition-transform duration-150 hover:scale-[1.03]">
                {/* Connector line + circle + text */}
                <div className="relative flex flex-col items-center mb-4 md:mb-0 md:mr-6 lg:mr-10 min-w-[150px]">
                  {index > 0 && (
                    <div className="hidden md:block absolute bottom-full mb-[-12px] w-1.5 h-[320px] lg:h-[344px] rounded-md bg-gradient-to-b from-[#82b7dc]/80 to-transparent" />
                  )}
                  {/* Circle with glow */}
                  <div className="relative z-10 w-10 h-10 bg-gradient-to-br from-[#1b2334] to-[#84bad3] rounded-full flex items-center justify-center shadow-xl mb-2">
                    <div className="w-[24px] h-[24px] rounded-full blur-[2px] bg-gradient-to-br from-white/70 to-[#82b7dc]" />
                  </div>
                  {/* Text below circle */}
                  <h3 className="font-semibold text-white text-base md:text-lg lg:text-xl whitespace-nowrap text-center [font-family:'Montserrat',Helvetica] tracking-wide">
                    {service.title}
                  </h3>
                </div>
                {/* Service Content */}
                <Card className="w-full md:w-[600px] min-h-[320px] rounded-3xl border-0 [background:radial-gradient(50%_50%_at_30%_-4%,rgba(255,255,255,0.13)_0%,rgba(0,0,0,0.16)_100%)] shadow-2xl backdrop-blur-md">
                  <CardContent className="relative p-0 h-full">
                    {/* Content with smaller font */}
                    <div className="relative z-10 pt-9 md:pt-12 lg:pt-14 px-8 md:px-14 lg:px-20 pb-7 text-[#e0e6eb]">
                      <h4 className="font-bold text-white text-[20px] md:text-[24px] lg:text-[28px] text-center leading-snug mb-4 [font-family:'Montserrat',Helvetica] tracking-wide uppercase">{service.title}</h4>
                      <div className="space-y-3 md:space-y-4 lg:space-y-5 text-[12px] md:text-[14px] lg:text-[16px] tracking-wide leading-relaxed font-medium">
                        {service.points.map((point, pointIndex) => (
                          <p key={pointIndex}>{point}</p>
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
    </section>
  );
};
