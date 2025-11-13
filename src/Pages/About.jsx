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
import { img, text } from "framer-motion/client";
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

  const ourValue = [
    {
      title: "Mission",
      img: icons.mission,
      text: "To empower businesses and governments in emerging markets through innovative eGovernment, eEducation, and eHealthcare solutions that drive digital transformation and enhance service delivery.",
    },
    {
      title: "Vision",
      img: icons.vision,
      text: "To be the leading provider of transformative digital solutions in Africa and other emerging markets, recognized for our commitment to innovation, excellence, and customer success.",
    },

    {
      title: "Values",
      img: icons.values,
      text: "Our core values guide our actions and decisions as we strive to achieve our mission and vision.",

      value: [
        {
          title: "Customer Centricity",
          img: icons.customer_centricity,
        },
        {
          title: "Excellence",
          img: icons.excellence,
        },

        {
          title: "Integrity",
          img: icons.integrity,
        },
        {
          title: "Leadership",
          img: icons.leadership,
        },

        { title: "Teamwork", img: icons.teamwork },
      ],
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
        className="py-8 relative xl:min-h-screen lg:py-16 px-4 h-full sm:px-6 lg:px-8 flex items-center "
      >
        <div className="absolute top-0 left-0 w-full h-full bg-dark/35"></div>
        <a
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("who-are-we")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          href="#who-are-we"
          className="w-12 h-12 text-2xl absolute -bottom-6 z-30 bg-shade transition-all duration-300   ease-out rounded-full flex justify-center items-center scale-105 hover:scale-120  left-1/2 -translate-x-1/2 text-gray-700 cursor-pointer animate-bounce hover:animate-none"
        >
          <FaArrowDownLong />
        </a>
        <div className="max-w-[1440px] mx-auto flex">
          <div className="w-full xl:max-w-3/5 xl:pl-12 xl:px-8 z-10">
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-semibold mb-6 leading-snug  text-start text-shade"
            >
              A Leading Provider of eGovernment, eEducation, eHealthcare
              Solutions Across Africa and Other Emerging Markets .
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap   gap-4"
            >
              <WorkWithYouLink className="text-shade font-medium " />
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
        id="who-are-we"
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
              <div className=" self-end absolute -bottom-14">
                {/*  */}
                <img
                  src={images.powerfull}
                  alt=""
                  className=" shadow-md   w-110 h-auto object-cover xl:pr-8  "
                />
                {/*  */}
                <div className="absolute -left-23 -top-2 -z-20">
                  {" "}
                  <div className="w-50 h-50 bg-linear-to-bl from-cyan-100/50 to-blue-600/80 backdrop-blur-xs border-gray-800 rotate-0 rounded-tl-full -top-20 right-0 rounded-full before:w-28   scale-50  before:rounded-br-full before:bg-grey-900 before:h-28 before before:content-[''] before:bottom-0 before:-right-4 before:absolute  relative"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 lg:gap-6 xl:gap-8 mt-4 lg:mt-6 xl:mt-12 text-lg md:text-xl text-gray-200 leading-relaxed">
              <h6 className="text-2xl font-semibold text-gray-100 mb-4">
                SW Global Limited is a pioneering West African technology
                company driven by innovation, excellence, and a passion for
                delivering transformative digital solutions.
              </h6>
              <p className="">
                With over a decade of experience in the Information Technology
                industry, we have built a solid reputation for reliability,
                innovation, and technical expertise. Our growth reflects our
                dedication to empowering businesses and institutions through
                technology.
              </p>
              <p>
                SW Global serves clients across local, regional, and
                international markets. Our global footprint and deep
                understanding of diverse industries enable us to deliver
                solutions that are both cutting-edge and culturally adaptable.
              </p>
              <WorkWithYouLink className="text-shade font-medium " />
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
              <WorkWithYouLink className="text-shade font-medium " />
            </div>
          </div>
        </div>
      </section>

      {/* our value */}
      <section className="py-16 relative lg:py-24  px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="flex flex-row flex-wrap gap-16 justify-between max-w-[1440px] mx-auto  mb-12 lg:mb-16">
          {ourValue.map((item, index) => {
            //Mission and Vision
            if (!item.value) {
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col gap-3 mb-16 flex-nowrap "
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-contain w-45 h-auto rounded-full mb-6 shadow-3xl  shadow-shade/20"
                  />
                  <div className="flex flex-col   gap-4">
                    {" "}
                    <h3 className="text-2xl font-bold  ">{item.title}</h3>
                    <p className="text-xl max-w-xl leading-snug">{item.text}</p>
                  </div>
                </motion.div>
              );
            }

            // For Values
            return (
              <motion.div
                key={index}
                variants={containerVariants}
                className="flex flex-col lg:flex-row pt-16 border-t border-gray-100  gap-12"
              >
                <div className="flex-1 flex flex-col gap-3 mb-16">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-contain w-45 h-auto rounded-full mb-6 shadow-3xl  shadow-shade/20"
                  />
                  <div className="flex flex-col gap-3">
                    {" "}
                    <h3 className="text-2xl font-bold ">{item.title}</h3>
                    <p className="text-xl max-w-2xl leading-snug">
                      {item.text}
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-wrap  items-center justify-center gap-8 ">
                  {item.value.map((valueItem, valueIndex) => (
                    <motion.div
                      key={valueIndex}
                      variants={itemVariants}
                      className="flex flex-col items-center gap-3 max-w-xs"
                    >
                      <img
                        src={valueItem.img}
                        alt={valueItem.title}
                        className="w-full max-w-50"
                      />
                      <span className="text-lg ">{valueItem.title}</span>
                    </motion.div>
                  ))}
                  <div className="absolute right-0 -top-5.5 xl:right-59.5">
                    {" "}
                    <div className="w-50 h-50 bg-shade border-gray-400 rotate-90 rounded-tl-full -top-20 right-0 rounded-full before:w-28   scale-50  before:rounded-br-full before:bg-grey-900 before:h-28 before before:content-[''] before:bottom-0 before:-right-4 before:absolute  relative"></div>
                  </div>
                  <div className="absolute left-0   -bottom-5.5 xl:left-50 rotate-180">
                    {" "}
                    <div className="w-50    h-50 bg-shade border-gray-400 rotate-90 rounded-tl-full -top-20 right-0 rounded-full before:w-28   scale-50  before:rounded-br-full before:bg-grey-900 before:h-28 before before:content-[''] before:bottom-0 before:-right-4 before:absolute  relative"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

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
            <WorkWithYouLink className="text-shade font-medium " />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
