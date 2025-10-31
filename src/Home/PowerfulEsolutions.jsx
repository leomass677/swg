import React from "react";
import { FcWorkflow } from "react-icons/fc";
import { FaDragon } from "react-icons/fa";
import images from "../assets/images";
import { motion } from "framer-motion";

const PowerfulEsolutions = () => {
  return (
    <div className="relative flex gap-8 p-24  bg-blue-50 mt-8">
      <div className="flex-1 flex flex-col  gap-6">
        {" "}
        <h2 className="text-grey-700 font-Tinos font-bold text-4xl max-w-2xl">
          Engineering powerful e-Solutions for emerging markets
        </h2>
        <div className="flex flex-col-reverse gap-6">
          <p className="text-sm max-w-xl leading-relaxed">
            We do not simply offer solutions, we create new markets and have an
            extensive portfolio of projects that we've successfully implemented
            in diverse industries.
          </p>
          <div className="flex flex-1">
            <span className="size-10 rounded-full bg-blue-400 "></span>
            <span className="size-10 rounded-full bg-crayola-600 -translate-x-1"></span>
            <span className="size-10 rounded-full bg-primary-400 -translate-x-2"></span>
            <span className="size-10 rounded-full bg-gray-400 -translate-x-3"></span>
          </div>
        </div>
        <div className="flex gap-6">
          <button className="flex items-center gap-1 cursor-pointer group mt-2">
            <FcWorkflow className="group-hover:translate-x-4  group-hover:opacity-0 group-hover:scale-0 transition-all duration-500 ease-in" />
            <span className="">Let's work with you</span>
            <FaDragon className="-translate-x-4 scale-90 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in" />
          </button>
          <button className="flex items-center gap-1 cursor-pointer group mt-2">
            <FcWorkflow className="group-hover:translate-x-4  group-hover:opacity-0 group-hover:scale-0 transition-all duration-500 ease-in" />
            <span className="">Read our case studies</span>
            <FaDragon className="-translate-x-4 scale-90 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in" />
          </button>
        </div>
      </div>
      {/*  */}
      <div className="flex-1 w-full  relative h-[600px]">
        <img
          src={images.circles}
          alt="gif"
          className="absolute top-1/2 left-1/2 shadow-2xl rounded-full p-6 -translate-x-1/2 -translate-y-1/2 w-30"
        />
        <div className="absolute  right-1/2 translate-x-1/2 top-0 shadow-2xl">
          <img
            src={images.Gemini_1}
            alt=""
            className=" rounded-b-md w-[200px] rounded-tr-3xl h-[200px] object-cover"
          />
        </div>
        <div className="absolute left-28  top-1/2 -translate-y-1/2  shadow-2xl">
          <img
            src={images.automaion_service}
            alt=""
            className=" rounded-r-md w-[200px] rounded-tl-3xl h-[200px] object-cover"
          />
        </div>
        <div className="absolute right-28 top-1/2 -translate-y-1/2 shadow-2xl">
          <img
            src={images.Gemini_4}
            alt=""
            className=" rounded-l-md w-[200px] rounded-br-3xl h-[200px] object-cover"
          />
        </div>
        <div className="absolute right-1/2 translate-x-1/2  bottom-0 shadow-2xl">
          <img
            src={images.Gemini_5}
            alt=""
            className=" rounded-t-md w-[200px] rounded-bl-3xl h-[200px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PowerfulEsolutions;
