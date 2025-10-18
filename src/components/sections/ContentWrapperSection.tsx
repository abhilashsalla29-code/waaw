import React from "react";

const stages = [
  {
    title: "Envision",
    position: "top-right",
    titleTop: "top-[250px]",
    titleLeft: "left-[75%]",
    items: [
      { text: "Define goals", top: "top-[290px]", left: "left-[76%]" },
      { text: "Research audience", top: "top-[310px]", left: "left-[76%]" },
      { text: "Plan features", top: "top-[330px]", left: "left-[76%]" },
      { text: "Set the vision", top: "top-[350px]", left: "left-[76%]" },
    ],
    iconTop: "top-[200px]",
    iconLeft: "left-[70%]",
    iconSrc: "/frame-1.svg",
    vectorTop: "top-[240px]",
    vectorLeft: "left-[60%]",
    vectorSrc: "/vector-22.svg",
    bulletPositions: [
      { top: "top-[295px]", left: "left-[74%]" },
      { top: "top-[315px]", left: "left-[74%]" },
      { top: "top-[335px]", left: "left-[74%]" },
      { top: "top-[355px]", left: "left-[74%]" },
    ],
  },
  {
    title: "Design",
    position: "bottom-right",
    titleTop: "top-[520px]",
    titleLeft: "left-[75%]",
    items: [
      { text: "Wireframes & flows", top: "top-[560px]", left: "left-[76%]" },
      { text: "UI/UX layouts", top: "top-[580px]", left: "left-[76%]" },
      { text: "Visual interfaces", top: "top-[600px]", left: "left-[76%]" },
      { text: "Interactive prototypes", top: "top-[620px]", left: "left-[76%]" },
    ],
    iconTop: "top-[470px]",
    iconLeft: "left-[70%]",
    iconSrc: "/frame-47.svg",
    vectorTop: "top-[460px]",
    vectorLeft: "left-[60%]",
    vectorSrc: "/vector-23.svg",
    bulletPositions: [
      { top: "top-[565px]", left: "left-[74%]" },
      { top: "top-[585px]", left: "left-[74%]" },
      { top: "top-[605px]", left: "left-[74%]" },
      { top: "top-[625px]", left: "left-[74%]" },
    ],
  },
  {
    title: "Elevate",
    position: "bottom-left",
    titleTop: "top-[520px]",
    titleLeft: "left-[8%]",
    items: [
      { text: "Refine design", top: "top-[560px]", left: "left-[9%]" },
      { text: "Optimize usability", top: "top-[580px]", left: "left-[9%]" },
      { text: "Ensure responsiveness", top: "top-[600px]", left: "left-[9%]" },
      { text: "Enhance features", top: "top-[620px]", left: "left-[9%]" },
    ],
    iconTop: "top-[470px]",
    iconLeft: "left-[15%]",
    iconSrc: "/frame-39.svg",
    vectorTop: "top-[460px]",
    vectorLeft: "left-[25%]",
    vectorSrc: "/vector-24-1.svg",
    bulletPositions: [
      { top: "top-[565px]", left: "left-[7%]" },
      { top: "top-[585px]", left: "left-[7%]" },
      { top: "top-[605px]", left: "left-[7%]" },
      { top: "top-[625px]", left: "left-[7%]" },
    ],
  },
  {
    title: "Unleash",
    position: "top-left",
    titleTop: "top-[250px]",
    titleLeft: "left-[8%]",
    items: [
      { text: "Finalize product", top: "top-[290px]", left: "left-[9%]" },
      { text: "Test & QA", top: "top-[310px]", left: "left-[9%]" },
      { text: "Launch smoothly", top: "top-[330px]", left: "left-[9%]" },
      { text: "Provide support", top: "top-[350px]", left: "left-[9%]" },
    ],
    iconTop: "top-[200px]",
    iconLeft: "left-[15%]",
    iconSrc: "/frame-40.svg",
    vectorTop: "top-[240px]",
    vectorLeft: "left-[25%]",
    vectorSrc: "/vector-21.svg",
    bulletPositions: [
      { top: "top-[295px]", left: "left-[7%]" },
      { top: "top-[315px]", left: "left-[7%]" },
      { top: "top-[335px]", left: "left-[7%]" },
      { top: "top-[355px]", left: "left-[7%]" },
    ],
  },
];

