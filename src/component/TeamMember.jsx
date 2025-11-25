import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const TeamMember = ({ name, role, image, bio }) => {
  return (
    <motion.div
      className="text-center group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative mb-6 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-shade p-2 rounded-full hover:bg-blue-100 transition-colors">
            <Linkedin size={16} className="text-blue-600" />
          </button>
          <button className="bg-shade p-2 rounded-full hover:bg-blue-100 transition-colors">
            <Twitter size={16} className="text-blue-400" />
          </button>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-blue-600 font-semibold mb-3">{role}</div>
      <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
    </motion.div>
  );
};

export default TeamMember;
