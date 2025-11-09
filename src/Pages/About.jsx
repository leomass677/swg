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
  const stats = [
    { icon: Users, number: "450+", label: "Team Members" },
    { icon: Globe, number: "15+", label: "Countries" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: Clock, number: "10+", label: "Years Experience" },
  ];

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
      event: "Company Founded",
      description: "Started with a vision to transform digital landscape",
    },
    {
      year: "2016",
      event: "First Major Contract",
      description: "Secured government digital transformation project",
    },
    {
      year: "2018",
      event: "International Expansion",
      description: "Opened offices in 3 new countries",
    },
    {
      year: "2020",
      event: "Product Suite Launch",
      description: "Launched our flagship product portfolio",
    },
    {
      year: "2023",
      event: "Global Recognition",
      description: "Awarded Best Tech Innovation Company",
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
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2">
              Our Story <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>
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
              Our <span className="text-cyan-400">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Milestones that mark our growth and impact over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-500 h-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                  >
                    <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
                      <div className="text-cyan-400 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-300">{milestone.description}</p>
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
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
