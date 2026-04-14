import React from "react";

const AllCard = ({ friend }) => {
  console.log(friend);
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm">
        <figure className="px-10 pt-10">
          <img src={friend.picture} alt="Person" className="rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{friend.name}</h2>
          <p className="text-[#64748bFF]">{friend.days_since_contact}d ago</p>

          <div className="flex justify-between gap-3">
            {friend.tags.map((tag, ind) => (
              <h2 key={ind}>{tag}</h2>
            ))}
          </div>
          <div className="card-actions">
            <button
              className={`btn btn-sm border-none font-bold rounded-full px-4 
    ${friend.status === "Almost Due" ? "bg-amber-500 text-white" : ""}
    ${friend.status === "Overdue" ? "bg-red-500 text-white" : ""}
    ${friend.status === "On-Track" ? "bg-[#1d3d33] text-white" : ""}
  `}
            >
              {friend.status}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCard;
