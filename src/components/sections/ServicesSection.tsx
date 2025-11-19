import React from "react";
import { Card, CardContent } from "../ui/card";
import MatchstickBoxHeading from "./MatchstickHeading";
import DecorativeLines from "../common/DecorativeLines";
import ParallaxCard from "../ui/ParallaxCard";

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
      <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full blur-[220px] bg-[radial-gradient(circle_at_95%_-3%,rgba(130,183,220,0.8)_0%,transparent_70%)] hidden lg:block" />
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full blur-[225px] bg-[radial-gradient(circle_at_95%_-3%,rgba(130,183,220,0.8)_0%,transparent_70%)] hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <header className="flex flex-col items-center mb-14 md:mb-20 relative text-center">
          <h1 className="mt-10 font-extrabold text-[#82b7dc] text-[30px] md:text-[38px] lg:text-[48px] mb-4 tracking-widest leading-tight uppercase  [font-family:'Montserrat',Helvetica] drop-shadow-[0_2px_12px_rgba(130,183,220,0.4)]">
           <DecorativeLines className="text-white">SERVICES</DecorativeLines> 
          </h1>
      <p className="font-extrabold text-[#bbbbbb] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug max-w-[95%] sm:max-w-[90%] md:max-w-[600px] lg:max-w-none mt-6 [font-family:'Montserrat',Helvetica] tracking-wide  lg:whitespace-nowrap">
  Where Creativity Meets Cutting-Edge Technology.
</p>


        </header>

        {/* Core Pillars */}
        <div className="flex flex-col items-center">
          <h2 className="font-extrabold text-[#82b7dc] text-[18px] md:text-[32px] lg:text-[30px] text-center tracking-wider leading-normal mb-12 [font-family:'Montserrat',Helvetica] uppercase">
            Our Core Pillars
          </h2>

          {/* Decorative corners */}
          <img
            className="hidden lg:block absolute w-[22%] xl:w-[25%] top-[6%] left-[-20%] opacity-70 "
            alt="Decorative"
            src="/servicesm.png"
          />
          <img
            className="hidden lg:block absolute w-[22%] xl:w-[25%] bottom-[6%] scale-x-[-1] right-[-20%] opacity-70"
            alt="Decorative"
            src="/servicesm.png"
          />

          {/* Vertical Connector + Cards */}
          <div className="relative flex flex-col items-center gap-12 w-full px-4 md:px-0">
            {/* Vertical main line */}
            <div className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#82b7dc]/70 via-[#82b7dc]/40 to-transparent rounded-full hidden md:block" />

            {servicesData.map((service, index) => (
              <div
                key={index}
                className="relative flex flex-col md:grid md:grid-cols-[140px_1fr] items-center md:items-start w-full max-w-[980px] gap-8 md:gap-8 z-10"
              >
                {/* Connector Node */}
                <div className="relative flex flex-col items-center md:items-center md:w-[140px]">
                  <div className="relative w-10 h-10 bg-gradient-to-br from-[#000000] to-[#b59db7] rounded-full flex items-center justify-center shadow-lg ring-2 ring-[#99b7dc]/40">
                    <div className="w-[12px] h-[12px] rounded-full bg-gradient-to-br from-white/70 to-[#141313] blur-[1px] animate-pulse" style={{ animationDuration: '5s' }} />
                  </div>
                  <h3 className="mt-3 font-semibold text-[#bbbbbb] text-base md:text-lg lg:text-xl text-center [font-family:'Montserrat',Helvetica] tracking-wide">
                    {service.title}
                  </h3>
                </div>

                {/* Service Card */}
                <ParallaxCard intensity={8}>
                  <Card className="w-full min-h-[300px] rounded-3xl border border-white/10 bg-[radial-gradient(50%_50%_at_30%_-4%,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0.18)_100%)] shadow-xl shadow-black/40 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                    <CardContent className="relative p-0 h-full">
                      <div className="relative z-10 py-8 px-6 md:px-10 lg:px-12 text-[#e0e6eb] flex flex-col items-center text-center">
                        <h4 className="font-extrabold text-[#bbbbbb] text-[20px] md:text-[24px] lg:text-[26px] leading-tight mb-4 tracking-widest uppercase [font-family:'Montserrat',Helvetica] drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)]">
                          {service.title}
                        </h4>
                        <div className="space-y-3 md:space-y-3 lg:space-y-4 text-[13px] md:text-[14px] lg:text-[16px] tracking-wide leading-relaxed font-medium text-[#d8dee4]/90">
                          {service.points.map((point, pointIndex) => (
                            <p
                              key={pointIndex}
                              className="transition-transform duration-300 hover:translate-x-1"
                            >
                              {point}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                    </CardContent>
                  </Card>
                </ParallaxCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
