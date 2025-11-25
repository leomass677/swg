import React from "react";
import WorkWithYouLink from "../component/WorkWithYouLink";
import { motion } from "framer-motion";
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
const Automated = () => {
  return (
    <div className=" ">
      {" "}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-blue-950 text-shade">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our Team and be a part of our Success Story!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WorkWithYouLink className="text-shade font-medium " />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Automated;
