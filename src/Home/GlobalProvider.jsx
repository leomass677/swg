import React from "react";
import { video } from "../assets/video";
import { motion } from "framer-motion";
import bgImage from "../assets/images/background001.png";
import icons from "../assets/icons";
import AvailabilityBadge from "../Animation/AvailabilityBadge";

const Global = () => {
  const y = 50; // initial vertical offset
  const delay = 0.3;
  const duration = 0.8;
  const hoverScale = 1.08;
  console.log(bgImage);

  return (
    <div className="mt-10 text-shade">
      <div className="relative overflow-hidden">
        <video
          src={video.AI_medium}
          autoPlay
          playsInline
          muted
          loop
          className=""
        ></video>
        <motion.p
          initial={{ opacity: 0, y }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay, duration, ease: "easeOut" }}
          whileHover={{ scale: hoverScale }}
          className="absolute top-1/3 text-lg leading-snug hidden -left-2 bg-dark/50 backdrop-blur-md text-shade max-w-sm p-6   rounded-sm"
        >
          We are a leading global provider of customized eGovernment,
          eEducation, and eHealthcare software solutions and IT infrastructure.
        </motion.p>
      </div>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: "0.7",
        }}
        className="bg-gradient-softlight p-[120px]"
      >
        <div className="flex flex-col gap-16">
          <h4 className="max-w-[350px] xl:max-w-[600px] leading-relaxed text-4xl ">
            Breaking barriers & delivering value for 10+ years.
          </h4>
          <div className="flex">
            <div className="flex flex-1 flex-col gap-6">
              <p className="flex flex-col gap-1 text-4xl font-Tinos font-semibold ">
                $50m+
                <span className="text-sm font-inter font-medium">
                  technology investment
                </span>
              </p>
              <p className="flex flex-col gap-1 text-4xl font-Tinos font-semibold ">
                450+
                <span className="text-sm font-inter font-medium">
                  enrolment centers
                </span>
              </p>
              <p className="flex flex-col gap-1 text-4xl font-Dm-sans font-semibold ">
                13m
                <span className="text-sm font-inter font-medium">
                  identity documents issued
                </span>
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <p className="text-sm sm:text-md md:text-lg lg:text-2xl leading-snug">
                Market-leading presence in Nigeria, USA, Ghana, Sierra Leone,
                Liberia, South Africa, Uganda, and Sri Lanka.
              </p>
              <p className="text-md xl:text-lg">
                Including; Germany, Kenya, Canada, Austria, Sweden, Belgium,
                Switzerland, Ireland, Spain, South Korea, Japan.
              </p>
              <hr className="bg-gray-400 " />
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }} // start off-screen to the left
          whileInView={{ opacity: 1, x: 0 }} // animate to center
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 3.6, ease: "easeOut" }}
          className="mt-14 flex justify-center relative"
        >
          <img src={icons.map} alt={icons.map} />
          {/* 1 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-1/4 left-786`}
          />

          {/* 2 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-1/4 left-4/6`}
          />

          {/* 3 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-2/8 left-4/7`}
          />

          {/* 4 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-2/4 right-4/9`}
          />

          {/* 5 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-3/7 right-1/2`}
          />

          {/* 6 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-4/6 right-1/2`}
          />

          {/* 7 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-1/2 right-1/2`}
          />

          {/* 8 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-2/9 left-70`}
          />

          {/* 9 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-5/10 left-4/9`}
          />

          {/* 10 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-4/9 right-2/6`}
          />

          {/* 11 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-4/5 right-75`}
          />

          {/* 12 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-1/5 right-2/7`}
          />

          {/* 13 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-56 left-5/9`}
          />

          {/* 14 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-50 right-95`}
          />

          {/* 15 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-44 left-80`}
          />

          {/* 16 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-50 left-80`}
          />

          {/* 17 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-80 right-70`}
          />

          {/* 18 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-40 right-90`}
          />

          {/* 19 */}
          <AvailabilityBadge
            className={`absolute hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer top-60 left-80`}
          />

          {/* 20 */}
        </motion.div>
      </div>
    </div>
  );
};

export default Global;
