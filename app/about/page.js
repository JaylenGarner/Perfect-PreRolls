"use client";

import Hero from "@/components/Hero";
import Button from "@/components/Button";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="h-screen">
      <Hero heading={"About Us"} image={"bg-purple-cannabis"} />
      <motion.div
        className="flex flex-col items-center pt-8 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center w-1/3 pt-8 text-3xl space-y-8 pb-16">
          <p>
            Perfect PreRolls LLC plans to revolutionize the cannabis industry by
            offering the only filling machine that can pack papers of any size
            and shape. Our patented machines are fast, efficient, and
            customizable all while only taking up the space of a laptop. Our
            machines are easy to use and programmable so you can fine tune your
            settings and make perfect prerolls tailored to you and/or your
            consumer.
          </p>

          <p>
            We spent years researching and developing a new technology to solve
            any and all filling/packing needs. The process was long and tedious
            due to the properties and variability of cannabis flower. We went
            through numerous iterations including some concepts that had to be
            completely scrapped. We had to invent scientific tests to be sure
            that progress was being made and that what we had was working. We
            are proud of what we have accomplished and are excited to share it
            with the world. Happy packing.
          </p>
          <p>
            We are currently putting the machine through its paces so we can
            have a better understanding of the long term use of the machine.
            When we feel as though the machine is ready to be sold, we will let
            it be known. Until then, please consider our contract packing to
            help prove the machine and get a more desirable product out on the
            market for you and your consumers.
          </p>

          <Link href={"/services"} className="flex flex_center pt-4">
            <motion.button
              className="primary_button"
              whileHover={{
                backgroundColor: "#FFFFFF",
                color: "#A32C8F",
              }}
              transition={{ duration: 0.5, opacity: 1 }}
            >
              Our Services
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
