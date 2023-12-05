"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <main className="min-h-screen 0 flex flex-col">
      {/* Display animation on desktop */}
      <motion.div
        className="w-full h-[50vh] md:max-h-[700px] max-md:max-h-[400px] flex justify-center mb-16 max-md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          autoPlay
          controls={false}
          loop
          muted
          playsInline
          className=" object-cover object-right h-full max-h-[700px] pt-4 mt-8"
        >
          <source
            src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/loader-360-animation.mp4"
            className="max-md:hidden"
          />
        </video>
      </motion.div>

      <motion.div
        className="w-full h-[50vh] md:max-h-[700px] max-md:max-h-[400px] flex justify-center mb-16 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Display static image on mobile and tablet */}
        <img
          src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/machine-front.png"
          className="object-cover object-right h-full max-h-[400px] pt-4 mt-8"
          alt="Cannabis pre-rolling machine"
        />
      </motion.div>

      <motion.div className="flex justify-center md:space-x-12  max-md:flex-col lg:text-6xl max-lg:text-5xl max-md:space-y-2 max-md:items-center">
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
      </motion.div>

      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3.2 }}
      >
        <Link href={"/about"} className="flex flex_center pb-16 pt-8">
          <motion.button
            className="primary_button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.5, duration: 0.6 } }}
            transition={{ duration: 0.5, opacity: 1 }}
          >
            Learn More
          </motion.button>
        </Link>

        <div className="flex justify-center items-center text-6xl flex-col w-full border-t pt-16 ">
          <h2>Sign up to our newsletter</h2>
          <NewsletterForm />
        </div>
      </motion.div>
    </main>
  );
}
