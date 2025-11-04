import React from "react";
import { motion } from "framer-motion";
import images from "../assets/images";
import WorkWithYouLink from "../component/WorkWithYouLink";

const VendorFinancing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col md:flex-row max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-8"
    >
      {/* Image Section */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="flex-1 flex justify-center items-center"
      >
        <img
          src={images.Gemini_5}
          loading="lazy"
          decoding="async"
          alt="Vendor Financing"
          className="w-full max-w-[90%] h-full max-h-[350px] rounded-2xl object-cover shadow-lg"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex flex-col gap-6"
      >
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-Euclid font-bold text-gray-700">
          <span className="text-blue-500">Zero Cost</span> / Vendor Financing
        </h3>
        <p className="text-gray-700 text-base sm:text-lg leading-snug">
          Our unique model of operation ensures that our projects are completely
          financed by vendors, and investments are recovered through
          subscriptions or pay-as-you-go.
        </p>
        <hr className="border border-gray-300" />
        <ul className="flex flex-col gap-2 text-gray-700 text-sm sm:text-base list-disc pl-4">
          <li>You do not pay any upfront fees for the solutions we provide</li>
          <li>Your users bear the cost of the solution</li>
          <li>
            Recovery cost can be spread over a period of time and the number of
            users
          </li>
          <li>Fulfill your extensive ICT needs on a limited ICT budget</li>
        </ul>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <WorkWithYouLink />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default VendorFinancing;
