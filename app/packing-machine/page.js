"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { cards } from "@/lib/data";
import { bebasNeue } from "@/lib/fonts";

const PackagingMachine = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/#newsletter");
  };

  return (
    <div className=" max-w-screen">
      <Hero heading={"Patented Packing Machine"} image={"bg-machine-banner"} />
      <motion.div
        className="flex flex-col items-center pt-16 pr-4 pl-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2
          className={`text-5xl max-md:text-4xl md:w-1/2  max-md:w-3/4 text-center text-bold ${bebasNeue.className}`}
        >
          Our machine is the comprehensive solution, accommodating businesses of
          all sizes
        </h2>

        <div className="pt-8 flex justify-center flex-wrap md:w-full">
          {cards.map((card) => {
            return (
              <Card className="packing_info_card " key={card.title}>
                <CardHeader className="flex justify-center items-center text-center">
                  <CardTitle
                    className={`tracking-wide text-5xl max-md:text-3xl ${bebasNeue.className}`}
                  >
                    {card.title} &nbsp;
                    <FontAwesomeIcon icon={card.icon} />
                  </CardTitle>
                  <CardDescription className="text-center text-3xl pt-4 max-sm:text-2xl text-slate-300">
                    {card.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <Link href={"/contact"}>
          <h2 className="text-3xl text-center pt-8 p-4">
            <span className="text-[#C1FF00] cursor-pointer">
              Contact us&nbsp;
            </span>
            today for a demonstration or to learn more about our patented
            machines.
          </h2>
        </Link>

        <Link href={"/"} onClick={handleClick}>
          <h2 className="text-3xl text-center p-4  pb-8">
            Subscribe to our
            <span className="text-[#C1FF00] cursor-pointer">
              &nbsp;newsletter&nbsp;
            </span>
            for updates on pre-order availability.
          </h2>
        </Link>
      </motion.div>
    </div>
  );
};

export default PackagingMachine;
