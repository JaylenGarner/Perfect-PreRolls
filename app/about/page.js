"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";
import { bebasNeue } from "@/lib/fonts";

const About = () => {
  return (
    <div>
      <Hero heading={"About Us"} image={"bg-purple-cannabis"} />
      <motion.div
        className="flex flex-col items-center pt-8 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="content_body">
          <p>
            Perfect PreRolls LLC plans to revolutionize the Cannabis industry by
            offering the only filling machine that can pack papers of any size
            and shape. Our patent pending machines are fast, efficient, and
            customizable all while only taking up the space of a laptop. Our
            machines are easy to use and programmable so you can fine tune your
            settings and make perfect pre-rolls tailored to you and/or your
            consumer.
          </p>

          <p>
            We spent years researching and developing a new solution for any and
            all filling/packing needs. The process was long and tedious due to
            the properties and variability of cannabis flower. We went through
            numerous iterations including some concepts that had to be scrapped
            completely. We invented scientific tests to ensure the progress,
            quality, and consistency of our machines. We are proud of what we
            have accomplished and are excited to share it with the world.
          </p>

          <p>Happy packing!</p>

          <p>
            We are currently doing testing so we can have a better understanding
            of the long-term durability and repeatability of our machines.
            Subscribe to our
            <Link href={"/#sign_up_form"} className="text-[#C1FF00]">
              {" "}
              newsletter
            </Link>{" "}
            for updates on pre-order availability. Until then, you can{" "}
            <Link href={"/contact"} className="text-[#C1FF00]">
              contact us{" "}
            </Link>{" "}
            about seeing a demonstration or consider our contract packing.
          </p>

          <Link
            href={"/services"}
            className={`flex flex_center pt-4 ${bebasNeue.className}`}
          >
            <motion.button
              className="button"
              transition={{ duration: 0.5, opacity: 1 }}
            >
              Services
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
