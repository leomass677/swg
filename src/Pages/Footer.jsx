import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AvailabilityBadge from "../Animation/AvailabilityBadge";
import icons from "../assets/icons";
import { NavLink } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { motion } from "framer-motion";
import { label } from "framer-motion/client";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import images from "../assets/images";

// Navigation config

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

  const navItems002 = [
    {
      label: "Industries",
      items: [
        { label: "Private Sector", href: "/blog" },
        { label: "Public Sector", href: "/community" },
      ],
    },
    {
      label: "Careers",
      items: [
        { label: "Jobs", href: "/about" },
        { label: "Alumni & Internship Program", href: "/careers" },
        { label: "Our Talent Network", href: "/press" },
      ],
    },
    {
      label: "Insights",
      items: [
        { label: "Case Studies", href: "/about" },
        { label: "Blog", href: "/careers" },
      ],
    },
  ];

  const Socials = [
    {
      label: "Instargram ",
      icon: <FaInstagram />,
      path: "/",
    },
    {
      label: "Twitter",
      icon: <FaTwitter />,
      path: "/",
    },
    {
      label: "Facebook",
      icon: <FaFacebook />,
      path: "/",
    },
    {
      label: "Inkedin",
      icon: <FaLinkedin />,
      path: "/",
    },
  ];

  const year = new Date().getFullYear();
  return (
    <footer
      // style={{
      //   backgroundImage: `url(${images.footer1})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   opacity: "1",
      // }}
      className="px-18 py-12 border-t border-gray-100 shadow-lg  bg-shade  "
    >
      <motion.div className=" w-full flex flex-col gap-4   mx-auto max-w-[1440px]   ">
        <div className=" w-full grid grid-cols-5  ">
          {navItems.map((nav, key) => (
            <ul key={key} className="">
              <h6 className="text-sm text-blue-700 font-medium mb-2">
                {nav.label}
              </h6>
              <div className="flex flex-col gap-2">
                {nav.items.map((item) => (
                  <a
                    key={item.label}
                    to={item.href}
                    className="text-gray-700 flex flex-nowrap items-center group hover:text-blue-600 text-xs transition-all duration-300 ease-in-out hover:translate-x-1"
                  >
                    {item.label}
                    <GoChevronRight className="scale-0 opacity-0 -translate-x-2 group-hover:scale-105 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all ease-in-out" />
                  </a>
                ))}
              </div>
            </ul>
          ))}

          <div className="flex flex-col gap-4">
            {navItems002.map((navItem, key) => (
              <ul key={key}>
                <h6 className="text-sm text-blue-700 font-medium mb-2">
                  {navItem.label}
                </h6>
                <div className="flex flex-col gap-2 ">
                  {navItem.items.map((item) => (
                    <a
                      key={item.label}
                      to={item.href}
                      className="text-gray-700 group flex flex-nowrap items-center hover:text-blue-600 text-xs transition-all duration-300 ease-in-out hover:translate-x-1"
                    >
                      {item.label}
                      <GoChevronRight className="scale-0 opacity-0 -translate-x-2 group-hover:scale-105 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all ease-in-out" />
                    </a>
                  ))}
                </div>
              </ul>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div>
              {" "}
              <h6 className="text-sm text-blue-700 font-medium mb-2">
                Newsletter
              </h6>
              <p className="text-gray-700 flex flex-nowrap items-center text-xs">
                Stay Industry-connected with our monthly newsletter written by
                our editorial team.
              </p>
            </div>
            {/*  */}
            <div>
              <input
                type="email"
                placeholder="Your Email Address"
                className="outline-none border-1 border-gray-400 placeholder:text-xs px-2 py-1 rounded-xs text-xs text-grey-600 focus:border-blue-400 focus:border-1.5 transition-all duration-500 w-full "
              />
            </div>
            {/*  */}
            <div className="flex flex-col gap-4">
              <p className="text-sm text-blue-700 font-medium mb-2">
                Our Socials
              </p>
              <span className="w-fit gap-4 flex justify-between">
                {Socials.map((item, key) => (
                  <div
                    className="relative rounded-full group bg-blue-50 p-2"
                    key={key}
                  >
                    <a href={item.path} className="text-xl ">
                      {item.icon}
                    </a>
                    <p className="absolute -top-10 bg-shade shadow-md border border-gray-100 left-1/2 -translate-x-1/2 px-2 py-1 rounded-sm text-sm group-hover:scale-100 scale-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out -translate-y-12 group-hover:-translate-y-0">
                      {item.label}
                    </p>
                  </div>
                ))}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-20">
          <div className="flex flex-col gap-2 w-full">
            <img src={icons.logo} alt="" className="w-[136px]" />
            <hr />
            <p className="text-sm font-light">
              Copyright © {year} Mag Group Limited
            </p>
          </div>
          <div>
            <img
              src={images.footer_img}
              alt=""
              className="w-[295px] object-cover "
            />
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
