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
    description:
      "A video streaming service provides an alternative to cable and satellite on demand service, often at a lower cost. Use of streaming services often requires fees, either per view or subscription. The videos come from a network that is typically cloud-based. The availability, content and price of services may vary from one region to another.",
    image: Images.MOVIE_STREAMING,
    link: "https://github.com/KienHaVan/c4eProject",
  },
  {
    id: 2,
    name: "NFT Market Website",
    description:
      " A blockchain-based online platform to sell and buy non-fungible tokens (NFTs). Despite the short-term fluctuations in the quickly developing NFT field, the global NFT market is expected to grow from $3.0 billion in 2022 to $13.6 billion by 2027. The segment of NFT marketplaces is anticipated to witness a corresponding rise. Skyrocketed prices (as of the start of 2022, the most expensive NFT “Merge” by Pak has been sold for $91.8M) and impressive trade volume of NFTs ($4–16 billion per month) create momentum for startups and established companies to step into NFT marketplace development.",
    image: Images.NFT_MARKET,
    link: "https://github.com/KienHaVan/NFTMarket-HTML-CSS",
  },
  {
    id: 3,
    name: "Food Ordering Application",
    description:
      "The food delivery business has a strong growth curve, and if you’re planning to build an online food delivery app, this is the best time. What makes a food delivery app stand out? What features must you include to ensure success it stands out in the hypercompetitive online food delivery industry? Read on to find out.",
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
