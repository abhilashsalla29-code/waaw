import React from "react";

const stages = [
  {
    title: "Envision",
    position: "top-right",
    titleTop: "top-[436px]",
    titleLeft: "left-[1075px]",
    items: [
      { text: "Define goals", top: "top-[477px]", left: "left-[1112px]" },
      { text: "Research audience", top: "top-[501px]", left: "left-[1112px]" },
      { text: "Plan features", top: "top-[525px]", left: "left-[1112px]" },
      { text: "Set the vision", top: "top-[549px]", left: "left-[1112px]" },
    ],
    iconTop: "top-[367px]",
    iconLeft: "left-[641px]",
    iconSrc: "/frame-1.svg",
    vectorTop: "top-[486px]",
    vectorLeft: "left-[796px]",
    vectorSrc: "/vector-22.svg",
    bulletPositions: [
      { top: "top-[488px]", left: "left-[1084px]" },
      { top: "top-[512px]", left: "left-[1084px]" },
      { top: "top-[536px]", left: "left-[1084px]" },
      { top: "top-[560px]", left: "left-[1084px]" },
    ],
  },
  {
    title: "Design",
    position: "bottom-right",
    titleTop: "top-[781px]",
    titleLeft: "left-[1075px]",
    items: [
      { text: "Wireframes & flows", top: "top-[822px]", left: "left-[1112px]" },
      { text: "UI/UX layouts", top: "top-[846px]", left: "left-[1112px]" },
      { text: "Visual interfaces", top: "top-[870px]", left: "left-[1112px]" },
      {
        text: "Interactive prototypes",
        top: "top-[894px]",
        left: "left-[1112px]",
      },
    ],
    iconTop: "top-[607px]",
    iconLeft: "left-[873px]",
    iconSrc: "/frame-47.svg",
    vectorTop: "top-[754px]",
    vectorLeft: "left-[790px]",
    vectorSrc: "/vector-23.svg",
    bulletPositions: [
      { top: "top-[833px]", left: "left-[1084px]" },
      { top: "top-[857px]", left: "left-[1084px]" },
      { top: "top-[881px]", left: "left-[1084px]" },
      { top: "top-[905px]", left: "left-[1084px]" },
    ],
  },
  {
    title: "Elevate",
    position: "bottom-left",
    titleTop: "top-[781px]",
    titleLeft: "left-[178px]",
    items: [
      { text: "Refine design", top: "top-[822px]", left: "left-[215px]" },
      { text: "Optimize usability", top: "top-[846px]", left: "left-[215px]" },
      {
        text: "Ensure responsiveness",
        top: "top-[870px]",
        left: "left-[215px]",
      },
      { text: "Enhance features", top: "top-[894px]", left: "left-[215px]" },
    ],
    iconTop: "top-[847px]",
    iconLeft: "left-[641px]",
    iconSrc: "/frame-39.svg",
    vectorTop: "top-[754px]",
    vectorLeft: "left-[372px]",
    vectorSrc: "/vector-24-1.svg",
    bulletPositions: [
      { top: "top-[833px]", left: "left-[187px]" },
      { top: "top-[857px]", left: "left-[187px]" },
      { top: "top-[881px]", left: "left-[187px]" },
      { top: "top-[905px]", left: "left-[187px]" },
    ],
  },
  {
    title: "Unleash",
    position: "top-left",
    titleTop: "top-[436px]",
    titleLeft: "left-[178px]",
    items: [
      { text: "Finalize product", top: "top-[477px]", left: "left-[215px]" },
      { text: "Test & QA", top: "top-[501px]", left: "left-[215px]" },
      { text: "Launch smoothly", top: "top-[525px]", left: "left-[215px]" },
      { text: "Provide support", top: "top-[549px]", left: "left-[215px]" },
    ],
    iconTop: "top-[607px]",
    iconLeft: "left-[410px]",
    iconSrc: "/frame-40.svg",
    vectorTop: "top-[486px]",
    vectorLeft: "left-[381px]",
    vectorSrc: "/vector-21.svg",
    bulletPositions: [
      { top: "top-[488px]", left: "left-[187px]" },
      { top: "top-[512px]", left: "left-[187px]" },
      { top: "top-[536px]", left: "left-[187px]" },
      { top: "top-[560px]", left: "left-[187px]" },
    ],
  },
];

