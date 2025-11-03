import React, { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import icons from "../assets/icons";
import images from "../assets/images";

const Footer = () => {
  const navItems = [
    {
      label: "About US",
      items: [
        { label: "About SWG", href: "/design" },
        { label: "History", href: "/prototyping" },
        { label: "Vision, Mission & Values", href: "/collaboration" },
        { label: "People, Performance & Culture", href: "/handoff" },
        { label: "How We Operate", href: "/design-systems" },
        { label: "Publications", href: "/plugins" },
        { label: "The Team", href: "/integrations" },
        { label: "Partners & Affiliates", href: "/plugins" },
        { label: "Our Global Footprint", href: "/integrations" },
      ],
    },
    {
      label: "Services",
      items: [
        { label: "Digital Commerce", href: "/design" },
        { label: "IT Consulting", href: "/prototyping" },
        { label: "Application Service Provider", href: "/collaboration" },
        { label: "Automation Service", href: "/handoff" },
        { label: "Customer Experience", href: "/design-systems" },
        { label: "Infrastructure Service", href: "/plugins" },
        { label: "Security Solutions", href: "/integrations" },
        { label: "Sustainability Consulting & Solutions", href: "/plugins" },
        { label: "Bespoke Technology Innovation", href: "/integrations" },
      ],
    },
    {
      label: "Products",
      items: [
        { label: "E-Immigration Portal", href: "/design" },
        { label: "Automated Driving License Solution", href: "/prototyping" },
        { label: "Entrust", href: "/collaboration" },
        { label: "Membership Management Solution", href: "/handoff" },
        { label: "Resource Planning System", href: "/design-systems" },
        { label: "The Smart Crowdfunding Solution", href: "/plugins" },
        { label: "Hobo", href: "/integrations" },
        { label: "Integrated Tax Management Solution", href: "/integrations" },
        { label: "HRMIS", href: "/integrations" },
        { label: "Integrated Postal Management System", href: "/integrations" },
        { label: "Souk Place", href: "/integrations" },
      ],
    },
  ];

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

  const text = `is a leading software development and technology solutions company specializing in delivering innovative digital products and enterprise software. With a focus on quality, scalability, and user-centric design, SW Global provides custom software, web and mobile applications, and IT consulting services to help businesses streamline operations and drive growth in a rapidly evolving digital world.`;

  const [isExpanded, setIsExpanded] = useState(false);
  const [viewAll, setViewAll] = useState(false);
  const maxLength = 130;
  const count = 5;
  const year = new Date().getFullYear();

  const displayedItems = viewAll ? partner : partner.slice(0, count);
  const toggleReadMore = () => setIsExpanded((prev) => !prev);

  return (
    <footer className="px-4 sm:px-8 lg:px-18 py-12 relative border-t border-gray-200 shadow-lg bg-shade">
      <motion.div className="w-full flex flex-col gap-8 mx-auto max-w-[1440px]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="flex-1 flex flex-col gap-4">
            <img src={icons.logo} alt="logo" className="w-36" />
            <div className="flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-gray-800 font-normal">
                <span className="text-blue-500">SW GLOBAL</span>{" "}
                {isExpanded ? text : `${text.slice(0, maxLength)}...`}
              </p>
              <button
                className="text-sm w-fit cursor-pointer hover:scale-105 transition-all duration-500 rounded-md border border-gray-300 px-4 py-1"
                onClick={toggleReadMore}
              >
                {isExpanded ? "Read less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {navItems.map((nav, key) => (
              <ul key={key}>
                <h6 className="text-sm text-blue-700 font-medium mb-2">
                  {nav.label}
                </h6>
                <div className="flex flex-col gap-2">
                  {nav.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-gray-700 flex items-center group hover:text-blue-600 text-xs transition-all duration-300 ease-in-out hover:translate-x-1"
                    >
                      {item.label}
                      <GoChevronRight className="scale-0 opacity-0 -translate-x-2 group-hover:scale-105 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all ease-in-out" />
                    </a>
                  ))}
                </div>
              </ul>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="flex flex-col gap-4">
          <span className="text-sm font-medium border-b border-gray-200 pb-2 text-gray-700">
            Our Partners:
          </span>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
            {displayedItems.map((list, index) => (
              <img key={index} src={list.img} className="w-20 object-contain" />
            ))}
          </ul>
          {partner.length > count && (
            <button
              onClick={() => setViewAll((prev) => !prev)}
              className="text-gray-700 flex items-center group hover:text-blue-600 text-xs transition-all duration-300 ease-in-out hover:translate-x-1 text-center cursor-pointer w-full justify-center"
            >
              {viewAll ? "View Less" : "View All"}
              <GoChevronRight className="scale-0 opacity-0 -translate-x-2 group-hover:scale-105 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all ease-in-out" />
            </button>
          )}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm font-medium text-gray-700 gap-2 sm:gap-0">
          <p className="text-center font-normal text-gray-800 sm:text-left">
            © {year} Mag Group Limited <span>swglobal.com</span>
          </p>
          <ul className="flex gap-4 flex-wrap justify-center sm:justify-end">
            {["Teams", "Privacy", "Compliances"].map((label) => (
              <a
                key={label}
                href="/"
                className="text-gray-700 flex items-center group hover:text-blue-600 text-xs transition-all duration-300 ease-in-out hover:translate-x-1"
              >
                {label}
                <GoChevronRight className="scale-0 opacity-0 -translate-x-2 group-hover:scale-105 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all ease-in-out" />
              </a>
            ))}
          </ul>
        </div>

        {/* Email Input Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-full max-w-full sm:max-w-md flex justify-between bg-gray-500 rounded-full p-0.5 overflow-hidden border border-gray-50 h-12">
          <input
            type="text"
            className="flex-1 text-sm placeholder:text-sm text-shade rounded-l-full placeholder:text-shade pl-4 outline-0"
            placeholder="Enter Your Email"
          />
          <button className="p-1 h-full w-fit scale-95 hover:scale-100 hover:bg-blue-600 transition-all duration-500 ease-in-out cursor-pointer bg-blue-500 px-4 rounded-4xl text-shade">
            Contact Us
          </button>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
