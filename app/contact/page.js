"use client";

import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Hero heading={"Contact Us"} image={"bg-pink-cannabis"} />
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
