import React from "react";
import images from "../assets/images";
import { motion } from "framer-motion";
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
    <div className="max-w-[1440px] mx-auto flex flex-col justify-center gap-6 mt-16">
      <div className="text-center flex flex-col items-center justify-center gap-4">
        {" "}
        <h2 className="text-md uppercase font-light text-center">
          Discover Our Services
        </h2>
        <p className="text-md  max-w-md lg:max-w-4xl leading-snug text-center">
          From bespoke software development to IT consultancy, we make sure our
          clients have the right resources to keep up with today’s ever-evolving
          technology landscape.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-content-center">
        {card.map((items, key) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex flex-col items-center cursor-pointer shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] w-[250px] h-[150px] justify-items-center-safe text-center gap-4 p-6 rounded-xl text-[12px] border border-gray-100 bg-shade group"
          >
            <motion.img
              src={items.textImg}
              alt={items.textImg}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-12 h-auto object-center"
            />

            <motion.p
              className="text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {items.title}
            </motion.p>

            {/* shapes */}
            <div className="absolute -top-0 -left-0 w-10 h-20 bg-blue-400 rounded-tl-2xl -z-10 opacity-0 group-hover:translate-4"></div>
            <div className="bg-blue-400 w-20 h-20 absolute rounded-tr-xl rounded-bl-xl rounded-xs -z-10 bottom-10 right-10 opacity-0"></div>

            {/* Hover*/}
            <motion.div
              className="absolute inset-0 flex hover:border-0 gap-2 bg-linear-to-b from-blue-100/60 via-purple-500/80 backdrop-blur-sm to-blue-600/40 rounded-xl overflow-hidden text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <img
                src={items.img}
                alt={items.img}
                className=" h-auto w-[50%] object-cover
                "
              />
              <p className="text-[12px] md:text-[14px] self-center px-1 font-medium leading-tight text-shade flex-1">
                {items.text}
                {console.log(items.text)}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverSservices;
