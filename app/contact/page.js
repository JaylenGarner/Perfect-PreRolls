"use client";

import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Hero heading={"Contact Us"} image={"bg-purple-cannabis"} />
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