export const ContentWrapperSection = (): JSX.Element => {
  return (
    <section className="w-full relative bg-black py-[94px] px-4">
      <div className="relative max-w-[1440px] mx-auto">
        <div className="relative h-[927px]">
          <h2 className="absolute top-0 left-[calc(50%_-_249px)] w-[497px] [font-family:'Montserrat',Helvetica] font-extrabold text-[#82b7dc] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            MADE TO MOVE MINDS
          </h2>

          <div className="absolute top-[25px] left-[442px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 blur-[2px]" />

          <div className="absolute top-[25px] left-[965px] w-[33px] h-px bg-white rounded-[16.5px/0.5px] rotate-90 blur-[2px]" />

          <div className="absolute top-[5px] left-[454px] w-2 h-2 bg-white rounded rotate-180 blur-sm" />

          <div className="absolute top-[5px] left-[977px] w-2 h-2 bg-white rounded rotate-180 blur-sm" />

          <div className="absolute top-[-27px] left-[535px] w-[467px] h-1 bg-white rounded-[233.5px/2px] rotate-180 blur-[12.5px]" />

          <div className="absolute top-[65px] left-[435px] w-[467px] h-1 bg-white rounded-[233.5px/2px] blur-[12.5px]" />

          <div className="absolute top-[-41px] left-[978px] w-[35px] h-[35px] bg-white rounded-[17.5px] rotate-90 blur-sm" />

          <div className="absolute top-[47px] left-[423px] w-[35px] h-[35px] bg-white rounded-[17.5px] -rotate-90 blur-sm" />

          <p className="absolute top-[125px] left-[calc(50%_-_482px)] w-[963px] [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xl text-center tracking-[0] leading-[normal]">
            From initial ideas to a polished final product, we guide every step
            with creativity and precision.
            <br /> Our process ensures seamless design, development, and
            delivery for impactful digital experiences.
          </p>

          <img
            className="absolute top-[409px] left-[542px] w-[311px] h-80"
            alt="Ellipse"
            src="/ellipse-51.svg"
          />

          <img
            className="absolute top-[409px] left-[542px] w-[311px] h-80"
            alt="Ellipse"
            src="/ellipse-54.svg"
          />

          <img
            className="absolute top-[409px] left-[542px] w-[311px] h-80"
            alt="Ellipse"
            src="/ellipse-52.svg"
          />

          <img
            className="absolute top-[409px] left-[542px] w-[311px] h-80"
            alt="Ellipse"
            src="/ellipse-53.svg"
          />

          <div className="absolute top-[452px] left-[590px] w-[215px] h-[215px] rounded-[107.5px] blur-[160px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />

          <img
            className="absolute w-[16.32%] h-[23.02%] top-[459px] left-[40.28%]"
            alt="Mesh"
            src="/mesh3-1.png"
          />

          {stages.map((stage, index) => (
            <React.Fragment key={index}>
              <img
                className={`absolute ${stage.vectorTop} ${stage.vectorLeft} w-[226px] h-[88px]`}
                alt="Vector"
                src={stage.vectorSrc}
              />

              <img
                className={`absolute ${stage.iconTop} ${stage.iconLeft} w-28 h-28`}
                alt="Frame"
                src={stage.iconSrc}
              />

              <h3
                className={`absolute ${stage.titleTop} ${stage.titleLeft} ${stage.title === "Envision" ? "w-[116px]" : stage.title === "Elevate" ? "w-[107px]" : stage.title === "Design" ? "w-24" : "w-[110px]"} [font-family:'Montserrat',Helvetica] font-semibold text-[#bbbbbb] text-[26px] text-center tracking-[0] leading-[normal]`}
              >
                {stage.title}
              </h3>

              {stage.items.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  <div
                    className={`${item.top} ${item.left} [font-family:'Montserrat',Helvetica] absolute font-medium text-[#bbbbbb] text-sm tracking-[0] leading-[normal]`}
                  >
                    {item.text}
                  </div>
                  <img
                    className={`absolute ${stage.bulletPositions[itemIndex].top} ${stage.bulletPositions[itemIndex].left} w-[17px] h-px object-cover`}
                    alt="Vector"
                    src={
                      stage.position === "top-right" ||
                      stage.position === "bottom-right"
                        ? "/vector-8-1.svg"
                        : "/vector-30.svg"
                    }
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
