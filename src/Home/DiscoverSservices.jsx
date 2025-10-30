import { div, img } from "framer-motion/client";
import React from "react";

const DiscoverSservices = () => {
  const card = [
    {
      title: "Appliction Service Provider",
      img: {},
      linkTo: "",
      text: "",
      textImg: {},
    },
    {
      title: "IT Consulting",
      img: {},
      linkTo: "/",
      text: "",
      textImg: {},
    },
    {
      title: "Bespoke Technology Innovation",
      img: {},
      linkTo: "/",
      text: "",
      textImg: {},
    },
    {
      title: "Automation Service",
      img: {},
      linkTo: "/",
      text: "",
      textImg: {},
    },
    {
      title: "Infrastructure Service",
      img: {},
      linkTo: "/",
      text: "",
      textImg: {},
    },
    {
      title: "Digital Commerce",
      img: {},
      linkTo: "/",
      text: "",
      textImg: {},
    },
    {
      title: "Customer Experience",
      img: {},
      linkTo: "/",
      text: "",
      textImg: {},
    },
    {
      title: "Security Solutions",
      img: {},
      linkTo: "/",
      text: "",
      textImg: {},
    },
    {
      title: "Sustainability Consulting & Solutions",
      img: {},
      linkTo: "/",
      text: "",
      textImg: {},
    },
  ];
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col justify-center gap-6 mt-16">
      <div className="text-center flex flex-col items-center justify-center gap-4">
        {" "}
        <h2 className="text-md uppercase font-light text-center">
          Discover Our Services
        </h2>
        <p className="text-md sm:text-md md:text-2xl lg:text-2xl max-w-md lg:max-w-lg xl:max-w-3xl leading-snug text-center">
          From bespoke software development to IT consultancy, we make sure our
          clients have the right resources to keep up with today’s ever-evolving
          technology landscape.
        </p>
      </div>
      <div>
        {card.map((items, key) => (
          <div key={key}>
            <img src={items.img} alt={items.img} />
            <p>{items.title}</p>
            {/* hover */}
            <div>
              <img src={items.textImg} alt={items.textImg} />
              <p>{items.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverSservices;
