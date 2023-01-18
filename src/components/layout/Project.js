import React from "react";
import ProjectItem from "../Project/ProjectItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Project() {
  return (
    <div
      className="pt-[100px] flex flex-col justify-center items-center px-[160px] mobile:px-0"
      id="project"
    >
      <h1 className="text-5xl mb-2">Projects</h1>
      <h2 className="text-xl mb-8 mobile:mb-6">My outstanding work</h2>
      <div className="w-[600px] rounded-xl shadow-md shadow-gray-800 mobile:w-full z-0">
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <ProjectItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Project;
