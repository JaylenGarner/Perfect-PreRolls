"use client";

import Hero from "@/components/Hero";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cards } from "@/lib/data";

const PackagingMachine = () => {
  return (
    <div className="h-screen max-w-screen">
      <Hero
        heading={"Patented Packaging Machine"}
        image={"bg-placeholder-machine"}
      />
      <motion.div
        className="flex flex-col items-center pt-16 pr-4 pl-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl max-md:text-4xl md:w-3/5 max-md:w-full text-center text-bold max-md:pr-8 max-md:pl-8">
          Our machine is the comprehensive solution, accommodating businesses of
          all sizes
        </h2>

        <div className="pt-8 flex  justify-center flex-wrap">
          {cards.map((card) => {
            return (
              <Card className="service_info_card" key={card.title}>
                <CardHeader className="flex justify-center items-center text-center ">
                  <CardTitle className="tracking-wide text-5xl max-md:text-3xl">
                    {card.title} &nbsp;
                    <FontAwesomeIcon icon={card.icon} />
                  </CardTitle>
                  <CardDescription className="text-center text-3xl pt-4 max-md:text-2xl">
                    {card.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <h2 className="text-3xl text-center p-4 md:pt-8 pb-8">
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
