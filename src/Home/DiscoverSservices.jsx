import React from "react";
import images from "../assets/images";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const DiscoverSservices = () => {
  const card = [
    {
      title: "Appliction Service Provider",
      img: images.application_service,
      linkTo: "/",
      text: "Unlock Your Application's Full Potential",
      textImg: images.application_service_icon,
    },
    {
      title: "IT Consulting",
      img: images.it_consulting,
      linkTo: "/",
      text: "Drive Value with Expertise",
      textImg: images.it_consulting_icon,
    },
    {
      title: "Bespoke Technology Innovation",
      img: images.bespoke_tech,
      linkTo: "/",
      text: "You Think It, We Build It",
      textImg: images.bespoke_tech_icon,
    },
    {
      title: "Automation Service",
      img: images.automaion_service,
      linkTo: "/",
      text: "Ignite Your Digital Transformation",
      textImg: images.application_service_icon,
    },
    {
      title: "Infrastructure Service",
      img: images.infastructure_service,
      linkTo: "/",
      text: "Your Trusted IT Provider",
      textImg: images.infastructure_service_icon,
    },
    {
      title: "Digital Commerce",
      img: images.digital_commerce,
      linkTo: "/",
      text: "Achieve Lasting Financial Success",
      textImg: images.digital_commerce_icon,
    },
    {
      title: "Customer Experience",
      img: images.customer_exp,
      linkTo: "/",
      text: "Make Your Customers Happy",
      textImg: images.customer_exp_icon,
    },
    {
      title: "Security Solutions",
      img: images.security_solution,
      linkTo: "/",
      text: "Protect Your Data & Infrastructure",
      textImg: images.security_solution_icon,
    },
    {
      title: "Sustainability Consulting & Solutions",
      img: images.sustainability,
      linkTo: "/",
      text: "Build Profitable Future",
      textImg: images.sustainability_icon,
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 px-4">
          <h2 className="text-sm sm:text-base md:text-lg xl:text-xl uppercase font-light tracking-wide">
            Discover Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl max-w-3xl leading-snug text-gray-700">
            From bespoke software development to IT consultancy, we make sure
            our clients have the right resources to keep up with today’s
            ever-evolving technology landscape.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-10 place-content-center">
          {card.map((item, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative overflow-hidden flex flex-col items-center justify-between cursor-pointer shadow-md w-full h-full p-6 rounded-xl text-center gap-4 border border-gray-100 bg-shade group"
            >
              {/* Icon */}
              <motion.img
                src={item.textImg}
                alt={item.title}
                loading="lazy"
                decoding="async"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-12 h-12 object-contain group-hover:blur-sm"
              />

              {/* Title */}
              <motion.p
                className="text-sm font-medium text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {item.title}
              </motion.p>

              {/*Shape */}
              <div className="size-16 bg-blue-200 rounded-4xl absolute -top-8 -right-8 skew-30"></div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 flex gap-2 bg-gradient-to-b from-blue-100/20 via-purple-500/10 to-blue-600/10 backdrop-blur-sm rounded-xl overflow-hidden text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-1/2 h-auto object-cover"
                />
                <div className="flex-1 flex flex-col justify-between py-6 px-2 text-start">
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                    {item.text}
                  </p>
                  <MdOutlineKeyboardArrowRight className="text-dark text-2xl opacity-0 scale-0 group-hover:translate-x-full group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSservices;
