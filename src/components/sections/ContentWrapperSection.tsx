import React from "react";

export const ContentWrapperSection = () => {
  return (
    <section className="w-full relative bg-black py-12 md:py-20 px-4 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto">
        {/* Main heading */}
        <h2 className="text-center [font-family:'Montserrat',Helvetica] font-extrabold text-[#82b7dc] text-2xl md:text-4xl lg:text-5xl tracking-[0] leading-normal mb-4 md:mb-6">
          MADE TO MOVE MINDS
        </h2>

        {/* Decorative line */}
        <div className="w-32 md:w-64 h-[1px] bg-white mx-auto mb-6 md:mb-8 opacity-50" />

        {/* Description text */}
        <p className="text-center [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-sm md:text-base lg:text-lg max-w-[90%] md:max-w-[800px] mx-auto leading-relaxed mb-12 md:mb-16">
          From initial ideas to a polished final product, we guide every step with creativity and precision.
          Our process ensures seamless design, development, and delivery for impactful digital experiences.
        </p>

        {/* Main visual container with Frame-50 and rotating center */}
        <div className="relative w-full max-w-[1000px] mx-auto mb-12 md:mb-16">
          <div className="relative w-full aspect-square max-w-[700px] mx-auto">
            {/* Frame-50 background image */}
            <img
              src="/Frame 50.png"
              alt="Process Framework"
              className="w-full h-full object-contain"
            />

            {/* Rotating center image - audiencegridm */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[35%] md:w-[30%] aspect-square">
              <img
                src="/audiencegridm.png"
                alt="Audience Grid"
                className="w-full h-full object-contain animate-spin-slow"
              />
            </div>
          </div>
        </div>

        {/* Process Details Section - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 max-w-[1200px] mx-auto">
          {/* Envision */}
          <div className="text-center md:text-left space-y-3">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1a2332] rounded-full flex items-center justify-center mx-auto md:mx-0 mb-3">
              <img className="w-6 h-6 md:w-7 md:h-7" alt="Envision" src="/frame-1.svg" />
            </div>
            <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-lg md:text-xl">
              Envision
            </h3>
            <ul className="space-y-2 text-[#bbbbbb] text-sm md:text-base">
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Define goals</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Research audience</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Plan features</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Set the vision</span>
              </li>
            </ul>
          </div>

          {/* Design */}
          <div className="text-center md:text-left space-y-3">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1a2332] rounded-full flex items-center justify-center mx-auto md:mx-0 mb-3">
              <img className="w-6 h-6 md:w-7 md:h-7" alt="Design" src="/frame-47.svg" />
            </div>
            <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-lg md:text-xl">
              Design
            </h3>
            <ul className="space-y-2 text-[#bbbbbb] text-sm md:text-base">
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Wireframes & flows</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>UI/UX layouts</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Visual interfaces</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Interactive prototypes</span>
              </li>
            </ul>
          </div>

          {/* Elevate */}
          <div className="text-center md:text-left space-y-3">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1a2332] rounded-full flex items-center justify-center mx-auto md:mx-0 mb-3">
              <img className="w-6 h-6 md:w-7 md:h-7" alt="Elevate" src="/frame-39.svg" />
            </div>
            <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-lg md:text-xl">
              Elevate
            </h3>
            <ul className="space-y-2 text-[#bbbbbb] text-sm md:text-base">
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Refine design</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Optimize usability</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Ensure responsiveness</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Enhance features</span>
              </li>
            </ul>
          </div>

          {/* Unleash */}
          <div className="text-center md:text-left space-y-3">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1a2332] rounded-full flex items-center justify-center mx-auto md:mx-0 mb-3">
              <img className="w-6 h-6 md:w-7 md:h-7" alt="Unleash" src="/frame-40.svg" />
            </div>
            <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-lg md:text-xl">
              Unleash
            </h3>
            <ul className="space-y-2 text-[#bbbbbb] text-sm md:text-base">
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Finalize product</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Test & QA</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Launch smoothly</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Provide support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ContentWrapperSection;