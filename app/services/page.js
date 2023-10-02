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
        <div className="flex justify-center pt-16 pb-16 flex-wrap ">
          <Link href={"/packaging-machine"}>
            <Card className="service_card bg-placeholder-machine max-sm:bg-placeholder-machine-dark">
              <h3>Patented</h3>
              <h3>Packaging</h3>
              <h3>Machine</h3>
            </Card>
          </Link>

          <Link href={"/contract-packing"}>
            <Card className="service_card bg-placeholder-joints max-sm:bg-placeholder-joints-dark">
              <h3>Contract</h3>
              <h3>Packing</h3>
            </Card>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
