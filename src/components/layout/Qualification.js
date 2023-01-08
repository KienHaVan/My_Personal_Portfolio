import React from "react";
import { Images } from "../../assets";

function Qualification() {
  return (
    <div
      className="pt-[100px] flex flex-col justify-center items-center px-[160px] mb-20"
      id="qualification"
    >
      <h1 className="text-5xl mb-2">Qualification</h1>
      <h2 className="text-xl mb-8 mobile:mb-6">My personal journey</h2>
      <div className="flex justify-center items-center gap-12">
        <div className="flex justify-center items-center gap-1">
          <img src={Images.EDUCATION} className="w-6" />
          <p>Education</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img src={Images.WORK} className="w-6" />
          <p>Work</p>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
