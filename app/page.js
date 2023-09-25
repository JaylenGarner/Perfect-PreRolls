"use client";

import Button from "@/components/Button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <motion.div
        className="min-h-screen bg-cannabis-cover bg-cover bg-blend-darken bg-black bg-opacity-50 flex_center flex-col font-bold text-[90px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          ANY SIZE
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          ANY SHAPE
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          ANY WHERE
        </motion.span>
        <Button label={"Learn More"} path={"/about"} />
      </motion.div>
    </main>
  );
}
