import React, { useState } from "react";
import { Images } from "../../assets";
import SkillDetail from "../Skill/SkillDetail";
import SkillSection from "../Skill/SkillSection";

const skillList = {
  frontend: [
    {
      name: "HTML",
      rate: 90,
    },
    {
      name: "CSS",
      rate: 80,
    },
    {
      name: "Javascript",
      rate: 60,
    },
    {
      name: "React",
      rate: 85,
    },
  ],
  backend: [
    {
      name: "PHP",
      rate: 80,
    },
    {
      name: "Node Js",
      rate: 70,
    },
    {
      name: "Firebase",
      rate: 90,
    },
    {
      name: "Pythong",
      rate: 55,
    },
  ],
  design: [
    {
      name: "Figma",
      rate: 90,
    },
    {
      name: "Sketch",
      rate: 85,
    },
    {
      name: "Photoshop",
      rate: 85,
    },
  ],
};

function Skill({ section }) {
  const [skillSelected, setSkillSelected] = useState("frontend");
  return (
    <div
      className="pt-[100px] flex flex-col justify-center items-center px-[160px] laptop:px-24 tablet:px-12 mobile:px-0"
      id="skills"
      ref={section.ref}
    >
      <h1 className="text-5xl mb-2">Skills</h1>
      <h2 className="text-xl mb-8 mobile:mb-6">My technical level</h2>
      <div className="w-full grid grid-cols-2 gap-8 tablet:grid-cols-1 mobile:grid-cols-1">
        <div>
          <SkillSection onClick={() => setSkillSelected("frontend")} />
          {skillSelected === "frontend" && (
            <SkillDetail data={skillList.frontend} />
          )}
        </div>
        <div>
          <SkillSection
            icon={Images.BACKEND}
            title="Backend developer"
            content="More than 2 years"
            onClick={() => setSkillSelected("backend")}
          />
          {skillSelected === "backend" && (
            <SkillDetail data={skillList.backend} />
          )}
        </div>
        <div className="-mt-4">
          <SkillSection
            icon={Images.DESIGN}
            title="Designer"
            content="More than 5 years"
            onClick={() => setSkillSelected("design")}
          />
          {skillSelected === "design" && (
            <SkillDetail data={skillList.design} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Skill;
