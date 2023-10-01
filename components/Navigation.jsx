"use client";

import MenuItem from "./MenuItem";
import Link from "next/link";
import { motion } from "framer-motion";
import { menuItems } from "@/lib/data";

const Navigation = () => {
  return (
    <motion.div
      className="navigation_desktop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Link href="/" passHref>
        <div className="flex items-center space-x-4">
          <motion.img
            src="images/logo.png"
            className="w-14"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.7 }}
          ></motion.img>
        </div>
      </Link>

      <div className="flex space-x-6 text-3xl">
        {menuItems.map((item) => {
          return <MenuItem item={item} key={item.page} />;
        })}
      </div>
    </motion.div>
  );
};

export default Navigation;
