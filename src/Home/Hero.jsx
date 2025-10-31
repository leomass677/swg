import React from "react";

import icons from "../assets/icons";
import { FaLocationArrow } from "react-icons/fa";
import { PiBicycleLight } from "react-icons/pi";
import { FcWorkflow } from "react-icons/fc";
import { FaDragon } from "react-icons/fa";
import images from "../assets/images";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex justify-between px-3 mt-[70px] sm:px-4 md:px-6 lg:px-11 w-full max-w-7xl mx-auto">
      <div className="flex-1 flex items-end-safe text-5xl font-Roboto text-gray-800 font-semibold md:pb-10">
        <h1> Powering Digital Transformation in Africa and Beyond</h1>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="flex flex-col justify-items-end">
          {" "}
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            }}
            src={images.hero_image}
            alt="hero Images"
            className="w-80 h-auto object-cover  "
          />
          <button className="flex items-center gap-1 cursor-pointer group mt-2">
            <FcWorkflow className="group-hover:translate-x-4  group-hover:opacity-0 group-hover:scale-0 transition-all duration-500 ease-in" />
            <span className="">Let's work with you</span>
            <FaDragon className="-translate-x-4 scale-90 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in" />
          </button>
        </div>
      </div>
      <motion.div
        className="w-24  sm:w-30 md:w-40 xl:w-50 absolute"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.img
          src={images.gif_2}
          alt="Animated GIF"
          className="rounded-lg w-44"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          c
        />
      </motion.div>
    </div>
  );
};

export default Hero;
