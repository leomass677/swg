import React from "react";
import { motion } from "framer-motion";
import images from "../assets/images";

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
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col gap-6 md:gap-8 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <h3 className="text-3xl sm:text-4xl font-Tinos font-bold">
            Our Partners
          </h3>
          <span className="leading-snug max-w-3xl text-lg sm:text-xl text-gray-700">
            Our close alliance with global industry leaders allows us to offer
            our clients cutting-edge technology, robust security measures, and
            timely support.
          </span>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 py-4">
          {partner.map((item, key) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: key * 0.05 }}
              className="flex items-center justify-center py-4 rounded-md shadow-md border border-white bg-shade"
            >
              <img
                src={item.img}
                alt={`Partner ${key}`}
                loading="lazy"
                decoding="async"
                className="h-12 w-20 sm:w-24 lg:w-28 xl:w-32 object-contain cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
