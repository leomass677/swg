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
      text: "Protect Your Date & Infrastructure",
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
    <div className="flex flex-col w-full py-24 px-8">
      <div className="flex flex-col max-w-[1440px] mx-auto w-full gap-16">
        <div className="text-center flex flex-col items-center justify-center gap-4">
          {" "}
          <h2 className="text-md xl:text-xl uppercase font-light text-center">
            Discover Our Services
          </h2>
          <p className="text-md lg:text-lg xl:text-xl  max-w-md lg:max-w-4xl leading-snug text-center">
            From bespoke software development to IT consultancy, we make sure
            our clients have the right resources to keep up with today’s
            ever-evolving technology landscape.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-10 place-content-center">
          {card.map((items, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative overflow-hidden flex flex-col items-center  cursor-pointer shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] w-full h-fit md:w-[250px] md:h-[150px] lg:w-full lg:h-[160px] xl:h-full xl:py-12 justify-items-center-safe text-center gap-4 p-6 rounded-xl text-[12px] border border-gray-100 bg-shade group"
            >
              <motion.img
                src={items.textImg}
                alt={items.textImg}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-12 h-auto object-center group-hover:blur
            "
              />

              <motion.p
                className="text-sm font-medium :"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {items.title}
              </motion.p>
              <div className="size-16 bg-blue-200 rounded-4xl absolute -top-8 -right-8 skew-30"></div>

              {/* shapes */}

              {/* Hover*/}
              <motion.div
                className="absolute inset-0 flex hover:border-0 gap-2 bg-linear-to-b from-blue-100/20 via-purple-500/10 backdrop-blur-sm to-blue-600/10 rounded-xl overflow-hidden text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <img
                  src={items.img}
                  alt={items.img}
                  className=" h-auto w-[50%] object-cover
                "
                />
                <div className="flex-1 gap-4 flex flex-col  w-full h-full justify-between py-8 group">
                  <p
                    className="text-[12px md:text-[14px] font-Dm-sans text-start  px-1.5 font-semibold  leading-snug text-grey-900
                   "
                  >
                    {items.text}
                  </p>
                  <MdOutlineKeyboardArrowRight className="transition-all duration-500 ease-in-out text-dark text-2xl opacity-0 scale-0 group-hover:translate-x-full group-hover:scale-110 group-hover:opacity-100" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverSservices;
