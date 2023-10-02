"use client";

import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div className="border-t border-slate-900 flex flex-col items-center">
      {/* <ContactForm /> */}
      <div className="pt-8 pb-8 text-3xl text-center">Developed By </div>
      <span className="text-xl text-slate-400 pb-4">
        2023 © Perfect PreRolls. All rights reserved
      </span>
    </div>
  );
};

export default Footer;
