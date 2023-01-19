import React from "react";
import ProjectItem from "../Project/ProjectItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Images } from "../../assets";

const projectList = [
  {
    id: 1,
    name: "Movies Streaming Website",
    description: "",
    image: Images.MOVIE_STREAMING,
    link: "https://github.com/KienHaVan/c4eProject",
  },
  {
    id: 2,
    name: "NFT Market Website",
    description: "",
    image: Images.AVATAR,
    link: "",
  },
  {
    id: 3,
    name: "Food Ordering Application",
    description: "",
    image: Images.FOOD_HUB,
    link: "https://github.com/KienHaVan/Food_Hub",
  },
];

function Project({ section }) {
  return (
    <div
      className="pt-[100px] flex flex-col justify-center items-center px-[160px] mobile:px-0"
      id="project"
      ref={section.ref}
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
          {projectList.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectItem
                name={project.name}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Project;
