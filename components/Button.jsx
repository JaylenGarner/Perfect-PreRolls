"use client";

import { motion } from "framer-motion";

const Button = () => {
  return (
    <motion.button
      className="primary_button"
      whileHover={{
        scale: 1.1,
        backgroundColor: "#FFFFFF",
        color: "#A32C8F",
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.8,
      }}
    >
      Learn More
    </motion.button>
  );
};

export default Button;
