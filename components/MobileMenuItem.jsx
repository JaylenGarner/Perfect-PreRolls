"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MobileMenuItem = ({ item, setIsOpen }) => {
  return (
    <div className="pr-4 pl-4 pt-2 pb-2 flex flex-col items-center">
      <Link href={item.path} key={item.page}>
        <motion.span
          className="text-3xl text-center w-full"
          whileTap={{ opacity: 50 }}
          onClick={() => setIsOpen(false)}
        >
          {item.page}
        </motion.span>
      </Link>
    </div>
  );
};

export default MobileMenuItem;
