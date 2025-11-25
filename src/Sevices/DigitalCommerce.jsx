import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const DigitalCommerce = () => {
  return (
    <div className="flex flex-col pt-12 sm:pt-16 bg-blue-50 relative">
      <section className="flex flex-col gap-6 sm:gap-8 max-w-[1440px] mx-auto   w-full">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row pt-6 sm:pt-8 gap-6 sm:gap-8">
          {/* Left sec */}
          <div className="flex-1">
            <h4 className="text-lg sm:text-xl text-gray-500 font-bold mb-2 sm:mb-3">
              -Services
            </h4>
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight sm:leading-snug max-w-full lg:max-w-md">
              Innovate. Be Empowered. Grow With Tailored{" "}
              <span className="text-blue-500 italic">Services</span>
            </h1>
          </div>

          {/* Right  */}
          <div className="flex-1 flex gap-4 items-start">
            <div className="flex gap-3 sm:gap-4">
              {/* Color div */}
              <div className="p-2 w-12 sm:w-16 hidden lg:block  h-6 sm:h-8 bg-blue-200 rounded-2xl mt-1 sm:mt-2 flex-shrink-0">
                <div className="bg-blue-900 w-full rounded-xl h-full"></div>
              </div>

              {/*  Text */}
              <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed">
                Our services are designed to help individuals, organizations and
                government institutions enhance business efficiencies and
                maintain a competitive edge. Our approach is unique and tailored
                to emerging markets, requiring zero implementation cost
              </p>
            </div>
          </div>
        </div>

        {/* Image Sec */}
        <div className="max-h-48 sm:max-h-52 md:max-h-60 overflow-hidden">
          <img
            src="https://cdn.pixabay.com/photo/2021/03/29/12/16/stairs-6133971_1280.jpg"
            alt="services"
            className="w-full object-bottom object-cover max-h-48 sm:max-h-52 md:max-h-60 rounded-2xl sm:rounded-3xl lg:rounded-4xl"
          />
        </div>
      </section>

      {/* Scroll Down   */}
      <a
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("aplicationService")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        href="#who-are-we"
        className="w-10 h-10 sm:w-12 sm:h-12 text-xl sm:text-2xl absolute -bottom-5 sm:-bottom-6 z-30 bg-shade transition-all duration-300 ease-out rounded-full flex justify-center items-center scale-105 hover:scale-110 sm:hover:scale-120 left-1/2 -translate-x-1/2 text-gray-700 cursor-pointer animate-bounce hover:animate-none shadow-md border border-gray-200"
      >
        <FaArrowDownLong />
      </a>
    </div>
  );
};

export default DigitalCommerce;
