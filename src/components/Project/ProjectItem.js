import React from "react";
import { Images } from "../../assets";
import Button from "../button/Button";

function ProjectItem() {
  return (
    <div className="flex justify-between items-center w-full mobile:flex-col-reverse">
      <div className="w-[50%] p-6 mobile:w-full">
        <h1 className="text-2xl font-bold mb-4">Project Name</h1>
        <h2 className="mb-4 text-clamp mobile:hidden">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s
        </h2>
        <Button title="View Project" icon={Images.VIEWING} size={60} />
      </div>
      <div className="w-[50%] mobile:w-full">
        <img
          alt=""
          src="https://images.pexels.com/photos/2884867/pexels-photo-2884867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full min-h-[300px] max-h-[400px]  flex-shrink-0 object-cover rounded-r-xl mobile:rounded-xl"
        />
      </div>
    </div>
  );
}

export default ProjectItem;
