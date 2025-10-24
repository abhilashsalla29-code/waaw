import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const valuesData = [
  {
    title: "Our Mission",
    description:
      "To craft innovative digital experiences that empower brands, inspire users, and redefine creativity. At Waaw, we merge design, technology, and strategy to make every idea flow seamlessly into reality.",
  },
  {
    title: "Our Expertise",
    description:
      "From UI/UX design to full-stack web and app development, we specialize in building smart, scalable, and stunning solutions. Our team blends creativity with technical precision to deliver digital products that truly stand out.",
  },
  {
    title: "Our Approach",
    description:
      "We believe in clarity, collaboration, and continuous innovation. Every project begins with a vision, evolves through design, and transforms into impact.",
  },
  {
    title: "Our Community",
    description:
      "Driven by passion and collaboration, our community thrives on creativity and connection. We grow together building not just digital products, but meaningful partnerships.",
  },
];

const MissionValuesSectionMobile = () => (
  <section className="bg-black px-4 py-12 flex flex-col items-center gap-6 w-full md:hidden">
    <div className="flex flex-col items-center gap-6 w-full max-w-[500px] mx-auto">
      {valuesData.map((value, idx) => (
        <div key={idx} className="w-full">
          <h3 className="text-[#bbbbbb] text-xl font-bold text-center mb-3 [font-family:'Montserrat',Helvetica]">
            {value.title}
          </h3>
          <p className="text-[#bbbbbb] text-sm text-center leading-relaxed [font-family:'Montserrat',Helvetica] font-medium">
            {value.description}
          </p>
          {idx < valuesData.length - 1 && (
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-6"></div>
          )}
        </div>
      ))}
    </div>
  </section>
);

const MissionValuesSection = () => {
  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block bg-black py-16 px-8 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Grid Layout - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-16 lg:gap-y-16">
            {valuesData.map((value, idx) => (
              <div key={idx} className="relative">
                <Card className="bg-transparent border-0 shadow-none">
                  <CardContent className="p-0">
                    <h3 className="text-[#bbbbbb] text-2xl lg:text-3xl font-bold text-center mb-5 [font-family:'Montserrat',Helvetica]">
                      {value.title}
                    </h3>
                    <p className="text-[#bbbbbb] text-sm lg:text-base text-center leading-relaxed [font-family:'Montserrat',Helvetica] font-medium max-w-[450px] mx-auto">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Horizontal divider after top row items */}
                {(idx === 0 || idx === 1) && (
                  <div className="absolute -bottom-6 lg:-bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                )}
                
                {/* Vertical divider between columns */}
                {(idx === 0 || idx === 2) && (
                  <div className="absolute top-0 -right-6 lg:-right-8 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <MissionValuesSectionMobile />
    </>
  );
};

export default MissionValuesSection;