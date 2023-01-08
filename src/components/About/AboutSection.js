import React from "react";

function AboutSection({ figure = "08+", content = "Years Experience" }) {
  return (
    <div className="flex flex-col items-center justify-center w-[100px]">
      <h2 className="text-2xl font-bold">{figure}</h2>
      <p className="text-center">{content}</p>
    </div>
  );
}

export default AboutSection;
