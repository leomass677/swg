import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/background001.png";
import icons from "../assets/icons";
import AvailabilityBadge from "../Animation/AvailabilityBadge";
import ScrollVideoEffect from "../Pages/ScrollVideoEffect";

const Global = () => {
  // Stats data for better maintainability
  const stats = [
    { value: "$50m+", label: "technology investment" },
    { value: "450+", label: "enrolment centers" },
    { value: "13m", label: "identity documents issued" },
  ];

  // Badge positions for different screen sizes
  const badgePositions = [
    // Large screens
    { top: "20%", left: "30%" },
    { top: "25%", left: "50%" },
    { top: "30%", left: "60%" },
    { top: "35%", right: "40%" },
    { top: "40%", right: "50%" },
    { top: "45%", right: "50%" },
    { top: "50%", right: "50%" },
    { top: "55%", left: "70%" },
    { top: "60%", left: "45%" },
    { top: "65%", right: "35%" },
    { top: "70%", right: "20%" },
    { top: "75%", right: "30%" },
    { top: "80%", left: "50%" },
    { top: "85%", right: "10%" },
    { top: "90%", left: "80%" },

    // Mobile-optimized positions (fewer badges on small screens)
    { top: "95%", left: "80%", mobile: true },
    { top: "100%", right: "20%", mobile: true },
    { top: "105%", right: "10%", mobile: true },
    { top: "91%", left: "80%", mobile: true },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="text-shade relative overflow-hidden">
      <ScrollVideoEffect />

      {/* Background S  */}
      <div
        className="relative px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-teal-500/10 to-cyan-300/20 backdrop-blur-sm z-0"></div>

        <div className="absolute inset-0 bg-black/10 z-0"></div>

        {/* Main Content Container */}
        <motion.div
          className="relative z-10 mx-auto max-w-[1440px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header Section */}
          <motion.div
            className="mb-12 sm:mb-16 lg:mb-20"
            variants={itemVariants}
          >
            <h4 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight sm:leading-relaxed font-light max-w-md sm:max-w-xl lg:max-w-2xl xl:max-w-3xl">
              Breaking barriers & delivering value for{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                10+ years
              </span>
              .
            </h4>
          </motion.div>

          {/* Stats & Info Section */}
          <motion.div
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 mb-16 sm:mb-20 lg:mb-24"
            variants={itemVariants}
          >
            {/* Stats Column */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 sm:gap-8 lg:gap-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center sm:text-left"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-200 uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Info Column */}
            <div className="flex-1 flex flex-col gap-6 lg:gap-8">
              <motion.p
                className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100 font-light"
                variants={itemVariants}
              >
                Market-leading presence in Nigeria, USA, Ghana, Sierra Leone,
                Liberia, South Africa, Uganda, and Sri Lanka.
              </motion.p>

              <motion.p
                className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100 font-light"
                variants={itemVariants}
              >
                Including: Germany, Kenya, Canada, Austria, Sweden, Belgium,
                Switzerland, Ireland, Spain, South Korea, Japan.
              </motion.p>

              <motion.div variants={itemVariants}>
                <hr className="border-t border-gray-400/50 my-4" />
              </motion.div>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative flex justify-center"
            >
              {/* Map Container */}
              <div className="relative w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
                <img
                  src={icons.map}
                  alt="Global presence map showing worldwide locations"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  loading="lazy"
                  decoding="async"
                />

                {/* Availability Badges */}
                <div className="absolute inset-0">
                  {badgePositions.map((pos, index) => (
                    <motion.div
                      key={index}
                      className={`absolute ${
                        pos.mobile ? "hidden sm:block" : ""
                      }`}
                      style={{
                        top: pos.top,
                        left: pos.left,
                        right: pos.right,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <AvailabilityBadge className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mt-8 lg:mt-12"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Global;
