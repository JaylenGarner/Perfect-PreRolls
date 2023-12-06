"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";

const ContractPacking = () => {
  return (
    <div>
      <Hero heading={"Contract Packing"} image={"bg-packed-banner"} />

      <motion.div
        className="flex flex-col items-center pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="content_body">
          <p>
            We specialize in providing high-quality pre-rolled packing services
            for dispensaries or producers looking for a filling/packing
            solution. Our state-of-the-art patent pending machines, doing
            multiple units at a time, can pack any shape or size cigarette/cone
            in a short amount of time ensuring that your product is ready for
            sale quickly and efficiently.
          </p>

          <Link href={"/contact"}>
            <h2 className="text-3xl text-center p-8 ">
              <span className="text-[#C1FF00]">Contact us&nbsp;</span>
              today for a demonstration or to learn more about our packing
              services.
            </h2>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ContractPacking;
