import React, { useRef } from "react";
import { motion } from "framer-motion";
import { video } from "../assets/video";
import images from "../assets/images";

const ContentBlock = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="h-screen flex flex-col bg-dark/20 items-center justify-center px-4 text-center"
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
      {title}
    </h1>
    <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl text-gray-200">
      {description}
    </p>
  </motion.div>
);

const ScrollVideoEffect = () => {
  const scrollRef = useRef(null);

  return (
    <section
      ref={scrollRef}
      className="relative w-full h-[100vh] bg-transparent text-white overflow-y-scroll no-scrollbar"
    >
      {/* Sticky at top-2 */}
      <video
        src={video.AI_medium}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover sticky top-0 z-0"
      />

      {/* Scrolling element */}
      <ContentBlock
        title="Where Ideas Code the Future"
        description="Empowering governments, educators, and healthcare providers with tailored software and robust IT infrastructure."
      />
      <ContentBlock
        title="Digital Solutions That Matter"
        description="From concept to impact, we build scalable platforms that drive transformation across public and private sectors."
      />
    </section>
  );
};

export default ScrollVideoEffect;
