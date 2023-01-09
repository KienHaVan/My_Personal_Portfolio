import React, { useState } from "react";
import { Images } from "../../assets";
import QualificationItem from "../Qualification/QualificationItem";

const educationList = [
  {
    id: 1,
    major: "Automation",
    name: "Hanoi University of Science and Technology",
    time: "2016-2020",
  },
  {
    id: 2,
    major: "Computer Vision",
    name: "ComVis Lab, MICA, HUST",
    time: "2018-2020",
  },
  {
    id: 3,
    major: "Full-Stack Web Developer",
    name: "MindX Coding Center",
    time: "2022-2023",
  },
  {
    id: 4,
    major: "Mobile Developer",
    name: "FPT Academy",
    time: "2022-2023",
  },
];
const workList = [
  {
    id: 1,
    major: "Software Engineer",
    name: "Microsoft - Vietnam",
    time: "2016-2020",
  },
  {
    id: 2,
    major: "Frontend Developer",
    name: "Apple Inc - Vietnam",
    time: "2020-2021",
  },
  {
    id: 3,
    major: "Mobile Developer",
    name: "FPT Software - Vietnam",
    time: "2021-Present",
  },
];

function Qualification() {
  const [select, setSelect] = useState("education");
  return (
    <div
      className="pt-[100px] flex flex-col justify-center items-center px-[160px] mb-20 mobile:px-0"
      id="qualification"
    >
      <h1 className="text-5xl mb-2">Qualification</h1>
      <h2 className="text-xl mb-8 mobile:mb-6">My personal journey</h2>
      <div className="flex justify-center items-center gap-24 mobile:gap-12">
        <div
          className="flex justify-center items-center gap-1 cursor-pointer"
          onClick={() => setSelect("education")}
        >
          <img
            src={
              select === "education"
                ? Images.EDUCATION_CHOOSE
                : Images.EDUCATION
            }
            className="w-6"
            alt=""
          />
          <p className={`${select === "education" ? "text-blue-500" : null}`}>
            Education
          </p>
        </div>
        <div
          className="flex justify-center items-center gap-1 cursor-pointer"
          onClick={() => setSelect("work")}
        >
          <img
            src={select === "work" ? Images.WORK_CHOOSE : Images.WORK}
            className="w-6"
            alt=""
          />
          <p className={`${select === "work" ? "text-blue-500" : null}`}>
            Work
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start w-[400px] mt-10 mobile:w-full">
        {select === "education" &&
          educationList.map((item) => <QualificationItem item={item} />)}
        {select === "work" &&
          workList.map((item) => <QualificationItem item={item} />)}
      </div>
    </div>
  );
}

export default Qualification;
