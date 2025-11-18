import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const DigitalCommerce = () => {
  return (
    <div className="flex flex-col pt-16 bg-blue-50 relative">
      <section className="flex flex-col gap-8 max-w-[1440px] mx-auto">
        {" "}
        <div className="flex  pt-8 gap-5">
          {" "}
          <div className="flex-1 ">
            <h4 className="text-xl   text-grey-500 font-bold">-Services</h4>
            <h1 className="text-4xl font-semibold text-dark-700 leading-snug max-w-md">
              Innovate. Be Empowered. Grow With Tailored{" "}
              <span className="text-blue-500 italic">Services</span>
            </h1>
          </div>
          <div className="flex-1 flex gap-4 items-start lg:items-end-safe ">
            <div className="flex gap-4">
              {" "}
              <div className="p-2 w-16 h-8 bg-blue-200 rounded-2xl mt-2 min-w-16">
                <div className="bg-blue-900 w-full rounded-xl h-full"></div>
              </div>
              <p className="text-lg font-medium text-gray-700">
                Our services are designed to help individuals, organizations and
                government institutions enhance business efficiencies and
                maintain a competitive edge. Our approach is unique and tailored
                to emerging markets, requiring zero implementation cost
              </p>
            </div>
          </div>
        </div>
        <div className="max-h-60 overflow-hidden">
          <img
            src="https://cdn.pixabay.com/photo/2021/03/29/12/16/stairs-6133971_1280.jpg"
            alt="services"
            className="w-full object-bottom   object-cover max-h-100 rounded-4xl"
          />
        </div>
      </section>
      {/*  */}
      <a
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("aplicationService")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        href="#who-are-we"
        className="w-12 h-12 text-2xl absolute -bottom-6 z-30 bg-shade transition-all duration-300   ease-out rounded-full flex justify-center items-center scale-105 hover:scale-120  left-1/2 -translate-x-1/2 text-gray-700 cursor-pointer animate-bounce hover:animate-none"
      >
        <FaArrowDownLong />
      </a>
    </div>
  );
};

export default DigitalCommerce;
