import React from "react";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#244d3fFF] text-center">
      <div className="container mx-auto p-6 md:p-12 space-y-6 md:space-y-8">
        <h2 className="text-white font-bold text-3xl md:text-5xl">KeenKeeper</h2>
        <p className="text-white text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <h3 className="text-white">Social Links</h3>

        <div className="flex gap-4 justify-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
            <TbBrandInstagramFilled className="text-xl text-black" />
          </div>

          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
            <FaFacebookSquare className="text-xl text-black" />
          </div>

          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
            <RiTwitterXFill className="text-xl text-black" />
          </div>
        </div>

        <div className="border border-gray-600"></div>

        <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            &copy; 2026 Digitools. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <h3 className="text-gray-400">Privacy Policy</h3>
            <h3 className="text-gray-400">Terms of Service</h3>
            <h3 className="text-gray-400">Cookies</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
