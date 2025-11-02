import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import images from "../assets/images";
import WorkWithYouLink from "../component/WorkWithYouLink";

const VendorFinancing = () => {
  return (
    <div className="flex flex-col md:flex-row p-8">
      <div className="flex-1 p-8">
        <img
          src={images.Gemini_5}
          alt=""
          className="w-[90%] rounded-2xl object-cover h-90"
        />
      </div>
      <div className="flex-1 py-8 px-4">
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-Tinos font-bold text-gray-700">
            <span className="text-blue-500"> Zero Cost </span>/ Vendor Financing
          </h3>
          <span className="text-gray-700 text-lg leading-snug">
            Our unique model of operation ensures that our projects are
            completely financed by vendors, and investments are recovered
            through subscriptions or pay-as-you-go.
          </span>
          <hr className="border-1 text-gray-600 border-grey-700 " />
          <ul className="flex flex-col gap-2">
            <li>
              - You do not pay any upfront fees for the solutions we provide
            </li>
            <li>- Your users bear the cost of the solution</li>
            <li>
              - Recovery cost can be spread over a period of time and the number
              of users
            </li>
            <li>- Fulfill your extensive ICT needs on a limited ICT budget</li>
          </ul>
          <WorkWithYouLink />
        </div>
      </div>
    </div>
  );
};

export default VendorFinancing;
