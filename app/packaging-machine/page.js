"use client";

import Hero from "@/components/Hero";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const PackagingMachine = () => {
  return (
    <div className="h-screen max-w-screen">
      <Hero
        heading={"Patented Packaging Machine"}
        image={"bg-placeholder-machine"}
      />
      <motion.div
        className="flex flex-col items-center pt-16 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl w-1/3 text-center text-bold">
          Our machine is the comprehensive solution, accommodating businesses of
          all sizes
        </h2>

        <div className="pt-8 flex  justify-center flex-wrap">
          <Card className="service_info_card">
            <CardHeader className="flex justify-center items-center text-center ">
              <CardTitle className="tracking-wide text-5xl">
                Versatile
              </CardTitle>
              <CardDescription className="text-center text-3xl pt-4">
                Adjust results with this multifunctional machine; it packages
                any size or shape pre-roll, offering adaptability and varied
                functions
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="service_info_card">
            <CardHeader className="flex justify-center items-center text-center ">
              <CardTitle className="tracking-wide text-5xl">Portable</CardTitle>
              <CardDescription className="text-center text-3xl pt-4">
                Compact and sleek, our machine takes up no more space than a
                laptop, providing you with convenience, layout flexibility, and
                cost-effectiveness
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="service_info_card">
            <CardHeader className="flex justify-center items-center text-center ">
              <CardTitle className="tracking-wide text-5xl">
                User Friendly
              </CardTitle>
              <CardDescription className="text-center text-3xl pt-4">
                Operation is intuitive, requiring minimal to no training, making
                it accessible and user-friendly for everyone
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="service_info_card">
            <CardHeader className="flex justify-center items-center text-center ">
              <CardTitle className="tracking-wide text-5xl">
                Highly Efficient
              </CardTitle>
              <CardDescription className="text-center text-3xl pt-4">
                Produces perfectly packed pre-rolls quickly and easily
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <h2 className="text-3xl text-center pt-8 pb-8 flex">
          <span className="text-[#1AAE70] cursor-pointer">
            Contact us&nbsp;
          </span>
          today to learn more about our Patented Pre-roll packing machine
        </h2>
      </motion.div>
    </div>
  );
};

export default PackagingMachine;