export const ContentWrapperSection = (): JSX.Element => {
  return (
    <section className="w-full relative bg-black py-[94px] px-4">
      <div className="relative max-w-[1440px] mx-auto">
        <div className="relative h-[700px]">
          {/* Main heading */}
          <h2 className="absolute top-[20px] left-1/2 transform -translate-x-1/2 [font-family:'Montserrat',Helvetica] font-extrabold text-[#82b7dc] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            MADE TO MOVE MINDS
          </h2>

          {/* Decorative elements - top line */}
          <div className="absolute top-[15px] left-1/2 transform -translate-x-1/2 w-[600px] h-px bg-white rounded blur-[2px]" />
          
          {/* Decorative dots */}
          <div className="absolute top-[10px] left-[20%] w-2 h-2 bg-white rounded blur-sm" />
          <div className="absolute top-[10px] right-[20%] w-2 h-2 bg-white rounded blur-sm" />

          {/* Description text */}
          <p className="absolute top-[90px] left-1/2 transform -translate-x-1/2 w-[800px] [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-lg text-center tracking-[0] leading-[1.4]">
            From initial ideas to a polished final product, we guide every step with creativity and precision.
            <br />
            Our process ensures seamless design, development, and delivery for impactful digital experiences.
          </p>

          {/* Central circular elements */}
          <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              className="w-[300px] h-[300px]"
              alt="Ellipse"
              src="/ellipse-51.svg"
            />
            <img
              className="absolute top-0 left-0 w-[300px] h-[300px]"
              alt="Ellipse"
              src="/ellipse-54.svg"
            />
            <img
              className="absolute top-0 left-0 w-[300px] h-[300px]"
              alt="Ellipse"
              src="/ellipse-52.svg"
            />
            <img
              className="absolute top-0 left-0 w-[300px] h-[300px]"
              alt="Ellipse"
              src="/ellipse-53.svg"
            />
          </div>

          {/* Central glow effect */}
          <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full blur-[100px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(130,183,220,0.6)_0%,transparent_100%)]" />

          {/* Central mesh/logo */}
          <img
            className="absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px]"
            alt="Mesh"
            src="/mesh3-1.png"
          />

          {/* Central "235 x 235" text */}
          <div className="absolute top-[280px] left-1/2 transform -translate-x-1/2 bg-[#82b7dc] text-white px-4 py-1 rounded text-sm font-medium">
            235 x 235
          </div>

          {/* Render all stages */}
          {stages.map((stage, index) => (
            <React.Fragment key={index}>
              {/* Connecting lines/vectors */}
              <img
                className={`absolute ${stage.vectorTop} ${stage.vectorLeft} w-[150px] h-[60px]`}
                alt="Vector"
                src={stage.vectorSrc}
              />

              {/* Stage icons */}
              <div className={`absolute ${stage.iconTop} ${stage.iconLeft} w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center`}>
                <img
                  className="w-8 h-8"
                  alt="Frame"
                  src={stage.iconSrc}
                />
              </div>

              {/* Stage titles */}
              <h3
                className={`absolute ${stage.titleTop} ${stage.titleLeft} [font-family:'Montserrat',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[normal]`}
              >
                {stage.title}
              </h3>

              {/* Stage items with bullets */}
              {stage.items.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  <div
                    className={`absolute ${item.top} ${item.left} [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-sm tracking-[0] leading-[normal]`}
                  >
                    {item.text}
                  </div>
                  <div
                    className={`absolute ${stage.bulletPositions[itemIndex].top} ${stage.bulletPositions[itemIndex].left} w-1 h-1 bg-[#bbbbbb] rounded-full`}
                  />
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentWrapperSection;
