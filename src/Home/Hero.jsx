import React from "react";
import images from "../assets/images";
import icons from "../assets/icons";
import { FaLocationArrow } from "react-icons/fa";
import { PiBicycleLight } from "react-icons/pi";
import { FcWorkflow } from "react-icons/fc";
import { FaDragon } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex justify-between px-3 sm:px-4 md:px-6 lg:px-11 w-full max-w-7xl mx-auto">
      <div className="flex-1 flex items-end-safe text-5xl font-Roboto text-gray-800 font-semibold md:pb-10">
        <h1> Powering Digital Transformation in Africa and Beyond</h1>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="flex flex-col justify-items-end">
          {" "}
          <img
            src={images.hero_image}
            alt="hero Images"
            className="w-90 h-auto object-cover    "
          />
          <button className="flex items-center gap-1 cursor-pointer group">
            <FcWorkflow className="group-hover:translate-x-4  group-hover:opacity-0 group-hover:scale-0 transition-all duration-500 ease-in" />
            <span className="">Let's work with you</span>
            <FaDragon className="-translate-x-4 scale-90 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
