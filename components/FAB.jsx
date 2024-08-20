"use client";

import Link from "next/link";
import { motion, spring } from "framer-motion";

const FAB = () => {
  return (
    <Link href="/#sign_up_form">
      <motion.div
        className="fab"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
      >
        <img src="/bell-icon.png" className="max-sm:w-6 w-8" />
      </motion.div>
    </Link>
  );
};

export default FAB;
