import React from "react";
import SkillDetailItem from "./SkillDetailItem";

function SkillDetail({ data, skillSelected, item }) {
  return (
    <div
      className={`ml-[72px] mt-8 opacity-0 transition-all duration-500 ${
        item === skillSelected
          ? "opacity-100 visible h-auto"
          : "-translate-y-full invisible h-0"
      }`}
    >
      {data.map((item) => (
        <SkillDetailItem item={item} key={item.name} />
      ))}
    </div>
  );
}

export default SkillDetail;
