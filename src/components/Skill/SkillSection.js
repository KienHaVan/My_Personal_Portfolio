import React from "react";
import { Images } from "../../assets";

function SkillSection({
  icon = Images.FRONTEND,
  title = "Frontend developer",
  content = "More then 4 years",
  onClick = () => {},
}) {
  return (
    <div
      className="flex justify-start items-center gap-6 cursor-pointer bg-black shadow-sm shadow-gray-800 py-2 px-4 mobile:gap-4"
      onClick={onClick}
    >
      <img src={icon} className="w-8" alt="" />
      <div className="flex flex-col flex-1 gap-2">
        <h2 className="text-2xl font-bold mobile:text-xl">{title}</h2>
        <p>{content}</p>
      </div>
      <img src={Images.DOWN} className="w-6" alt="" />
    </div>
  );
}

export default SkillSection;
