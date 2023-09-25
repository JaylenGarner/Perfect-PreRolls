"use client";

const menuItems = [
  { page: "Home", path: "/" },
  { page: "Services", path: "/services" },
  { page: "About Us", path: "/about" },
  { page: "Contact", path: "/contact" },
];

import MenuItem from "./MenuItem";
import Link from "next/link";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.div
      className="w-full h-[150px] absolute top-0 flex items-center justify-center space-x-20 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Link href="/" passHref>
        <div className="flex items-center space-x-4">
          <motion.img
            src="images/logo.png"
            className="w-20"
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
