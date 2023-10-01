"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="h-screen">
      <Hero heading={"Our Services"} image={"bg-green-cannabis"} />
      <motion.div
        className="flex flex-col items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex space-x-8 pt-16 pb-16 ">
          <Link href={"/packaging-machine"}>
            <Card className="service_card bg-placeholder-machine">
              <h3>Patented</h3>
              <h3>Packaging</h3>
              <h3>Machine</h3>
            </Card>
          </Link>
          <Card className="service_card bg-placeholder-joints">
            <h3>Contract</h3>
            <h3>Packing</h3>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
