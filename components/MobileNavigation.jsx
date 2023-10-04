"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { menuItems } from "@/lib/data";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <motion.div
      className="navigation_mobile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Link href="/" passHref>
        <div className="flex items-center space-x-4">
          <motion.img
            src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/logo.png"
            className="w-14"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.7 }}
          ></motion.img>
        </div>
      </Link>

      <FontAwesomeIcon
        icon={faBars}
        size="2xl"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <motion.div
          className="z-50 h-screen overflow-auto fixed top-0 right-0 w-1/2 flex flex-col bg-[#020817] pt-16"
          ref={menuRef}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
        >
          <FontAwesomeIcon
            icon={faXmark}
            size="xl"
            className="absolute right-4 top-4"
            onClick={() => setIsOpen(!isOpen)}
          />

          {menuItems.map((item) => {
            return (
              <MobileMenuItem
                item={item}
                setIsOpen={setIsOpen}
                key={item.page}
              />
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
};

export default MobileNavigation;
