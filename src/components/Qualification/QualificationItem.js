import React from "react";
import { Images } from "../../assets";

function QualificationItem({ item: { id, major, name, time } }) {
  if (id % 2 !== 0) {
    return (
      <div className="w-[50%] relative">
        <h2 className="text-lg font-bold w-[90%] mb-1">{major}</h2>
        <h3 className="mb-3 w-[96%]">{name}</h3>
        <div className="flex items-center gap-2">
          <img alt="" src={Images.CALENDER} className="w-4" />
          <p>{time}</p>
        </div>
        <div className="absolute h-full w-[2px] top-[1px] right-[3px] bg-blue-500"></div>
        <div className="absolute h-2 w-2 top-0 right-0 bg-blue-500 rounded-full"></div>
      </div>
    );
  } else {
    return (
      <div className="w-[50%] relative self-end -mr-4">
        <h2 className="text-lg font-bold w-[90%] mb-1">{major}</h2>
        <h3 className="mb-3 w-[96%]">{name}</h3>
        <div className="flex items-center gap-2">
          <img alt="" src={Images.CALENDER} className="w-4" />
          <p>{time}</p>
        </div>
        <div className="absolute h-full w-[2px] top-[1px] -left-[21px] bg-blue-500"></div>
        <div className="absolute h-2 w-2 top-0 -left-[24px] bg-blue-500 rounded-full"></div>
      </div>
    );
  }
}

export default QualificationItem;
