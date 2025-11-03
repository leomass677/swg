import React, { useRef } from "react";
import { motion } from "framer-motion";
import { video } from "../assets/video";

const ContentBlock = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 text-center bg-black/40 backdrop-blur-sm"
  >
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white max-w-4xl">
      {title}
    </h1>
    <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl text-gray-200">
      {description}
    </p>
  </motion.div>
);

const ScrollVideoEffect = () => {
  const scrollRef = useRef(null);

  return (
    <section
      ref={scrollRef}
      className="relative w-full h-screen bg-transparent text-white overflow-y-scroll no-scrollbar"
    >
      {/* Sticky video background */}
      <video
        src={video.AI_medium}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover sticky top-0 z-0"
      />

      {/* Scrolling content blocks */}
      <div className="relative z-20">
        <ContentBlock
          title="Where Ideas Code the Future"
          description="Empowering governments, educators, and healthcare providers with tailored software and robust IT infrastructure."
        />
        <ContentBlock
          title="Digital Solutions That Matter"
          description="From concept to impact, we build scalable platforms that drive transformation across public and private sectors."
        />
      </div>
    </section>
  );
};

export default ScrollVideoEffect;
