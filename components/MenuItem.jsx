"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MenuItem = ({ item }) => {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ borderBottom: "2px solid transparent", opacity: 1 }}
      whileHover={{ borderBottom: "2px solid #FFFFFF", opacity: 0.8 }}
      style={{ position: "relative", transition: "border-bottom 0.3s ease-in" }}
    >
      <Link href={item.path}>{item.page}</Link>
    </motion.div>
  );
};

export default MenuItem;
