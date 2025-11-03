import React from "react";
import { FcWorkflow } from "react-icons/fc";
import { FaDragon } from "react-icons/fa";
import { motion } from "framer-motion";
import images from "../assets/images";
import WorkWithYouLink from "../component/WorkWithYouLink";

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 py-8 xl:min-h-[50vh] sm:px-6 lg:px-12 xl:px-0 mt-20 w-full xl:py-16 max-w-[1440px] mx-auto">
      {/* Left Section */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 2xl:leading-tight font-Roboto font-semibold text-gray-800 leading-tight md:leading-snug max-w-2xl mx-auto md:mx-0">
          Powering Digital Transformation in{" "}
          <span className="text-blue-600">Africa</span> and Beyond
        </h1>

        {/* Button */}
        <div className="flex justify-center md:justify-start mt-6">
          <WorkWithYouLink label="Let's work with you" />
        </div>
      </motion.div>

      {/* Right Section*/}
      <div className="flex-1 relative lg:static flex justify-center md:justify-end items-center w-full">
        {/* Rotating main */}
        <motion.img
          src={images.hero_image}
          alt="Hero"
          className="w-56 sm:w-72 md:w-80 lg:w-96   xl:w-[22rem] 2xl:w-[24rem] z-20 h-auto object-cover drop-shadow-lg"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          animate={{ rotate: 360 }}
          whileHover={{ scale: 1.03 }}
          transition={{
            rotate: { repeat: Infinity, duration: 15, ease: "linear" },
          }}
        />

        {/* GIF */}
        <motion.div
          className="absolute -top-6 right-10 xl:top-0 lg:left-0
           sm:right-10 md:-top-10 md:right-20 "
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.img
            src={images.gif_2}
            alt="Animated graphic"
            className="w-16 sm:w-20 md:w-24 lg:w-28 rounded-full shadow-md lg:shadow-none"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
