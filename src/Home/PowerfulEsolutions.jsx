import React from "react";
import { FcWorkflow } from "react-icons/fc";
import { FaDragon } from "react-icons/fa";
import images from "../assets/images";
import { motion } from "framer-motion";
import WorkWithYouLink from "../component/WorkWithYouLink";

const PowerfulEsolutions = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-blue-50">
      <div className="relative flex flex-col-reverse md:flex-row items-center gap-10 mx-auto max-w-[1440px]   overflow-hidden w-full my-6">
        {/* Left Section */}
        <motion.div
          className="flex-2 flex flex-col gap-6 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-gray-800 font-Tinos font-bold text-2xl sm:text-3xl lg:text-3xl leading-tight max-w-3xl mx-auto md:mx-0">
            Engineering powerful E-Solutions for emerging markets
          </h2>

          <div className="flex flex-col-reverse gap-6 items-center md:items-start">
            <p className="text-sm sm:text-base max-w-xl leading-relaxed text-gray-700">
              We don’t simply offer solutions — we create new markets and have
              an extensive portfolio of successfully implemented projects across
              diverse industries.
            </p>

            {/* Circles */}
            <div className="flex">
              <span className="size-8 sm:size-10 rounded-full bg-blue-400"></span>
              <span className="size-8 sm:size-10 rounded-full bg-crayola-600 -translate-x-1"></span>
              <span className="size-8 sm:size-10 rounded-full bg-primary-400 -translate-x-2"></span>
              <span className="size-8 sm:size-10 rounded-full bg-gray-400 -translate-x-3"></span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <WorkWithYouLink />
            <WorkWithYouLink label="Read our case studies" />
          </div>
        </motion.div>

        {/* Right Section  */}
        <motion.div
          className="flex-1 relative grid grid-cols-2 gap-1.5 p-10 place-items-end w-full h-full justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={images.circles}
            alt="Animated circles"
            className="absolute top-1/2 left-1/2 w-35 b  -translate-x-1/2 -translate-y-1/2 shadow rounded-full p-4 md:p-6"
          />

          {/* Top */}
          <img
            src={images.Gemini_1}
            alt="Gemini 1"
            className=" w-[10px] sm:w-[50px] lg:w-[180px] h-[10px] sm:h-[50px] lg:h-[180px] object-cover shadow-2xl rounded-b-md rounded-tr-3xl rounded-tl-full hover:rounded-tl-none hover:scale-105 transition-all duration-75 cursor-pointer ease-in-out"
          />
          {/* Left */}
          <img
            src={images.automaion_service}
            alt="Automation service"
            className=" w-[10px] sm:w-[50px] place-self-start lg:w-[180px] h-[10px] sm:h-[50px] lg:h-[180px] object-cover shadow-2xl rounded-r-md rounded-tl-3xl rounded-tr-full hover:rounded-tr-none hover:scale-105 transition-all duration-75 cursor-pointer ease-in-out"
          />
          {/* Right */}
          <img
            src={images.Gemini_4}
            alt="Gemini 4"
            className="w-[10px] sm:w-[50px]  lg:w-[180px] h-[10px] sm:h-[50px] lg:h-[180px] object-cover shadow-2xl rounded rounded-bl-full hover:rounded-bl-none hover:scale-105 transition-all duration-75 cursor-pointer ease-in-out"
          />
          {/* Bottom */}
          <img
            src={images.Gemini_5}
            alt="Gemini 5"
            className="  w-[30px] place-self-start sm:w-[50px] lg:w-[180px] h-[10px] sm:h-[50px] lg:h-[180px] object-cover  rounded-t-md rounded-bl-3xl shadow-2xl rounded-br-full hover:rounded-br-none hover:scale-105 transition-all duration-75  cursor-pointer ease-in-out"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PowerfulEsolutions;
