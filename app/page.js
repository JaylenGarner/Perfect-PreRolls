"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <motion.div
        className="min-h-screen bg-cannabis-cover bg-center bg-cover bg-blend-darken bg-black bg-opacity-50 flex_center flex-col font-bold text-[90px] max-md:text-[70px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          ANY SIZE
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
        >
          ANY SHAPE
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.9 }}
        >
          ANY WHERE
        </motion.span>

        <Link href={"/about"} className="flex flex_center pt-4">
          <motion.button
            className="primary_button"
            initial={{ opacity: 0 }}
            whileHover={{
              backgroundColor: "#FFFFFF",
              color: "#A32C8F",
            }}
            animate={{ opacity: 1, transition: { delay: 2.5, duration: 0.6 } }}
            transition={{ duration: 0.5, opacity: 1 }}
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}
