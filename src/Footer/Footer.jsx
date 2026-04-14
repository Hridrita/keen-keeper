import React from "react";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#244d3fFF] text-center p-8 space-y-6">
      <h2 className="text-white font-bold text-5xl">KeenKeeper</h2>
      <p className="text-white">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <h3 className="text-white">Social Links</h3>

      <div className="flex gap-2 justify-center ">
        <TbBrandInstagramFilled className="rounded-full bg-white" />
        <FaFacebookSquare className="rounded-full bg-white" />
        <RiTwitterXFill className="rounded-full bg-white"/>
      </div>

      <div className="border border-gray-600"></div>

      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-gray-400 text-sm">
          &copy; 2026 Digitools. All rights reserved.
        </p>

        <div className="flex gap-5">
          <h3 className="text-gray-400">Privacy Policy</h3>
          <h3 className="text-gray-400">Terms of Service</h3>
          <h3 className="text-gray-400">Cookies</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
