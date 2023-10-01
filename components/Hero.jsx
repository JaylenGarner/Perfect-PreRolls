"use client";

import { motion } from "framer-motion";

const Hero = ({ heading, image }) => {
  return (
    <motion.div
      className={`w-full flex_center bg-cover ${image} h-2/5 bg-blend-darken bg-black bg-opacity-60 z-0`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-7xl">{heading}</h1>
    </motion.div>
  );
};

export default Hero;
