import React, { useState } from 'react';
import { Images } from '../../assets';
import QualificationItem from '../Qualification/QualificationItem';
import Lottie from 'react-lottie-player';

const educationList = [
  {
    id: 1,
    major: 'Automation',
    name: 'Hanoi University of Science and Technology',
    time: '2016-2020',
  },
  {
    id: 2,
    major: 'Computer Vision',
    name: 'ComVis Lab, MICA, HUST',
    time: '2018-2020',
  },
  {
    id: 3,
    major: 'Full-Stack Web Developer',
    name: 'MindX Coding Center',
    time: '2022-2023',
  },
  {
    id: 4,
    major: 'Mobile Developer',
    name: 'FPT Academy',
    time: '2022-2023',
  },
];
const workList = [
  // {
  //   id: 1,
  //   major: "Software Engineer",
  //   name: "Microsoft - Vietnam",
  //   time: "2016-2020",
  // },
  // {
  //   id: 2,
  //   major: "Frontend Developer",
  //   name: "Apple Inc - Vietnam",
  //   time: "2020-2021",
  // },
  {
    id: 3,
    major: 'Mobile Developer',
    name: 'FPT Software - Vietnam',
    time: '2021-Present',
  },
];

function Qualification({ section }) {
  const [select, setSelect] = useState('education');
  return (
    <div
      className="pt-[100px] flex flex-col justify-center items-center px-[160px] mobile:px-0"
      id="qualification"
      ref={section.ref}
    >
      <h1 className="text-5xl mb-2">Qualification</h1>
      <h2 className="text-xl mb-8 mobile:mb-6">My personal journey</h2>
      <div className="flex justify-center items-center gap-24 mobile:gap-12">
        <div
          className="flex justify-center items-center gap-1 cursor-pointer"
          onClick={() => setSelect('education')}
        >
          <Lottie
            loop
            animationData={
              select === 'education' ? Images.EDU_ACTIVE : Images.EDU
            }
            play
            style={{ height: 24, width: 24 }}
          />
          <p className={`${select === 'education' ? 'text-blue-500' : null}`}>
            Education
          </p>
        </div>
        <div
          className="flex justify-center items-center gap-1 cursor-pointer"
          onClick={() => setSelect('work')}
        >
          <Lottie
            loop
            animationData={select === 'work' ? Images.CODING : Images.WORKING}
            play
            style={{ height: 24, width: 24 }}
          />
          <p className={`${select === 'work' ? 'text-blue-500' : null}`}>
            Work
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start w-[400px] mt-10 mobile:w-full">
        {select === 'education' &&
          educationList.map((item) => (
            <QualificationItem item={item} key={item.id} />
          ))}
        {select === 'work' &&
          workList.map((item) => (
            <QualificationItem item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
}

export default Qualification;
