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
            <div className="flex flex-col items-center  h-[500px] w-[500px] max-sm:w-[350px] max-sm:h-[350px] p-8 rounded-xl hover:opacity-80 transition-opacity duration-300 border border-slate-800 overflow-contain">
              <h2 className="text-4xl text-center">Patended Packing Machine</h2>
              <img
                src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/machine-front.png"
                className="w-5/6"
                alt="Cannabis pre-rolling machine"
              />
            </div>
          </Link>

          <Link href={"/contract-packing"}>
            <div className="flex flex-col items-center  h-[500px] w-[500px] max-sm:w-[350px] max-sm:h-[350px] p-8  rounded-xl hover:opacity-80 transition-opacity duration-300 border border-slate-800">
              <h2 className="text-4xl text-center">Contract Packing</h2>
              <div className="flex flex_center h-full w-full">
                <img
                  src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/packed-magazine-transparent.png"
                  className="w-3/4"
                  alt="Rolled marijuana cigarettes"
                />
              </div>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
