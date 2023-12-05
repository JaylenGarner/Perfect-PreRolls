"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div>
      <Hero heading={"Our Services"} image={"bg-sunset"} />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center pt-16 pb-16 flex-wrap lg:space-x-8 max-lg:space-y-8 ">
          <Link href={"/packaging-machine"}>
            <motion.div
              transition={{ duration: 0.7 }}
              initial={{
                background: "linear-gradient(to top right, #1e1e1e, #1e1e1e)",
              }}
              whileHover={{
                opacity: 0.95,
                background: "linear-gradient(to top right, #C1FF00 ,  #030303)",
              }}
              className="flex flex-col items-center  h-[500px] w-[500px] max-sm:w-[350px] max-sm:h-[350px] p-8 rounded-xl  duration-500 border border-[#C1FF00] overflow-contain"
            >
              <h2 className="text-4xl text-center">Patented Packing Machine</h2>
              <img
                src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/machine-front.png"
                className="w-5/6"
                alt="Cannabis pre-rolling machine"
              />
            </motion.div>
          </Link>

          <Link href={"/contract-packing"}>
            <motion.div
              className="flex flex-col items-center  h-[500px] w-[500px] max-sm:w-[350px] max-sm:h-[350px] p-8 rounded-xl  duration-500 border border-[#C1FF00] overflow-contain"
              transition={{ duration: 0.7 }}
              initial={{
                background: "linear-gradient(to top right, #1e1e1e, #1e1e1e)",
              }}
              whileHover={{
                opacity: 0.95,
                background: "linear-gradient(to top right, #C1FF00 ,  #030303)",
              }}
            >
              <h2 className="text-4xl text-center">Contract Packing</h2>
              <div className="flex flex_center h-full w-full">
                <img
                  src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/packed-magazine-transparent.png"
                  className="w-4/6"
                  alt="Rolled marijuana cigarettes"
                />
              </div>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
