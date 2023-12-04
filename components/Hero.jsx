"use client";

import { motion } from "framer-motion";

const Hero = ({ heading, image }) => {
  return (
    <motion.div
      className={`w-[100vw] text-center flex_center bg-cover bg-center ${image} h-[50vh] bg-blend-darken bg-black bg-opacity-60 z-0 pl-2 pr-2`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-7xl max-sm:text-5xl">{heading}</h1>
    </motion.div>
  );
};

export default Hero;
