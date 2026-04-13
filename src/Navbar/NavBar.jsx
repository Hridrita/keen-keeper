import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
    const links = <>
    <NavLink to={"/"} className="btn">Home</NavLink>
    <NavLink to={"/Timeline"} className="btn">Timeline</NavLink>
    <NavLink to={"/Stats"} className="btn">Stats</NavLink>
    
    </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
            
          </div>
          <a className="btn btn-ghost text-xl flex items-center gap-0"><span className="font-bold">Keen</span>Keeper</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          
        </div>
        <div className="">
          {links}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
