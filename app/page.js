"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// import { words } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen 0 flex flex-col">
      <motion.div
        className="w-full h-[50vh] md:max-h-[700px] max-md:max-h-[400px] flex justify-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Display animation on desktop */}
        <video
          autoPlay
          controls={false}
          loop
          muted
          className=" object-cover object-right h-full max-h-[700px] pt-4 mt-8 max-md:hidden"
        >
          <source src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/loader-360-animation.mp4" />
        </video>

        {/* Display static image on mobile and tablet */}
        <img
          src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/machine-front.png"
          className="object-cover object-right h-full max-h-[400px] pt-4 mt-8 md:hidden"
        />
      </motion.div>

      <motion className="flex justify-center md:space-x-12  max-md:flex-col lg:text-6xl max-lg:text-5xl max-md:space-y-2 max-md:items-center">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        >
          ANY SIZE.
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.6 }}
        >
          ANY SHAPE.
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.4 }}
        >
          ANYWHERE.
        </motion.h3>
      </motion>

      {/* <Link href={"/about"} className="flex flex_center pt-4">
          <motion.button
            className="primary_button"
            initial={{ opacity: 0 }}
            whileHover={{
              backgroundColor: "#FFFFFF",
              color: "#A32C8F",
            }}
            animate={{ opacity: 1, transition: { delay: 2.5, duration: 0.6 } }}
            transition={{ duration: 0.5, opacity: 1 }}
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div> */}
    </main>
  );
}
