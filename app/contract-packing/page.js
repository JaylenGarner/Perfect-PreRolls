"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";

const ContractPacking = () => {
  return (
    <div className="h-screen">
      <Hero heading={"Contract Packing"} image={"bg-placeholder-joints"} />

      <motion.div
        className="flex flex-col items-center pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="content_body">
          <p>
            We specialize in providing high-quality pre-rolled packing services
            for dispensaries looking to outsource the filling/packing process.
            Our state-of-the-art patented machine can pack a large number of
            cigarettes/cones etc in a short amount of time, ensuring that your
            product is ready for sale quickly and efficiently.
          </p>

          <h2 className="text-3xl text-center pb-8 p-4">
            <span className="text-[#1AAE70] cursor-pointer">
              Contact us&nbsp;
            </span>
            today to learn more about our Patented Pre-roll packing machine
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export default ContractPacking;
