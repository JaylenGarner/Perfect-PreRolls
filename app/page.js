"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// import { words } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen 0 flex ">
      <motion.div
        className="w-full h-[50vh] bg-gradient-to-b from-[#474747]  to-[#020817] flex justify-center pt-8 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/loader-front-image-transparent.png"
          className="cover"
        ></img>
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
