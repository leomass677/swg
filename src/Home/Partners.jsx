import React from "react";
import images from "../assets/images";
import { div, img } from "framer-motion/client";

const Partners = () => {
  const partner = [
    { img: images.google },
    { img: images.oracle },
    { img: images.microsoft },
    { img: images.lenovo },
    { img: images.cisco },
    { img: images.payfixy },
    { img: images.entusted },
    { img: images.newera },
    { img: images.fortinet },
    { img: images.innovate_pay },
    { img: images.nibss },
    { img: images.dahua },
    { img: images.ios },
    { img: images.newwork },
    { img: images.check_point },
  ];

  return (
    <div className="w-full">
      {" "}
      <div className="flex flex-col p-8 lg:px-0 gap-6 md:gap-8 lg:12 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center">
          {" "}
          <h3 className="text-3xl font-Euclid font-bold">Our Partners</h3>
          <span className="leading-snug max-w-3xl text-center text-xl">
            Our close alliance with global industry leaders allows us to offer
            our clients cutting-edge technology, robust security measures, and
            timely support.
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-4 gap-4 md:gap-6 lg:gap-8 ">
          {partner.map((item, key) => (
            <div
              key={key}
              className="flex items-center  transition-all duration-800 hover:rounded-none ease-out bg-shade hover:bg-gray-400/40  group cursor-pointer relative overflow-hidden justify-center py-4 rounded-xl shadow-md border-white border"
            >
              <img
                src={item.img}
                alt={`Partner ${key}`}
                className="h-12 cursor-pointer grayscale-100 group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:opacity-100 opacity-80 scale-95 object-contain w-20 md:w-24 lg:w-30 xl:w-35"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
