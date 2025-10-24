import React from "react";
import { Card, CardContent } from "../ui/card";

const industries = [
  {
    title: "E-commerce & retailers",
    description: "We help online stores and retail giants drive revenue, improve customer experiences, and scale with confidence through tech-powered solutions.",
    icons: [
      { icon: "/i1.png", label: "i1" },
      { icon: "/i2.png", label: "i2" },
      { icon: "/i3.png", label: "i3" },
      { icon: "/i4.png", label: "i4" }
    ]
  },
  {
    title: "Technology & Startups",
    description: "We help startups turn awesome ideas into powerful digital products, support innovation through cutting-edge technology and data-driven strategies.",
    icons: [
      { icon: "/i5.png", label: "i5" }
    ]
  },
  {
    title: "Financial Services",
    description: "We empower financial brands to drive user trust, boost user experience, streamline operations, and maximize ROI through UX/UI excellence.",
    icons: [
      { icon: "/i6.jpg", label: "i6" }
    ]
  },
  {
    title: "Logistics & Transportation",
    description: "We streamline logistics and transportation through smart, efficient solutions that optimize workflows, reduce costs, and improve delivery speed.",
    icons: [
      { icon: "/i7.png", label: "i7" }
    ]
  },
  {
    title: "Healthcare Providers",
    description: "We empower hospitals, brands in them, with tools that drive user engagement, streamline operations, and enhance patient experiences at every touchpoint.",
    icons: [
      { icon: "/i1.png", label: "i1" }
    ]
  }
];

const IndustriesSectionMobile = () => (
  <section className="bg-black px-4 py-12 flex flex-col items-center gap-6 min-h-screen w-full md:hidden">
    {/* Title with decorative dot */}
    <div className="flex items-center gap-2 mb-4">
      <div className="w-3 h-3 bg-[#82b7dc] rounded-full"></div>
      <h2 className="text-[#82b7dc] text-2xl font-bold tracking-wide">INDUSTRY</h2>
    </div>

    {/* Tagline */}
    <p className="text-[#bbbbbb] text-lg font-semibold text-center max-w-[90%] mb-2">
      Transforming Businesses, One Digital Solution at a Time.
    </p>

    {/* Industry Cards */}
    <div className="flex flex-col items-center gap-4 w-full mt-4">
      {industries.map((industry, idx) => (
        <Card
          key={idx}
          className="w-full max-w-[340px] rounded-2xl p-0 bg-gradient-to-br from-[rgba(255,255,255,0.02)] to-[rgba(52,102,170,0.08)] border border-[rgba(255,255,255,0.1)] backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
        >
          <CardContent className="p-6">
            {/* Drive Growth Tag */}
            <div className="inline-block bg-[rgba(130,183,220,0.1)] px-3 py-1 rounded-full mb-4">
              <span className="text-[#82b7dc] text-xs font-semibold">Drive Growth</span>
            </div>

            {/* Title and Icons */}
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-[#bbbbbb] text-lg font-bold max-w-[60%]">
                {industry.title}
              </h3>
              <div className="flex gap-2 flex-wrap justify-end max-w-[35%]">
                {industry.icons.map((item, iconIdx) => (
                  <div
                    key={iconIdx}
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  >
                    <img src={item.icon} alt={item.label} className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-[#bbbbbb] text-sm leading-relaxed">
              {industry.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);



const IndustriesSection = () => {
  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block bg-black py-20 px-8 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-4 h-4 bg-[#82b7dc] rounded-full shadow-[0_0_20px_rgba(130,183,220,0.6)]"></div>
            <h2 className="text-[#82b7dc] text-4xl font-bold tracking-wide">INDUSTRY</h2>
          </div>

          {/* Tagline */}
          <p className="text-[#bbbbbb] text-2xl font-semibold text-center mb-16 underline decoration-1 underline-offset-4">
            Transforming Businesses, One Digital Solution at a Time.
          </p>

          {/* Industries Grid */}
          <div className="max-w-[1200px] mx-auto space-y-8">
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industries.slice(0, 3).map((industry, idx) => (
                <Card
                  key={idx}
                  className="flex flex-col justify-between h-[380px] rounded-3xl bg-gradient-to-br from-[rgba(255,255,255,0.03)] via-[rgba(153,178,213,0.08)] to-[rgba(52,102,170,0.1)] border border-[rgba(255,255,255,0.1)] backdrop-blur-sm shadow-md hover:shadow-lg hover:border-[rgba(130,183,220,0.4)] transition-all"
                >
                  <CardContent className="flex-1 flex flex-col justify-between p-8">
                    {/* Drive Growth Tag */}
                    <div className="inline-block bg-[rgba(130,183,220,0.15)] px-4 py-1.5 rounded-full mb-5">
                      <span className="text-[#bbbbbb] text-sm font-semibold">Drive Growth</span>
                    </div>

                    {/* Title and Icons */}
                    <div className="flex justify-between items-start mb-5">
                      <h3 className="text-[#bbbbbb] text-xl font-bold leading-tight max-w-[60%]">
                        {industry.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-2 justify-end items-center max-w-[60%]">
                        {industry.icons.map((item, iconIdx) => (
                          <div
                            key={iconIdx}
                            className="w-20 h-20  flex items-center justify-center"
                          >
                            <img src={item.icon} alt={item.label} className="w-12 h-12" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#bbbbbb] text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industries.slice(3, 5).map((industry, idx) => (
                <Card
                  key={idx + 3}
                  className="flex flex-col justify-between h-[380px] rounded-3xl bg-gradient-to-br from-[rgba(255,255,255,0.03)] via-[rgba(153,178,213,0.08)] to-[rgba(52,102,170,0.1)] border border-[rgba(255,255,255,0.1)] backdrop-blur-sm shadow-md hover:shadow-lg hover:border-[rgba(130,183,220,0.4)] transition-all"
                >
                  <CardContent className="flex-1 flex flex-col justify-between p-8">
                    <div className="inline-block bg-[rgba(130,183,220,0.15)] px-4 py-1.5 rounded-full mb-5">
                      <span className="text-[#82b7dc] text-sm font-semibold">Drive Growth</span>
                    </div>

                    <div className="flex justify-between items-start mb-5">
                      <h3 className="text-[#bbbbbb] text-xl font-bold leading-tight max-w-[60%]">
                        {industry.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-2 justify-end items-center max-w-[40%]">
                        {industry.icons.map((item, iconIdx) => (
                          <div
                            key={iconIdx}
                            className="w-10 h-10 bg-[rgba(255,255,255,0.05)] rounded-xl flex items-center justify-center"
                          >
                            <img src={item.icon} alt={item.label} className="w-6 h-6" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-[#bbbbbb] text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <IndustriesSectionMobile />
    </>
  );
};

export default IndustriesSection;
