import React from "react";

function SkillDetailItem({ item: { name, rate } }) {
  const width = rate.toString();
  return (
    <div className="flex flex-col gap-1 mb-4">
      <div className="flex justify-between items-center">
        <p>{name}</p>
        <p>{rate}%</p>
      </div>
      <div className="relative w-full h-1 bg-slate-400 rounded-full">
        <div
          className={`absolute bg-primary top-0 left-0 h-1 rounded-full bg-blue-700`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillDetailItem;
