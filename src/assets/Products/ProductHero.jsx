import React from "react";
import WorkWithYouLink from "../../component/WorkWithYouLink";
import { FaArrowDownLong } from "react-icons/fa6";

const ProductHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2018/09/18/15/42/planet-3d-3686480_1280.jpg")`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "450px",
      }}
      className="relative flex items-center w-full"
    >
      <div className="flex max-w-[1440px] text-center z-40 text-base sm:text-lg md:text-xl lg:text-2xl flex-col gap-4 sm:gap-6 md:gap-8 justify-center text-shade font-semibold leading-relaxed mx-auto px-4 sm:px-6 lg:px-12 xl:px-12 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-500 font-bold">
          Our Products
        </h1>
        <p className="max-w-4xl text-lg sm:text-xl md:text-2xl font-medium mx-auto">
          We build, deploy and manage products that are designed to help
          organizations and government institutions enhance efficiencies and
          maintain a competitive edge in every market.
        </p>
        <WorkWithYouLink className={"self-center mt-4 sm:mt-0"} />
      </div>
      <div className="w-full h-full top-0 left-0 absolute bg-dark/40"></div>
      <a
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("productDescription")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        href="#who-are-we"
        className="w-10 h-10 sm:w-12 sm:h-12 text-xl sm:text-2xl absolute -bottom-4 sm:-bottom-6 z-30 bg-shade transition-all duration-300 ease-out rounded-full flex justify-center items-center scale-105 hover:scale-110 sm:hover:scale-120 left-1/2 -translate-x-1/2 text-gray-700 cursor-pointer animate-bounce hover:animate-none"
      >
        <FaArrowDownLong />
      </a>
    </div>
  );
};

export default ProductHero;
