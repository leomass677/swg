import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Target,
  Globe,
  Award,
  Clock,
  Heart,
  Shield,
  Zap,
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react";
import images from "../assets/images";
import icons from "../assets/icons";
import WorkWithYouLink from "../component/WorkWithYouLink";
import AvailabilityBadge from "../Animation/AvailabilityBadge";
import TeamMember from "../component/TeamMember";
import { img } from "framer-motion/client";
import { GiTeamIdea, GiBrain, GiRunningNinja, GiSkills } from "react-icons/gi";
import { FaUsersRays } from "react-icons/fa6";
import { PiHandshakeThin } from "react-icons/pi";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";
const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  // Data

  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description:
        "We go above and beyond to deliver exceptional results that exceed expectations.",
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description:
        "We build relationships based on honesty, transparency, and mutual respect.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We constantly push boundaries to create cutting-edge solutions for our clients.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and shared success.",
    },
  ];

  const milestones = [
    {
      year: "2014",
      event: "Teamwork",
      description: <GiTeamIdea />,
    },
    {
      year: "2016",
      event: "Integrity",
      description: <GiBrain />,
    },
    {
      year: "2018",
      event: "Leadership",
      description: <GiRunningNinja />,
    },
    {
      year: "",
      event: "Innovation",
      description: <GiSkills />,
    },
    {
      year: "2023",
      event: "Customer Centricity",
      description: <FaUsersRays />,
    },
    {
      year: "2023",
      event: "Excellence",
      description: <IoCheckmarkDone />,
    },
    {
      year: "2023",
      event: "Partnership",
      description: <PiHandshakeThin />,
    },
  ];

  return (
    <div className="min-h-screen bg-shade pt-10">
      {/*  */}
      <section
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "450px",
        }}
        className="py-8 relative lg:py-16 px-4 h-full sm:px-6 lg:px-8 flex items-center "
      >
        <span className="w-12 h-12 text-2xl absolute -bottom-6 z-30 bg-shade  rounded-full flex justify-center items-center scale-105 hover:scale-125  left-1/2 -translate-x-1/2 text-gray-700 cursor-pointer animate-bounce">
          <FaArrowDownLong />
        </span>
        <div className="max-w-[1440px] mx-auto flex">
          <div className="flex-1"></div>
          <div className="flex-1 bg-gray-50/2  p-8">
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-bold mb-6 leading-tight self-end-safe text-start text-gray-700"
            >
              A Leading Provider of eGovernment, eEducation, eHealthcare
              Solutions Across Africa and Other Emerging Markets .
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center xl:justify-end-safe gap-4"
            >
              <WorkWithYouLink className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section */}

      {/*Who We Are  */}
      <section
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1658")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="relative"
      >
        {/* img overlay */}
        <div className="w-full h-full absolute top-0 left-0  bg-shade/5  "></div>

        <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto relative z-10">
          <h1 className="text-3xl text-center text-shade font-semibold mb-4 lg:mb-8">
            Who We Are
          </h1>
          <AnimatePresence>
            {" "}
            <div className="flex flex-wrap justify-center mt-8 w-full lg:max-w-4xl mx-auto xl:max-w-5xl">
              {[
                "Digital Transformation",
                "Innovation",
                "IT consulting",
                "Security Solutions",
                "Vendor Financing",
                "Training & Support",
                "Bespoke Technology Solutions",
                "Infrastructure Services",
                "Application Services",
              ].map((item, index) => (
                <motion.button
                  variants={containerVariants}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4, delay: index * 0.2 }}
                  key={index}
                  className="py-2 px-4 rounded-full border-shade shadow-sm bg-transparent cursor-pointer scale-95 hoverscale-105 transition-all duration-500 m-2 border-2 text-gray-100 hover:shadow-2xl hover:bg-shade hover:scale-105 hover:text-dark font-medium"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </AnimatePresence>

          <div className="flex gap-8 mt-12 flex-col lg:flex-row-reverse items-center">
            <div className="flex-1  flex flex-col  items-center lg:items-start lg:justify-end-safe gap-4 lg:gap-6 xl:gap-8">
              <img
                src={images.powerfull}
                alt=""
                className=" self-end xl:absolute -bottom-14 shadow-md   shadow-shade/15  max-w-[70%] max-h-[500px] object-cover xl:pr-8  "
              />
            </div>
            <div className="flex-1 flex flex-col gap-4 lg:gap-6 xl:gap-8 mt-4 lg:mt-6 xl:mt-12 text-lg md:text-xl text-gray-200 leading-relaxed">
              <h6 className="text-2xl font-semibold mb-4">
                SW Global Limited is an Application Service Provider (ASP) and a
                leading provider of software solutions and IT infrastructure.
              </h6>
              <p className="">
                We are passionate about technology, especially when it comes to
                helping businesses achieve digital transformation, and take
                pride in offering a wide range of services and solutions
                tailored to meet our clients' needs at any stage of their
                business lifecycle.
              </p>
              <p>
                Our IT solutions are designed with a focus on ease of use and
                functionality and our services are delivered with extensive
                experience and expertise.
              </p>
              <WorkWithYouLink className="bg-white text-blue-600! hover:bg-gray-100 px-8 py-4 rounded-full hover:text-dark font-semibold text-lg hover:scale-105 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* what we do */}
      <section
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="relative"
      >
        {/* img overlay */}
        <div className="w-1/2 h-full absolute top-0  right-0  bg-grey-900/60 backdrop-blur-md border-l border-b border-b-grey-900  border-l-grey-900   "></div>

        <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto relative z-10">
          <div className="flex gap-8 xl:pl-24 flex-col lg:flex-row  items-center">
            <div className="flex-1  flex flex-col  items-center lg:items-start lg:justify-end-safe gap-4 lg:gap-6 xl:gap-8"></div>

            <div className="flex-1 flex flex-col gap-4 mt-4 lg:mt-6 xl:mt-8 text-lg md:text-xl text-gray-200 leading-relaxed">
              <h1 className="text-3xl text-start text-shade font-semibold mb-4 lg:mb-8 border-b-2 border-gray-300 pb-4">
                What <span className="text-blue-500">We Do</span>
              </h1>
              <h6 className="text-2xl font-semibold mb-4">
                SW Global Limited is an Application Service Provider (ASP) and a
                leading provider of software solutions and IT infrastructure.
              </h6>
              <p className="">
                We are passionate about technology, especially when it comes to
                helping businesses achieve digital transformation, and take
                pride in offering a wide range of services and solutions
                tailored to meet our clients' needs at any stage of their
                business lifecycle.
              </p>
              <p>
                Our IT solutions are designed with a focus on ease of use and
                functionality and our services are delivered with extensive
                experience and expertise.
              </p>
              <WorkWithYouLink className="bg-white text-blue-600! hover:bg-gray-100 px-8 py-4 rounded-full hover:text-dark font-semibold text-lg hover:scale-105 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"></section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-blue-950 text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our Team and be a part of our Success Story!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WorkWithYouLink className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
