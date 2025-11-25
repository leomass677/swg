import { div } from "framer-motion/client";
import React from "react";
import WorkWithYouLink from "../../component/WorkWithYouLink";
import images from "../images";

const ProductsDescription = () => {
  return (
    <div className="w-full bg-stone-200 backdrop-blur-lg min-h-screen py-24 ">
      <div className="px-4 sm:px-6 lg:px-12 xl:px-12">
        {/*  */}
        <div className=" max-w-[1440px] relative -z-0 mx-auto rounded-[60px]  overflow-hidden">
          <div className="p-12   xl:px-16 text-md font-medium leading-snug min-h-180 justify-between flex  w-full h-full flex-col text-dark z-20">
            {/*  */}

            <div className="flex w-full justify-between">
              <h5 className="flex flex-col gap-0.5">
                <span className="text-xl font-semibold text-blue-500">
                  Empowering
                </span>{" "}
                Enterpreneurs for Success
              </h5>
              <WorkWithYouLink className={"shrink-0"} />
            </div>

            {/*  */}

            <div
              className="flex gap-18 
            w-full justify-between items-center-safe  lg:gap-6  text-gray-700"
            >
              <p className="flex-1 hidden lg:block">
                Simplify Workflows, Amplify Profits: Your Path to Effortless
                Business Success!
              </p>
              <div className="flex flex-3 gap-8 pb-5  gap-y-2 flex-wrap-reverse w-full justify-evenly">
                {[
                  "Taiored for Entrepreneurs",
                  "Empowering Growth",
                  "Dedicated Support",
                ].map((item) => {
                  return (
                    <button
                      key={item}
                      className="bg-stone-50   shrink-0  grow rounded-md shadow-2xs py-4 px-4 border-b-2 max-h-fit border-blue-200 "
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
              <p className="flex-1 hidden lg:block">
                Our commitment goes Beyound mere transactions
              </p>
            </div>

            {/*  */}
          </div>
          <img
            src={images.light}
            alt={images.light}
            className="w-115 hidden lg:block absolute top-1/2 left-1/2 rotate-90 -translate-y-1/2 -translate-x-1/2 "
          />
          {/* shadow */}
          <div className="w-50 h-50 rounded-full -skew-6 absolute top-3/7 left-1/2 -translate-x-12 opacity-70 -z-5 bg-gradient-to-br from-yellow-100/20 to-transparent    hidden xl:block from-shade/30 to-stone-300/15"></div>
          <div className="h-12 w-1.5 rounded-full bg-blue-500/50 absolute right-16  hidden lg:block bottom-16"></div>
          <div className="w-full h-[30%] bg-stone-100/80 absolute top-0 -z-10">
            <div className="relative h-full w-full ">
              <div className="absolute h-[70%] w-[50%] top-1/2 translate-y-1/2  translate-x-1/2 right-1/2 bg-stone-200  rounded-2xl"></div>
            </div>
          </div>
          {/*  */}
          <div className="w-full h-[30%] bg-stone-100/75 absolute top-1/2  rounded-br-2xl overflow-hidden -translate-y-1/2 -z-10">
            <div className="relative h-full w-full ">
              <div className="absolute h-[70%] w-[50%] -top-1/2  translate-x-1/2 right-1/2 bg-stone-200  rounded-2xl"></div>
              <div className="absolute h-[70%] w-[50%] top-1/2 translate-y-1/2  translate-x-1/2 right-1/2 bg-stone-200  rounded-2xl">
                <div className="relative h-full w-full ">
                  <div className="absolute h-[70%] w-[50%] -top-1/2  translate-x-1/2 right-1/2 bg-stone-200  rounded-2xl"></div>
                  <div className="absolute h-[70%] w-[50%] top-1/2 translate-y-1/2  translate-x-1/2 right-1/2 bg-stone-200  rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[30%] bg-stone-100/70 absolute bottom-0 -z-10">
            <div className="relative h-full w-full ">
              <div className="absolute h-[70%] w-[50%] -top-1/2  translate-x-1/2 right-1/2 bg-stone-200  rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDescription;
