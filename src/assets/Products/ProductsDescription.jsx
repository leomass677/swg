import { div } from "framer-motion/client";
import React from "react";
import WorkWithYouLink from "../../component/WorkWithYouLink";
import images from "../images";

const ProductsDescription = () => {
  return (
    <div className="w-full bg-stone-50 py-24 ">
      <div
        id="productDescription"
        className=" max-w-[1440px] relative bg-stone-200 -z-0 mx-auto rounded-[60px]   overflow-hidden"
      >
        <div className="p-16 text-md font-medium leading-snug min-h-150 justify-between flex  h-full flex-col text-dark z-20">
          {/*  */}

          <div className="flex w-full justify-between">
            <h5 className="flex flex-col gap-0.5">
              <span className="text-xl font-semibold text-blue-500">
                Empowering
              </span>{" "}
              Enterpreneurs for Success
            </h5>
            <WorkWithYouLink />
          </div>

          {/*  */}

          <div
            className="flex 
            w-full justify-between gap-6"
          >
            <p className="flex-1">
              Simplify Workflows, Amplify Profits: Your Path to Effortless
              Business Success!
            </p>
            <div className="flex flex-nowrap flex-2 w-full justify-evenly">
              {[
                "Taiored for Entrepreneurs",
                "Empowering Growth",
                "Dedicated Support",
              ].map((item) => {
                return (
                  <button
                    key={item}
                    className="bg-stone-50 rounded-2xl py-4 px-4 shadow-md border-b-2 border-blue-200 "
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <p className="flex-1">
              Our commitment goes Beyound mere transactions
            </p>
          </div>

          {/*  */}
        </div>
        <img
          src={images.light}
          alt={images.light}
          className="w-115 absolute top-2/5 left-1/2 -translate-y-1/2 -translate-x-1/2 "
        />
        <div className="w-50 h-50 rounded-full -skew-6 absolute top-3/7 left-1/2 -translate-x-8  -z-5 bg-gradient-to-r hidden xl:block from-shade/30 to-stone-300/15"></div>
        <div className="h-12 w-1.5 rounded-full bg-blue-500/50 absolute right-16 bottom-16"></div>
        <div className="w-full h-[30%] bg-stone-100/80 absolute top-0 -z-10"></div>
        <div className="w-full h-[30%] bg-stone-100/75 absolute top-1/2 -translate-y-1/2 -z-10"></div>
        <div className="w-full h-[30%] bg-stone-100/70 absolute bottom-0 -z-10"></div>
      </div>
    </div>
  );
};

export default ProductsDescription;
