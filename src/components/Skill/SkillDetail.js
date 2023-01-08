import React from "react";
import SkillDetailItem from "./SkillDetailItem";

function SkillDetail({ data }) {
  return (
    <div className="ml-[72px] mt-8">
      {data.map((item) => (
        <SkillDetailItem item={item} key={item.name} />
      ))}
    </div>
  );
}

export default SkillDetail;
