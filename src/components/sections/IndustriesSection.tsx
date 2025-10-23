import React from "react";
import { Card, CardContent } from "../ui/card";

const industries = [
  {
    title: "E-commerce & retailers",
    description: "We help online stores and retail giants drive revenue, improve customer experiences, and scale with confidence through tech-powered solutions.",
    icons: [
      { icon: "🛍️", label: "Shopping" },
      { icon: "☁️", label: "Cloud" },
      { icon: "👕", label: "Apparel" },
      { icon: "👟", label: "Footwear" }
    ]
  },
  {
    title: "Technology & Startups",
    description: "We help startups turn awesome ideas into powerful digital products, support innovation through cutting-edge technology and data-driven strategies.",
    icons: [
      { icon: "💼", label: "Business" }
    ]
  },
  {
    title: "Financial Services",
    description: "We empower financial brands to drive user trust, boost user experience, streamline operations, and maximize ROI through UX/UI excellence.",
    icons: [
      { icon: "📈", label: "Growth" }
    ]
  },
  {
    title: "Logistics & Transportation",
    description: "We streamline logistics and transportation through smart, efficient solutions that optimize workflows, reduce costs, and improve delivery speed.",
    icons: [
      { icon: "🚚", label: "Delivery" }
    ]
  },
  {
    title: "Healthcare Providers",
    description: "We empower hospitals, brands in them, with tools that drive user engagement, streamline operations, and enhance patient experiences at every touchpoint.",
    icons: [
      { icon: "⚕️", label: "Healthcare" }
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
    <p className="text-white text-lg font-semibold text-center max-w-[90%] mb-2">
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
              <h3 className="text-white text-lg font-bold max-w-[60%]">
                {industry.title}
              </h3>
              <div className="flex gap-2 flex-wrap justify-end max-w-[35%]">
                {industry.icons.map((item, iconIdx) => (
                  <div
                    key={iconIdx}
                    className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-xl"
                  >
                    {item.icon}
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
          <p className="text-white text-2xl font-semibold text-center mb-16 underline decoration-1 underline-offset-4">
            Transforming Businesses, One Digital Solution at a Time.
          </p>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            {industries.map((industry, idx) => (
              <Card
                key={idx}
                className={`rounded-3xl p-0 bg-gradient-to-br from-[rgba(255,255,255,0.03)] via-[rgba(153,178,213,0.06)] to-[rgba(52,102,170,0.08)] border-0 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.50),inset_1px_0_0_rgba(255,255,255,0.42),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] transition-all duration-300 ${
                  idx === 0 || idx === 1 ? 'h-[280px]' : 'h-[320px]'
                }`}
              >
                <CardContent className="p-8 relative h-full">
                  {/* Background Glow Effect */}
                  <div className="absolute top-4 right-8 w-32 h-32 bg-[#82b7dc] rounded-full blur-[80px] opacity-30"></div>

                  {/* Drive Growth Tag */}
                  <div className="inline-block bg-[rgba(130,183,220,0.15)] px-4 py-1.5 rounded-full mb-6">
                    <span className="text-[#82b7dc] text-sm font-semibold">Drive Growth</span>
                  </div>

                  {/* Title and Icons Container */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-white text-xl font-bold max-w-[55%] leading-tight">
                      {industry.title}
                    </h3>
                    <div className={`flex gap-3 flex-wrap justify-end ${
                      idx === 0 ? 'grid grid-cols-2 gap-2' : 'flex-col'
                    }`}>
                      {industry.icons.map((item, iconIdx) => (
                        <div
                          key={iconIdx}
                          className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-2xl backdrop-blur-sm hover:bg-[rgba(255,255,255,0.1)] transition-all"
                        >
                          {item.icon}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#bbbbbb] text-base leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <IndustriesSectionMobile />
    </>
  );
};

export default IndustriesSection;
