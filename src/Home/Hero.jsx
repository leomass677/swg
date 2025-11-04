import React, { useEffect, useState } from "react";
import { FcWorkflow } from "react-icons/fc";
import { FaDragon } from "react-icons/fa";
import { motion } from "framer-motion";
import images from "../assets/images";
import WorkWithYouLink from "../component/WorkWithYouLink";
import { X } from "lucide-react";
import { img } from "framer-motion/client";

const Hero = () => {
  const heroImage = [
    { img: images.hero_image },
    { img: images.hero_ball },
    { img: images.hero_ball_dot },
    { img: images.Hero_cross },
  ];
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImage.length]);

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 py-8 xl:min-h-[50vh] sm:px-6 lg:px-12 xl:px-0 mt-20 w-full xl:py-16 max-w-[1440px] mx-auto">
      {/* Left Section */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-2xl  sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 2xl:leading-tight font-Euclid font-semibold text-gray-800 leading-tight md:leading-snug max-w-2xl mx-auto md:mx-0">
          Powering Digital Transformation in{" "}
          <span className="text-blue-600">Africa</span> and Beyond
        </h1>

        {/* Button */}
        <div className="flex justify-center md:justify-start mt-6">
          <WorkWithYouLink label="Let's work with you" />
        </div>
      </motion.div>

      {/* Right Sectin*/}
      <div className="flex-1 gap-1 lg:gap-16   relative lg:static flex justify-center md:justify-end items-center w-full">
        {/* Rotating  */}
        <motion.img
          src={heroImage[imgIndex].img}
          alt="Hero"
          className="w-56 sm:w-72 md:w-80 lg:w-96 xl:max-w-[22rem]   xl:w-[22rem] 2xl:w-[24rem] z-20 h-auto object-cover drop-shadow-lg"
          initial={{ scale: 0, opacity: 0, x: -100, y: -100 }}
          whileInView={{ scale: 1, opacity: 100, x: 0, y: 0 }}
          animate={{ rotate: 360 }}
          whileHover={{ scale: 1.03 }}
          transition={{
            rotate: { repeat: Infinity, duration: 15, ease: "linear" },
          }}
        />
        <div className=" flex flex-col gap-4">
          {" "}
          {heroImage.map((item, index) => (
            <div className="group">
              <motion.button
                onClick={() => setImgIndex(index)}
                whileTap={{ scale: 0.8 }}
                className="flex justify-center items-center rounded-full cursor-pointer"
              >
                <img
                  src={item.img}
                  className="w-10 lg:w-16 scale-80 rounded-full group-hover:-translate-x-6 group-hover:scale-110 group-hover:rotate-90 transition-all duration-1000"
                  alt=""
                />
              </motion.button>
            </div>
          ))}
        </div>

        {/* GIF */}
        <motion.div
          className="absolute hidden -top-6 right-10 xl:top-0 lg:left-0
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
            translate={{}}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
