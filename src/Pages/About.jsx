import React from "react";
import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="relative max-w-7xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <AvailabilityBadge />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Building The Future,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Today
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            A Leading Provider of eGovernment, eEducation, eHealthcare Solutions
            Across Africa and Other Emerging Markets .
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <WorkWithYouLink className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300" />
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-2.5 cursor-pointer rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2">
              Our Story <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>
      </section>
      {/*Who We Are  */}
      <section className="relative">
        <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
          <h1 className="text-3xl text-center ">Who We Are</h1>
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
              <button
                key={index}
                className="py-2 px-4 rounded-full border-grey-400 shadow-sm bg-transparent cursor-pointer scale-95 hoverscale-105 transition-all duration-500 m-2 border-2 text-gray-700 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-8 mt-12 flex-col lg:flex-row-reverse items-center">
            <div className="flex-1  flex flex-col  items-center lg:items-start lg:justify-end-safe gap-4 lg:gap-6 xl:gap-8">
              <img
                src={images.powerfull}
                alt=""
                className=" self-end xl:absolute -bottom-14 shadow-md   shadow-shade/15  max-w-[70%] max-h-[500px] object-cover xl:pr-8  "
              />
            </div>
            <div className="flex-1 flex flex-col gap-4 lg:gap-6 xl:gap-8 mt-4 lg:mt-6 xl:mt-12 text-lg md:text-xl text-gray-700 leading-relaxed">
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
              <WorkWithYouLink className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-cyan-400">Our Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Milestones that mark our growth and impact over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2  transform -translate-x-1/2 w-1 bg-cyan-500 h-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative  flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                  >
                    <div
                      className={`bg-gray-800 shadow-2xl cursor-pointer transition-all ease-in-out duration-600  p-6 flex rounded-2xl items-center justify-start gap-4 sm:gap-5 md:gap-6 xl:gap-12 py-8 hover:bg-gray-700   hover:border-shade   ${
                        index % 2 === 0
                          ? "hover:translate-x-8"
                          : "hover:-translate-x-8"
                      }`}
                    >
                      {/* <div className="text-cyan-400 font-bold text-lg mb-2">
                        {milestone.year}
                      </div> */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl  font-medium mb-2 text-cyan-400 text-2xl">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-300 text-5xl md:text-6xl xl:text-7xl ">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900"></div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
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
