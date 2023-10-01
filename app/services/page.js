"use client";

import Hero from "@/components/Hero";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="h-screen">
      <Hero heading={"Our Services"} image={"bg-green-cannabis"} />
      <motion.div
        className="flex flex-col items-center pt-16 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl">Coming Soon</h2>

        <div className="flex space-x-8"></div>
      </motion.div>
    </div>
  );
};

export default Services;
