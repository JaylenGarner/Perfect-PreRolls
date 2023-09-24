"use client";

import Link from "next/link";

const Navigation = () => {
  return (
    <div className="w-full h-[160px] absolute top-0 flex items-center justify-center space-x-20">
      <Link href="/" passHref>
        <div className="flex items-center space-x-4">
          <img src="images/logo.png" className="w-24"></img>
        </div>
      </Link>

      <div className="flex space-x-6 text-3xl">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navigation;
