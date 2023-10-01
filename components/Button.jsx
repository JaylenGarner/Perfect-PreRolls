"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Button = ({ label, path }) => {
  return (
    <Link href={path} className="flex flex_center pt-4">
      <motion.button
        className="primary_button"
        whileHover={{
          backgroundColor: "#FFFFFF",
          color: "#A32C8F",
        }}
        transition={{ duration: 0.5, opacity: 1 }}
      >
        {label}
      </motion.button>
    </Link>
  );
};

export default Button;
