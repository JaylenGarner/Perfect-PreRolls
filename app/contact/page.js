"use client";

import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <Hero heading={"Contact Us"} image={"bg-pink-cannabis"} />
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ContactForm />
      </motion.div>
    </div>
  );
};

export default Contact;
