import React from "react";
import { NavLink } from "react-router";
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";

const NavBar = () => {
  const links = 
    <>
      <NavLink to={"/"} className={({isActive}) => `btn font-semibold ${isActive ? "text-white bg-[#244d3fFF]" : ""}`}><RiHome2Line />Home
      </NavLink>
      <NavLink to={"/Timeline"} className={({isActive}) => `btn font-semibold ${isActive ? "text-white bg-[#244d3fFF]" : ""}`}><IoTimeOutline />
        Timeline
      </NavLink>
      <NavLink to={"/Stats"} className={({isActive}) => `btn font-semibold ${isActive ? "text-white bg-[#244d3fFF]" : ""}`}><TfiStatsUp />
        Stats
      </NavLink>
    </>
  
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow mr-20 flex flex-col gap-2"
          >
           {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl flex items-center gap-0 ml-20"><span className="font-bold">Keen</span>Keeper</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 mr-20">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
