"use client";

import Link from "next/link";
import MachineAnimation from "@/components/MachineAnimation";
import NewsletterForm from "@/components/NewsletterForm";
import { bebasNeue } from "@/lib/fonts";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className={`flex flex-col ${bebasNeue.className}`}>
      {/* Display animation on desktop */}
      <MachineAnimation />

      {/* Display image on mobile */}
      <motion.div
        className="splash_image_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/machine-front.png"
          className="splash_image"
          alt="Cannabis pre-rolling machine"
        />
      </motion.div>

      <motion.div className="splash_tagline">
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3.2 }}
      >
        <Link href={"/about"} className="flex_center pb-16">
          <button className="button">Learn More</button>
        </Link>
      </motion.div>

      <motion.div
        id="newsletter"
        className="heading border-t"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 id="sign_up_form">Join Our Community</h2>
      </motion.div>

      <motion.div
        className="flex flex_center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <NewsletterForm />
      </motion.div>
    </main>
  );
}
