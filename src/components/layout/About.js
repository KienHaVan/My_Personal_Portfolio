import React, { useRef } from "react";
import { Images } from "../../assets";
import AboutSection from "../About/AboutSection";
import Button from "../button/Button";

function About({ section }) {
  const onButtonClick = () => {
    fetch("Kevin_SoftwareDeveloper.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Kevin_SoftwareDeveloper.pdf";
        alink.click();
      });
    });
  };
  return (
    <div
      className="pt-[96px] flex flex-col justify-center items-center laptop:pt-[132px] tablet:pt-[132px] mobile:pt-20"
      id="about"
      ref={section.ref}
    >
      <h1 className="text-5xl mb-2">About Me</h1>
      <h2 className="text-xl mb-12 mobile:mb-6">My Introduction</h2>
      <div className="flex justify-evenly items-center w-full tablet:gap-4 mobile:about-mobile">
        <div className="flex-shrink-0">
          <img
            src={Images.AVATAR}
            className="rounded-full w-[300px] flex-shrink-0 mobile:w-[240px]"
            alt=""
          />
        </div>
        <div className="w-[500px] flex flex-col gap-4 tablet:w-auto  mobile:w-auto mobile:items-center">
          <h2 className="mobile: text-center">
            Mobile and Web developer, with extensive knowledge and years of
            experience, working in web/mobile technologies and UI/UX design,
            delivery quality work.
          </h2>
          <div className="flex items-center justify-between my-6 mobile:w-full mobile:my-3">
            <AboutSection />
            <AboutSection figure={20} content="Completed projects" />
            <AboutSection figure={5} content="Companies worked" />
          </div>
          <Button
            title="Download CV"
            icon={Images.DOWNLOADING}
            onClick={onButtonClick}
            size={30}
            padding
          />
        </div>
      </div>
    </div>
  );
}

export default About;
