import React from "react";
import { FcWorkflow } from "react-icons/fc";
import { FaDragon } from "react-icons/fa";
import images from "../assets/images";
import { motion } from "framer-motion";

const PowerfulEsolutions = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center gap-10 px-6 md:px-12 lg:px-24 py-16 bg-blue-50 mt-8 overflow-hidden">
      {/* Left Section */}
      <motion.div
        className="flex-1 flex flex-col gap-6 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-gray-800 font-Tinos font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-2xl mx-auto md:mx-0">
          Engineering powerful e-Solutions for emerging markets
        </h2>

        <div className="flex flex-col-reverse gap-6 items-center md:items-start">
          <p className="text-sm sm:text-base max-w-xl leading-relaxed text-gray-700">
            We don’t simply offer solutions — we create new markets and have an
            extensive portfolio of successfully implemented projects across
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
          <button className="flex items-center gap-2 cursor-pointer group text-sm sm:text-base font-medium">
            <FcWorkflow className="group-hover:translate-x-4 group-hover:opacity-0 group-hover:scale-0 transition-all duration-500 ease-in" />
            <span>Let's work with you</span>
            <FaDragon className="-translate-x-4 scale-90 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in" />
          </button>

          <button className="flex items-center gap-2 cursor-pointer group text-sm sm:text-base font-medium">
            <FcWorkflow className="group-hover:translate-x-4 group-hover:opacity-0 group-hover:scale-0 transition-all duration-500 ease-in" />
            <span>Read our case studies</span>
            <FaDragon className="-translate-x-4 scale-90 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in" />
          </button>
        </div>
      </motion.div>

      {/* Right Section  */}
      <motion.div
        className="flex-1 relative w-full h-[350px] sm:h-[450px] lg:h-[600px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={images.circles}
          alt="Animated circles"
          className="absolute top-1/2 left-1/2 w-32 sm:w-40 lg:w-52 -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-full p-4 md:p-6"
        />

        {/* Top */}
        <img
          src={images.Gemini_1}
          alt="Gemini 1"
          className="absolute right-1/2 translate-x-1/2 top-0 w-[140px] sm:w-[180px] lg:w-[200px] h-[140px] sm:h-[180px] lg:h-[200px] object-cover shadow-2xl rounded-b-md rounded-tr-3xl"
        />
        {/* Left */}
        <img
          src={images.automaion_service}
          alt="Automation service"
          className="absolute left-4 sm:left-16 top-1/2 -translate-y-1/2 w-[140px] sm:w-[180px] lg:w-[200px] h-[140px] sm:h-[180px] lg:h-[200px] object-cover shadow-2xl rounded-r-md rounded-tl-3xl"
        />
        {/* Right */}
        <img
          src={images.Gemini_4}
          alt="Gemini 4"
          className="absolute right-4 sm:right-16 top-1/2 -translate-y-1/2 w-[140px] sm:w-[180px] lg:w-[200px] h-[140px] sm:h-[180px] lg:h-[200px] object-cover shadow-2xl rounded-l-md rounded-br-3xl"
        />
        {/* Bottom */}
        <img
          src={images.Gemini_5}
          alt="Gemini 5"
          className="absolute right-1/2 translate-x-1/2 bottom-0 w-[140px] sm:w-[180px] lg:w-[200px] h-[140px] sm:h-[180px] lg:h-[200px] object-cover shadow-2xl rounded-t-md rounded-bl-3xl"
        />
      </motion.div>
    </section>
  );
};

export default PowerfulEsolutions;
