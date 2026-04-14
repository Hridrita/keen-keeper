import React from "react";
import { FaPlus } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="container mx-auto my-20">
      <div>
        <h2 className="text-center font-bold text-5xl">
          Friends to keep close in your life
        </h2>
        <p className="max-w-lg mx-auto text-center text-[#64748bFF] my-4">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
      </div>
      <div className="flex justify-center">
        <button className="btn bg-[#244d3fFF] text-white">
          <FaPlus /> Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
        <div  className="bg-base-100 shadow-sm w-full text-center p-6 space-y-3">
          <h2 className="font-bold text-2xl text-[#244D3f]">10</h2>
          <p className="text-[#64748bFF]">Total Friends</p>
        </div>

        <div className="bg-base-100 shadow-sm w-full text-center p-6 space-y-3">
          <h2 className="font-bold text-2xl text-[#244D3f]">3</h2>
          <p className="text-[#64748bFF]">On Track</p>
        </div>

        <div className="bg-base-100 shadow-sm w-full text-center p-6 space-y-3">
          <h2 className="font-bold text-2xl text-[#244D3f]">6</h2>
          <p className="text-[#64748bFF]">Need Attention</p>
        </div>

        <div className="bg-base-100 shadow-sm w-full text-center p-6 space-y-3">
          <h2 className="font-bold text-2xl text-[#244D3f]">12</h2>
          <p className="text-[#64748bFF]">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
