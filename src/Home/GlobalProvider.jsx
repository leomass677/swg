import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/background001.png";
import icons from "../assets/icons";
import AvailabilityBadge from "../Animation/AvailabilityBadge";
import ScrollVideoEffect from "../Pages/ScrollVideoEffect";

const Global = () => {
  return (
    <div className="text-shade relative">
      <ScrollVideoEffect />

      {/* Background Section with Overlay */}
      <div
        className="relative px-4 sm:px-6 lg:px-12 py-20"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-teal-500/5 to-cyan-300/40 blur backdrop-blur-xs z-0"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1440px] flex flex-col gap-16">
          {/* Header */}
          <h4 className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed max-w-md sm:max-w-xl xl:max-w-2xl">
            Breaking barriers & delivering value for 10+ years.
          </h4>

          {/* Stats Section */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 flex flex-col gap-6">
              {[
                { value: "$50m+", label: "technology investment" },
                { value: "450+", label: "enrolment centers" },
                { value: "13m", label: "identity documents issued" },
              ].map((stat, index) => (
                <p
                  key={index}
                  className="flex flex-col gap-1 text-3xl sm:text-4xl font-Tinos font-semibold"
                >
                  {stat.value}
                  <span className="text-sm sm:text-base font-inter font-medium">
                    {stat.label}
                  </span>
                </p>
              ))}
            </div>

            <div className="flex-1 flex flex-col gap-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-snug">
                Market-leading presence in Nigeria, USA, Ghana, Sierra Leone,
                Liberia, South Africa, Uganda, and Sri Lanka.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                Including: Germany, Kenya, Canada, Austria, Sweden, Belgium,
                Switzerland, Ireland, Spain, South Korea, Japan.
              </p>
              <hr className="bg-gray-400" />
            </div>
          </div>

          {/* Map + Badges */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="mt-14 flex justify-center relative overflow-hidden"
          >
            <img
              src={icons.map}
              alt="Global map"
              className="w-full max-w-4xl object-contain"
            />

            {/* Responsive badge positions */}
            {[
              { top: "top-[20%]", left: "left-[30%]" },
              { top: "top-[25%]", left: "left-[50%]" },
              { top: "top-[30%]", left: "left-[60%]" },
              { top: "top-[35%]", right: "right-[40%]" },
              { top: "top-[40%]", right: "right-[50%]" },
              { top: "top-[45%]", right: "right-[50%]" },
              { top: "top-[50%]", right: "right-[50%]" },
              { top: "top-[55%]", left: "left-[70%]" },
              { top: "top-[60%]", left: "left-[45%]" },
              { top: "top-[65%]", right: "right-[35%]" },
              { top: "top-[70%]", right: "right-[20%]" },
              { top: "top-[75%]", right: "right-[30%]" },
              { top: "top-[80%]", left: "left-[50%]" },
              { top: "top-[85%]", right: "right-[10%]" },
              { top: "top-[90%]", left: "left-[80%]" },
              { top: "top-[95%]", left: "left-[80%]" },
              { top: "top-[100%]", right: "right-[20%]" },
              { top: "top-[105%]", right: "right-[10%]" },
              { top: "top-[110%]", left: "left-[80%]" },
            ].map((pos, index) => (
              <AvailabilityBadge
                key={index}
                className={`absolute ${pos.top} ${
                  pos.left || pos.right
                } hover:scale-110 hover:bg-crayola-600 transition-all ease-in-out duration-300 cursor-pointer`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Global;
