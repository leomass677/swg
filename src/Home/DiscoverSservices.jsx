import React from "react";

const DiscoverSservices = () => {
  const card = [
    {
      title: "Appliction Service Provider",
      img: {},
      linkTo: "",
    },
    {
      title: "IT Consulting",
      img: {},
      linkTo: "/",
    },
    {
      title: "Bespoke Technology Innovation",
      img: {},
      linkTo: "/",
    },
    {
      title: "Automation Service",
      img: {},
      linkTo: "/",
    },
    {
      title: "Infrastructure Service",
      img: {},
      linkTo: "/",
    },
    {
      title: "Digital Commerce",
      img: {},
      linkTo: "/",
    },
    {
      title: "Customer Experience",
      img: {},
      linkTo: "/",
    },
    {
      title: "Security Solutions",
      img: {},
      linkTo: "/",
    },
    {
      title: "Sustainability Consulting & Solutions",
      img: {},
      linkTo: "/",
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
    </div>
  );
};

export default DiscoverSservices;
