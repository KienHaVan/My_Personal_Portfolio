import React from "react";
import CountUp from "react-countup";

function AboutSection({ figure = 8, content = "Years Experience" }) {
  return (
    <div className="flex flex-col items-center justify-center w-[100px]">
      <h2 className="text-2xl font-bold">
        <CountUp end={figure} duration={1.5} />+
      </h2>
      <p className="text-center">{content}</p>
    </div>
  );
}

export default AboutSection;
