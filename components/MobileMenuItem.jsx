"use client";

import Link from "next/link";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const MobileMenuItem = ({ item, setIsOpen }) => {
  return (
    <div className="pr-4 pl-4 pt-2 pb-2 flex flex-col items-center">
      {item.page !== "Contact" ? (
        <Link
          href={item.path}
          key={item.page}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            className="text-3xl text-center w-full"
            whileTap={{ opacity: 50 }}
          >
            {item.page}
          </motion.span>
        </Link>
      ) : (
        <Dialog>
          <DialogTrigger className="text-3xl text-center w-full">
            Contact
          </DialogTrigger>
          <DialogContent
            className="flex justify-center sm:max-w-3/4 sm:h-4/5"
            id="dialog"
            setIsOpen={setIsOpen}
          >
            <ContactForm />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default MobileMenuItem;
