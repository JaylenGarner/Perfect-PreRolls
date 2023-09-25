"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Button = ({ label, path }) => {
  return (
    <motion.button
      className="primary_button"
      initial={{ opacity: 0, scale: 1 }}
      whileHover={{
        scale: 1.1,
        backgroundColor: "#FFFFFF",
        color: "#A32C8F",
      }}
      transition={{ duration: 0.5, opacity: 1 }}
      whileTap={{ scale: 0.8 }}
      animate={{ opacity: 1, transition: { delay: 2.5, duration: 1 } }}
    >
      <Link href={path}>{label}</Link>
    </motion.button>
  );
};

export default Button;
