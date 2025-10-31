import React, { useState } from "react";
import Hero from "../Home/Hero";
import GlobalProvider from "../Home/GlobalProvider";
import BreakingBarriers from "../Home/BreakingBarriers";
import DiscoverSservices from "../Home/DiscoverSservices";
import PowerfulEsolutions from "../Home/PowerfulEsolutions";
import VendorFinancing from "../Home/VendorFinancing";
import Partners from "../Home/Partners";
import WhyChoose from "../Home/WhyChoose";
import Testimonials from "../Home/Testimonials";

const Home = () => {
  return (
    <div className="py-12   flex flex-col justify-center">
      <Hero />
      <GlobalProvider />
      <DiscoverSservices />
      <PowerfulEsolutions />
    </div>
  );
};

export default Home;
