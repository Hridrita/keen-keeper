import React, { useContext, useEffect, useState } from "react"; // useState import koro
import { friendContext } from "../Context/FriendContext";
import { FiPhone, FiMessageSquare, FiVideo, FiFilter } from "react-icons/fi";

const Timeline = () => {
  const { timeline } = useContext(friendContext);

  const [filterType, setFilterType] = useState("All");

  const [sortingType, setSortingType] = useState([]);

  const icons = {
    Call: <FiPhone className="text-pink-500" />,
    Text: <FiMessageSquare className="text-purple-400" />,
    Video: <FiVideo className="text-gray-600" />,
  };

  

  let filteredTimeline = timeline.filter((item) => {
    if (filterType === "All") return true;
    return item.type === filterType;
  });

  
      if(sortingType === 'Date'){
         filteredTimeline = [...filteredTimeline].sort((a, b) => new Date(b.date) - new Date(a.date));
        }

  

  return (
    <div className="container mx-auto mt-20 max-w-7xl px-4">
      <div>
        <h2 className="text-2xl font-bold">Timeline</h2>

        <div>
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-[#244d3fFF] text-white"
            >
              Sort By ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={()=> setSortingType('Date')}>
                <a>Date</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-4">
          <select
            className="select select-bordered select-sm w-full max-w-xs bg-white border-gray-400"
            onChange={(e) => setFilterType(e.target.value)}
            value={filterType}
          >
            <option value="All">All</option>
            <option value="Call">Calls</option>
            <option value="Text">Texts</option>
            <option value="Video">Videos</option>
          </select>
        </div>
      </div>

      {filteredTimeline.length > 0 ? (
        filteredTimeline.map((friend, ind) => (
          <div
            className="flex gap-6 items-center bg-white shadow-sm m-3 p-5 rounded-xl border border-gray-50"
            key={ind}
          >
            <div className="text-2xl bg-gray-50 p-3 rounded-full">
              {icons[friend.type]}
            </div>
            <div>
              <p className="text-lg">
                <span className="font-bold">{friend.type}</span> with{" "}
                <span className="text-gray-700">{friend.name}</span>
              </p>
              <p className="text-sm text-gray-400">{friend.date}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400 mt-10">
          No interactions found for {filterType}.
        </p>
      )}
    </div>
  );
};

export default Timeline;
