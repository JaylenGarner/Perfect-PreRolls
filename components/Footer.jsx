"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="border-t border-slate-900 flex flex-col items-center">
      <div className="pt-8 space-y-2 text-3xl flex flex-col items-center">
        <span>Developed By</span>
        <Link href="https://moonraydevelopment.com/" target="_blank">
          <motion.img
            src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/moonray-logo.svg"
            className="w-[100px]"
            whileHover={{ opacity: 0.6, transition: { duration: 0.6 } }}
          />
        </Link>
      </div>
      <span className="text-xl text-slate-400 p-4 text-center">
        2023 © Perfect PreRolls. All rights reserved
      </span>
    </div>
  );
};

export default Footer;
