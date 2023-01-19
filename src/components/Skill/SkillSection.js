import React from "react";
import { Images } from "../../assets";
import Lottie from "react-lottie-player";

function SkillSection({
  icon = Images.CODING,
  title = "Frontend developer",
  content = "More then 4 years",
  onClick = () => {},
  skillSelected,
  item,
}) {
  return (
    <div
      className="flex justify-start items-center gap-6 cursor-pointer bg-black shadow-sm shadow-gray-800 py-2 px-4 mobile:gap-4"
      onClick={onClick}
    >
      <Lottie
        loop
        animationData={icon}
        play
        style={{ height: 60, width: 60 }}
      />
      <div className="flex flex-col flex-1 gap-2">
        <h2 className="text-2xl font-bold mobile:text-xl">{title}</h2>
        <p>{content}</p>
      </div>
      <img
        src={Images.DOWN}
        className={`w-6 ${
          item === skillSelected
            ? "rotate-180 transition-all duration-300"
            : null
        }`}
        alt=""
      />
    </div>
  );
}

export default SkillSection;
