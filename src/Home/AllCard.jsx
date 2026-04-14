import React from "react";
import { Link } from "react-router";

const AllCard = ({ friend }) => {
  console.log(friend);
  return (
    <div className="w-full max-w-[320px]">
      <Link className="card bg-base-100 w-full shadow-sm space-y-3 rounded-2xl flex flex-col h-full">
        <figure className="px-10 pt-10">
          <img src={friend.picture} alt="Person" className="w-32 h-32 rounded-full object-cover" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{friend.name}</h2>
          <p className="text-[#64748bFF]">{friend.days_since_contact}d ago</p>

          <div className="flex justify-between gap-2">
            {
            friend.tags.map((tag, ind) => (
              <h2 key={ind} className="bg-[#dcfce7] text-[#166534] px-3 py-1 rounded-full font-semibold uppercase">{tag}</h2>
            ))
            }
          </div>
          <div className="card-actions">
            <button
              className={`btn btn-sm border-none font-bold rounded-full px-4 
    ${friend.status === "Almost Due" ? "bg-[#efad44FF] text-white" : ""}
    ${friend.status === "Overdue" ? "bg-[#ef4444FF] text-white" : ""}
    ${friend.status === "On-Track" ? "bg-[#244d3fFF] text-white" : ""}
  `}
            >
              {friend.status}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AllCard;
