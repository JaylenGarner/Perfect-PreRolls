"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div>
      <Hero heading={"Our Services"} image={"bg-sunset"} />
      <motion.div
        className="flex flex-col items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center pt-16 pb-16 flex-wrap space-x-8">
          <Link href={"/packaging-machine"}>
            <div className="flex flex-col items-center bg-slate-800 h-[500px] w-[500px] p-4 pt-8 rounded-lg hover:opacity-80 transition-opacity duration-300">
              <h2 className="text-4xl">Patended Packaging Machine</h2>
              <div className="h-full w-full flex flex_center">
                <img
                  src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/loader-front-transparent.png"
                  className="mb-8"
                />
              </div>
              {/* <Card className="service_card bg-machine-front max-sm:bg-machine-front"></Card> */}
            </div>
          </Link>

          <Link href={"/contract-packing"}>
            <div className="flex flex-col items-center bg-placeholder-joints-dark bg-cover bg-center  h-[500px] w-[500px] p-4 pt-8 rounded-lg hover:opacity-80 transition-opacity duration-300">
              <h2 className="text-4xl">Contract Packing</h2>
              <div className="h-full w-full flex flex_center">
                {/* <img
                  src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/loader-front-transparent.png"
                  className="mb-8"
                /> */}
              </div>
              {/* <Card className="service_card bg-machine-front max-sm:bg-machine-front"></Card> */}
            </div>
          </Link>

          {/* <Link href={"/contract-packing"}>
            <Card className="service_card bg-placeholder-joints max-sm:bg-placeholder-joints-dark">
              <h3>Contract</h3>
              <h3>Packing</h3>
            </Card>
          </Link> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
