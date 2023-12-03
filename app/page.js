"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// import { words } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen 0 flex flex-col">
      <motion.div
        className="w-full h-[50vh]  flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* <img
          src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/loader-front-image-transparent.png"
          className="cover"
        ></img> */}

        <video
          autoPlay
          controls={false}
          loop
          muted
          className=" object-cover object-right h-full pt-4"
        >
          <source src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/loader-360-animation.mp4" />
        </video>
      </motion.div>

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
